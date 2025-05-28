      // import { useNavigate, useParams } from "react-router-dom";
      // import { useEffect, useRef, useState } from "react";
      // import { useDispatch, useSelector } from "react-redux";
      // import * as React from 'react';
      // import "./schedule.css";
      // import { AddScheduleThunk } from "../../redux/Schedule/addScheduleThunk";
      // import { GetScheduleByIdThunk } from "../../redux/Schedule/getScheduleByIdThunk";
      // import { editSchedule } from "../../redux/Schedule/scheduleSlice";
      // import { UpdateScheduleThunk } from "../../redux/Schedule/updateScheduleThunk";
      // import { ScheduleDisplay } from "../chavruta/chavruta";

      // // Import all Material UI components from the root package
      // import {
      //   Box,
      //   Button,
      //   Container,
      //   Typography,
      //   Paper,
      //   Table,
      //   TableBody,
      //   TableCell,
      //   TableContainer,
      //   TableHead,
      //   TableRow,
      //   TextField,
      //   Dialog,
      //   DialogActions,
      //   DialogContent,
      //   DialogTitle,
      //   IconButton,
      //   Fab,
      //   Grid,
      //   Card,
      //   CardContent,
      //   CardActions,
      //   Divider,
      //   AppBar,
      //   Toolbar,
      //   Chip,
      //   Snackbar,
      //   Alert,
      //   FormControl,
      //   InputLabel,
      //   Select,
      //   MenuItem,
      //   FormControlLabel,
      //   Switch,
      //   CircularProgress
      // } from "@mui/material";

      // // Icons
      // import AddIcon from '@mui/icons-material/Add';
      // import EditIcon from '@mui/icons-material/Edit';
      // import DeleteIcon from '@mui/icons-material/Delete';
      // import CloseIcon from '@mui/icons-material/Close';
      // import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
      // import AccessTimeIcon from '@mui/icons-material/AccessTime';
      // import EventAvailableIcon from '@mui/icons-material/EventAvailable';
      // import EventBusyIcon from '@mui/icons-material/EventBusy';
      // import HomeIcon from '@mui/icons-material/Home';
      // import LanguageIcon from '@mui/icons-material/Language';
      // import { useCallback } from "react";

      // export const Schedule = () => {
      //   const param = useParams();
      //   const dispatch = useDispatch();
      //   const navigate = useNavigate();
  
      //   // State
      //   const [open, setOpen] = useState(false);
      //   const [isEditMode, setIsEditMode] = useState(false);
      //   const [language, setLanguage] = useState('en'); // 'en' for English, 'he' for Hebrew
      //   const [loading, setLoading] = useState(false);
      //   const [snackbar, setSnackbar] = useState({
      //     open: false,
      //     message: '',
      //     severity: 'success'
      //   });
  
      //   // Redux state
      //   const sch = useSelector(s => s.schedule.schedule);
      //   const scheduleArr = useSelector(state => state.schedule.schedules);
  
      //   // Local state
      //   const [schedule, setSchedule] = useState({ 
      //     code: sch.code, 
      //     dayInWeek: sch.day, 
      //     fromTime: sch.fromTime, 
      //     toTime: sch.toTime, 
      //     available: sch.available, 
      //     personId: param.id 
      //   });
  
      //   // Translations
      //   const translations = {
      //     en: {
      //       weeklySchedule: "Weekly Schedule",
      //       addTimeSlot: "Add Time Slot",
      //       day: "Day",
      //       fromTime: "From Time",
      //       toTime: "To Time",
      //       available: "Available",
      //       update: "Update",
      //       add: "Add",
      //       cancel: "Cancel",
      //       back: "Back",
      //       sunday: "Sunday",
      //       monday: "Monday",
      //       tuesday: "Tuesday",
      //       wednesday: "Wednesday",
      //       thursday: "Thursday",
      //       friday: "Friday",
      //       saturday: "Saturday",
      //       shabbos: "Shabbos",
      //       timeSlotAdded: "Time slot added successfully!",
      //       timeSlotUpdated: "Time slot updated successfully!",
      //       loading: "Loading...",
      //       sun: "Sun",
      //       mon: "Mon",
      //       tue: "Tue",
      //       wed: "Wed",
      //       thu: "Thu",
      //       fri: "Fri",
      //       shabbos: "Sat",
      //       availableTime: "Available Time",
      //       unavailableTime: "Unavailable Time"
      //     },
      //     he: {
      //       weeklySchedule: "מערכת שבועית",
      //       addTimeSlot: "הוסף משבצת זמן",
      //       day: "יום",
      //       fromTime: "משעה",
      //       toTime: "עד שעה",
      //       available: "זמין",
      //       update: "עדכון",
      //       add: "הוספה",
      //       cancel: "ביטול",
      //       back: "חזרה",
      //       sunday: "יום ראשון",
      //       monday: "יום שני",
      //       tuesday: "יום שלישי",
      //       wednesday: "יום רביעי",
      //       thursday: "יום חמישי",
      //       friday: "יום שישי",
      //       saturday: "שבת",
      //       shabbos: "שבת",
      //       timeSlotAdded: "משבצת הזמן נוספה בהצלחה!",
      //       timeSlotUpdated: "משבצת הזמן עודכנה בהצלחה!",
      //       loading: "טוען...",
      //       sun: "א'",
      //       mon: "ב'",
      //       tue: "ג'",
      //       wed: "ד'",
      //       thu: "ה'",
      //       fri: "ו'",
      //       shabbos: "ש'",
      //       availableTime: "זמן פנוי",
      //       unavailableTime: "זמן לא פנוי"
      //     }
      //   };

      //   const t = translations[language];
  
      //   // Day mapping
      //   const dayMapping = {
      //     sun: language === 'en' ? t.sunday : t.sunday,
      //     mon: language === 'en' ? t.monday : t.monday,
      //     tue: language === 'en' ? t.tuesday : t.tuesday,
      //     wed: language === 'en' ? t.wednesday : t.wednesday,
      //     thu: language === 'en' ? t.thursday : t.thursday,
      //     fri: language === 'en' ? t.friday : t.friday,
      //     shabbos: language === 'en' ? t.shabbos : t.shabbos,
      //   };
  
      //   const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'shabbos'];
  
      //   // Functions
      //   const getSchedule = async () => {
      //     setLoading(true);
      //     try {
      //       await dispatch(GetScheduleByIdThunk(param.id));
      //       setSnackbar({
      //         open: true,
      //         message: "Schedule loaded successfully",
      //         severity: "success"
      //       });
      //     } catch (error) {
      //       setSnackbar({
      //         open: true,
      //         message: "Failed to load schedule",
      //         severity: "error"
      //       });
      //     } finally {
      //       setLoading(false);
      //     }
      //   };
  
      //   const addSchedule = useCallback(async () => {
      //   if (!schedule.dayInWeek || !schedule.fromTime || !schedule.toTime) {
      //     setSnackbar({
      //       open: true,
      //       message: "Please fill all required fields",
      //       severity: "warning"
      //     });
      //     return;
      //   }
  
      //   setLoading(true);
      //   try {
      //     await dispatch(AddScheduleThunk(schedule));
      //     setOpen(false);
      //     setSnackbar({
      //       open: true,
      //       message: t.timeSlotAdded,
      //       severity: "success"
      //     });
      //   } catch (error) {
      //     setSnackbar({
      //       open: true,
      //       message: "Failed to add time slot",
      //       severity: "error"
      //     });
      //   } finally {
      //     setLoading(false);
      //   }
      // }, [dispatch, schedule, setLoading, setOpen, setSnackbar, t.timeSlotAdded]);

      // const updateSchedule = useCallback(async () => {
      //   if (!schedule.dayInWeek || !schedule.fromTime || !schedule.toTime) {
      //     setSnackbar({
      //       open: true,
      //       message: "Please fill all required fields",
      //       severity: "warning"
      //     });
      //     return;
      //   }
  
      //   setLoading(true);
      //   try {
      //     dispatch(editSchedule(schedule));
      //     await dispatch(UpdateScheduleThunk({ code: schedule.code, schedule: schedule }));
      //     setOpen(false);
      //     setSnackbar({
      //       open: true,
      //       message: t.timeSlotUpdated,
      //       severity: "success"
      //     });
      //   } catch (error) {
      //     setSnackbar({
      //       open: true,
      //       message: "Failed to update time slot",
      //       severity: "error"
      //     });
      //   } finally {
      //     setLoading(false);
      //   }
      // }, [dispatch, editSchedule, schedule, setLoading, setOpen, setSnackbar, t.timeSlotUpdated]);
  
  
  
      //   const formatTime = (timeString) => {
      //     if (!timeString) return '';
    
      //     try {
      //       // Remove seconds if present
      //       if (timeString.includes(':')) {
      //         const [hours, minutes] = timeString.split(':');
      //         return `${hours}:${minutes}`;
      //       }
      //     } catch (error) {
      //       console.error("Error formatting time:", error);
      //     }
    
      //     return timeString;
      //   };
  
      //   const handleLanguageChange = () => {
      //     setLanguage(language === 'en' ? 'he' : 'en');
      //   };
  
      //   // Effects
      //   useEffect(() => {
      //     getSchedule();
      //   }, []);
  
      //   return (
      //     <div style={{ direction: language === 'he' ? 'rtl' : 'ltr' }}>
      //       <AppBar position="static" style={{ 
      //         background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      //         marginBottom: '20px'
      //       }}>
      //         <Toolbar>
      //           <Typography variant="h6" style={{ flexGrow: 1 }}>
      //             {t.weeklySchedule}
      //           </Typography>
          
      //           <Button color="inherit" onClick={handleLanguageChange} startIcon={<LanguageIcon />}>
      //             {language === 'en' ? 'עברית' : 'English'}
      //           </Button>
          
      //           <IconButton color="inherit" onClick={() => navigate(-1)}>
      //             <HomeIcon />
      //           </IconButton>
      //         </Toolbar>
      //       </AppBar>
      
      //       <Container maxWidth="lg" style={{ marginTop: '20px', marginBottom: '40px' }}>
      //         {loading ? (
      //           <Box style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
      //             <CircularProgress />
      //             <Typography variant="body1" style={{ marginTop: '10px' }}>
      //               {t.loading}
      //             </Typography>
      //           </Box>
      //         ) : (
      //           <>
      //             <Paper style={{ padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
      //               <Box style={{ 
      //                 display: 'flex', 
      //                 justifyContent: 'space-between', 
      //                 alignItems: 'center', 
      //                 marginBottom: '20px' 
      //               }}>
      //                 <Typography variant="h6">
      //                   {t.weeklySchedule}
      //                 </Typography>
                
      //                 <Button
      //                   variant="contained"
      //                   color="primary"
      //                   startIcon={<AddIcon />}
      //                   onClick={() => {
      //                     setIsEditMode(false);
      //                     setSchedule({ 
      //                       personId: param.id, 
      //                       dayInWeek: '', 
      //                       fromTime: '', 
      //                       toTime: '', 
      //                       available: true 
      //                     });
      //                     setOpen(true);
      //                   }}
      //                 >
      //                   {t.addTimeSlot}
      //                 </Button>
      //               </Box>
              
      //               <TableContainer>
      //                 <Table aria-label="schedule table">
      //                   <TableHead>
      //                     <TableRow style={{ backgroundColor: '#f5f5f5' }}>
      //                       <TableCell align="center">{t.day}</TableCell>
      //                       <TableCell align="center">{t.fromTime}</TableCell>
      //                       <TableCell align="center">{t.toTime}</TableCell>
      //                       <TableCell align="center">{t.available}</TableCell>
      //                       <TableCell align="center">Actions</TableCell>
      //                     </TableRow>
      //                   </TableHead>
      //                   <TableBody>
      //                     {scheduleArr?.map((item) => (
      //                       <TableRow key={item.code} hover>
      //                         <TableCell align="center">
      //                           {dayMapping[item.dayInWeek]}
      //                         </TableCell>
      //                         <TableCell align="center">
      //                           {formatTime(item.fromTime)}
      //                         </TableCell>
      //                         <TableCell align="center">
      //                           {formatTime(item.toTime)}
      //                         </TableCell>
      //                         <TableCell align="center">
      //                           <Chip 
      //                             label={item.available ? t.availableTime : t.unavailableTime}
      //                             color={item.available ? "success" : "error"}
      //                             variant="outlined"
      //                             size="small"
      //                           />
      //                         </TableCell>
      //                         <TableCell align="center">
      //                           <IconButton 
      //                             color="secondary" 
      //                             aria-label="edit"
      //                             onClick={() => {
      //                               setSchedule(item);
      //                               setIsEditMode(true);
      //                               setOpen(true);
      //                             }}
      //                           >
      //                             <EditIcon />
      //                           </IconButton>
      //                         </TableCell>
      //                       </TableRow>
      //                     ))}
      //                   </TableBody>
      //                 </Table>
      //               </TableContainer>
      //             </Paper>
            
      //             <Grid container spacing={3}>
      //               <Grid item xs={12}>
      //                 <ScheduleDisplay schedules={scheduleArr} showBookingButton={false} />
      //               </Grid>
      //             </Grid>
            
      //             <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      //               <Button
      //                 variant="contained"
      //                 color="primary"
      //                 startIcon={<HomeIcon />}
      //                 onClick={() => navigate(-1)}
      //               >
      //                 {t.back}
      //               </Button>
      //             </Box>
      //           </>
      //         )}
      //       </Container>
      
      //       {/* Dialog for adding/editing time slots */}
      //       <Dialog
      //         open={open}
      //         onClose={() => setOpen(false)}
      //         maxWidth="sm"
      //         fullWidth
      //       >
      //         <DialogTitle style={{ 
      //           backgroundColor: '#2196F3',
      //           color: 'white'
      //         }}>
      //           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      //             <Typography variant="h6">
      //               {isEditMode ? "Edit Time Slot" : "Add Time Slot"}
      //             </Typography>
      //             <IconButton 
      //               onClick={() => setOpen(false)}
      //               style={{ color: 'white' }}
      //             >
      //               <CloseIcon />
      //             </IconButton>
      //           </div>
      //         </DialogTitle>
        
      //         <DialogContent style={{ paddingTop: '20px' }}>
      //           <Grid container spacing={2}>
      //             <Grid item xs={12}>
      //               <FormControl fullWidth>
      //                 <InputLabel id="day-select-label">{t.day}</InputLabel>
      //                 <InputLabel id="day-select-label">{t.day}</InputLabel>
      //                 <Select
      //                   labelId="day-select-label"
      //                   id="day-select"
      //                   value={schedule.dayInWeek}
      //                   label={t.day}
      //                   onChange={(e) => setSchedule({ ...schedule, dayInWeek: e.target.value })}
      //                 >
      //                   {days.map(day => (
      //                     <MenuItem value={day} key={day}>{dayMapping[day]}</MenuItem>
      //                   ))}
      //                 </Select>
      //               </FormControl>
      //             </Grid>
            
      //             <Grid item xs={12} md={6}>
      //               <TextField
      //                 label={t.fromTime}
      //                 type="time"
      //                 value={formatTime(schedule.fromTime)}
      //                 onChange={(e) => setSchedule({ ...schedule, fromTime: e.target.value + ":00" })}
      //                 InputLabelProps={{
      //                   shrink: true,
      //                 }}
      //                 inputProps={{
      //                   step: 300, // 5 min
      //                 }}
      //                 fullWidth
      //               />
      //             </Grid>
            
      //             <Grid item xs={12} md={6}>
      //               <TextField
      //                 label={t.toTime}
      //                 type="time"
      //                 value={formatTime(schedule.toTime)}
      //                 onChange={(e) => setSchedule({ ...schedule, toTime: e.target.value + ":00" })}
      //                 InputLabelProps={{
      //                   shrink: true,
      //                 }}
      //                 inputProps={{
      //                   step: 300, // 5 min
      //                 }}
      //                 fullWidth
      //               />
      //             </Grid>
            
      //             <Grid item xs={12}>
      //               <FormControlLabel
      //                 control={
      //                   <Switch
      //                     checked={schedule.available}
      //                     onChange={(e) => setSchedule({ ...schedule, available: e.target.checked })}
      //                     color="success"
      //                   />
      //                 }
      //                 label={t.available}
      //               />
      //             </Grid>
      //           </Grid>
      //         </DialogContent>
        
      //         <DialogActions style={{ padding: '16px' }}>
      //           <Button
      //             variant="outlined"
      //             onClick={() => setOpen(false)}
      //           >
      //             {t.cancel}
      //           </Button>
          
      //           <Button
      //             variant="contained"
      //             color="primary"
      //             onClick={isEditMode ? updateSchedule : addSchedule}
      //             disabled={loading}
      //             startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
      //           >
      //             {loading ? t.loading : isEditMode ? t.update : t.add}
      //           </Button>
      //         </DialogActions>
      //       </Dialog>
      
      //       {/* Snackbar for notifications */}
      //       <Snackbar
      //         open={snackbar.open}
      //         autoHideDuration={6000}
      //         onClose={() => setSnackbar({ ...snackbar, open: false })}
      //         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      //       >
      //         <Alert 
      //           onClose={() => setSnackbar({ ...snackbar, open: false })} 
      //           severity={snackbar.severity}
      //           variant="filled"
      //         >
      //           {snackbar.message}
      //         </Alert>
      //       </Snackbar>
      
      //       {/* Floating Action Button for adding time slots */}
      //       <Fab
      //         color="secondary"
      //         aria-label={t.addTimeSlot}
      //         style={{
      //           position: 'fixed',
      //           bottom: '24px',
      //           right: language === 'he' ? 'auto' : '24px',
      //           left: language === 'he' ? '24px' : 'auto',
      //           boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      //         }}
      //         onClick={() => {
      //           setIsEditMode(false);
      //           setSchedule({ 
      //             personId: param.id, 
      //             dayInWeek: '', 
      //             fromTime: '', 
      //             toTime: '', 
      //             available: true 
      //           });
      //           setOpen(true);
      //         }}
      //       >
      //         <AddIcon />
      //       </Fab>
      //     </div>
      //   );
      // };



//**************** */
// In the name of God
// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import * as React from 'react';
// import "./schedule.css";
// import { AddScheduleThunk } from "../../redux/Schedule/addScheduleThunk";
// import { GetScheduleByIdThunk } from "../../redux/Schedule/getScheduleByIdThunk";
// import { editSchedule } from "../../redux/Schedule/scheduleSlice";
// import { UpdateScheduleThunk } from "../../redux/Schedule/updateScheduleThunk";
// import { ScheduleDisplay } from "../chavruta/chavruta";

// // Material UI imports
// import {
//   Box,
//   Button,
//   Container,
//   Typography,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TextField,
//   IconButton,
//   Fab,
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Divider,
//   AppBar,
//   Toolbar,
//   Chip,
//   Snackbar,
//   Alert,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   FormControlLabel,
//   Switch,
//   CircularProgress,
//   Backdrop,
//   Slide,
//   Stack,
//   Badge,
//   LinearProgress,
//   Tooltip,
//   alpha,
//   useTheme,
//   useMediaQuery,
//   Zoom,
//   Grow
// } from "@mui/material";

// // Icons
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import CloseIcon from '@mui/icons-material/Close';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import EventAvailableIcon from '@mui/icons-material/EventAvailable';
// import EventBusyIcon from '@mui/icons-material/EventBusy';
// import HomeIcon from '@mui/icons-material/Home';
// import LanguageIcon from '@mui/icons-material/Language';
// import ScheduleIcon from '@mui/icons-material/Schedule';
// import TodayIcon from '@mui/icons-material/Today';
// import WatchLaterIcon from '@mui/icons-material/WatchLater';
// import StarIcon from '@mui/icons-material/Star';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// // Styled components
// import { styled, keyframes } from '@mui/material/styles';
// import { useCallback } from "react";

// // Animations
// const float = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-10px); }
//   100% { transform: translateY(0px); }
// `;

// const shimmer = keyframes`
//   0% { background-position: -468px 0; }
//   100% { background-position: 468px 0; }
// `;

// const pulse = keyframes`
//   0% { transform: scale(1); }
//   50% { transform: scale(1.05); }
//   100% { transform: scale(1); }
// `;

// const gradientShift = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;

// // Color palette for Schedule theme
// const scheduleColors = {
//   primary: {
//     main: '#2E5266', // Deep teal blue
//     light: '#4A7C95',
//     dark: '#1A3A4A',
//     contrastText: '#ffffff'
//   },
//   secondary: {
//     main: '#D4A574', // Warm gold
//     light: '#E6C299',
//     dark: '#B8935F',
//     contrastText: '#1A3A4A'
//   },
//   accent: {
//     main: '#8B4513', // Saddle brown
//     light: '#A0522D',
//     dark: '#654321'
//   },
//   background: {
//     default: '#F8F6F0', // Warm cream
//     paper: '#FFFFFF',
//     elevated: '#FEFCF7'
//   },
//   text: {
//     primary: '#2C3E50',
//     secondary: '#5D6D7E',
//     disabled: '#BDC3C7'
//   },
//   success: '#27AE60',
//   warning: '#F39C12',
//   error: '#E74C3C',
//   info: '#3498DB'
// };

// // Styled components with Schedule theme
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   fontWeight: '600',
//   fontSize: '0.95rem',
//   padding: theme.spacing(2.5),
//   borderBottom: `2px solid ${alpha(scheduleColors.primary.light, 0.1)}`,
//   position: 'relative',
//   '&.MuiTableCell-head': {
//     background: `linear-gradient(135deg, ${scheduleColors.primary.main} 0%, ${scheduleColors.primary.dark} 100%)`,
//     color: scheduleColors.primary.contrastText,
//     fontWeight: 'bold',
//     fontSize: '1.1rem',
//     textShadow: '0 1px 2px rgba(0,0,0,0.1)',
//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       right: 0,
//       bottom: 0,
//       background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
//       animation: `${shimmer} 3s infinite`
//     }
//   }
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//   position: 'relative',
//   '&:nth-of-type(odd)': {
//     backgroundColor: alpha(scheduleColors.secondary.light, 0.03),
//   },
//   '&:hover': {
//     backgroundColor: alpha(scheduleColors.secondary.main, 0.08),
//     transform: 'translateY(-3px) scale(1.01)',
//     boxShadow: `0 8px 25px ${alpha(scheduleColors.primary.main, 0.15)}`,
//     cursor: 'pointer',
//     '& .MuiTableCell-root': {
//       color: scheduleColors.primary.dark,
//       fontWeight: '600'
//     }
//   },
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     bottom: 0,
//     width: '4px',
//     background: `linear-gradient(to bottom, ${scheduleColors.secondary.main}, ${scheduleColors.accent.main})`,
//     transform: 'scaleY(0)',
//     transition: 'transform 0.3s ease',
//   },
//   '&:hover::before': {
//     transform: 'scaleY(1)',
//   }
// }));

// const StyledFab = styled(Fab)(({ theme }) => ({
//   background: `linear-gradient(135deg, ${scheduleColors.secondary.main} 0%, ${scheduleColors.accent.main} 100%)`,
//   color: scheduleColors.secondary.contrastText,
//   boxShadow: `0 6px 20px ${alpha(scheduleColors.secondary.main, 0.4)}`,
//   transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//   position: 'relative',
//   overflow: 'hidden',
//   '&:hover': {
//     transform: 'translateY(-4px) scale(1.1)',
//     boxShadow: `0 12px 30px ${alpha(scheduleColors.secondary.main, 0.6)}`,
//     background: `linear-gradient(135deg, ${scheduleColors.accent.main} 0%, ${scheduleColors.secondary.main} 100%)`,
//   },
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: '-100%',
//     width: '100%',
//     height: '100%',
//     background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
//     transition: 'left 0.5s',
//   },
//   '&:hover::before': {
//     left: '100%',
//   }
// }));

// const GradientButton = styled(Button)(({ theme }) => ({
//   background: `linear-gradient(135deg, ${scheduleColors.secondary.main} 0%, ${scheduleColors.accent.main} 100%)`,
//   color: scheduleColors.secondary.contrastText,
//   fontWeight: 'bold',
//   fontSize: '1rem',
//   padding: theme.spacing(1.5, 4),
//   borderRadius: '50px',
//   transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//   boxShadow: `0 6px 20px ${alpha(scheduleColors.secondary.main, 0.3)}`,
//   textTransform: 'none',
//   position: 'relative',
//   overflow: 'hidden',
//   '&:hover': {
//     boxShadow: `0 8px 25px ${alpha(scheduleColors.secondary.main, 0.5)}`,
//     transform: 'translateY(-2px)',
//     background: `linear-gradient(135deg, ${scheduleColors.accent.main} 0%, ${scheduleColors.secondary.main} 100%)`,
//   },
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: '-100%',
//     width: '100%',
//     height: '100%',
//     background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
//     transition: 'left 0.5s',
//   },
//   '&:hover::before': {
//     left: '100%',
//   }
// }));

// const ModernAppBar = styled(AppBar)(({ theme }) => ({
//   background: `linear-gradient(135deg, ${scheduleColors.primary.main} 0%, ${scheduleColors.primary.dark} 50%, ${scheduleColors.accent.main} 100%)`,
//   backgroundSize: '200% 200%',
//   animation: `${gradientShift} 8s ease infinite`,
//   backdropFilter: 'blur(10px)',
//   borderBottom: `1px solid ${alpha(scheduleColors.secondary.main, 0.2)}`,
//   boxShadow: `0 4px 20px ${alpha(scheduleColors.primary.main, 0.3)}`,
// }));

// const FloatingActionButton = styled(Fab)(({ theme }) => ({
//   position: 'fixed',
//   bottom: theme.spacing(3),
//   right: theme.spacing(3),
//   background: `linear-gradient(135deg, ${scheduleColors.secondary.main} 0%, ${scheduleColors.accent.main} 100%)`,
//   color: scheduleColors.secondary.contrastText,
//   width: '70px',
//   height: '70px',
//   boxShadow: `0 8px 25px ${alpha(scheduleColors.secondary.main, 0.4)}`,
//   transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//   animation: `${pulse} 2s infinite`,
//   zIndex: 1000,
//   '&:hover': {
//     transform: 'scale(1.1) rotate(10deg)',
//     boxShadow: `0 12px 35px ${alpha(scheduleColors.secondary.main, 0.6)}`,
//     animation: 'none',
//   }
// }));

// const StatsCard = styled(Card)(({ theme }) => ({
//   background: `linear-gradient(135deg, ${scheduleColors.background.paper} 0%, ${scheduleColors.background.elevated} 100%)`,
//   borderRadius: '16px',
//   padding: theme.spacing(2),
//   boxShadow: `0 6px 20px ${alpha(scheduleColors.primary.main, 0.08)}`,
//   border: `1px solid ${alpha(scheduleColors.secondary.light, 0.2)}`,
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     transform: 'translateY(-4px)',
//     boxShadow: `0 12px 30px ${alpha(scheduleColors.primary.main, 0.15)}`,
//   }
// }));

// const ModernDialog = styled(Box)(({ theme }) => ({
//   position: 'fixed',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: '90%',
//   maxWidth: '600px',
//   background: `linear-gradient(145deg, ${scheduleColors.background.paper} 0%, ${scheduleColors.background.elevated} 100%)`,
//   borderRadius: '24px',
//   boxShadow: `0 25px 50px ${alpha(scheduleColors.primary.main, 0.3)}`,
//   border: `1px solid ${alpha(scheduleColors.secondary.main, 0.2)}`,
//   overflow: 'hidden',
//   zIndex: 1300,
// }));

// const CardHeader = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(3),
//   background: `linear-gradient(135deg, ${scheduleColors.primary.main} 0%, ${scheduleColors.primary.dark} 100%)`,
//   color: scheduleColors.primary.contrastText,
//   position: 'relative',
//   overflow: 'hidden',
//   transition: 'all 0.3s ease',
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     top: '-50%',
//     right: '-50%',
//     width: '200%',
//     height: '200%',
//     background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
//     animation: `${float} 6s ease-in-out infinite`,
//   }
// }));

// export const Schedule = () => {
//   const param = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
//   // State
//   const [open, setOpen] = useState(false);
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [language, setLanguage] = useState('en');
//   const [loading, setLoading] = useState(false);
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: '',
//     severity: 'success'
//   });
  
//   // Redux state
//   const sch = useSelector(s => s.schedule.schedule);
//   const scheduleArr = useSelector(state => state.schedule.schedules);
  
//   // Local state
//   const [schedule, setSchedule] = useState({ 
//     code: sch.code, 
//     dayInWeek: sch.day, 
//     fromTime: sch.fromTime, 
//     toTime: sch.toTime, 
//     available: sch.available, 
//     personId: param.id 
//   });
  
//   // Translations
//   const translations = {
//     en: {
//       weeklySchedule: "Weekly Schedule",
//       addTimeSlot: "Add Time Slot",
//       day: "Day",
//       fromTime: "From Time",
//       toTime: "To Time",
//       available: "Available",
//       update: "Update",
//       add: "Add",
//       cancel: "Cancel",
//       back: "Back",
//       sunday: "Sunday",
//       monday: "Monday",
//       tuesday: "Tuesday",
//       wednesday: "Wednesday",
//       thursday: "Thursday",
//       friday: "Friday",
//       saturday: "Saturday",
//       shabbos: "Shabbos",
//       timeSlotAdded: "Time slot added successfully!",
//       timeSlotUpdated: "Time slot updated successfully!",
//       loading: "Loading...",
//       sun: "Sun",
//       mon: "Mon",
//       tue: "Tue",
//       wed: "Wed",
//       thu: "Thu",
//       fri: "Fri",
//       shabbos: "Sat",
//       availableTime: "Available Time",
//       unavailableTime: "Unavailable Time",
//       totalSlots: "Total Slots",
//       availableSlots: "Available Slots",
//       busySlots: "Busy Slots",
//       actions: "Actions"
//     },
//     he: {
//       weeklySchedule: "מערכת שבועית",
//       addTimeSlot: "הוסף משבצת זמן",
//       day: "יום",
//       fromTime: "משעה",
//       toTime: "עד שעה",
//       available: "זמין",
//       update: "עדכון",
//       add: "הוספה",
//       cancel: "ביטול",
//       back: "חזרה",
//       sunday: "יום ראשון",
//       monday: "יום שני",
//       tuesday: "יום שלישי",
//       wednesday: "יום רביעי",
//       thursday: "יום חמישי",
//       friday: "יום שישי",
//       saturday: "שבת",
//       shabbos: "שבת",
//       timeSlotAdded: "משבצת הזמן נוספה בהצלחה!",
//       timeSlotUpdated: "משבצת הזמן עודכנה בהצלחה!",
//       loading: "טוען...",
//       sun: "א'",
//       mon: "ב'",
//       tue: "ג'",
//       wed: "ד'",
//       thu: "ה'",
//       fri: "ו'",
//       shabbos: "ש'",
//       availableTime: "זמן פנוי",
//       unavailableTime: "זמן לא פנוי",
//       totalSlots: "סה״כ משבצות",
//       availableSlots: "משבצות פנויות",
//       busySlots: "משבצות תפוסות",
//       actions: "פעולות"
//     }
//   };

//   const t = translations[language];
//   const textDirection = language === 'he' ? 'rtl' : 'ltr';
  
//   // Day mapping
//   const dayMapping = {
//     sun: language === 'en' ? t.sunday : t.sunday,
//     mon: language === 'en' ? t.monday : t.monday,
//     tue: language === 'en' ? t.tuesday : t.tuesday,
//     wed: language === 'en' ? t.wednesday : t.wednesday,
//     thu: language === 'en' ? t.thursday : t.thursday,
//     fri: language === 'en' ? t.friday : t.friday,
//     shabbos: language === 'en' ? t.shabbos : t.shabbos,
//   };
  
//   const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'shabbos'];
  
//   // Statistics
//   const totalSlots = scheduleArr?.length || 0;
//   const availableSlots = scheduleArr?.filter(slot => slot.available)?.length || 0;
//   const busySlots = totalSlots - availableSlots;
  
//   // Functions
//   const getSchedule = async () => {
//     setLoading(true);
//     try {
//       await dispatch(GetScheduleByIdThunk(param.id));
//       setSnackbar({
//         open: true,
//         message: "Schedule loaded successfully",
//         severity: "success"
//       });
//     } catch (error) {
//       setSnackbar({
//         open: true,
//         message: "Failed to load schedule",
//         severity: "error"
//       });
//     } finally {
//       setLoading(false);
//     }
//   };
  
//   const addSchedule = useCallback(async () => {
//     if (!schedule.dayInWeek || !schedule.fromTime || !schedule.toTime) {
//       setSnackbar({
//         open: true,
//         message: "Please fill all required fields",
//         severity: "warning"
//       });
//       return;
//     }
    
//     setLoading(true);
//     try {
//       await dispatch(AddScheduleThunk(schedule));
//       setOpen(false);
//       setSchedule({ 
//         personId: param.id, 
//         dayInWeek: '', 
//         fromTime: '', 
//         toTime: '', 
//         available: true 
//       });
//       setSnackbar({
//         open: true,
//         message: t.timeSlotAdded,
//         severity: "success"
//       });
//     } catch (error) {
//       setSnackbar({
//         open: true,
//         message: "Failed to add time slot",
//         severity: "error"
//       });
//     } finally {
//       setLoading(false);
//     }
//   }, [dispatch, schedule, setLoading, setOpen, setSnackbar, t.timeSlotAdded, param.id]);

//   const updateSchedule = useCallback(async () => {
//     if (!schedule.dayInWeek || !schedule.fromTime || !schedule.toTime) {
//       setSnackbar({
//         open: true,
//         message: "Please fill all required fields",
//         severity: "warning"
//       });
//       return;
//     }
    
//     setLoading(true);
//     try {
//       dispatch(editSchedule(schedule));
//       await dispatch(UpdateScheduleThunk({ code: schedule.code, schedule: schedule }));
//       setOpen(false);
//       setSnackbar({
//         open: true,
//         message: t.timeSlotUpdated,
//         severity: "success"
//       });
//     } catch (error) {
//       setSnackbar({
//         open: true,
//         message: "Failed to update time slot",
//         severity: "error"
//       });
//     } finally {
//       setLoading(false);
//     }
//   }, [dispatch, editSchedule, schedule, setLoading, setOpen, setSnackbar, t.timeSlotUpdated]);
  
//   const formatTime = (timeString) => {
//     if (!timeString) return '';
    
//     try {
//       if (timeString.includes(':')) {
//         const [hours, minutes] = timeString.split(':');
//         return `${hours}:${minutes}`;
//       }
//     } catch (error) {
//       console.error("Error formatting time:", error);
//     }
    
//     return timeString;
//   };
  
//   const handleLanguageChange = () => {
//     setLanguage(language === 'en' ? 'he' : 'en');
//   };
  
//   // Effects
//   useEffect(() => {
//     getSchedule();
//   }, []);
  
//   return (
//     <Box sx={{ 
//       minHeight: '100vh',
//       background: `linear-gradient(135deg, ${scheduleColors.background.default} 0%, ${scheduleColors.background.elevated} 100%)`,
//       direction: textDirection,
//       position: 'relative',
//       '&::before': {
//         content: '""',
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         background: `radial-gradient(circle at 20% 80%, ${alpha(scheduleColors.secondary.light, 0.1)} 0%, transparent 50%),
//                      radial-gradient(circle at 80% 20%, ${alpha(scheduleColors.accent.light, 0.1)} 0%, transparent 50%)`,
//         pointerEvents: 'none',
//         zIndex: 0
//       }
//     }}>
//       {/* Loading Backdrop */}
//       <Backdrop
//         sx={{ 
//           color: scheduleColors.secondary.main, 
//           zIndex: 1200,
//           background: `linear-gradient(135deg, ${alpha(scheduleColors.primary.main, 0.8)} 0%, ${alpha(scheduleColors.primary.dark, 0.9)} 100%)`,
//           backdropFilter: 'blur(10px)'
//         }}
//         open={loading}
//       >
//         <Box sx={{ textAlign: 'center' }}>
//           <CircularProgress 
//             color="inherit" 
//             size={60}
//             thickness={4}
//             sx={{
//               animation: `${pulse} 1.5s ease-in-out infinite`,
//               mb: 2
//             }}
//           />
//           <Typography variant="h6" sx={{ color: scheduleColors.secondary.main, fontWeight: 'bold' }}>
//             {t.loading}
//           </Typography>
//         </Box>
//       </Backdrop>

//       {/* App Bar */}
//       <ModernAppBar position="static" elevation={0}>
//         <Toolbar sx={{ py: 1 }}>
//           <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
//             <CalendarTodayIcon sx={{ mr: 2, fontSize: '2rem' }} />
//             <Typography 
//               variant="h4" 
//               component="div" 
//               sx={{ 
//                 fontWeight: 'bold',
//                 letterSpacing: '0.5px',
//                 textShadow: '0 2px 4px rgba(0,0,0,0.3)',
//                 background: `linear-gradient(135deg, ${scheduleColors.secondary.light} 0%, ${scheduleColors.background.paper} 100%)`,
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text'
//               }}
//             >
//               {t.weeklySchedule}
//             </Typography>
//           </Box>
          
//           <Stack direction="row" spacing={2}>
//             <Tooltip title={language === 'en' ? 'עברית' : 'English'}>
//               <IconButton 
//                 color="inherit" 
//                 onClick={handleLanguageChange}
//                 sx={{
//                   background: alpha(scheduleColors.secondary.main, 0.2),
//                   '&:hover': {
//                     background: alpha(scheduleColors.secondary.main, 0.3),
//                     transform: 'scale(1.1)',
//                   }
//                 }}
//               >
//                 <LanguageIcon />
//               </IconButton>
//             </Tooltip>
            
//             <Tooltip title={t.back}>
//               <IconButton 
//                 color="inherit" 
//                 onClick={() => navigate(-1)}
//                 sx={{
//                   background: alpha(scheduleColors.secondary.main, 0.2),
//                   '&:hover': {
//                     background: alpha(scheduleColors.secondary.main, 0.3),
//                     transform: 'scale(1.1)',
//                   }
//                 }}
//               >
//                 <HomeIcon />
//               </IconButton>
//             </Tooltip>
//           </Stack>
//         </Toolbar>
//       </ModernAppBar>
      
//       <Container maxWidth="lg" sx={{ mt: 4, mb: 8, position: 'relative', zIndex: 1 }}>
//         {/* Statistics Cards */}
//         <Grid container spacing={3} sx={{ mb: 4 }}>
//           <Grid item xs={12} sm={4}>
//             <Zoom in={true} timeout={500}>
//               <StatsCard>
//                 <CardContent sx={{ textAlign: 'center', py: 3 }}>
//                   <TodayIcon sx={{ 
//                     fontSize: '3rem', 
//                     color: scheduleColors.primary.main, 
//                     mb: 1,
//                     animation: `${float} 3s ease-in-out infinite`
//                   }} />
//                   <Typography variant="h4" sx={{ 
//                     fontWeight: 'bold', 
//                     color: scheduleColors.primary.main,
//                     mb: 1
//                   }}>
//                     {totalSlots}
//                   </Typography>
//                   <Typography variant="body1" sx={{ color: scheduleColors.text.secondary }}>
//                     {t.totalSlots}
//                   </Typography>
//                 </CardContent>
//               </StatsCard>
//             </Zoom>
//           </Grid>
          
//           <Grid item xs={12} sm={4}>
//             <Zoom in={true} timeout={700}>
//               <StatsCard>
//                 <CardContent sx={{ textAlign: 'center', py: 3 }}>
//                   <EventAvailableIcon sx={{ 
//                     fontSize: '3rem', 
//                     color: scheduleColors.success, 
//                     mb: 1,
//                     animation: `${float} 3s ease-in-out infinite 0.5s`
//                   }} />
//                   <Typography variant="h4" sx={{ 
//                     fontWeight: 'bold', 
//                     color: scheduleColors.success,
//                     mb: 1
//                   }}>
//                     {availableSlots}
//                   </Typography>
//                   <Typography variant="body1" sx={{ color: scheduleColors.text.secondary }}>
//                     {t.availableSlots}
//                   </Typography>
//                 </CardContent>
//               </StatsCard>
//             </Zoom>
//           </Grid>
          
//           <Grid item xs={12} sm={4}>
//             <Zoom in={true} timeout={900}>
//               <StatsCard>
//                 <CardContent sx={{ textAlign: 'center', py: 3 }}>
//                   <EventBusyIcon sx={{ 
//                     fontSize: '3rem', 
//                     color: scheduleColors.error, 
//                     mb: 1,
//                     animation: `${float} 3s ease-in-out infinite 1s`
//                   }} />
//                   <Typography variant="h4" sx={{ 
//                     fontWeight: 'bold', 
//                     color: scheduleColors.error,
//                     mb: 1
//                   }}>
//                     {busySlots}
//                   </Typography>
//                   <Typography variant="body1" sx={{ color: scheduleColors.text.secondary }}>
//                     {t.busySlots}
//                   </Typography>
//                 </CardContent>
//               </StatsCard>
//             </Zoom>
//           </Grid>
//         </Grid>

//         {/* Main Content */}
//         <Grow in={true} timeout={1000}>
//           <Paper sx={{ 
//             borderRadius: '24px',
//             overflow: 'hidden',
//             background: `linear-gradient(145deg, ${scheduleColors.background.paper} 0%, ${scheduleColors.background.elevated} 100%)`,
//             boxShadow: `0 12px 40px ${alpha(scheduleColors.primary.main, 0.1)}`,
//             border: `1px solid ${alpha(scheduleColors.secondary.main, 0.1)}`
//           }}>
//             {/* Header */}
//             <CardHeader>
//               <Box sx={{ 
//                                 display: 'flex', 
//                                 justifyContent: 'space-between', 
//                                 alignItems: 'center',
//                                 position: 'relative',
//                                 zIndex: 1
//                               }}>
//                                 <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                   <ScheduleIcon sx={{ mr: 2, fontSize: '2rem' }} />
//                                   <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
//                                     {t.weeklySchedule}
//                                   </Typography>
//                                 </Box>
                                
//                                 <GradientButton
//                                   startIcon={<AddIcon />}
//                                   onClick={() => {
//                                     setIsEditMode(false);
//                                     setSchedule({ 
//                                       personId: param.id, 
//                                       dayInWeek: '', 
//                                       fromTime: '', 
//                                       toTime: '', 
//                                       available: true 
//                                     });
//                                     setOpen(true);
//                                   }}
//                                   sx={{
//                                     background: `linear-gradient(135deg, ${scheduleColors.secondary.main} 0%, ${scheduleColors.accent.main} 100%)`,
//                                     '&:hover': {
//                                       background: `linear-gradient(135deg, ${scheduleColors.accent.main} 0%, ${scheduleColors.secondary.main} 100%)`,
//                                     }
//                                   }}
//                                 >
//                                   {t.addTimeSlot}
//                                 </GradientButton>
//                               </Box>
//                             </CardHeader>
                            
//                             {/* Table */}
//                             <Box sx={{ p: 3 }}>
//                               {scheduleArr?.length > 0 ? (
//                                 <TableContainer sx={{ 
//                                   borderRadius: '16px',
//                                   overflow: 'hidden',
//                                   boxShadow: `0 4px 20px ${alpha(scheduleColors.primary.main, 0.08)}`
//                                 }}>
//                                   <Table>
//                                     <TableHead>
//                                       <TableRow>
//                                         <StyledTableCell align="center">
//                                           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                                             <TodayIcon sx={{ mr: 1 }} />
//                                             {t.day}
//                                           </Box>
//                                         </StyledTableCell>
//                                         <StyledTableCell align="center">
//                                           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                                             <AccessTimeIcon sx={{ mr: 1 }} />
//                                             {t.fromTime}
//                                           </Box>
//                                         </StyledTableCell>
//                                         <StyledTableCell align="center">
//                                           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                                             <WatchLaterIcon sx={{ mr: 1 }} />
//                                             {t.toTime}
//                                           </Box>
//                                         </StyledTableCell>
//                                         <StyledTableCell align="center">
//                                           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                                             <StarIcon sx={{ mr: 1 }} />
//                                             {t.available}
//                                           </Box>
//                                         </StyledTableCell>
//                                         <StyledTableCell align="center">
//                                           <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                                             <TrendingUpIcon sx={{ mr: 1 }} />
//                                             {t.actions}
//                                           </Box>
//                                         </StyledTableCell>
//                                       </TableRow>
//                                     </TableHead>
//                                     <TableBody>
//                                       {scheduleArr.map((item, index) => (
//                                         <Zoom 
//                                           in={true} 
//                                           style={{ transitionDelay: `${index * 100}ms` }}
//                                           key={item.code}
//                                         >
//                                           <StyledTableRow>
//                                             <StyledTableCell align="center">
//                                               <Chip
//                                                 label={dayMapping[item.dayInWeek]}
//                                                 sx={{
//                                                   background: `linear-gradient(135deg, ${scheduleColors.secondary.light} 0%, ${scheduleColors.secondary.main} 100%)`,
//                                                   color: scheduleColors.secondary.contrastText,
//                                                   fontWeight: 'bold',
//                                                   fontSize: '0.9rem'
//                                                 }}
//                                               />
//                                             </StyledTableCell>
//                                             <StyledTableCell align="center" sx={{ 
//                                               color: scheduleColors.text.primary, 
//                                               fontWeight: '600',
//                                               fontSize: '1rem'
//                                             }}>
//                                               {formatTime(item.fromTime)}
//                                             </StyledTableCell>
//                                             <StyledTableCell align="center" sx={{ 
//                                               color: scheduleColors.text.primary, 
//                                               fontWeight: '600',
//                                               fontSize: '1rem'
//                                             }}>
//                                               {formatTime(item.toTime)}
//                                             </StyledTableCell>
//                                             <StyledTableCell align="center">
//                                               <Chip 
//                                                 label={item.available ? t.availableTime : t.unavailableTime}
//                                                 color={item.available ? "success" : "error"}
//                                                 variant="filled"
//                                                 icon={item.available ? <EventAvailableIcon /> : <EventBusyIcon />}
//                                                 sx={{
//                                                   fontWeight: 'bold',
//                                                   fontSize: '0.85rem',
//                                                   boxShadow: `0 2px 8px ${alpha(item.available ? scheduleColors.success : scheduleColors.error, 0.3)}`
//                                                 }}
//                                               />
//                                             </StyledTableCell>
//                                             <StyledTableCell align="center">
//                                               <Tooltip title="Edit Time Slot">
//                                                 <StyledFab 
//                                                   size="small" 
//                                                   aria-label="edit"
//                                                   onClick={() => {
//                                                     setSchedule(item);
//                                                     setIsEditMode(true);
//                                                     setOpen(true);
//                                                   }}
//                                                   sx={{
//                                                     width: '40px',
//                                                     height: '40px',
//                                                     background: `linear-gradient(135deg, ${scheduleColors.secondary.main} 0%, ${scheduleColors.accent.main} 100%)`,
//                                                   }}
//                                                 >
//                                                   <EditIcon sx={{ fontSize: '1.2rem' }} />
//                                                 </StyledFab>
//                                               </Tooltip>
//                                             </StyledTableCell>
//                                           </StyledTableRow>
//                                         </Zoom>
//                                       ))}
//                                     </TableBody>
//                                   </Table>
//                                 </TableContainer>
//                               ) : (
//                                 <Box sx={{ 
//                                   textAlign: 'center', 
//                                   py: 8,
//                                   background: `linear-gradient(135deg, ${alpha(scheduleColors.secondary.light, 0.1)} 0%, ${alpha(scheduleColors.accent.light, 0.1)} 100%)`,
//                                   borderRadius: '16px',
//                                   border: `2px dashed ${alpha(scheduleColors.secondary.main, 0.3)}`
//                                 }}>
//                                   <CalendarTodayIcon sx={{ 
//                                     fontSize: '4rem', 
//                                     color: alpha(scheduleColors.secondary.main, 0.5),
//                                     mb: 2,
//                                     animation: `${float} 3s ease-in-out infinite`
//                                   }} />
//                                   <Typography variant="h6" sx={{ 
//                                     color: scheduleColors.text.secondary, 
//                                     mb: 3,
//                                     fontWeight: '600'
//                                   }}>
//                                     No time slots found. Add your first time slot!
//                                   </Typography>
//                                   <GradientButton
//                                     startIcon={<AddIcon />}
//                                     onClick={() => {
//                                       setIsEditMode(false);
//                                       setSchedule({ 
//                                         personId: param.id, 
//                                         dayInWeek: '', 
//                                         fromTime: '', 
//                                         toTime: '', 
//                                         available: true 
//                                       });
//                                       setOpen(true);
//                                     }}
//                                     sx={{ fontSize: '1.1rem', py: 1.5, px: 4 }}
//                                   >
//                                     {t.addTimeSlot}
//                                   </GradientButton>
//                                 </Box>
//                               )}
//                             </Box>
//                           </Paper>
//                         </Grow>
                        
//                         {/* Schedule Display */}
//                         <Box sx={{ mt: 4 }}>
//                           <Grow in={true} timeout={1200}>
//                             <Paper sx={{ 
//                               borderRadius: '24px',
//                               overflow: 'hidden',
//                               background: `linear-gradient(145deg, ${scheduleColors.background.paper} 0%, ${scheduleColors.background.elevated} 100%)`,
//                               boxShadow: `0 12px 40px ${alpha(scheduleColors.primary.main, 0.1)}`,
//                               border: `1px solid ${alpha(scheduleColors.secondary.main, 0.1)}`,
//                               p: 3
//                             }}>
//                               <ScheduleDisplay schedules={scheduleArr} showBookingButton={false} />
//                             </Paper>
//                           </Grow>
//                         </Box>
                        
//                         {/* Back Button */}
//                         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
//                           <GradientButton
//                             startIcon={<HomeIcon />}
//                             onClick={() => navigate(-1)}
//                             sx={{ 
//                               fontSize: '1.1rem', 
//                               py: 1.5, 
//                               px: 6,
//                               background: `linear-gradient(135deg, ${scheduleColors.primary.main} 0%, ${scheduleColors.primary.dark} 100%)`,
//                               '&:hover': {
//                                 background: `linear-gradient(135deg, ${scheduleColors.primary.dark} 0%, ${scheduleColors.primary.main} 100%)`,
//                               }
//                             }}
//                           >
//                             {t.back}
//                           </GradientButton>
//                         </Box>
//                       </Container>
                      
//                       {/* Floating Action Button */}
//                       <FloatingActionButton
//                         onClick={() => {
//                           setIsEditMode(false);
//                           setSchedule({ 
//                             personId: param.id, 
//                             dayInWeek: '', 
//                             fromTime: '', 
//                             toTime: '', 
//                             available: true 
//                           });
//                           setOpen(true);
//                         }}
//                       >
//                         <AddIcon sx={{ fontSize: '2rem' }} />
//                       </FloatingActionButton>
                      
//                       {/* Modern Dialog */}
//                       {open && (
//                         <>
//                           <Backdrop
//                             sx={{ 
//                               color: '#fff', 
//                               zIndex: 1250,
//                               background: alpha(scheduleColors.primary.dark, 0.7),
//                               backdropFilter: 'blur(8px)'
//                             }}
//                             open={open}
//                             onClick={() => !loading && setOpen(false)}
//                           />
                          
//                           <Slide direction="up" in={open} mountOnEnter unmountOnExit>
//                             <ModernDialog>
//                               {/* Dialog Header */}
//                               <CardHeader>
//                                 <Box sx={{ 
//                                   display: 'flex', 
//                                   justifyContent: 'space-between', 
//                                   alignItems: 'center',
//                                   position: 'relative',
//                                   zIndex: 1
//                                 }}>
//                                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                     <AccessTimeIcon sx={{ mr: 2, fontSize: '1.8rem' }} />
//                                     <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
//                                       {isEditMode ? "Edit Time Slot" : t.addTimeSlot}
//                                     </Typography>
//                                   </Box>
//                                   <IconButton 
//                                     onClick={() => !loading && setOpen(false)}
//                                     sx={{ 
//                                       color: 'white',
//                                       background: alpha(scheduleColors.secondary.main, 0.2),
//                                       '&:hover': {
//                                         background: alpha(scheduleColors.secondary.main, 0.3),
//                                         transform: 'scale(1.1)',
//                                       }
//                                     }}
//                                   >
//                                     <CloseIcon />
//                                   </IconButton>
//                                 </Box>
//                               </CardHeader>
                              
//                               {/* Dialog Content */}
//                               <Box sx={{ p: 4 }}>
//                                 <Grid container spacing={3}>
//                                   <Grid item xs={12}>
//                                     <FormControl 
//                                       fullWidth 
//                                       sx={{
//                                         '& .MuiOutlinedInput-root': {
//                                           borderRadius: '12px',
//                                           background: scheduleColors.background.paper,
//                                           '&:hover fieldset': {
//                                             borderColor: scheduleColors.secondary.main,
//                                           },
//                                           '&.Mui-focused fieldset': {
//                                             borderColor: scheduleColors.secondary.main,
//                                             borderWidth: '2px',
//                                           },
//                                         },
//                                         '& .MuiInputLabel-root.Mui-focused': {
//                                           color: scheduleColors.secondary.main,
//                                         }
//                                       }}
//                                     >
//                                       <InputLabel>{t.day}</InputLabel>
//                                       <Select
//                                         value={schedule.dayInWeek}
//                                         label={t.day}
//                                         onChange={(e) => setSchedule({ ...schedule, dayInWeek: e.target.value })}
//                                       >
//                                         {days.map(day => (
//                                           <MenuItem value={day} key={day}>
//                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                               <TodayIcon sx={{ mr: 1, color: scheduleColors.secondary.main }} />
//                                               {dayMapping[day]}
//                                             </Box>
//                                           </MenuItem>
//                                         ))}
//                                       </Select>
//                                     </FormControl>
//                                   </Grid>
                                  
//                                   <Grid item xs={12} md={6}>
//                                     <TextField
//                                       fullWidth
//                                       label={t.fromTime}
//                                       type="time"
//                                       value={formatTime(schedule.fromTime)}
//                                       onChange={(e) => setSchedule({ ...schedule, fromTime: e.target.value + ":00" })}
//                                       InputLabelProps={{ shrink: true }}
//                                       inputProps={{ step: 300 }}
//                                       sx={{
//                                         '& .MuiOutlinedInput-root': {
//                                           borderRadius: '12px',
//                                           background: scheduleColors.background.paper,
//                                           '&:hover fieldset': {
//                                             borderColor: scheduleColors.secondary.main,
//                                           },
//                                           '&.Mui-focused fieldset': {
//                                             borderColor: scheduleColors.secondary.main,
//                                             borderWidth: '2px',
//                                           },
//                                         },
//                                         '& .MuiInputLabel-root.Mui-focused': {
//                                           color: scheduleColors.secondary.main,
//                                         }
//                                       }}
//                                     />
//                                   </Grid>
                                  
//                                   <Grid item xs={12} md={6}>
//                                     <TextField
//                                       fullWidth
//                                       label={t.toTime}
//                                       type="time"
//                                       value={formatTime(schedule.toTime)}
//                                       onChange={(e) => setSchedule({ ...schedule, toTime: e.target.value + ":00" })}
//                                       InputLabelProps={{ shrink: true }}
//                                       inputProps={{ step: 300 }}
//                                       sx={{
//                                         '& .MuiOutlinedInput-root': {
//                                           borderRadius: '12px',
//                                           background: scheduleColors.background.paper,
//                                           '&:hover fieldset': {
//                                             borderColor: scheduleColors.secondary.main,
//                                           },
//                                           '&.Mui-focused fieldset': {
//                                             borderColor: scheduleColors.secondary.main,
//                                             borderWidth: '2px',
//                                           },
//                                         },
//                                         '& .MuiInputLabel-root.Mui-focused': {
//                                           color: scheduleColors.secondary.main,
//                                         }
//                                       }}
//                                     />
//                                   </Grid>
                                  
//                                   <Grid item xs={12}>
//                                     <FormControlLabel
//                                       control={
//                                         <Switch
//                                           checked={schedule.available}
//                                           onChange={(e) => setSchedule({ ...schedule, available: e.target.checked })}
//                                           sx={{
//                                             '& .MuiSwitch-switchBase.Mui-checked': {
//                                               color: scheduleColors.success,
//                                               '&:hover': {
//                                                 backgroundColor: alpha(scheduleColors.success, 0.08),
//                                               },
//                                             },
//                                             '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
//                                               backgroundColor: scheduleColors.success,
//                                             },
//                                           }}
//                                         />
//                                       }
//                                       label={
//                                         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                           {schedule.available ? <EventAvailableIcon sx={{ mr: 1, color: scheduleColors.success }} /> : <EventBusyIcon sx={{ mr: 1, color: scheduleColors.error }} />}
//                                           <Typography sx={{ fontWeight: '600', color: scheduleColors.text.primary }}>
//                                             {t.available}
//                                           </Typography>
//                                         </Box>
//                                       }
//                                       sx={{ mt: 2 }}
//                                     />
//                                   </Grid>
//                                 </Grid>
                                
//                                 {/* Dialog Actions */}
//                                 <Box sx={{ 
//                                   display: 'flex', 
//                                   justifyContent: 'flex-end', 
//                                   gap: 2, 
//                                   mt: 4,
//                                   pt: 3,
//                                   borderTop: `1px solid ${alpha(scheduleColors.secondary.main, 0.2)}`
//                                 }}>
//                                   <Button
//                                     variant="outlined"
//                                     onClick={() => setOpen(false)}
//                                     disabled={loading}
//                                     sx={{
//                                       borderRadius: '12px',
//                                       borderColor: scheduleColors.text.secondary,
//                                       color: scheduleColors.text.secondary,
//                                       fontWeight: '600',
//                                       px: 3,
//                                       py: 1,
//                                       '&:hover': {
//                                         borderColor: scheduleColors.secondary.main,
//                                         color: scheduleColors.secondary.main,
//                                         background: alpha(scheduleColors.secondary.main, 0.05),
//                                       }
//                                     }}
//                                   >
//                                     {t.cancel}
//                                   </Button>
                                  
//                                   <GradientButton
//                                     onClick={isEditMode ? updateSchedule : addSchedule}
//                                     disabled={loading}
//                                     startIcon={loading ? <CircularProgress size={20} color="inherit" /> : (isEditMode ? <EditIcon /> : <AddIcon />)}
//                                     sx={{
//                                       px: 4,
//                                       py: 1,
//                                       fontSize: '1rem',
//                                       fontWeight: 'bold'
//                                     }}
//                                   >
//                                     {loading ? t.loading : isEditMode ? t.update : t.add}
//                                   </GradientButton>
//                                 </Box>
//                               </Box>
//                             </ModernDialog>
//                           </Slide>
//                         </>
//                       )}
                      
//                       {/* Snackbar for notifications */}
//                       <Snackbar
//                         open={snackbar.open}
//                         autoHideDuration={6000}
//                         onClose={() => setSnackbar({ ...snackbar, open: false })}
//                         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//                       >
//                         <Alert 
//                           onClose={() => setSnackbar({ ...snackbar, open: false })} 
//                           severity={snackbar.severity}
//                           variant="filled"
//                           sx={{ 
//                             width: '100%',
//                             borderRadius: '12px',
//                             fontWeight: '600',
//                             boxShadow: `0 8px 25px ${alpha(scheduleColors.primary.main, 0.3)}`,
//                             '&.MuiAlert-filledSuccess': {
//                               background: `linear-gradient(135deg, ${scheduleColors.success} 0%, #229954 100%)`,
//                             },
//                             '&.MuiAlert-filledError': {
//                               background: `linear-gradient(135deg, ${scheduleColors.error} 0%, #C0392B 100%)`,
//                             },
//                             '&.MuiAlert-filledWarning': {
//                               background: `linear-gradient(135deg, ${scheduleColors.warning} 0%, #D68910 100%)`,
//                             },
//                             '&.MuiAlert-filledInfo': {
//                               background: `linear-gradient(135deg, ${scheduleColors.info} 0%, #2E86C1 100%)`,
//                             }
//                           }}
//                         >
//                           {snackbar.message}
//                         </Alert>
//                       </Snackbar>
//                     </Box>
//                   );
//                 };
                
         // In the name of God
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import "./schedule.css";
import { AddScheduleThunk } from "../../redux/Schedule/addScheduleThunk";
import { GetScheduleByIdThunk } from "../../redux/Schedule/getScheduleByIdThunk";
import { editSchedule } from "../../redux/Schedule/scheduleSlice";
import { UpdateScheduleThunk } from "../../redux/Schedule/updateScheduleThunk";

// Material UI imports
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  IconButton,
  Fab,
  Grid,
  Card,
  CardContent,
  Divider,
  AppBar,
  Toolbar,
  Chip,
  Snackbar,
  Alert,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  CircularProgress,
  Backdrop,
  Slide,
  Stack,
  Tooltip,
  alpha,
  useTheme,
  useMediaQuery,
  Zoom,
  Grow
} from "@mui/material";

// Icons
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TodayIcon from '@mui/icons-material/Today';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// Styled components
import { styled, keyframes } from '@mui/material/styles';
import { useCallback } from "react";

// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const shimmer = keyframes`
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// Color palette for Schedule theme
const scheduleColors = {
  primary: {
    main: '#2E5266', // Deep teal blue
    light: '#4A7C95',
    dark: '#1A3A4A',
    contrastText: '#ffffff'
  },
  secondary: {
    main: '#D4A574', // Warm gold
    light: '#E6C299',
    dark: '#B8935F',
    contrastText: '#1A3A4A'
  },
  accent: {
    main: '#8B4513', // Saddle brown
    light: '#A0522D',
    dark: '#654321'
  },
  background: {
    default: '#F8F6F0', // Warm cream
    paper: '#FFFFFF',
    elevated: '#FEFCF7'
  },
  text: {
    primary: '#2C3E50',
    secondary: '#5D6D7E',
    disabled: '#BDC3C7'
  },
  success: '#27AE60',
  warning: '#F39C12',
  error: '#E74C3C',
  info: '#3498DB'
};

// Styled components with Schedule theme
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '0.95rem',
  padding: theme.spacing(2.5),
  borderBottom: `2px solid ${alpha(scheduleColors.primary.light, 0.1)}`,
  position: 'relative',
  '&.MuiTableCell-head': {
    background: `linear-gradient(135deg, ${scheduleColors.primary.main} 0%, ${scheduleColors.primary.dark} 100%)`,
    color: scheduleColors.primary.contrastText,
    fontWeight: 'bold',
    fontSize: '1.1rem',
    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
      animation: `${shimmer} 3s infinite`
    }
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  '&:nth-of-type(odd)': {
    backgroundColor: alpha(scheduleColors.secondary.light, 0.03),
  },
  '&:hover': {
    backgroundColor: alpha(scheduleColors.secondary.main, 0.08),
    transform: 'translateY(-3px) scale(1.01)',
    boxShadow: `0 8px 25px ${alpha(scheduleColors.primary.main, 0.15)}`,
    cursor: 'pointer',
    '& .MuiTableCell-root': {
      color: scheduleColors.primary.dark,
      fontWeight: '600'
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '4px',
    background: `linear-gradient(to bottom, ${scheduleColors.secondary.main}, ${scheduleColors.accent.main})`,
    transform: 'scaleY(0)',
    transition: 'transform 0.3s ease',
  },
  '&:hover::before': {
    transform: 'scaleY(1)',
  }
}));

const StyledFab = styled(Fab)(({ theme }) => ({
  background: `linear-gradient(135deg, ${scheduleColors.secondary.main} 0%, ${scheduleColors.accent.main} 100%)`,
  color: scheduleColors.secondary.contrastText,
  boxShadow: `0 6px 20px ${alpha(scheduleColors.secondary.main, 0.4)}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px) scale(1.1)',
    boxShadow: `0 12px 30px ${alpha(scheduleColors.secondary.main, 0.6)}`,
    background: `linear-gradient(135deg, ${scheduleColors.accent.main} 0%, ${scheduleColors.secondary.main} 100%)`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
    transition: 'left 0.5s',
  },
  '&:hover::before': {
    left: '100%',
  }
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${scheduleColors.secondary.main} 0%, ${scheduleColors.accent.main} 100%)`,
  color: scheduleColors.secondary.contrastText,
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: theme.spacing(1.5, 4),
  borderRadius: '50px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: `0 6px 20px ${alpha(scheduleColors.secondary.main, 0.3)}`,
  textTransform: 'none',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    boxShadow: `0 8px 25px ${alpha(scheduleColors.secondary.main, 0.5)}`,
    transform: 'translateY(-2px)',
    background: `linear-gradient(135deg, ${scheduleColors.accent.main} 0%, ${scheduleColors.secondary.main} 100%)`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
    transition: 'left 0.5s',
  },
  '&:hover::before': {
    left: '100%',
  }
}));

const ModernAppBar = styled(AppBar)(({ theme }) => ({
  background: `linear-gradient(135deg, ${scheduleColors.primary.main} 0%, ${scheduleColors.primary.dark} 50%, ${scheduleColors.accent.main} 100%)`,
  backgroundSize: '200% 200%',
  animation: `${gradientShift} 8s ease infinite`,
  backdropFilter: 'blur(10px)',
  borderBottom: `1px solid ${alpha(scheduleColors.secondary.main, 0.2)}`,
  boxShadow: `0 4px 20px ${alpha(scheduleColors.primary.main, 0.3)}`,
}));

const FloatingActionButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  background: `linear-gradient(135deg, ${scheduleColors.secondary.main} 0%, ${scheduleColors.accent.main} 100%)`,
  color: scheduleColors.secondary.contrastText,
  width: '70px',
  height: '70px',
  boxShadow: `0 8px 25px ${alpha(scheduleColors.secondary.main, 0.4)}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: `${pulse} 2s infinite`,
  zIndex: 1000,
  '&:hover': {
    transform: 'scale(1.1) rotate(10deg)',
    boxShadow: `0 12px 35px ${alpha(scheduleColors.secondary.main, 0.6)}`,
    animation: 'none',
  }
}));

const StatsCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${scheduleColors.background.paper} 0%, ${scheduleColors.background.elevated} 100%)`,
  borderRadius: '16px',
  padding: theme.spacing(2),
  boxShadow: `0 6px 20px ${alpha(scheduleColors.primary.main, 0.08)}`,
  border: `1px solid ${alpha(scheduleColors.secondary.light, 0.2)}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 12px 30px ${alpha(scheduleColors.primary.main, 0.15)}`,
  }
}));

const ModernDialog = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '600px',
  background: `linear-gradient(145deg, ${scheduleColors.background.paper} 0%, ${scheduleColors.background.elevated} 100%)`,
  borderRadius: '24px',
  boxShadow: `0 25px 50px ${alpha(scheduleColors.primary.main, 0.3)}`,
  border: `1px solid ${alpha(scheduleColors.secondary.main, 0.2)}`,
  overflow: 'hidden',
  zIndex: 1300,
}));

const CardHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  background: `linear-gradient(135deg, ${scheduleColors.primary.main} 0%, ${scheduleColors.primary.dark} 100%)`,
  color: scheduleColors.primary.contrastText,
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    right: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
    animation: `${float} 6s ease-in-out infinite`,
  }
}));

export const Schedule = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // State
  const [open, setOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  
  // Redux state
  const sch = useSelector(s => s.schedule.schedule);
  const scheduleArr = useSelector(state => state.schedule.schedules);
  
  // Local state
  const [schedule, setSchedule] = useState({ 
    code: sch.code, 
    dayInWeek: sch.day, 
    fromTime: sch.fromTime, 
    toTime: sch.toTime, 
    available: sch.available, 
    personId: param.id 
  });
  
  // Translations
  const translations = {
    en: {
      weeklySchedule: "Weekly Schedule",
      addTimeSlot: "Add Time Slot",
      day: "Day",
      fromTime: "From Time",
      toTime: "To Time",
      available: "Available",
      update: "Update",
      add: "Add",
      cancel: "Cancel",
      back: "Back",
      sunday: "Sunday",
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      shabbos: "Shabbos",
      timeSlotAdded: "Time slot added successfully!",
      timeSlotUpdated: "Time slot updated successfully!",
      loading: "Loading...",
      sun: "Sun",
      mon: "Mon",
      tue: "Tue",
      wed: "Wed",
      thu: "Thu",
      fri: "Fri",
      shabbos: "Sat",
      availableTime: "Available Time",
      unavailableTime: "Unavailable Time",
      totalSlots: "Total Slots",
      availableSlots: "Available Slots",
      busySlots: "Busy Slots",
      actions: "Actions"
    },
    he: {
      weeklySchedule: "מערכת שבועית",
      addTimeSlot: "הוסף משבצת זמן",
      day: "יום",
      fromTime: "משעה",
      toTime: "עד שעה",
      available: "זמין",
      update: "עדכון",
      add: "הוספה",
      cancel: "ביטול",
      back: "חזרה",
      sunday: "יום ראשון",
      monday: "יום שני",
      tuesday: "יום שלישי",
      wednesday: "יום רביעי",
      thursday: "יום חמישי",
      friday: "יום שישי",
      saturday: "שבת",
      shabbos: "שבת",
      timeSlotAdded: "משבצת הזמן נוספה בהצלחה!",
      timeSlotUpdated: "משבצת הזמן עודכנה בהצלחה!",
      loading: "טוען...",
      sun: "א'",
      mon: "ב'",
      tue: "ג'",
      wed: "ד'",
      thu: "ה'",
      fri: "ו'",
      shabbos: "ש'",
      availableTime: "זמן פנוי",
      unavailableTime: "זמן לא פנוי",
      totalSlots: "סה״כ משבצות",
      availableSlots: "משבצות פנויות",
      busySlots: "משבצות תפוסות",
      actions: "פעולות"
    }
  };

  const t = translations[language];
  const textDirection = language === 'he' ? 'rtl' : 'ltr';
  
  // Day mapping
  const dayMapping = {
    sun: language === 'en' ? t.sunday : t.sunday,
    mon: language === 'en' ? t.monday : t.monday,
    tue: language === 'en' ? t.tuesday : t.tuesday,
    wed: language === 'en' ? t.wednesday : t.wednesday,
    thu: language === 'en' ? t.thursday : t.thursday,
    fri: language === 'en' ? t.friday : t.friday,
    shabbos: language === 'en' ? t.shabbos : t.shabbos,
  };
  
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'shabbos'];
  
  // Statistics
  const totalSlots = scheduleArr?.length || 0;
  const availableSlots = scheduleArr?.filter(slot => slot.available)?.length || 0;
  const busySlots = totalSlots - availableSlots;
  
  // Functions
  const getSchedule = async () => {
    setLoading(true);
    try {
      await dispatch(GetScheduleByIdThunk(param.id));
      setSnackbar({
        open: true,
        message: "Schedule loaded successfully",
        severity: "success"
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to load schedule",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };
  
  const addSchedule = useCallback(async () => {
    if (!schedule.dayInWeek || !schedule.fromTime || !schedule.toTime) {
      setSnackbar({
        open: true,
        message: "Please fill all required fields",
        severity: "warning"
      });
      return;
    }
    
    setLoading(true);
    try {
      await dispatch(AddScheduleThunk(schedule));
      setOpen(false);
      setSchedule({ 
        personId: param.id, 
        dayInWeek: '', 
        fromTime: '', 
        toTime: '', 
        available: true 
      });
      setSnackbar({
        open: true,
        message: t.timeSlotAdded,
        severity: "success"
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to add time slot",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  }, [dispatch, schedule, setLoading, setOpen, setSnackbar, t.timeSlotAdded, param.id]);

  const updateSchedule = useCallback(async () => {
    if (!schedule.dayInWeek || !schedule.fromTime || !schedule.toTime) {
      setSnackbar({
        open: true,
        message: "Please fill all required fields",
        severity: "warning"
      });
      return;
    }
    
    setLoading(true);
    try {
      dispatch(editSchedule(schedule));
      await dispatch(UpdateScheduleThunk({ code: schedule.code, schedule: schedule }));
      setOpen(false);
      setSnackbar({
        open: true,
        message: t.timeSlotUpdated,
        severity: "success"
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to update time slot",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  }, [dispatch, editSchedule, schedule, setLoading, setOpen, setSnackbar, t.timeSlotUpdated]);
  
  const formatTime = (timeString) => {
    if (!timeString) return '';
    
    try {
      if (timeString.includes(':')) {
        const [hours, minutes] = timeString.split(':');
        return `${hours}:${minutes}`;
      }
    } catch (error) {
      console.error("Error formatting time:", error);
    }
    
    return timeString;
  };
  
  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };
  
  // Effects
  useEffect(() => {
    getSchedule();
  }, []);
  
  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: `linear-gradient(135deg, ${scheduleColors.background.default} 0%, ${scheduleColors.background.elevated} 100%)`,
      direction: textDirection,
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `radial-gradient(circle at 20% 80%, ${alpha(scheduleColors.secondary.light, 0.1)} 0%, transparent 50%),
                     radial-gradient(circle at 80% 20%, ${alpha(scheduleColors.accent.light, 0.1)} 0%, transparent 50%)`,
        pointerEvents: 'none',
        zIndex: 0
      }
    }}>
      {/* Loading Backdrop */}
      <Backdrop
        sx={{ 
          color: scheduleColors.secondary.main, 
          zIndex: 1200,
          background: `linear-gradient(135deg, ${alpha(scheduleColors.primary.main, 0.8)} 0%, ${alpha(scheduleColors.primary.dark, 0.9)} 100%)`,
          backdropFilter: 'blur(10px)'
        }}
        open={loading}
      >
        <Box sx={{ textAlign: 'center' }}>
          <CircularProgress 
            color="inherit" 
            size={60}
            thickness={4}
            sx={{
              animation: `${pulse} 1.5s ease-in-out infinite`,
              mb: 2
            }}
          />
          <Typography variant="h6" sx={{ color: scheduleColors.secondary.main, fontWeight: 'bold' }}>
            {t.loading}
          </Typography>
        </Box>
      </Backdrop>

      {/* App Bar */}
      <ModernAppBar position="static" elevation={0}>
        <Toolbar sx={{ py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <CalendarTodayIcon sx={{ mr: 2, fontSize: '2rem' }} />
            <Typography 
              variant="h4" 
              component="div" 
              sx={{ 
                fontWeight: 'bold',
                letterSpacing: '0.5px',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                background: `linear-gradient(135deg, ${scheduleColors.secondary.light} 0%, ${scheduleColors.background.paper} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {t.weeklySchedule}
            </Typography>
          </Box>
          
          <Stack direction="row" spacing={2}>
            <Tooltip title={language === 'en' ? 'עברית' : 'English'}>
              <IconButton 
                color="inherit" 
                onClick={handleLanguageChange}
                sx={{
                  background: alpha(scheduleColors.secondary.main, 0.2),
                  '&:hover': {
                    background: alpha(scheduleColors.secondary.main, 0.3),
                    transform: 'scale(1.1)',
                  }
                }}
              >
                <LanguageIcon />
              </IconButton>
            </Tooltip>
            
            <Tooltip title={t.back}>
              <IconButton 
                color="inherit" 
                onClick={() => navigate(-1)}
                sx={{
                  background: alpha(scheduleColors.secondary.main, 0.2),
                  '&:hover': {
                    background: alpha(scheduleColors.secondary.main, 0.3),
                    transform: 'scale(1.1)',
                  }
                }}
              >
                <HomeIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </ModernAppBar>
      
      <Container maxWidth="lg" sx={{ mt: 4, mb: 8, position: 'relative', zIndex: 1 }}>
        {/* Statistics Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={4}>
            <Zoom in={true} timeout={500}>
              <StatsCard>
                <CardContent sx={{ textAlign: 'center', py: 3 }}>
                  <TodayIcon sx={{ 
                    fontSize: '3rem', 
                    color: scheduleColors.primary.main, 
                    mb: 1,
                    animation: `${float} 3s ease-in-out infinite`
                  }} />
                  <Typography variant="h4" sx={{ 
                    fontWeight: 'bold', 
                    color: scheduleColors.primary.main,
                    mb: 1
                  }}>
                    {totalSlots}
                  </Typography>
                  <Typography variant="body1" sx={{ color: scheduleColors.text.secondary }}>
                    {t.totalSlots}
                  </Typography>
                </CardContent>
              </StatsCard>
            </Zoom>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Zoom in={true} timeout={700}>
              <StatsCard>
                <CardContent sx={{ textAlign: 'center', py: 3 }}>
                  <EventAvailableIcon sx={{ 
                    fontSize: '3rem', 
                    color: scheduleColors.success, 
                    mb: 1,
                    animation: `${float} 3s ease-in-out infinite 0.5s`
                  }} />
                  <Typography variant="h4" sx={{ 
                    fontWeight: 'bold', 
                    color: scheduleColors.success,
                    mb: 1
                  }}>
                    {availableSlots}
                  </Typography>
                  <Typography variant="body1" sx={{ color: scheduleColors.text.secondary }}>
                    {t.availableSlots}
                  </Typography>
                </CardContent>
              </StatsCard>
            </Zoom>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Zoom in={true} timeout={900}>
              <StatsCard>
                <CardContent sx={{ textAlign: 'center', py: 3 }}>
                  <EventBusyIcon sx={{ 
                    fontSize: '3rem', 
                    color: scheduleColors.error, 
                    mb: 1,
                    animation: `${float} 3s ease-in-out infinite 1s`
                  }} />
                  <Typography variant="h4" sx={{ 
                    fontWeight: 'bold', 
                    color: scheduleColors.error,
                    mb: 1
                  }}>
                    {busySlots}
                  </Typography>
                  <Typography variant="body1" sx={{ color: scheduleColors.text.secondary }}>
                    {t.busySlots}
                  </Typography>
                </CardContent>
              </StatsCard>
            </Zoom>
          </Grid>
        </Grid>

        {/* Main Content */}
        <Grow in={true} timeout={1000}>
          <Paper sx={{ 
            borderRadius: '24px',
            overflow: 'hidden',
            background: `linear-gradient(145deg, ${scheduleColors.background.paper} 0%, ${scheduleColors.background.elevated} 100%)`,
            boxShadow: `0 12px 40px ${alpha(scheduleColors.primary.main, 0.1)}`,
            border: `1px solid ${alpha(scheduleColors.secondary.main, 0.1)}`
          }}>
            {/* Header */}
            <CardHeader>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                position: 'relative',
                zIndex: 1
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ScheduleIcon sx={{ mr: 2, fontSize: '2rem' }} />
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    {t.weeklySchedule}
                  </Typography>
                </Box>
                
                <GradientButton
                  startIcon={<AddIcon />}
                  onClick={() => {
                    setIsEditMode(false);
                    setSchedule({ 
                      personId: param.id, 
                      dayInWeek: '', 
                      fromTime: '', 
                      toTime: '', 
                      available: true 
                    });
                    setOpen(true);
                  }}
                  sx={{
                    background: `linear-gradient(135deg, ${scheduleColors.secondary.main} 0%, ${scheduleColors.accent.main} 100%)`,
                    '&:hover': {
                      background: `linear-gradient(135deg, ${scheduleColors.accent.main} 0%, ${scheduleColors.secondary.main} 100%)`,
                    }
                  }}
                >
                  {t.addTimeSlot}
                </GradientButton>
              </Box>
            </CardHeader>
            
            {/* Table */}
            <Box sx={{ p: 3 }}>
              {scheduleArr?.length > 0 ? (
                <TableContainer sx={{ 
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: `0 4px 20px ${alpha(scheduleColors.primary.main, 0.08)}`
                }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                      <StyledTableCell align="center">
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          
                          </Box>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <TodayIcon sx={{ mr: 1 }} />
                            {t.day}
                          </Box>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <AccessTimeIcon sx={{ mr: 1 }} />
                            {t.fromTime}
                          </Box>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <WatchLaterIcon sx={{ mr: 1 }} />
                            {t.toTime}
                          </Box>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <StarIcon sx={{ mr: 1 }} />
                            {t.available}
                          </Box>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <TrendingUpIcon sx={{ mr: 1 }} />
                            {t.actions}
                          </Box>
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {scheduleArr.map((item, index) => (
                        <Zoom 
                          in={true} 
                          style={{ transitionDelay: `${index * 100}ms` }}
                          key={item.code}
                        >
                          <StyledTableRow>
                            <StyledTableCell align="center">
                              <Chip
                                label={dayMapping[item.dayInWeek]}
                                sx={{
                                  background: `linear-gradient(135deg, ${scheduleColors.secondary.light} 0%, ${scheduleColors.secondary.main} 100%)`,
                                  color: scheduleColors.secondary.contrastText,
                                  fontWeight: 'bold',
                                  fontSize: '0.9rem'
                                }}
                              />
                            </StyledTableCell>
                            <StyledTableCell align="center" sx={{ 
                              color: scheduleColors.text.primary, 
                              fontWeight: '600',
                              fontSize: '1rem'
                            }}>
                              {formatTime(item.fromTime)}
                            </StyledTableCell>
                            <StyledTableCell align="center" sx={{ 
                              color: scheduleColors.text.primary, 
                              fontWeight: '600',
                              fontSize: '1rem'
                            }}>
                              {formatTime(item.toTime)}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <Chip 
                                label={item.available ? t.availableTime : t.unavailableTime}
                                color={item.available ? "success" : "error"}
                                variant="filled"
                                icon={item.available ? <EventAvailableIcon /> : <EventBusyIcon />}
                                sx={{
                                  fontWeight: 'bold',
                                  fontSize: '0.85rem',
                                  boxShadow: `0 2px 8px ${alpha(item.available ? scheduleColors.success : scheduleColors.error, 0.3)}`
                                }}
                              />
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <Tooltip title="Edit Time Slot">
                                <StyledFab 
                                  size="small" 
                                  aria-label="edit"
                                  onClick={() => {
                                    setSchedule(item);
                                    setIsEditMode(true);
                                    setOpen(true);
                                  }}
                                  sx={{
                                    width: '40px',
                                    height: '40px',
                                    background: `linear-gradient(135deg, ${scheduleColors.secondary.main} 0%, ${scheduleColors.accent.main} 100%)`,
                                  }}
                                >
                                  <EditIcon sx={{ fontSize: '1.2rem' }} />
                                </StyledFab>
                              </Tooltip>
                            </StyledTableCell>
                          </StyledTableRow>
                        </Zoom>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              ) : (
                <Box sx={{ 
                  textAlign: 'center', 
                  py: 8,
                  background: `linear-gradient(135deg, ${alpha(scheduleColors.secondary.light, 0.1)} 0%, ${alpha(scheduleColors.accent.light, 0.1)} 100%)`,
                  borderRadius: '16px',
                  border: `2px dashed ${alpha(scheduleColors.secondary.main, 0.3)}`
                }}>
                  <CalendarTodayIcon sx={{ 
                    fontSize: '4rem', 
                    color: alpha(scheduleColors.secondary.main, 0.5),
                    mb: 2,
                    animation: `${float} 3s ease-in-out infinite`
                  }} />
                  <Typography variant="h6" sx={{ 
                    color: scheduleColors.text.secondary, 
                    mb: 3,
                    fontWeight: '600'
                  }}>
                    No time slots found. Add your first time slot!
                  </Typography>
                  <GradientButton
                    startIcon={<AddIcon />}
                    onClick={() => {
                      setIsEditMode(false);
                      setSchedule({ 
                        personId: param.id, 
                        dayInWeek: '', 
                        fromTime: '', 
                        toTime: '', 
                        available: true 
                      });
                      setOpen(true);
                    }}
                    sx={{ fontSize: '1.1rem', py: 1.5, px: 4 }}
                  >
                    {t.addTimeSlot}
                  </GradientButton>
                </Box>
              )}
            </Box>
          </Paper>
        </Grow>
        
        {/* Back Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <GradientButton
            startIcon={<HomeIcon />}
            onClick={() => navigate(-1)}
            sx={{ 
              fontSize: '1.1rem', 
              py: 1.5, 
              px: 6,
              background: `linear-gradient(135deg, ${scheduleColors.primary.main} 0%, ${scheduleColors.primary.dark} 100%)`,
              '&:hover': {
                background: `linear-gradient(135deg, ${scheduleColors.primary.dark} 0%, ${scheduleColors.primary.main} 100%)`,
              }
            }}
          >
            {t.back}
          </GradientButton>
        </Box>
      </Container>
      
      {/* Floating Action Button */}
      <FloatingActionButton
        onClick={() => {
          setIsEditMode(false);
          setSchedule({ 
            personId: param.id, 
            dayInWeek: '', 
            fromTime: '', 
            toTime: '', 
            available: true 
          });
          setOpen(true);
        }}
      >
        <AddIcon sx={{ fontSize: '2rem' }} />
      </FloatingActionButton>
      
      {/* Modern Dialog */}
      {open && (
        <>
          <Backdrop
            sx={{ 
              color: '#fff', 
              zIndex: 1250,
              background: alpha(scheduleColors.primary.dark, 0.7),
              backdropFilter: 'blur(8px)'
            }}
            open={open}
            onClick={() => !loading && setOpen(false)}
          />
          
          <Slide direction="up" in={open} mountOnEnter unmountOnExit>
            <ModernDialog>
              {/* Dialog Header */}
              <CardHeader>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccessTimeIcon sx={{ mr: 2, fontSize: '1.8rem' }} />
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                      {isEditMode ? "Edit Time Slot" : t.addTimeSlot}
                    </Typography>
                  </Box>
                  <IconButton 
                    onClick={() => !loading && setOpen(false)}
                    sx={{ 
                      color: 'white',
                      background: alpha(scheduleColors.secondary.main, 0.2),
                      '&:hover': {
                        background: alpha(scheduleColors.secondary.main, 0.3),
                        transform: 'scale(1.1)',
                      }
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              </CardHeader>
              
              {/* Dialog Content */}
              <Box sx={{ p: 4 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <FormControl 
                      fullWidth 
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          background: scheduleColors.background.paper,
                          '&:hover fieldset': {
                            borderColor: scheduleColors.secondary.main,
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: scheduleColors.secondary.main,
                            borderWidth: '2px',
                          },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: scheduleColors.secondary.main,
                        }
                      }}
                    >
                      <InputLabel>{t.day}</InputLabel>
                      <Select
                        value={schedule.dayInWeek}
                        label={t.day}
                        onChange={(e) => setSchedule({ ...schedule, dayInWeek: e.target.value })}
                      >
                        {days.map(day => (
                          <MenuItem value={day} key={day}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <TodayIcon sx={{ mr: 1, color: scheduleColors.secondary.main }} />
                              {dayMapping[day]}
                            </Box>
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label={t.fromTime}
                      type="time"
                      value={formatTime(schedule.fromTime)}
                      onChange={(e) => setSchedule({ ...schedule, fromTime: e.target.value + ":00" })}
                      InputLabelProps={{ shrink: true }}
                      inputProps={{ step: 300 }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          background: scheduleColors.background.paper,
                          '&:hover fieldset': {
                            borderColor: scheduleColors.secondary.main,
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: scheduleColors.secondary.main,
                            borderWidth: '2px',
                          },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: scheduleColors.secondary.main,
                        }
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label={t.toTime}
                      type="time"
                      value={formatTime(schedule.toTime)}
                      onChange={(e) => setSchedule({ ...schedule, toTime: e.target.value + ":00" })}
                      InputLabelProps={{ shrink: true }}
                      inputProps={{ step: 300 }}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: '12px',
                          background: scheduleColors.background.paper,
                          '&:hover fieldset': {
                            borderColor: scheduleColors.secondary.main,
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: scheduleColors.secondary.main,
                            borderWidth: '2px',
                          },
                        },
                        '& .MuiInputLabel-root.Mui-focused': {
                          color: scheduleColors.secondary.main,
                        }
                      }}
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={schedule.available}
                          onChange={(e) => setSchedule({ ...schedule, available: e.target.checked })}
                          sx={{
                            '& .MuiSwitch-switchBase.Mui-checked': {
                              color: scheduleColors.success,
                              '&:hover': {
                                backgroundColor: alpha(scheduleColors.success, 0.08),
                              },
                            },
                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                              backgroundColor: scheduleColors.success,       
                            },
                          }}
                        />
                      }
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          {schedule.available ? <EventAvailableIcon sx={{ mr: 1, color: scheduleColors.success }} /> : <EventBusyIcon sx={{ mr: 1, color: scheduleColors.error }} />}
                          <Typography sx={{ fontWeight: '600', color: scheduleColors.text.primary }}>
                            {t.available}
                          </Typography>
                        </Box>
                      }
                      sx={{ mt: 2 }}
                    />
                  </Grid>
                </Grid>
                
                {/* Dialog Actions */}
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'flex-end', 
                  gap: 2, 
                  mt: 4,
                  pt: 3,
                  borderTop: `1px solid ${alpha(scheduleColors.secondary.main, 0.2)}`
                }}>
                  <Button
                    variant="outlined"
                    onClick={() => setOpen(false)}
                    disabled={loading}
                    sx={{
                      borderRadius: '12px',
                      borderColor: scheduleColors.text.secondary,
                      color: scheduleColors.text.secondary,
                      fontWeight: '600',
                      px: 3,
                      py: 1,
                      '&:hover': {
                        borderColor: scheduleColors.secondary.main,
                        color: scheduleColors.secondary.main,
                        background: alpha(scheduleColors.secondary.main, 0.05),
                      }
                    }}
                  >
                    {t.cancel}
                  </Button>
                  
                  <GradientButton
                    onClick={isEditMode ? updateSchedule : addSchedule}
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : (isEditMode ? <EditIcon /> : <AddIcon />)}
                    sx={{
                      px: 4,
                      py: 1,
                      fontSize: '1rem',
                      fontWeight: 'bold'
                    }}
                  >
                    {loading ? t.loading : isEditMode ? t.update : t.add}
                  </GradientButton>
                </Box>
              </Box>
            </ModernDialog>
          </Slide>
        </>
      )}
      
      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity={snackbar.severity}
          variant="filled"
          sx={{ 
            width: '100%',
            borderRadius: '12px',
            fontWeight: '600',
            boxShadow: `0 8px 25px ${alpha(scheduleColors.primary.main, 0.3)}`,
            '&.MuiAlert-filledSuccess': {
              background: `linear-gradient(135deg, ${scheduleColors.success} 0%, #229954 100%)`,
            },
            '&.MuiAlert-filledError': {
              background: `linear-gradient(135deg, ${scheduleColors.error} 0%, #C0392B 100%)`,
            },
            '&.MuiAlert-filledWarning': {
              background: `linear-gradient(135deg, ${scheduleColors.warning} 0%, #D68910 100%)`,
            },
            '&.MuiAlert-filledInfo': {
              background: `linear-gradient(135deg, ${scheduleColors.info} 0%, #2E86C1 100%)`,
            }
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};
