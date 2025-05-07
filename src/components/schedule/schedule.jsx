// // // import { Link, useNavigate, useParams } from "react-router-dom";
// // // import { useEffect, useRef, useState } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import * as React from 'react';
// // // import "./schedule.css"
// // // import { AddScheduleThunk } from "../../redux/Schedule/addScheduleThunk";
// // // import { GetScheduleByIdThunk } from "../../redux/Schedule/getScheduleByIdThunk";
// // // import { Box, Button, Dialog, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
// // // import Icon from '@mui/material/Icon';
// // // import Fab from '@mui/material/Fab';
// // // import AddIcon from '@mui/icons-material/Add';
// // // import { editSchedule } from "../../redux/Schedule/scheduleSlice";
// // // import { UpdateScheduleThunk } from "../../redux/Schedule/updateScheduleThunk";
// // // import { Home } from "@mui/icons-material";
// // // import ScheduleCalendar from "./newSchedule";
// // // import { ScheduleDisplay } from "../chavruta/chavruta";
// // // // import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// // // // import { MultiInputTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputTimeRangeField';
// // // export const Schedule = () => {
// // //     const [localFilters, setLocalFilters] = useState('');
// // //     const param = useParams()
// // //     const dispatch = useDispatch();
// // //     const navigate = useNavigate()
// // //     const sch = useSelector(s => s.schedule.schedule)
// // //     const [schedule, setSchedule] = useState({ code: sch.code, dayInWeek: sch.day, fromTime: sch.fromTime, toTime: sch.toTime, available: sch.available, personId: param.id });
// // //     const [key, setKey] = useState(false)
// // //     const scheduleArr = useSelector(state => state.schedule.schedules)
// // //     const ref = useRef(false)
// // //     const getSchedule = async () => {
// // //         dispatch(GetScheduleByIdThunk(param.id))
// // //     }
// // //     const addSchedule = async () => {
// // //         dispatch(AddScheduleThunk(schedule))
// // //         ref.current.close()
// // //     }
// // //     const updateSchedule = async () => {
// // //         editSchedule(schedule)
// // //         dispatch(UpdateScheduleThunk({ code: schedule.code, schedule: schedule }))
// // //         // dispatch(GetRequestsByIdThunk(param.id))
// // //         ref.current.close()
// // //     }
    
// // //     useEffect(() => {
// // //         getSchedule()
// // //     }, [])
// // //     return <div>
// // //         {/* <button onClick={() => getSchedule()}>מערכת שבועית</button>  */}
// // //         {/* <link
// // //             rel="stylesheet"
// // //             href="https://fonts.googleapis.com/icon?family=Material+Icons"
// // //         /> */}


// // //         <Home ></Home>
// // //         <dialog ref={ref}><div className='header'>
// // //         </div >
// // //             {/* <label>ת.ז</label><br />
// // //             <label type="password" >{param.id}</label><br /> */}
// // //             <label>day:</label><br />
// // //             <input type="text" placeholder="day" value={schedule.dayInWeek} onChange={x => setSchedule({ ...schedule, dayInWeek: x.target.value })}></input><br />
// // //             <label>from time:</label><br />
// // //             <input type="time" value={schedule.fromTime} onChange={x => setSchedule({ ...schedule, fromTime: x.target.value + ":00" })}></input><br />
// // //             <label>to time:</label><br />
// // //             <input type="time" value={schedule.toTime} onChange={x => setSchedule({ ...schedule, toTime: x.target.value + ":00" })}></input><br />
// // //             {key == true && <button onClick={() => updateSchedule()}>עדכון</button>}
// // //             {key == false && <button onClick={() => addSchedule()}>הוספה</button>}
// // //             <button onClick={() => ref.current.close()}>יציאה</button>
// // //             {/* <DemoItem
// // //           label="MultiInputDateRangeField"
// // //         //   component="MultiInputDateRangeField"
// // //         >
// // //           <MultiInputTimeRangeField defaultValue={[schedule.fromTime, schedule.toTime]} />
// // //         </DemoItem> */}
// // //         </dialog>

// // //         <TableContainer sx={{ minWidth: 700 }} aria-label="customized table" className="tableContainer" align="center">
// // //             <TableHead className="tableHead">
// // //                 <TableRow className="tableRow" >
// // //                     <TableCell align="center" >  <Fab color="primary" aria-label="add" onClick={() => { ref.current.showModal(); setKey(false) }}>
// // //                         <AddIcon />
// // //                     </Fab></TableCell>
// // //                     <TableCell align="center">Sunday</TableCell>
// // //                     <TableCell align="center">Monday</TableCell>
// // //                     <TableCell align="center">Tuesday</TableCell>
// // //                     <TableCell align="center">Wednesday</TableCell>
// // //                     <TableCell align="center">Thursday </TableCell>
// // //                     <TableCell align="center">Friday</TableCell>
// // //                     <TableCell align="center">Shabbos</TableCell>

// // //                 </TableRow>
// // //             </TableHead>
// // //             <TableBody>
// // //                 {scheduleArr?.map(x =>
// // //                     <TableRow className="tableRow" component="th" scope="row">
// // //                         <TableCell align="center">{x.dayInWeek == "sun" ? `${x.fromTime} - ${x.toTime}` : ""} </TableCell>
// // //                         <TableCell align="center">{x.dayInWeek == "mon" ? `${x.fromTime} - ${x.toTime}` : ""}</TableCell>
// // //                         <TableCell align="center">{x.dayInWeek == "tue" ? `${x.fromTime} - ${x.toTime}` : ""}</TableCell>
// // //                         <TableCell align="center">{x.dayInWeek == "wed" ? `${x.fromTime} - ${x.toTime}` : ""}</TableCell>
// // //                         <TableCell align="center">{x.dayInWeek == "thu" ? `${x.fromTime} - ${x.toTime}` : ""}</TableCell>
// // //                         <TableCell align="center">{x.dayInWeek == "fri" ? `${x.fromTime} - ${x.toTime}` : ""}</TableCell>
// // //                         <TableCell align="center">{x.dayInWeek == "shabbos" ? `${x.fromTime} - ${x.toTime}` : ""}</TableCell>
// // //                     </TableRow>
// // //                 )}
// // //                 <Button variant="outlined" onClick={() => navigate(-1)}>back</Button>
// // //             </TableBody>
// // //         </TableContainer>
// // //         <Grid item xs={12}>
// // //             <ScheduleDisplay schedules={scheduleArr} />
// // //         </Grid>

// // //     </div>
// // // }


import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as React from 'react';
import "./schedule.css";
import { AddScheduleThunk } from "../../redux/Schedule/addScheduleThunk";
import { GetScheduleByIdThunk } from "../../redux/Schedule/getScheduleByIdThunk";
import { editSchedule } from "../../redux/Schedule/scheduleSlice";
import { UpdateScheduleThunk } from "../../redux/Schedule/updateScheduleThunk";
import { ScheduleDisplay } from "../chavruta/chavruta";

// Import all Material UI components from the root package
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Fab,
  Grid,
  Card,
  CardContent,
  CardActions,
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
  CircularProgress
} from "@mui/material";

// Icons
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventBusyIcon from '@mui/icons-material/EventBusy';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';

export const Schedule = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // State
  const [open, setOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'he' for Hebrew
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
      unavailableTime: "Unavailable Time"
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
      unavailableTime: "זמן לא פנוי"
    }
  };

  const t = translations[language];
  
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
  
  const addSchedule = async () => {
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
  };
  
  const updateSchedule = async () => {
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
  };
  
  const formatTime = (timeString) => {
    if (!timeString) return '';
    
    try {
      // Remove seconds if present
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
    <div style={{ direction: language === 'he' ? 'rtl' : 'ltr' }}>
      <AppBar position="static" style={{ 
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        marginBottom: '20px'
      }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {t.weeklySchedule}
          </Typography>
          
          <Button color="inherit" onClick={handleLanguageChange} startIcon={<LanguageIcon />}>
            {language === 'en' ? 'עברית' : 'English'}
          </Button>
          
          <IconButton color="inherit" onClick={() => navigate(-1)}>
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg" style={{ marginTop: '20px', marginBottom: '40px' }}>
        {loading ? (
          <Box style={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
            <CircularProgress />
            <Typography variant="body1" style={{ marginTop: '10px' }}>
              {t.loading}
            </Typography>
          </Box>
        ) : (
          <>
            <Paper style={{ padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
              <Box style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: '20px' 
              }}>
                <Typography variant="h6">
                  {t.weeklySchedule}
                </Typography>
                
                <Button
                  variant="contained"
                  color="primary"
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
                >
                  {t.addTimeSlot}
                </Button>
              </Box>
              
              <TableContainer>
                <Table aria-label="schedule table">
                  <TableHead>
                    <TableRow style={{ backgroundColor: '#f5f5f5' }}>
                      <TableCell align="center">{t.day}</TableCell>
                      <TableCell align="center">{t.fromTime}</TableCell>
                      <TableCell align="center">{t.toTime}</TableCell>
                      <TableCell align="center">{t.available}</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {scheduleArr?.map((item) => (
                      <TableRow key={item.code} hover>
                        <TableCell align="center">
                          {dayMapping[item.dayInWeek]}
                        </TableCell>
                        <TableCell align="center">
                          {formatTime(item.fromTime)}
                        </TableCell>
                        <TableCell align="center">
                          {formatTime(item.toTime)}
                        </TableCell>
                        <TableCell align="center">
                          <Chip 
                            label={item.available ? t.availableTime : t.unavailableTime}
                            color={item.available ? "success" : "error"}
                            variant="outlined"
                            size="small"
                          />
                        </TableCell>
                        <TableCell align="center">
                          <IconButton 
                            color="secondary" 
                            aria-label="edit"
                            onClick={() => {
                              setSchedule(item);
                              setIsEditMode(true);
                              setOpen(true);
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <ScheduleDisplay schedules={scheduleArr} />
              </Grid>
            </Grid>
            
            <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<HomeIcon />}
                onClick={() => navigate(-1)}
              >
                {t.back}
              </Button>
            </Box>
          </>
        )}
      </Container>
      
      {/* Dialog for adding/editing time slots */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle style={{ 
          backgroundColor: '#2196F3',
          color: 'white'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6">
              {isEditMode ? "Edit Time Slot" : "Add Time Slot"}
            </Typography>
            <IconButton 
              onClick={() => setOpen(false)}
              style={{ color: 'white' }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        
        <DialogContent style={{ paddingTop: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="day-select-label">{t.day}</InputLabel>
                <InputLabel id="day-select-label">{t.day}</InputLabel>
                <Select
                  labelId="day-select-label"
                  id="day-select"
                  value={schedule.dayInWeek}
                  label={t.day}
                  onChange={(e) => setSchedule({ ...schedule, dayInWeek: e.target.value })}
                >
                  {days.map(day => (
                    <MenuItem value={day} key={day}>{dayMapping[day]}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                label={t.fromTime}
                type="time"
                value={formatTime(schedule.fromTime)}
                onChange={(e) => setSchedule({ ...schedule, fromTime: e.target.value + ":00" })}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                fullWidth
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                label={t.toTime}
                type="time"
                value={formatTime(schedule.toTime)}
                onChange={(e) => setSchedule({ ...schedule, toTime: e.target.value + ":00" })}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                fullWidth
              />
            </Grid>
            
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={schedule.available}
                    onChange={(e) => setSchedule({ ...schedule, available: e.target.checked })}
                    color="success"
                  />
                }
                label={t.available}
              />
            </Grid>
          </Grid>
        </DialogContent>
        
        <DialogActions style={{ padding: '16px' }}>
          <Button
            variant="outlined"
            onClick={() => setOpen(false)}
          >
            {t.cancel}
          </Button>
          
          <Button
            variant="contained"
            color="primary"
            onClick={isEditMode ? updateSchedule : addSchedule}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
          >
            {loading ? t.loading : isEditMode ? t.update : t.add}
          </Button>
        </DialogActions>
      </Dialog>
      
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
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      
      {/* Floating Action Button for adding time slots */}
      <Fab
        color="secondary"
        aria-label={t.addTimeSlot}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: language === 'he' ? 'auto' : '24px',
          left: language === 'he' ? '24px' : 'auto',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        }}
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
        <AddIcon />
      </Fab>
    </div>
  );
};