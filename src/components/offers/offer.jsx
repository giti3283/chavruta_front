

// In the name of God
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getOffersByIdThunk } from "../../redux/Offers/getOffersByIdThunk";
import { AddOfferThunk } from "../../redux/Offers/addOfferThunk";
import { DeleteOfferThunk } from "../../redux/Offers/deleteOffersThunk";
import { UpdateOfferThunk } from "../../redux/Offers/updateOffersThunk";
import { editOffer } from "../../redux/Offers/offersSlice";

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
  Zoom,
  Grow,
  Chip,
  Tooltip,
  AppBar,
  Toolbar,
  useMediaQuery,
  Card,
  CardContent,
  CardActions,
  Divider,
  Grid,
  useTheme,
  alpha,
  Menu,
  MenuItem,
  InputAdornment,
  Snackbar,
  Alert,
  Backdrop,
  Slide,
  Stack,
  Badge,
  LinearProgress,
  Skeleton
} from "@mui/material";

// Icons
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BookIcon from '@mui/icons-material/Book';
import SubjectIcon from '@mui/icons-material/Subject';
import SchoolIcon from '@mui/icons-material/School';
import CloseIcon from '@mui/icons-material/Close';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import LanguageIcon from '@mui/icons-material/Language';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupsIcon from '@mui/icons-material/Groups';
import StarIcon from '@mui/icons-material/Star';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteIcon from '@mui/icons-material/Favorite';

// Styled components
import { styled, keyframes } from '@mui/material/styles';
import "./offer.css";
import { GetScheduleByIdThunk } from "../../redux/Schedule/getScheduleByIdThunk";

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

// Styled components with Chavruta theme
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: '600',
  fontSize: '0.95rem',
  padding: theme.spacing(2.5),
  borderBottom: `2px solid ${alpha(chavrutaColors.primary.light, 0.1)}`,
  position: 'relative',
  '&.MuiTableCell-head': {
    background: `linear-gradient(135deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.primary.dark} 100%)`,
    color: chavrutaColors.primary.contrastText,
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
    backgroundColor: alpha(chavrutaColors.secondary.light, 0.03),
  },
  '&:hover': {
    backgroundColor: alpha(chavrutaColors.secondary.main, 0.08),
    transform: 'translateY(-3px) scale(1.01)',
    boxShadow: `0 8px 25px ${alpha(chavrutaColors.primary.main, 0.15)}`,
    cursor: 'pointer',
    '& .MuiTableCell-root': {
      color: chavrutaColors.primary.dark,
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
    background: `linear-gradient(to bottom, ${chavrutaColors.secondary.main}, ${chavrutaColors.accent.main})`,
    transform: 'scaleY(0)',
    transition: 'transform 0.3s ease',
  },
  '&:hover::before': {
    transform: 'scaleY(1)',
  }
}));

const StyledFab = styled(Fab)(({ theme }) => ({
  background: `linear-gradient(135deg, ${chavrutaColors.secondary.main} 0%, ${chavrutaColors.accent.main} 100%)`,
  color: chavrutaColors.secondary.contrastText,
  boxShadow: `0 6px 20px ${alpha(chavrutaColors.secondary.main, 0.4)}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-4px) scale(1.1)',
    boxShadow: `0 12px 30px ${alpha(chavrutaColors.secondary.main, 0.6)}`,
    background: `linear-gradient(135deg, ${chavrutaColors.accent.main} 0%, ${chavrutaColors.secondary.main} 100%)`,
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

const AnimatedCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '20px',
  background: `linear-gradient(145deg, ${chavrutaColors.background.paper} 0%, ${chavrutaColors.background.elevated} 100%)`,
  boxShadow: `0 10px 30px ${alpha(chavrutaColors.primary.main, 0.1)}`,
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  border: `1px solid ${alpha(chavrutaColors.secondary.light, 0.2)}`,
  '&:hover': {
    transform: 'translateY(-12px) rotateX(5deg)',
    boxShadow: `0 20px 50px ${alpha(chavrutaColors.primary.main, 0.2)}`,
    '& .card-header': {
      background: `linear-gradient(135deg, ${chavrutaColors.accent.main} 0%, ${chavrutaColors.primary.main} 100%)`,
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${chavrutaColors.secondary.main}, ${chavrutaColors.accent.main}, ${chavrutaColors.primary.main})`,
    backgroundSize: '200% 100%',
    animation: `${gradientShift} 3s ease infinite`,
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

const ModernAppBar = styled(AppBar)(({ theme }) => ({
  background: `linear-gradient(135deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.primary.dark} 50%, ${chavrutaColors.accent.main} 100%)`,
  backgroundSize: '200% 200%',
  animation: `${gradientShift} 8s ease infinite`,
  backdropFilter: 'blur(10px)',
  borderBottom: `1px solid ${alpha(chavrutaColors.secondary.main, 0.2)}`,
  boxShadow: `0 4px 20px ${alpha(chavrutaColors.primary.main, 0.3)}`,
}));

const SearchField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '25px',
    backgroundColor: chavrutaColors.background.paper,
    boxShadow: `0 4px 15px ${alpha(chavrutaColors.primary.main, 0.1)}`,
    transition: 'all 0.3s ease',
    border: `2px solid transparent`,
    '&:hover': {
      boxShadow: `0 6px 20px ${alpha(chavrutaColors.primary.main, 0.15)}`,
      border: `2px solid ${alpha(chavrutaColors.secondary.main, 0.3)}`,
    },
    '&.Mui-focused': {
      boxShadow: `0 8px 25px ${alpha(chavrutaColors.primary.main, 0.2)}`,
      border: `2px solid ${chavrutaColors.secondary.main}`,
      backgroundColor: chavrutaColors.background.elevated,
    }
  },
  '& .MuiOutlinedInput-input': {
    padding: theme.spacing(1.5, 2),
    fontSize: '1.1rem',
    color: chavrutaColors.text.primary,
  }
}));

const FloatingActionButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  right: theme.spacing(3),
  background: `linear-gradient(135deg, ${chavrutaColors.secondary.main} 0%, ${chavrutaColors.accent.main} 100%)`,
  color: chavrutaColors.secondary.contrastText,
  width: '70px',
  height: '70px',
  boxShadow: `0 8px 25px ${alpha(chavrutaColors.secondary.main, 0.4)}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: `${pulse} 2s infinite`,
  zIndex: 1000,
  '&:hover': {
    transform: 'scale(1.1) rotate(10deg)',
    boxShadow: `0 12px 35px ${alpha(chavrutaColors.secondary.main, 0.6)}`,
    animation: 'none',
  }
}));

const StatsCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, ${chavrutaColors.background.paper} 0%, ${chavrutaColors.background.elevated} 100%)`,
  borderRadius: '16px',
  padding: theme.spacing(2),
  boxShadow: `0 6px 20px ${alpha(chavrutaColors.primary.main, 0.08)}`,
  border: `1px solid ${alpha(chavrutaColors.secondary.light, 0.2)}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 12px 30px ${alpha(chavrutaColors.primary.main, 0.15)}`,
  }
}));

const ModernDialog = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '600px',
  background: `linear-gradient(145deg, ${chavrutaColors.background.paper} 0%, ${chavrutaColors.background.elevated} 100%)`,
  borderRadius: '24px',
  boxShadow: `0 25px 50px ${alpha(chavrutaColors.primary.main, 0.3)}`,
  border: `1px solid ${alpha(chavrutaColors.secondary.main, 0.2)}`,
  overflow: 'hidden',
  zIndex: 1300,
  // הוספת מרכוז נוסף לוודא שהדיאלוג במרכז מושלם
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  // התאמה למובייל
  [theme.breakpoints.down('sm')]: {
    width: '95%',
    maxWidth: '95%',
    margin: '0 auto',
  }
}));

export const Offer = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const dialogRef = useRef(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // State
  const [isEditMode, setIsEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  // Redux state
  const offers = useSelector(state => state.offers.offers);
  const [offer, setOffer] = useState({ 
    personId: param.id, 
    book: "", 
    subject: "", 
    mode: "" 
  });
  const schedules = useSelector(state => state.schedule.schedules);

  // Translations
  const translations = {
    en: {
      myOffers: "My Learning Offers",
      addOffer: "Create New Offer",
      schedule: "Study Schedule",
      id: "Student ID",
      book: "Sacred Text",
      subject: "Study Topic",
      learningMethod: "Learning Style",
      delete: "Remove",
      edit: "Modify",
      update: "Update Offer",
      add: "Add Offer",
      exit: "Cancel",
      code: "Offer Code",
      search: "Search your offers...",
      filterBy: "Filter Options",
      all: "All Offers",
      books: "By Books",
      subjects: "By Topics",
      methods: "By Methods",
      sortBy: "Sort Order",
      ascending: "A to Z",
      descending: "Z to A",
      offerAdded: "🎉 New offer created successfully!",
      offerUpdated: "✨ Offer updated successfully!",
      offerDeleted: "🗑️ Offer removed successfully!",
      confirmDelete: "Are you sure you want to remove this offer?",
      yes: "Yes, Remove",
      no: "Keep It",
      noOffers: "No offers yet. Start your learning journey!",
      language: "Language",
      totalOffers: "Total Offers",
      activeStudies: "Active Studies",
      completedSessions: "Completed",
      studyPartners: "Study Partners"
    },
    he: {
      myOffers: "ההצעות שלי ללמידה",
      addOffer: "יצירת הצעה חדשה",
      schedule: "מערכת לימודים",
      id: "תעודת זהות",
      book: "ספר קודש",
      subject: "נושא לימוד",
      learningMethod: "סגנון לימוד",
      delete: "הסרה",
      edit: "עריכה",
      update: "עדכון הצעה",
      add: "הוספת הצעה",
      exit: "ביטול",
      code: "קוד הצעה",
      search: "חיפוש בהצעות שלך...",
      filterBy: "אפשרויות סינון",
      all: "כל ההצעות",
      books: "לפי ספרים",
      subjects: "לפי נושאים",
      methods: "לפי שיטות",
      sortBy: "סדר מיון",
      ascending: "א' עד ת'",
      descending: "ת' עד א'",
      offerAdded: "🎉 הצעה חדשה נוצרה בהצלחה!",
      offerUpdated: "✨ ההצעה עודכנה בהצלחה!",
      offerDeleted: "🗑️ ההצעה הוסרה בהצלחה!",
      confirmDelete: "האם אתה בטוח שברצונך להסיר הצעה זו?",
      yes: "כן, הסר",
      no: "השאר",
      noOffers: "אין הצעות עדיין. התחל את מסע הלמידה שלך!",
      language: "שפה",
      totalOffers: "סך ההצעות",
      activeStudies: "לימודים פעילים",
      completedSessions: "הושלמו",
      studyPartners: "שותפי לימוד"
    }
  };

  const t = translations[language];
  const textDirection = language === 'he' ? 'rtl' : 'ltr';

  // Functions
  const getOffers = async () => {
    setLoading(true);
    try {
      await dispatch(getOffersByIdThunk(param.id));
      try{
        await dispatch(GetScheduleByIdThunk(param.id));
      } catch (error) {
        console.error("Error fetching schedules:", error);
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to load offers",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOffers();
  }, []);

  const addOffer = async () => {
    if (!offer.book || !offer.subject || !offer.mode) {
      setSnackbar({
        open: true,
        message: "Please fill all fields",
        severity: "warning"
      });
      return;
    }

    setLoading(true);
    try {
      await dispatch(AddOfferThunk(offer));
      setDialogOpen(false);
      setOffer({ personId: param.id, book: "", subject: "", mode: "" });
      setSnackbar({
        open: true,
        message: t.offerAdded,
        severity: "success"
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to add offer",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteOffer = async (code) => {
    setLoading(true);
    try {
      await dispatch(DeleteOfferThunk(code));
      setSnackbar({
        open: true,
        message: t.offerDeleted,
        severity: "success"
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to delete offer",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateOffer = async () => {
    if (!offer.book || !offer.subject || !offer.mode) {
      setSnackbar({
        open: true,
        message: "Please fill all fields",
        severity: "warning"
      });
      return;
    }

    setLoading(true);
    try {
      dispatch(editOffer(offer));
      await dispatch(UpdateOfferThunk(offer));
      setDialogOpen(false);
      setIsEditMode(false);
      setSnackbar({
        open: true,
        message: t.offerUpdated,
        severity: "success"
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to update offer",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
    handleMenuClose();
  };

  const filteredOffers = offers?.filter(offer => {
    const matchesSearch = 
      offer.book.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      offer.mode.toLowerCase().includes(searchTerm.toLowerCase());

    if (filterType === 'all') return matchesSearch;
    if (filterType === 'books') return matchesSearch && offer.book.length > 0;
    if (filterType === 'subjects') return matchesSearch && offer.subject.length > 0;
    if (filterType === 'methods') return matchesSearch && offer.mode.length > 0;

    return matchesSearch;
  });

  const sortedOffers = filteredOffers?.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.code - b.code;
    } else {
      return b.code - a.code;
    }
  });

  // Stats calculation
  const stats = {
    total: offers?.length || 0,
    active: schedules?.filter(o => o.available == false)?.length || 0,
    // completed: Math.floor((offers?.length || 0) * 0.3),
    // partners: Math.floor((offers?.length || 0) * 1.5)
  };

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: chavrutaColors.background.default,
      direction: textDirection,
      position: 'relative'
    }}>
      {/* Loading overlay */}
      {loading && (
        <Backdrop open={loading} sx={{ zIndex: 9999, color: '#fff' }}>
          <Box sx={{ textAlign: 'center' }}>
            <LinearProgress 
              sx={{ 
                width: 200, 
                mb: 2,
                '& .MuiLinearProgress-bar': {
                  background: `linear-gradient(90deg, ${chavrutaColors.secondary.main}, ${chavrutaColors.accent.main})`
                }
              }} 
            />
            <Typography variant="h6">Loading...</Typography>
          </Box>
        </Backdrop>
      )}

      <ModernAppBar position="static" elevation={0}>
        <Toolbar sx={{ py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <AutoStoriesIcon sx={{ fontSize: 40, mr: 2, color: chavrutaColors.secondary.main }} />
            <Box>
              <Typography variant="h4" component="div" sx={{ 
                fontWeight: 'bold',
                letterSpacing: '0.5px',
                background: `linear-gradient(45deg, ${chavrutaColors.secondary.main}, ${chavrutaColors.background.paper})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {t.myOffers}
              </Typography>
              <Typography variant="subtitle1" sx={{ opacity: 0.9, fontSize: '0.9rem' }}>
                {param.id} • {stats.total} {language === 'he' ? 'הצעות' : 'offers'}
              </Typography>
            </Box>
          </Box>

          <Stack direction="row" spacing={1}>
            <Tooltip title={t.language}>
              <IconButton 
                color="inherit" 
                onClick={handleLanguageChange}
                sx={{ 
                  bgcolor: alpha(chavrutaColors.secondary.main, 0.2),
                  '&:hover': { bgcolor: alpha(chavrutaColors.secondary.main, 0.3) }
                }}
              >
                <LanguageIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Toggle Theme">
              <IconButton 
                color="inherit" 
                onClick={() => setDarkMode(!darkMode)}
                sx={{ 
                  bgcolor: alpha(chavrutaColors.secondary.main, 0.2),
                  '&:hover': { bgcolor: alpha(chavrutaColors.secondary.main, 0.3) }
                }}
              >
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>

            <Tooltip title={t.filterBy}>
              <IconButton 
                color="inherit" 
                onClick={handleMenuOpen}
                sx={{ 
                  bgcolor: alpha(chavrutaColors.secondary.main, 0.2),
                  '&:hover': { bgcolor: alpha(chavrutaColors.secondary.main, 0.3) }
                }}
                >
                  <FilterListIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title={t.sortBy}>
                <IconButton 
                  color="inherit" 
                  onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                  sx={{ 
                    bgcolor: alpha(chavrutaColors.secondary.main, 0.2),
                    '&:hover': { bgcolor: alpha(chavrutaColors.secondary.main, 0.3) }
                  }}
                >
                  <SortIcon sx={{ 
                    transform: sortOrder === 'desc' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.3s ease'
                  }} />
                </IconButton>
              </Tooltip>
            </Stack>
          </Toolbar>
        </ModernAppBar>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          PaperProps={{
            sx: {
              borderRadius: '12px',
              boxShadow: `0 8px 25px ${alpha(chavrutaColors.primary.main, 0.15)}`,
              border: `1px solid ${alpha(chavrutaColors.secondary.main, 0.2)}`,
              mt: 1
            }
          }}
        >
          {[
            { key: 'all', label: t.all, icon: <StarIcon /> },
            { key: 'books', label: t.books, icon: <BookIcon /> },
            { key: 'subjects', label: t.subjects, icon: <SubjectIcon /> },
            { key: 'methods', label: t.methods, icon: <SchoolIcon /> }
          ].map((item) => (
            <MenuItem 
              key={item.key}
              onClick={() => {
                setFilterType(item.key);
                handleMenuClose();
              }}
              selected={filterType === item.key}
              sx={{
                borderRadius: '8px',
                mx: 1,
                my: 0.5,
                '&.Mui-selected': {
                  bgcolor: alpha(chavrutaColors.secondary.main, 0.1),
                  color: chavrutaColors.primary.main,
                  fontWeight: 'bold'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {item.icon}
                {item.label}
              </Box>
            </MenuItem>
          ))}
        </Menu>

        <Container maxWidth="xl" sx={{ py: 4 }}>
          {/* Stats Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {[
              { title: t.totalOffers, value: stats.total, icon: <AutoStoriesIcon />, color: chavrutaColors.primary.main },
              { title: t.activeStudies, value: stats.active, icon: <TrendingUpIcon />, color: chavrutaColors.success },
              // { title: t.completedSessions, value: stats.completed, icon: <StarIcon />, color: chavrutaColors.warning },
              // { title: t.studyPartners, value: stats.partners, icon: <GroupsIcon />, color: chavrutaColors.info }
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Grow in={true} timeout={500 + (index * 200)}>
                  <StatsCard>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box>
                        <Typography variant="h4" fontWeight="bold" color={stat.color}>
                          {stat.value}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" fontWeight="medium">
                          {stat.title}
                        </Typography>
                      </Box>
                      <Box sx={{ 
                        p: 1.5, 
                        borderRadius: '12px', 
                        bgcolor: alpha(stat.color, 0.1),
                        color: stat.color
                      }}>
                        {stat.icon}
                      </Box>
                    </Box>
                  </StatsCard>
                </Grow>
              </Grid>
            ))}
          </Grid>

          {/* Search and Actions */}
          <Paper 
            elevation={0} 
            sx={{ 
              p: 3, 
              borderRadius: '20px',
              background: `linear-gradient(135deg, ${chavrutaColors.background.paper} 0%, ${chavrutaColors.background.elevated} 100%)`,
              border: `1px solid ${alpha(chavrutaColors.secondary.main, 0.1)}`,
              mb: 4
            }}
          >
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                <SearchField
                  fullWidth
                  variant="outlined"
                  placeholder={t.search}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: chavrutaColors.secondary.main }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                  <GradientButton
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => {
                      setIsEditMode(false);
                      setOffer({ personId: param.id, book: "", subject: "", mode: "" });
                      setDialogOpen(true);
                    }}
                    sx={{ minWidth: 150 }}
                  >
                    {t.addOffer}
                  </GradientButton>

                  <GradientButton
                    variant="contained"
                    startIcon={<CalendarTodayIcon />}
                    onClick={() => navigate(`/schedule/${param.id}`)}
                    sx={{ 
                      minWidth: 150,
                      background: `linear-gradient(135deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.primary.dark} 100%)`,
                      '&:hover': {
                        background: `linear-gradient(135deg, ${chavrutaColors.primary.dark} 0%, ${chavrutaColors.primary.main} 100%)`,
                      }
                    }}
                  >
                    {t.schedule}
                  </GradientButton>
                </Stack>
              </Grid>
            </Grid>
          </Paper>

          {/* Content */}
          {loading ? (
            // Loading skeletons
            <Grid container spacing={3}>
              {[...Array(6)].map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ borderRadius: '20px', overflow: 'hidden' }}>
                    <Skeleton variant="rectangular" height={120} />
                    <CardContent>
                      <Skeleton variant="text" height={30} />
                      <Skeleton variant="text" height={20} />
                      <Skeleton variant="text" height={20} />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : isMobile ? (
            // Mobile view - Enhanced Card layout
            <Box>
              {sortedOffers?.length > 0 ? (
                <Grid container spacing={3}>
                  {sortedOffers.map((item, index) => (
                    <Grid item xs={12} sm={6} key={item.code}>
                      <Grow in={true} timeout={500 + (index * 100)}>
                        <AnimatedCard>
                          <CardHeader className="card-header">
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Badge 
                                  badgeContent={item.code} 
                                  color="secondary"
                                  sx={{
                                    '& .MuiBadge-badge': {
                                      bgcolor: chavrutaColors.secondary.main,
                                      color: chavrutaColors.secondary.contrastText,
                                      fontWeight: 'bold'
                                    }
                                  }}
                                >
                                  <AutoStoriesIcon sx={{ fontSize: 30 }} />
                                </Badge>
                                <Typography variant="h6" fontWeight="bold">
                                  {t.code}
                                </Typography>
                              </Box>
                              <Chip 
                                label={item.subject}
                                sx={{
                                  bgcolor: alpha(chavrutaColors.secondary.main, 0.2),
                                  color: chavrutaColors.secondary.contrastText,
                                  fontWeight: 'bold',
                                  fontSize: '0.8rem'
                                }}
                                size="small"
                              />
                            </Box>
                          </CardHeader>

                          <CardContent sx={{ flexGrow: 1, p: 3 }}>
                            <Stack spacing={2.5}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ 
                                  p: 1, 
                                  borderRadius: '10px', 
                                  bgcolor: alpha(chavrutaColors.primary.main, 0.1),
                                  color: chavrutaColors.primary.main
                                }}>
                                  <BookIcon />
                                </Box>
                                <Box>
                                  <Typography variant="caption" color="text.secondary" fontWeight="medium">
                                    {t.book}
                                  </Typography>
                                  <Typography variant="body1" fontWeight="bold" color="text.primary">
                                    {item.book}
                                  </Typography>
                                </Box>
                              </Box>

                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ 
                                  p: 1, 
                                  borderRadius: '10px', 
                                  bgcolor: alpha(chavrutaColors.secondary.main, 0.1),
                                  color: chavrutaColors.secondary.main
                                }}>
                                  <SubjectIcon />
                                </Box>
                                <Box>
                                  <Typography variant="caption" color="text.secondary" fontWeight="medium">
                                    {t.subject}
                                  </Typography>
                                  <Typography variant="body1" fontWeight="bold" color="text.primary">
                                    {item.subject}
                                  </Typography>
                                </Box>
                              </Box>

                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ 
                                  p: 1, 
                                  borderRadius: '10px', 
                                  bgcolor: alpha(chavrutaColors.accent.main, 0.1),
                                  color: chavrutaColors.accent.main
                                }}>
                                  <SchoolIcon />
                                </Box>
                                <Box>
                                  <Typography variant="caption" color="text.secondary" fontWeight="medium">
                                    {t.learningMethod}
                                  </Typography>
                                  <Typography variant="body1" fontWeight="bold" color="text.primary">
                                    {item.mode}
                                  </Typography>
                                </Box>
                              </Box>
                            </Stack>
                          </CardContent>

                          <Divider sx={{ bgcolor: alpha(chavrutaColors.secondary.main, 0.1) }} />

                          <CardActions sx={{ justifyContent: 'space-between', p: 2.5 }}>
                            <Stack direction="row" spacing={1}>
                              <Tooltip title={t.edit}>
                                <IconButton 
                                  sx={{
                                    bgcolor: alpha(chavrutaColors.secondary.main, 0.1),
                                    color: chavrutaColors.secondary.main,
                                    '&:hover': {
                                      bgcolor: alpha(chavrutaColors.secondary.main, 0.2),
                                      transform: 'scale(1.1)'
                                    }
                                  }}
                                  onClick={() => {
                                    setOffer(item);
                                    setIsEditMode(true);
                                    setDialogOpen(true);
                                  }}
                                >
                                  <EditIcon />
                                </IconButton>
                              </Tooltip>

                              <Tooltip title={t.delete}>
                                <IconButton 
                                  sx={{
                                    bgcolor: alpha(chavrutaColors.error, 0.1),
                                    color: chavrutaColors.error,
                                    '&:hover': {
                                      bgcolor: alpha(chavrutaColors.error, 0.2),
                                      transform: 'scale(1.1)'
                                    }
                                  }}
                                  onClick={() => deleteOffer(item.code)}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </Tooltip>
                            </Stack>

                            <Stack direction="row" spacing={1}>
                              <Tooltip title="View Details">
                                <IconButton 
                                  sx={{
                                    bgcolor: alpha(chavrutaColors.info, 0.1),
                                    color: chavrutaColors.info,
                                    '&:hover': {
                                      bgcolor: alpha(chavrutaColors.info, 0.2),
                                      transform: 'scale(1.1)'
                                    }
                                  }}
                                >
                                  <VisibilityIcon />
                                </IconButton>
                              </Tooltip>

                              <Tooltip title="Add to Favorites">
                                <IconButton 
                                  sx={{
                                    bgcolor: alpha(chavrutaColors.warning, 0.1),
                                    color: chavrutaColors.warning,
                                    '&:hover': {
                                      bgcolor: alpha(chavrutaColors.warning, 0.2),
                                      transform: 'scale(1.1)'
                                    }
                                  }}
                                >
                                  <FavoriteIcon />
                                </IconButton>
                              </Tooltip>
                            </Stack>
                          </CardActions>
                        </AnimatedCard>
                      </Grow>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 6, 
                    textAlign: 'center',
                    borderRadius: '24px',
                    background: `linear-gradient(135deg, ${chavrutaColors.background.paper} 0%, ${chavrutaColors.background.elevated} 100%)`,
                    border: `2px dashed ${alpha(chavrutaColors.secondary.main, 0.3)}`
                  }}
                >
                  <Box sx={{ animation: `${float} 3s ease-in-out infinite` }}>
                    <MenuBookIcon sx={{ 
                                          fontSize: 80, 
                                          color: chavrutaColors.secondary.main, 
                                          mb: 3, 
                                          opacity: 0.8 
                                        }} />
                                      </Box>
                                      <Typography variant="h4" color={chavrutaColors.text.primary} gutterBottom fontWeight="bold">
                                        {t.noOffers}
                                      </Typography>
                                      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 400, mx: 'auto' }}>
                                        {language === 'he' 
                                          ? 'התחל את מסע הלמידה שלך עם חברותא. צור הצעה ומצא שותפים ללמידה.'
                                          : 'Begin your learning journey with Chavruta. Create an offer and find study partners.'
                                        }
                                      </Typography>
                                      <GradientButton
                                        variant="contained"
                                        size="large"
                                        startIcon={<AddIcon />}
                                        onClick={() => {
                                          setIsEditMode(false);
                                          setOffer({ personId: param.id, book: "", subject: "", mode: "" });
                                          setDialogOpen(true);
                                        }}
                                        sx={{ 
                                          mt: 2,
                                          px: 4,
                                          py: 1.5,
                                          fontSize: '1.1rem'
                                        }}
                                      >
                                        {t.addOffer}
                                      </GradientButton>
                                    </Paper>
                                  )}
                                </Box>
                              ) : (
                                // Desktop view - Enhanced Table layout
                                <TableContainer 
                                component={Paper} 
                                sx={{ 
                                  borderRadius: '20px',
                                  boxShadow: `0 8px 32px ${alpha(chavrutaColors.primary.main, 0.12)}`,
                                  overflow: 'hidden',
                                  border: `1px solid ${alpha(chavrutaColors.secondary.main, 0.1)}`,
                                  direction: 'ltr' // מאלץ כיוון שמאל לימין
                                }}
                              >
                                <Table sx={{ direction: 'ltr' }}>
                                  <TableHead>
                                    <TableRow sx={{ direction: 'ltr' }}>
                                    <StyledTableCell align="center" sx={{ direction: 'ltr' ,width:'0'}}>
                                      </StyledTableCell>
                                      <StyledTableCell align="center" sx={{ direction: 'ltr' }}>
                                        {t.code}
                                      </StyledTableCell>
                                      <StyledTableCell align="center" sx={{ direction: 'ltr' }}>
                                        {t.book}
                                      </StyledTableCell>
                                      <StyledTableCell align="center" sx={{ direction: 'ltr' }}>
                                        {t.subject}
                                      </StyledTableCell>
                                      <StyledTableCell align="center" sx={{ direction: 'ltr' }}>
                                        {t.learningMethod}
                                      </StyledTableCell>
                                      <StyledTableCell align="center" sx={{ direction: 'ltr' }}>
                                        {t.edit}
                                      </StyledTableCell>
                                      <StyledTableCell align="center" sx={{ direction: 'ltr' }}>
                                        {t.delete}
                                      </StyledTableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody sx={{ direction: 'ltr' }}>
                                    {sortedOffers?.length > 0 ? (
                                      sortedOffers.map((item, index) => (
                                        <Zoom 
                                          in={true} 
                                          style={{ transitionDelay: `${index * 100}ms` }}
                                          key={item.code}
                                        >
                                          <StyledTableRow sx={{ direction: 'ltr' }}>
                                            <StyledTableCell align="center" sx={{ direction: 'ltr' }}>
                                              <Chip 
                                                label={item.code}
                                                sx={{
                                                  bgcolor: alpha(chavrutaColors.primary.main, 0.1),
                                                  color: chavrutaColors.primary.main,
                                                  fontWeight: 'bold',
                                                  fontSize: '0.9rem'
                                                }}
                                              />
                                            </StyledTableCell>
                                            <StyledTableCell align="center" sx={{ direction: 'ltr' }}>
                                              <Typography variant="body1" fontWeight="medium">
                                                {item.book}
                                              </Typography>
                                            </StyledTableCell>
                                            <StyledTableCell align="center" sx={{ direction: 'ltr' }}>
                                              <Chip 
                                                label={item.subject}
                                                sx={{
                                                  bgcolor: alpha(chavrutaColors.secondary.main, 0.1),
                                                  color: chavrutaColors.secondary.main,
                                                  fontWeight: 'medium'
                                                }}
                                                size="small"
                                              />
                                            </StyledTableCell>
                                            <StyledTableCell align="center" sx={{ direction: 'ltr' }}>
                                              <Typography variant="body1" fontWeight="medium">
                                                {item.mode}
                                              </Typography>
                                            </StyledTableCell>
                                            <StyledTableCell align="center" sx={{ direction: 'ltr' }}>
                                              <StyledFab 
                                                size="small" 
                                                aria-label={t.edit}
                                                onClick={() => {
                                                  setOffer(item);
                                                  setIsEditMode(true);
                                                  setDialogOpen(true);
                                                }}
                                                sx={{
                                                  background: `linear-gradient(135deg, ${chavrutaColors.secondary.main} 0%, ${chavrutaColors.accent.main} 100%)`,
                                                }}
                                              >
                                                <EditIcon />
                                              </StyledFab>
                                            </StyledTableCell>
                                            <StyledTableCell align="center" sx={{ direction: 'ltr' }}>
                                              <StyledFab 
                                                size="small" 
                                                aria-label={t.delete}
                                                onClick={() => deleteOffer(item.code)}
                                                sx={{
                                                  background: `linear-gradient(135deg, ${chavrutaColors.error} 0%, #c0392b 100%)`,
                                                  '&:hover': {
                                                    background: `linear-gradient(135deg, #c0392b 0%, ${chavrutaColors.error} 100%)`,
                                                  }
                                                }}
                                              >
                                                <DeleteIcon />
                                              </StyledFab>
                                            </StyledTableCell>
                                          </StyledTableRow>
                                        </Zoom>
                                      ))
                                    ) : (
                                      <TableRow>
                                        <TableCell colSpan={6} align="center" sx={{ py: 8 }}>
                                          <Box sx={{ animation: `${float} 3s ease-in-out infinite` }}>
                                            <MenuBookIcon sx={{ 
                                              fontSize: 60, 
                                              color: chavrutaColors.secondary.main, 
                                              mb: 2, 
                                              opacity: 0.7 
                                            }} />
                                          </Box>
                                          <Typography variant="h5" color={chavrutaColors.text.primary} gutterBottom fontWeight="bold">
                                            {t.noOffers}
                                          </Typography>
                                          <GradientButton
                                            variant="contained"
                                            startIcon={<AddIcon />}
                                            onClick={() => {
                                              setIsEditMode(false);
                                              setOffer({ personId: param.id, book: "", subject: "", mode: "" });
                                              setDialogOpen(true);
                                            }}
                                            sx={{ mt: 3 }}
                                          >
                                            {t.addOffer}
                                          </GradientButton>
                                        </TableCell>
                                      </TableRow>
                                    )}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                              )}
                            </Container>

                            {/* Floating Action Button */}
                            <FloatingActionButton
                              onClick={() => {
                                setIsEditMode(false);
                                setOffer({ personId: param.id, book: "", subject: "", mode: "" });
                                setDialogOpen(true);
                              }}
                            >
                              <AddIcon sx={{ fontSize: 30 }} />
                            </FloatingActionButton>

                            {/* Modern Dialog */}
                            <Backdrop 
  open={dialogOpen} 
  onClick={() => setDialogOpen(false)}
  sx={{ 
    zIndex: 1200, 
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    p: 2
  }}
>
  <Grow in={dialogOpen} timeout={300}>
    <ModernDialog 
      onClick={(e) => e.stopPropagation()}
      sx={{
        position: 'relative',
        top: 'auto',
        left: 'auto',
        transform: 'none',
        margin: 0
      }}
    >
      <CardHeader sx={{ pb: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <AutoStoriesIcon sx={{ fontSize: 32 }} />
            <Typography variant="h4" fontWeight="bold">
              {isEditMode ? t.edit : t.addOffer}
            </Typography>
          </Box>
          <IconButton 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setDialogOpen(false);
                  }}
                  sx={{ 
                    color: 'white',
                    bgcolor: alpha('#fff', 0.1),
                    '&:hover': { bgcolor: alpha('#fff', 0.2) },
                    zIndex: 1
                  }}
                >
                  <CloseIcon />
                </IconButton>
        </Box>
      </CardHeader>


                                  <Box sx={{ p: 4 }}>
                                    <Grid container spacing={4}>
                                      <Grid item xs={12}>
                                        <Paper 
                                          sx={{ 
                                            p: 3, 
                                            borderRadius: '16px',
                                            bgcolor: alpha(chavrutaColors.primary.main, 0.05),
                                            border: `1px solid ${alpha(chavrutaColors.primary.main, 0.1)}`
                                          }}
                                        >
                                          <Typography variant="h6" fontWeight="bold" gutterBottom color={chavrutaColors.primary.main}>
                                            {t.id}
                                          </Typography>
                                          <Typography variant="h5" fontWeight="bold" color={chavrutaColors.text.primary}>
                                            {param.id}
                                          </Typography>
                                        </Paper>
                                      </Grid>

                                      <Grid item xs={12}>
                                        <TextField
                                          fullWidth
                                          label={t.book}
                                          variant="outlined"
                                          value={offer.book}
                                          onChange={(e) => setOffer({ ...offer, book: e.target.value })}
                                          InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                <BookIcon sx={{ color: chavrutaColors.primary.main }} />
                                              </InputAdornment>
                                            ),
                                          }}
                                          sx={{
                                            '& .MuiOutlinedInput-root': {
                                              borderRadius: '12px',
                                              '&:hover fieldset': {
                                                borderColor: chavrutaColors.secondary.main,
                                              },
                                              '&.Mui-focused fieldset': {
                                                borderColor: chavrutaColors.primary.main,
                                              }
                                            }
                                          }}
                                        />
                                      </Grid>

                                      <Grid item xs={12}>
                                        <TextField
                                          fullWidth
                                          label={t.subject}
                                          variant="outlined"
                                          value={offer.subject}
                                          onChange={(e) => setOffer({ ...offer, subject: e.target.value })}
                                          InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                <SubjectIcon sx={{ color: chavrutaColors.secondary.main }} />
                                              </InputAdornment>
                                            ),
                                          }}
                                          sx={{
                                            '& .MuiOutlinedInput-root': {
                                              borderRadius: '12px',
                                              '&:hover fieldset': {
                                                borderColor: chavrutaColors.secondary.main,
                                              },
                                              '&.Mui-focused fieldset': {
                                                borderColor: chavrutaColors.primary.main,
                                              }
                                            }
                                          }}
                                        />
                                      </Grid>

                                      <Grid item xs={12}>
                                        <TextField
                                          fullWidth
                                          label={t.learningMethod}
                                          variant="outlined"
                                          value={offer.mode}
                                          onChange={(e) => setOffer({ ...offer, mode: e.target.value })}
                                          InputProps={{
                                            startAdornment: (
                                              <InputAdornment position="start">
                                                <SchoolIcon sx={{ color: chavrutaColors.accent.main }} />
                                              </InputAdornment>
                                            ),
                                          }}
                                          sx={{
                                            '& .MuiOutlinedInput-root': {
                                              borderRadius: '12px',
                                              '&:hover fieldset': {
                                                borderColor: chavrutaColors.secondary.main,
                                              },
                                              '&.Mui-focused fieldset': {
                                                borderColor: chavrutaColors.primary.main,
                                              }
                                            }
                                          }}
                                        />
                                      </Grid>
                                    </Grid>

                                    <Stack direction="row" justifyContent="flex-end" spacing={2} sx={{ mt: 4 }}>
                                      <Button
                                        variant="outlined"
                                        onClick={() => setDialogOpen(false)}
                                        sx={{ 
                                          borderRadius: '12px',
                                          px: 3,
                                          py: 1,
                                          borderColor: chavrutaColors.text.secondary,
                                          color: chavrutaColors.text.secondary,
                                          '&:hover': {
                                            borderColor: chavrutaColors.primary.main,
                                            color: chavrutaColors.primary.main,
                                          }
                                        }}
                                      >
                                        {t.exit}
                                      </Button>

                                      <GradientButton
                                        variant="contained"
                                        onClick={isEditMode ? updateOffer : addOffer}
                                        disabled={loading}
                                        sx={{ px: 4, py: 1 }}
                                      >
                                        {loading ? (
                                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <LinearProgress size={20} sx={{ color: 'white' }} />
                                            {language === 'he' ? 'מעבד...' : 'Processing...'}
                                          </Box>
                                        ) : (
                                          isEditMode ? t.update : t.add
                                        )}
                                      </GradientButton>
                                    </Stack>
                                    </Box>
    </ModernDialog>
  </Grow>
</Backdrop>

                            {/* Enhanced Snackbar */}
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
                                  },
                                  '& .MuiAlert-message': {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1
                                  }
                                }}
                              >
                                {snackbar.message}
                              </Alert>
                            </Snackbar>
                          </Box>
                        );
                      };

// *************************************
// // In the name of God
// import React, { useRef, useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { getOffersByIdThunk } from "../../redux/Offers/getOffersByIdThunk";
// import { AddOfferThunk } from "../../redux/Offers/addOfferThunk";
// import { DeleteOfferThunk } from "../../redux/Offers/deleteOffersThunk";
// import { UpdateOfferThunk } from "../../redux/Offers/updateOffersThunk";
// import { editOffer } from "../../redux/Offers/offersSlice";

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
//   Dialog,
//   DialogContent,
//   IconButton,
//   Fab,
//   Zoom,
//   Slide,
//   Grow,
//   Chip,
//   Tooltip,
//   AppBar,
//   Toolbar,
//   useMediaQuery,
//   Card,
//   CardContent,
//   CardActions,
//   Divider,
//   Grid,
//   Avatar,
//   useTheme,
//   alpha,
//   Menu,
//   MenuItem,
//   InputAdornment,
//   Snackbar,
//   Alert,
//   Fade,
//   CircularProgress,
//   keyframes
// } from "@mui/material";

// // Icons
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import BookIcon from '@mui/icons-material/Book';
// import SubjectIcon from '@mui/icons-material/Subject';
// import SchoolIcon from '@mui/icons-material/School';
// import CloseIcon from '@mui/icons-material/Close';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
// import SearchIcon from '@mui/icons-material/Search';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import SortIcon from '@mui/icons-material/Sort';
// import LanguageIcon from '@mui/icons-material/Language';
// import AutoStoriesIcon from '@mui/icons-material/AutoStories';

// // Styled components
// import { styled } from '@mui/material/styles';
// import "./offer.css";

// // צבעי חברותא
// const chavrutaColors = {
//   primary: {
//     main: '#2E5266',
//     dark: '#1A3A4A',
//     light: '#4A7C95',
//     contrastText: '#FFFFFF'
//   },
//   secondary: {
//     main: '#D4A574',
//     dark: '#B8935F',
//     light: '#E6C299',
//     contrastText: '#2E5266'
//   },
//   accent: {
//     main: '#8B4513',
//     dark: '#6B340F',
//     light: '#A0621F'
//   },
//   background: {
//     default: '#F8F9FA',
//     paper: '#FFFFFF',
//     elevated: '#FEFEFE'
//   },
//   text: {
//     primary: '#2E5266',
//     secondary: '#6B7280'
//   }
// };

// // אנימציות
// const float = keyframes`
//   0%, 100% { transform: translateY(0px); }
//   50% { transform: translateY(-10px); }
// `;

// const dialogSlideIn = keyframes`
//   0% {
//     opacity: 0;
//     transform: scale(0.8) translateY(-50px);
//   }
//   50% {
//     opacity: 0.8;
//     transform: scale(1.05) translateY(-10px);
//   }
//   100% {
//     opacity: 1;
//     transform: scale(1) translateY(0);
//   }
// `;

// const dialogPulse = keyframes`
//   0% {
//     box-shadow: 0 25px 50px ${alpha(chavrutaColors.primary.main, 0.3)};
//   }
//   50% {
//     box-shadow: 0 30px 60px ${alpha(chavrutaColors.primary.main, 0.4)};
//   }
//   100% {
//     box-shadow: 0 25px 50px ${alpha(chavrutaColors.primary.main, 0.3)};
//   }
// `;

// // Styled Components
// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   fontWeight: 'medium',
//   fontSize: '0.95rem',
//   padding: theme.spacing(2),
//   borderBottom: `1px solid ${alpha(theme.palette.divider, 0.7)}`,
//   '&.MuiTableCell-head': {
//     backgroundColor: chavrutaColors.primary.main,
//     color: chavrutaColors.primary.contrastText,
//     fontWeight: 'bold',
//     fontSize: '1rem'
//   }
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   transition: 'background-color 0.2s ease, transform 0.2s ease',
//   '&:nth-of-type(odd)': {
//     backgroundColor: alpha(chavrutaColors.primary.light, 0.05),
//   },
//   '&:hover': {
//     backgroundColor: alpha(chavrutaColors.primary.light, 0.1),
//     transform: 'translateY(-2px)',
//     boxShadow: `0 4px 8px ${alpha(chavrutaColors.primary.main, 0.1)}`,
//     cursor: 'pointer'
//   },
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// const StyledFab = styled(Fab)(({ theme }) => ({
//   boxShadow: `0 4px 12px ${alpha(chavrutaColors.primary.main, 0.15)}`,
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     transform: 'translateY(-2px)',
//     boxShadow: `0 6px 16px ${alpha(chavrutaColors.primary.main, 0.2)}`,
//   }
// }));

// const AnimatedCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   borderRadius: theme.spacing(2),
//   boxShadow: `0 8px 24px ${alpha(chavrutaColors.primary.main, 0.12)}`,
//   overflow: 'hidden',
//   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   '&:hover': {
//     transform: 'translateY(-8px)',
//     boxShadow: `0 16px 32px ${alpha(chavrutaColors.primary.main, 0.15)}`,
//   }
// }));

// const CardHeader = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(3),
//   background: `linear-gradient(135deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.primary.dark} 100%)`,
//   color: chavrutaColors.primary.contrastText,
//   position: 'relative',
//   overflow: 'hidden',
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     background: 'radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
//   }
// }));

// const GradientButton = styled(Button)(({ theme }) => ({
//   background: `linear-gradient(90deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.secondary.main} 100%)`,
//   color: chavrutaColors.primary.contrastText,
//   fontWeight: 'bold',
//   padding: theme.spacing(1, 3),
//   borderRadius: theme.spacing(5),
//   transition: 'all 0.3s ease',
//   boxShadow: `0 4px 12px ${alpha(chavrutaColors.primary.main, 0.15)}`,
//   '&:hover': {
//     boxShadow: `0 6px 16px ${alpha(chavrutaColors.primary.main, 0.2)}`,
//     transform: 'translateY(-2px)',
//   }
// }));

// const ResponsiveDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialog-paper': {
//     borderRadius: '24px',
//     background: `linear-gradient(145deg, ${chavrutaColors.background.paper} 0%, ${chavrutaColors.background.elevated} 100%)`,
//     boxShadow: `0 25px 50px ${alpha(chavrutaColors.primary.main, 0.3)}`,
//     border: `1px solid ${alpha(chavrutaColors.secondary.main, 0.2)}`,
//     overflow: 'hidden',
//     margin: theme.spacing(2),
//     maxHeight: 'calc(100vh - 32px)',
//     width: '100%',
//     maxWidth: '600px',
//     position: 'relative',
//     backdropFilter: 'blur(20px)',
//     WebkitBackdropFilter: 'blur(20px)',
//     animation: `${dialogSlideIn} 0.4s cubic-bezier(0.4, 0, 0.2, 1)`,

//     [theme.breakpoints.down('sm')]: {
//       margin: theme.spacing(1),
//       maxHeight: 'calc(100vh - 16px)',
//       borderRadius: '20px',
//       width: 'calc(100vw - 16px)',
//       maxWidth: 'calc(100vw - 16px)',
//     },

//     [theme.breakpoints.down('xs')]: {
//       margin: theme.spacing(0.5),
//       maxHeight: 'calc(100vh - 8px)',
//       borderRadius: '16px',
//       width: 'calc(100vw - 8px)',
//       maxWidth: 'calc(100vw - 8px)',
//     }
//   },

//   '& .MuiDialog-container': {
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: theme.spacing(2),

//     [theme.breakpoints.down('sm')]: {
//       padding: theme.spacing(1),
//       alignItems: 'center',
//     }
//   },

//   '& .MuiBackdrop-root': {
//     backgroundColor: `rgba(46, 82, 102, 0.8)`,
//     backdropFilter: 'blur(12px)',
//     WebkitBackdropFilter: 'blur(12px)',
//   }
// }));

// const DialogHeader = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(3),
//   background: `linear-gradient(135deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.primary.dark} 100%)`,
//   color: chavrutaColors.primary.contrastText,
//   position: 'relative',
//   overflow: 'hidden',

//   '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     background: 'radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
//     pointerEvents: 'none',
//   },

//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     width: '100%',
//     height: '2px',
//     background: `linear-gradient(90deg, ${chavrutaColors.secondary.main} 0%, ${chavrutaColors.accent.main} 100%)`,
//   },

//   [theme.breakpoints.down('sm')]: {
//     padding: theme.spacing(2),
//   }
// }));

// const DialogBody = styled(Box)(({ theme }) => ({
//   padding: theme.spacing(4),
//   background: `linear-gradient(180deg, ${chavrutaColors.background.paper} 0%, ${alpha(chavrutaColors.background.elevated, 0.5)} 100%)`,

//   [theme.breakpoints.down('sm')]: {
//     padding: theme.spacing(2),
//   },

//   [theme.breakpoints.down('xs')]: {
//     padding: theme.spacing(1.5),
//   }
// }));

// export const Offer = () => {
//   const dispatch = useDispatch();
//   const param = useParams();
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const isTablet = useMediaQuery(theme.breakpoints.down('md'));

//   // State
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterType, setFilterType] = useState('all');
//   const [sortOrder, setSortOrder] = useState('asc');
//   const [anchorEl, setAnchorEl] = useState(null);
//   const [language, setLanguage] = useState('en');
//   const [loading, setLoading] = useState(false);
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [snackbar, setSnackbar] = useState({
//     open: false,
//     message: '',
//     severity: 'success'
//   });

//   // Redux state
//   const offers = useSelector(state => state.offers.offers);
//   const [offer, setOffer] = useState({
//     personId: param.id,
//     book: "",
//     subject: "",
//     mode: ""
//   });

//   // Translations
//   const translations = {
//     en: {
//       myOffers: "My Offers",
//       addOffer: "Add Offer",
//       schedule: "Schedule",
//       id: "ID",
//       book: "Book",
//       subject: "Subject",
//       learningMethod: "Learning Method",
//       delete: "Delete",
//       edit: "Edit",
//       update: "Update",
//       add: "Add",
//       exit: "Exit",
//       code: "Code",
//       search: "Search offers...",
//       filterBy: "Filter by",
//       all: "All",
//       books: "Books",
//       subjects: "Subjects",
//       methods: "Methods",
//       sortBy: "Sort by",
//       ascending: "Ascending",
//       descending: "Descending",
//       offerAdded: "Offer added successfully!",
//       offerUpdated: "Offer updated successfully!",
//       offerDeleted: "Offer deleted successfully!",
//       confirmDelete: "Are you sure you want to delete this offer?",
//       yes: "Yes",
//       no: "No",
//       noOffers: "No offers found. Add your first offer!",
//       language: "Language",
//       fillDetails: "Fill in the details carefully"
//     },
//     he: {
//       myOffers: "ההצעות שלי",
//       addOffer: "הוספת הצעה",
//       schedule: "מערכת שעות",
//       id: "ת.ז",
//       book: "ספר",
//       subject: "נושא",
//       learningMethod: "אופן הלמידה",
//       delete: "מחק",
//       edit: "ערוך",
//       update: "עדכון",
//       add: "הוספה",
//       exit: "יציאה",
//       code: "קוד",
//       search: "חיפוש הצעות...",
//       filterBy: "סנן לפי",
//       all: "הכל",
//       books: "ספרים",
//       subjects: "נושאים",
//       methods: "שיטות",
//       sortBy: "מיין לפי",
//       ascending: "סדר עולה",
//       descending: "סדר יורד",
//       offerAdded: "ההצעה נוספה בהצלחה!",
//       offerUpdated: "ההצעה עודכנה בהצלחה!",
//       offerDeleted: "ההצעה נמחקה בהצלחה!",
//       confirmDelete: "האם אתה בטוח שברצונך למחוק הצעה זו?",
//       yes: "כן",
//       no: "לא",
//       noOffers: "לא נמצאו הצעות. הוסף את ההצעה הראשונה שלך!",
//       language: "שפה",
//       fillDetails: "מלא את הפרטים בקפידה"
//     }
//   };

//   const t = translations[language];
//   const textDirection = language === 'he' ? 'rtl' : 'ltr';

//   // Functions
//   const getOffers = async () => {
//     try {
//       await dispatch(getOffersByIdThunk(param.id));
//     } catch (error) {
//       console.error('Failed to load offers:', error);
//     }
//   };

//   useEffect(() => {
//     getOffers();
//   }, []);

//   const addOffer = async () => {
//     if (!offer.book || !offer.subject || !offer.mode) {
//       setSnackbar({
//         open: true,
//         message: "Please fill all fields",
//         severity: "warning"
//       });
//       return;
//     }

//     setLoading(true);
//     try {
//       await dispatch(AddOfferThunk(offer));
//       setDialogOpen(false);
//       setOffer({ personId: param.id, book: "", subject: "", mode: "" });
//       setSnackbar({
//         open: true,
//         message: t.offerAdded,
//         severity: "success"
//       });
//     } catch (error) {
//       setSnackbar({
//         open: true,
//         message: "Failed to add offer",
//         severity: "error"
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteOffer = async (code) => {
//     try {
//       await dispatch(DeleteOfferThunk(code));
//       setSnackbar({
//         open: true,
//         message: t.offerDeleted,
//         severity: "success"
//       });
//     } catch (error) {
//       setSnackbar({
//         open: true,
//         message: "Failed to delete offer",
//         severity: "error"
//       });
//     }
//   };

//   const updateOffer = async () => {
//     if (!offer.book || !offer.subject || !offer.mode) {
//       setSnackbar({
//         open: true,
//         message: "Please fill all fields",
//         severity: "warning"
//       });
//       return;
//     }

//     setLoading(true);
//     try {
//       dispatch(editOffer(offer));
//       await dispatch(UpdateOfferThunk(offer));
//       setDialogOpen(false);
//       setIsEditMode(false);
//       setSnackbar({
//         open: true,
//         message: t.offerUpdated,
//         severity: "success"
//       });
//     } catch (error) {
//       setSnackbar({
//         open: true,
//         message: "Failed to update offer",
//         severity: "error"
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLanguageChange = () => {
//     setLanguage(language === 'en' ? 'he' : 'en');
//     handleMenuClose();
//   };

//   const openAddDialog = () => {
//     setIsEditMode(false);
//     setOffer({ personId: param.id, book: "", subject: "", mode: "" });
//     setDialogOpen(true);
//   };

//   const openEditDialog = (item) => {
//     setOffer(item);
//     setIsEditMode(true);
//     setDialogOpen(true);
//   };

//   const filteredOffers = offers?.filter(offer => {
//     const matchesSearch =
//       offer.book.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       offer.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       offer.mode.toLowerCase().includes(searchTerm.toLowerCase());

//     if (filterType === 'all') return matchesSearch;
//     if (filterType === 'books') return matchesSearch && offer.book.length > 0;
//     if (filterType === 'subjects') return matchesSearch && offer.subject.length > 0;
//     if (filterType === 'methods') return matchesSearch && offer.mode.length > 0;

//     return matchesSearch;
//   });

//   const sortedOffers = filteredOffers?.sort((a, b) => {
//     if (sortOrder === 'asc') {
//       return a.code - b.code;
//     } else {
//       return b.code - a.code;
//     }
//   });

//   return (
//     <Box sx={{
//       minHeight: '100vh',
//       bgcolor: chavrutaColors.background.default,
//       direction: textDirection
//     }}>
//       {/* Header */}
//       <AppBar position="static" elevation={0} sx={{
//         background: `linear-gradient(135deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.primary.dark} 100%)`,
//       }}>
//         <Toolbar>
//           <Typography variant="h5" component="div" sx={{
//             flexGrow: 1,
//             fontWeight: 'bold',
//             letterSpacing: '0.5px'
//           }}>
//             {t.myOffers}
//           </Typography>

//           <Box sx={{ display: 'flex', gap: 1 }}>
//             <Tooltip title={t.language}>
//               <IconButton color="inherit" onClick={handleLanguageChange}>
//                 <LanguageIcon />
//               </IconButton>
//             </Tooltip>

//             <Tooltip title={t.filterBy}>
//               <IconButton color="inherit" onClick={handleMenuOpen}>
//                 <FilterListIcon />
//               </IconButton>
//             </Tooltip>

//             <Tooltip title={t.sortBy}>
//               <IconButton
//                 color="inherit"
//                 onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
//               >
//                 <SortIcon sx={{
//                   transform: sortOrder === 'desc' ? 'rotate(180deg)' : 'none',
//                   transition: 'transform 0.3s ease'
//                 }} />
//               </IconButton>
//             </Tooltip>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Filter Menu */}
//       <Menu
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleMenuClose}
//         transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//         anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//       >
//         <MenuItem
//           onClick={() => {
//             setFilterType('all');
//             handleMenuClose();
//           }}
//           selected={filterType === 'all'}
//         >
//           {t.all}
//         </MenuItem>
//         <MenuItem
//           onClick={() => {
//             setFilterType('books');
//             handleMenuClose();
//           }}
//           selected={filterType === 'books'}
//         >
//           {t.books}
//         </MenuItem>
//         <MenuItem
//           onClick={() => {
//             setFilterType('subjects');
//             handleMenuClose();
//           }}
//           selected={filterType === 'subjects'}
//         >
//           {t.subjects}
//         </MenuItem>
//         <MenuItem
//           onClick={() => {
//             setFilterType('methods');
//             handleMenuClose();
//           }}
//           selected={filterType === 'methods'}
//         >
//           {t.methods}
//         </MenuItem>
//       </Menu>

//       {/* Main Content */}
//       <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
//         {/* Search and Action Bar */}
//         <Box sx={{ mb: 4 }}>
//           <Grid container spacing={3}>
//             <Grid item xs={12} md={8}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 placeholder={t.search}
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <SearchIcon color="primary" />
//                     </InputAdornment>
//                   ),
//                   sx: {
//                     borderRadius: 2,
//                     bgcolor: chavrutaColors.background.paper,
//                     boxShadow: `0 2px 8px ${alpha(chavrutaColors.primary.main, 0.08)}`,
//                     '&:hover': {
//                       boxShadow: `0 4px 12px ${alpha(chavrutaColors.primary.main, 0.12)}`,
//                     },
//                   }
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} md={4}>
//               <Box sx={{ display: 'flex', gap: 2, height: '100%' }}>
//                 <GradientButton
//                   fullWidth
//                   variant="contained"
//                   startIcon={<AddIcon />}
//                   onClick={openAddDialog}
//                   sx={{ height: '100%' }}
//                 >
//                   {t.addOffer}
//                 </GradientButton>

//                 <GradientButton
//                   fullWidth
//                   variant="contained"
//                   startIcon={<CalendarTodayIcon />}
//                   onClick={() => navigate(`/schedule/${param.id}`)}
//                   sx={{ height: '100%' }}
//                 >
//                   {t.schedule}
//                 </GradientButton>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>

//         {/* Offers Display */}
//         {isMobile ? (
//           // Mobile view - Card layout
//           <Box sx={{ mt: 4 }}>
//             {sortedOffers?.length > 0 ? (
//               <Grid container spacing={3}>
//                 {sortedOffers.map((item) => (
//                   <Grid item xs={12} sm={6} key={item.code}>
//                     <Grow in={true} timeout={500 + (sortedOffers.indexOf(item) * 100)}>
//                       <AnimatedCard>
//                         <CardHeader>
//                           <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//                             <Typography variant="h6" fontWeight="bold">
//                               {t.code}: {item.code}
//                             </Typography>
//                             <Chip
//                               label={item.subject}
//                               color="secondary"
//                               size="small"
//                               sx={{
//                                 fontWeight: 'medium',
//                                 bgcolor: chavrutaColors.secondary.main,
//                                 color: chavrutaColors.secondary.contrastText
//                               }}
//                             />
//                           </Box>
//                         </CardHeader>

//                         <CardContent sx={{ flexGrow: 1 }}>
//                           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                             <BookIcon sx={{ color: chavrutaColors.primary.main, mr: 1 }} />
//                             <Typography variant="body1" fontWeight="medium">
//                               {t.book}: {item.book}
//                             </Typography>
//                           </Box>

//                           <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
//                             <SubjectIcon sx={{ color: chavrutaColors.secondary.main, mr: 1 }} />
//                             <Typography variant="body1" fontWeight="medium">
//                               {t.subject}: {item.subject}
//                             </Typography>
//                           </Box>

//                           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                             <SchoolIcon sx={{ color: chavrutaColors.accent.main, mr: 1 }} />
//                             <Typography variant="body1" fontWeight="medium">
//                               {t.learningMethod}: {item.mode}
//                             </Typography>
//                           </Box>
//                         </CardContent>

//                         <Divider />

//                         <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
//                           <Tooltip title={t.edit}>
//                             <IconButton
//                               sx={{ color: chavrutaColors.secondary.main }}
//                               onClick={() => openEditDialog(item)}
//                             >
//                               <EditIcon />
//                             </IconButton>
//                           </Tooltip>

//                           <Tooltip title={t.delete}>
//                             <IconButton
//                               color="error"
//                               onClick={() => deleteOffer(item.code)}
//                             >
//                               <DeleteIcon />
//                             </IconButton>
//                           </Tooltip>
//                         </CardActions>
//                       </AnimatedCard>
//                     </Grow>
//                   </Grid>
//                 ))}
//               </Grid>
//             ) : (
//               <Paper
//                 elevation={0}
//                 sx={{
//                   p: 4,
//                   textAlign: 'center',
//                   borderRadius: 2,
//                   bgcolor: alpha(chavrutaColors.primary.light, 0.05),
//                   border: `1px dashed ${alpha(chavrutaColors.primary.main, 0.3)}`
//                 }}
//               >
//                 <MenuBookIcon sx={{
//                   fontSize: 60,
//                   color: chavrutaColors.text.secondary,
//                   mb: 2,
//                   opacity: 0.7
//                 }} />
//                 <Typography variant="h6" color="text.secondary" gutterBottom>
//                   {t.noOffers}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   startIcon={<AddIcon />}
//                   onClick={openAddDialog}
//                   sx={{
//                     mt: 2,
//                     bgcolor: chavrutaColors.primary.main,
//                     '&:hover': {
//                       bgcolor: chavrutaColors.primary.dark
//                     }
//                   }}
//                 >
//                   {t.addOffer}
//                 </Button>
//               </Paper>
//             )}
//           </Box>
//         ) : (
//           // Desktop view - Table layout
//           <TableContainer
//             component={Paper}
//             sx={{
//               borderRadius: 2,
//               boxShadow: `0 4px 20px ${alpha(chavrutaColors.primary.main, 0.08)}`,
//               overflow: 'hidden'
//             }}
//           >
//             <Table>
//               <TableHead>
//                 <TableRow>
//                   <StyledTableCell align="center">{t.code}</StyledTableCell>
//                   <StyledTableCell align="center">{t.book}</StyledTableCell>
//                   <StyledTableCell align="center">{t.subject}</StyledTableCell>
//                   <StyledTableCell align="center">{t.learningMethod}</StyledTableCell>
//                   <StyledTableCell align="center">{t.delete}</StyledTableCell>
//                   <StyledTableCell align="center">{t.edit}</StyledTableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {sortedOffers?.length > 0 ? (
//                   sortedOffers.map((item, index) => (
//                     <Zoom 
//                       in={true} 
//                       style={{ transitionDelay: `${index * 50}ms` }}
//                       key={item.code}
//                     >
//                       <StyledTableRow>
//                         <StyledTableCell align="center">{item.code}</StyledTableCell>
//                         <StyledTableCell align="center">{item.book}</StyledTableCell>
//                         <StyledTableCell align="center">{item.subject}</StyledTableCell>
//                         <StyledTableCell align="center">{item.mode}</StyledTableCell>
//                         <StyledTableCell align="center">
//                           <StyledFab 
//                             size="small" 
//                             color="error" 
//                             aria-label={t.delete}
//                             onClick={() => deleteOffer(item.code)}
//                           >
//                             <DeleteIcon />
//                           </StyledFab>
//                         </StyledTableCell>
//                         <StyledTableCell align="center">
//                           <StyledFab 
//                             size="small" 
//                             aria-label={t.edit}
//                             onClick={() => openEditDialog(item)}
//                             sx={{
//                               bgcolor: chavrutaColors.secondary.main,
//                               color: chavrutaColors.secondary.contrastText,
//                               '&:hover': {
//                                 bgcolor: chavrutaColors.secondary.dark
//                               }
//                             }}
//                           >
//                             <EditIcon />
//                           </StyledFab>
//                         </StyledTableCell>
//                       </StyledTableRow>
//                     </Zoom>
//                   ))
//                 ) : (
//                   <TableRow>
//                     <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
//                       <Typography variant="h6" color="text.secondary" gutterBottom>
//                         {t.noOffers}
//                       </Typography>
//                       <Button
//                         variant="contained"
//                         startIcon={<AddIcon />}
//                         onClick={openAddDialog}
//                         sx={{ 
//                           mt: 2,
//                           bgcolor: chavrutaColors.primary.main,
//                           '&:hover': {
//                             bgcolor: chavrutaColors.primary.dark
//                           }
//                         }}
//                       >
//                         {t.addOffer}
//                       </Button>
//                     </TableCell>
//                   </TableRow>
//                 )}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         )}
//       </Container>
      
//       {/* Enhanced Dialog for adding/editing offers */}
//       <ResponsiveDialog
//         open={dialogOpen}
//         onClose={() => setDialogOpen(false)}
//         maxWidth="md"
//         fullWidth
//         TransitionComponent={isMobile ? Slide : Zoom}
//         TransitionProps={{
//           direction: isMobile ? 'up' : undefined,
//           timeout: {
//             enter: 400,
//             exit: 300
//           }
//         }}
//         PaperProps={{
//           sx: {
//             animation: `${dialogPulse} 2s ease-in-out infinite`,
//           }
//         }}
//       >
//         <DialogHeader>
//           <Box sx={{ 
//             display: 'flex', 
//             justifyContent: 'space-between', 
//             alignItems: 'center',
//             position: 'relative',
//             zIndex: 1
//           }}>
//             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//               <Box sx={{
//                 p: 1,
//                 borderRadius: '12px',
//                 bgcolor: alpha('#fff', 0.2),
//                 animation: `${float} 3s ease-in-out infinite`
//               }}>
//                 <AutoStoriesIcon sx={{ 
//                   fontSize: isMobile ? 28 : 32,
//                   color: 'white'
//                 }} />
//               </Box>
//               <Box>
//                 <Typography 
//                   variant={isMobile ? "h5" : "h4"} 
//                   fontWeight="bold"
//                   sx={{
//                     textShadow: '0 2px 4px rgba(0,0,0,0.3)',
//                     letterSpacing: '0.5px'
//                   }}
//                 >
//                   {isEditMode ? t.edit : t.addOffer}
//                 </Typography>
//                 <Typography 
//                   variant="subtitle2" 
//                   sx={{ 
//                     opacity: 0.9,
//                     fontSize: isMobile ? '0.8rem' : '0.9rem'
//                   }}
//                 >
//                   {t.fillDetails}
//                 </Typography>
//               </Box>
//             </Box>
            
//             <IconButton 
//               onClick={() => setDialogOpen(false)}
//               sx={{ 
//                 color: 'white',
//                 bgcolor: alpha('#fff', 0.1),
//                 backdropFilter: 'blur(10px)',
//                 border: `1px solid ${alpha('#fff', 0.2)}`,
//                 transition: 'all 0.3s ease',
//                 '&:hover': { 
//                   bgcolor: alpha('#fff', 0.2),
//                   transform: 'scale(1.1) rotate(90deg)',
//                   boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
//                 }
//               }}
//             >
//               <CloseIcon />
//             </IconButton>
//           </Box>
//         </DialogHeader>
        
//         <DialogContent sx={{ p: 0 }}>
//           <DialogBody>
//             <Grid container spacing={isMobile ? 2 : 4}>
//               {/* User Info Card */}
//               <Grid item xs={12}>
//                 <Fade in={dialogOpen} timeout={600}>
//                   <Paper 
//                     sx={{ 
//                       p: isMobile ? 2 : 3, 
//                       borderRadius: '16px',
//                       background: `linear-gradient(135deg, ${alpha(chavrutaColors.primary.main, 0.05)} 0%, ${alpha(chavrutaColors.secondary.main, 0.05)} 100%)`,
//                       border: `1px solid ${alpha(chavrutaColors.primary.main, 0.1)}`,
//                       position: 'relative',
//                       overflow: 'hidden',
                      
//                       '&::before': {
//                         content: '""',
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         width: '100%',
//                         height: '4px',
//                         background: `linear-gradient(90deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.secondary.main} 100%)`,
//                       }
//                     }}
//                   >
//                     <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                       <Avatar sx={{ 
//                         bgcolor: chavrutaColors.primary.main,
//                         width: isMobile ? 40 : 50,
//                         height: isMobile ? 40 : 50,
//                         fontSize: isMobile ? '1.2rem' : '1.5rem'
//                       }}>
//                         {param.id?.charAt(0)}
//                       </Avatar>
//                       <Box>
//                         <Typography 
//                           variant="caption" 
//                           color="text.secondary" 
//                           fontWeight="medium"
//                           sx={{ fontSize: isMobile ? '0.7rem' : '0.8rem' }}
//                         >
//                           {t.id}
//                         </Typography>
//                         <Typography 
//                           variant={isMobile ? "h6" : "h5"} 
//                           fontWeight="bold" 
//                           color={chavrutaColors.text.primary}
//                         >
//                           {param.id}
//                         </Typography>
//                       </Box>
//                     </Box>
//                   </Paper>
//                 </Fade>
//               </Grid>
              
//               {/* Form Fields */}
//               <Grid item xs={12}>
//                 <Zoom in={dialogOpen} timeout={800}>
//                   <TextField
//                     fullWidth
//                     label={t.book}
//                     variant="outlined"
//                     value={offer.book}
//                     onChange={(e) => setOffer({ ...offer, book: e.target.value })}
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <BookIcon sx={{ 
//                             color: chavrutaColors.primary.main,
//                             fontSize: isMobile ? 20 : 24
//                           }} />
//                         </InputAdornment>
//                       ),
//                     }}
//                     sx={{
//                       '& .MuiOutlinedInput-root': {
//                         borderRadius: '12px',
//                         fontSize: isMobile ? '0.9rem' : '1rem',
//                         '& fieldset': {
//                           borderWidth: '2px',
//                           borderColor: alpha(chavrutaColors.primary.main, 0.2),
//                         },
//                         '&:hover fieldset': {
//                           borderColor: chavrutaColors.primary.main,
//                           borderWidth: '2px',
//                         },
//                         '&.Mui-focused fieldset': {
//                           borderColor: chavrutaColors.primary.main,
//                           borderWidth: '2px',
//                           boxShadow: `0 0 0 4px ${alpha(chavrutaColors.primary.main, 0.1)}`,
//                         }
//                       },
//                       '& .MuiInputLabel-root': {
//                         fontSize: isMobile ? '0.9rem' : '1rem',
//                         fontWeight: 'medium',
//                         '&.Mui-focused': {
//                           color: chavrutaColors.primary.main,
//                         }
//                       }
//                     }}
//                   />
//                 </Zoom>
//               </Grid>
              
//               <Grid item xs={12}>
//                 <Zoom in={dialogOpen} timeout={1000}>
//                   <TextField
//                     fullWidth
//                     label={t.subject}
//                     variant="outlined"
//                     value={offer.subject}
//                     onChange={(e) => setOffer({ ...offer, subject: e.target.value })}
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <SubjectIcon sx={{ 
//                             color: chavrutaColors.secondary.main,
//                             fontSize: isMobile ? 20 : 24
//                           }} />
//                         </InputAdornment>
//                       ),
//                     }}
//                     sx={{
//                       '& .MuiOutlinedInput-root': {
//                         borderRadius: '12px',
//                         fontSize: isMobile ? '0.9rem' : '1rem',
//                         '& fieldset': {
//                           borderWidth: '2px',
//                           borderColor: alpha(chavrutaColors.secondary.main, 0.2),
//                         },
//                         '&:hover fieldset': {
//                           borderColor: chavrutaColors.secondary.main,
//                           borderWidth: '2px',
//                         },
//                         '&.Mui-focused fieldset': {
//                           borderColor: chavrutaColors.secondary.main,
//                           borderWidth: '2px',
//                           boxShadow: `0 0 0 4px ${alpha(chavrutaColors.secondary.main, 0.1)}`,
//                         }
//                       },
//                       '& .MuiInputLabel-root': {
//                         fontSize: isMobile ? '0.9rem' : '1rem',
//                         fontWeight: 'medium',
//                         '&.Mui-focused': {
//                           color: chavrutaColors.secondary.main,
//                         }
//                       }
//                     }}
//                   />
//                 </Zoom>
//               </Grid>
              
//               <Grid item xs={12}>
//                 <Zoom in={dialogOpen} timeout={1200}>
//                   <TextField
//                     fullWidth
//                     label={t.learningMethod}
//                     variant="outlined"
//                     value={offer.mode}
//                     onChange={(e) => setOffer({ ...offer, mode: e.target.value })}
//                     InputProps={{
//                       startAdornment: (
//                         <InputAdornment position="start">
//                           <SchoolIcon sx={{ 
//                             color: chavrutaColors.accent.main,
//                             fontSize: isMobile ? 20 : 24
//                           }} />
//                         </InputAdornment>
//                       ),
//                     }}
//                     sx={{
//                       '& .MuiOutlinedInput-root': {
//                         borderRadius: '12px',
//                         fontSize: isMobile ? '0.9rem' : '1rem',
//                         '& fieldset': {
//                           borderWidth: '2px',
//                           borderColor: alpha(chavrutaColors.accent.main, 0.2),
//                         },
//                         '&:hover fieldset': {
//                           borderColor: chavrutaColors.accent.main,
//                           borderWidth: '2px',
//                         },
//                         '&.Mui-focused fieldset': {
//                           borderColor: chavrutaColors.accent.main,
//                           borderWidth: '2px',
//                           boxShadow: `0 0 0 4px ${alpha(chavrutaColors.accent.main, 0.1)}`,
//                         }
//                       },
//                       '& .MuiInputLabel-root': {
//                         fontSize: isMobile ? '0.9rem' : '1rem',
//                         fontWeight: 'medium',
//                         '&.Mui-focused': {
//                           color: chavrutaColors.accent.main,
//                         }
//                       }
//                     }}
//                   />
//                 </Zoom>
//               </Grid>
              
//               {/* Action Buttons */}
//               <Grid item xs={12}>
//                 <Fade in={dialogOpen} timeout={1400}>
//                   <Box sx={{ 
//                     display: 'flex', 
//                     flexDirection: isMobile ? 'column' : 'row',
//                     justifyContent: 'flex-end', 
//                     gap: isMobile ? 2 : 3, 
//                     mt: isMobile ? 2 : 3,
//                     pt: isMobile ? 2 : 3,
//                     borderTop: `1px solid ${alpha(chavrutaColors.secondary.main, 0.1)}`
//                   }}>
//                     <Button
//                       variant="outlined"
//                       onClick={() => setDialogOpen(false)}
//                       fullWidth={isMobile}
//                       sx={{ 
//                         borderRadius: '12px',
//                         px: isMobile ? 3 : 4,
//                         py: isMobile ? 1.5 : 1.5,
//                         fontSize: isMobile ? '0.9rem' : '1rem',
//                         fontWeight: 'bold',
//                         borderWidth: '2px',
//                         borderColor: alpha(chavrutaColors.text.secondary, 0.3),
//                         color: chavrutaColors.text.secondary,
//                         transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
//                         '&:hover': {
//                           borderColor: chavrutaColors.primary.main,
//                           color: chavrutaColors.primary.main,
//                           borderWidth: '2px',
//                           transform: 'translateY(-2px)',
//                           boxShadow: `0 8px 25px ${alpha(chavrutaColors.primary.main, 0.2)}`,
//                         }
//                       }}
//                     >
//                       <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                         <CloseIcon sx={{ fontSize: isMobile ? 18 : 20 }} />
//                         {t.exit}
//                       </Box>
//                     </Button>
                    
//                     <GradientButton
//                       variant="contained"
//                       onClick={isEditMode ? updateOffer : addOffer}
//                       disabled={loading}
//                       fullWidth={isMobile}
//                       sx={{ 
//                         px: isMobile ? 3 : 5, 
//                         py: isMobile ? 1.5 : 1.5,
//                         fontSize: isMobile ? '0.9rem' : '1rem',
//                         fontWeight: 'bold',
//                         borderRadius: '12px',
//                         minWidth: isMobile ? 'auto' : 150,
//                         position: 'relative',
//                         overflow: 'hidden',
                        
//                         '&::before': {
//                           content: '""',
//                           position: 'absolute',
//                           top: 0,
//                           left: '-100%',
//                           width: '100%',
//                           height: '100%',
//                           background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
//                           transition: 'left 0.6s',
//                         },
                        
//                         '&:hover::before': {
//                           left: '100%',
//                         },
                        
//                         '&:disabled': {
//                           opacity: 0.7,
//                           cursor: 'not-allowed',
//                         }
//                       }}
//                     >
//                       <Box sx={{ 
//                         display: 'flex', 
//                         alignItems: 'center', 
//                         gap: 1,
//                         position: 'relative',
//                         zIndex: 1
//                       }}>
//                         {loading ? (
//                           <CircularProgress 
//                             size={isMobile ? 18 : 20} 
//                             sx={{ color: 'white' }} 
//                           />
//                         ) : (
//                           <>
//                             {isEditMode ? <EditIcon sx={{ fontSize: isMobile ? 18 : 20 }} /> : <AddIcon sx={{ fontSize: isMobile ? 18 : 20 }} />}
//                             {isEditMode ? t.update : t.add}
//                           </>
//                         )}
//                       </Box>
//                     </GradientButton>
//                   </Box>
//                 </Fade>
//               </Grid>
//             </Grid>
//           </DialogBody>
//         </DialogContent>
//       </ResponsiveDialog>
      
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
//           sx={{ 
//             width: '100%',
//             boxShadow: `0 4px 12px ${alpha(chavrutaColors.primary.main, 0.15)}`,
//             borderRadius: 2,
//             fontWeight: 'medium',
//             '& .MuiAlert-icon': {
//               fontSize: isMobile ? '1.2rem' : '1.5rem'
//             },
//             '& .MuiAlert-message': {
//               fontSize: isMobile ? '0.9rem' : '1rem'
//             }
//           }}
//         >
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </Box>
//   );
// };



