
// In the name of God
import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GetRequestsByIdThunk } from "../../redux/Requests/getRequestsByIdThunk";
import { DeleteRequestThunk } from "../../redux/Requests/deleteRequestThunk";
import { UpdateRequestThunk } from "../../redux/Requests/updateRequestsThunk";
import { AddRequestsThunk } from "../../redux/Requests/addRequestThunk";
import { editRequest } from "../../redux/Requests/requestsSlice";
import { GetChavrutaThunk } from "../../redux/Requests/getChavrutaThunk";

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
  Skeleton,
  FormControl,
  InputLabel,
  Select
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
import HandshakeIcon from '@mui/icons-material/Handshake';

// Styled components
import { styled, keyframes } from '@mui/material/styles';
import "./request.css";

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
}));

export const Request = () => {
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
  const requests = useSelector(state => state.requests.requests);
  const [request, setRequest] = useState({
    personId: param.id,
    book: "",
    subject: "",
    mode: "",
    chavrutaCode: null
  });

  // Subject options based on book selection
  const subjectOptions = {
    "תלמוד בבלי": [
      "ברכות", "שבת", "עירובין", "פסחים", "יומא", "סוכה", "ביצה", "ראש השנה",
      "תענית", "מגילה", "מועד קטן", "חגיגה", "יבמות", "כתובות", "נדרים", "נזיר",
      "סוטה", "גיטין", "קידושין", "בבא קמא", "בבא מציעא", "בבא בתרא", "סנהדרין",
      "מכות", "שבועות", "עבודה זרה", "הוריות", "זבחים", "מנחות", "חולין", "בכורות",
      "ערכין", "תמורה", "כריתות", "מעילה", "תמיד", "מדות", "קינים", "נדה"
    ],
    "תנ״ך": [
      "בראשית", "שמות", "ויקרא", "במדבר", "דברים", "יהושע", "שופטים", "שמואל א",
      "שמואל ב", "מלכים א", "מלכים ב", "ישעיהו", "ירמיהו", "יחזקאל", "הושע",
      "יואל", "עמוס", "עובדיה", "יונה", "מיכה", "נחום", "חבקוק", "צפניה",
      "חגי", "זכריה", "מלאכי", "תהלים", "משלי", "איוב", "שיר השירים", "רות",
      "איכה", "קהלת", "אסתר", "דניאל", "עזרא", "נחמיה", "דברי הימים א", "דברי הימים ב"
    ],
    "משנה": [
      "זרעים", "מועד", "נשים", "נזיקין", "קדשים", "טהרות"
    ],
    "הלכה": [
      "שולחן ערוך", "משנה ברורה", "ביאור הלכה", "פסקי תשובות", "שמירת שבת כהלכתה"
    ],
    "מחשבה": [
      "ספר האמונות והדעות", "חובות הלבבות", "מורה נבוכים", "עקרי האמונה"
    ],
    "קבלה": [
      "זוהר", "ספר יצירה", "עץ חיים", "תניא", "ליקוטי מוהר״ן"
    ],
    "מוסר": [
      "מסילת ישרים", "שערי תשובה", "ספר החינוך", "אורחות צדיקים", "מדרגת האדם"
    ]
  };

  // Translations
  const translations = {
    en: {
      myRequests: "My Learning Requests",
      addRequest: "Create New Request",
      schedule: "Study Schedule",
      id: "Student ID",
      book: "Sacred Text",
      subject: "Study Topic",
      learningMethod: "Learning Style",
      delete: "Remove",
      edit: "Modify",
      update: "Update Request",
      add: "Add Request",
      exit: "Cancel",
      code: "Request Code",
      search: "Search your requests...",
      filterBy: "Filter Options",
      all: "All Requests",
      books: "By Books",
      subjects: "By Topics",
      methods: "By Methods",
      sortBy: "Sort Order",
      ascending: "A to Z",
      descending: "Z to A",
      requestAdded: "🎉 New request created successfully!",
      requestUpdated: "✨ Request updated successfully!",
      requestDeleted: "🗑️ Request removed successfully!",
      confirmDelete: "Are you sure you want to remove this request?",
      yes: "Yes, Remove",
      no: "Keep It",
      noRequests: "No requests yet. Start your learning journey!",
      language: "Language",
      totalRequests: "Total Requests",
      activeStudies: "Active Studies",
      completedSessions: "Completed",
      studyPartners: "Study Partners",
      findChavruta: "Find Chavruta",
      matched: "Matched",
      pending: "Pending",
      status: "Status"
    },
    he: {
      myRequests: "הבקשות שלי ללמידה",
      addRequest: "יצירת בקשה חדשה",
      schedule: "מערכת לימודים",
      id: "תעודת זהות",
      book: "ספר קודש",
      subject: "נושא לימוד",
      learningMethod: "סגנון לימוד",
      delete: "הסרה",
      edit: "עריכה",
      update: "עדכון בקשה",
      add: "הוספת בקשה",
      exit: "ביטול",
      code: "קוד בקשה",
      search: "חיפוש בבקשות שלך...",
      filterBy: "אפשרויות סינון",
      all: "כל הבקשות",
      books: "לפי ספרים",
      subjects: "לפי נושאים",
      methods: "לפי שיטות",
      sortBy: "סדר מיון",
      ascending: "א' עד ת'",
      descending: "ת' עד א'",
      requestAdded: "🎉 בקשה חדשה נוצרה בהצלחה!",
      requestUpdated: "✨ הבקשה עודכנה בהצלחה!",
      requestDeleted: "🗑️ הבקשה הוסרה בהצלחה!",
      confirmDelete: "האם אתה בטוח שברצונך להסיר בקשה זו?",
      yes: "כן, הסר",
      no: "השאר",
      noRequests: "אין בקשות עדיין. התחל את מסע הלמידה שלך!",
      language: "שפה",
      totalRequests: "סך הבקשות",
      activeStudies: "לימודים פעילים",
      completedSessions: "הושלמו",
      studyPartners: "שותפי לימוד",
      findChavruta: "מצא חברותא",
      matched: "הותאם",
      pending: "ממתין",
      status: "סטטוס"
    }
  };

  const t = translations[language];
  const textDirection = language === 'he' ? 'rtl' : 'ltr';

  // Functions
  const getRequests = async () => {
    setLoading(true);
    try {
      await dispatch(GetRequestsByIdThunk(param.id));
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to load requests",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  const addRequest = async () => {
    if (!request.book || !request.subject || !request.mode) {
      setSnackbar({
        open: true,
        message: "Please fill all fields",
        severity: "warning"
      });
      return;
    }

    setLoading(true);
    try {
      await dispatch(AddRequestsThunk(request));
      setDialogOpen(false);
      setRequest({ personId: param.id, book: "", subject: "", mode: "", chavrutaCode: null });
      setSnackbar({
        open: true,
        message: t.requestAdded,
        severity: "success"
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to add request",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteRequest = async (code) => {
    setLoading(true);
    try {
      await dispatch(DeleteRequestThunk(code));
      setSnackbar({
        open: true,
        message: t.requestDeleted,
        severity: "success"
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to delete request",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  const updateRequest = async () => {
    if (!request.book || !request.subject || !request.mode) {
      setSnackbar({
        open: true,
        message: "Please fill all fields",
        severity: "warning"
      });
      return;
    }

    setLoading(true);
    try {
      dispatch(editRequest(request));
      await dispatch(UpdateRequestThunk(request));
      setDialogOpen(false);
      setIsEditMode(false);
      setSnackbar({
        open: true,
        message: t.requestUpdated,
        severity: "success"
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to update request",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  const findChavruta = async (requestCode) => {
    setLoading(true);
    try {
      await dispatch(GetChavrutaThunk(requestCode));
      setSnackbar({
        open: true,
        message: "🔍 Searching for your perfect Chavruta...",
        severity: "info"
      });
      navigate(`/chavruta/${requestCode}`);
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to find Chavruta",
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

  const filteredRequests = requests?.filter(request => {
    const matchesSearch =
      request.book.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.mode.toLowerCase().includes(searchTerm.toLowerCase());

    if (filterType === 'all') return matchesSearch;
    if (filterType === 'books') return matchesSearch && request.book.length > 0;
    if (filterType === 'subjects') return matchesSearch && request.subject.length > 0;
    if (filterType === 'methods') return matchesSearch && request.mode.length > 0;

    return matchesSearch;
  });

  const sortedRequests = filteredRequests?.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.code - b.code;
    } else {
      return b.code - a.code;
    }
  });

  // Stats calculation
  const stats = {
    total: requests?.length || 0,
    active: requests?.filter(r => r.chavrutaCode)?.length || 0
  };

  // Status helpers
  const getStatusText = (chavrutaCode) => {
    if (chavrutaCode) return t.matched;
    return t.pending;
  };

  const getStatusColor = (chavrutaCode) => {
    if (chavrutaCode) return chavrutaColors.success;
    return chavrutaColors.warning;
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
            <HandshakeIcon sx={{ fontSize: 40, mr: 2, color: chavrutaColors.secondary.main }} />
            <Box>
              <Typography variant="h4" component="div" sx={{
                fontWeight: 'bold',
                letterSpacing: '0.5px',
                background: `linear-gradient(45deg, ${chavrutaColors.secondary.main}, ${chavrutaColors.background.paper})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {t.myRequests}
              </Typography>
              <Typography variant="subtitle1" sx={{ opacity: 0.9, fontSize: '0.9rem' }}>
                {param.id} • {stats.total} {language === 'he' ? 'בקשות' : 'requests'}
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
            { title: t.totalRequests, value: stats.total, icon: <HandshakeIcon />, color: chavrutaColors.primary.main },
            { title: t.activeStudies, value: stats.active, icon: <TrendingUpIcon />, color: chavrutaColors.success }
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
                    setRequest({ personId: param.id, book: "", subject: "", mode: "", chavrutaCode: null });
                    setDialogOpen(true);
                  }}
                  sx={{ minWidth: 150 }}
                >
                  {t.addRequest}
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
            {sortedRequests?.length > 0 ? (
              <Grid container spacing={3}>
                {sortedRequests.map((item, index) => (
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
                                <HandshakeIcon sx={{ fontSize: 30 }} />
                              </Badge>
                              <Typography variant="h6" fontWeight="bold">
                                {t.code}
                              </Typography>
                            </Box>
                            <Chip
                              label={getStatusText(item.chavrutaCode)}
                              sx={{
                                bgcolor: alpha(getStatusColor(item.chavrutaCode), 0.2),
                                color: getStatusColor(item.chavrutaCode),
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

                            {item.chavrutaCode && (
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{
                                  p: 1,
                                  borderRadius: '10px',
                                  bgcolor: alpha(chavrutaColors.success, 0.1),
                                  color: chavrutaColors.success
                                }}>
                                  <GroupsIcon />
                                </Box>
                                <Box>
                                  <Typography variant="caption" color="text.secondary" fontWeight="medium">
                                    Chavruta Code
                                  </Typography>
                                  <Typography variant="body1" fontWeight="bold" color="text.primary">
                                    {item.chavrutaCode}
                                  </Typography>
                                </Box>
                              </Box>
                            )}
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
                                  setRequest(item);
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
                                onClick={() => deleteRequest(item.code)}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Tooltip>
                          </Stack>

                          <Stack direction="row" spacing={1}>
                            {!item.chavrutaCode && (
                              <Tooltip title={t.findChavruta}>
                                <IconButton
                                  sx={{
                                    bgcolor: alpha(chavrutaColors.success, 0.1),
                                    color: chavrutaColors.success,
                                    '&:hover': {
                                      bgcolor: alpha(chavrutaColors.success, 0.2),
                                      transform: 'scale(1.1)'
                                    }
                                  }}
                                  onClick={() => findChavruta(item.code)}
                                >
                                  <HandshakeIcon />
                                </IconButton>
                              </Tooltip>
                            )}

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
                  <HandshakeIcon sx={{
                    fontSize: 80,
                    color: chavrutaColors.secondary.main,
                    mb: 3,
                    opacity: 0.8
                  }} />
                </Box>
                <Typography variant="h4" color={chavrutaColors.text.primary} gutterBottom fontWeight="bold">
                  {t.noRequests}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 400, mx: 'auto' }}>
                  {language === 'he'
                    ? 'התחל את מסע הלמידה שלך עם חברותא. צור בקשה ומצא שותפים ללמידה.'
                    : 'Begin your learning journey with Chavruta. Create a request and find study partners.'
                  }
                </Typography>
                <GradientButton
                  variant="contained"
                  size="large"
                  startIcon={<AddIcon />}
                  onClick={() => {
                    setIsEditMode(false);
                    setRequest({ personId: param.id, book: "", subject: "", mode: "", chavrutaCode: null });
                    setDialogOpen(true);
                  }}
                  sx={{
                    mt: 2,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem'
                  }}
                >
                  {t.addRequest}
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
              border: `1px solid ${alpha(chavrutaColors.secondary.main, 0.1)}`
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                <StyledTableCell align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                      <StarIcon />
                      {t.code}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                      <BookIcon />
                      {t.book}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                      <SubjectIcon />
                      {t.subject}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                      <SchoolIcon />
                      {t.learningMethod}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                      <GroupsIcon />
                      {t.status}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                      <HandshakeIcon />
                      {t.findChavruta}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                      <EditIcon />
                      {t.edit}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                      <DeleteIcon />
                      {t.delete}
                    </Box>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedRequests?.length > 0 ? (
                  sortedRequests.map((item, index) => (
                    <Zoom
                      in={true}
                      style={{ transitionDelay: `${index * 100}ms` }}
                      key={item.code}
                    >
                      <StyledTableRow>
                        <StyledTableCell align="center">
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
                        <StyledTableCell align="center">
                          <Typography variant="body1" fontWeight="medium">
                            {item.book}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="center">
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
                        <StyledTableCell align="center">
                          <Typography variant="body1" fontWeight="medium">
                            {item.mode}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Chip
                            label={getStatusText(item.chavrutaCode)}
                            sx={{
                              bgcolor: alpha(getStatusColor(item.chavrutaCode), 0.1),
                              color: getStatusColor(item.chavrutaCode),
                              fontWeight: 'bold'
                            }}
                            size="small"
                          />
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {!item.chavrutaCode ? (
                            <StyledFab
                              size="small"
                              aria-label={t.findChavruta}
                              onClick={() => findChavruta(item.code)}
                              sx={{
                                background: `linear-gradient(135deg, ${chavrutaColors.success} 0%, #27AE60 100%)`,
                                '&:hover': {
                                  background: `linear-gradient(135deg, #27AE60 0%, ${chavrutaColors.success} 100%)`,
                                }
                              }}
                            >
                              <HandshakeIcon />
                            </StyledFab>
                          ) : (
                            <Chip
                              label={item.chavrutaCode}
                              sx={{
                                bgcolor: alpha(chavrutaColors.success, 0.1),
                                color: chavrutaColors.success,
                                fontWeight: 'bold'
                              }}
                              size="small"
                            />
                          )}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <StyledFab
                            size="small"
                            aria-label={t.edit}
                            onClick={() => {
                              setRequest(item);
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
                        <StyledTableCell align="center">
                          <StyledFab
                            size="small"
                            aria-label={t.delete}
                            onClick={() => deleteRequest(item.code)}
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
                    <TableCell colSpan={8} align="center" sx={{ py: 8 }}>
                      <Box sx={{ animation: `${float} 3s ease-in-out infinite` }}>
                        <HandshakeIcon sx={{
                          fontSize: 60,
                          color: chavrutaColors.secondary.main,
                          mb: 2,
                          opacity: 0.7
                        }} />
                      </Box>
                      <Typography variant="h5" color={chavrutaColors.text.primary} gutterBottom fontWeight="bold">
                        {t.noRequests}
                      </Typography>
                      <GradientButton
                        variant="contained"
                        startIcon={<AddIcon />}
                        onClick={() => {
                          setIsEditMode(false);
                          setRequest({ personId: param.id, book: "", subject: "", mode: "", chavrutaCode: null });
                          setDialogOpen(true);
                        }}
                        sx={{ mt: 3 }}
                      >
                        {t.addRequest}
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
          setRequest({ personId: param.id, book: "", subject: "", mode: "", chavrutaCode: null });
          setDialogOpen(true);
        }}
      >
        <AddIcon sx={{ fontSize: 30 }} />
      </FloatingActionButton>

      {/* Modern Dialog - Centered */}
      <Backdrop 
        open={dialogOpen} 
        sx={{ 
          zIndex: 1200, 
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Slide direction="up" in={dialogOpen} mountOnEnter unmountOnExit>
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              width: '90%',
              maxWidth: '600px',
              background: `linear-gradient(145deg, ${chavrutaColors.background.paper} 0%, ${chavrutaColors.background.elevated} 100%)`,
              borderRadius: '24px',
              boxShadow: `0 25px 50px ${alpha(chavrutaColors.primary.main, 0.3)}`,
              border: `1px solid ${alpha(chavrutaColors.secondary.main, 0.2)}`,
              overflow: 'hidden',
              maxHeight: '90vh',
              overflowY: 'auto',
              direction: textDirection
            }}
          >
            <CardHeader sx={{ pb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <HandshakeIcon sx={{ fontSize: 32 }} />
                  <Typography variant="h4" fontWeight="bold">
                    {isEditMode ? t.edit : t.addRequest}
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
                  <FormControl fullWidth>
                    <InputLabel>{t.book}</InputLabel>
                    <Select
                      value={request.book}
                      label={t.book}
                      onChange={(e) => {
                        setRequest({ ...request, book: e.target.value, subject: "" });
                      }}
                      sx={{
                        borderRadius: '12px',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: chavrutaColors.secondary.main,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: chavrutaColors.primary.main,
                        }
                      }}
                      startAdornment={
                        <InputAdornment position="start">
                          <BookIcon sx={{ color: chavrutaColors.primary.main }} />
                        </InputAdornment>
                      }
                    >
                      {Object.keys(subjectOptions).map((book) => (
                        <MenuItem key={book} value={book}>
                          {book}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth disabled={!request.book}>
                    <InputLabel>{t.subject}</InputLabel>
                    <Select
                      value={request.subject}
                      label={t.subject}
                      onChange={(e) => setRequest({ ...request, subject: e.target.value })}
                      sx={{
                        borderRadius: '12px',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: chavrutaColors.secondary.main,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: chavrutaColors.primary.main,
                        }
                      }}
                      startAdornment={
                        <InputAdornment position="start">
                          <SubjectIcon sx={{ color: chavrutaColors.secondary.main }} />
                        </InputAdornment>
                      }
                    >
                      {request.book && subjectOptions[request.book]?.map((subject) => (
                        <MenuItem key={subject} value={subject}>
                          {subject}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel>{t.learningMethod}</InputLabel>
                    <Select
                      value={request.mode}
                      label={t.learningMethod}
                      onChange={(e) => setRequest({ ...request, mode: e.target.value })}
                      sx={{
                        borderRadius: '12px',
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: chavrutaColors.secondary.main,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: chavrutaColors.primary.main,
                        }
                      }}
                      startAdornment={
                        <InputAdornment position="start">
                          <SchoolIcon sx={{ color: chavrutaColors.accent.main }} />
                        </InputAdornment>
                      }
                    >
                      <MenuItem value="zoom">זום</MenuItem>
                      <MenuItem value="frontal">פרונטלי</MenuItem>
                      <MenuItem value="phone">טלפון</MenuItem>
                      {/* <MenuItem value="שאלות ותשובות">שאלות ותשובות</MenuItem>
                      <MenuItem value="חזרה">חזרה</MenuItem>
                      <MenuItem value="לימוד חדש">לימוד חדש</MenuItem> */}
                    </Select>
                  </FormControl>
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
                  onClick={isEditMode ? updateRequest : addRequest}
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
          </Box>
        </Slide>
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


