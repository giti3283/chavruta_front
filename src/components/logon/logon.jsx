




// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { AddPersonThunk } from "../../redux/Person/addPersonThunk";
// import { useNavigate, useParams } from "react-router-dom";
// import './logon.css';

// // Material UI
// import {
//   Box,
//   Button,
//   FormControl,
//   FormControlLabel,
//   InputAdornment,
//   InputLabel,
//   MenuItem,
//   Radio,
//   RadioGroup,
//   Select,
//   Stack,
//   TextField,
//   Typography,
//   Container,
//   Paper,
//   Stepper,
//   Step,
//   StepLabel,
//   Grid,
//   Divider,
//   Alert,
//   useTheme,
//   ThemeProvider,
//   createTheme,
//   Fade,
//   Slide,
//   Zoom,
//   Chip,
//   Avatar,
//   Card,
//   CardContent,
//   LinearProgress,
//   Tooltip,
//   IconButton,
//   Snackbar
// } from "@mui/material";
// import { styled } from '@mui/material/styles';
// import Autocomplete from '@mui/material/Autocomplete';
// import { Visibility, VisibilityOff, CheckCircle, Error, Info } from "@mui/icons-material";
// import { FaUser, FaIdCard, FaPhone, FaMapMarkerAlt, FaUserGraduate, FaBook, FaCalendarAlt, FaVenusMars, FaHeart, FaStar } from 'react-icons/fa';

// // עיצוב מותאם לקומפוננטות בסגנון Chavruta
// const StyledPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   borderRadius: 24,
//   boxShadow: '0 12px 40px rgba(46, 82, 102, 0.15)',
//   background: 'linear-gradient(145deg, #FFFFFF 0%, #FEFCF7 100%)',
//   position: 'relative',
//   overflow: 'hidden',
//   border: '1px solid rgba(230, 194, 153, 0.2)',
//   transition: 'all 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'translateY(-5px)',
//     boxShadow: '0 20px 60px rgba(46, 82, 102, 0.2)',
//   },
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '6px',
//     background: 'linear-gradient(90deg, #D4A574, #8B4513, #2E5266)',
//     backgroundSize: '200% 100%',
//     animation: 'gradientShift 3s ease infinite',
//   }
// }));

// const SectionTitle = styled(Typography)(({ theme }) => ({
//   position: 'relative',
//   marginBottom: theme.spacing(3),
//   paddingBottom: theme.spacing(1),
//   fontWeight: 700,
//   color: '#2E5266',
//   fontFamily: '"Heebo", "Roboto", "Arial", sans-serif',
//   '&:after': {
//     content: '""',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     width: '60px',
//     height: '4px',
//     background: 'linear-gradient(135deg, #D4A574 0%, #8B4513 100%)',
//     borderRadius: '2px',
//   }
// }));

// const IconBox = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   marginBottom: theme.spacing(2),
//   color: '#8B4513',
//   '& svg': {
//     marginRight: theme.spacing(1.5),
//     fontSize: '1.5rem',
//     filter: 'drop-shadow(0 2px 4px rgba(139, 69, 19, 0.2))',
//   }
// }));

// const StyledTextField = styled(TextField)(({ theme }) => ({
//   '& .MuiOutlinedInput-root': {
//     borderRadius: 12,
//     backgroundColor: '#FEFCF7',
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       backgroundColor: '#FDF9F0',
//       '& fieldset': {
//         borderColor: '#D4A574',
//         borderWidth: '2px',
//       },
//     },
//     '&.Mui-focused': {
//       backgroundColor: '#FFFFFF',
//       boxShadow: '0 0 0 3px rgba(212, 165, 116, 0.2)',
//       '& fieldset': {
//         borderColor: '#8B4513',
//         borderWidth: '2px',
//       },
//     },
//     '&.Mui-error': {
//       animation: 'shake 0.6s ease-in-out',
//       '& fieldset': {
//         borderColor: '#E74C3C',
//       },
//     },
//   },
//   '& .MuiInputLabel-root': {
//     color: '#5D6D7E',
//     fontWeight: 500,
//     '&.Mui-focused': {
//       color: '#2E5266',
//       fontWeight: 600,
//     },
//     '&.Mui-error': {
//       color: '#E74C3C',
//     },
//   },
//   '& .MuiInputAdornment-root': {
//     color: '#8B4513',
//   },
// }));

// const StyledSelect = styled(Select)(({ theme }) => ({
//   borderRadius: 12,
//   backgroundColor: '#FEFCF7',
//   transition: 'all 0.3s ease',
//   '& .MuiOutlinedInput-notchedOutline': {
//     borderColor: 'rgba(212, 165, 116, 0.5)',
//     '&:hover': {
//       borderColor: '#D4A574',
//       borderWidth: '2px',
//     },
//   },
//   '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
//     borderColor: '#8B4513',
//     borderWidth: '2px',
//     boxShadow: '0 0 0 3px rgba(212, 165, 116, 0.2)',
//   }
// }));

// const StyledButton = styled(Button)(({ theme, variant }) => ({
//   borderRadius: 50,
//   padding: '12px 32px',
//   fontSize: '1.1rem',
//   fontWeight: 700,
//   textTransform: 'none',
//   fontFamily: '"Heebo", "Roboto", "Arial", sans-serif',
//   boxShadow: variant === 'contained' ? '0 6px 15px rgba(212, 165, 116, 0.3)' : 'none',
//   background: variant === 'contained' ? 'linear-gradient(135deg, #D4A574 0%, #8B4513 100%)' : 'transparent',
//   backgroundSize: '200% auto',
//   border: variant === 'outlined' ? '2px solid #8B4513' : 'none',
//   color: variant === 'contained' ? '#2E5266' : '#8B4513',
//   transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
//   position: 'relative',
//   overflow: 'hidden',
//   '&:hover': {
//     backgroundPosition: 'right center',
//     background: variant === 'contained' ? 'linear-gradient(135deg, #8B4513 0%, #D4A574 100%)' : 'rgba(212, 165, 116, 0.1)',
//     boxShadow: variant === 'contained' ? '0 10px 25px rgba(212, 165, 116, 0.4)' : 'none',
//     transform: 'translateY(-3px) scale(1.02)',
//     color: variant === 'contained' ? '#FFFFFF' : '#2E5266',
//   },
//   '&:disabled': {
//     background: 'rgba(189, 195, 199, 0.3)',
//     color: '#BDC3C7',
//     boxShadow: 'none',
//     transform: 'none',
//   }
// }));

// const StyledStepper = styled(Stepper)(({ theme }) => ({
//   marginBottom: theme.spacing(4),
//   '& .MuiStepIcon-root': {
//     color: '#E2E8F0',
//     fontSize: '2rem',
//     transition: 'all 0.3s ease',
//     '&.Mui-active': {
//       color: '#D4A574',
//       animation: 'pulse 2s infinite',
//     },
//     '&.Mui-completed': {
//       color: '#27AE60',
//     }
//   },
//   '& .MuiStepLabel-label': {
//     fontWeight: 600,
//     fontSize: '1rem',
//     color: '#5D6D7E',
//     fontFamily: '"Heebo", "Roboto", "Arial", sans-serif',
//     '&.Mui-active': {
//       color: '#2E5266',
//       fontWeight: 700,
//     },
//     '&.Mui-completed': {
//       color: '#27AE60',
//     }
//   },
//   '& .MuiStepConnector-line': {
//     borderColor: '#E2E8F0',
//     borderTopWidth: 3,
//   },
//   '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
//     borderColor: '#D4A574',
//   },
//   '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
//     borderColor: '#27AE60',
//   }
// }));

// const WelcomeHeader = styled(Box)(({ theme }) => ({
//   textAlign: 'center',
//   marginBottom: theme.spacing(6),
//   position: 'relative',
//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: -20,
//     left: '50%',
//     transform: 'translateX(-50%)',
//     width: 100,
//     height: 100,
//     background: 'radial-gradient(circle, rgba(212, 165, 116, 0.2) 0%, transparent 70%)',
//     borderRadius: '50%',
//     animation: 'float 4s ease-in-out infinite',
//   }
// }));

// const ProgressIndicator = styled(LinearProgress)(({ theme }) => ({
//   height: 8,
//   borderRadius: 4,
//   backgroundColor: 'rgba(212, 165, 116, 0.2)',
//   marginBottom: theme.spacing(3),
//   '& .MuiLinearProgress-bar': {
//     background: 'linear-gradient(90deg, #D4A574, #8B4513)',
//     borderRadius: 4,
//   }
// }));

// const StepCard = styled(Card)(({ theme }) => ({
//   borderRadius: 16,
//   boxShadow: '0 4px 20px rgba(46, 82, 102, 0.1)',
//   border: '1px solid rgba(212, 165, 116, 0.2)',
//   overflow: 'hidden',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     boxShadow: '0 8px 30px rgba(46, 82, 102, 0.15)',
//     transform: 'translateY(-2px)',
//   }
// }));

// const ValidationIcon = styled(Box)(({ theme, status }) => ({
//   position: 'absolute',
//   left: 8,
//   top: '50%',
//   transform: 'translateY(-50%)',
//   color: status === 'success' ? '#27AE60' : status === 'error' ? '#E74C3C' : 'transparent',
//   transition: 'all 0.3s ease',
//   animation: status ? 'bounceIn 0.5s ease-out' : 'none',
// }));

// // יצירת ערכת נושא מותאמת לחברותא
// const getCustomTheme = (theme) => createTheme({
//   ...theme,
//   palette: {
//     primary: {
//       main: '#2E5266',
//       light: '#4A7C95',
//       dark: '#1A3A4A',
//     },
//     secondary: {
//       main: '#D4A574',
//       light: '#E6C299',
//       dark: '#B8935F',
//     },
//     success: {
//       main: '#27AE60',
//     },
//     warning: {
//       main: '#F39C12',
//     },
//     error: {
//       main: '#E74C3C',
//     },
//     background: {
//       default: '#F8F6F0',
//       paper: '#FFFFFF',
//     },
//     text: {
//       primary: '#2C3E50',
//       secondary: '#5D6D7E',
//     }
//   },
//   typography: {
//     fontFamily: '"Heebo", "Roboto", "Arial", sans-serif',
//     h3: {
//       fontWeight: 700,
//       letterSpacing: '-0.02em',
//     },
//     h5: {
//       fontWeight: 600,
//     },
//     h6: {
//       fontWeight: 600,
//     },
//   },
//   components: {
//     MuiInputLabel: {
//       styleOverrides: {
//         root: {
//           color: '#5D6D7E',
//           fontWeight: 500,
//         },
//       },
//     },
//     MuiChip: {
//       styleOverrides: {
//         root: {
//           fontWeight: 600,
//           borderRadius: 20,
//         },
//       },
//     },
//   },
// });

// export const Logon = () => {
//   const dispatch = useDispatch();
//   const param = useParams();
//   const [person, setPerson] = useState({
//     id: param.id,
//     firstName: param.firstName,
//     lastName: param.lastName,
//     birthDate: '',
//     gender: 'male',
//     status: 'single',
//     cellularTelephone: '',
//     telephone: '',
//     country: null,
//     city: null,  
//     email: '',
//     role: '',
//     denomination: ''
//   });
//   const [activeStep, setActiveStep] = useState(0);
//   const [error, setError] = useState('');
//   const [validationStatus, setValidationStatus] = useState({});
//   const [availableCities, setAvailableCities] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: '',
//     severity: 'success'
//   });
//   const navi = useNavigate();
//   const theme = useTheme();
//   const customTheme = getCustomTheme(theme);

//     // עדכון רשימת הערים כאשר המדינה משתנה
//     useEffect(() => {
//         if (person.country && person.country.code) {
//           setAvailableCities(citiesByCountry[person.country.code] || []);
//           if (person.city && !citiesByCountry[person.country.code]?.some(city => city.name === person.city.name)) {
//             setPerson(prev => ({ ...prev, city: null }));
//           }
//         } else {
//           setAvailableCities([]);
//         }
//       }, [person.country]);
    
//       // אימות שדות
//       const validateField = (fieldName, value) => {
//         let isValid = true;
//         let message = '';
    
//         switch (fieldName) {
//           case 'birthDate':
//             const today = new Date();
//             const birthDate = new Date(value);
//             const age = today.getFullYear() - birthDate.getFullYear();
//             isValid = age >= 18 && age <= 120;
//             message = isValid ? '' : 'גיל חייב להיות בין 18-120';
//             break;
//           case 'cellularTelephone':
//             const phoneRegex = /^05\d{8}$/;
//             isValid = phoneRegex.test(value);
//             message = isValid ? '' : 'מספר טלפון נייד לא תקין (05xxxxxxxx)';
//             break;
//           case 'email':
//             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             isValid = emailRegex.test(value);
//             message = isValid ? '' : 'כתובת אימייל לא תקינה';
//             break;
//           default:
//             isValid = value && String(value).trim().length > 0;
//             message = isValid ? '' : 'שדה חובה';
//         }
    
//         setValidationStatus(prev => ({
//           ...prev,
//           [fieldName]: { isValid, message }
//         }));
    
//         return isValid;
//       };
    
//       // טיפול בשינוי שדות
//       const handleChange = (field, value) => {
//         console.log(value);
//         setPerson(prev => ({ ...prev, [field]: value }));
//         if (value) {
//           validateField(field, value);
//         }
//       };
    
//       // בדיקת תקינות השלב הנוכחי
//       const isStepValid = (step) => {
//         switch (step) {
//           case 0: // פרטים אישיים
//             return person.birthDate && person.gender && person.status;
//           case 1: // פרטי קשר
//             return person.cellularTelephone && person.country && person.city;
//           case 2: // פרטים נוספים
//             return person.email && person.role && person.denomination;
//           default:
//             return false;
//         }
//       };
    
//       // מעבר לשלב הבא
//       const handleNext = () => {
//         if (isStepValid(activeStep)) {
//           setActiveStep(prev => prev + 1);
//           setError('');
//         } else {
//           setError('אנא מלא את כל השדות הנדרשים');
//           setSnackbar({
//             open: true,
//             message: 'אנא מלא את כל השדות הנדרשים',
//             severity: 'warning'
//           });
//         }
//       };
    
//       // חזרה לשלב הקודם
//       const handleBack = () => {
//         setActiveStep(prev => prev - 1);
//         setError('');
//       };
    
//       // שליחת הטופס
//       const handleSubmit = async () => {
//         if (!isStepValid(2)) {
//           setError('אנא מלא את כל השדות הנדרשים');
//           return;
//         }
    
//         setIsLoading(true);
//         try {
//           await dispatch(AddPersonThunk(person));
//           setSnackbar({
//             open: true,
//             message: ' ההרשמה הושלמה בהצלחה! ברוך הבא לחברותא',
//             severity: 'success'
//           });
//           setTimeout(() => {
//             navi(`/offer/${person.id}`);
//           }, 2000);
//         } catch (error) {
//           setError('שגיאה בהרשמה. אנא נסה שוב.');
//           setSnackbar({
//             open: true,
//             message: 'שגיאה בהרשמה. אנא נסה שוב.',
//             severity: 'error'
//           });
//         } finally {
//           setIsLoading(false);
//         }
//       };
    
//       // נתונים לשלבים
//       const steps = ['פרטים אישיים', 'פרטי קשר', 'השלמת פרטים'];
    
//       // חישוב אחוז ההתקדמות
//       const progress = ((activeStep + 1) / steps.length) * 100;
    
 
    
//       // רשימת ערים לפי מדינה
//      const citiesByCountry = {
//   'IL': [
//     { code: 'JLM', label: 'ירושלים' },
//     { code: 'TLV', label: 'תל אביב' },
//     { code: 'HFA', label: 'חיפה' },
//     { code: 'BEV', label: 'באר שבע' },
//     { code: 'ASH', label: 'אשדוד' },
//     { code: 'RIS', label: 'ראשון לציון' },
//     { code: 'PET', label: 'פתח תקווה' },
//     { code: 'BNB', label: 'בני ברק' },
//     { code: 'BTY', label: 'בית שמש' },
//     { code: 'TZF', label: 'צפת' },
//     { code: 'TIB', label: 'טבריה' },
//     { code: 'ELT', label: 'אילת' },
//     { code: 'NTN', label: 'נתניה' },
//     { code: 'RHV', label: 'רחובות' },
//     { code: 'ASK', label: 'אשקלון' },
//     { code: 'MOD', label: 'מודיעין' },
//     { code: 'HAD', label: 'חדרה' },
//     { code: 'KFS', label: 'כפר סבא' }
//   ],
//   'US': [
//     { code: 'NYC', label: 'ניו יורק' },
//     { code: 'LAX', label: 'לוס אנג\'לס' },
//     { code: 'CHI', label: 'שיקגו' },
//     { code: 'MIA', label: 'מיאמי' },
//     { code: 'BOS', label: 'בוסטון' },
//     { code: 'LAK', label: 'לייקווד' },
//     { code: 'BRK', label: 'ברוקלין' },
//     { code: 'HOU', label: 'יוסטון' },
//     { code: 'PHI', label: 'פילדלפיה' },
//     { code: 'PHX', label: 'פיניקס' },
//     { code: 'SAN', label: 'סן דייגו' },
//     { code: 'DAL', label: 'דאלאס' },
//     { code: 'SEA', label: 'סיאטל' },
//     { code: 'DEN', label: 'דנבר' },
//     { code: 'BAL', label: 'בולטימור' },
//     { code: 'MON', label: 'מונסי' },
//     { code: 'ATL', label: 'אטלנטה' },
//     { code: 'DET', label: 'דטרויט' }
//   ],
//   'GB': [
//     { code: 'LON', label: 'לונדון' },
//     { code: 'MAN', label: 'מנצ\'סטר' },
//     { code: 'BIR', label: 'ברמינגהם' },
//     { code: 'GLS', label: 'גלזגו' },
//     { code: 'LDS', label: 'לידס' },
//     { code: 'EDI', label: 'אדינבורו' },
//     { code: 'LIV', label: 'ליברפול' },
//     { code: 'BRI', label: 'בריסטול' },
//     { code: 'GOL', label: 'גולדרס גרין' },
//     { code: 'STA', label: 'סטמפורד היל' }
//   ],
//   'FR': [
//     { code: 'PAR', label: 'פריז' },
//     { code: 'MAR', label: 'מרסיי' },
//     { code: 'LYO', label: 'ליון' },
//     { code: 'STR', label: 'שטרסבורג' },
//     { code: 'NIC', label: 'ניס' },
//     { code: 'BOR', label: 'בורדו' },
//     { code: 'TOU', label: 'טולוז' },
//     { code: 'LIL', label: 'ליל' },
//     { code: 'MET', label: 'מץ' }
//   ],
//   'CA': [
//     { code: 'TOR', label: 'טורונטו' },
//     { code: 'MON', label: 'מונטריאול' },
//     { code: 'VAN', label: 'ונקובר' },
//     { code: 'OTT', label: 'אוטווה' },
//     { code: 'CAL', label: 'קלגרי' },
//     { code: 'EDM', label: 'אדמונטון' },
//     { code: 'WIN', label: 'ויניפג' },
//     { code: 'QUE', label: 'קוויבק סיטי' },
//     { code: 'HAL', label: 'הליפקס' }
//   ],
//   'CN': [
//     { code: 'BEI', label: 'בייג\'ינג' },
//     { code: 'SHA', label: 'שנגחאי' },
//     { code: 'HON', label: 'הונג קונג' },
//     { code: 'SHE', label: 'שנזן' },
//     { code: 'GUA', label: 'גואנגז\'ו' },
//     { code: 'CHE', label: 'צ\'נגדו' },
//     { code: 'NAN', label: 'נאנג\'ינג' },
//     { code: 'WUH', label: 'ווהאן' },
//     { code: 'TIA', label: 'טיאנג\'ין' },
//     { code: 'HAR', label: 'הארבין' }
//   ],
//   'UA': [
//     { code: 'KIE', label: 'קייב' },
//     { code: 'KHA', label: 'חרקוב' },
//     { code: 'ODE', label: 'אודסה' },
//     { code: 'DNI', label: 'דנייפרו' },
//     { code: 'UMA', label: 'אומן' },
//     { code: 'LVI', label: 'לבוב' },
//     { code: 'ZAP', label: 'זפורוז\'יה' },
//     { code: 'DON', label: 'דונצק' },
//     { code: 'MER', label: 'מז\'יבוז\'' }
//   ],
//   'AU': [
//     { code: 'SYD', label: 'סידני' },
//     { code: 'MEL', label: 'מלבורן' },
//     { code: 'BRI', label: 'בריסביין' },
//     { code: 'PER', label: 'פרת\'' },
//     { code: 'ADE', label: 'אדלייד' },
//     { code: 'GOL', label: 'גולד קוסט' },
//     { code: 'CAN', label: 'קנברה' }
//   ],
//   'DE': [
//     { code: 'BER', label: 'ברלין' },
//     { code: 'MUN', label: 'מינכן' },
//     { code: 'FRA', label: 'פרנקפורט' },
//     { code: 'HAM', label: 'המבורג' },
//     { code: 'COL', label: 'קלן' },
//     { code: 'DUS', label: 'דיסלדורף' },
//     { code: 'STU', label: 'שטוטגרט' },
//     { code: 'LEI', label: 'לייפציג' },
//     { code: 'DRE', label: 'דרזדן' }
//   ],
//   'IT': [
//     { code: 'ROM', label: 'רומא' },
//     { code: 'MIL', label: 'מילאנו' },
//     { code: 'NAP', label: 'נאפולי' },
//     { code: 'TUR', label: 'טורינו' },
//     { code: 'BOL', label: 'בולוניה' },
//     { code: 'FLO', label: 'פירנצה' },
//     { code: 'VEN', label: 'ונציה' },
//     { code: 'PAL', label: 'פלרמו' }
//   ],
//   'BE': [
//     { code: 'BRU', label: 'בריסל' },
//     { code: 'ANT', label: 'אנטוורפן' },
//     { code: 'GEN', label: 'גנט' },
//     { code: 'CHA', label: 'שרלרואה' },
//     { code: 'LIE', label: 'ליאז\'' }
//   ],
//   'CH': [
//     { code: 'ZUR', label: 'ציריך' },
//     { code: 'GEN', label: 'ז\'נבה' },
//     { code: 'BAS', label: 'באזל' },
//     { code: 'BER', label: 'ברן' },
//     { code: 'LAU', label: 'לוזאן' },
//     { code: 'LUG', label: 'לוגאנו' }
//   ],
//   'NL': [
//     { code: 'AMS', label: 'אמסטרדם' },
//     { code: 'ROT', label: 'רוטרדם' },
//     { code: 'HAG', label: 'האג' },
//     { code: 'UTR', label: 'אוטרכט' },
//     { code: 'EIN', label: 'איינדהובן' }
//   ],
//   'ES': [
//     { code: 'MAD', label: 'מדריד' },
//     { code: 'BAR', label: 'ברצלונה' },
//     { code: 'VAL', label: 'ולנסיה' },
//     { code: 'SEV', label: 'סביליה' },
//     { code: 'MAL', label: 'מלגה' },
//     { code: 'BIL', label: 'בילבאו' }
//   ],
//   'AR': [
//     { code: 'BUE', label: 'בואנוס איירס' },
//     { code: 'COR', label: 'קורדובה' },
//     { code: 'ROS', label: 'רוסריו' },
//     { code: 'MEN', label: 'מנדוסה' },
//     { code: 'TUC', label: 'טוקומן' }
//   ],
//   'BR': [
//     { code: 'SAO', label: 'סאו פאולו' },
//     { code: 'RIO', label: 'ריו דה ז\'נירו' },
//     { code: 'BRA', label: 'ברזיליה' },
//     { code: 'SAL', label: 'סלבדור' },
//     { code: 'FOR', label: 'פורטלזה' },
//     { code: 'BEL', label: 'בלו הוריזונטה' }
//   ],
//   'ZA': [
//     { code: 'JOH', label: 'יוהנסבורג' },
//     { code: 'CAP', label: 'קייפטאון' },
//     { code: 'DUR', label: 'דרבן' },
//     { code: 'PRE', label: 'פרטוריה' },
//     { code: 'BLO', label: 'בלומפונטיין' }
//   ],
//   'RU': [
//     { code: 'MOS', label: 'מוסקבה' },
//     { code: 'SPB', label: 'סנט פטרסבורג' },
//     { code: 'NOV', label: 'נובוסיבירסק' },
//     { code: 'YEK', label: 'יקטרינבורג' },
//     { code: 'KAZ', label: 'קאזאן' },
//     { code: 'SOC', label: 'סוצ\'י' }
//   ],
//   'JP': [
//     { code: 'TOK', label: 'טוקיו' },
//     { code: 'OSA', label: 'אוסקה' },
//     { code: 'KYO', label: 'קיוטו' },
//     { code: 'SAP', label: 'סאפורו' },
//     { code: 'KOB', label: 'קובה' },
//     { code: 'NAG', label: 'נגויה' }
//   ],
//   'KR': [
//     { code: 'SEO', label: 'סיאול' },
//     { code: 'BUS', label: 'בוסאן' },
//     { code: 'INC', label: 'אינצ\'און' },
//     { code: 'DAE', label: 'דאגו' }
//   ],
//   'MX': [
//     { code: 'MEX', label: 'מקסיקו סיטי' },
//     { code: 'GUA', label: 'גוודלחרה' },
//     { code: 'MON', label: 'מונטריי' },
//     { code: 'PUE', label: 'פואבלה' },
//     { code: 'CAN', label: 'קנקון' }
//   ]
// };

// // רשימת המדינות המורחבת
// const countries = [
//   { code: 'IL', label: 'ישראל' },
//   { code: 'US', label: 'ארצות הברית' },
//   { code: 'GB', label: 'בריטניה' },
//   { code: 'FR', label: 'צרפת' },
//   { code: 'CA', label: 'קנדה' },
//   { code: 'CN', label: 'סין' },
//   { code: 'UA', label: 'אוקראינה' },
//   { code: 'AU', label: 'אוסטרליה' },
//   { code: 'DE', label: 'גרמניה' },
//   { code: 'IT', label: 'איטליה' },
//   { code: 'BE', label: 'בלגיה' },
//   { code: 'CH', label: 'שוויץ' },
//   { code: 'NL', label: 'הולנד' },
//   { code: 'ES', label: 'ספרד' },
//   { code: 'AR', label: 'ארגנטינה' },
//   { code: 'BR', label: 'ברזיל' },
//   { code: 'ZA', label: 'דרום אפריקה' },
//   { code: 'RU', label: 'רוסיה' },
//   { code: 'JP', label: 'יפן' },
//   { code: 'KR', label: 'דרום קוריאה' },
//   { code: 'MX', label: 'מקסיקו' }
// ];

    
//       // רשימת תפקידים
//       const roles = [
//         'תלמיד ישיבה',
//         'אברך',
//         'רב',
//         'מורה',
//         'עורך דין',
//         'רופא',
//         'מהנדס',
//         'עסקים',
//         'סטודנט',
//         'אחר'
//       ];
    
//       // רשימת זרמים
//       const denominations = [
//         'חרדי ליטאי',
//         'חרדי חסידי',
//         'דתי לאומי',
//         'דתי מסורתי',
//         'מסורתי',
//         'חילוני',
//         'אחר'
//       ];
    
//       // רנדור השלב הנוכחי
//       const renderStepContent = (step) => {
//         switch (step) {
//           case 0:
//             return (
//               <Fade in={true} timeout={600}>
//                 <StepCard>
//                   <CardContent sx={{ p: 4 }}>
//                     <SectionTitle variant="h5">
//                       <FaUser style={{ marginLeft: 12, verticalAlign: 'middle' }} />
//                       פרטים אישיים
//                     </SectionTitle>
                    
//                     <Grid container spacing={3}>
//                       <Grid item xs={12}>
//                         <IconBox>
//                           <FaCalendarAlt />
//                           <Typography variant="body1" fontWeight={600}>
//                             תאריך לידה
//                           </Typography>
//                         </IconBox>
//                         <StyledTextField
//                           fullWidth
//                           type="date"
//                           value={person.birthDate}
//                           onChange={(e) => handleChange('birthDate', e.target.value)}
//                           error={validationStatus.birthDate && !validationStatus.birthDate.isValid}
//                           helperText={validationStatus.birthDate?.message}
//                           InputLabelProps={{ shrink: true }}
//                           sx={{ position: 'relative' }}
//                         />
//                         <ValidationIcon status={validationStatus.birthDate?.isValid ? 'success' : 'error'}>
//                           {validationStatus.birthDate?.isValid ? <CheckCircle /> : <Error />}
//                         </ValidationIcon>
//                       </Grid>
    
//                       <Grid item xs={12} sm={6}>
//                         <IconBox>
//                           <FaVenusMars />
//                           <Typography variant="body1" fontWeight={600}>
//                             מגדר
//                           </Typography>
//                         </IconBox>
//                         <FormControl fullWidth>
//                           <RadioGroup
//                             value={person.gender}
//                             onChange={(e) => handleChange('gender', e.target.value)}
//                             row
//                             sx={{ gap: 2 }}
//                           >
//                             <FormControlLabel 
//                               value="male" 
//                               control={<Radio sx={{ color: '#8B4513' }} />} 
//                               label={
//                                 <Chip 
//                                   label="זכר" 
//                                   variant={person.gender === 'male' ? 'filled' : 'outlined'}
//                                   color={person.gender === 'male' ? 'primary' : 'default'}
//                                   sx={{ fontWeight: 600 }}
//                                 />
//                               }
//                             />
//                             <FormControlLabel 
//                               value="female" 
//                               control={<Radio sx={{ color: '#8B4513' }} />} 
//                               label={
//                                 <Chip 
//                                   label="נקבה" 
//                                   variant={person.gender === 'female' ? 'filled' : 'outlined'}
//                                   color={person.gender === 'female' ? 'primary' : 'default'}
//                                   sx={{ fontWeight: 600 }}
//                                 />
//                               }
//                             />
//                           </RadioGroup>
//                         </FormControl>
//                       </Grid>
    
//                       <Grid item xs={12} sm={6}>
//                         <IconBox>
//                           <FaHeart />
//                           <Typography variant="body1" fontWeight={600}>
//                             מצב משפחתי
//                           </Typography>
//                         </IconBox>
//                         <FormControl fullWidth>
//                           <RadioGroup
//                             value={person.status}
//                             onChange={(e) => handleChange('status', e.target.value)}
//                             row
//                             sx={{ gap: 2 }}
//                           >
//                             <FormControlLabel 
//                               value="single" 
//                               control={<Radio sx={{ color: '#8B4513' }} />} 
//                               label={
//                                 <Chip 
//                                   label="רווק/ה" 
//                                   variant={person.status === 'single' ? 'filled' : 'outlined'}
//                                   color={person.status === 'single' ? 'secondary' : 'default'}
//                                   sx={{ fontWeight: 600 }}
//                                 />
//                               }
//                             />
//                             <FormControlLabel 
//                               value="married" 
//                               control={<Radio sx={{ color: '#8B4513' }} />} 
//                               label={
//                                 <Chip 
//                                   label="נשוי/ה" 
//                                   variant={person.status === 'married' ? 'filled' : 'outlined'}
//                                   color={person.status === 'married' ? 'secondary' : 'default'}
//                                   sx={{ fontWeight: 600 }}
//                                 />
//                               }
//                             />
//                           </RadioGroup>
//                         </FormControl>
//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </StepCard>
//               </Fade>
//             );
    
//           case 1:
//             return (
//               <Slide direction="right" in={true} timeout={600}>
//                 <StepCard>
//                   <CardContent sx={{ p: 4 }}>
//                     <SectionTitle variant="h5">
//                       <FaPhone style={{ marginLeft: 12, verticalAlign: 'middle' }} />
//                       פרטי קשר ומיקום
//                     </SectionTitle>
                    
//                     <Grid container spacing={3}>
//                       <Grid item xs={12} sm={6}>
//                         <IconBox>
//                           <FaPhone />
//                           <Typography variant="body1" fontWeight={600}>
//                             טלפון נייד
//                           </Typography>
//                         </IconBox>
//                         <StyledTextField
//                           fullWidth
//                           placeholder="05xxxxxxxx"
//                           value={person.cellularTelephone}
//                           onChange={(e) => handleChange('cellularTelephone', e.target.value)}
//                           error={validationStatus.cellularTelephone && !validationStatus.cellularTelephone.isValid}
//                           helperText={validationStatus.cellularTelephone?.message}
//                           InputProps={{
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 📱
//                               </InputAdornment>
//                             ),
//                           }}
//                           sx={{ position: 'relative' }}
//                         />
//                         <ValidationIcon status={validationStatus.cellularTelephone?.isValid ? 'success' : 'error'}>
//                           {validationStatus.cellularTelephone?.isValid ? <CheckCircle /> : <Error />}
//                         </ValidationIcon>
//                       </Grid>
    
//                       <Grid item xs={12} sm={6}>
//                         <IconBox>
//                           <FaPhone />
//                           <Typography variant="body1" fontWeight={600}>
//                             טלפון בית (אופציונלי)
//                           </Typography>
//                         </IconBox>
//                         <StyledTextField
//                           fullWidth
//                           placeholder="0x-xxxxxxx"
//                           value={person.telephone}
//                       onChange={(e) => handleChange('telephone', e.target.value)}
//                       InputProps={{
//                         startAdornment: (
//                           <InputAdornment position="start">
//                             🏠
//                           </InputAdornment>
//                         ),
//                       }}
//                     />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <IconBox>
//                       <FaMapMarkerAlt />
//                       <Typography variant="body1" fontWeight={600}>
//                         מדינה
//                       </Typography>
//                     </IconBox>
//                     <Autocomplete
//                       value={person.country}
//                       onChange={(event, newValue) => handleChange('country', newValue)}
//                       options={countries}
//                       getOptionLabel={(option) => option.name}
//                       renderOption={(props, option) => (
//                         <Box component="li" {...props} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                           <span style={{ fontSize: '1.2rem' }}>{option.flag}</span>
//                           {option.name}
//                         </Box>
//                       )}
//                       renderInput={(params) => (
//                         <StyledTextField
//                           {...params}
//                           placeholder="בחר מדינה"
//                           InputProps={{
//                             ...params.InputProps,
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 🌍
//                               </InputAdornment>
//                             ),
//                           }}
//                         />
//                       )}
//                       sx={{
//                         '& .MuiAutocomplete-paper': {
//                           borderRadius: 2,
//                           boxShadow: '0 8px 25px rgba(46, 82, 102, 0.15)',
//                         }
//                       }}
//                     />
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <IconBox>
//                       <FaMapMarkerAlt />
//                       <Typography variant="body1" fontWeight={600}>
//                         עיר
//                       </Typography>
//                     </IconBox>
//                     <Autocomplete
//                       value={person.city}
//                       onChange={(event, newValue) => handleChange('city', newValue)}
//                       options={availableCities}
//                       getOptionLabel={(option) => option.name}
//                       disabled={!person.country}
//                       renderOption={(props, option) => (
//                         <Box component="li" {...props} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                           <Chip label={option.region} size="small" variant="outlined" />
//                           {option.name}
//                         </Box>
//                       )}
//                       renderInput={(params) => (
//                         <StyledTextField
//                           {...params}
//                           placeholder={person.country ? "בחר עיר" : "בחר מדינה תחילה"}
//                           InputProps={{
//                             ...params.InputProps,
//                             startAdornment: (
//                               <InputAdornment position="start">
//                                 🏙️
//                               </InputAdornment>
//                             ),
//                           }}
//                         />
//                       )}
//                     />
//                   </Grid>
//                 </Grid>
//               </CardContent>
//             </StepCard>
//           </Slide>
//         );

//       case 2:
//         return (
//           <Zoom in={true} timeout={600}>
//             <StepCard>
//               <CardContent sx={{ p: 4 }}>
//                 <SectionTitle variant="h5">
//                   <FaUserGraduate style={{ marginLeft: 12, verticalAlign: 'middle' }} />
//                   השלמת פרטים
//                 </SectionTitle>
                
//                 <Grid container spacing={3}>
//                   <Grid item xs={12}>
//                     <IconBox>
//                       <span style={{ fontSize: '1.5rem', marginRight: 12 }}>📧</span>
//                       <Typography variant="body1" fontWeight={600}>
//                         כתובת אימייל
//                       </Typography>
//                     </IconBox>
//                     <StyledTextField
//                       fullWidth
//                       type="email"
//                       placeholder="example@email.com"
//                       value={person.email}
//                       onChange={(e) => handleChange('email', e.target.value)}
//                       error={validationStatus.email && !validationStatus.email.isValid}
//                       helperText={validationStatus.email?.message}
//                       InputProps={{
//                         startAdornment: (
//                           <InputAdornment position="start">
//                             📧
//                           </InputAdornment>
//                         ),
//                       }}
//                       sx={{ position: 'relative' }}
//                     />
//                     <ValidationIcon status={validationStatus.email?.isValid ? 'success' : 'error'}>
//                       {validationStatus.email?.isValid ? <CheckCircle /> : <Error />}
//                     </ValidationIcon>
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <IconBox>
//                       <FaUserGraduate />
//                       <Typography variant="body1" fontWeight={600}>
//                         תפקיד/עיסוק
//                       </Typography>
//                     </IconBox>
//                     <FormControl fullWidth>
//                       <StyledSelect
//                         value={person.role}
//                         onChange={(e) => handleChange('role', e.target.value)}
//                         displayEmpty
//                       >
//                         <MenuItem value="" disabled>
//                           <em>בחר תפקיד</em>
//                         </MenuItem>
//                         {roles.map((role) => (
//                           <MenuItem key={role} value={role}>
//                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                               <FaStar style={{ color: '#D4A574', fontSize: '0.8rem' }} />
//                               {role}
//                             </Box>
//                           </MenuItem>
//                         ))}
//                       </StyledSelect>
//                     </FormControl>
//                   </Grid>

//                   <Grid item xs={12} sm={6}>
//                     <IconBox>
//                       <FaBook />
//                       <Typography variant="body1" fontWeight={600}>
//                         זרם דתי
//                       </Typography>
//                     </IconBox>
//                     <FormControl fullWidth>
//                       <StyledSelect
//                         value={person.denomination}
//                         onChange={(e) => handleChange('denomination', e.target.value)}
//                         displayEmpty
//                       >
//                         <MenuItem value="" disabled>
//                           <em>בחר זרם</em>
//                         </MenuItem>
//                         {denominations.map((denomination) => (
//                           <MenuItem key={denomination} value={denomination}>
//                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                               <span style={{ fontSize: '1rem' }}>📚</span>
//                               {denomination}
//                             </Box>
//                           </MenuItem>
//                         ))}
//                       </StyledSelect>
//                     </FormControl>
//                   </Grid>
//                 </Grid>

//                 <Divider sx={{ my: 4, bgcolor: 'rgba(212, 165, 116, 0.3)' }} />

//                 <Box sx={{ textAlign: 'center', p: 3, bgcolor: 'rgba(212, 165, 116, 0.1)', borderRadius: 2 }}>
//                   <Typography variant="h6" gutterBottom sx={{ color: '#2E5266', fontWeight: 700 }}>
//                      כמעט סיימנו!
//                   </Typography>
//                   <Typography variant="body1" sx={{ color: '#5D6D7E', mb: 2 }}>
//                     אתה עומד להצטרף לקהילת החברותא שלנו
//                   </Typography>
//                   <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
//                     <Chip 
//                       icon={<CheckCircle />} 
//                       label="פרטים אישיים ✓" 
//                       color="success" 
//                       variant="filled"
//                       sx={{ fontWeight: 600 }}
//                     />
//                     <Chip 
//                       icon={<CheckCircle />} 
//                       label="פרטי קשר ✓" 
//                       color="success" 
//                       variant="filled"
//                       sx={{ fontWeight: 600 }}
//                     />
//                     <Chip 
//                       icon={<Info />} 
//                       label="השלמת פרטים" 
//                       color="primary" 
//                       variant="filled"
//                       sx={{ fontWeight: 600 }}
//                     />
//                   </Box>
//                 </Box>
//               </CardContent>
//             </StepCard>
//           </Zoom>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <ThemeProvider theme={customTheme}>
//       <Box
//         sx={{
//           minHeight: '100vh',
//           background: 'linear-gradient(135deg, #F8F6F0 0%, #E8E2D5 50%, #F8F6F0 100%)',
//           py: 4,
//           position: 'relative',
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'radial-gradient(circle at 20% 80%, rgba(212, 165, 116, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(46, 82, 102, 0.1) 0%, transparent 50%)',
//             pointerEvents: 'none',
//           }
//         }}
//       >
//         <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
//           <WelcomeHeader>
//             <Avatar
//               sx={{
//                 width: 80,
//                 height: 80,
//                 mx: 'auto',
//                 mb: 2,
//                 background: 'linear-gradient(135deg, #D4A574 0%, #8B4513 100%)',
//                 fontSize: '2rem',
//                 animation: 'float 4s ease-in-out infinite',
//               }}
//             >
//               📚
//             </Avatar>
//             <Typography 
//               variant="h3" 
//               gutterBottom 
//               sx={{ 
//                 background: 'linear-gradient(135deg, #2E5266 0%, #8B4513 100%)',
//                 backgroundClip: 'text',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 fontWeight: 800,
//                 letterSpacing: '-0.02em',
//               }}
//             >
//               ברוך הבא לחברותא! 🎓
//             </Typography>
//             <Typography 
//               variant="h6" 
//               sx={{ 
//                 color: '#5D6D7E', 
//                 fontWeight: 500,
//                 maxWidth: 600,
//                 mx: 'auto',
//                 lineHeight: 1.6,
//               }}
//             >
//               שלום {person.firstName} {person.lastName}, בואו נשלים את פרטי ההרשמה שלך
//             </Typography>
//           </WelcomeHeader>

//           <StyledPaper elevation={0}>
//             <ProgressIndicator variant="determinate" value={progress} />
            
//             <Box sx={{ mb: 4 }}>
//               <Typography variant="body2" sx={{ textAlign: 'center', color: '#5D6D7E', mb: 2 }}>
//                 שלב {activeStep + 1} מתוך {steps.length}
//               </Typography>
//               <StyledStepper activeStep={activeStep} alternativeLabel>
//                 {steps.map((label, index) => (
//                   <Step key={label}>
//                     <StepLabel>
//                       <Typography variant="body2" fontWeight={600}>
//                         {label}
//                       </Typography>
//                     </StepLabel>
//                   </Step>
//                 ))}
//               </StyledStepper>
//             </Box>

//             {error && (
//               <Alert 
//                 severity="error" 
//                 sx={{ 
//                   mb: 3, 
//                   borderRadius: 2,
//                   animation: 'shake 0.6s ease-in-out',
//                   '& .MuiAlert-icon': {
//                     fontSize: '1.5rem'
//                   }
//                 }}
//               >
//                 {error}
//               </Alert>
//             )}

//             {renderStepContent(activeStep)}

//             <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4, gap: 2 }}>
//               <StyledButton
//                 variant="outlined"
//                 onClick={handleBack}
//                 disabled={activeStep === 0}
//                 sx={{ minWidth: 120 }}
//               >
//                 חזור
//               </StyledButton>

//               <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
//                 <Chip 
//                   label={`${activeStep + 1}/${steps.length}`}
//                   color="primary"
//                   variant="filled"
//                   sx={{ 
//                     fontWeight: 700,
//                     fontSize: '1rem',
//                     px: 2,
//                     py: 1,
//                   }}
//                 />
//               </Box>

//               {activeStep === steps.length - 1 ? (
//                 <StyledButton
//                   variant="contained"
//                   onClick={handleSubmit}
//                   disabled={!isStepValid(activeStep) || isLoading}
//                   sx={{ 
//                     minWidth: 140,
//                     position: 'relative',
//                   }}
//                 >
//                   {isLoading ? (
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                       <LinearProgress 
//                         size={20} 
//                         sx={{ 
//                           width: 20,
//                           height: 3,
//                           borderRadius: 2,
//                           '& .MuiLinearProgress-bar': {
//                             backgroundColor: 'white'
//                           }
//                         }} 
//                       />
//                       נרשם...
//                     </Box>
//                   ) : (
//                     <>
//                        הירשם לחברותא
//                     </>
//                   )}
//                 </StyledButton>
//               ) : (
//                 <StyledButton
//                   variant="contained"
//                   onClick={handleNext}
//                   disabled={!isStepValid(activeStep)}
//                   sx={{ minWidth: 120 }}
//                 >
//                   המשך
//                 </StyledButton>
//               )}
//             </Box>
//           </StyledPaper>

//           {/* סיכום פרטים */}
//           {activeStep > 0 && (
//             <Fade in={true} timeout={800}>
//               <Paper 
//                 sx={{ 
//                   mt: 3, 
//                   p: 3, 
//                   borderRadius: 3,
//                   background: 'rgba(255, 255, 255, 0.8)',
//                   backdropFilter: 'blur(10px)',
//                   border: '1px solid rgba(212, 165, 116, 0.2)',
//                 }}
//               >
//                                 <Typography variant="h6" gutterBottom sx={{ color: '#2E5266', fontWeight: 700, mb: 2 }}>
//                   📋 סיכום פרטים
//                 </Typography>
//                 <Grid container spacing={2}>
//                   <Grid item xs={12} sm={6}>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
//                       <FaIdCard style={{ color: '#8B4513' }} />
//                       <Typography variant="body2" fontWeight={600}>ת.ז:</Typography>
//                       <Typography variant="body2">{person.id}</Typography>
//                     </Box>
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
//                       <FaUser style={{ color: '#8B4513' }} />
//                       <Typography variant="body2" fontWeight={600}>שם:</Typography>
//                       <Typography variant="body2">{person.firstName} {person.lastName}</Typography>
//                     </Box>
//                     {person.birthDate && (
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
//                         <FaCalendarAlt style={{ color: '#8B4513' }} />
//                         <Typography variant="body2" fontWeight={600}>תאריך לידה:</Typography>
//                         <Typography variant="body2">{person.birthDate}</Typography>
//                       </Box>
//                     )}
//                   </Grid>
//                   <Grid item xs={12} sm={6}>
//                     {person.cellularTelephone && (
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
//                         <FaPhone style={{ color: '#8B4513' }} />
//                         <Typography variant="body2" fontWeight={600}>נייד:</Typography>
//                         <Typography variant="body2">{person.cellularTelephone}</Typography>
//                       </Box>
//                     )}
//                     {person.country && (
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
//                         <FaMapMarkerAlt style={{ color: '#8B4513' }} />
//                         <Typography variant="body2" fontWeight={600}>מיקום:</Typography>
//                         <Typography variant="body2">
//                           {person.city?.name}, {person.country.name}
//                         </Typography>
//                       </Box>
//                     )}
//                     {person.email && (
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
//                         <span style={{ color: '#8B4513' }}>📧</span>
//                         <Typography variant="body2" fontWeight={600}>אימייל:</Typography>
//                         <Typography variant="body2">{person.email}</Typography>
//                       </Box>
//                     )}
//                   </Grid>
//                 </Grid>
//               </Paper>
//             </Fade>
//           )}
//         </Container>

//         {/* Snackbar להודעות */}
//         <Snackbar
//           open={snackbar.open}
//           autoHideDuration={6000}
//           onClose={() => setSnackbar({ ...snackbar, open: false })}
//           anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//         >
//           <Alert 
//             onClose={() => setSnackbar({ ...snackbar, open: false })} 
//             severity={snackbar.severity}
//             variant="filled"
//             sx={{ 
//               width: '100%',
//               borderRadius: 3,
//               boxShadow: '0 8px 25px rgba(46, 82, 102, 0.3)',
//               fontSize: '1.1rem',
//               fontWeight: 600,
//               '& .MuiAlert-icon': {
//                 fontSize: '1.5rem'
//               }
//             }}
//           >
//             {snackbar.message}
//           </Alert>
//         </Snackbar>
//       </Box>
//     </ThemeProvider>
//   );
// };


import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddPersonThunk } from "../../redux/Person/addPersonThunk";
import { useNavigate, useParams } from "react-router-dom";
import './logon.css';

// Material UI
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Divider,
  Alert,
  useTheme,
  ThemeProvider,
  createTheme,
  Fade,
  Slide,
  Zoom,
  Chip,
  Avatar,
  Card,
  CardContent,
  LinearProgress,
  Tooltip,
  IconButton,
  Snackbar
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import { Visibility, VisibilityOff, CheckCircle, Error, Info } from "@mui/icons-material";
import { FaUser, FaIdCard, FaPhone, FaMapMarkerAlt, FaUserGraduate, FaBook, FaCalendarAlt, FaVenusMars, FaHeart, FaStar } from 'react-icons/fa';

// עיצוב מותאם לקומפוננטות בסגנון Chavruta
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 24,
  boxShadow: '0 12px 40px rgba(46, 82, 102, 0.15)',
  background: 'linear-gradient(145deg, #FFFFFF 0%, #FEFCF7 100%)',
  position: 'relative',
  overflow: 'hidden',
  border: '1px solid rgba(230, 194, 153, 0.2)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 60px rgba(46, 82, 102, 0.2)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '6px',
    background: 'linear-gradient(90deg, #D4A574, #8B4513, #2E5266)',
    backgroundSize: '200% 100%',
    animation: 'gradientShift 3s ease infinite',
  }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(3),
  paddingBottom: theme.spacing(1),
  fontWeight: 700,
  color: '#2E5266',
  fontFamily: '"Heebo", "Roboto", "Arial", sans-serif',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '60px',
    height: '4px',
    background: 'linear-gradient(135deg, #D4A574 0%, #8B4513 100%)',
    borderRadius: '2px',
  }
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  color: '#8B4513',
  '& svg': {
    marginRight: theme.spacing(1.5),
    fontSize: '1.5rem',
    filter: 'drop-shadow(0 2px 4px rgba(139, 69, 19, 0.2))',
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 12,
    backgroundColor: '#FEFCF7',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: '#FDF9F0',
      '& fieldset': {
        borderColor: '#D4A574',
        borderWidth: '2px',
      },
    },
    '&.Mui-focused': {
      backgroundColor: '#FFFFFF',
      boxShadow: '0 0 0 3px rgba(212, 165, 116, 0.2)',
      '& fieldset': {
        borderColor: '#8B4513',
        borderWidth: '2px',
      },
    },
    '&.Mui-error': {
      animation: 'shake 0.6s ease-in-out',
      '& fieldset': {
        borderColor: '#E74C3C',
      },
    },
  },
  '& .MuiInputLabel-root': {
    color: '#5D6D7E',
    fontWeight: 500,
    '&.Mui-focused': {
      color: '#2E5266',
      fontWeight: 600,
    },
    '&.Mui-error': {
      color: '#E74C3C',
    },
  },
  '& .MuiInputAdornment-root': {
    color: '#8B4513',
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: 12,
  backgroundColor: '#FEFCF7',
  transition: 'all 0.3s ease',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(212, 165, 116, 0.5)',
    '&:hover': {
      borderColor: '#D4A574',
      borderWidth: '2px',
    },
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#8B4513',
    borderWidth: '2px',
    boxShadow: '0 0 0 3px rgba(212, 165, 116, 0.2)',
  }
}));

const StyledButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: 50,
  padding: '12px 32px',
  fontSize: '1.1rem',
  fontWeight: 700,
  textTransform: 'none',
  fontFamily: '"Heebo", "Roboto", "Arial", sans-serif',
  boxShadow: variant === 'contained' ? '0 6px 15px rgba(212, 165, 116, 0.3)' : 'none',
  background: variant === 'contained' ? 'linear-gradient(135deg, #D4A574 0%, #8B4513 100%)' : 'transparent',
  backgroundSize: '200% auto',
  border: variant === 'outlined' ? '2px solid #8B4513' : 'none',
  color: variant === 'contained' ? '#2E5266' : '#8B4513',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    backgroundPosition: 'right center',
    background: variant === 'contained' ? 'linear-gradient(135deg, #8B4513 0%, #D4A574 100%)' : 'rgba(212, 165, 116, 0.1)',
    boxShadow: variant === 'contained' ? '0 10px 25px rgba(212, 165, 116, 0.4)' : 'none',
    transform: 'translateY(-3px) scale(1.02)',
    color: variant === 'contained' ? '#FFFFFF' : '#2E5266',
  },
  '&:disabled': {
    background: 'rgba(189, 195, 199, 0.3)',
    color: '#BDC3C7',
    boxShadow: 'none',
    transform: 'none',
  }
}));

const StyledStepper = styled(Stepper)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& .MuiStepIcon-root': {
    color: '#E2E8F0',
    fontSize: '2rem',
    transition: 'all 0.3s ease',
    '&.Mui-active': {
      color: '#D4A574',
      animation: 'pulse 2s infinite',
    },
    '&.Mui-completed': {
      color: '#27AE60',
    }
  },
  '& .MuiStepLabel-label': {
    fontWeight: 600,
    fontSize: '1rem',
    color: '#5D6D7E',
    fontFamily: '"Heebo", "Roboto", "Arial", sans-serif',
    '&.Mui-active': {
      color: '#2E5266',
      fontWeight: 700,
    },
    '&.Mui-completed': {
      color: '#27AE60',
    }
  },
  '& .MuiStepConnector-line': {
    borderColor: '#E2E8F0',
    borderTopWidth: 3,
  },
  '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
    borderColor: '#D4A574',
  },
  '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
    borderColor: '#27AE60',
  }
}));

const WelcomeHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -20,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 100,
    height: 100,
    background: 'radial-gradient(circle, rgba(212, 165, 116, 0.2) 0%, transparent 70%)',
    borderRadius: '50%',
    animation: 'float 4s ease-in-out infinite',
  }
}));

const ProgressIndicator = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: 'rgba(212, 165, 116, 0.2)',
  marginBottom: theme.spacing(3),
  '& .MuiLinearProgress-bar': {
    background: 'linear-gradient(90deg, #D4A574, #8B4513)',
    borderRadius: 4,
  }
}));

const StepCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0 4px 20px rgba(46, 82, 102, 0.1)',
  border: '1px solid rgba(212, 165, 116, 0.2)',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 8px 30px rgba(46, 82, 102, 0.15)',
    transform: 'translateY(-2px)',
  }
}));

const ValidationIcon = styled(Box)(({ theme, status }) => ({
  position: 'absolute',
  left: 8,
  top: '50%',
  transform: 'translateY(-50%)',
  color: status === 'success' ? '#27AE60' : status === 'error' ? '#E74C3C' : 'transparent',
  transition: 'all 0.3s ease',
  animation: status ? 'bounceIn 0.5s ease-out' : 'none',
}));

// קומפוננטת דגל
const FlagIcon = styled('img')(({ theme }) => ({
  width: '24px',
  height: '18px',
  marginRight: theme.spacing(1),
  borderRadius: '2px',
  objectFit: 'cover',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.2)',
}));

// יצירת ערכת נושא מותאמת לחברותא
const getCustomTheme = (theme) => createTheme({
  ...theme,
  palette: {
    primary: {
      main: '#2E5266',
      light: '#4A7C95',
      dark: '#1A3A4A',
    },
    secondary: {
      main: '#D4A574',
      light: '#E6C299',
      dark: '#B8935F',
    },
    success: {
      main: '#27AE60',
    },
    warning: {
      main: '#F39C12',
    },
    error: {
      main: '#E74C3C',
    },
    background: {
      default: '#F8F6F0',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#5D6D7E',
    }
  },
  typography: {
    fontFamily: '"Heebo", "Roboto", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#5D6D7E',
          fontWeight: 500,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 20,
        },
      },
    },
  },
});

export const Logon = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const [person, setPerson] = useState({
    id: param.id,
    firstName: param.firstName,
    lastName: param.lastName,
    birthDate: '',
    gender: 'male',
    status: 'single',
    cellularTelephone: '',
    telephone: '',
    country: null,
    city: null,  
    email: '',
    role: '',
    denomination: ''
  });
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState('');
  const [validationStatus, setValidationStatus] = useState({});
  const [availableCities, setAvailableCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const theme = useTheme();
  const customTheme = getCustomTheme(theme);
  const navigate = useNavigate();

  // נתוני מדינות עם דגלים
  const countries = [
    { 
      name: 'ישראל', 
      nameEn: 'Israel', 
      code: 'IL', 
      flag: 'https://flagcdn.com/w40/il.png',
      cities: ['ירושלים', 'תל אביב', 'חיפה', 'באר שבע', 'נתניה', 'פתח תקווה', 'אשדוד', 'ראשון לציון', 'חולון', 'בת ים']
    },
    { 
      name: 'ארצות הברית', 
      nameEn: 'United States', 
      code: 'US', 
      flag: 'https://flagcdn.com/w40/us.png',
      cities: ['ניו יורק', 'לוס אנג\'לס', 'שיקגו', 'יוסטון', 'פיניקס', 'פילדלפיה', 'סן אנטוניו', 'סן דייגו', 'דאלאס', 'סן חוזה']
    },
    { 
      name: 'קנדה', 
      nameEn: 'Canada', 
      code: 'CA', 
      flag: 'https://flagcdn.com/w40/ca.png',
      cities: ['טורונטו', 'מונטריאול', 'ונקובר', 'קלגרי', 'אדמונטון', 'אוטווה', 'מיסיסוגה', 'וויניפג', 'המילטון', 'קוויבק סיטי']
    },
    { 
      name: 'בריטניה', 
      nameEn: 'United Kingdom', 
      code: 'GB', 
      flag: 'https://flagcdn.com/w40/gb.png',
      cities: ['לונדון', 'ברמינגהם', 'מנצ\'סטר', 'גלזגו', 'ליברפול', 'ליידס', 'שפילד', 'אדינבורו', 'בריסטול', 'קרדיף']
    },
    { 
      name: 'צרפת', 
      nameEn: 'France', 
      code: 'FR', 
      flag: 'https://flagcdn.com/w40/fr.png',
      cities: ['פריז', 'מרסיי', 'ליון', 'טולוז', 'ניס', 'נאנט', 'מונפלייה', 'סטרסבורג', 'בורדו', 'ליל']
    },
    { 
      name: 'גרמניה', 
      nameEn: 'Germany', 
      code: 'DE', 
      flag: 'https://flagcdn.com/w40/de.png',
      cities: ['ברלין', 'המבורג', 'מינכן', 'קלן', 'פרנקפורט', 'שטוטגרט', 'דיסלדורף', 'דורטמונד', 'אסן', 'לייפציג']
    },
    { 
      name: 'אוסטרליה', 
      nameEn: 'Australia', 
      code: 'AU', 
      flag: 'https://flagcdn.com/w40/au.png',
      cities: ['סידני', 'מלבורן', 'בריסביין', 'פרת\'', 'אדלייד', 'גולד קוסט', 'קנברה', 'ניוקאסל', 'וולונגונג', 'גילונג']
    },
    { 
      name: 'דרום אפריקה', 
      nameEn: 'South Africa', 
      code: 'ZA', 
      flag: 'https://flagcdn.com/w40/za.png',
      cities: ['יוהנסבורג', 'קייפטאון', 'דרבן', 'פרטוריה', 'פורט אליזבת\'', 'בלומפונטיין', 'איסט לונדון', 'נלספרויט', 'קימברלי', 'פולוקוואנה']
    },
    { 
      name: 'ברזיל', 
      nameEn: 'Brazil', 
      code: 'BR', 
      flag: 'https://flagcdn.com/w40/br.png',
      cities: ['סאו פאולו', 'ריו דה ז\'נרו', 'ברזיליה', 'סלבדור', 'פורטלזה', 'בלו הוריזונטה', 'מנאוס', 'קוריטיבה', 'רסיפה', 'פורטו אלגרה']
    },
    { 
      name: 'ארגנטינה', 
      nameEn: 'Argentina', 
      code: 'AR', 
      flag: 'https://flagcdn.com/w40/ar.png',
      cities: ['בואנוס איירס', 'קורדובה', 'רוסריו', 'מנדוזה', 'טוקומן', 'לה פלטה', 'מאר דל פלטה', 'סלטה', 'סנטה פה', 'סן חואן']
    },
    { 
      name: 'מקסיקו', 
      nameEn: 'Mexico', 
      code: 'MX', 
      flag: 'https://flagcdn.com/w40/mx.png',
      cities: ['מקסיקו סיטי', 'גוודלחרה', 'מונטריי', 'פואבלה', 'טיחואנה', 'ליאון', 'חוארז', 'טורריאון', 'מרידה', 'אגואסקליינטס']
    },
    { 
      name: 'רוסיה', 
      nameEn: 'Russia', 
      code: 'RU', 
      flag: 'https://flagcdn.com/w40/ru.png',
      cities: ['מוסקבה', 'סנט פטרסבורג', 'נובוסיבירסק', 'יקטרינבורג', 'ניז\'ני נובגורוד', 'קזאן', 'צ\'ליאבינסק', 'אומסק', 'סמרה', 'רוסטוב על הדון']
    },
    { 
      name: 'אוקראינה', 
      nameEn: 'Ukraine', 
      code: 'UA', 
      flag: 'https://flagcdn.com/w40/ua.png',
      cities: ['קייב', 'חרקוב', 'אודסה', 'דניפרו', 'דונצק', 'זפוריז\'יה', 'לבוב', 'קריבי ריה', 'מיקולאיב', 'מריופול']
    },
    { 
      name: 'איטליה', 
      nameEn: 'Italy', 
      code: 'IT', 
      flag: 'https://flagcdn.com/w40/it.png',
      cities: ['רומא', 'מילאנו', 'נאפולי', 'טורינו', 'פלרמו', 'גנואה', 'בולוניה', 'פירנצה', 'בארי', 'קטאניה']
    },
    { 
      name: 'ספרד', 
      nameEn: 'Spain', 
      code: 'ES', 
      flag: 'https://flagcdn.com/w40/es.png',
      cities: ['מדריד', 'ברצלונה', 'ולנסיה', 'סביליה', 'סרגוסה', 'מלגה', 'מורסיה', 'פלמה', 'לאס פלמאס', 'ביליבאו']
    },
    { 
      name: 'הולנד', 
      nameEn: 'Netherlands', 
      code: 'NL', 
      flag: 'https://flagcdn.com/w40/nl.png',
      cities: ['אמסטרדם', 'רוטרדם', 'האג', 'אוטרכט', 'איינדהובן', 'טילבורג', 'חרונינגן', 'אלמרה', 'ברדה', 'נימחן']
    },
    { 
      name: 'בלגיה', 
      nameEn: 'Belgium', 
      code: 'BE', 
      flag: 'https://flagcdn.com/w40/be.png',
      cities: ['בריסל', 'אנטוורפן', 'גנט', 'שארלרואה', 'ליאז\'', 'ברוז\'', 'נאמור', 'לובן', 'מונס', 'אלסט']
    },
    { 
      name: 'שוויץ', 
      nameEn: 'Switzerland', 
      code: 'CH', 
      flag: 'https://flagcdn.com/w40/ch.png',
      cities: ['ציריך', 'ז\'נבה', 'באזל', 'ברן', 'לוזאן', 'וינטרטור', 'לוצרן', 'סנט גאלן', 'לוגאנו', 'ביל']
    },
    { 
      name: 'אוסטריה', 
      nameEn: 'Austria', 
      code: 'AT', 
      flag: 'https://flagcdn.com/w40/at.png',
      cities: ['וינה', 'גראץ', 'לינץ', 'זלצבורג', 'אינסברוק', 'קלגנפורט', 'וילס', 'דורנבירן', 'שטייר', 'פלדקירך']
    },
    { 
      name: 'שוודיה', 
      nameEn: 'Sweden', 
      code: 'SE', 
      flag: 'https://flagcdn.com/w40/se.png',
      cities: ['סטוקהולם', 'גטבורג', 'מלמה', 'אופסלה', 'וסטראס', 'אורברו', 'לינקפינג', 'הלסינגבורג', 'יונקפינג', 'נורקפינג']
    }
  ];

  const roles = [
    'תלמיד ישיבה',
    'אברך',
    'רב',
    'מורה',
    'רב קהילה',
    'דיין',
    'מחנך',
    'רוש ישיבה',
    'מגיד שיעור',
    'חזן',
    'סופר סת"ם',
    'שוחט ובודק',
    'מוהל',
    'בעל תפילה',
    'גבאי',
    'פרנס',
    'תלמיד חכם',
    'בן תורה',
    'לומד עצמאי',
    'אחר'
  ];

  const denominations = [
    'חרדי ליטאי',
    'חרדי חסידי',
    'חרדי ספרדי',
    'דתי לאומי',
    'דתי מתון',
    'מסורתי',
    'חילוני',
    'רפורמי',
    'קונסרבטיבי',
    'אורתודוקסי מודרני',
    'חב"ד',
    'ברסלב',
    'ספרדי מסורתי',
    'תימני',
    'אתיופי',
    'אחר'
  ];

  const steps = [
    'פרטים אישיים',
    'פרטי קשר',
    'רקע ומעמד',
    'סיום הרשמה'
  ];

  // עדכון ערים כאשר המדינה משתנה
  useEffect(() => {
    if (person.country) {
      const selectedCountry = countries.find(c => c.code === person.country.code);
      if (selectedCountry) {
        setAvailableCities(selectedCountry.cities.map(city => ({ name: city, label: city })));
      } else {
        setAvailableCities([]);
      }
      // איפוס העיר כאשר המדינה משתנה
      setPerson(prev => ({ ...prev, city: null }));
    }
  }, [person.country]);

  // ולידציה של שדות
  const validateField = (fieldName, value) => {
    let isValid = true;
    let message = '';

    switch (fieldName) {
      case 'firstName':
      case 'lastName':
        isValid = value && value.trim().length >= 2;
        message = isValid ? '' : 'שם חייב להכיל לפחות 2 תווים';
        break;
      case 'id':
        isValid = value && /^\d{9}$/.test(value);
        message = isValid ? '' : 'תעודת זהות חייבת להכיל 9 ספרות';
        break;
      case 'email':
        isValid = value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        message = isValid ? '' : 'כתובת אימייל לא תקינה';
        break;
      case 'cellularTelephone':
        isValid = value && /^[\d\-\+\(\)\s]{10,}$/.test(value);
        message = isValid ? '' : 'מספר טלפון לא תקין';
        break;
        case 'birthDate':
          if (value) {
            const birthYear = new Date(value).getFullYear();
            const currentYear = new Date().getFullYear();
            const age = currentYear - birthYear;
            isValid = age >= 13 && age <= 120;
            message = isValid ? '' : 'גיל חייב להיות בין 13 ל-120';
          } else {
            isValid = false;
            message = 'תאריך לידה נדרש';
          }
          break;
        case 'country':
          isValid = value !== null;
          message = isValid ? '' : 'יש לבחור מדינה';
          break;
        case 'city':
          isValid = value !== null;
          message = isValid ? '' : 'יש לבחור עיר';
          break;
        case 'role':
          isValid = value && value.trim().length > 0;
          message = isValid ? '' : 'יש לבחור תפקיד';
          break;
        case 'denomination':
          isValid = value && value.trim().length > 0;
          message = isValid ? '' : 'יש לבחור זרם דתי';
          break;
        default:
          isValid = true;
      }
  
      setValidationStatus(prev => ({
        ...prev,
        [fieldName]: {
          isValid,
          message,
          status: isValid ? 'success' : 'error'
        }
      }));
  
      return isValid;
    };
  
    // בדיקת תקינות צעד
    const validateStep = (stepIndex) => {
      let isValid = true;
      const fieldsToValidate = [];
  
      switch (stepIndex) {
        case 0: // פרטים אישיים
          fieldsToValidate.push('firstName', 'lastName', 'id', 'birthDate', 'gender', 'status');
          break;
        case 1: // פרטי קשר
          fieldsToValidate.push('cellularTelephone', 'email', 'country', 'city');
          break;
        case 2: // רקע ומעמד
          fieldsToValidate.push('role', 'denomination');
          break;
        default:
          return true;
      }
  
      fieldsToValidate.forEach(field => {
        const fieldValue = person[field];
        if (!validateField(field, fieldValue)) {
          isValid = false;
        }
      });
  
      return isValid;
    };
  
    const handleNext = () => {
      if (validateStep(activeStep)) {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setError('');
      } else {
        setError('אנא מלא את כל השדות הנדרשים בצורה תקינה');
        setSnackbar({
          open: true,
          message: 'אנא מלא את כל השדות הנדרשים בצורה תקינה',
          severity: 'error'
        });
      }
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
      setError('');
    };
  
    const handleSubmit = async () => {
      if (!validateStep(2)) {
        setError('אנא מלא את כל השדות הנדרשים בצורה תקינה');
        return;
      }
  
      setIsLoading(true);
      try {
        const personData = {
          ...person,
          country: person.country?.name || '',
          city: person.city?.name || ''
        };
        
        await dispatch(AddPersonThunk(personData));
        setSnackbar({
          open: true,
          message: 'ההרשמה הושלמה בהצלחה! מעביר לדף הבא...',
          severity: 'success'
        });
        
        setTimeout(() => {
          navigate(`/offer/${person.id}`);
        }, 2000);
      } catch (error) {
        setError('שגיאה בהרשמה. אנא נסה שוב.');
        setSnackbar({
          open: true,
          message: 'שגיאה בהרשמה. אנא נסה שוב.',
          severity: 'error'
        });
      } finally {
        setIsLoading(false);
      }
    };
  
    const handleInputChange = (field, value) => {
      setPerson(prev => ({ ...prev, [field]: value }));
      validateField(field, value);
    };
  
    const getStepContent = (step) => {
      switch (step) {
        case 0:
          return (
            <Fade in={true} timeout={600}>
              <StepCard>
                <CardContent sx={{ p: 4 }}>
                  <SectionTitle variant="h5">
                    פרטים אישיים
                  </SectionTitle>
                  
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <IconBox>
                        <FaUser />
                        <Typography variant="body1" fontWeight="600">שם פרטי</Typography>
                      </IconBox>
                      <Box sx={{ position: 'relative' }}>
                        <StyledTextField
                          fullWidth
                          label="שם פרטי"
                          value={person.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          error={validationStatus.firstName?.status === 'error'}
                          helperText={validationStatus.firstName?.message}
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <FaUser />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <ValidationIcon status={validationStatus.firstName?.status}>
                          {validationStatus.firstName?.status === 'success' && <CheckCircle />}
                          {validationStatus.firstName?.status === 'error' && <Error />}
                        </ValidationIcon>
                      </Box>
                    </Grid>
  
                    <Grid item xs={12} md={6}>
                      <IconBox>
                        <FaUser />
                        <Typography variant="body1" fontWeight="600">שם משפחה</Typography>
                      </IconBox>
                      <Box sx={{ position: 'relative' }}>
                        <StyledTextField
                          fullWidth
                          label="שם משפחה"
                          value={person.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          error={validationStatus.lastName?.status === 'error'}
                          helperText={validationStatus.lastName?.message}
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <FaUser />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <ValidationIcon status={validationStatus.lastName?.status}>
                          {validationStatus.lastName?.status === 'success' && <CheckCircle />}
                          {validationStatus.lastName?.status === 'error' && <Error />}
                        </ValidationIcon>
                      </Box>
                    </Grid>
  
                    <Grid item xs={12} md={6}>
                      <IconBox>
                        <FaIdCard />
                        <Typography variant="body1" fontWeight="600">תעודת זהות</Typography>
                      </IconBox>
                      <Box sx={{ position: 'relative' }}>
                        <StyledTextField
                          fullWidth
                          label="תעודת זהות"
                          value={person.id}
                          onChange={(e) => handleInputChange('id', e.target.value)}
                          error={validationStatus.id?.status === 'error'}
                          helperText={validationStatus.id?.message}
                          required
                          inputProps={{ maxLength: 9 }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <FaIdCard />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <ValidationIcon status={validationStatus.id?.status}>
                          {validationStatus.id?.status === 'success' && <CheckCircle />}
                          {validationStatus.id?.status === 'error' && <Error />}
                        </ValidationIcon>
                      </Box>
                    </Grid>
  
                    <Grid item xs={12} md={6}>
                      <IconBox>
                        <FaCalendarAlt />
                        <Typography variant="body1" fontWeight="600">תאריך לידה</Typography>
                      </IconBox>
                      <Box sx={{ position: 'relative' }}>
                        <StyledTextField
                          fullWidth
                          type="date"
                          label="תאריך לידה"
                          value={person.birthDate}
                          onChange={(e) => handleInputChange('birthDate', e.target.value)}
                          error={validationStatus.birthDate?.status === 'error'}
                          helperText={validationStatus.birthDate?.message}
                          required
                          InputLabelProps={{ shrink: true }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <FaCalendarAlt />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <ValidationIcon status={validationStatus.birthDate?.status}>
                          {validationStatus.birthDate?.status === 'success' && <CheckCircle />}
                          {validationStatus.birthDate?.status === 'error' && <Error />}
                        </ValidationIcon>
                      </Box>
                    </Grid>
  
                    <Grid item xs={12} md={6}>
                      <IconBox>
                        <FaVenusMars />
                        <Typography variant="body1" fontWeight="600">מגדר</Typography>
                      </IconBox>
                      <FormControl fullWidth>
                        <RadioGroup
                          row
                          value={person.gender}
                          onChange={(e) => handleInputChange('gender', e.target.value)}
                        >
                          <FormControlLabel 
                            value="male" 
                            control={<Radio sx={{ color: '#8B4513' }} />} 
                            label="זכר" 
                          />
                          <FormControlLabel 
                            value="female" 
                            control={<Radio sx={{ color: '#8B4513' }} />} 
                            label="נקבה" 
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
  
                    <Grid item xs={12} md={6}>
                      <IconBox>
                        <FaHeart />
                        <Typography variant="body1" fontWeight="600">מצב משפחתי</Typography>
                      </IconBox>
                      <FormControl fullWidth>
                        <InputLabel>מצב משפחתי</InputLabel>
                        <StyledSelect
                          value={person.status}
                          onChange={(e) => handleInputChange('status', e.target.value)}
                          label="מצב משפחתי"
                        >
                          <MenuItem value="single">רווק/ה</MenuItem>
                          <MenuItem value="married">נשוי/ה</MenuItem>
                          <MenuItem value="divorced">גרוש/ה</MenuItem>
                          <MenuItem value="widowed">אלמן/ה</MenuItem>
                        </StyledSelect>
                      </FormControl>
                    </Grid>
                  </Grid>
                </CardContent>
              </StepCard>
            </Fade>
          );
  
        case 1:
          return (
            <Slide direction="right" in={true} timeout={600}>
              <StepCard>
                <CardContent sx={{ p: 4 }}>
                  <SectionTitle variant="h5">
                    פרטי קשר
                  </SectionTitle>
                  
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <IconBox>
                        <FaPhone />
                        <Typography variant="body1" fontWeight="600">טלפון נייד</Typography>
                      </IconBox>
                      <Box sx={{ position: 'relative' }}>
                        <StyledTextField
                          fullWidth
                          label="טלפון נייד"
                          value={person.cellularTelephone}
                          onChange={(e) => handleInputChange('cellularTelephone', e.target.value)}
                          error={validationStatus.cellularTelephone?.status === 'error'}
                          helperText={validationStatus.cellularTelephone?.message}
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <FaPhone />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <ValidationIcon status={validationStatus.cellularTelephone?.status}>
                          {validationStatus.cellularTelephone?.status === 'success' && <CheckCircle />}
                          {validationStatus.cellularTelephone?.status === 'error' && <Error />}
                        </ValidationIcon>
                      </Box>
                    </Grid>
  
                    <Grid item xs={12} md={6}>
                      <IconBox>
                        <FaPhone />
                        <Typography variant="body1" fontWeight="600">טלפון בית (אופציונלי)</Typography>
                      </IconBox>
                      <StyledTextField
                        fullWidth
                        label="טלפון בית"
                        value={person.telephone}
                        onChange={(e) => handleInputChange('telephone', e.target.value)}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <FaPhone />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
  
                    <Grid item xs={12}>
                      <IconBox>
                        <FaMapMarkerAlt />
                        <Typography variant="body1" fontWeight="600">כתובת אימייל</Typography>
                      </IconBox>
                      <Box sx={{ position: 'relative' }}>
                        <StyledTextField
                          fullWidth
                          type="email"
                          label="כתובת אימייל"
                          value={person.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          error={validationStatus.email?.status === 'error'}
                          helperText={validationStatus.email?.message}
                          required
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                @
                              </InputAdornment>
                            ),
                          }}
                        />
                        <ValidationIcon status={validationStatus.email?.status}>
                          {validationStatus.email?.status === 'success' && <CheckCircle />}
                          {validationStatus.email?.status === 'error' && <Error />}
                        </ValidationIcon>
                      </Box>
                    </Grid>
  
                    <Grid item xs={12} md={6}>
                    <IconBox>
                      <FaMapMarkerAlt />
                      <Typography variant="body1" fontWeight="600">מדינה</Typography>
                    </IconBox>
                    <Box sx={{ position: 'relative' }}>
                      <Autocomplete
                        fullWidth
                        options={countries}
                        value={person.country}
                        onChange={(event, newValue) => handleInputChange('country', newValue)}
                        getOptionLabel={(option) => option.name || ''}
                        isOptionEqualToValue={(option, value) => option.code === value?.code}
                        renderOption={(props, option) => (
                          <Box component="li" {...props} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <FlagIcon 
                              src={option.flag} 
                              alt={`${option.name} flag`}
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                            <Typography>{option.name}</Typography>
                          </Box>
                        )}
                        renderInput={(params) => (
                          <StyledTextField
                            {...params}
                            label="מדינה"
                            error={validationStatus.country?.status === 'error'}
                            helperText={validationStatus.country?.message}
                            required
                            InputProps={{
                              ...params.InputProps,
                              startAdornment: (
                                <InputAdornment position="start">
                                  {person.country ? (
                                    <FlagIcon 
                                      src={person.country.flag} 
                                      alt={`${person.country.name} flag`}
                                      onError={(e) => {
                                        e.target.style.display = 'none';
                                      }}
                                    />
                                  ) : (
                                    <FaMapMarkerAlt />
                                  )}
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                        sx={{
                          '& .MuiAutocomplete-popupIndicator': {
                            color: '#8B4513',
                          },
                          '& .MuiAutocomplete-clearIndicator': {
                            color: '#8B4513',
                          }
                        }}
                      />
                      <ValidationIcon status={validationStatus.country?.status}>
                        {validationStatus.country?.status === 'success' && <CheckCircle />}
                        {validationStatus.country?.status === 'error' && <Error />}
                      </ValidationIcon>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <IconBox>
                      <FaMapMarkerAlt />
                      <Typography variant="body1" fontWeight="600">עיר</Typography>
                    </IconBox>
                    <Box sx={{ position: 'relative' }}>
                      <Autocomplete
                        fullWidth
                        options={availableCities}
                        value={person.city}
                        onChange={(event, newValue) => handleInputChange('city', newValue)}
                        getOptionLabel={(option) => option.name || ''}
                        isOptionEqualToValue={(option, value) => option.name === value?.name}
                        disabled={!person.country}
                        renderInput={(params) => (
                          <StyledTextField
                            {...params}
                            label="עיר"
                            error={validationStatus.city?.status === 'error'}
                            helperText={validationStatus.city?.message || (!person.country ? 'בחר מדינה תחילה' : '')}
                            required
                            InputProps={{
                              ...params.InputProps,
                              startAdornment: (
                                <InputAdornment position="start">
                                  <FaMapMarkerAlt />
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                        sx={{
                          '& .MuiAutocomplete-popupIndicator': {
                            color: '#8B4513',
                          },
                          '& .MuiAutocomplete-clearIndicator': {
                            color: '#8B4513',
                          }
                        }}
                      />
                      <ValidationIcon status={validationStatus.city?.status}>
                        {validationStatus.city?.status === 'success' && <CheckCircle />}
                        {validationStatus.city?.status === 'error' && <Error />}
                      </ValidationIcon>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </StepCard>
          </Slide>
        );

      case 2:
        return (
          <Zoom in={true} timeout={600}>
            <StepCard>
              <CardContent sx={{ p: 4 }}>
                <SectionTitle variant="h5">
                  רקע ומעמד
                </SectionTitle>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <IconBox>
                      <FaUserGraduate />
                      <Typography variant="body1" fontWeight="600">תפקיד/מעמד</Typography>
                    </IconBox>
                    <Box sx={{ position: 'relative' }}>
                      <Autocomplete
                        fullWidth
                        options={roles}
                        value={person.role}
                        onChange={(event, newValue) => handleInputChange('role', newValue)}
                        freeSolo
                        renderInput={(params) => (
                          <StyledTextField
                            {...params}
                            label="תפקיד/מעמד"
                            error={validationStatus.role?.status === 'error'}
                            helperText={validationStatus.role?.message}
                            required
                            InputProps={{
                              ...params.InputProps,
                              startAdornment: (
                                <InputAdornment position="start">
                                  <FaUserGraduate />
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                        sx={{
                          '& .MuiAutocomplete-popupIndicator': {
                            color: '#8B4513',
                          },
                          '& .MuiAutocomplete-clearIndicator': {
                            color: '#8B4513',
                          }
                        }}
                      />
                      <ValidationIcon status={validationStatus.role?.status}>
                        {validationStatus.role?.status === 'success' && <CheckCircle />}
                        {validationStatus.role?.status === 'error' && <Error />}
                      </ValidationIcon>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <IconBox>
                      <FaBook />
                      <Typography variant="body1" fontWeight="600">זרם דתי</Typography>
                    </IconBox>
                    <Box sx={{ position: 'relative' }}>
                      <Autocomplete
                        fullWidth
                        options={denominations}
                        value={person.denomination}
                        onChange={(event, newValue) => handleInputChange('denomination', newValue)}
                        freeSolo
                        renderInput={(params) => (
                          <StyledTextField
                            {...params}
                            label="זרם דתי"
                            error={validationStatus.denomination?.status === 'error'}
                            helperText={validationStatus.denomination?.message}
                            required
                            InputProps={{
                              ...params.InputProps,
                              startAdornment: (
                                <InputAdornment position="start">
                                  <FaBook />
                                </InputAdornment>
                              ),
                            }}
                          />
                        )}
                        sx={{
                          '& .MuiAutocomplete-popupIndicator': {
                            color: '#8B4513',
                          },
                          '& .MuiAutocomplete-clearIndicator': {
                            color: '#8B4513',
                          }
                        }}
                      />
                      <ValidationIcon status={validationStatus.denomination?.status}>
                        {validationStatus.denomination?.status === 'success' && <CheckCircle />}
                        {validationStatus.denomination?.status === 'error' && <Error />}
                      </ValidationIcon>
                    </Box>
                  </Grid>

                  <Grid item xs={12}>
                    <Box sx={{ 
                      p: 3, 
                      borderRadius: 2, 
                      bgcolor: 'rgba(212, 165, 116, 0.1)',
                      border: '1px solid rgba(212, 165, 116, 0.3)'
                    }}>
                      <Typography variant="h6" gutterBottom sx={{ color: '#2E5266', fontWeight: 600 }}>
                        <Info sx={{ mr: 1, verticalAlign: 'middle' }} />
                        סיכום הפרטים
                      </Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body2" color="text.secondary">
                            <strong>שם מלא:</strong> {person.firstName} {person.lastName}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body2" color="text.secondary">
                            <strong>תעודת זהות:</strong> {person.id}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body2" color="text.secondary">
                            <strong>אימייל:</strong> {person.email}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body2" color="text.secondary">
                            <strong>טלפון:</strong> {person.cellularTelephone}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
                            <strong>מדינה:</strong> 
                            {person.country && (
                              <>
                                <FlagIcon 
                                  src={person.country.flag} 
                                  alt={`${person.country.name} flag`}
                                  sx={{ mx: 1 }}
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                                {person.country.name}
                              </>
                            )}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body2" color="text.secondary">
                            <strong>עיר:</strong> {person.city?.name}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body2" color="text.secondary">
                            <strong>תפקיד:</strong> {person.role}
                          </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Typography variant="body2" color="text.secondary">
                            <strong>זרם דתי:</strong> {person.denomination}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </StepCard>
          </Zoom>
        );

      case 3:
        return (
          <Fade in={true} timeout={800}>
            <StepCard>
              <CardContent sx={{ p: 6, textAlign: 'center' }}>
                <Box sx={{ mb: 4 }}>
                  <CheckCircle sx={{ fontSize: 80, color: '#27AE60', mb: 2 }} />
                  <Typography variant="h4" gutterBottom sx={{ color: '#2E5266', fontWeight: 700 }}>
                    ברוכים הבאים לחברותא!
                  </Typography>
                  <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                    ההרשמה הושלמה בהצלחה
                  </Typography>
                </Box>

                <Box sx={{ 
                  p: 3, 
                  borderRadius: 2, 
                  bgcolor: 'rgba(39, 174, 96, 0.1)',
                  border: '1px solid rgba(39, 174, 96, 0.3)',
                  mb: 4
                }}>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    שלום {person.firstName}, אנחנו שמחים שהצטרפת אלינו!
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    כעת תוכל ליצור הצעות לימוד ולמצוא שותפים ללמידה.
                    המערכת תעביר אותך לדף יצירת ההצעות בעוד כמה שניות.
                  </Typography>
                </Box>

                <StyledButton
                  variant="contained"
                  size="large"
                  onClick={() => navigate(`/offer/${person.id}`)}
                  sx={{ minWidth: 200 }}
                >
                  המשך ליצירת הצעות
                </StyledButton>
              </CardContent>
            </StepCard>
          </Fade>
        );

      default:
        return 'Unknown step';
    }
  };

  const getProgressValue = () => {
    return ((activeStep + 1) / steps.length) * 100;
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #F8F6F0 0%, #FEFCF7 50%, #F0F8FF 100%)',
        py: 4
      }}>
        <Container maxWidth="lg">
          <WelcomeHeader>
            <Typography variant="h3" gutterBottom sx={{ 
              color: '#2E5266', 
              fontWeight: 700,
              textShadow: '0 2px 4px rgba(46, 82, 102, 0.1)'
            }}>
              הצטרפות לחברותא
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              מערכת לחיבור בין לומדי תורה
            </Typography>
            
            <ProgressIndicator 
              variant="determinate" 
              value={getProgressValue()}
              sx={{ maxWidth: 400, mx: 'auto' }}
            />
            <Typography variant="body2" color="text.secondary">
              שלב {activeStep + 1} מתוך {steps.length}
            </Typography>
          </WelcomeHeader>

          <StyledPaper>
          <StyledStepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel>
                    <Typography variant="body1" fontWeight={activeStep === index ? 700 : 500}>
                      {label}
                    </Typography>
                  </StepLabel>
                </Step>
              ))}
            </StyledStepper>

            {error && (
              <Fade in={true}>
                <Alert 
                  severity="error" 
                  sx={{ 
                    mb: 3, 
                    borderRadius: 2,
                    '& .MuiAlert-icon': {
                      fontSize: '1.5rem'
                    }
                  }}
                >
                  {error}
                </Alert>
              </Fade>
            )}

            <Box sx={{ mt: 4 }}>
              {getStepContent(activeStep)}
            </Box>

            {activeStep < 3 && (
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                mt: 4,
                pt: 3,
                borderTop: '1px solid rgba(212, 165, 116, 0.2)'
              }}>
                <StyledButton
                  variant="outlined"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  sx={{ minWidth: 120 }}
                >
                  חזור
                </StyledButton>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  {activeStep === steps.length - 2 ? (
                    <StyledButton
                      variant="contained"
                      onClick={handleSubmit}
                      disabled={isLoading}
                      sx={{ 
                        minWidth: 150,
                        position: 'relative'
                      }}
                    >
                      {isLoading ? (
                        <>
                          <LinearProgress 
                            sx={{ 
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              height: '100%',
                              borderRadius: 50,
                              '& .MuiLinearProgress-bar': {
                                background: 'rgba(255, 255, 255, 0.3)'
                              }
                            }} 
                          />
                          <Typography sx={{ position: 'relative', zIndex: 1 }}>
                            שומר...
                          </Typography>
                        </>
                      ) : (
                        <>
                          <FaStar style={{ marginLeft: 8 }} />
                          סיום הרשמה
                        </>
                      )}
                    </StyledButton>
                  ) : (
                    <StyledButton
                      variant="contained"
                      onClick={handleNext}
                      sx={{ minWidth: 120 }}
                    >
                      המשך
                    </StyledButton>
                  )}
                </Box>
              </Box>
            )}
          </StyledPaper>

          {/* הצגת סטטיסטיקות */}
          <Box sx={{ mt: 6 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Card sx={{ 
                  textAlign: 'center', 
                  p: 3, 
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, rgba(139, 69, 19, 0.05) 100%)',
                  border: '1px solid rgba(212, 165, 116, 0.2)'
                }}>
                  <FaUserGraduate style={{ fontSize: '3rem', color: '#8B4513', marginBottom: '1rem' }} />
                  <Typography variant="h4" fontWeight="bold" color="#2E5266">
                    1,250+
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    לומדים רשומים
                  </Typography>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card sx={{ 
                  textAlign: 'center', 
                  p: 3, 
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, rgba(139, 69, 19, 0.05) 100%)',
                  border: '1px solid rgba(212, 165, 116, 0.2)'
                }}>
                  <FaBook style={{ fontSize: '3rem', color: '#8B4513', marginBottom: '1rem' }} />
                  <Typography variant="h4" fontWeight="bold" color="#2E5266">
                    850+
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    חברותות פעילות
                  </Typography>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card sx={{ 
                  textAlign: 'center', 
                  p: 3, 
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.1) 0%, rgba(139, 69, 19, 0.05) 100%)',
                  border: '1px solid rgba(212, 165, 116, 0.2)'
                }}>
                  <FaMapMarkerAlt style={{ fontSize: '3rem', color: '#8B4513', marginBottom: '1rem' }} />
                  <Typography variant="h4" fontWeight="bold" color="#2E5266">
                    45+
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    מדינות ברחבי העולם
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>

        {/* Snackbar להודעות */}
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
              borderRadius: 2,
              fontWeight: 600,
              '& .MuiAlert-icon': {
                fontSize: '1.5rem'
              }
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

  







