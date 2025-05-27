
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
    Backdrop, Chip, Avatar, useTheme, useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
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

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: 24,
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    background: 'linear-gradient(145deg, #ffffff, #f5f7fa)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    overflow: 'hidden',
    position: 'relative',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
    },
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '6px',
        background: 'linear-gradient(90deg, #3f51b5, #2196f3, #00bcd4)',
    }
}));

const GlowingButton = styled(Button)(({ theme }) => ({
    borderRadius: '50px',
    padding: '12px 32px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textTransform: 'none',
    fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
    boxShadow: '0 6px 15px rgba(63, 81, 181, 0.3)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    background: 'linear-gradient(45deg, #3f51b5 0%, #2196f3 50%, #00bcd4 100%)',
    backgroundSize: '200% auto',
    '&:hover': {
        backgroundPosition: 'right center',
        transform: 'translateY(-3px) scale(1.02)',
        boxShadow: '0 10px 25px rgba(63, 81, 181, 0.4)',
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        top: '-50%',
        left: '-50%',
        width: '200%',
        height: '200%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%)',
        opacity: 0,
        transition: 'opacity 0.5s ease',
    },
    '&:active::after': {
        opacity: 1,
    }
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        borderRadius: 24,
        boxShadow: '0 24px 80px rgba(0, 0, 0, 0.2)',
        overflow: 'hidden',
        backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 247, 250, 0.95) 100%)',
        backdropFilter: 'blur(20px)',
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
    background: 'linear-gradient(135deg, #3f51b5 0%, #2196f3 50%, #00bcd4 100%)',
    color: 'white',
    fontSize: 36,
    boxShadow: '0 8px 30px rgba(63, 81, 181, 0.4)',
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        top: -5,
        left: -5,
        right: -5,
        bottom: -5,
        borderRadius: '50%',
        border: '2px dashed rgba(63, 81, 181, 0.3)',
        animation: 'spin 20s linear infinite',
    }
}));

const StyledInputField = styled(FormControl)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    position: 'relative',
    '& .MuiInputLabel-root': {
        fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
        fontSize: '1rem',
        color: alpha(theme.palette.text.primary, 0.7),
    },
    '& .MuiInput-root': {
        transition: 'all 0.3s ease',
        '&::before': {
            borderBottomColor: alpha(theme.palette.primary.main, 0.3),
        },
        '&::after': {
            borderBottomColor: theme.palette.primary.main,
        },
        '&:hover:not(.Mui-disabled)::before': {
            borderBottomColor: alpha(theme.palette.primary.main, 0.5),
        },
    },
    '& .MuiInputAdornment-root': {
        color: alpha(theme.palette.text.primary, 0.5),
    }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    '& .MuiInputLabel-root': {
        fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
        fontSize: '1rem',
        color: alpha(theme.palette.text.primary, 0.7),
    },
    '& .MuiInput-root': {
        transition: 'all 0.3s ease',
        '&::before': {
            borderBottomColor: alpha(theme.palette.primary.main, 0.3),
        },
        '&::after': {
            borderBottomColor: theme.palette.primary.main,
        },
        '&:hover:not(.Mui-disabled)::before': {
            borderBottomColor: alpha(theme.palette.primary.main, 0.5),
        },
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
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [formStep, setFormStep] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const isExist = async () => {
        if (!person.id || !person.firstName || !person.lastName) {
            setError("נא למלא את כל השדות");
            return;
        }
        
        if (person.id.length !== 9) {
            setError("תעודת זהות חייבת להכיל 9 ספרות בדיוק");
            return;
        }
        
        if (!/^\d+$/.test(person.id)) {
            setError("תעודת זהות חייבת להכיל ספרות בלבד");
            return;
        }
        
        setLoading(true);
        setError("");
        dispatch(GetByIdThunk(person.id));
    }

    useEffect(() => {
        if (isexist === false) {
            setSuccess(true);
            setTimeout(() => {
                navigate(`/logon/${person.id}/${person.firstName}/${person.lastName}`);
            }, 1500);
        }
        if (isexist === true) {
            setSuccess(true);
            setTimeout(() => {
                if (p.role === "request")
                    navigate(`/request/${person.id}`);
                else
                    navigate(`/offer/${person.id}`);
            }, 1500);
        }
        
        setLoading(false);
    }, [isexist, p, person, navigate]);

    const handleClickShowId = () => setShowId((show) => !show);

    const handleIdChange = (e) => {
        const value = e.target.value;
        
        // מאפשר רק ספרות
        if (value && !/^\d+$/.test(value)) {
            return;
        }
        
        // מגביל לאורך מקסימלי של 9 ספרות
        if (value.length <= 9) {
            setPerson({ ...person, id: value });
        }
        
        // מציג שגיאה אם הוזנו תווים אך לא 9 ספרות
        if (value && value.length !== 9) {
            setError("תעודת זהות חייבת להכיל 9 ספרות בדיוק");
        } else {
            setError("");
        }
    };

    const handleNextStep = () => {
        if (formStep === 0) {
            if (!person.id) {
                setError("נא להזין תעודת זהות");
                return;
            }
            if (person.id.length !== 9) {
                setError("תעודת זהות חייבת להכיל 9 ספרות בדיוק");
                return;
            }
            // בדיקה שתעודת הזהות מכילה רק ספרות
            if (!/^\d+$/.test(person.id)) {
                setError("תעודת זהות חייבת להכיל ספרות בלבד");
                return;
            }
        }
        if (formStep === 1) {
            if (!person.firstName) {
                setError("נא להזין שם פרטי");
                return;
            }
            if (!person.lastName) {
                setError("נא להזין שם משפחה");
                return;
            }
        }
        
        setError("");
        setFormStep(prev => prev + 1);
    };

    const handlePrevStep = () => {
        setFormStep(prev => prev - 1);
    };

    // Background particles for visual effect
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 10 + 5,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 10
    }));

    return (
        <Container 
            maxWidth="sm" 
            sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '70vh',
                py: 6,
                position: 'relative'
            }}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {/* Background decoration */}
            <Box sx={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: -1
            }}>
                {particles.map(particle => (
                    <Box
                        key={particle.id}
                        component={motion.div}
                        sx={{
                            position: 'absolute',
                            width: particle.size,
                            height: particle.size,
                            borderRadius: '50%',
                            background: `linear-gradient(135deg, ${alpha('#3f51b5', 0.2)}, ${alpha('#00bcd4', 0.2)})`,
                            top: `${particle.y}%`,
                            left: `${particle.x}%`,
                        }}
                        animate={{
                            y: [0, -100],
                            opacity: [0.7, 0],
                            rotate: [0, 360]
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}
            </Box>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ width: '100%' }}
            >
                <motion.div variants={itemVariants}>
                    <StyledPaper sx={{ width: '100%', maxWidth: 450, mx: 'auto', mb: 4 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography 
                                variant="h3" 
                                component="h1" 
                                gutterBottom
                                sx={{ 
                                    fontWeight: 800, 
                                    color: '#3f51b5',
                                    fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                    mb: 1,
                                    background: 'linear-gradient(45deg, #3f51b5, #2196f3, #00bcd4)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    textShadow: '0 2px 10px rgba(63, 81, 181, 0.1)',
                                    fontSize: { xs: '2.5rem', sm: '3rem' }
                                }}
                            >
                                חברותא
                            </Typography>
                            
                            <Typography 
                                                             variant="h6" 
                                                             sx={{ 
                                                                 color: alpha('#000', 0.6),
                                                                 fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                                                 mb: 3,
                                                                 fontWeight: 400
                                                             }}
                                                         >
                                                             מצא את החברותא המושלמת ללימוד שלך
                                                         </Typography>
                                                         
                                                         <Box sx={{ position: 'relative', mb: 4 }}>
                                                             <Box
                                                                 component={motion.div}
                                                                 whileHover={{ scale: 1.05, rotate: 5 }}
                                                                 whileTap={{ scale: 0.95 }}
                                                                 sx={{
                                                                     width: 120,
                                                                     height: 120,
                                                                     borderRadius: '50%',
                                                                     background: 'linear-gradient(135deg, #3f51b5 0%, #2196f3 50%, #00bcd4 100%)',
                                                                     display: 'flex',
                                                                     alignItems: 'center',
                                                                     justifyContent: 'center',
                                                                     margin: '0 auto',
                                                                     boxShadow: '0 10px 30px rgba(63, 81, 181, 0.3)',
                                                                     position: 'relative',
                                                                     zIndex: 1
                                                                 }}
                                                             >
                                                                 <BookIcon sx={{ fontSize: 60, color: 'white' }} />
                                                             </Box>
                                                             
                                                             <Box
                                                                 sx={{
                                                                     position: 'absolute',
                                                                     top: -10,
                                                                     left: '50%',
                                                                     transform: 'translateX(-50%)',
                                                                     width: 140,
                                                                     height: 140,
                                                                     borderRadius: '50%',
                                                                     border: '2px dashed rgba(63, 81, 181, 0.3)',
                                                                     animation: 'spin 20s linear infinite',
                                                                     '@keyframes spin': {
                                                                         '0%': { transform: 'translateX(-50%) rotate(0deg)' },
                                                                         '100%': { transform: 'translateX(-50%) rotate(360deg)' }
                                                                     }
                                                                 }}
                                                             />
                                                         </Box>
                                                     </Box>
                                                     
                                                     <GlowingButton
                                                         variant="contained"
                                                         fullWidth
                                                         onClick={() => setOpen(true)}
                                                         startIcon={<LoginIcon />}
                                                         component={motion.button}
                                                         whileHover={{ scale: 1.02 }}
                                                         whileTap={{ scale: 0.98 }}
                                                         sx={{
                                                             color: 'white',
                                                             fontSize: '1.2rem',
                                                             py: 1.5,
                                                             mb: 2
                                                         }}
                                                     >
                                                         כניסה למערכת
                                                     </GlowingButton>
                                                     
                                                 </StyledPaper>
                                             </motion.div>
                             
                                             <motion.div variants={itemVariants}>
                                                 <Box sx={{ textAlign: 'center', mt: 4 }}>
                                                     <Chip
                                                         icon={<CheckCircleIcon />}
                                                         label="מאות חברותות פעילות"
                                                         sx={{ 
                                                             m: 0.5, 
                                                             background: alpha('#3f51b5', 0.1),
                                                             color: '#3f51b5',
                                                             fontWeight: 500
                                                         }}
                                                     />
                                                     <Chip
                                                         icon={<CheckCircleIcon />}
                                                         label="התאמה מדויקת"
                                                         sx={{ 
                                                             m: 0.5, 
                                                             background: alpha('#2196f3', 0.1),
                                                             color: '#2196f3',
                                                             fontWeight: 500
                                                         }}
                                                     />
                                                     <Chip
                                                         icon={<CheckCircleIcon />}
                                                         label="לימוד יעיל ומהנה"
                                                         sx={{ 
                                                             m: 0.5, 
                                                             background: alpha('#00bcd4', 0.1),
                                                             color: '#00bcd4',
                                                             fontWeight: 500
                                                         }}
                                                     />
                                                 </Box>
                                             </motion.div>
                                         </motion.div>
                             
                                         <StyledDialog
                                             open={open}
                                             onClose={() => !loading && !success && setOpen(false)}
                                             maxWidth="sm"
                                             fullWidth
                                             TransitionComponent={Zoom}
                                             PaperProps={{
                                                 sx: {
                                                     px: { xs: 2, sm: 3 },
                                                     py: 3,
                                                     maxWidth: 500
                                                 }
                                             }}
                                         >
                                             {success ? (
                                                 <Box sx={{ textAlign: 'center', p: 4 }}>
                                                     <motion.div
                                                         initial={{ scale: 0 }}
                                                         animate={{ scale: 1 }}
                                                         transition={{ 
                                                             type: "spring", 
                                                             stiffness: 200, 
                                                             damping: 20 
                                                         }}
                                                     >
                                                         <CheckCircleIcon 
                                                             sx={{ 
                                                                 fontSize: 80, 
                                                                 color: 'success.main',
                                                                 mb: 2
                                                             }} 
                                                         />
                                                     </motion.div>
                                                     
                                                     <Typography 
                                                         variant="h5" 
                                                         sx={{ 
                                                             fontWeight: 700,
                                                             mb: 2,
                                                             fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
                                                         }}
                                                     >
                                                         {isexist ? "התחברת בהצלחה!" : "מועבר להרשמה..."}
                                                     </Typography>
                                                     
                                                     <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                                                         {isexist 
                                                             ? "מועבר לאזור האישי שלך..." 
                                                             : "נראה שזו הפעם הראשונה שלך במערכת. מועבר לתהליך הרשמה קצר..."}
                                                     </Typography>
                                                     
                                                     <CircularProgress size={30} />
                                                 </Box>
                                             ) : (
                                                 <>
                                                     <Box sx={{ textAlign: 'center', mb: 3 }}>
                                                         <FormHeaderIcon>
                                                             {formStep === 0 && <BadgeIcon fontSize="inherit" />}
                                                             {formStep === 1 && <FaceIcon fontSize="inherit" />}
                                                             {formStep === 2 && <AccountCircleIcon fontSize="inherit" />}
                                                         </FormHeaderIcon>
                                                         
                                                         <DialogTitle sx={{ 
                                                             p: 0,
                                                             fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                                             fontWeight: 700,
                                                             fontSize: '1.75rem',
                                                             color: '#3f51b5',
                                                             mb: 1
                                                         }}>
                                                             {formStep === 0 && "כניסה למערכת"}
                                                             {formStep === 1 && "פרטים אישיים"}
                                                             {formStep === 2 && "אימות פרטים"}
                                                         </DialogTitle>
                                                         
                                                         <DialogContentText sx={{ 
                                                             px: { xs: 1, sm: 4 },
                                                             color: 'text.secondary',
                                                             fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                                             fontSize: '1rem'
                                                         }}>
                                                             {formStep === 0 && "אנא הזן את תעודת הזהות שלך"}
                                                             {formStep === 1 && "אנא הזן את שמך הפרטי ושם המשפחה"}
                                                             {formStep === 2 && "אנא ודא שהפרטים שהזנת נכונים"}
                                                         </DialogContentText>
                                                     </Box>
                             
                                                     <DialogContent sx={{ px: { xs: 1, sm: 3 }, py: 0 }}>
                                                         {error && (
                                                             <Fade in={!!error}>
                                                                 <Box 
                                                                     sx={{ 
                                                                         mb: 3, 
                                                                         p: 2, 
                                                                         borderRadius: 2,
                                                                         backgroundColor: alpha('#f44336', 0.1),
                                                                         display: 'flex',
                                                                         alignItems: 'center'
                                                                     }}
                                                                 >
                                                                     <CancelIcon sx={{ color: 'error.main', mr: 1 }} />
                                                                     <Typography 
                                                                         color="error" 
                                                                         variant="body2" 
                                                                         sx={{ fontWeight: 500 }}
                                                                     >
                                                                         {error}
                                                                     </Typography>
                                                                 </Box>
                                                             </Fade>
                                                         )}
                                                         
                                                         <Box sx={{ position: 'relative', minHeight: 200 }}>
                                                             <Slide direction="left" in={formStep === 0} mountOnEnter unmountOnExit>
                                                                 <Box>
                                                                     <StyledInputField variant="standard" fullWidth required>
                                                                         <InputLabel htmlFor="standard-adornment-id">תעודת זהות</InputLabel>
                                                                         <Input
                                                                             onChange={x => setPerson({ ...person, id: x.target.value })}
                                                                             id="standard-adornment-id"
                                                                             type={showId ? 'text' : 'password'}
                                                                             value={person.id}
                                                                             startAdornment={
                                                                                 <InputAdornment position="start">
                                                                                     <BadgeIcon color="primary" />
                                                                                 </InputAdornment>
                                                                             }
                                                                             endAdornment={
                                                                                 <InputAdornment position="end">
                                                                                     <IconButton
                                                                                         aria-label={showId ? 'הסתר תעודת זהות' : 'הצג תעודת זהות'}
                                                                                         onClick={handleClickShowId}
                                                                                         edge="end"
                                                                                     >
                                                                                         {showId ? <VisibilityOff /> : <Visibility />}
                                                                                     </IconButton>
                                                                                 </InputAdornment>
                                                                             }
                                                                         />
                                                                     </StyledInputField>
                                                                     
                                                                     <Typography 
                                                                         variant="caption" 
                                                                         sx={{ 
                                                                             display: 'block', 
                                                                             color: 'text.secondary',
                                                                             textAlign: 'center',
                                                                             mt: 2
                                                                         }}
                                                                     >
                                                                         * תעודת הזהות משמשת לזיהוי בלבד ומאובטחת במערכת
                                                                     </Typography>
                                                                 </Box>
                                                             </Slide>
                                                             
                                                             <Slide direction="left" in={formStep === 1} mountOnEnter unmountOnExit>
                                                                 <Box>
                                                                     <StyledTextField
                                                                         required
                                                                         id="firstName"
                                                                         label="שם פרטי"
                                                                         variant="standard"
                                                                         fullWidth
                                                                         value={person.firstName}
                                                                         onChange={x => setPerson({ ...person, firstName: x.target.value })}
                                                                         InputProps={{
                                                                             startAdornment: (
                                                                                 <InputAdornment position="start">
                                                                                     <PersonIcon color="primary" />
                                                                                 </InputAdornment>
                                                                             ),
                                                                         }}
                                                                     />
                                                                     
                                                                     <StyledTextField
                                                                         required
                                                                         id="lastName"
                                                                         label="שם משפחה"
                                                                         variant="standard"
                                                                         fullWidth
                                                                         value={person.lastName}
                                                                         onChange={x => setPerson({ ...person, lastName: x.target.value })}
                                                                         InputProps={{
                                                                             startAdornment: (
                                                                                 <InputAdornment position="start">
                                                                                     <PersonIcon color="primary" />
                                                                                 </InputAdornment>
                                                                             ),
                                                                         }}
                                                                     />
                                                                 </Box>
                                                             </Slide>
                                                             
                                                             <Slide direction="left" in={formStep === 2} mountOnEnter unmountOnExit>
                                                                 <Box>
                                                                     <Paper 
                                                                         elevation={0} 
                                                                         sx={{ 
                                                                             p: 3, 
                                                                             borderRadius: 2, 
                                                                             backgroundColor: alpha('#3f51b5', 0.05),
                                                                             mb: 3
                                                                         }}
                                                                     >
                                                                         <Grid container spacing={2}>
                                                                         <Input
    onChange={handleIdChange}
    id="standard-adornment-id"
    type={showId ? 'text' : 'password'}
    value={person.id}
    inputProps={{ 
        maxLength: 9,
        pattern: "[0-9]*",
        inputMode: "numeric"
    }}
    startAdornment={
        <InputAdornment position="start">
            <BadgeIcon color="primary" />
        </InputAdornment>
    }
    endAdornment={
        <InputAdornment position="end">
            <IconButton
                aria-label={showId ? 'הסתר תעודת זהות' : 'הצג תעודת זהות'}
                onClick={handleClickShowId}
                edge="end"
            >
                {showId ? <VisibilityOff /> : <Visibility />}
            </IconButton>
        </InputAdornment>
    }
/>
                                                                             
                                                                             <Grid item xs={4}>
                                                                                 <Typography variant="body2" color="text.secondary">
                                                                                     שם פרטי:
                                                                                 </Typography>
                                                                             </Grid>
                                                                             <Grid item xs={8}>
                                                                                 <Typography variant="body1" fontWeight={500}>
                                                                                     {person.firstName}
                                                                                 </Typography>
                                                                             </Grid>
                                                                             
                                                                             <Grid item xs={4}>
                                                                                 <Typography variant="body2" color="text.secondary">
                                                                                     שם משפחה:
                                                                                 </Typography>
                                                                             </Grid>
                                                                             <Grid item xs={8}>
                                                                                 <Typography variant="body1" fontWeight={500}>
                                                                                     {person.lastName}
                                                                                 </Typography>
                                                                             </Grid>
                                                                         </Grid>
                                                                     </Paper>
                                                                     <Typography variant="body2" color="text.secondary" sx={{
                                            textAlign: 'center',
                                            mb: 2
                                        }}>
                                            אנא ודא שהפרטים שהזנת נכונים לפני המשך התהליך
                                        </Typography>
                                    </Box>
                                </Slide>
                            </Box>
                        </DialogContent>
                        
                        <DialogActions sx={{ 
                            px: { xs: 2, sm: 3 }, 
                            py: 2,
                            display: 'flex', 
                            justifyContent: formStep > 0 ? 'space-between' : 'flex-end',
                            borderTop: `1px solid ${alpha('#000', 0.1)}`,
                            mt: 2
                        }}>
                            {formStep > 0 && (
                                <Button
                                    variant="outlined"
                                    onClick={handlePrevStep}
                                    disabled={loading}
                                    startIcon={<ArrowForwardIcon />}
                                    sx={{ 
                                        borderRadius: 50,
                                        px: 3,
                                        borderColor: alpha('#3f51b5', 0.5),
                                        color: '#3f51b5',
                                        '&:hover': {
                                            borderColor: '#3f51b5',
                                            backgroundColor: alpha('#3f51b5', 0.05)
                                        }
                                    }}
                                >
                                    חזרה
                                </Button>
                            )}
                            
                            {formStep < 2 ? (
                                <Button
                                    variant="contained"
                                    onClick={handleNextStep}
                                    disabled={loading}
                                    endIcon={<ArrowForwardIcon sx={{ transform: 'rotate(180deg)' }} />}
                                    sx={{
                                        borderRadius: 50,
                                        px: 3,
                                        background: 'linear-gradient(45deg, #3f51b5 30%, #2196f3 90%)',
                                        color: 'white',
                                        boxShadow: '0 4px 10px rgba(63, 81, 181, 0.3)',
                                        '&:hover': {
                                            boxShadow: '0 6px 15px rgba(63, 81, 181, 0.4)',
                                            background: 'linear-gradient(45deg, #303f9f 30%, #1976d2 90%)'
                                        }
                                    }}
                                >
                                    המשך
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    onClick={isExist}
                                    disabled={loading}
                                    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <LoginIcon />}
                                    sx={{
                                        borderRadius: 50,
                                        px: 3,
                                        background: 'linear-gradient(45deg, #3f51b5 30%, #2196f3 90%)',
                                        color: 'white',
                                        boxShadow: '0 4px 10px rgba(63, 81, 181, 0.3)',
                                        '&:hover': {
                                            boxShadow: '0 6px 15px rgba(63, 81, 181, 0.4)',
                                            background: 'linear-gradient(45deg, #303f9f 30%, #1976d2 90%)'
                                        }
                                    }}
                                >
                                    {loading ? 'מתחבר...' : 'כניסה למערכת'}
                                </Button>
                            )}
                        </DialogActions>
                    </>
                )}
            </StyledDialog>
            
            {/* Backdrop for loading state */}
            <Backdrop
                sx={{ 
                    color: '#fff', 
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backdropFilter: 'blur(4px)'
                }}
                open={loading && !open}
            >
                <Box sx={{ textAlign: 'center' }}>
                    <CircularProgress color="inherit" sx={{ mb: 2 }} />
                    <Typography variant="h6" sx={{ fontFamily: "'Heebo', 'Rubik', Arial, sans-serif" }}>
                        מתחבר למערכת...
                    </Typography>
                </Box>
            </Backdrop>
        </Container>
    );
};

export default Login;
