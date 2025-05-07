// בס"ד
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetChavrutaThunk } from '../../redux/Requests/getChavrutaThunk';
import { setSelectedMatch, clearSelectedMatch, setFilter, clearFilters } from '../../redux/Requests/chavrutaSlice';
import {
    Container, Grid, Card, CardContent, CardActions, Typography, Button,
    Chip, Dialog, DialogTitle, DialogContent, DialogActions, CircularProgress,
    Box, FormControl, InputLabel, Select, MenuItem, TextField, IconButton,
    Divider, Paper, Tooltip, Badge, Avatar
} from '@mui/material';
import {
    Schedule as ScheduleIcon,
    Book as BookIcon,
    Subject as SubjectIcon,
    Videocam as VideocamIcon,
    Person as PersonIcon,
    FilterList as FilterListIcon,
    Clear as ClearIcon,
    Close as CloseIcon,
    Search as SearchIcon
} from '@mui/icons-material';
import './chavruta.css';
import ScheduleCalendar from '../schedule/newSchedule';
import { GetByIdThunk } from '../../redux/Person/getByIdThunk';

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

// קומפוננטה להצגת לוח זמנים
export const ScheduleDisplay = ({ schedules }) => {
    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                <ScheduleIcon sx={{ mr: 1 }} /> לוח זמנים אפשרי
            </Typography>
            <Grid container spacing={1}>
                {schedules.map((schedule, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper
                            elevation={2}
                            sx={{
                                p: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                backgroundColor: schedule.available ? '#e8f5e9' : '#ffebee'
                            }}
                        >
                            <Typography variant="subtitle1" fontWeight="bold">
                                יום {getDayInHebrew(schedule.dayInWeek)}
                            </Typography>
                            <Typography variant="body2">
                                {schedule.fromTime.substring(0, 5)} - {schedule.toTime.substring(0, 5)}
                            </Typography>
                            <Chip
                                size="small"
                                label={schedule.available ? "פנוי" : "תפוס"}
                                color={schedule.available ? "success" : "error"}
                                sx={{ mt: 1 }}
                            />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

// קומפוננטת סינון
export const FilterPanel = ({ onApplyFilters, onClearFilters, subjects, books, modes, days }) => {
    const [localFilters, setLocalFilters] = useState({
        subject: '',
        book: '',
        mode: '',
        day: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalFilters(prev => ({ ...prev, [name]: value }));
    };

    const handleApply = () => {
        // סינון רק ערכים שאינם ריקים
        const activeFilters = Object.entries(localFilters)
            .reduce((acc, [key, value]) => {
                if (value) acc[key] = value;
                return acc;
            }, {});

        onApplyFilters(activeFilters);
    };

    const handleClear = () => {
        setLocalFilters({
            subject: '',
            book: '',
            mode: '',
            day: ''
        });
        onClearFilters();
    };

    return (
        <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <FilterListIcon sx={{ mr: 1 }} />
                <Typography variant="h6">סינון חברותות</Typography>
            </Box>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <FormControl fullWidth size="small">
                        <InputLabel>נושא</InputLabel>
                        <Select
                            name="subject"
                            value={localFilters.subject}
                            onChange={handleChange}
                            label="נושא"
                        >
                            <MenuItem value="">הכל</MenuItem>
                            {subjects.map((subject, idx) => (
                                <MenuItem key={idx} value={subject}>{subject}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <FormControl fullWidth size="small">
                        <InputLabel>ספר</InputLabel>
                        <Select
                            name="book"
                            value={localFilters.book}
                            onChange={handleChange}
                            label="ספר"
                        >
                            <MenuItem value="">הכל</MenuItem>
                            {books.map((book, idx) => (
                                <MenuItem key={idx} value={book}>{book}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <FormControl fullWidth size="small">
                        <InputLabel>אופן לימוד</InputLabel>
                        <Select
                            name="mode"
                            value={localFilters.mode}
                            onChange={handleChange}
                            label="אופן לימוד"
                        >
                            <MenuItem value="">הכל</MenuItem>
                            {modes.map((mode, idx) => (
                                <MenuItem key={idx} value={mode}>{mode}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <FormControl fullWidth size="small">
                        <InputLabel>יום</InputLabel>
                        <Select
                            name="day"
                            value={localFilters.day}
                            onChange={handleChange}
                            label="יום"
                        >
                            <MenuItem value="">הכל</MenuItem>
                            {days.map((day, idx) => (
                                <MenuItem key={idx} value={day}>{getDayInHebrew(day)}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button
                    variant="outlined"
                    startIcon={<ClearIcon />}
                    onClick={handleClear}
                    sx={{ mr: 1 }}
                >
                    נקה
                </Button>
                <Button
                    variant="contained"
                    startIcon={<SearchIcon />}
                    onClick={handleApply}
                    color="primary"
                >
                    החל סינון
                </Button>
            </Box>
        </Paper>
    );
};

// הקומפוננטה הראשית
export const ChavrutaCards = ({ requestCode }) => {
    const dispatch = useDispatch();
    const { matches, loading, error, selectedMatch, filters } = useSelector(state => state.chavruta);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [searchCode, setSearchCode] = useState(requestCode || '');
    const person = useSelector(state=> state.people.person)
    // שליפת נתונים בטעינה ראשונית אם יש קוד בקשה
    useEffect(() => {
        if (requestCode) {
            dispatch(GetChavrutaThunk(requestCode));
        }
    }, [dispatch, requestCode]);

    const getById = async (id) => {
          dispatch(GetByIdThunk(id))
    }

    // פתיחת דיאלוג פרטי חברותא
    const handleOpenDetails = (match) => {
        dispatch(setSelectedMatch(match));
        setDialogOpen(true);
    };

    // סגירת דיאלוג
    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    // חיפוש לפי קוד
    const handleSearch = () => {
        if (searchCode) {
            dispatch(GetChavrutaThunk(searchCode));
        }
    };

    // החלת פילטרים
    const handleApplyFilters = (newFilters) => {
        dispatch(setFilter(newFilters));
    };

    // ניקוי פילטרים
    const handleClearFilters = () => {
        dispatch(clearFilters());
    };

    // חילוץ ערכים ייחודיים לסינון
    const getUniqueValues = (field) => {
        if (!matches || !matches.length) return [];

        if (field === 'day') {
            // חילוץ כל הימים מכל לוחות הזמנים
            const allDays = matches.flatMap(match =>
                match.schedules.map(schedule => schedule.dayInWeek)
            );
            return [...new Set(allDays)];
        }

        // חילוץ ערכים מההצעות
        return [...new Set(matches.map(match => match.offer[field]).filter(Boolean))];
    };

    // סינון החברותות לפי הפילטרים
    const filteredMatches = matches.filter(match => {
        // בדיקה אם החברותא עומדת בכל הפילטרים
        if (filters.subject && match.offer.subject !== filters.subject) return false;
        if (filters.book && match.offer.book !== filters.book) return false;
        if (filters.mode && match.offer.mode !== filters.mode) return false;
        if (filters.day) {
            // בדיקה אם יש לוח זמנים ביום המבוקש
            const hasDay = match.schedules.some(schedule => schedule.dayInWeek === filters.day);
            if (!hasDay) return false;
        }
        return true;
        return true;
    });

    // רשימות ערכים לסינון
    const subjects = getUniqueValues('subject');
    const books = getUniqueValues('book');
    const modes = getUniqueValues('mode');
    const days = getUniqueValues('day');

    return (
        <Container maxWidth="lg" className="chavruta-container">
            <Typography variant="h4" component="h1" gutterBottom align="center" className="page-title">
                מציאת חברותא
            </Typography>

            {/* חיפוש לפי קוד בקשה */}
            <Box sx={{ display: 'flex', mb: 3, justifyContent: 'center' }}>
                <TextField
                    label="קוד בקשה"
                    variant="outlined"
                    size="small"
                    value={searchCode}
                    onChange={(e) => setSearchCode(e.target.value)}
                    sx={{ width: { xs: '100%', sm: '300px' }, ml: 1 }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSearch}
                    startIcon={<SearchIcon />}
                >
                    חפש
                </Button>
            </Box>

            {/* הצגת שגיאה */}
            {error && (
                <Box sx={{ mt: 2, mb: 2 }}>
                    <Typography color="error" align="center">
                        {error}
                    </Typography>
                </Box>
            )}

            {/* טעינה */}
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <CircularProgress />
                </Box>
            )}

            {/* פאנל סינון */}
            {matches.length > 0 && (
                <FilterPanel
                    onApplyFilters={handleApplyFilters}
                    onClearFilters={handleClearFilters}
                    subjects={subjects}
                    books={books}
                    modes={modes}
                    days={days}
                />
            )}

            {/* הצגת תוצאות */}
            {!loading && filteredMatches.length > 0 ? (
                <>
                    <Typography variant="subtitle1" gutterBottom>
                        נמצאו {filteredMatches.length} חברותות מתאימות
                    </Typography>

                    <Grid container spacing={3}>
                        {filteredMatches.map((match, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    elevation={3}
                                    className="chavruta-card"
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                                        }
                                    }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                            <Typography variant="h6" component="div" className="card-title">
                                                חברותא #{match.offer.code}
                                            </Typography>
                                            <Avatar sx={{ bgcolor: 'primary.main' }}>
                                                <PersonIcon />
                                            </Avatar>
                                        </Box>

                                        <Divider sx={{ mb: 2 }} />

                                        <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                                            <SubjectIcon color="primary" sx={{ mr: 1 }} />
                                            <Typography variant="body1">
                                                <strong>נושא:</strong> {match.offer.subject}
                                            </Typography>
                                        </Box>

                                        {match.offer.book && (
                                            <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                                                <BookIcon color="primary" sx={{ mr: 1 }} />
                                                <Typography variant="body1">
                                                    <strong>ספר:</strong> {match.offer.book}
                                                </Typography>
                                            </Box>
                                        )}

                                        <Box sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                                            <VideocamIcon color="primary" sx={{ mr: 1 }} />
                                            <Typography variant="body1">
                                                <strong>אופן לימוד:</strong> {match.offer.mode}
                                            </Typography>
                                        </Box>

                                        <Box sx={{ mt: 2 }}>
                                            <Typography variant="subtitle2" gutterBottom>
                                                זמנים אפשריים:
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {match.schedules.slice(0, 3).map((schedule, idx) => (
                                                    <Chip
                                                        key={idx}
                                                        size="small"
                                                        label={`${getDayInHebrew(schedule.dayInWeek)} ${schedule.fromTime.substring(0, 5)}`}
                                                        color="primary"
                                                        variant="outlined"
                                                    />
                                                ))}
                                                {match.schedules.length > 3 && (
                                                    <Chip
                                                        size="small"
                                                        label={`+${match.schedules.length - 3}`}
                                                        color="default"
                                                        variant="outlined"
                                                    />
                                                )}
                                            </Box>
                                        </Box>
                                    </CardContent>

                                    <CardActions sx={{ justifyContent: 'center', p: 2 }}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => {
                                                handleOpenDetails(match)
                                                getById(match.offer.personId)
                                            }}
                                            fullWidth
                                        >
                                            צפה בפרטים
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </>
            ) : !loading && matches.length > 0 ? (
                <Typography variant="body1" align="center" sx={{ mt: 4 }}>
                    לא נמצאו חברותות העונות לקריטריוני הסינון
                </Typography>
            ) : !loading && !error ? (
                <Typography variant="body1" align="center" sx={{ mt: 4 }}>
                    הזן קוד בקשה כדי לחפש חברותות מתאימות
                </Typography>
            ) : null}

            {/* דיאלוג פרטי חברותא */}
            <Dialog

                open={dialogOpen}
                onClose={handleCloseDialog}
                maxWidth="md"
                fullWidth
                PaperProps={{
                    sx: {
                        borderRadius: 2,
                        p: 1
                    }
                }}
            >
                {selectedMatch && (
                    <>
                        <DialogTitle sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: '1px solid #e0e0e0',
                            pb: 1
                        }}>
                            <Typography variant="h5">
                                פרטי חברותא #{selectedMatch.offer.code}
                            </Typography>
                            <IconButton onClick={handleCloseDialog}>
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>

                        <DialogContent sx={{ mt: 2 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <Paper elevation={2} sx={{ p: 2 }}>
                                        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                                            <SubjectIcon sx={{ mr: 1 }} /> פרטי הלימוד
                                        </Typography>

                                        <Box sx={{ mt: 2 }}>
                                            <Typography variant="body1" gutterBottom>
                                                <strong>נושא:</strong> {selectedMatch.offer.subject}
                                            </Typography>

                                            {selectedMatch.offer.book && (
                                                <Typography variant="body1" gutterBottom>
                                                    <strong>ספר:</strong> {selectedMatch.offer.book}
                                                </Typography>
                                            )}

                                            <Typography variant="body1" gutterBottom>
                                                <strong>אופן לימוד:</strong> {selectedMatch.offer.mode}
                                            </Typography>
                                        </Box>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Paper elevation={2} sx={{ p: 2 }}>
                                        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
                                            <PersonIcon sx={{ mr: 1 }} /> פרטי המציע
                                        </Typography>

                                        <Box sx={{ mt: 2 }}>
                                            <Typography variant="body1" gutterBottom>
                                                {/* {persons?.map(x => x.personId==selectedMatch.offer.personId && x.firstName)} */}
                                                <strong>שם:</strong> {person.firstName} {person.lastName}
                                            </Typography>
                                            <Typography variant="body1" gutterBottom>
                                                <strong>גיל:</strong> {person.birthDate}
                                            </Typography>
                                            <Typography variant="body1" gutterBottom>
                                                <strong>מזהה:</strong> {selectedMatch.offer.personId}
                                            </Typography>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                sx={{ mt: 1 }}
                                                size="small"
                                            >
                                                יצירת קשר
                                            </Button>
                                        </Box>
                                    </Paper>
                                </Grid>

                                <Grid item xs={12}>
                                    <ScheduleDisplay schedules={selectedMatch.schedules} />
                                </Grid>
                                {/* <Grid item xs={12}>
                                    <ScheduleCalendar schedules={selectedMatch.schedules} />
                                </Grid> */}

                            </Grid>
                        </DialogContent>

                        <DialogActions sx={{ p: 2, borderTop: '1px solid #e0e0e0' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleCloseDialog}
                            >
                                סגור
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </Container >
    );
};

// export default ChavrutaCards;
