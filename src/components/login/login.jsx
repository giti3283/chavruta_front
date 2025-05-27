
// // // בס"ד

// // import React, { useState, useEffect } from 'react';
// // import { useDispatch, useSelector } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import { GetByIdThunk } from '../../redux/Person/getByIdThunk';
// // import './login.css';

// // // Material UI
// // import Box from '@mui/material/Box';
// // import IconButton from '@mui/material/IconButton';
// // import Input from '@mui/material/Input';
// // import InputLabel from '@mui/material/InputLabel';
// // import InputAdornment from '@mui/material/InputAdornment';
// // import FormControl from '@mui/material/FormControl';
// // import TextField from '@mui/material/TextField';
// // import Visibility from '@mui/icons-material/Visibility';
// // import VisibilityOff from '@mui/icons-material/VisibilityOff';
// // import Button from '@mui/material/Button';
// // import Dialog from '@mui/material/Dialog';
// // import DialogActions from '@mui/material/DialogActions';
// // import DialogContent from '@mui/material/DialogContent';
// // import DialogContentText from '@mui/material/DialogContentText';
// // import DialogTitle from '@mui/material/DialogTitle';
// // import { 
// //     Paper, Typography, Container, Grid, Divider, 
// //     alpha, CircularProgress, Slide, Zoom, Fade,
// //     Backdrop, Chip, Avatar, useTheme, useMediaQuery
// // } from '@mui/material';
// // import { styled } from '@mui/material/styles';
// // import { motion } from 'framer-motion';

// // // Icons
// // import PersonIcon from '@mui/icons-material/Person';
// // import LockIcon from '@mui/icons-material/Lock';
// // import LoginIcon from '@mui/icons-material/Login';
// // import PersonAddIcon from '@mui/icons-material/PersonAdd';
// // import BadgeIcon from '@mui/icons-material/Badge';
// // import FaceIcon from '@mui/icons-material/Face';
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// // import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// // import CancelIcon from '@mui/icons-material/Cancel';
// // import BookIcon from '@mui/icons-material/Book';

// // // Styled components
// // const StyledPaper = styled(Paper)(({ theme }) => ({
// //     padding: theme.spacing(4),
// //     borderRadius: 24,
// //     boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
// //     background: 'linear-gradient(145deg, #ffffff, #f5f7fa)',
// //     transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
// //     overflow: 'hidden',
// //     position: 'relative',
// //     '&:hover': {
// //         transform: 'translateY(-5px)',
// //         boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
// //     },
// //     '&::before': {
// //         content: '""',
// //         position: 'absolute',
// //         top: 0,
// //         left: 0,
// //         right: 0,
// //         height: '6px',
// //         background: 'linear-gradient(90deg, #3f51b5, #2196f3, #00bcd4)',
// //     }
// // }));

// // const GlowingButton = styled(Button)(({ theme }) => ({
// //     borderRadius: '50px',
// //     padding: '12px 32px',
// //     fontSize: '1.1rem',
// //     fontWeight: 'bold',
// //     textTransform: 'none',
// //     fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //     boxShadow: '0 6px 15px rgba(63, 81, 181, 0.3)',
// //     position: 'relative',
// //     overflow: 'hidden',
// //     transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
// //     background: 'linear-gradient(45deg, #3f51b5 0%, #2196f3 50%, #00bcd4 100%)',
// //     backgroundSize: '200% auto',
// //     '&:hover': {
// //         backgroundPosition: 'right center',
// //         transform: 'translateY(-3px) scale(1.02)',
// //         boxShadow: '0 10px 25px rgba(63, 81, 181, 0.4)',
// //     },
// //     '&::after': {
// //         content: '""',
// //         position: 'absolute',
// //         top: '-50%',
// //         left: '-50%',
// //         width: '200%',
// //         height: '200%',
// //         background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
// //         opacity: 0,
// //         transition: 'opacity 0.5s ease',
// //     },
// //     '&:active::after': {
// //         opacity: 1,
// //     }
// // }));

// // const StyledDialog = styled(Dialog)(({ theme }) => ({
// //     '& .MuiDialog-paper': {
// //         borderRadius: 24,
// //         boxShadow: '0 24px 80px rgba(0, 0, 0, 0.2)',
// //         overflow: 'hidden',
// //         backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 247, 250, 0.95) 100%)',
// //         backdropFilter: 'blur(20px)',
// //     }
// // }));

// // const FormHeaderIcon = styled(Box)(({ theme }) => ({
// //     width: 80,
// //     height: 80,
// //     borderRadius: '50%',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     margin: '0 auto 24px auto',
// //     background: 'linear-gradient(135deg, #3f51b5 0%, #2196f3 50%, #00bcd4 100%)',
// //     color: 'white',
// //     fontSize: 36,
// //     boxShadow: '0 8px 30px rgba(63, 81, 181, 0.4)',
// //     position: 'relative',
// //     '&::after': {
// //         content: '""',
// //         position: 'absolute',
// //         top: -5,
// //         left: -5,
// //         right: -5,
// //         bottom: -5,
// //         borderRadius: '50%',
// //         border: '2px dashed rgba(63, 81, 181, 0.3)',
// //         animation: 'spin 20s linear infinite',
// //     }
// // }));

// // const StyledInputField = styled(FormControl)(({ theme }) => ({
// //     marginBottom: theme.spacing(3),
// //     position: 'relative',
// //     '& .MuiInputLabel-root': {
// //         fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //         fontSize: '1rem',
// //         color: alpha(theme.palette.text.primary, 0.7),
// //     },
// //     '& .MuiInput-root': {
// //         transition: 'all 0.3s ease',
// //         '&::before': {
// //             borderBottomColor: alpha(theme.palette.primary.main, 0.3),
// //         },
// //         '&::after': {
// //             borderBottomColor: theme.palette.primary.main,
// //         },
// //         '&:hover:not(.Mui-disabled)::before': {
// //             borderBottomColor: alpha(theme.palette.primary.main, 0.5),
// //         },
// //     },
// //     '& .MuiInputAdornment-root': {
// //         color: alpha(theme.palette.text.primary, 0.5),
// //     }
// // }));

// // const StyledTextField = styled(TextField)(({ theme }) => ({
// //     marginBottom: theme.spacing(3),
// //     '& .MuiInputLabel-root': {
// //         fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //         fontSize: '1rem',
// //         color: alpha(theme.palette.text.primary, 0.7),
// //     },
// //     '& .MuiInput-root': {
// //         transition: 'all 0.3s ease',
// //         '&::before': {
// //             borderBottomColor: alpha(theme.palette.primary.main, 0.3),
// //         },
// //         '&::after': {
// //             borderBottomColor: theme.palette.primary.main,
// //         },
// //         '&:hover:not(.Mui-disabled)::before': {
// //             borderBottomColor: alpha(theme.palette.primary.main, 0.5),
// //         },
// //     }
// // }));

// // // Animation variants for framer-motion
// // const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: { 
// //         opacity: 1,
// //         transition: { 
// //             staggerChildren: 0.1,
// //             delayChildren: 0.2
// //         }
// //     }
// // };

// // const itemVariants = {
// //     hidden: { y: 20, opacity: 0 },
// //     visible: { 
// //         y: 0, 
// //         opacity: 1,
// //         transition: { 
// //             type: "spring", 
// //             stiffness: 300, 
// //             damping: 24 
// //         }
// //     }
// // };

// // export const Login = () => {
// //     const dispatch = useDispatch();
// //     const navigate = useNavigate();
// //     const [person, setPerson] = useState({ id: "", firstName: "", lastName: "" });
// //     const isexist = useSelector(state => state.people.isExist);
// //     const p = useSelector(state => state.people.person);
// //     const [open, setOpen] = useState(false);
// //     const [showId, setShowId] = useState(false);
// //     const [loading, setLoading] = useState(false);
// //     const [error, setError] = useState("");
// //     const [success, setSuccess] = useState(false);
// //     const [formStep, setFormStep] = useState(0);
// //     const theme = useTheme();
// //     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

// //     const isExist = async () => {
// //         if (!person.id || !person.firstName || !person.lastName) {
// //             setError("נא למלא את כל השדות");
// //             return;
// //         }
        
// //         if (person.id.length !== 9) {
// //             setError("תעודת זהות חייבת להכיל 9 ספרות בדיוק");
// //             return;
// //         }
        
// //         if (!/^\d+$/.test(person.id)) {
// //             setError("תעודת זהות חייבת להכיל ספרות בלבד");
// //             return;
// //         }
        
// //         setLoading(true);
// //         setError("");
// //         dispatch(GetByIdThunk(person.id));
// //     }

// //     useEffect(() => {
// //         if (isexist === false) {
// //             setSuccess(true);
// //             setTimeout(() => {
// //                 navigate(`/logon/${person.id}/${person.firstName}/${person.lastName}`);
// //             }, 1500);
// //         }
// //         if (isexist === true) {
// //             setSuccess(true);
// //             setTimeout(() => {
// //                 if (p.role === "request")
// //                     navigate(`/request/${person.id}`);
// //                 else
// //                     navigate(`/offer/${person.id}`);
// //             }, 1500);
// //         }
        
// //         setLoading(false);
// //     }, [isexist, p, person, navigate]);

// //     const handleClickShowId = () => setShowId((show) => !show);

// //     const handleIdChange = (e) => {
// //         const value = e.target.value;
        
// //         // מאפשר רק ספרות
// //         if (value && !/^\d+$/.test(value)) {
// //             return;
// //         }
        
// //         // מגביל לאורך מקסימלי של 9 ספרות
// //         if (value.length <= 9) {
// //             setPerson({ ...person, id: value });
// //         }
        
// //         // מציג שגיאה אם הוזנו תווים אך לא 9 ספרות
// //         if (value && value.length !== 9) {
// //             setError("תעודת זהות חייבת להכיל 9 ספרות בדיוק");
// //         } else {
// //             setError("");
// //         }
// //     };

// //     const handleNextStep = () => {
// //         if (formStep === 0) {
// //             if (!person.id) {
// //                 setError("נא להזין תעודת זהות");
// //                 return;
// //             }
// //             if (person.id.length !== 9) {
// //                 setError("תעודת זהות חייבת להכיל 9 ספרות בדיוק");
// //                 return;
// //             }
// //             // בדיקה שתעודת הזהות מכילה רק ספרות
// //             if (!/^\d+$/.test(person.id)) {
// //                 setError("תעודת זהות חייבת להכיל ספרות בלבד");
// //                 return;
// //             }
// //         }
// //         if (formStep === 1) {
// //             if (!person.firstName) {
// //                 setError("נא להזין שם פרטי");
// //                 return;
// //             }
// //             if (!person.lastName) {
// //                 setError("נא להזין שם משפחה");
// //                 return;
// //             }
// //         }
        
// //         setError("");
// //         setFormStep(prev => prev + 1);
// //     };

// //     const handlePrevStep = () => {
// //         setFormStep(prev => prev - 1);
// //     };

// //     // Background particles for visual effect
// //     const particles = Array.from({ length: 20 }, (_, i) => ({
// //         id: i,
// //         size: Math.random() * 10 + 5,
// //         x: Math.random() * 100,
// //         y: Math.random() * 100,
// //         duration: Math.random() * 10 + 10
// //     }));

// //     return (
// //         <Container 
// //             maxWidth="sm" 
// //             sx={{ 
// //                 display: 'flex', 
// //                 flexDirection: 'column',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 minHeight: '70vh',
// //                 py: 6,
// //                 position: 'relative'
// //             }}
// //             component={motion.div}
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ duration: 0.5 }}
// //         >
// //             {/* Background decoration */}
// //             <Box sx={{ 
// //                 position: 'absolute', 
// //                 top: 0, 
// //                 left: 0, 
// //                 right: 0, 
// //                 bottom: 0, 
// //                 overflow: 'hidden',
// //                 pointerEvents: 'none',
// //                 zIndex: -1
// //             }}>
// //                 {particles.map(particle => (
// //                     <Box
// //                         key={particle.id}
// //                         component={motion.div}
// //                         sx={{
// //                             position: 'absolute',
// //                             width: particle.size,
// //                             height: particle.size,
// //                             borderRadius: '50%',
// //                             background: `linear-gradient(135deg, ${alpha('#3f51b5', 0.2)}, ${alpha('#00bcd4', 0.2)})`,
// //                             top: `${particle.y}%`,
// //                             left: `${particle.x}%`,
// //                         }}
// //                         animate={{
// //                             y: [0, -100],
// //                             opacity: [0.7, 0],
// //                             rotate: [0, 360]
// //                         }}
// //                         transition={{
// //                             duration: particle.duration,
// //                             repeat: Infinity,
// //                             ease: "linear"
// //                         }}
// //                     />
// //                 ))}
// //             </Box>

// //             <motion.div
// //                 variants={containerVariants}
// //                 initial="hidden"
// //                 animate="visible"
// //                 style={{ width: '100%' }}
// //             >
// //                 <motion.div variants={itemVariants}>
// //                     <StyledPaper sx={{ width: '100%', maxWidth: 450, mx: 'auto', mb: 4 }}>
// //                         <Box sx={{ textAlign: 'center' }}>
// //                             <Typography 
// //                                 variant="h3" 
// //                                 component="h1" 
// //                                 gutterBottom
// //                                 sx={{ 
// //                                     fontWeight: 800, 
// //                                     color: '#3f51b5',
// //                                     fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                     mb: 1,
// //                                     background: 'linear-gradient(45deg, #3f51b5, #2196f3, #00bcd4)',
// //                                     backgroundClip: 'text',
// //                                     WebkitBackgroundClip: 'text',
// //                                     WebkitTextFillColor: 'transparent',
// //                                     textShadow: '0 2px 10px rgba(63, 81, 181, 0.1)',
// //                                     fontSize: { xs: '2.5rem', sm: '3rem' }
// //                                 }}
// //                             >
// //                                 חברותא
// //                             </Typography>
                            
// //                             <Typography 
// //                                                              variant="h6" 
// //                                                              sx={{ 
// //                                                                  color: alpha('#000', 0.6),
// //                                                                  fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                                                  mb: 3,
// //                                                                  fontWeight: 400
// //                                                              }}
// //                                                          >
// //                                                              מצא את החברותא המושלמת ללימוד שלך
// //                                                          </Typography>
                                                         
// //                                                          <Box sx={{ position: 'relative', mb: 4 }}>
// //                                                              <Box
// //                                                                  component={motion.div}
// //                                                                  whileHover={{ scale: 1.05, rotate: 5 }}
// //                                                                  whileTap={{ scale: 0.95 }}
// //                                                                  sx={{
// //                                                                      width: 120,
// //                                                                      height: 120,
// //                                                                      borderRadius: '50%',
// //                                                                      background: 'linear-gradient(135deg, #3f51b5 0%, #2196f3 50%, #00bcd4 100%)',
// //                                                                      display: 'flex',
// //                                                                      alignItems: 'center',
// //                                                                      justifyContent: 'center',
// //                                                                      margin: '0 auto',
// //                                                                      boxShadow: '0 10px 30px rgba(63, 81, 181, 0.3)',
// //                                                                      position: 'relative',
// //                                                                      zIndex: 1
// //                                                                  }}
// //                                                              >
// //                                                                  <BookIcon sx={{ fontSize: 60, color: 'white' }} />
// //                                                              </Box>
                                                             
// //                                                              <Box
// //                                                                  sx={{
// //                                                                      position: 'absolute',
// //                                                                      top: -10,
// //                                                                      left: '50%',
// //                                                                      transform: 'translateX(-50%)',
// //                                                                      width: 140,
// //                                                                      height: 140,
// //                                                                      borderRadius: '50%',
// //                                                                      border: '2px dashed rgba(63, 81, 181, 0.3)',
// //                                                                      animation: 'spin 20s linear infinite',
// //                                                                      '@keyframes spin': {
// //                                                                          '0%': { transform: 'translateX(-50%) rotate(0deg)' },
// //                                                                          '100%': { transform: 'translateX(-50%) rotate(360deg)' }
// //                                                                      }
// //                                                                  }}
// //                                                              />
// //                                                          </Box>
// //                                                      </Box>
                                                     
// //                                                      <GlowingButton
// //                                                          variant="contained"
// //                                                          fullWidth
// //                                                          onClick={() => setOpen(true)}
// //                                                          startIcon={<LoginIcon />}
// //                                                          component={motion.button}
// //                                                          whileHover={{ scale: 1.02 }}
// //                                                          whileTap={{ scale: 0.98 }}
// //                                                          sx={{
// //                                                              color: 'white',
// //                                                              fontSize: '1.2rem',
// //                                                              py: 1.5,
// //                                                              mb: 2
// //                                                          }}
// //                                                      >
// //                                                          כניסה למערכת
// //                                                      </GlowingButton>
                                                     
// //                                                  </StyledPaper>
// //                                              </motion.div>
                             
// //                                              <motion.div variants={itemVariants}>
// //                                                  <Box sx={{ textAlign: 'center', mt: 4 }}>
// //                                                      <Chip
// //                                                          icon={<CheckCircleIcon />}
// //                                                          label="מאות חברותות פעילות"
// //                                                          sx={{ 
// //                                                              m: 0.5, 
// //                                                              background: alpha('#3f51b5', 0.1),
// //                                                              color: '#3f51b5',
// //                                                              fontWeight: 500
// //                                                          }}
// //                                                      />
// //                                                      <Chip
// //                                                          icon={<CheckCircleIcon />}
// //                                                          label="התאמה מדויקת"
// //                                                          sx={{ 
// //                                                              m: 0.5, 
// //                                                              background: alpha('#2196f3', 0.1),
// //                                                              color: '#2196f3',
// //                                                              fontWeight: 500
// //                                                          }}
// //                                                      />
// //                                                      <Chip
// //                                                          icon={<CheckCircleIcon />}
// //                                                          label="לימוד יעיל ומהנה"
// //                                                          sx={{ 
// //                                                              m: 0.5, 
// //                                                              background: alpha('#00bcd4', 0.1),
// //                                                              color: '#00bcd4',
// //                                                              fontWeight: 500
// //                                                          }}
// //                                                      />
// //                                                  </Box>
// //                                              </motion.div>
// //                                          </motion.div>
                             
// //                                          <StyledDialog
// //                                              open={open}
// //                                              onClose={() => !loading && !success && setOpen(false)}
// //                                              maxWidth="sm"
// //                                              fullWidth
// //                                              TransitionComponent={Zoom}
// //                                              PaperProps={{
// //                                                  sx: {
// //                                                      px: { xs: 2, sm: 3 },
// //                                                      py: 3,
// //                                                      maxWidth: 500
// //                                                  }
// //                                              }}
// //                                          >
// //                                              {success ? (
// //                                                  <Box sx={{ textAlign: 'center', p: 4 }}>
// //                                                      <motion.div
// //                                                          initial={{ scale: 0 }}
// //                                                          animate={{ scale: 1 }}
// //                                                          transition={{ 
// //                                                              type: "spring", 
// //                                                              stiffness: 200, 
// //                                                              damping: 20 
// //                                                          }}
// //                                                      >
// //                                                          <CheckCircleIcon 
// //                                                              sx={{ 
// //                                                                  fontSize: 80, 
// //                                                                  color: 'success.main',
// //                                                                  mb: 2
// //                                                              }} 
// //                                                          />
// //                                                      </motion.div>
                                                     
// //                                                      <Typography 
// //                                                          variant="h5" 
// //                                                          sx={{ 
// //                                                              fontWeight: 700,
// //                                                              mb: 2,
// //                                                              fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
// //                                                          }}
// //                                                      >
// //                                                          {isexist ? "התחברת בהצלחה!" : "מועבר להרשמה..."}
// //                                                      </Typography>
                                                     
// //                                                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
// //                                                          {isexist 
// //                                                              ? "מועבר לאזור האישי שלך..." 
// //                                                              : "נראה שזו הפעם הראשונה שלך במערכת. מועבר לתהליך הרשמה קצר..."}
// //                                                      </Typography>
                                                     
// //                                                      <CircularProgress size={30} />
// //                                                  </Box>
// //                                              ) : (
// //                                                  <>
// //                                                      <Box sx={{ textAlign: 'center', mb: 3 }}>
// //                                                          <FormHeaderIcon>
// //                                                              {formStep === 0 && <BadgeIcon fontSize="inherit" />}
// //                                                              {formStep === 1 && <FaceIcon fontSize="inherit" />}
// //                                                              {formStep === 2 && <AccountCircleIcon fontSize="inherit" />}
// //                                                          </FormHeaderIcon>
                                                         
// //                                                          <DialogTitle sx={{ 
// //                                                              p: 0,
// //                                                              fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                                              fontWeight: 700,
// //                                                              fontSize: '1.75rem',
// //                                                              color: '#3f51b5',
// //                                                              mb: 1
// //                                                          }}>
// //                                                              {formStep === 0 && "כניסה למערכת"}
// //                                                              {formStep === 1 && "פרטים אישיים"}
// //                                                              {formStep === 2 && "אימות פרטים"}
// //                                                          </DialogTitle>
                                                         
// //                                                          <DialogContentText sx={{ 
// //                                                              px: { xs: 1, sm: 4 },
// //                                                              color: 'text.secondary',
// //                                                              fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                                              fontSize: '1rem'
// //                                                          }}>
// //                                                              {formStep === 0 && "אנא הזן את תעודת הזהות שלך"}
// //                                                              {formStep === 1 && "אנא הזן את שמך הפרטי ושם המשפחה"}
// //                                                              {formStep === 2 && "אנא ודא שהפרטים שהזנת נכונים"}
// //                                                          </DialogContentText>
// //                                                      </Box>
                             
// //                                                      <DialogContent sx={{ px: { xs: 1, sm: 3 }, py: 0 }}>
// //                                                          {error && (
// //                                                              <Fade in={!!error}>
// //                                                                  <Box 
// //                                                                      sx={{ 
// //                                                                          mb: 3, 
// //                                                                          p: 2, 
// //                                                                          borderRadius: 2,
// //                                                                          backgroundColor: alpha('#f44336', 0.1),
// //                                                                          display: 'flex',
// //                                                                          alignItems: 'center'
// //                                                                      }}
// //                                                                  >
// //                                                                      <CancelIcon sx={{ color: 'error.main', mr: 1 }} />
// //                                                                      <Typography 
// //                                                                          color="error" 
// //                                                                          variant="body2" 
// //                                                                          sx={{ fontWeight: 500 }}
// //                                                                      >
// //                                                                          {error}
// //                                                                      </Typography>
// //                                                                  </Box>
// //                                                              </Fade>
// //                                                          )}
                                                         
// //                                                          <Box sx={{ position: 'relative', minHeight: 200 }}>
// //                                                              <Slide direction="left" in={formStep === 0} mountOnEnter unmountOnExit>
// //                                                                  <Box>
// //                                                                      <StyledInputField variant="standard" fullWidth required>
// //                                                                          <InputLabel htmlFor="standard-adornment-id">תעודת זהות</InputLabel>
// //                                                                          <Input
// //                                                                              onChange={x => setPerson({ ...person, id: x.target.value })}
// //                                                                              id="standard-adornment-id"
// //                                                                              type={showId ? 'text' : 'password'}
// //                                                                              value={person.id}
// //                                                                              startAdornment={
// //                                                                                  <InputAdornment position="start">
// //                                                                                      <BadgeIcon color="primary" />
// //                                                                                  </InputAdornment>
// //                                                                              }
// //                                                                              endAdornment={
// //                                                                                  <InputAdornment position="end">
// //                                                                                      <IconButton
// //                                                                                          aria-label={showId ? 'הסתר תעודת זהות' : 'הצג תעודת זהות'}
// //                                                                                          onClick={handleClickShowId}
// //                                                                                          edge="end"
// //                                                                                      >
// //                                                                                          {showId ? <VisibilityOff /> : <Visibility />}
// //                                                                                      </IconButton>
// //                                                                                  </InputAdornment>
// //                                                                              }
// //                                                                          />
// //                                                                      </StyledInputField>
                                                                     
// //                                                                      <Typography 
// //                                                                          variant="caption" 
// //                                                                          sx={{ 
// //                                                                              display: 'block', 
// //                                                                              color: 'text.secondary',
// //                                                                              textAlign: 'center',
// //                                                                              mt: 2
// //                                                                          }}
// //                                                                      >
// //                                                                          * תעודת הזהות משמשת לזיהוי בלבד ומאובטחת במערכת
// //                                                                      </Typography>
// //                                                                  </Box>
// //                                                              </Slide>
                                                             
// //                                                              <Slide direction="left" in={formStep === 1} mountOnEnter unmountOnExit>
// //                                                                  <Box>
// //                                                                      <StyledTextField
// //                                                                          required
// //                                                                          id="firstName"
// //                                                                          label="שם פרטי"
// //                                                                          variant="standard"
// //                                                                          fullWidth
// //                                                                          value={person.firstName}
// //                                                                          onChange={x => setPerson({ ...person, firstName: x.target.value })}
// //                                                                          InputProps={{
// //                                                                              startAdornment: (
// //                                                                                  <InputAdornment position="start">
// //                                                                                      <PersonIcon color="primary" />
// //                                                                                  </InputAdornment>
// //                                                                              ),
// //                                                                          }}
// //                                                                      />
                                                                     
// //                                                                      <StyledTextField
// //                                                                          required
// //                                                                          id="lastName"
// //                                                                          label="שם משפחה"
// //                                                                          variant="standard"
// //                                                                          fullWidth
// //                                                                          value={person.lastName}
// //                                                                          onChange={x => setPerson({ ...person, lastName: x.target.value })}
// //                                                                          InputProps={{
// //                                                                              startAdornment: (
// //                                                                                  <InputAdornment position="start">
// //                                                                                      <PersonIcon color="primary" />
// //                                                                                  </InputAdornment>
// //                                                                              ),
// //                                                                          }}
// //                                                                      />
// //                                                                  </Box>
// //                                                              </Slide>
                                                             
// //                                                              <Slide direction="left" in={formStep === 2} mountOnEnter unmountOnExit>
// //                                                                  <Box>
// //                                                                      <Paper 
// //                                                                          elevation={0} 
// //                                                                          sx={{ 
// //                                                                              p: 3, 
// //                                                                              borderRadius: 2, 
// //                                                                              backgroundColor: alpha('#3f51b5', 0.05),
// //                                                                              mb: 3
// //                                                                          }}
// //                                                                      >
// //                                                                          <Grid container spacing={2}>
// //                                                                          <Input
// //     onChange={handleIdChange}
// //     id="standard-adornment-id"
// //     type={showId ? 'text' : 'password'}
// //     value={person.id}
// //     inputProps={{ 
// //         maxLength: 9,
// //         pattern: "[0-9]*",
// //         inputMode: "numeric"
// //     }}
// //     startAdornment={
// //         <InputAdornment position="start">
// //             <BadgeIcon color="primary" />
// //         </InputAdornment>
// //     }
// //     endAdornment={
// //         <InputAdornment position="end">
// //             <IconButton
// //                 aria-label={showId ? 'הסתר תעודת זהות' : 'הצג תעודת זהות'}
// //                 onClick={handleClickShowId}
// //                 edge="end"
// //             >
// //                 {showId ? <VisibilityOff /> : <Visibility />}
// //             </IconButton>
// //         </InputAdornment>
// //     }
// // />
                                                                             
// //                                                                              <Grid item xs={4}>
// //                                                                                  <Typography variant="body2" color="text.secondary">
// //                                                                                      שם פרטי:
// //                                                                                  </Typography>
// //                                                                              </Grid>
// //                                                                              <Grid item xs={8}>
// //                                                                                  <Typography variant="body1" fontWeight={500}>
// //                                                                                      {person.firstName}
// //                                                                                  </Typography>
// //                                                                              </Grid>
                                                                             
// //                                                                              <Grid item xs={4}>
// //                                                                                  <Typography variant="body2" color="text.secondary">
// //                                                                                      שם משפחה:
// //                                                                                  </Typography>
// //                                                                              </Grid>
// //                                                                              <Grid item xs={8}>
// //                                                                                  <Typography variant="body1" fontWeight={500}>
// //                                                                                      {person.lastName}
// //                                                                                  </Typography>
// //                                                                              </Grid>
// //                                                                          </Grid>
// //                                                                      </Paper>
// //                                                                      <Typography variant="body2" color="text.secondary" sx={{
// //                                             textAlign: 'center',
// //                                             mb: 2
// //                                         }}>
// //                                             אנא ודא שהפרטים שהזנת נכונים לפני המשך התהליך
// //                                         </Typography>
// //                                     </Box>
// //                                 </Slide>
// //                             </Box>
// //                         </DialogContent>
                        
// //                         <DialogActions sx={{ 
// //                             px: { xs: 2, sm: 3 }, 
// //                             py: 2,
// //                             display: 'flex', 
// //                             justifyContent: formStep > 0 ? 'space-between' : 'flex-end',
// //                             borderTop: `1px solid ${alpha('#000', 0.1)}`,
// //                             mt: 2
// //                         }}>
// //                             {formStep > 0 && (
// //                                 <Button
// //                                     variant="outlined"
// //                                     onClick={handlePrevStep}
// //                                     disabled={loading}
// //                                     startIcon={<ArrowForwardIcon />}
// //                                     sx={{ 
// //                                         borderRadius: 50,
// //                                         px: 3,
// //                                         borderColor: alpha('#3f51b5', 0.5),
// //                                         color: '#3f51b5',
// //                                         '&:hover': {
// //                                             borderColor: '#3f51b5',
// //                                             backgroundColor: alpha('#3f51b5', 0.05)
// //                                         }
// //                                     }}
// //                                 >
// //                                     חזרה
// //                                 </Button>
// //                             )}
                            
// //                             {formStep < 2 ? (
// //                                 <Button
// //                                     variant="contained"
// //                                     onClick={handleNextStep}
// //                                     disabled={loading}
// //                                     endIcon={<ArrowForwardIcon sx={{ transform: 'rotate(180deg)' }} />}
// //                                     sx={{
// //                                         borderRadius: 50,
// //                                         px: 3,
// //                                         background: 'linear-gradient(45deg, #3f51b5 30%, #2196f3 90%)',
// //                                         color: 'white',
// //                                         boxShadow: '0 4px 10px rgba(63, 81, 181, 0.3)',
// //                                         '&:hover': {
// //                                             boxShadow: '0 6px 15px rgba(63, 81, 181, 0.4)',
// //                                             background: 'linear-gradient(45deg, #303f9f 30%, #1976d2 90%)'
// //                                         }
// //                                     }}
// //                                 >
// //                                     המשך
// //                                 </Button>
// //                             ) : (
// //                                 <Button
// //                                     variant="contained"
// //                                     onClick={isExist}
// //                                     disabled={loading}
// //                                     startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <LoginIcon />}
// //                                     sx={{
// //                                         borderRadius: 50,
// //                                         px: 3,
// //                                         background: 'linear-gradient(45deg, #3f51b5 30%, #2196f3 90%)',
// //                                         color: 'white',
// //                                         boxShadow: '0 4px 10px rgba(63, 81, 181, 0.3)',
// //                                         '&:hover': {
// //                                             boxShadow: '0 6px 15px rgba(63, 81, 181, 0.4)',
// //                                             background: 'linear-gradient(45deg, #303f9f 30%, #1976d2 90%)'
// //                                         }
// //                                     }}
// //                                 >
// //                                     {loading ? 'מתחבר...' : 'כניסה למערכת'}
// //                                 </Button>
// //                             )}
// //                         </DialogActions>
// //                     </>
// //                 )}
// //             </StyledDialog>
            
// //             {/* Backdrop for loading state */}
// //             <Backdrop
// //                 sx={{ 
// //                     color: '#fff', 
// //                     zIndex: (theme) => theme.zIndex.drawer + 1,
// //                     backdropFilter: 'blur(4px)'
// //                 }}
// //                 open={loading && !open}
// //             >
// //                 <Box sx={{ textAlign: 'center' }}>
// //                     <CircularProgress color="inherit" sx={{ mb: 2 }} />
// //                     <Typography variant="h6" sx={{ fontFamily: "'Heebo', 'Rubik', Arial, sans-serif" }}>
// //                         מתחבר למערכת...
// //                     </Typography>
// //                 </Box>
// //             </Backdrop>
// //         </Container>
// //     );
// // };

// // export default Login;


// // בס"ד

// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { GetByIdThunk } from '../../redux/Person/getByIdThunk';
// import './login.css';

// // Material UI
// import Box from '@mui/material/Box';
// import IconButton from '@mui/material/IconButton';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl from '@mui/material/FormControl';
// import TextField from '@mui/material/TextField';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { 
//     Paper, Typography, Container, Grid, Divider, 
//     alpha, CircularProgress, Slide, Zoom, Fade,
//     Backdrop, Chip, Avatar, useTheme, useMediaQuery,
//     Stack, LinearProgress
// } from '@mui/material';
// import { styled, keyframes } from '@mui/material/styles';
// import { motion } from 'framer-motion';

// // Icons
// import PersonIcon from '@mui/icons-material/Person';
// import LockIcon from '@mui/icons-material/Lock';
// import LoginIcon from '@mui/icons-material/Login';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import BadgeIcon from '@mui/icons-material/Badge';
// import FaceIcon from '@mui/icons-material/Face';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelIcon from '@mui/icons-material/Cancel';
// import BookIcon from '@mui/icons-material/Book';
// import HandshakeIcon from '@mui/icons-material/Handshake';
// import CloseIcon from '@mui/icons-material/Close';

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

// // Color palette for Chavruta theme
// const chavrutaColors = {
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

// // Styled components
// const StyledPaper = styled(Paper)(({ theme }) => ({
//     padding: theme.spacing(4),
//     borderRadius: 24,
//     boxShadow: `0 12px 40px ${alpha(chavrutaColors.primary.main, 0.15)}`,
//     background: `linear-gradient(145deg, ${chavrutaColors.background.paper} 0%, ${chavrutaColors.background.elevated} 100%)`,
//     transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
//     overflow: 'hidden',
//     position: 'relative',
//     border: `1px solid ${alpha(chavrutaColors.secondary.light, 0.2)}`,
//     '&:hover': {
//         transform: 'translateY(-5px)',
//         boxShadow: `0 20px 60px ${alpha(chavrutaColors.primary.main, 0.2)}`,
//     },
//     '&::before': {
//         content: '""',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         right: 0,
//         height: '6px',
//         background: `linear-gradient(90deg, ${chavrutaColors.secondary.main}, ${chavrutaColors.accent.main}, ${chavrutaColors.primary.main})`,
//         backgroundSize: '200% 100%',
//         animation: `${gradientShift} 3s ease infinite`,
//     }
// }));

// const GlowingButton = styled(Button)(({ theme }) => ({
//     borderRadius: '50px',
//     padding: '12px 32px',
//     fontSize: '1.1rem',
//     fontWeight: 'bold',
//     textTransform: 'none',
//     fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
//     boxShadow: `0 6px 15px ${alpha(chavrutaColors.secondary.main, 0.3)}`,
//     position: 'relative',
//     overflow: 'hidden',
//     transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
//     background: `linear-gradient(135deg, ${chavrutaColors.secondary.main} 0%, ${chavrutaColors.accent.main} 100%)`,
//     backgroundSize: '200% auto',
//     color: chavrutaColors.secondary.contrastText,
//     '&:hover': {
//         backgroundPosition: 'right center',
//         transform: 'translateY(-3px) scale(1.02)',
//         boxShadow: `0 10px 25px ${alpha(chavrutaColors.secondary.main, 0.4)}`,
//         background: `linear-gradient(135deg, ${chavrutaColors.accent.main} 0%, ${chavrutaColors.secondary.main} 100%)`,
//     },
//     '&::after': {
//         content: '""',
//         position: 'absolute',
//         top: '-50%',
//         left: '-50%',
//         width: '200%',
//         height: '200%',
//         background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
//         opacity: 0,
//         transition: 'opacity 0.5s ease',
//     },
//     '&:active::after': {
//         opacity: 1,
//     }
// }));

// const FormHeaderIcon = styled(Box)(({ theme }) => ({
//     width: 80,
//     height: 80,
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: '0 auto 24px auto',
//     background: `linear-gradient(135deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.primary.dark} 100%)`,
//     color: 'white',
//     fontSize: 36,
//     boxShadow: `0 8px 30px ${alpha(chavrutaColors.primary.main, 0.4)}`,
//     position: 'relative',
//     '&::after': {
//         content: '""',
//         position: 'absolute',
//         top: -5,
//         left: -5,
//         right: -5,
//         bottom: -5,
//         borderRadius: '50%',
//         border: `2px dashed ${alpha(chavrutaColors.secondary.main, 0.3)}`,
//         animation: `spin 20s linear infinite`,
//     },
//     '@keyframes spin': {
//         '0%': { transform: 'rotate(0deg)' },
//         '100%': { transform: 'rotate(360deg)' }
//     }
// }));

// const StyledInputField = styled(FormControl)(({ theme }) => ({
//     marginBottom: theme.spacing(3),
//     position: 'relative',
//     '& .MuiInputLabel-root': {
//         fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
//         fontSize: '1rem',
//         color: alpha(chavrutaColors.text.primary, 0.7),
//     },
//     '& .MuiInput-root': {
//         transition: 'all 0.3s ease',
//         '&::before': {
//             borderBottomColor: alpha(chavrutaColors.primary.main, 0.3),
//         },
//         '&::after': {
//             borderBottomColor: chavrutaColors.primary.main,
//         },
//         '&:hover:not(.Mui-disabled)::before': {
//             borderBottomColor: alpha(chavrutaColors.primary.main, 0.5),
//         },
//     },
//     '& .MuiInputAdornment-root': {
//         color: alpha(chavrutaColors.text.primary, 0.5),
//     }
// }));

// const StyledTextField = styled(TextField)(({ theme }) => ({
//     marginBottom: theme.spacing(3),
//     '& .MuiInputLabel-root': {
//         fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
//         fontSize: '1rem',
//         color: alpha(chavrutaColors.text.primary, 0.7),
//     },
//     '& .MuiInput-root': {
//         transition: 'all 0.3s ease',
//         '&::before': {
//             borderBottomColor: alpha(chavrutaColors.primary.main, 0.3),
//         },
//         '&::after': {
//             borderBottomColor: chavrutaColors.primary.main,
//         },
//         '&:hover:not(.Mui-disabled)::before': {
//             borderBottomColor: alpha(chavrutaColors.primary.main, 0.5),
//         },
//     }
// }));

// const CardHeader = styled(Box)(({ theme }) => ({
//     padding: theme.spacing(3),
//     background: `linear-gradient(135deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.primary.dark} 100%)`,
//     color: chavrutaColors.primary.contrastText,
//     position: 'relative',
//     overflow: 'hidden',
//     transition: 'all 0.3s ease',
//     '&::after': {
//         content: '""',
//         position: 'absolute',
//         top: '-50%',
//         right: '-50%',
//         width: '200%',
//         height: '200%',
//         background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
//         animation: `${float} 6s ease-in-out infinite`,
//     }
// }));

// // Animation variants for framer-motion
// const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//         opacity: 1,
//         transition: { 
//             staggerChildren: 0.1,
//             delayChildren: 0.2
//         }
//     }
// };

// const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { 
//         y: 0, 
//         opacity: 1,
//         transition: { 
//             type: "spring", 
//             stiffness: 300, 
//             damping: 24 
//         }
//     }
// };

// export const Login = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [person, setPerson] = useState({ id: "", firstName: "", lastName: "" });
//     const isexist = useSelector(state => state.people.isExist);
//     const p = useSelector(state => state.people.person);
//     const [open, setOpen] = useState(false);
//     const [showId, setShowId] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");
//     const [success, setSuccess] = useState(false);
//     const [formStep, setFormStep] = useState(0);
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//     const isExist = async () => {
//         if (!person.id || !person.firstName || !person.lastName) {
//             setError("נא למלא את כל השדות");
//             return;
//         }
        
//         if (person.id.length !== 9) {
//             setError("תעודת זהות חייבת להכיל 9 ספרות בדיוק");
//             return;
//         }
        
//         if (!/^\d+$/.test(person.id)) {
//             setError("תעודת זהות חייבת להכיל ספרות בלבד");
//             return;
//         }
        
//         setLoading(true);
//         setError("");
//         dispatch(GetByIdThunk(person.id));
//     }

//     useEffect(() => {
//         if (isexist === false) {
//             setSuccess(true);
//             setTimeout(() => {
//                 navigate(`/logon/${person.id}/${person.firstName}/${person.lastName}`);
//             }, 1500);
//         }
//         if (isexist === true) {
//             setSuccess(true);
//             setTimeout(() => {
//                 if (p.role === "request")
//                     navigate(`/request/${person.id}`);
//                 else
//                     navigate(`/offer/${person.id}`);
//             }, 1500);
//         }
        
//         setLoading(false);
//     }, [isexist, p, person, navigate]);

//     // Escape key handler
//     useEffect(() => {
//         const handleEscape = (event) => {
//             if (event.key === 'Escape' && open) {
//                 setOpen(false);
//             }
//         };

//         if (open) {
//             document.addEventListener('keydown', handleEscape);
//         }

//         return () => {
//             document.removeEventListener('keydown', handleEscape);
//         };
//     }, [open]);

//     const handleClickShowId = () => setShowId((show) => !show);

//     const handleIdChange = (e) => {
//         const value = e.target.value;
        
//         if (value && !/^\d+$/.test(value)) {
//             return;
//         }
        
//         if (value.length <= 9) {
//             setPerson({ ...person, id: value });
//         }
        
//         if (value && value.length !== 9 && error.includes("תעודת זהות")) {
//             setError("");
//         }
//     };

//     const handleMouseDownId = (event) => {
//         event.preventDefault();
//     };

//     const nextStep = () => {
//         if (formStep === 0 && person.id.length === 9) {
//             setFormStep(1);
//         }
//     };

//     const prevStep = () => {
//         if (formStep === 1) {
//             setFormStep(0);
//         }
//     };

//     return (
//         <Box sx={{ 
//             minHeight: '100vh',
//             background: `linear-gradient(135deg, ${chavrutaColors.background.default} 0%, ${alpha(chavrutaColors.primary.light, 0.1)} 100%)`,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             padding: 2,
//             position: 'relative',
//             overflow: 'hidden'
//         }}>
//             {/* Background decorative elements */}
//             <Box sx={{
//                 position: 'absolute',
//                 top: '10%',
//                 right: '10%',
//                 width: 200,
//                 height: 200,
//                 borderRadius: '50%',
//                 background: `radial-gradient(circle, ${alpha(chavrutaColors.secondary.main, 0.1)} 0%, transparent 70%)`,
//                 animation: `${float} 8s ease-in-out infinite`,
//                 zIndex: 0
//             }} />
            
//             <Box sx={{
//                 position: 'absolute',
//                 bottom: '15%',
//                 left: '5%',
//                 width: 150,
//                 height: 150,
//                 borderRadius: '50%',
//                 background: `radial-gradient(circle, ${alpha(chavrutaColors.accent.main, 0.1)} 0%, transparent 70%)`,
//                 animation: `${float} 6s ease-in-out infinite reverse`,
//                 zIndex: 0
//             }} />

//             {/* Loading overlay */}
//             {loading && (
//                 <Backdrop open={loading} sx={{ zIndex: 9999, color: '#fff' }}>
//                     <Box sx={{ textAlign: 'center' }}>
//                         <CircularProgress 
//                             size={60}
//                             sx={{ 
//                                 color: chavrutaColors.secondary.main,
//                                 mb: 2
//                             }} 
//                         />
//                         <Typography variant="h6" sx={{ color: 'white' }}>
//                             מאמת פרטים...
//                         </Typography>
//                     </Box>
//                 </Backdrop>
//             )}

//             {/* Success overlay */}
//             {success && (
//                 <Backdrop open={success} sx={{ zIndex: 9999 }}>
//                     <Zoom in={success}>
//                         <Box sx={{ 
//                             textAlign: 'center',
//                             background: `linear-gradient(135deg, ${chavrutaColors.success} 0%, #2ECC71 100%)`,
//                             borderRadius: '24px',
//                             p: 4,
//                             color: 'white',
//                             boxShadow: `0 20px 60px ${alpha(chavrutaColors.success, 0.4)}`
//                         }}>
//                             <CheckCircleIcon sx={{ fontSize: 80, mb: 2 }} />
//                             <Typography variant="h4" fontWeight="bold" gutterBottom>
//                                 ברוך הבא!
//                             </Typography>
//                             <Typography variant="h6">
//                                 מעביר אותך לדף הראשי...
//                             </Typography>
//                         </Box>
//                     </Zoom>
//                 </Backdrop>
//             )}

//             <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
//                 <motion.div
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                 >
//                     <StyledPaper elevation={0}>
//                         <motion.div variants={itemVariants}>
//                             <FormHeaderIcon>
//                                 <HandshakeIcon sx={{ fontSize: 40 }} />
//                             </FormHeaderIcon>
//                         </motion.div>

//                         <motion.div variants={itemVariants}>
//                             <Typography 
//                                 variant="h3" 
//                                 align="center" 
//                                 gutterBottom
//                                 sx={{
//                                     fontWeight: 'bold',
//                                     background: `linear-gradient(45deg, ${chavrutaColors.primary.main}, ${chavrutaColors.secondary.main})`,
//                                     backgroundClip: 'text',
//                                     WebkitBackgroundClip: 'text',
//                                     WebkitTextFillColor: 'transparent',
//                                     mb: 1
//                                 }}
//                             >
//                                 חברותא
//                             </Typography>
//                         </motion.div>

//                         <motion.div variants={itemVariants}>
//                             <Typography 
//                                 variant="h6" 
//                                 align="center" 
//                                 color="text.secondary"
//                                 sx={{ mb: 4, fontWeight: 'medium' }}
//                             >
//                                 מערכת לחיבור בין לומדים
//                             </Typography>
//                         </motion.div>

//                         <Divider sx={{ 
//                             mb: 4, 
//                             bgcolor: alpha(chavrutaColors.secondary.main, 0.2),
//                             height: 2,
//                             borderRadius: 1
//                         }} />

//                         {/* Step indicator */}
//                         <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
//                             <Stack direction="row" spacing={2} alignItems="center">
//                                 <Chip 
//                                     icon={<BadgeIcon />}
//                                     label="תעודת זהות"
//                                     color={formStep >= 0 ? "primary" : "default"}
//                                     variant={formStep === 0 ? "filled" : "outlined"}
//                                     sx={{
//                                         bgcolor: formStep >= 0 ? chavrutaColors.primary.main : 'transparent',
//                                         color: formStep >= 0 ? 'white' : chavrutaColors.text.secondary,
//                                         fontWeight: 'bold'
//                                     }}
//                                 />
//                                 <ArrowForwardIcon 
//                                     sx={{ 
//                                         color: formStep >= 1 ? chavrutaColors.primary.main : chavrutaColors.text.disabled,
//                                         transform: 'rotate(180deg)'
//                                     }} 
//                                 />
//                                 <Chip 
//                                     icon={<PersonIcon />}
//                                     label="פרטים אישיים"
//                                     color={formStep >= 1 ? "primary" : "default"}
//                                     variant={formStep === 1 ? "filled" : "outlined"}
//                                     sx={{
//                                         bgcolor: formStep >= 1 ? chavrutaColors.primary.main : 'transparent',
//                                         color: formStep >= 1 ? 'white' : chavrutaColors.text.secondary,
//                                         fontWeight: 'bold'
//                                     }}
//                                 />
//                             </Stack>
//                         </Box>

//                         <Box component="form" sx={{ mt: 3 }}>
//                             {formStep === 0 && (
//                                 <motion.div
//                                     key="step0"
//                                     initial={{ opacity: 0, x: -50 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     exit={{ opacity: 0, x: 50 }}
//                                     transition={{ duration: 0.3 }}
//                                 >
//                                     <StyledInputField fullWidth variant="standard">
//                                         <InputLabel htmlFor="standard-adornment-id">
//                                             תעודת זהות
//                                         </InputLabel>
//                                         <Input
//                                             id="standard-adornment-id"
//                                             type={showId ? 'text' : 'password'}
//                                             value={person.id}
//                                             onChange={handleIdChange}
//                                             inputProps={{ 
//                                                 maxLength: 9,
//                                                 style: { 
//                                                     fontSize: '1.2rem',
//                                                     fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
//                                                     letterSpacing: showId ? '2px' : '4px'
//                                                 }
//                                             }}
//                                             startAdornment={
//                                                 <InputAdornment position="start">
//                                                     <BadgeIcon sx={{ color: chavrutaColors.primary.main }} />
//                                                 </InputAdornment>
//                                             }
//                                             endAdornment={
//                                                 <InputAdornment position="end">
//                                                     <IconButton
//                                                         aria-label="toggle id visibility"
//                                                         onClick={handleClickShowId}
//                                                         onMouseDown={handleMouseDownId}
//                                                         sx={{ 
//                                                             color: chavrutaColors.secondary.main,
//                                                             '&:hover': {
//                                                                 bgcolor: alpha(chavrutaColors.secondary.main, 0.1)
//                                                             }
//                                                         }}
//                                                     >
//                                                         {showId ? <VisibilityOff /> : <Visibility />}
//                                                     </IconButton>
//                                                 </InputAdornment>
//                                             }
//                                         />
//                                     </StyledInputField>

//                                     <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
//                                         <GlowingButton
//                                             onClick={nextStep}
//                                             disabled={person.id.length !== 9}
//                                             startIcon={<ArrowForwardIcon sx={{ transform: 'rotate(180deg)' }} />}
//                                             sx={{ minWidth: 200 }}
//                                         >
//                                             המשך
//                                         </GlowingButton>
//                                     </Box>
//                                 </motion.div>
//                             )}

//                             {formStep === 1 && (
//                                 <motion.div
//                                     key="step1"
//                                     initial={{ opacity: 0, x: 50 }}
//                                     animate={{ opacity: 1, x: 0 }}
//                                     exit={{ opacity: 0, x: -50 }}
//                                     transition={{ duration: 0.3 }}
//                                 >
//                                     <Grid container spacing={3}>
//                                         <Grid item xs={12} sm={6}>
//                                             <StyledTextField
//                                                 fullWidth
//                                                 variant="standard"
//                                                 label="שם פרטי"
//                                                 value={person.firstName}
//                                                 onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
//                                                 InputProps={{
//                                                     startAdornment: (
//                                                         <InputAdornment position="start">
//                                                             <FaceIcon sx={{ color: chavrutaColors.secondary.main }} />
//                                                         </InputAdornment>
//                                                     ),
//                                                     style: { 
//                                                         fontSize: '1.1rem',
//                                                         fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
//                                                     }
//                                                 }}
//                                             />
//                                         </Grid>
//                                         <Grid item xs={12} sm={6}>
//                                             <StyledTextField
//                                                 fullWidth
//                                                 variant="standard"
//                                                 label="שם משפחה"
//                                                 value={person.lastName}
//                                                 onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
//                                                 InputProps={{
//                                                     startAdornment: (
//                                                         <InputAdornment position="start">
//                                                             <AccountCircleIcon sx={{ color: chavrutaColors.accent.main }} />
//                                                         </InputAdornment>
//                                                     ),
//                                                     style: { 
//                                                         fontSize: '1.1rem',
//                                                         fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
//                                                     }
//                                                 }}
//                                             />
//                                         </Grid>
//                                     </Grid>

//                                     {error && (
//                                         <Fade in={!!error}>
//                                             <Box sx={{ 
//                                                 mt: 2, 
//                                                 p: 2, 
//                                                 borderRadius: 2,
//                                                 bgcolor: alpha(chavrutaColors.error, 0.1),
//                                                 border: `1px solid ${alpha(chavrutaColors.error, 0.3)}`,
//                                                 display: 'flex',
//                                                 alignItems: 'center',
//                                                 gap: 1
//                                             }}>
//                                                 <CancelIcon sx={{ color: chavrutaColors.error }} />
//                                                 <Typography color={chavrutaColors.error} fontWeight="medium">
//                                                     {error}
//                                                 </Typography>
//                                             </Box>
//                                         </Fade>
//                                     )}

//                                     <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
//                                         <Button
//                                             onClick={prevStep}
//                                             variant="outlined"
//                                             startIcon={<ArrowForwardIcon />}
//                                             sx={{
//                                                 borderRadius: '25px',
//                                                 borderColor: chavrutaColors.text.secondary,
//                                                 color: chavrutaColors.text.secondary,
//                                                 '&:hover': {
//                                                     borderColor: chavrutaColors.primary.main,
//                                                     color: chavrutaColors.primary.main,
//                                                     bgcolor: alpha(chavrutaColors.primary.main, 0.05)
//                                                 }
//                                             }}
//                                         >
//                                             חזור
//                                         </Button>
                                        
//                                         <GlowingButton
//                                             onClick={isExist}
//                                             disabled={!person.firstName || !person.lastName || loading}
//                                             startIcon={<LoginIcon />}
//                                             sx={{ flexGrow: 1 }}
//                                         >
//                                             {loading ? 'מתחבר...' : 'התחבר'}
//                                         </GlowingButton>
//                                     </Stack>
//                                 </motion.div>
//                             )}
//                         </Box>

//                         <Divider sx={{ 
//                             my: 4, 
//                             bgcolor: alpha(chavrutaColors.secondary.main, 0.2),
//                             height: 1
//                         }} />

//                         <motion.div variants={itemVariants}>
//                             <Typography 
//                                 variant="body2" 
//                                 align="center" 
//                                 color="text.secondary"
//                                 sx={{ 
//                                     fontStyle: 'italic',
//                                     lineHeight: 1.6
//                                 }}
//                             >
//                                 "חברותא או מיתה" - תלמוד בבלי, תענית כג ע"א
//                             </Typography>
//                         </motion.div>
//                     </StyledPaper>
//                 </motion.div>
//             </Container>

//             {/* Info Dialog */}
//             <Dialog
//                 open={open}
//                 onClose={() => setOpen(false)}
//                 maxWidth="sm"
//                 fullWidth
//                 PaperProps={{
//                     sx: {
//                         borderRadius: '24px',
//                         background: `linear-gradient(145deg, ${chavrutaColors.background.paper} 0%, ${chavrutaColors.background.elevated} 100%)`,
//                         boxShadow: `0 25px 50px ${alpha(chavrutaColors.primary.main, 0.3)}`,
//                         border: `1px solid ${alpha(chavrutaColors.secondary.main, 0.2)}`,
//                     }
//                 }}
//                 BackdropProps={{
//                     sx: {
//                         backdropFilter: 'blur(8px)'
//                     }
//                 }}
//             >
//                 <CardHeader>
//                     <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                             <BookIcon sx={{ fontSize: 32 }} />
//                             <Typography variant="h5" fontWeight="bold">
//                                 אודות חברותא
//                             </Typography>
//                         </Box>
//                         <IconButton 
//                             onClick={() => setOpen(false)}
//                             sx={{ 
//                                 color: 'white',
//                                 bgcolor: alpha('#fff', 0.1),
//                                 '&:hover': { bgcolor: alpha('#fff', 0.2) }
//                             }}
//                         >
//                             <CloseIcon />
//                         </IconButton>
//                     </Box>
//                 </CardHeader>

//                 <DialogContent sx={{ p: 4 }}>
//                     <Typography variant="h6" gutterBottom color={chavrutaColors.primary.main} fontWeight="bold">
//                         מה זה חברותא?
//                     </Typography>
//                     <Typography paragraph sx={{ lineHeight: 1.8, mb: 3 }}>
//                         חברותא היא מערכת ייחודית לחיבור בין לומדים. המערכת מאפשרת ליצור הצעות לימוד 
//                         ולמצוא שותפים ללמידה בנושאים שונים.
//                     </Typography>

//                     <Typography variant="h6" gutterBottom color={chavrutaColors.secondary.main} fontWeight="bold">
//                         איך זה עובד?
//                     </Typography>
//                     <Box component="ul" sx={{ pl: 3, mb: 3 }}>
//                         <Typography component="li" paragraph>
//                             <strong>צור הצעה:</strong> הגדר את הספר, הנושא ואופן הלמידה
//                         </Typography>
//                         <Typography component="li" paragraph>
//                             <strong>חפש שותפים:</strong> עיין בבקשות של לומדים אחרים
//                         </Typography>
//                         <Typography component="li" paragraph>
//                             <strong>קבע זמנים:</strong> תאם מועדי למידה במערכת השעות
//                         </Typography>
//                         <Typography component="li" paragraph>
//                             <strong>למד יחד:</strong> התחל את מסע הלמידה המשותף
//                         </Typography>
//                     </Box>

//                     <Box sx={{ 
//                         p: 3, 
//                         borderRadius: 2,
//                         bgcolor: alpha(chavrutaColors.accent.main, 0.1),
//                         border: `1px solid ${alpha(chavrutaColors.accent.main, 0.2)}`
//                     }}>
//                         <Typography variant="body2" fontStyle="italic" textAlign="center">
//                             "הרבה למדתי מרבותי, יותר מחברי, ויותר מכולם מתלמידי"
//                             <br />
//                             - תלמוד בבלי, תענית ז ע"א
//                         </Typography>
//                     </Box>
//                 </DialogContent>

//                 <DialogActions sx={{ p: 3, justifyContent: 'center' }}>
//                     <GlowingButton onClick={() => setOpen(false)}>
//                         הבנתי
//                     </GlowingButton>
//                 </DialogActions>
//             </Dialog>

//             {/* Floating info button */}
//             <Box sx={{
//                 position: 'fixed',
//                 bottom: 24,
//                 right: 24,
//                 zIndex: 1000
//             }}>
//                 <IconButton
//                     onClick={() => setOpen(true)}
//                     sx={{
//                         width: 60,
//                         height: 60,
//                         background: `linear-gradient(135deg, ${chavrutaColors.info} 0%, #3498DB 100%)`,
//                         color: 'white',
//                         boxShadow: `0 8px 25px ${alpha(chavrutaColors.info, 0.4)}`,
//                         '&:hover': {
//                             transform: 'scale(1.1)',
//                             boxShadow: `0 12px 35px ${alpha(chavrutaColors.info, 0.6)}`,
//                         },
//                         transition: 'all 0.3s ease'
//                     }}
//                 >
//                     <BookIcon sx={{ fontSize: 28 }} />
//                 </IconButton>
//             </Box>
//         </Box>
//     );
// };


// בס"ד

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetByIdThunk } from '../../redux/Person/getByIdThunk';
import './login.css';

// Material UI
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { 
    Paper, Typography, Container, Grid, Divider, 
    alpha, CircularProgress, Slide, Zoom, Fade,
    Backdrop, Chip, Avatar, useTheme, useMediaQuery,
    Stack, LinearProgress, Alert, Snackbar
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import { motion } from 'framer-motion';

// Icons
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BadgeIcon from '@mui/icons-material/Badge';
import FaceIcon from '@mui/icons-material/Face';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import BookIcon from '@mui/icons-material/Book';
import HandshakeIcon from '@mui/icons-material/Handshake';
import CloseIcon from '@mui/icons-material/Close';
import WarningIcon from '@mui/icons-material/Warning';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';

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

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
`;

// Color palette for Chavruta theme
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
  success: '#27AE60',
  warning: '#F39C12',
  error: '#E74C3C',
  info: '#3498DB'
};

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: 24,
    boxShadow: `0 12px 40px ${alpha(chavrutaColors.primary.main, 0.15)}`,
    background: `linear-gradient(145deg, ${chavrutaColors.background.paper} 0%, ${chavrutaColors.background.elevated} 100%)`,
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    overflow: 'hidden',
    position: 'relative',
    border: `1px solid ${alpha(chavrutaColors.secondary.light, 0.2)}`,
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: `0 20px 60px ${alpha(chavrutaColors.primary.main, 0.2)}`,
    },
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

const GlowingButton = styled(Button)(({ theme, error }) => ({
    borderRadius: '50px',
    padding: '12px 32px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textTransform: 'none',
    fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
    boxShadow: `0 6px 15px ${alpha(error ? chavrutaColors.error : chavrutaColors.secondary.main, 0.3)}`,
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    background: error 
        ? `linear-gradient(135deg, ${chavrutaColors.error} 0%, #c0392b 100%)`
        : `linear-gradient(135deg, ${chavrutaColors.secondary.main} 0%, ${chavrutaColors.accent.main} 100%)`,
    backgroundSize: '200% auto',
    color: chavrutaColors.secondary.contrastText,
    animation: error ? `${shake} 0.6s ease-in-out` : 'none',
    '&:hover': {
        backgroundPosition: 'right center',
        transform: 'translateY(-3px) scale(1.02)',
        boxShadow: `0 10px 25px ${alpha(error ? chavrutaColors.error : chavrutaColors.secondary.main, 0.4)}`,
        background: error
            ? `linear-gradient(135deg, #c0392b 0%, ${chavrutaColors.error} 100%)`
            : `linear-gradient(135deg, ${chavrutaColors.accent.main} 0%, ${chavrutaColors.secondary.main} 100%)`,
    },
    '&:disabled': {
        background: alpha(chavrutaColors.text.disabled, 0.3),
        color: chavrutaColors.text.disabled,
        boxShadow: 'none',
        transform: 'none'
    }
}));

const FormHeaderIcon = styled(Box)(({ theme }) => ({
    width: 80,
    height: 80,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px auto',
    background: `linear-gradient(135deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.primary.dark} 100%)`,
    color: 'white',
    fontSize: 36,
    boxShadow: `0 8px 30px ${alpha(chavrutaColors.primary.main, 0.4)}`,
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        top: -5,
        left: -5,
        right: -5,
        bottom: -5,
        borderRadius: '50%',
        border: `2px dashed ${alpha(chavrutaColors.secondary.main, 0.3)}`,
        animation: `spin 20s linear infinite`,
    },
    '@keyframes spin': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' }
    }
}));

const StyledInputField = styled(FormControl)(({ theme, error }) => ({
    marginBottom: theme.spacing(3),
    position: 'relative',
    animation: error ? `${shake} 0.6s ease-in-out` : 'none',
    '& .MuiInputLabel-root': {
        fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
        fontSize: '1rem',
        color: error ? chavrutaColors.error : alpha(chavrutaColors.text.primary, 0.7),
    },
    '& .MuiInput-root': {
        transition: 'all 0.3s ease',
        '&::before': {
            borderBottomColor: error ? chavrutaColors.error : alpha(chavrutaColors.primary.main, 0.3),
        },
        '&::after': {
            borderBottomColor: error ? chavrutaColors.error : chavrutaColors.primary.main,
        },
        '&:hover:not(.Mui-disabled)::before': {
            borderBottomColor: error ? chavrutaColors.error : alpha(chavrutaColors.primary.main, 0.5),
        },
    },
    '& .MuiInputAdornment-root': {
        color: error ? chavrutaColors.error : alpha(chavrutaColors.text.primary, 0.5),
    }
}));

const StyledTextField = styled(TextField)(({ theme, error }) => ({
    marginBottom: theme.spacing(3),
    animation: error ? `${shake} 0.6s ease-in-out` : 'none',
    '& .MuiInputLabel-root': {
        fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
        fontSize: '1rem',
        color: error ? chavrutaColors.error : alpha(chavrutaColors.text.primary, 0.7),
    },
    '& .MuiInput-root': {
        transition: 'all 0.3s ease',
        '&::before': {
            borderBottomColor: error ? chavrutaColors.error : alpha(chavrutaColors.primary.main, 0.3),
        },
        '&::after': {
            borderBottomColor: error ? chavrutaColors.error : chavrutaColors.primary.main,
        },
        '&:hover:not(.Mui-disabled)::before': {
            borderBottomColor: error ? chavrutaColors.error : alpha(chavrutaColors.primary.main, 0.5),
        },
    }
}));

const CardHeader = styled(Box)(({ theme }) => ({
    padding: theme.spacing(3),
    background: `linear-gradient(135deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.primary.dark} 100%)`,
    color: chavrutaColors.primary.contrastText,
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

const ErrorAlert = styled(Alert)(({ theme }) => ({
    marginTop: theme.spacing(2),
    borderRadius: '12px',
    animation: `${shake} 0.6s ease-in-out`,
    '& .MuiAlert-icon': {
        fontSize: '1.5rem'
    },
    '& .MuiAlert-message': {
        fontWeight: 'medium',
        fontSize: '1rem'
    }
}));

// Animation variants for framer-motion
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1,
        transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 24 
        }
    }
};

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [person, setPerson] = useState({ id: "", firstName: "", lastName: "" });
    const isexist = useSelector(state => state.people.isExist);
    const p = useSelector(state => state.people.person);
    const [open, setOpen] = useState(false);
    const [showId, setShowId] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        id: "",
        firstName: "",
        lastName: "",
        general: ""
    });
    const [success, setSuccess] = useState(false);
    const [formStep, setFormStep] = useState(0);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Validation functions
    const validateId = (id) => {
      if (!id) {
          return "נא להזין תעודת זהות";
      }
      if (!/^\d+$/.test(id)) {
          return "תעודת זהות חייבת להכיל ספרות בלבד";
      }
      if (id.length !== 9) {
          return "תעודת זהות חייבת להכיל בדיוק 9 ספרות";
      }
      
      // Israeli ID validation algorithm
      const digits = id.split('').map(Number);
      let sum = 0;
      
      for (let i = 0; i < 9; i++) {
          let digit = digits[i];
          if (i % 2 === 1) {
              digit *= 2;
              if (digit > 9) {
                  digit = Math.floor(digit / 10) + (digit % 10);
              }
          }
          sum += digit;
      }
      
      if (sum % 10 !== 0) {
          return "תעודת זהות לא תקינה";
      }
      
      return "";
  };

  const validateName = (name, fieldName) => {
      if (!name) {
          return `נא להזין ${fieldName}`;
      }
      if (name.length < 2) {
          return `${fieldName} חייב להכיל לפחות 2 תווים`;
      }
      if (name.length > 20) {
          return `${fieldName} לא יכול להכיל יותר מ-20 תווים`;
      }
      if (!/^[\u0590-\u05FFa-zA-Z\s]+$/.test(name)) {
          return `${fieldName} יכול להכיל רק אותיות בעברית או באנגלית`;
      }
      return "";
  };

  const validateForm = () => {
      const newErrors = {
          id: "",
          firstName: "",
          lastName: "",
          general: ""
      };

      if (formStep === 0) {
          newErrors.id = validateId(person.id);
      } else if (formStep === 1) {
          newErrors.firstName = validateName(person.firstName, "שם פרטי");
          newErrors.lastName = validateName(person.lastName, "שם משפחה");
      }

      setErrors(newErrors);
      return !Object.values(newErrors).some(error => error !== "");
  };

  const isExist = async () => {
      if (!validateForm()) {
          setSnackbar({
              open: true,
              message: "נא לתקן את השגיאות בטופס",
              severity: "error"
          });
          return;
      }

      setLoading(true);
      setErrors({ id: "", firstName: "", lastName: "", general: "" });

      try {
          await dispatch(GetByIdThunk(person.id));
          
          // Simulate API delay for better UX
          await new Promise(resolve => setTimeout(resolve, 1500));
          
      } catch (error) {
          setErrors({
              ...errors,
              general: "שגיאה בחיבור לשרת. נא לנסות שוב מאוחר יותר"
          });
          setSnackbar({
              open: true,
              message: "שגיאה בחיבור לשרת",
              severity: "error"
          });
      } finally {
          setLoading(false);
      }
  };

  useEffect(() => {
      if (isexist !== null && !loading) {
          if (isexist) {
              // User exists - check if names match
              if (p && (p.firstName !== person.firstName || p.lastName !== person.lastName)) {
                  setErrors({
                      ...errors,
                      general: "השם שהוזן אינו תואם לתעודת הזהות במערכת"
                  });
                  setSnackbar({
                      open: true,
                      message: "פרטים לא תואמים",
                      severity: "error"
                  });
              } else {
                  // Success - login
                  setSuccess(true);
                  setSnackbar({
                      open: true,
                      message: "התחברת בהצלחה!",
                      severity: "success"
                  });
                  
                  setTimeout(() => {
                      navigate(`/offer/${person.id}`);
                  }, 2000);
              }
          } else {
              setSnackbar({
                  open: true,
                  message: "עובר להרשמה משתמש לא נמצא במערכת",
                  severity: "warning"
              });
              setTimeout(() => {
                navigate(`/logon/${person.id}/${person.firstName}/${person.lastName}`);
            }, 2000);
          }
      }
  }, [isexist, p, loading]);

  const handleClickShowId = () => setShowId((show) => !show);

  const handleIdChange = (event) => {
      const value = event.target.value;
      
      // Only allow digits and limit to 9 characters
      if (/^\d*$/.test(value) && value.length <= 9) {
          setPerson({ ...person, id: value });
          
          // Clear ID error when user starts typing
          if (errors.id) {
              setErrors({ ...errors, id: "" });
          }
      }
  };

  const handleNameChange = (field, value) => {
      // Only allow Hebrew and English letters and spaces
      if (/^[\u0590-\u05FFa-zA-Z\s]*$/.test(value) && value.length <= 20) {
          setPerson({ ...person, [field]: value });
          
          // Clear field error when user starts typing
          if (errors[field]) {
              setErrors({ ...errors, [field]: "" });
          }
      }
  };

  const handleMouseDownId = (event) => {
      event.preventDefault();
  };

  const nextStep = () => {
      if (validateForm() && formStep === 0) {
          setFormStep(1);
      }
  };

  const prevStep = () => {
      if (formStep === 1) {
          setFormStep(0);
          setErrors({ id: "", firstName: "", lastName: "", general: "" });
      }
  };

  const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
          if (formStep === 0) {
              nextStep();
          } else {
              isExist();
          }
      }
  };

  return (
      <Box sx={{ 
          minHeight: '100vh',
          background: `linear-gradient(135deg, ${chavrutaColors.background.default} 0%, ${alpha(chavrutaColors.primary.light, 0.1)} 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 2,
          position: 'relative',
          overflow: 'hidden'
      }}>
          {/* Background decorative elements */}
          <Box sx={{
              position: 'absolute',
              top: '10%',
              right: '10%',
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${alpha(chavrutaColors.secondary.main, 0.1)} 0%, transparent 70%)`,
              animation: `${float} 8s ease-in-out infinite`,
              zIndex: 0
          }} />
          
          <Box sx={{
              position: 'absolute',
              bottom: '15%',
              left: '5%',
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${alpha(chavrutaColors.accent.main, 0.1)} 0%, transparent 70%)`,
              animation: `${float} 6s ease-in-out infinite reverse`,
              zIndex: 0
          }} />

          {/* Loading overlay */}
          {loading && (
              <Backdrop open={loading} sx={{ zIndex: 9999, color: '#fff' }}>
                  <Box sx={{ textAlign: 'center' }}>
                      <CircularProgress 
                          size={60}
                          sx={{ 
                              color: chavrutaColors.secondary.main,
                              mb: 2
                          }} 
                      />
                      <Typography variant="h6" sx={{ color: 'white' }}>
                          מאמת פרטים...
                      </Typography>
                  </Box>
              </Backdrop>
          )}

          {/* Success overlay */}
          {success && (
              <Backdrop open={success} sx={{ zIndex: 9999 }}>
                  <Zoom in={success}>
                      <Box sx={{ 
                          textAlign: 'center',
                          background: `linear-gradient(135deg, ${chavrutaColors.success} 0%, #2ECC71 100%)`,
                          borderRadius: '24px',
                          p: 4,
                          color: 'white',
                          boxShadow: `0 20px 60px ${alpha(chavrutaColors.success, 0.4)}`
                      }}>
                          <CheckCircleIcon sx={{ fontSize: 80, mb: 2 }} />
                          <Typography variant="h4" fontWeight="bold" gutterBottom>
                              ברוך הבא!
                          </Typography>
                          <Typography variant="h6">
                              מעביר אותך לדף הראשי...
                          </Typography>
                      </Box>
                  </Zoom>
              </Backdrop>
          )}

          <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
              >
                  <StyledPaper elevation={0}>
                      <motion.div variants={itemVariants}>
                          <FormHeaderIcon>
                              <HandshakeIcon sx={{ fontSize: 40 }} />
                          </FormHeaderIcon>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                          <Typography 
                              variant="h3" 
                              align="center" 
                              gutterBottom
                              sx={{
                                  fontWeight: 'bold',
                                  background: `linear-gradient(45deg, ${chavrutaColors.primary.main}, ${chavrutaColors.secondary.main})`,
                                  backgroundClip: 'text',
                                  WebkitBackgroundClip: 'text',
                                  WebkitTextFillColor: 'transparent',
                                  mb: 1
                              }}
                          >
                              חברותא
                          </Typography>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                          <Typography 
                              variant="h6" 
                              align="center" 
                              color="text.secondary"
                              sx={{ mb: 4, fontWeight: 'medium' }}
                          >
                              מערכת לחיבור בין לומדים
                          </Typography>
                      </motion.div>

                      <Divider sx={{ 
                          mb: 4, 
                          bgcolor: alpha(chavrutaColors.secondary.main, 0.2),
                          height: 2,
                          borderRadius: 1
                      }} />

                      {/* Step indicator */}
                      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                          <Stack direction="row" spacing={2} alignItems="center">
                              <Chip 
                                  icon={<BadgeIcon />}
                                  label="תעודת זהות"
                                  color={formStep >= 0 ? "primary" : "default"}
                                  variant={formStep === 0 ? "filled" : "outlined"}
                                  sx={{
                                      bgcolor: formStep >= 0 ? chavrutaColors.primary.main : 'transparent',
                                      color: formStep >= 0 ? 'white' : chavrutaColors.text.secondary,
                                      fontWeight: 'bold',
                                      border: errors.id ? `2px solid ${chavrutaColors.error}` : 'none'
                                  }}
                              />
                              <ArrowForwardIcon 
                                  sx={{ 
                                      color: formStep >= 1 ? chavrutaColors.primary.main : chavrutaColors.text.disabled,
                                      transform: 'rotate(180deg)'
                                  }} 
                              />
                              <Chip 
                                  icon={<PersonIcon />}
                                  label="פרטים אישיים"
                                  color={formStep >= 1 ? "primary" : "default"}
                                  variant={formStep === 1 ? "filled" : "outlined"}
                                  sx={{
                                      bgcolor: formStep >= 1 ? chavrutaColors.primary.main : 'transparent',
                                      color: formStep >= 1 ? 'white' : chavrutaColors.text.secondary,
                                      fontWeight: 'bold',
                                      border: (errors.firstName || errors.lastName) ? `2px solid ${chavrutaColors.error}` : 'none'
                                  }}
                              />
                          </Stack>
                      </Box>

                      <Box component="form" sx={{ mt: 3 }}>
                          {formStep === 0 && (
                              <motion.div
                                  key="step0"
                                  initial={{ opacity: 0, x: -50 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: 50 }}
                                  transition={{ duration: 0.3 }}
                              >
                                  <StyledInputField fullWidth variant="standard" error={!!errors.id}>
                                      <InputLabel htmlFor="standard-adornment-id">
                                          תעודת זהות *
                                      </InputLabel>
                                      <Input
                                          id="standard-adornment-id"
                                          type={showId ? 'text' : 'password'}
                                          value={person.id}
                                          onChange={handleIdChange}
                                          onKeyPress={handleKeyPress}
                                          error={!!errors.id}
                                          inputProps={{ 
                                              maxLength: 9,
                                              style: { 
                                                  fontSize: '1.2rem',
                                                  fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                                  letterSpacing: showId ? '2px' : '4px'
                                              }
                                          }}
                                          startAdornment={
                                              <InputAdornment position="start">
                                                  <BadgeIcon sx={{ 
                                                      color: errors.id ? chavrutaColors.error : chavrutaColors.primary.main 
                                                  }} />
                                              </InputAdornment>
                                          }
                                          endAdornment={
                                              <InputAdornment position="end">
                                                  <IconButton
                                                      aria-label="toggle id visibility"
                                                      onClick={handleClickShowId}
                                                      onMouseDown={handleMouseDownId}
                                                      sx={{
                                                          color: errors.id ? chavrutaColors.error : chavrutaColors.primary.main,
                                                          '&:hover': {
                                                              bgcolor: alpha(chavrutaColors.primary.main, 0.1)
                                                          }
                                                      }}
                                                  >
                                                      {showId ? <VisibilityOff /> : <Visibility />}
                                                  </IconButton>
                                              </InputAdornment>
                                          }
                                      />
                                  </StyledInputField>

                                  {errors.id && (
                                      <ErrorAlert severity="error" icon={<ErrorIcon />}>
                                          {errors.id}
                                      </ErrorAlert>
                                  )}

                                  <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                                      <GlowingButton
                                          variant="contained"
                                          onClick={nextStep}
                                          disabled={!person.id || !!errors.id}
                                          startIcon={<ArrowForwardIcon sx={{ transform: 'rotate(180deg)' }} />}
                                          sx={{ minWidth: 200 }}
                                      >
                                          המשך
                                      </GlowingButton>
                                  </Box>
                              </motion.div>
                          )}

                          {formStep === 1 && (
                              <motion.div
                                  key="step1"
                                  initial={{ opacity: 0, x: 50 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -50 }}
                                  transition={{ duration: 0.3 }}
                              >
                                  <StyledTextField
                                      fullWidth
                                      variant="standard"
                                      label="שם פרטי *"
                                      value={person.firstName}
                                      onChange={(e) => handleNameChange('firstName', e.target.value)}
                                      onKeyPress={handleKeyPress}
                                      error={!!errors.firstName}
                                      InputProps={{
                                          startAdornment: (
                                              <InputAdornment position="start">
                                                  <FaceIcon sx={{ 
                                                      color: errors.firstName ? chavrutaColors.error : chavrutaColors.primary.main 
                                                  }} />
                                              </InputAdornment>
                                          ),
                                          style: { 
                                              fontSize: '1.1rem',
                                              fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
                                          }
                                      }}
                                      inputProps={{ maxLength: 20 }}
                                  />

                                  {errors.firstName && (
                                      <ErrorAlert severity="error" icon={<ErrorIcon />}>
                                          {errors.firstName}
                                      </ErrorAlert>
                                  )}

                                  <StyledTextField
                                      fullWidth
                                      variant="standard"
                                      label="שם משפחה *"
                                      value={person.lastName}
                                      onChange={(e) => handleNameChange('lastName', e.target.value)}
                                      onKeyPress={handleKeyPress}
                                      error={!!errors.lastName}
                                      InputProps={{
                                          startAdornment: (
                                              <InputAdornment position="start">
                                                  <AccountCircleIcon sx={{ 
                                                      color: errors.lastName ? chavrutaColors.error : chavrutaColors.primary.main 
                                                  }} />
                                              </InputAdornment>
                                          ),
                                          style: { 
                                              fontSize: '1.1rem',
                                              fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
                                          }
                                      }}
                                      inputProps={{ maxLength: 20 }}
                                  />

                                  {errors.lastName && (
                                      <ErrorAlert severity="error" icon={<ErrorIcon />}>
                                          {errors.lastName}
                                      </ErrorAlert>
                                  )}

                                  <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                                      <Button
                                          variant="outlined"
                                          onClick={prevStep}
                                          startIcon={<ArrowForwardIcon />}
                                          sx={{
                                              borderRadius: '50px',
                                              borderColor: chavrutaColors.text.secondary,
                                              color: chavrutaColors.text.secondary,
                                              '&:hover': {
                                                  borderColor: chavrutaColors.primary.main,
                                                  color: chavrutaColors.primary.main,
                                                  bgcolor: alpha(chavrutaColors.primary.main, 0.05)
                                              }
                                          }}
                                      >
                                          חזור
                                      </Button>
                                      
                                      <GlowingButton
                                          variant="contained"
                                          onClick={isExist}
                                          disabled={!person.firstName || !person.lastName || !!errors.firstName || !!errors.lastName || loading}
                                          startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <LoginIcon />}
                                          sx={{ flex: 1 }}
                                      >
                                          {loading ? 'מתחבר...' : 'התחבר'}
                                      </GlowingButton>
                                  </Stack>
                              </motion.div>
                          )}

                          {/* General error message */}
                          {errors.general && (
                              <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3 }}
                              >
                                  <ErrorAlert 
                                      severity="error" 
                                      icon={<WarningIcon />}
                                      sx={{ mt: 3 }}
                                  >
                                      {errors.general}
                                  </ErrorAlert>
                              </motion.div>
                          )}
                      </Box>

                      <Divider sx={{ 
                          my: 4, 
                          bgcolor: alpha(chavrutaColors.secondary.main, 0.2),
                          height: 1
                      }} />

                      <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="body2" color="text.secondary" gutterBottom>
                              זקוק לעזרה?
                          </Typography>
                          <Button
                              variant="text"
                              onClick={() => setOpen(true)}
                              startIcon={<InfoIcon />}
                              sx={{
                                  color: chavrutaColors.secondary.main,
                                  fontWeight: 'bold',
                                  '&:hover': {
                                      bgcolor: alpha(chavrutaColors.secondary.main, 0.1)
                                  }
                              }}
                          >
                              מה זה חברותא?
                          </Button>
                      </Box>
                  </StyledPaper>
              </motion.div>
          </Container>

          {/* Info Dialog */}
          <Dialog 
              open={open} 
              onClose={() => setOpen(false)}
              maxWidth="md"
              fullWidth
              PaperProps={{
                  sx: {
                      borderRadius: '24px',
                      background: `linear-gradient(145deg, ${chavrutaColors.background.paper} 0%, ${chavrutaColors.background.elevated} 100%)`,
                      boxShadow: `0 25px 50px ${alpha(chavrutaColors.primary.main, 0.3)}`,
                      border: `1px solid ${alpha(chavrutaColors.secondary.main, 0.2)}`,
                  }
              }}
              BackdropProps={{
                  sx: {
                      backdropFilter: 'blur(8px)'
                  }
              }}
          >
              <CardHeader>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <BookIcon sx={{ fontSize: 32 }} />
                          <Typography variant="h5" fontWeight="bold">
                              אודות חברותא
                          </Typography>
                      </Box>
                      <IconButton 
                          onClick={() => setOpen(false)}
                          sx={{ 
                              color: 'white',
                              bgcolor: alpha('#fff', 0.1),
                              '&:hover': { bgcolor: alpha('#fff', 0.2) }
                          }}
                      >
                          <CloseIcon />
                      </IconButton>
                  </Box>
              </CardHeader>

              <DialogContent sx={{ p: 4 }}>
                  <Typography variant="h6" gutterBottom color={chavrutaColors.primary.main} fontWeight="bold">
                      מה זה חברותא?
                  </Typography>
                  <Typography paragraph sx={{ lineHeight: 1.8, mb: 3 }}>
                      חברותא היא מערכת ייחודית לחיבור בין לומדים. המערכת מאפשרת ליצור הצעות לימוד 
                      ולמצוא שותפים ללמידה בנושאים שונים.
                  </Typography>

                  <Typography variant="h6" gutterBottom color={chavrutaColors.secondary.main} fontWeight="bold">
                      איך זה עובד?
                  </Typography>
                  <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                      <Typography component="li" paragraph>
                          <strong>צור הצעה:</strong> הגדר את הספר, הנושא ואופן הלמידה
                      </Typography>
                      <Typography component="li" paragraph>
                          <strong>חפש שותפים:</strong> עיין בבקשות של לומדים אחרים
                      </Typography>
                      <Typography component="li" paragraph>
                          <strong>קבע זמנים:</strong> תאם מועדי למידה במערכת השעות
                      </Typography>
                      <Typography component="li" paragraph>
                          <strong>למד יחד:</strong> התחל את מסע הלמידה המשותף
                      </Typography>
                  </Box>

                  <Box sx={{ 
                      p: 3, 
                      borderRadius: 2,
                      bgcolor: alpha(chavrutaColors.accent.main, 0.1),
                      border: `1px solid ${alpha(chavrutaColors.accent.main, 0.2)}`
                  }}>
                      <Typography variant="body2" fontStyle="italic" textAlign="center">
                          "הרבה למדתי מרבותי, יותר מחברי, ויותר מכולם מתלמידי"
                          <br />
                          - תלמוד בבלי, תענית ז ע"א
                      </Typography>
                  </Box>

                  <Typography variant="h6" gutterBottom color={chavrutaColors.primary.main} fontWeight="bold" sx={{ mt: 3 }}>
                      שגיאות נפוצות ופתרונות:
                  </Typography>
                  <Box component="ul" sx={{ pl: 3 }}>
                      <Typography component="li" paragraph>
                          <strong>תעודת זהות לא תקינה:</strong> ודא שהזנת 9 ספרות בדיוק
                      </Typography>
                      <Typography component="li" paragraph>
                          <strong>שם לא תקין:</strong> השתמש רק באותיות עבריות או אנגליות
                      </Typography>
                      <Typography component="li" paragraph>
                          <strong>משתמש לא נמצא:</strong> פנה למנהל המערכת לרישום
                      </Typography>
                      <Typography component="li" paragraph>
                          <strong>פרטים לא תואמים:</strong> ודא שהשם תואם לתעודת הזהות
                      </Typography>
                  </Box>
              </DialogContent>

              <DialogActions sx={{ p: 3, justifyContent: 'center' }}>
                  <GlowingButton onClick={() => setOpen(false)}>
                      הבנתי
                  </GlowingButton>
              </DialogActions>
          </Dialog>

          {/* Floating info button */}
          <Box sx={{
              position: 'fixed',
              bottom: 24,
              right: 24,
              zIndex: 1000
          }}>
              <IconButton
                  onClick={() => setOpen(true)}
                  sx={{
                      width: 60,
                      height: 60,
                      background: `linear-gradient(135deg, ${chavrutaColors.info} 0%, #3498DB 100%)`,
                      color: 'white',
                      boxShadow: `0 8px 25px ${alpha(chavrutaColors.info, 0.4)}`,
                      animation: `${pulse} 2s infinite`,
                      '&:hover': {
                          transform: 'scale(1.1)',
                          boxShadow: `0 12px 35px ${alpha(chavrutaColors.info, 0.6)}`,
                          animation: 'none'
                      },
                      transition: 'all 0.3s ease'
                  }}
              >
                  <BookIcon sx={{ fontSize: 28 }} />
              </IconButton>
          </Box>

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
                      boxShadow: `0 8px 25px ${alpha(chavrutaColors.primary.main, 0.3)}`,
                      borderRadius: '16px',
                      fontSize: '1.1rem',
                      fontWeight: 'medium',
                      '& .MuiAlert-icon': {
                          fontSize: '1.5rem'
                      }
                  }}
              >
                  {snackbar.message}
              </Alert>
          </Snackbar>
      </Box>
  );
};


