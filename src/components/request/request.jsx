
// **************************************
// In the name of God
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { GetRequestsByIdThunk } from "../../redux/Requests/getRequestsByIdThunk";
import { DeleteRequestThunk } from "../../redux/Requests/deleteRequestThunk";
import { UpdateRequestThunk } from "../../redux/Requests/updateRequestsThunk";
import { AddRequestsThunk } from "../../redux/Requests/addRequestThunk";
import { editRequest } from "../../redux/Requests/requestsSlice";
import { GetChavrutaThunk } from "../../redux/Requests/getChavrutaThunk";
import {DialogContentText } from "@mui/material"
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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Fab,
  Zoom,
  Slide,
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
  Avatar,
  useTheme,
  alpha,
  Menu,
  MenuItem,
  InputAdornment,
  Snackbar,
  Alert,
  Stack,
  FormControl,
  InputLabel,
  Select,
  CircularProgress,
  Backdrop,
  Tabs,
  Tab,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge
} from "@mui/material";

// Icons
import HandshakeSharpIcon from '@mui/icons-material/HandshakeSharp';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BookIcon from '@mui/icons-material/Book';
import SubjectIcon from '@mui/icons-material/Subject';
import SchoolIcon from '@mui/icons-material/School';
import CloseIcon from '@mui/icons-material/Close';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { Visibility, VisibilityOff } from "@mui/icons-material";

// Styled components
import { styled } from '@mui/material/styles';
import "./request.css";

// Styled components
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'medium',
  fontSize: '0.95rem',
  padding: theme.spacing(2),
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.7)}`,
  '&.MuiTableCell-head': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    fontSize: '1rem'
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  transition: 'background-color 0.2s ease, transform 0.2s ease',
  '&:nth-of-type(odd)': {
    backgroundColor: alpha(theme.palette.primary.light, 0.05),
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.primary.light, 0.1),
    transform: 'translateY(-2px)',
    boxShadow: `0 4px 8px ${alpha(theme.palette.common.black, 0.1)}`,
    cursor: 'pointer'
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledFab = styled(Fab)(({ theme }) => ({
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
  }
}));

const AnimatedCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.spacing(2),
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 32px rgba(0, 0, 0, 0.15)',
  }
}));

const CardHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
  color: theme.palette.common.white,
  position: 'relative',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
  }
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
  color: theme.palette.common.white,
  fontWeight: 'bold',
  padding: theme.spacing(1, 3),
  borderRadius: theme.spacing(5),
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  '&:hover': {
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
    transform: 'translateY(-2px)',
  }
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const Request = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  // Refs
  const dialogRef = useRef(null);
  
  // State
  const [open, setOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'he' for Hebrew
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [requestToDelete, setRequestToDelete] = useState(null);
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

  // Translations
  const translations = {
    en: {
      myRequests: "My Learning Requests",
      addRequest: "Add Request",
      schedule: "Schedule",
      id: "ID",
      book: "Book",
      subject: "Subject",
      learningMethod: "Learning Method",
      delete: "Delete",
      edit: "Edit",
      update: "Update",
      add: "Add",
      cancel: "Cancel",
      code: "Code",
      search: "Search requests...",
      filterBy: "Filter by",
      all: "All",
      books: "Books",
      subjects: "Subjects",
      methods: "Methods",
      sortBy: "Sort by",
      ascending: "Ascending",
      descending: "Descending",
      requestAdded: "Request added successfully!",
      requestUpdated: "Request updated successfully!",
      requestDeleted: "Request deleted successfully!",
      confirmDelete: "Are you sure you want to delete this request?",
      yes: "Yes",
      no: "No",
      noRequests: "No requests found. Add your first request!",
      language: "Language",
      dashboard: "Dashboard",
      notifications: "Notifications",
      settings: "Settings",
      logout: "Logout",
      profile: "Profile",
      findChavruta: "Find Chavruta",
      loading: "Loading...",
      requestDetails: "Request Details",
      active: "Active",
      pending: "Pending",
      matched: "Matched",
      requestsTab: "Requests",
      matchesTab: "Matches",
      favoritesTab: "Favorites"
    },
    he: {
      myRequests: "הבקשות שלי",
      addRequest: "הוספת בקשה",
      schedule: "מערכת שעות",
      id: "ת.ז",
      book: "ספר",
      subject: "נושא",
      learningMethod: "אופן הלמידה",
      delete: "מחק",
      edit: "ערוך",
      update: "עדכון",
      add: "הוספה",
      cancel: "ביטול",
      code: "קוד",
      search: "חיפוש בקשות...",
      filterBy: "סנן לפי",
      all: "הכל",
      books: "ספרים",
      subjects: "נושאים",
      methods: "שיטות",
      sortBy: "מיין לפי",
      ascending: "סדר עולה",
      descending: "סדר יורד",
      requestAdded: "הבקשה נוספה בהצלחה!",
      requestUpdated: "הבקשה עודכנה בהצלחה!",
      requestDeleted: "הבקשה נמחקה בהצלחה!",
      confirmDelete: "האם אתה בטוח שברצונך למחוק בקשה זו?",
      yes: "כן",
      no: "לא",
      noRequests: "לא נמצאו בקשות. הוסף את הבקשה הראשונה שלך!",
      language: "שפה",
      dashboard: "לוח בקרה",
      notifications: "התראות",
      settings: "הגדרות",
      logout: "התנתק",
      profile: "פרופיל",
      findChavruta: "מצא חברותא",
      loading: "טוען...",
      requestDetails: "פרטי הבקשה",
      active: "פעיל",
      pending: "ממתין",
      matched: "מותאם",
      requestsTab: "בקשות",
      matchesTab: "התאמות",
      favoritesTab: "מועדפים"
    }
  };

  const t = translations[language];
  const textDirection = language === 'he' ? 'rtl' : 'ltr';

  // Functions
  const getRequest = async () => {
    setLoading(true);
    try {
      await dispatch(GetRequestsByIdThunk(param.id));
      setSnackbar({
        open: true,
        message: language === 'en' ? "Requests loaded successfully" : "הבקשות נטענו בהצלחה",
        severity: "success"
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: language === 'en' ? "Failed to load requests" : "טעינת הבקשות נכשלה",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRequest();
  }, []);

  const addRequest = async () => {
    if (!request.book || !request.subject || !request.mode) {
      setSnackbar({
        open: true,
        message: language === 'en' ? "Please fill all fields" : "אנא מלא את כל השדות",
        severity: "warning"
      });
      return;
    }
    
    setLoading(true);
    try {
      await dispatch(AddRequestsThunk(request));
      setOpen(false);
      setRequest({ personId: param.id, book: "", subject: "", mode: "", chavrutaCode: null });
      setSnackbar({        open: true,
        message: t.requestAdded,
        severity: "success"
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: language === 'en' ? "Failed to add request" : "הוספת הבקשה נכשלה",
        severity: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteRequest = async (code) => {
    setConfirmDeleteOpen(false);
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
        message: language === 'en' ? "Failed to delete request" : "מחיקת הבקשה נכשלה",
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
        message: language === 'en' ? "Please fill all fields" : "אנא מלא את כל השדות",
        severity: "warning"
      });
      return;
    }
    
    setLoading(true);
    try {
      dispatch(editRequest(request));
      await dispatch(UpdateRequestThunk({ code: request.code, request: request }));
      setOpen(false);
      setSnackbar({
        open: true,
        message: t.requestUpdated,
        severity: "success"
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: language === 'en' ? "Failed to update request" : "עדכון הבקשה נכשל",
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

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const confirmDelete = (code) => {
    setRequestToDelete(code);
    setConfirmDeleteOpen(true);
  };

  const filteredRequests = requests?.filter(req => {
    const matchesSearch = 
      req.book?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.mode?.toLowerCase().includes(searchTerm.toLowerCase());
      
    if (filterType === 'all') return matchesSearch;
    if (filterType === 'books') return matchesSearch && req.book && req.book.length > 0;
    if (filterType === 'subjects') return matchesSearch && req.subject && req.subject.length > 0;
    if (filterType === 'methods') return matchesSearch && req.mode && req.mode.length > 0;
    
    return matchesSearch;
  });

  const sortedRequests = filteredRequests?.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.code - b.code;
    } else {
      return b.code - a.code;
    }
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center',
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: 'white'
      }}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          variant="dot"
        >
          <Avatar 
            sx={{ 
              width: 64, 
              height: 64,
              mb: 1,
              border: '2px solid white'
            }}
          >
            {param.id.substring(0, 2)}
          </Avatar>
        </StyledBadge>
        <Typography variant="h6" fontWeight="bold">
          {t.profile}
        </Typography>
        <Typography variant="body2">
          ID: {param.id}
        </Typography>
      </Box>
      
      <Divider />
      
      <List>
        <ListItem button onClick={() => navigate(`/dashboard/${param.id}`)}>
          <ListItemIcon>
            <DashboardIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={t.dashboard} />
        </ListItem>
        
        {/* <ListItem button onClick={() => navigate(`/schedule/${param.id}`)}>
          <ListItemIcon>
            <CalendarTodayIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={t.schedule} />
        </ListItem> */}
        
        <ListItem button>
          <ListItemIcon>
            <Badge badgeContent={3} color="error">
              <NotificationsIcon color="primary" />
            </Badge>
          </ListItemIcon>
          <ListItemText primary={t.notifications} />
        </ListItem>
      </List>
      
      <Divider />
      
      <List>
        <ListItem button onClick={handleLanguageChange}>
          <ListItemIcon>
            <LanguageIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={t.language} />
        </ListItem>
        
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={t.settings} />
        </ListItem>
        
        <ListItem button onClick={() => navigate('/')}>
          <ListItemIcon>
            <LogoutIcon color="error" />
          </ListItemIcon>
          <ListItemText primary={t.logout} />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: 'background.default',
      direction: textDirection
    }}>
      <AppBar position="static" elevation={0} sx={{ 
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h5" component="div" sx={{ 
            flexGrow: 1, 
            fontWeight: 'bold',
            letterSpacing: '0.5px'
          }}>
            {t.myRequests}
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Tooltip title={t.language}>
              <IconButton color="inherit" onClick={handleLanguageChange}>
                <LanguageIcon />
              </IconButton>
            </Tooltip>
            
            <Tooltip title={t.filterBy}>
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <FilterListIcon />
              </IconButton>
            </Tooltip>
            
            <Tooltip title={t.sortBy}>
              <IconButton 
                color="inherit" 
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              >
                <SortIcon sx={{ 
                  transform: sortOrder === 'desc' ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.3s ease'
                }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
        
        <Box sx={{ bgcolor: 'background.paper' }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="request tabs"
          >
            <Tab 
              icon={<MenuBookIcon />} 
              iconPosition="start" 
              label={t.requestsTab} 
            />
            <Tab 
              icon={<HandshakeSharpIcon />} 
              iconPosition="start" 
              label={t.matchesTab} 
            />
            <Tab
              icon={<FavoriteIcon />} 
              iconPosition="start" 
              label={t.favoritesTab} 
            />
          </Tabs>
        </Box>
      </AppBar>
      
      <SwipeableDrawer
        anchor={textDirection === 'rtl' ? 'right' : 'left'}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {drawerList()}
      </SwipeableDrawer>
      
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem 
          onClick={() => {
            setFilterType('all');
            handleMenuClose();
          }}
          selected={filterType === 'all'}
        >
          {t.all}
        </MenuItem>
        <MenuItem 
          onClick={() => {
            setFilterType('books');
            handleMenuClose();
          }}
          selected={filterType === 'books'}
        >
          {t.books}
        </MenuItem>
        <MenuItem 
          onClick={() => {
            setFilterType('subjects');
            handleMenuClose();
          }}
          selected={filterType === 'subjects'}
        >
          {t.subjects}
        </MenuItem>
        <MenuItem 
          onClick={() => {
            setFilterType('methods');
            handleMenuClose();
          }}
          selected={filterType === 'methods'}
        >
          {t.methods}
        </MenuItem>
      </Menu>
      
      <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
        {tabValue === 0 && (
          <>
            <Box sx={{ mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder={t.search}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon color="primary" />
                        </InputAdornment>
                      ),
                      sx: {
                        borderRadius: 2,
                        bgcolor: 'background.paper',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                        '&:hover': {
                          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                        },
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ display: 'flex', gap: 2, height: '100%' }}>
                    <GradientButton
                      fullWidth
                      variant="contained"
                      startIcon={<AddIcon />}
                      onClick={() => {
                        setIsEditMode(false);
                        setRequest({ personId: param.id, book: "", subject: "", mode: "", chavrutaCode: null });
                        setOpen(true);
                      }}
                      sx={{ height: '100%' }}
                    >
                      {t.addRequest}
                    </GradientButton>
                    
                    {/* <GradientButton
                      fullWidth
                      variant="contained"
                      startIcon={<CalendarTodayIcon />}
                      onClick={() => navigate(`/schedule/${param.id}`)}
                      sx={{ height: '100%' }}
                    >
                      {t.schedule}
                    </GradientButton> */}
                  </Box>
                </Grid>
              </Grid>
            </Box>
            
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 8 }}>
                <CircularProgress size={60} thickness={4} color="secondary" />
              </Box>
            ) : isMobile ? (
              // Mobile view - Card layout
              <Box sx={{ mt: 4 }}>
                {sortedRequests?.length > 0 ? (
                  <Grid container spacing={3}>
                    {sortedRequests.map((item, index) => (
                      <Grid item xs={12} sm={6} key={item.code}>
                        <Grow in={true} timeout={500 + (index * 100)}>
                          <AnimatedCard>
                            <CardHeader>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="h6" fontWeight="bold">
                                  {t.code}: {item.code}
                                </Typography>
                                <Chip 
                                  label={item.chavrutaCode ? t.matched : t.active}
                                  color={item.chavrutaCode ? "success" : "primary"}
                                  size="small"
                                  sx={{ fontWeight: 'medium' }}
                                />
                              </Box>
                            </CardHeader>
                            
                            <CardContent sx={{ flexGrow: 1 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <BookIcon color="secondary" sx={{ mr: 1 }} />
                                <Typography variant="body1" fontWeight="medium">
                                  {t.book}: {item.book}
                                </Typography>
                              </Box>
                              
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <SubjectIcon color="secondary" sx={{ mr: 1 }} />
                                <Typography variant="body1" fontWeight="medium">
                                  {t.subject}: {item.subject}
                                </Typography>
                              </Box>
                              
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <SchoolIcon color="secondary" sx={{ mr: 1 }} />
                                <Typography variant="body1" fontWeight="medium">
                                  {t.learningMethod}: {item.mode}
                                </Typography>
                              </Box>
                            </CardContent>
                            
                            <Divider />
                            
                            <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                              <Box>
                                <Tooltip title={t.edit}>
                                  <IconButton 
                                    color="secondary"
                                    onClick={() => {
                                      setRequest(item);
                                      setIsEditMode(true);
                                      setOpen(true);
                                    }}
                                  >
                                    <EditIcon />
                                  </IconButton>
                                </Tooltip>
                                
                                <Tooltip title={t.delete}>
                                  <IconButton 
                                    color="error"
                                    onClick={() => confirmDelete(item.code)}
                                  >
                                    <DeleteIcon />
                                  </IconButton>
                                </Tooltip>
                              </Box>
                              
                              <Tooltip title={t.findChavruta}>
                                <IconButton 
                                  color="success"
                                  onClick={() => navigate(`/chavruta/${item.code}`)}
                                  sx={{
                                    background: alpha(theme.palette.success.main, 0.1),
                                    '&:hover': {
                                      background: alpha(theme.palette.success.main, 0.2),
                                    }
                                  }}
                                >
                                  <HandshakeSharpIcon />
                                </IconButton>
                              </Tooltip>
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
                      p: 4, 
                      textAlign: 'center',
                      borderRadius: 2,
                      bgcolor: alpha(theme.palette.primary.light, 0.05),
                      border: `1px dashed ${alpha(theme.palette.primary.main, 0.3)}`
                    }}
                  >
                    <MenuBookIcon sx={{ fontSize: 60, color: 'text.secondary', mb: 2, opacity: 0.7 }} />
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      {t.noRequests}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<AddIcon />}
                      onClick={() => {
                        setIsEditMode(false);
                        setRequest({ personId: param.id, book: "", subject: "", mode: "", chavrutaCode: null });
                        setOpen(true);
                      }}
                      sx={{ mt: 2 }}
                    >
                      {t.addRequest}
                    </Button>
                  </Paper>
                )}
              </Box>
            ) : (
              // Desktop view - Table layout
              <TableContainer 
                component={Paper} 
                sx={{ 
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  overflow: 'hidden'
                }}
              >
                <Table>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center">{t.code}</StyledTableCell>
                      <StyledTableCell align="center">{t.book}</StyledTableCell>
                      <StyledTableCell align="center">{t.subject}</StyledTableCell>
                      <StyledTableCell align="center">{t.learningMethod}</StyledTableCell>
                      <StyledTableCell align="center">{t.delete}</StyledTableCell>
                      <StyledTableCell align="center">{t.edit}</StyledTableCell>
                      <StyledTableCell align="center">{t.findChavruta}</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {sortedRequests?.length > 0 ? (
                      sortedRequests.map((item, index) => (
                        <Zoom 
                          in={true} 
                          style={{ transitionDelay: `${index * 50}ms` }}
                          key={item.code}
                        >
                          <StyledTableRow>
                            <StyledTableCell align="center">
                              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                                {item.code}
                                {item.chavrutaCode && (
                                  <Chip 
                                    label={t.matched}
                                    color="success"
                                    size="small"
                                    sx={{ fontWeight: 'medium' }}
                                  />
                                )}
                              </Box>
                            </StyledTableCell>
                            <StyledTableCell align="center">{item.book}</StyledTableCell>
                            <StyledTableCell align="center">{item.subject}</StyledTableCell>
                            <StyledTableCell align="center">{item.mode}</StyledTableCell>
                            <StyledTableCell align="center">
                              <StyledFab 
                                size="small" 
                                color="error" 
                                aria-label={t.delete}
                                onClick={() => confirmDelete(item.code)}
                              >
                                <DeleteIcon />
                              </StyledFab>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <StyledFab 
                                size="small" 
                                color="secondary" 
                                aria-label={t.edit}
                                onClick={() => {
                                  setRequest(item);
                                  setIsEditMode(true);
                                  setOpen(true);
                                }}
                              >
                                <EditIcon />
                              </StyledFab>
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <StyledFab 
                                size="small" 
                                color="success" 
                                aria-label={t.findChavruta}
                                onClick={() => navigate(`/chavruta/${item.code}`)}
                              >
                                <HandshakeSharpIcon />
                              </StyledFab>
                            </StyledTableCell>
                          </StyledTableRow>
                        </Zoom>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={7} align="center" sx={{ py: 4 }}>
                          <Typography variant="h6" color="text.secondary" gutterBottom>
                            {t.noRequests}
                          </Typography>
                          <Button
                            variant="contained"
                            color="primary"
                            startIcon={<AddIcon />}
                            onClick={() => {
                              setIsEditMode(false);
                              setRequest({ personId: param.id, book: "", subject: "", mode: "", chavrutaCode: null });
                              setOpen(true);
                            }}
                            sx={{ mt: 2 }}
                          >
                            {t.addRequest}
                          </Button>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </>
        )}
        
        {tabValue === 1 && (
          <Box sx={{ p: 3, textAlign: 'center' }}>
            <HandshakeSharpIcon sx={{ fontSize: 80, color: theme.palette.primary.main, opacity: 0.7, mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              {language === 'en' ? "Your Chavruta Matches" : "התאמות החברותא שלך"}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {language === 'en' 
                ? "This is where you'll see all your matched Chavruta partners." 
                : "כאן תראה את כל שותפי החברותא המותאמים שלך."}
            </Typography>
          </Box>
        )}
        
        {tabValue === 2 && (
          <Box sx={{ p: 3, textAlign: 'center' }}>
            <FavoriteIcon sx={{ fontSize: 80, color: theme.palette.error.main, opacity: 0.7, mb: 2 }} />
            <Typography variant="h5" gutterBottom>
              {language === 'en' ? "Your Favorite Requests" : "הבקשות המועדפות שלך"}
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              {language === 'en' 
                ? "Save your favorite requests for quick access." 
                : "שמור את הבקשות המועדפות עליך לגישה מהירה."}
            </Typography>
          </Box>
        )}
      </Container>
      
      {/* Dialog for adding/editing requests */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: '0 24px 38px rgba(0,0,0,0.14), 0 9px 46px rgba(0,0,0,0.12), 0 11px 15px rgba(0,0,0,0.2)',
          }
        }}
      >
        <DialogTitle sx={{ 
          background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,
          color: 'white',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Typography variant="h6" fontWeight="bold">
            {isEditMode ? t.edit : t.addRequest}
          </Typography>
          <IconButton 
            onClick={() => setOpen(false)}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        <DialogContent sx={{ mt: 2 }}>
          <Grid container spacing={3} sx={{ mt: 0 }}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                {t.id}
              </Typography>
              <Typography variant="body1">
                {param.id}
              </Typography>
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t.book}
                variant="outlined"
                value={request.book}
                onChange={(e) => setRequest({ ...request, book: e.target.value })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <BookIcon color="secondary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t.subject}
                variant="outlined"
                value={request.subject}
                onChange={(e) => setRequest({ ...request, subject: e.target.value })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SubjectIcon color="secondary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={t.learningMethod}
                variant="outlined"
                value={request.mode}
                onChange={(e) => setRequest({ ...request, mode: e.target.value })}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SchoolIcon color="secondary" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        
        <DialogActions sx={{ p: 3 }}>
          <Button
            variant="outlined"
            onClick={() => setOpen(false)}
            sx={{ borderRadius: 2 }}
          >
            {t.cancel}
          </Button>
          
          <GradientButton
            variant="contained"
            onClick={isEditMode ? updateRequest : addRequest}
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
          >
            {loading ? t.loading : isEditMode ? t.update : t.add}
          </GradientButton>
        </DialogActions>
      </Dialog>
      
      {/* Confirm Delete Dialog */}
      <Dialog
        open={confirmDeleteOpen}
        onClose={() => setConfirmDeleteOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          sx: {
            borderRadius: 2,
            boxShadow: '0 24px 38px rgba(0,0,0,0.14), 0 9px 46px rgba(0,0,0,0.12), 0 11px 15px rgba(0,0,0,0.2)',
          }
        }}
      >
        <DialogTitle id="alert-dialog-title" sx={{ pb: 1 }}>
          <Typography variant="h6" fontWeight="bold" color="error">
            {t.confirmDelete}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {language === 'en' 
              ? "This action cannot be undone. Are you sure you want to proceed?" 
              : "לא ניתן לבטל פעולה זו. האם אתה בטוח שברצונך להמשיך?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button 
            onClick={() => setConfirmDeleteOpen(false)} 
            color="primary"
            variant="outlined"
            sx={{ borderRadius: 2 }}
          >
            {t.no}
          </Button>
          <Button 
            onClick={() => deleteRequest(requestToDelete)} 
            color="error"
            variant="contained"
            autoFocus
            sx={{ borderRadius: 2 }}
          >
            {t.yes}
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Loading Backdrop */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      
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
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            borderRadius: 2
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      
      {/* Floating Action Button for adding requests */}
      <Zoom in={!open}>
        <Box
          sx={{
            position: 'fixed',
            bottom: 24,
            right: textDirection === 'rtl' ? undefined : 24,
            left: textDirection === 'rtl' ? 24 : undefined,
          }}
        >
          <Fab
            color="secondary"
            aria-label={t.addRequest}
            onClick={() => {
              setIsEditMode(false);
              setRequest({ personId: param.id, book: "", subject: "", mode: "", chavrutaCode: null });
              setOpen(true);
            }}
            sx={{
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
              background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.main} 100%)`,
            }}
          >
            <AddIcon />
          </Fab>
        </Box>
      </Zoom>
    </Box>
  );
};

