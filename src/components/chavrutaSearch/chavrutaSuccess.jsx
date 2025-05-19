


import { 
  Avatar, 
  Box, 
  Button,
  Card,
  CardActions, 
  CardContent, 
  CardHeader,
  Chip, 
  CircularProgress, 
  Container, 
  Divider, 
  Fade, 
  Grid, 
  Grow, 
  Paper,
  Typography, 
  Zoom
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

// Icons
import {FaBook} from 'react-icons/fa';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BookIcon from '@mui/icons-material/Book';
import SubjectIcon from '@mui/icons-material/Subject';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { GetRequestByCodeThunk } from "../../redux/Requests/getRequestByCodeThunk";
import { GetScheduleByCodeThunk } from "../../redux/Schedule/getScheduleByCodeThunk";
import { GetOfferByCodeThunk } from "../../redux/Offers/getOffersByCodeThunk";
import { GetByIdThunk } from "../../redux/Person/getByIdThunk";
import { useSelector } from "react-redux";

export const ChavrutaSuccess = () => {
    const { requestCode, chavrutaCode, scheduleCode } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [loading, setLoading] = useState(true);
    const [chavrutaData, setChavrutaData] = useState(null);
    const [requestData, setRequestData] = useState(null);
    const [scheduleData, setScheduleData] = useState(null);
    const person = useSelector(state=> state.people.person)
    const requestResult = useSelector(state=> state.requests.request)
    const chavrutaResult = useSelector(state=> state.offers.offer)
    const scheduleResult = useSelector(state=> state.schedule.schedule)

    useEffect(() => {
      const fetchData = async () => {
        try {
          setLoading(true);
          
          // שליפת נתונים מהשרת
          let requestResult = null;
          let chavrutaResult = null;
          let scheduleResult = null;
          let person = null;
          
          try {
            const requestAction = await dispatch(GetRequestByCodeThunk(requestCode));
            if (requestAction.payload) {
              requestResult = requestAction.payload;
              console.log("Request data loaded:", requestResult);
            } else {
              console.warn("Request data is null or undefined");
            }
          } catch (error) {
            console.error("Error fetching request data:", error);
          }
          
          try {
            const offerAction = await dispatch(GetOfferByCodeThunk(chavrutaCode));
            if (offerAction.payload) {
              chavrutaResult = offerAction.payload;
              console.log("Chavruta data loaded:", chavrutaResult);
              
              // נסה לקבל את פרטי האדם רק אם יש מזהה אדם
              if (chavrutaResult.personId) {
                try {
                  const personAction = await dispatch(GetByIdThunk(chavrutaResult.personId));
                  if (personAction.payload) {
                    person = personAction.payload;
                    console.log("Person data loaded:", person);
                  } else {
                    console.warn("Person data is null or undefined");
                  }
                } catch (personError) {
                  console.error("Error fetching person data:", personError);
                }
              }
            } else {
              console.warn("Chavruta data is null or undefined");
            }
          } catch (error) {
            console.error("Error fetching chavruta data:", error);
          }
          
          try {
            const scheduleAction = await dispatch(GetScheduleByCodeThunk(scheduleCode));
            if (scheduleAction.payload) {
              scheduleResult = scheduleAction.payload;
              console.log("Schedule data loaded:", scheduleResult);
            } else {
              console.warn("Schedule data is null or undefined");
            }
          } catch (error) {
            console.error("Error fetching schedule data:", error);
          }
          
          // הגדרת נתוני הבקשה עם ערכי ברירת מחדל
          setRequestData({
            code: requestCode,
            book: requestResult?.book || 'לא צוין',
            subject: requestResult?.subject || 'לא צוין',
            mode: requestResult?.mode || 'לא צוין',
            personId: requestResult?.personId || '',
          });
          
          // הגדרת נתוני החברותא עם ערכי ברירת מחדל
          setChavrutaData({
            code: chavrutaCode,
            personId: chavrutaResult?.personId || '',
            name: person ? `${person.firstName || ''} ${person.lastName || ''}`.trim() : 'לא צוין',
            phone: person?.phone || 'לא זמין',
            email: person?.email || 'לא זמין',
            age: person?.birthDate || 'לא זמין',
            address: person?.country && person?.city ? 
              `${person.country}, ${person.city}` : 'לא זמין',
          });
          
          // הגדרת נתוני הלו"ז עם ערכי ברירת מחדל
          setScheduleData({
            code: scheduleCode,
            dayInWeek: scheduleResult?.dayInWeek !== undefined ? 
              getDayInHebrew(scheduleResult.dayInWeek) : 'לא צוין',
            fromTime: scheduleResult?.fromTime || 'לא צוין',
            toTime: scheduleResult?.toTime || 'לא צוין',
            available: scheduleResult?.available !== undefined ? scheduleResult.available : true,
          });
          
          // הפסקת הטעינה
          setLoading(false);
        } catch (error) {
          console.error("Error in fetchData:", error);
          setLoading(false);
        }
      };
      
      fetchData();
    }, [dispatch, requestCode, chavrutaCode, scheduleCode]);
    
    // עדכון פונקציית getDayInHebrew כדי לטפל במקרים של ערכים לא תקינים
    const getDayInHebrew = (dayInWeek) => {
      if (dayInWeek === null || dayInWeek === undefined) return 'לא צוין';
      
      const days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
      // בדיקה שהערך הוא מספר בטווח תקין
      if (typeof dayInWeek === 'number' && dayInWeek >= 1 && dayInWeek <= 7) {
        return days[dayInWeek - 1];
      }
      
      // אם הערך לא תקין, החזר את הערך המקורי או הודעת ברירת מחדל
      return String(dayInWeek) || 'לא צוין';
    };
    
    if (loading) {
      return (
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '80vh' 
        }}>
          <CircularProgress size={60} thickness={4} color="success" />
          <Typography variant="h6" sx={{ mt: 3 }}>
            מכין את פרטי החברותא שלך...
          </Typography>
        </Box>
      );
    }

    const calculateAge = (birthDate) => {
      // בדיקה אם birthDate הוא מחרוזת או אובייקט Date
      const birthDateObj = typeof birthDate === 'string' ? new Date(birthDate) : birthDate;
      
      // בדיקה אם התאריך תקין
      if (isNaN(birthDateObj.getTime())) {
        return 'N/A'; // אם התאריך לא תקין, החזר 'לא זמין'
      }
      
      const today = new Date();
      let age = today.getFullYear() - birthDateObj.getFullYear();
      const monthDiff = today.getMonth() - birthDateObj.getMonth();
      
      // אם עוד לא הגיע יום ההולדת השנה, הפחת שנה
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
      }
      
      return age;
    };
  
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Fade in={true} timeout={1000}>
          <Card sx={{ 
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '6px',
              bgcolor: 'success.main'
            }
          }}>
            <Box sx={{ 
              bgcolor: 'success.main',
              color: 'white',
              p: 4,
              textAlign: 'center'
            }}>
              <Zoom in={true} timeout={1500}>
                <Avatar 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    mx: 'auto', 
                    mb: 2,
                    bgcolor: 'success.light',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  <CheckCircleIcon sx={{ fontSize: 50 }} />
                </Avatar>
              </Zoom>
              
              <Typography variant="h4" fontWeight="bold" gutterBottom>
                מזל טוב! החברותא נקבעה בהצלחה
              </Typography>
              
              <Typography variant="h6">
                התחלתם את המסע המשותף שלכם בלימוד התורה
              </Typography>
            </Box>
            
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ 
                textAlign: 'center', 
                mb: 4,
                fontWeight: 'medium',
                color: 'text.primary',
                borderBottom: '2px solid',
                borderColor: 'divider',
                pb: 2
              }}>
                <HandshakeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                פרטי החברותא שלך
              </Typography>
              
              <Grid container spacing={3}>
                {/* מידע על הלימוד */}
                <Grid item xs={12} md={6}>
                  <Grow in={true} timeout={1000}>
                    <Paper sx={{ 
                      p: 2, 
                      height: '100%', 
                      borderRadius: 2,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <Typography variant="h6" gutterBottom sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        color: 'primary.main',
                        mb: 2
                      }}>
                        <BookIcon sx={{ mr: 1 }} />
                        פרטי הלימוד
                      </Typography>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" color="text.secondary">
                          ספר:
                        </Typography>
                        <Typography variant="body1" fontWeight="medium">
                          {requestData.book}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" color="text.secondary">
                          נושא:
                        </Typography>
                        <Typography variant="body1" fontWeight="medium">
                          {requestData.subject}
                        </Typography>
                      </Box>
                      
                      <Box>
                        <Typography variant="subtitle2" color="text.secondary">
                          אופן הלימוד:
                        </Typography>
                        <Typography variant="body1" fontWeight="medium">
                          {requestData.mode}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ mt: 'auto', pt: 2 }}>
                        <Chip 
                          icon={<ScheduleIcon />} 
                          label={`יום ${getDayInHebrew(scheduleData.dayInWeek)}, ${scheduleData.fromTime.substring(0, 5)} - ${scheduleData.toTime.substring(0, 5)}`}
                          color="primary"
                          sx={{ fontWeight: 'medium' }}
                        />
                      </Box>
                    </Paper>
                  </Grow>
                </Grid>
                
                {/* מידע על החברותא */}
                <Grid item xs={12} md={6}>
                  <Grow in={true} timeout={1500}>
                    <Paper sx={{ 
                      p: 2, 
                      height: '100%', 
                      borderRadius: 2,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}>
                      <Typography variant="h6" gutterBottom sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        color: 'success.main',
                        mb: 2
                      }}>
                        <PersonIcon sx={{ mr: 1 }} />
                        פרטי החברותא שלך
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <Avatar 
                          sx={{ 
                            width: 60, 
                            height: 60, 
                            mr: 2,
                            bgcolor: 'primary.main'
                          }}
                        >
                          {chavrutaData.name.substring(0, 1)}
                        </Avatar>
                        
                        <Box>
                          <Typography variant="h6" fontWeight="bold">
                            {chavrutaData.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            גיל: {chavrutaData.age}
                          </Typography>
                        </Box>
                      </Box>
                      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                      <FaBook style={{ color: 'text.secondary', marginRight: '8px' }} />
                        <Typography variant="body1">
                          {chavrutaData.denomination}
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                        <HomeIcon sx={{ mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body1">
                          {chavrutaData.address}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                        <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body1">
                          {chavrutaData.email}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <WhatsAppIcon sx={{ mr: 1, color: 'text.secondary' }} />
                        <Typography variant="body1">
                          {chavrutaData.phone}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grow>
                </Grid>
              </Grid>
              
              <Box sx={{ 
                mt: 4, 
                p: 3, 
                bgcolor: 'primary.light', 
                borderRadius: 2,
                textAlign: 'center',
                color: 'primary.contrastText'
              }}>
                <Typography variant="h6" gutterBottom>
                  ברכות חמות על התחלת דרך הלימוד המשותפת!
                </Typography>
                <Typography variant="body1">
                  "אין התורה נקנית אלא בחבורה" (ברכות סג:)
                </Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  מי ייתן ותזכו ללמוד יחד מתוך שמחה, אהבת תורה ויראת שמים.
                </Typography>
              </Box>
            </CardContent>
            
            <Divider />
            
            <CardActions sx={{ p: 3, justifyContent: 'center' }}>
              <Button 
                variant="outlined" 
                color="primary"
                startIcon={<CalendarTodayIcon />}
                onClick={() => navigate(`/schedule/${requestData.personId}`)}
                sx={{ 
                  mx: 1,
                  borderRadius: 5,
                  px: 3,
                  fontWeight: 'bold'
                }}
              >
                למערכת השעות
              </Button>
              
              <Button 
                variant="contained" 
                color="success"
                startIcon={<HomeIcon />}
                onClick={() => navigate(`/request/${requestData.personId}`)}
                sx={{ 
                  mx: 1,
                  borderRadius: 5,
                  px: 3,
                  fontWeight: 'bold'
                }}
              >
                לדף הבית
              </Button>
            </CardActions>
          </Card>
        </Fade>
      </Container>
    );
};