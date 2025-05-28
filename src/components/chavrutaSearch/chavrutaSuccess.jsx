


// import { 
//   Avatar, 
//   Box, 
//   Button,
//   Card,
//   CardActions, 
//   CardContent, 
//   CardHeader,
//   Chip, 
//   CircularProgress, 
//   Container, 
//   Divider, 
//   Fade, 
//   Grid, 
//   Grow, 
//   Paper,
//   Typography, 
//   Zoom
// } from "@mui/material";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";

// // Icons
// import {FaBook} from 'react-icons/fa';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import BookIcon from '@mui/icons-material/Book';
// import SubjectIcon from '@mui/icons-material/Subject';
// import SchoolIcon from '@mui/icons-material/School';
// import PersonIcon from '@mui/icons-material/Person';
// import HomeIcon from '@mui/icons-material/Home';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import EmailIcon from '@mui/icons-material/Email';
// import ScheduleIcon from '@mui/icons-material/Schedule';
// import HandshakeIcon from '@mui/icons-material/Handshake';
// import { GetRequestByCodeThunk } from "../../redux/Requests/getRequestByCodeThunk";
// import { GetScheduleByCodeThunk } from "../../redux/Schedule/getScheduleByCodeThunk";
// import { GetOfferByCodeThunk } from "../../redux/Offers/getOffersByCodeThunk";
// import { GetByIdThunk } from "../../redux/Person/getByIdThunk";
// import { useSelector } from "react-redux";

// export const ChavrutaSuccess = () => {
//     const { requestCode, chavrutaCode, scheduleCode } = useParams();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
    
//     const [loading, setLoading] = useState(true);
//     const [chavrutaData, setChavrutaData] = useState(null);
//     const [requestData, setRequestData] = useState(null);
//     const [scheduleData, setScheduleData] = useState(null);
//     const person = useSelector(state=> state.people.person)
//     const requestResult = useSelector(state=> state.requests.request)
//     const chavrutaResult = useSelector(state=> state.offers.offer)
//     const scheduleResult = useSelector(state=> state.schedule.schedule)

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           setLoading(true);
          
//           // שליפת נתונים מהשרת
//           let requestResult = null;
//           let chavrutaResult = null;
//           let scheduleResult = null;
//           let person = null;
          
//           try {
//             const requestAction = await dispatch(GetRequestByCodeThunk(requestCode));
//             if (requestAction.payload) {
//               requestResult = requestAction.payload;
//               console.log("Request data loaded:", requestResult);
//             } else {
//               console.warn("Request data is null or undefined");
//             }
//           } catch (error) {
//             console.error("Error fetching request data:", error);
//           }
          
//           try {
//             const offerAction = await dispatch(GetOfferByCodeThunk(chavrutaCode));
//             if (offerAction.payload) {
//               chavrutaResult = offerAction.payload;
//               console.log("Chavruta data loaded:", chavrutaResult);
              
//               // נסה לקבל את פרטי האדם רק אם יש מזהה אדם
//               if (chavrutaResult.personId) {
//                 try {
//                   const personAction = await dispatch(GetByIdThunk(chavrutaResult.personId));
//                   if (personAction.payload) {
//                     person = personAction.payload;
//                     console.log("Person data loaded:", person);
//                   } else {
//                     console.warn("Person data is null or undefined");
//                   }
//                 } catch (personError) {
//                   console.error("Error fetching person data:", personError);
//                 }
//               }
//             } else {
//               console.warn("Chavruta data is null or undefined");
//             }
//           } catch (error) {
//             console.error("Error fetching chavruta data:", error);
//           }
          
//           try {
//             const scheduleAction = await dispatch(GetScheduleByCodeThunk(scheduleCode));
//             if (scheduleAction.payload) {
//               scheduleResult = scheduleAction.payload;
//               console.log("Schedule data loaded:", scheduleResult);
//             } else {
//               console.warn("Schedule data is null or undefined");
//             }
//           } catch (error) {
//             console.error("Error fetching schedule data:", error);
//           }
          
//           // הגדרת נתוני הבקשה עם ערכי ברירת מחדל
//           setRequestData({
//             code: requestCode,
//             book: requestResult?.book || 'לא צוין',
//             subject: requestResult?.subject || 'לא צוין',
//             mode: requestResult?.mode || 'לא צוין',
//             personId: requestResult?.personId || '',
//           });
          
//           // הגדרת נתוני החברותא עם ערכי ברירת מחדל
//           setChavrutaData({
//             code: chavrutaCode,
//             personId: chavrutaResult?.personId || '',
//             name: person ? `${person.firstName || ''} ${person.lastName || ''}`.trim() : 'לא צוין',
//             phone: person?.phone || 'לא זמין',
//             email: person?.email || 'לא זמין',
//             age: person?.birthDate || 'לא זמין',
//             address: person?.country && person?.city ? 
//               `${person.country}, ${person.city}` : 'לא זמין',
//           });
          
//           // הגדרת נתוני הלו"ז עם ערכי ברירת מחדל
//           setScheduleData({
//             code: scheduleCode,
//             dayInWeek: scheduleResult?.dayInWeek !== undefined ? 
//               getDayInHebrew(scheduleResult.dayInWeek) : 'לא צוין',
//             fromTime: scheduleResult?.fromTime || 'לא צוין',
//             toTime: scheduleResult?.toTime || 'לא צוין',
//             available: scheduleResult?.available !== undefined ? scheduleResult.available : true,
//           });
          
//           // הפסקת הטעינה
//           setLoading(false);
//         } catch (error) {
//           console.error("Error in fetchData:", error);
//           setLoading(false);
//         }
//       };
      
//       fetchData();
//     }, [dispatch, requestCode, chavrutaCode, scheduleCode]);
    
//     // עדכון פונקציית getDayInHebrew כדי לטפל במקרים של ערכים לא תקינים
//     const getDayInHebrew = (dayInWeek) => {
//       if (dayInWeek === null || dayInWeek === undefined) return 'לא צוין';
      
//       const days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
//       // בדיקה שהערך הוא מספר בטווח תקין
//       if (typeof dayInWeek === 'number' && dayInWeek >= 1 && dayInWeek <= 7) {
//         return days[dayInWeek - 1];
//       }
      
//       // אם הערך לא תקין, החזר את הערך המקורי או הודעת ברירת מחדל
//       return String(dayInWeek) || 'לא צוין';
//     };
    
//     if (loading) {
//       return (
//         <Box sx={{ 
//           display: 'flex', 
//           flexDirection: 'column',
//           alignItems: 'center', 
//           justifyContent: 'center', 
//           minHeight: '80vh' 
//         }}>
//           <CircularProgress size={60} thickness={4} color="success" />
//           <Typography variant="h6" sx={{ mt: 3 }}>
//             מכין את פרטי החברותא שלך...
//           </Typography>
//         </Box>
//       );
//     }

//     const calculateAge = (birthDate) => {
//       // בדיקה אם birthDate הוא מחרוזת או אובייקט Date
//       const birthDateObj = typeof birthDate === 'string' ? new Date(birthDate) : birthDate;
      
//       // בדיקה אם התאריך תקין
//       if (isNaN(birthDateObj.getTime())) {
//         return 'N/A'; // אם התאריך לא תקין, החזר 'לא זמין'
//       }
      
//       const today = new Date();
//       let age = today.getFullYear() - birthDateObj.getFullYear();
//       const monthDiff = today.getMonth() - birthDateObj.getMonth();
      
//       // אם עוד לא הגיע יום ההולדת השנה, הפחת שנה
//       if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
//         age--;
//       }
      
//       return age;
//     };
  
//     return (
//       <Container maxWidth="md" sx={{ py: 4 }}>
//         <Fade in={true} timeout={1000}>
//           <Card sx={{ 
//             borderRadius: 2,
//             overflow: 'hidden',
//             boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//             position: 'relative',
//             '&::before': {
//               content: '""',
//               position: 'absolute',
//               top: 0,
//               left: 0,
//               right: 0,
//               height: '6px',
//               bgcolor: 'success.main'
//             }
//           }}>
//             <Box sx={{ 
//               bgcolor: 'success.main',
//               color: 'white',
//               p: 4,
//               textAlign: 'center'
//             }}>
//               <Zoom in={true} timeout={1500}>
//                 <Avatar 
//                   sx={{ 
//                     width: 80, 
//                     height: 80, 
//                     mx: 'auto', 
//                     mb: 2,
//                     bgcolor: 'success.light',
//                     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
//                   }}
//                 >
//                   <CheckCircleIcon sx={{ fontSize: 50 }} />
//                 </Avatar>
//               </Zoom>
              
//               <Typography variant="h4" fontWeight="bold" gutterBottom>
//                 מזל טוב! החברותא נקבעה בהצלחה
//               </Typography>
              
//               <Typography variant="h6">
//                 התחלתם את המסע המשותף שלכם בלימוד התורה
//               </Typography>
//             </Box>
            
//             <CardContent sx={{ p: 4 }}>
//               <Typography variant="h5" gutterBottom sx={{ 
//                 textAlign: 'center', 
//                 mb: 4,
//                 fontWeight: 'medium',
//                 color: 'text.primary',
//                 borderBottom: '2px solid',
//                 borderColor: 'divider',
//                 pb: 2
//               }}>
//                 <HandshakeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
//                 פרטי החברותא שלך
//               </Typography>
              
//               <Grid container spacing={3}>
//                 {/* מידע על הלימוד */}
//                 <Grid item xs={12} md={6}>
//                   <Grow in={true} timeout={1000}>
//                     <Paper sx={{ 
//                       p: 2, 
//                       height: '100%', 
//                       borderRadius: 2,
//                       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
//                       display: 'flex',
//                       flexDirection: 'column'
//                     }}>
//                       <Typography variant="h6" gutterBottom sx={{ 
//                         display: 'flex', 
//                         alignItems: 'center',
//                         color: 'primary.main',
//                         mb: 2
//                       }}>
//                         <BookIcon sx={{ mr: 1 }} />
//                         פרטי הלימוד
//                       </Typography>
                      
//                       <Box sx={{ mb: 2 }}>
//                         <Typography variant="subtitle2" color="text.secondary">
//                           ספר:
//                         </Typography>
//                         <Typography variant="body1" fontWeight="medium">
//                           {requestData.book}
//                         </Typography>
//                       </Box>
                      
//                       <Box sx={{ mb: 2 }}>
//                         <Typography variant="subtitle2" color="text.secondary">
//                           נושא:
//                         </Typography>
//                         <Typography variant="body1" fontWeight="medium">
//                           {requestData.subject}
//                         </Typography>
//                       </Box>
                      
//                       <Box>
//                         <Typography variant="subtitle2" color="text.secondary">
//                           אופן הלימוד:
//                         </Typography>
//                         <Typography variant="body1" fontWeight="medium">
//                           {requestData.mode}
//                         </Typography>
//                       </Box>
                      
//                       <Box sx={{ mt: 'auto', pt: 2 }}>
//                         <Chip 
//                           icon={<ScheduleIcon />} 
//                           label={`יום ${getDayInHebrew(scheduleData.dayInWeek)}, ${scheduleData.fromTime.substring(0, 5)} - ${scheduleData.toTime.substring(0, 5)}`}
//                           color="primary"
//                           sx={{ fontWeight: 'medium' }}
//                         />
//                       </Box>
//                     </Paper>
//                   </Grow>
//                 </Grid>
                
//                 {/* מידע על החברותא */}
//                 <Grid item xs={12} md={6}>
//                   <Grow in={true} timeout={1500}>
//                     <Paper sx={{ 
//                       p: 2, 
//                       height: '100%', 
//                       borderRadius: 2,
//                       boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
//                       display: 'flex',
//                       flexDirection: 'column'
//                     }}>
//                       <Typography variant="h6" gutterBottom sx={{ 
//                         display: 'flex', 
//                         alignItems: 'center',
//                         color: 'success.main',
//                         mb: 2
//                       }}>
//                         <PersonIcon sx={{ mr: 1 }} />
//                         פרטי החברותא שלך
//                       </Typography>
                      
//                       <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//                         <Avatar 
//                           sx={{ 
//                             width: 60, 
//                             height: 60, 
//                             mr: 2,
//                             bgcolor: 'primary.main'
//                           }}
//                         >
//                           {chavrutaData.name.substring(0, 1)}
//                         </Avatar>
                        
//                         <Box>
//                           <Typography variant="h6" fontWeight="bold">
//                             {chavrutaData.name}
//                           </Typography>
//                           <Typography variant="body2" color="text.secondary">
//                             גיל: {chavrutaData.age}
//                           </Typography>
//                         </Box>
//                       </Box>
//                       <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
//                       <FaBook style={{ color: 'text.secondary', marginRight: '8px' }} />
//                         <Typography variant="body1">
//                           {chavrutaData.denomination}
//                         </Typography>
//                       </Box>
//                       <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
//                         <HomeIcon sx={{ mr: 1, color: 'text.secondary' }} />
//                         <Typography variant="body1">
//                           {chavrutaData.address}
//                         </Typography>
//                       </Box>
                      
//                       <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
//                         <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />
//                         <Typography variant="body1">
//                           {chavrutaData.email}
//                         </Typography>
//                       </Box>
                      
//                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                         <WhatsAppIcon sx={{ mr: 1, color: 'text.secondary' }} />
//                         <Typography variant="body1">
//                           {chavrutaData.phone}
//                         </Typography>
//                       </Box>
//                     </Paper>
//                   </Grow>
//                 </Grid>
//               </Grid>
              
//               <Box sx={{ 
//                 mt: 4, 
//                 p: 3, 
//                 bgcolor: 'primary.light', 
//                 borderRadius: 2,
//                 textAlign: 'center',
//                 color: 'primary.contrastText'
//               }}>
//                 <Typography variant="h6" gutterBottom>
//                   ברכות חמות על התחלת דרך הלימוד המשותפת!
//                 </Typography>
//                 <Typography variant="body1">
//                   "אין התורה נקנית אלא בחבורה" (ברכות סג:)
//                 </Typography>
//                 <Typography variant="body1" sx={{ mt: 1 }}>
//                   מי ייתן ותזכו ללמוד יחד מתוך שמחה, אהבת תורה ויראת שמים.
//                 </Typography>
//               </Box>
//             </CardContent>
            
//             <Divider />
            
//             <CardActions sx={{ p: 3, justifyContent: 'center' }}>
//               <Button 
//                 variant="outlined" 
//                 color="primary"
//                 startIcon={<CalendarTodayIcon />}
//                 onClick={() => navigate(`/schedule/${requestData.personId}`)}
//                 sx={{ 
//                   mx: 1,
//                   borderRadius: 5,
//                   px: 3,
//                   fontWeight: 'bold'
//                 }}
//               >
//                 למערכת השעות
//               </Button>
              
//               <Button 
//                 variant="contained" 
//                 color="success"
//                 startIcon={<HomeIcon />}
//                 onClick={() => navigate(`/request/${requestData.personId}`)}
//                 sx={{ 
//                   mx: 1,
//                   borderRadius: 5,
//                   px: 3,
//                   fontWeight: 'bold'
//                 }}
//               >
//                 לדף הבית
//               </Button>
//             </CardActions>
//           </Card>
//         </Fade>
//       </Container>
//     );
// };

// =======================================
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
  Zoom,
  Stack,
  useTheme,
  useMediaQuery,
  alpha
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
import EmailIcon from '@mui/icons-material/Email';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CelebrationIcon from '@mui/icons-material/Celebration';
import StarIcon from '@mui/icons-material/Star';
import PhoneIcon from '@mui/icons-material/Phone';

import { GetRequestByCodeThunk } from "../../redux/Requests/getRequestByCodeThunk";
import { GetScheduleByCodeThunk } from "../../redux/Schedule/getScheduleByCodeThunk";
import { GetOfferByCodeThunk } from "../../redux/Offers/getOffersByCodeThunk";
import { GetByIdThunk } from "../../redux/Person/getByIdThunk";
import { useSelector } from "react-redux";

// Styled components
import { styled, keyframes } from '@mui/material/styles';

// Chavruta Color Palette
const chavrutaColors = {
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
  warning: '#F39C12',
  error: '#E74C3C',
  info: '#3498DB'
};

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

const celebration = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.1) rotate(5deg); }
  50% { transform: scale(1.2) rotate(-5deg); }
  75% { transform: scale(1.1) rotate(3deg); }
  100% { transform: scale(1) rotate(0deg); }
`;

// Styled Components
const SuccessCard = styled(Card)(({ theme }) => ({
  borderRadius: '24px',
  overflow: 'hidden',
  background: `linear-gradient(145deg, ${chavrutaColors.background.paper} 0%, ${chavrutaColors.background.elevated} 100%)`,
  boxShadow: `0 25px 50px ${alpha(chavrutaColors.primary.main, 0.15)}`,
  border: `1px solid ${alpha(chavrutaColors.secondary.light, 0.2)}`,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '6px',
    background: `linear-gradient(90deg, ${chavrutaColors.secondary.main}, ${chavrutaColors.accent.main}, ${chavrutaColors.primary.main})`,
    backgroundSize: '200% 100%',
    animation: `${gradientShift} 3s ease infinite`,
  }
}));

const SuccessHeader = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.secondary.main} 50%, ${chavrutaColors.accent.main} 100%)`,
  backgroundSize: '200% 200%',
  animation: `${gradientShift} 8s ease infinite`,
  color: 'white',
  padding: theme.spacing(6),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
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

const InfoCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  borderRadius: '20px',
  background: `linear-gradient(145deg, ${chavrutaColors.background.paper} 0%, ${chavrutaColors.background.elevated} 100%)`,
  boxShadow: `0 10px 30px ${alpha(chavrutaColors.primary.main, 0.08)}`,
  border: `1px solid ${alpha(chavrutaColors.secondary.light, 0.2)}`,
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 20px 40px ${alpha(chavrutaColors.primary.main, 0.15)}`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${chavrutaColors.secondary.main}, ${chavrutaColors.accent.main})`,
  }
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${chavrutaColors.secondary.main} 0%, ${chavrutaColors.accent.main} 100%)`,
  color: chavrutaColors.secondary.contrastText,
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: theme.spacing(1.5, 4),
  borderRadius: '50px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: `0 6px 20px ${alpha(chavrutaColors.secondary.main, 0.3)}`,
  textTransform: 'none',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    boxShadow: `0 8px 25px ${alpha(chavrutaColors.secondary.main, 0.5)}`,
    transform: 'translateY(-2px)',
    background: `linear-gradient(135deg, ${chavrutaColors.accent.main} 0%, ${chavrutaColors.secondary.main} 100%)`,
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

const CelebrationAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  margin: '0 auto 24px',
  background: `linear-gradient(135deg, ${chavrutaColors.secondary.main} 0%, ${chavrutaColors.accent.main} 100%)`,
  boxShadow: `0 8px 25px ${alpha(chavrutaColors.secondary.main, 0.4)}`,
  animation: `${celebration} 2s ease-in-out infinite`,
  position: 'relative',
  zIndex: 1,
}));

const BlessingCard = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(4),
  background: `linear-gradient(135deg, ${alpha(chavrutaColors.primary.main, 0.05)} 0%, ${alpha(chavrutaColors.secondary.main, 0.05)} 100%)`,
  borderRadius: '20px',
  textAlign: 'center',
  border: `2px solid ${alpha(chavrutaColors.secondary.main, 0.2)}`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at center, rgba(212, 165, 116, 0.1) 0%, transparent 70%)',
    animation: `${pulse} 4s ease-in-out infinite`,
  }
}));

const LoadingOverlay = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '80vh',
  background: `linear-gradient(135deg, ${chavrutaColors.background.default} 0%, ${chavrutaColors.background.elevated} 100%)`,
}));

export const ChavrutaSuccess = () => {
    const { requestCode, chavrutaCode, scheduleCode } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
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
          
          setRequestData({
            code: requestCode,
            book: requestResult?.book || 'לא צוין',
            subject: requestResult?.subject || 'לא צוין',
            mode: requestResult?.mode || 'לא צוין',
            personId: requestResult?.personId || '',
          });
          
          setChavrutaData({
            code: chavrutaCode,
            personId: chavrutaResult?.personId || '',
            name: person ? `${person.firstName || ''} ${person.lastName || ''}`.trim() : 'לא צוין',
            phone: person?.phone || 'לא זמין',
            email: person?.email || 'לא זמין',
            age: person?.birthDate || 'לא זמין',
            address: person?.country && person?.city ? 
              `${person.country}, ${person.city}` : 'לא זמין',
              book: chavrutaResult?.book || 'לא צוין',
              subject: chavrutaResult?.subject || 'לא צוין',
              mode: chavrutaResult?.mode || 'לא צוין',
            });
            
            setScheduleData({
              code: scheduleCode,
              day: scheduleResult?.day || 'לא צוין',
              startTime: scheduleResult?.startTime || 'לא צוין',
              endTime: scheduleResult?.endTime || 'לא צוין',
              available: scheduleResult?.available || false,
            });
            
          } catch (error) {
            console.error("Error in fetchData:", error);
          } finally {
            setLoading(false);
          }
        };
        
        fetchData();
      }, [requestCode, chavrutaCode, scheduleCode, dispatch]);
  
      if (loading) {
        return (
          <LoadingOverlay>
            <Box sx={{ textAlign: 'center' }}>
              <CircularProgress 
                size={80}
                thickness={4}
                sx={{ 
                  color: chavrutaColors.secondary.main,
                  mb: 3,
                  '& .MuiCircularProgress-circle': {
                    strokeLinecap: 'round',
                  }
                }} 
              />
              <Typography variant="h5" sx={{ 
                color: chavrutaColors.text.primary,
                fontWeight: 'bold',
                mb: 1
              }}>
                טוען נתונים...
              </Typography>
              <Typography variant="body1" sx={{ color: chavrutaColors.text.secondary }}>
                מכין את פרטי החברותא שלך
              </Typography>
            </Box>
          </LoadingOverlay>
        );
      }
  
      return (
        <Box sx={{ 
          minHeight: '100vh',
          background: `linear-gradient(135deg, ${chavrutaColors.background.default} 0%, ${chavrutaColors.background.elevated} 100%)`,
          py: 4,
          direction: 'rtl'
        }}>
          <Container maxWidth="lg">
            {/* Success Header */}
            <Zoom in={true} timeout={1000}>
              <SuccessCard sx={{ mb: 4 }}>
                <SuccessHeader>
                  <CelebrationAvatar>
                    <CelebrationIcon sx={{ fontSize: 50, color: 'white' }} />
                  </CelebrationAvatar>
                  
                  <Typography variant="h3" sx={{ 
                    fontWeight: 'bold', 
                    mb: 2,
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    🎉 מזל טוב! מצאת חברותא! 🎉
                  </Typography>
                  
                  <Typography variant="h6" sx={{ 
                    opacity: 0.95,
                    maxWidth: 600,
                    mx: 'auto',
                    lineHeight: 1.6,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    השידוך הושלם בהצלחה! הנה פרטי שותף הלימוד שלך
                  </Typography>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: 2, 
                    mt: 3,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon 
                        key={i}
                        sx={{ 
                          color: chavrutaColors.secondary.main,
                          fontSize: 30,
                          animation: `${pulse} 2s ease-in-out infinite`,
                          animationDelay: `${i * 0.2}s`
                        }} 
                      />
                    ))}
                  </Box>
                </SuccessHeader>
              </SuccessCard>
            </Zoom>
  
            <Grid container spacing={4}>
              {/* Chavruta Details */}
              <Grid item xs={12} lg={8}>
                <Fade in={true} timeout={1500}>
                  <InfoCard>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: 3,
                      pb: 2,
                      borderBottom: `2px solid ${alpha(chavrutaColors.secondary.main, 0.1)}`
                    }}>
                      <Box sx={{ 
                        p: 2, 
                        borderRadius: '16px', 
                        bgcolor: alpha(chavrutaColors.primary.main, 0.1),
                        color: chavrutaColors.primary.main,
                        mr: 2
                      }}>
                        <HandshakeIcon sx={{ fontSize: 32 }} />
                      </Box>
                      <Typography variant="h4" sx={{ 
                        fontWeight: 'bold',
                        color: chavrutaColors.text.primary,
                        background: `linear-gradient(45deg, ${chavrutaColors.primary.main}, ${chavrutaColors.secondary.main})`,
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}>
                        פרטי החברותא שלך
                      </Typography>
                    </Box>
  
                    <Grid container spacing={3}>
                      <Grid item xs={12} md={6}>
                        <Box sx={{ 
                          p: 3, 
                          borderRadius: '16px',
                          bgcolor: alpha(chavrutaColors.secondary.main, 0.05),
                          border: `1px solid ${alpha(chavrutaColors.secondary.main, 0.2)}`,
                          height: '100%'
                        }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <PersonIcon sx={{ color: chavrutaColors.secondary.main, mr: 1 }} />
                            <Typography variant="h6" fontWeight="bold" color={chavrutaColors.text.primary}>
                              פרטים אישיים
                            </Typography>
                          </Box>
                          <Stack spacing={2}>
                            <Box>
                              <Typography variant="caption" color="text.secondary" fontWeight="medium">
                                שם מלא
                              </Typography>
                              <Typography variant="h6" fontWeight="bold" color={chavrutaColors.text.primary}>
                                {chavrutaData?.name}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="caption" color="text.secondary" fontWeight="medium">
                                מיקום
                              </Typography>
                              <Typography variant="body1" color={chavrutaColors.text.primary}>
                                {chavrutaData?.address}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography variant="caption" color="text.secondary" fontWeight="medium">
                                קוד חברותא
                              </Typography>
                              <Chip 
                                label={chavrutaData?.code}
                                sx={{
                                  bgcolor: chavrutaColors.secondary.main,
                                  color: chavrutaColors.secondary.contrastText,
                                  fontWeight: 'bold'
                                }}
                              />
                            </Box>
                          </Stack>
                        </Box>
                      </Grid>
  
                      <Grid item xs={12} md={6}>
                        <Box sx={{ 
                          p: 3, 
                          borderRadius: '16px',
                          bgcolor: alpha(chavrutaColors.primary.main, 0.05),
                          border: `1px solid ${alpha(chavrutaColors.primary.main, 0.2)}`,
                          height: '100%'
                        }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <AutoStoriesIcon sx={{ color: chavrutaColors.primary.main, mr: 1 }} />
                            <Typography variant="h6" fontWeight="bold" color={chavrutaColors.text.primary}>
                              נושאי הלימוד
                            </Typography>
                          </Box>
                          <Stack spacing={2}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <BookIcon sx={{ color: chavrutaColors.primary.main, fontSize: 20 }} />
                              <Box>
                                <Typography variant="caption" color="text.secondary" fontWeight="medium">
                                  ספר
                                </Typography>
                                <Typography variant="body1" fontWeight="bold" color={chavrutaColors.text.primary}>
                                  {chavrutaData?.book}
                                </Typography>
                              </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <SubjectIcon sx={{ color: chavrutaColors.secondary.main, fontSize: 20 }} />
                              <Box>
                                <Typography variant="caption" color="text.secondary" fontWeight="medium">
                                  נושא
                                </Typography>
                                <Typography variant="body1" fontWeight="bold" color={chavrutaColors.text.primary}>
                                  {chavrutaData?.subject}
                                </Typography>
                              </Box>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <SchoolIcon sx={{ color: chavrutaColors.accent.main, fontSize: 20 }} />
                              <Box>
                                <Typography variant="caption" color="text.secondary" fontWeight="medium">
                                  אופן לימוד
                                </Typography>
                                <Typography variant="body1" fontWeight="bold" color={chavrutaColors.text.primary}>
                                  {chavrutaData?.mode}
                                </Typography>
                              </Box>
                            </Box>
                          </Stack>
                        </Box>
                      </Grid>
                    </Grid>
                  </InfoCard>
                </Fade>
              </Grid>
  
              {/* Schedule & Contact */}
              <Grid item xs={12} lg={4}>
                <Stack spacing={3}>
                  {/* Schedule Info */}
                  <Grow in={true} timeout={2000}>
                    <InfoCard>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 3,
                        pb: 2,
                        borderBottom: `2px solid ${alpha(chavrutaColors.accent.main, 0.1)}`
                      }}>
                        <Box sx={{ 
                          p: 1.5, 
                          borderRadius: '12px', 
                          bgcolor: alpha(chavrutaColors.accent.main, 0.1),
                          color: chavrutaColors.accent.main,
                          mr: 2
                        }}>
                          <ScheduleIcon sx={{ fontSize: 24 }} />
                        </Box>
                        <Typography variant="h6" fontWeight="bold" color={chavrutaColors.text.primary}>
                          מועד הלימוד
                        </Typography>
                      </Box>
  
                      <Stack spacing={2}>
                        <Box sx={{ 
                          p: 2, 
                          borderRadius: '12px',
                          bgcolor: alpha(chavrutaColors.accent.main, 0.05),
                          textAlign: 'center'
                        }}>
                          <Typography variant="h5" fontWeight="bold" color={chavrutaColors.accent.main}>
                            {scheduleData?.day}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            יום בשבוע
                          </Typography>
                        </Box>
                        
                        <Box sx={{ 
                          p: 2, 
                          borderRadius: '12px',
                          bgcolor: alpha(chavrutaColors.secondary.main, 0.05),
                          textAlign: 'center'
                        }}>
                          <Typography variant="h6" fontWeight="bold" color={chavrutaColors.secondary.main}>
                            {scheduleData?.startTime} - {scheduleData?.endTime}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            שעות הלימוד
                          </Typography>
                        </Box>
  
                        <Chip 
                          label={scheduleData?.available ? "זמין" : "תפוס"}
                          sx={{
                            bgcolor: scheduleData?.available ? chavrutaColors.info : chavrutaColors.error,
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '0.9rem',
                            py: 1
                          }}
                        />
                      </Stack>
                    </InfoCard>
                  </Grow>
  
                  {/* Contact Info */}
                  <Grow in={true} timeout={2500}>
                    <InfoCard>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 3,
                        pb: 2,
                        borderBottom: `2px solid ${alpha(chavrutaColors.primary.main, 0.1)}`
                      }}>
                        <Box sx={{ 
                          p: 1.5, 
                          borderRadius: '12px', 
                          bgcolor: alpha(chavrutaColors.primary.main, 0.1),
                          color: chavrutaColors.primary.main,
                          mr: 2
                        }}>
                          <EmailIcon sx={{ fontSize: 24 }} />
                        </Box>
                        <Typography variant="h6" fontWeight="bold" color={chavrutaColors.text.primary}>
                          פרטי קשר
                        </Typography>
                      </Box>
  
                      <Stack spacing={2}>
                        <GradientButton
                          fullWidth
                          variant="outlined"
                          startIcon={<EmailIcon />}
                          onClick={() => window.open(`mailto:${chavrutaData?.email}`, '_blank')}
                          sx={{
                            borderColor: chavrutaColors.primary.main,
                            color: chavrutaColors.primary.main,
                            background: 'transparent',
                            '&:hover': {
                              background: alpha(chavrutaColors.primary.main, 0.1),
                              borderColor: chavrutaColors.primary.main,
                            }
                          }}
                        >
                          שלח אימייל
                        </GradientButton>
  
                        <GradientButton
                          fullWidth
                          variant="outlined"
                          startIcon={<PhoneIcon />}
                          onClick={() => window.open(`tel:${chavrutaData?.phone}`, '_blank')}
                          sx={{
                            borderColor: chavrutaColors.accent.main,
                            color: chavrutaColors.accent.main,
                            background: 'transparent',
                            '&:hover': {
                              background: alpha(chavrutaColors.accent.main, 0.1),
                              borderColor: chavrutaColors.accent.main,
                            }
                          }}
                          >
                            התקשר
                          </GradientButton>
    
                          <Box sx={{ 
                            p: 2, 
                            borderRadius: '12px',
                            bgcolor: alpha(chavrutaColors.info, 0.05),
                            border: `1px solid ${alpha(chavrutaColors.info, 0.2)}`
                          }}>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                              טלפון:
                            </Typography>
                            <Typography variant="body1" fontWeight="bold" color={chavrutaColors.text.primary}>
                              {chavrutaData?.phone}
                            </Typography>
                          </Box>
    
                          <Box sx={{ 
                            p: 2, 
                            borderRadius: '12px',
                            bgcolor: alpha(chavrutaColors.warning, 0.05),
                            border: `1px solid ${alpha(chavrutaColors.warning, 0.2)}`
                          }}>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                              אימייל:
                            </Typography>
                            <Typography variant="body1" fontWeight="bold" color={chavrutaColors.text.primary} sx={{ wordBreak: 'break-all' }}>
                              {chavrutaData?.email}
                            </Typography>
                          </Box>
                        </Stack>
                      </InfoCard>
                    </Grow>
                  </Stack>
                </Grid>
              </Grid>
    
              {/* Blessing Card */}
              <Fade in={true} timeout={3000}>
                <BlessingCard>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    mb: 3,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <Box sx={{ 
                      animation: `${float} 3s ease-in-out infinite`,
                      fontSize: 60
                    }}>
                      📚✨
                    </Box>
                  </Box>
                  
                  <Typography variant="h4" sx={{ 
                    fontWeight: 'bold',
                    color: chavrutaColors.primary.main,
                    mb: 2,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    ברכה לדרך
                  </Typography>
                  
                  <Typography variant="h6" sx={{ 
                    color: chavrutaColors.text.primary,
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    maxWidth: 600,
                    mx: 'auto',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    "אוֹ חַבְרוּתָא אוֹ מִיתוּתָא" - או חברותא או מיתותא
                    <br />
                    <Box component="span" sx={{ fontSize: '0.9rem', opacity: 0.8 }}>
                      יהי רצון שתזכו ללמוד יחד בהצלחה ובברכה!
                    </Box>
                  </Typography>
                </BlessingCard>
              </Fade>
    
              {/* Action Buttons */}
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: 3, 
                mt: 6,
                flexWrap: 'wrap'
              }}>
                <Zoom in={true} timeout={3500}>
                  <GradientButton
                    size="large"
                    startIcon={<CalendarTodayIcon />}
                    onClick={() => navigate(`/schedule/${chavrutaData?.personId}`)}
                    sx={{ 
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      minWidth: 200
                    }}
                  >
                    צפה במערכת השעות
                  </GradientButton>
                </Zoom>
    
                <Zoom in={true} timeout={4000}>
                  <GradientButton
                    size="large"
                    variant="outlined"
                    startIcon={<HomeIcon />}
                    onClick={() => navigate('/')}
                    sx={{ 
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      minWidth: 200,
                      borderColor: chavrutaColors.secondary.main,
                      color: chavrutaColors.secondary.main,
                      background: 'transparent',
                      '&:hover': {
                        background: alpha(chavrutaColors.secondary.main, 0.1),
                        borderColor: chavrutaColors.secondary.main,
                      }
                    }}
                  >
                    חזור לעמוד הבית
                  </GradientButton>
                </Zoom>
              </Box>
    
              {/* Additional Info */}
              <Box sx={{ 
                mt: 6, 
                p: 3, 
                textAlign: 'center',
                borderRadius: '16px',
                bgcolor: alpha(chavrutaColors.primary.main, 0.03),
                border: `1px dashed ${alpha(chavrutaColors.primary.main, 0.2)}`
              }}>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  💡 <strong>טיפ:</strong> מומלץ לתאם מראש את פרטי המפגש הראשון
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  זכרו - חברותא טובה היא בסיס ללימוד מוצלח ומהנה!
                </Typography>
              </Box>
            </Container>
          </Box>
        );
    };
    
