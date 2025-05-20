
// בס"ד
import React from 'react';
import { 
    Paper, Typography, Box, 
    Table, TableBody, TableCell, TableContainer, 
    TableHead, TableRow, Chip
} from '@mui/material';
import { AccessTime as AccessTimeIcon } from '@mui/icons-material';

// המרת יום באנגלית ליום בעברית
const getDayInHebrew = (day) => {
    const days = {
        'sun': 'ראשון',
        'mon': 'שני',
        'tue': 'שלישי',
        'wed': 'רביעי',
        'thu': 'חמישי',
        'fri': 'שישי',
        'shabbos': 'שבת'
    };
    return days[day] || day;
};

// יצירת מערך של שעות לתצוגה בלוח
const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 22; hour++) {
        slots.push(`${hour.toString().padStart(2, '0')}:00`);
    }
    return slots;
};

/**
 * Renders a weekly schedule calendar component displaying time slots and availability.
 * 
 * @component
 * @param {Object} props - Component properties
 * @param {Array} props.schedules - Array of schedule objects containing day, time, and availability information
 * @returns {React.ReactElement} A table-based weekly schedule visualization
 * 
 * @example
 * <ScheduleCalendar schedules={weeklySchedules} />
 */
const ScheduleCalendar = ({ schedules = [] }) => {
    // בדיקה למניעת רינדורים מיותרים
    const renderCount = React.useRef(0);
    React.useEffect(() => {
        renderCount.current += 1;
        console.log(`ScheduleCalendar rendered ${renderCount.current} times`);
    });
    
    const timeSlots = React.useMemo(() => generateTimeSlots(), []);
    const days = React.useMemo(() => ['sun', 'mon', 'tue', 'wed', 'thu', 'fri'], []);
    
    // בדיקה אם יש לוח זמנים ביום ובשעה מסוימים
    const getScheduleForTimeSlot = React.useCallback((day, timeSlot) => {
        // בדיקה אם יש מערכת שעות קיימת לזמן זה
        const existingSchedule = schedules.find(schedule => {
            const fromTime = schedule.fromTime.substring(0, 5);
            const toTime = schedule.toTime.substring(0, 5);
            const slotHour = parseInt(timeSlot.split(':')[0]);
            const fromHour = parseInt(fromTime.split(':')[0]);
            const toHour = parseInt(toTime.split(':')[0]);
            
            return schedule.dayInWeek === day && slotHour >= fromHour && slotHour < toHour;
        });
        
        // אם נמצאה מערכת, נחזיר אותה עם available=false (תפוס)
        if (existingSchedule) {
            return {
                ...existingSchedule,
                available: false // כאשר יש מערכת, היא תמיד תהיה תפוסה
            };
        }
        
        // אם לא נמצאה מערכת, נחזיר אובייקט ברירת מחדל עם available=true (פנוי)
        return {
            dayInWeek: day,
            fromTime: timeSlot,
            toTime: `${parseInt(timeSlot.split(':')[0]) + 1}:00`,
            available: true // ברירת מחדל - זמין
        };
    }, [schedules]);

    return (
        <Paper
            elevation={2}
            sx={{
                p: 3,
                mt: 3,
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                overflow: 'hidden'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 2,
                    pb: 2,
                    borderBottom: '1px solid',
                    borderColor: 'divider'
                }}
            >
                <AccessTimeIcon sx={{ mr: 1.5, color: 'primary.main', fontSize: 24 }} />
                <Typography variant="h6" fontWeight="500">לוח זמנים שבועי</Typography>
            </Box>
            
            <TableContainer sx={{ borderRadius: 1, overflow: 'hidden' }}>
                <Table aria-label="schedule table" size="small">
                    <TableHead>
                        <TableRow sx={{ bgcolor: 'primary.light' }}>
                            <TableCell 
                                sx={{ 
                                    fontWeight: 'bold', 
                                    color: 'primary.contrastText', 
                                    py: 1.5,
                                    width: '80px'
                                }}
                            >
                                שעה
                            </TableCell>
                            {days.map(day => (
                                <TableCell
                                    key={day}
                                    align="center"
                                    sx={{ 
                                        fontWeight: 'bold', 
                                        color: 'primary.contrastText', 
                                        py: 1.5 
                                    }}
                                >
                                    {getDayInHebrew(day)}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {timeSlots.map((timeSlot, index) => (
                            <TableRow
                                key={timeSlot}
                                sx={{
                                    bgcolor: index % 2 === 0 ? 'grey.50' : 'white',
                                    '&:hover': { bgcolor: 'action.hover' },
                                    transition: 'background-color 0.2s'
                                }}
                            >
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{
                                        fontWeight: '500',
                                        fontSize: '0.875rem',
                                        py: 1,
                                        borderLeft: '1px solid',
                                        borderColor: 'divider'
                                    }}
                                >
                                    {timeSlot}
                                </TableCell>
                                {days.map(day => {
                                    const schedule = getScheduleForTimeSlot(day, timeSlot);
                                    return (
                                        <TableCell
                                            key={`${day}-${timeSlot}`}
                                            align="center"
                                            sx={{
                                                py: 1,
                                                borderLeft: day !== 'fri' ? '1px solid' : 'none',
                                                borderColor: 'divider'
                                            }}
                                        >
                                            <Chip
                                                label={schedule.available ? "פנוי" : "תפוס"}
                                                color={schedule.available ? "success" : "error"}
                                                size="small"
                                                variant="outlined"
                                                sx={{
                                                    fontWeight: '500',
                                                    fontSize: '0.75rem',
                                                    height: '24px',
                                                    minWidth: '60px',
                                                    borderRadius: '12px',
                                                    '&.MuiChip-colorSuccess': {
                                                        backgroundColor: 'rgba(46, 125, 50, 0.1)'
                                                    },
                                                    '&.MuiChip-colorError': {
                                                        backgroundColor: 'rgba(211, 47, 47, 0.1)'
                                                    }
                                                }}
                                            />
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default ScheduleCalendar;