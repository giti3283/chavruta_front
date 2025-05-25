
// *************************************
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
  ThemeProvider,
  createTheme
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
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import SortIcon from '@mui/icons-material/Sort';
import LanguageIcon from '@mui/icons-material/Language';

// Styled components
import { styled } from '@mui/material/styles';
import "./offer.css";

// Styled components with logon.jsx color scheme
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 16,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  background: 'linear-gradient(145deg, #fffcf2, #fff9e6)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '6px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%)'
  }
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'medium',
  fontSize: '0.95rem',
  padding: theme.spacing(2),
  borderBottom: `1px solid ${alpha('#7c3aed', 0.2)}`,
  '&.MuiTableCell-head': {
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '1rem'
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  transition: 'background-color 0.2s ease, transform 0.2s ease',
  '&:nth-of-type(odd)': {
    backgroundColor: 'rgba(124, 58, 237, 0.05)',
  },
  '&:hover': {
    backgroundColor: 'rgba(124, 58, 237, 0.1)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(124, 58, 237, 0.2)',
    cursor: 'pointer'
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledFab = styled(Fab)(({ theme }) => ({
  boxShadow: '0 4px 12px rgba(124, 58, 237, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 16px rgba(124, 58, 237, 0.4)',
  },
  '&.MuiFab-colorError': {
    background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
    '&:hover': {
      background: 'linear-gradient(135deg, #b91c1c 0%, #991b1b 100%)',
    }
  },
  '&.MuiFab-colorSecondary': {
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    '&:hover': {
      background: 'linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)',
    }
  }
}));

const AnimatedCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 16,
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  background: 'linear-gradient(145deg, #fffcf2, #fff9e6)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 32px rgba(124, 58, 237, 0.15)',
  }
}));

const CardHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
  color: '#ffffff',
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

const GradientButton = styled(Button)(({ theme, variant }) => ({
  borderRadius: 8,
  padding: '10px 24px',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: variant === 'contained' ? '0 4px 14px rgba(124, 58, 237, 0.3)' : 'none',
  background: variant === 'contained' ? 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)' : 'transparent',
  border: variant === 'outlined' ? '2px solid #7c3aed' : 'none',
  color: variant === 'contained' ? '#ffffff' : '#7c3aed',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: variant === 'contained' ? 'linear-gradient(135deg, #4338ca 0%, #6d28d9 100%)' : 'rgba(124, 58, 237, 0.08)',
    boxShadow: variant === 'contained' ? '0 6px 20px rgba(124, 58, 237, 0.4)' : 'none',
    transform: 'translateY(-2px)',
  }
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 8,
    backgroundColor: '#ffffff',
    '&:hover fieldset': {
      borderColor: '#7c3aed',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7c3aed',
    },
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#7c3aed',
  }
}));

// יצירת ערכת נושא מותאמת
const getCustomTheme = (theme) => createTheme({
  ...theme,
  palette: {
    primary: {
      main: '#7c3aed',
      light: '#a78bfa',
      dark: '#6d28d9',
    },
    secondary: {
      main: '#db2777',
      light: '#f472b6',
      dark: '#be185d',
    },
    success: {
      main: '#059669',
      light: '#34d399',
      dark: '#047857',
    },
    background: {
      default: '#fffcf2',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Heebo", "Roboto", "Arial", sans-serif',
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#64748b',
        },
      },
    },
  },
});

export const Offer = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const dialogRef = useRef(null);
  const navigate = useNavigate();
  const theme = useTheme();
  const customTheme = getCustomTheme(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // State
  const [isEditMode, setIsEditMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');
  const [anchorEl, setAnchorEl] = useState(null);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'he' for Hebrew
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

  // Translations
  const translations = {
    en: {
      myOffers: "My Offers",
      addOffer: "Add Offer",
      schedule: "Schedule",
      id: "ID",
      book: "Book",
      subject: "Subject",
      learningMethod: "Learning Method",
      delete: "Delete",
      edit: "Edit",
      update: "Update",
      add: "Add",
      exit: "Exit",
      code: "Code",
      search: "Search offers...",
      filterBy: "Filter by",
      all: "All",
      books: "Books",
      subjects: "Subjects",
      methods: "Methods",
      sortBy: "Sort by",
      ascending: "Ascending",
      descending: "Descending",
      offerAdded: "Offer added successfully!",
      offerUpdated: "Offer updated successfully!",
      offerDeleted: "Offer deleted successfully!",
      confirmDelete: "Are you sure you want to delete this offer?",
      yes: "Yes",
      no: "No",
      noOffers: "No offers found. Add your first offer!",
      language: "Language"
    },
    he: {
      myOffers: "ההצעות שלי",
      addOffer: "הוספת הצעה",
      schedule: "מערכת שעות",
      id: "ת.ז",
      book: "ספר",
      subject: "נושא",
      learningMethod: "אופן הלמידה",
      delete: "מחק",
      edit: "ערוך",
      update: "עדכון",
      add: "הוספה",
      exit: "יציאה",
      code: "קוד",
      search: "חיפוש הצעות...",
      filterBy: "סנן לפי",
      all: "הכל",
      books: "ספרים",
      subjects: "נושאים",
      methods: "שיטות",
      sortBy: "מיין לפי",
      ascending: "סדר עולה",
      descending: "סדר יורד",
      offerAdded: "ההצעה נוספה בהצלחה!",
      offerUpdated: "ההצעה עודכנה בהצלחה!",
      offerDeleted: "ההצעה נמחקה בהצלחה!",
      confirmDelete: "האם אתה בטוח שברצונך למחוק הצעה זו?",
      yes: "כן",
      no: "לא",
      noOffers: "לא נמצאו הצעות. הוסף את ההצעה הראשונה שלך!",
      language: "שפה"
    }
  };

  const t = translations[language];
  const textDirection = language === 'he' ? 'rtl' : 'ltr';

  // Functions
  const getOffers = async () => {
    try {
      await dispatch(getOffersByIdThunk(param.id));
      setSnackbar({
        open: true,
        message: "Offers loaded successfully",
        severity: "success"
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Failed to load offers",
        severity: "error"
      });
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
    
    try {
      await dispatch(AddOfferThunk(offer));
      dialogRef.current.close();
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
    }
  };

  const deleteOffer = async (code) => {
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
    
    try {
      dispatch(editOffer(offer));
      await dispatch(UpdateOfferThunk(offer));
      dialogRef.current.close();
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

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #fffcf2 0%, #fff9e6 100%)',
        direction: textDirection
      }}>
        <AppBar position="static" elevation={0} sx={{ 
          background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
        }}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ 
              flexGrow: 1, 
              fontWeight: 'bold',
              letterSpacing: '0.5px',
              background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {t.myOffers}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Tooltip title={t.language}>
                <IconButton 
                  color="inherit" 
                  onClick={handleLanguageChange}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'scale(1.1)',
                    }
                  }}
                >
                  <LanguageIcon />
                </IconButton>
              </Tooltip>
              
              <Tooltip title={t.filterBy}>
                <IconButton 
                  color="inherit" 
                  onClick={handleMenuOpen}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'scale(1.1)',
                    }
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
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'scale(1.1)',
                    }
                  }}
                >
                  <SortIcon sx={{ 
                    transform: sortOrder === 'desc' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.3s ease'
                  }} />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
        
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          PaperProps={{
            sx: {
              borderRadius: 2,
              boxShadow: '0 8px 24px rgba(124, 58, 237, 0.15)',
              border: '1px solid rgba(124, 58, 237, 0.1)',
            }
          }}
        >
          <MenuItem 
            onClick={() => {
              setFilterType('all');
              handleMenuClose();
            }}
            selected={filterType === 'all'}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'rgba(124, 58, 237, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(124, 58, 237, 0.15)',
                }
              }
            }}
          >
            {t.all}
          </MenuItem>
          <MenuItem 
            onClick={() => {
              setFilterType('books');
              handleMenuClose();
            }}
            selected={filterType === 'books'}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'rgba(124, 58, 237, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(124, 58, 237, 0.15)',
                }
              }
            }}
          >
            {t.books}
          </MenuItem>
          <MenuItem 
            onClick={() => {
              setFilterType('subjects');
              handleMenuClose();
            }}
            selected={filterType === 'subjects'}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'rgba(124, 58, 237, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(124, 58, 237, 0.15)',
                }
              }
            }}
          >
            {t.subjects}
          </MenuItem>
          <MenuItem 
            onClick={() => {
              setFilterType('methods');
              handleMenuClose();
            }}
            selected={filterType === 'methods'}
            sx={{
              '&.Mui-selected': {
                backgroundColor: 'rgba(124, 58, 237, 0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(124, 58, 237, 0.15)',
                }
              }
            }}
          >
            {t.methods}
          </MenuItem>
        </Menu>
        
        <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
          <Box sx={{ mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <StyledTextField
                  fullWidth
                  variant="outlined"
                  placeholder={t.search}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: '#7c3aed' }} />
                      </InputAdornment>
                    ),
                    sx: {
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                      boxShadow: '0 2px 8px rgba(124, 58, 237, 0.08)',
                      '&:hover': {
                        boxShadow: '0 4px 12px rgba(124, 58, 237, 0.12)',
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
                      setOffer({ personId: param.id, book: "", subject: "", mode: "" });
                      dialogRef.current.showModal();
                    }}
                    sx={{ height: '100%' }}
                  >
                    {t.addOffer}
                  </GradientButton>
                  
                  <GradientButton
                    fullWidth
                    variant="contained"
                    startIcon={<CalendarTodayIcon />}
                    onClick={() => navigate(`/schedule/${param.id}`)}
                    sx={{ 
                      height: '100%',
                      background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #047857 0%, #065f46 100%)',
                      }
                    }}
                  >
                    {t.schedule}
                  </GradientButton>
                </Box>
              </Grid>
            </Grid>
          </Box>
          
          {isMobile ? (
            // תצוגה ניידת - פריסת כרטיסים
            <Box sx={{ mt: 4 }}>
              {sortedOffers?.length > 0 ? (
                <Grid container spacing={3}>
                  {sortedOffers.map((item) => (
                    <Grid item xs={12} sm={6} key={item.code}>
                      <Grow in={true} timeout={500 + (sortedOffers.indexOf(item) * 100)}>
                        <AnimatedCard>
                          <CardHeader>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1, position: 'relative' }}>
                              <Typography variant="h6" fontWeight="bold">
                                {t.code}: {item.code}
                              </Typography>
                              <Chip 
                                label={item.subject}
                                sx={{ 
                                  fontWeight: 'medium',
                                  background: 'linear-gradient(135deg, #db2777 0%, #be185d 100%)',
                                  color: '#ffffff'
                                }}
                                size="small"
                              />
                            </Box>
                          </CardHeader>
                          
                          <CardContent sx={{ flexGrow: 1, p: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                              <BookIcon sx={{ color: '#7c3aed', mr: 1 }} />
                              <Typography variant="body1" fontWeight="medium" sx={{ color: '#1e293b' }}>
                                {t.book}: {item.book}
                              </Typography>
                            </Box>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                              <SubjectIcon sx={{ color: '#7c3aed', mr: 1 }} />
                              <Typography variant="body1" fontWeight="medium" sx={{ color: '#1e293b' }}>
                                {t.subject}: {item.subject}
                              </Typography>
                            </Box>
                            
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <SchoolIcon sx={{ color: '#7c3aed', mr: 1 }} />
                              <Typography variant="body1" fontWeight="medium" sx={{ color: '#1e293b' }}>
                                {t.learningMethod}: {item.mode}
                              </Typography>
                            </Box>
                          </CardContent>
                          
                          <Divider sx={{ borderColor: 'rgba(124, 58, 237, 0.1)' }} />
                          
                          <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                            <Tooltip title={t.edit}>
                              <IconButton 
                                onClick={() => {
                                  setOffer(item);
                                  setIsEditMode(true);
                                  dialogRef.current.showModal();
                                }}
                                sx={{
                                  color: '#7c3aed',
                                  '&:hover': {
                                    backgroundColor: 'rgba(124, 58, 237, 0.1)',
                                    transform: 'scale(1.1)',
                                  }
                                }}
                              >
                                <EditIcon />
                              </IconButton>
                            </Tooltip>
                            
                            <Tooltip title={t.delete}>
                              <IconButton 
                                onClick={() => deleteOffer(item.code)}
                                sx={{
                                  color: '#dc2626',
                                  '&:hover': {
                                    backgroundColor: 'rgba(220, 38, 38, 0.1)',
                                    transform: 'scale(1.1)',
                                  }
                                }}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Tooltip>
                          </CardActions>
                        </AnimatedCard>
                      </Grow>
                    </Grid>
                  ))}
                </Grid>
              ) : (
                <StyledPaper 
                  elevation={0} 
                  sx={{ 
                    p: 4, 
                    textAlign: 'center',
                    border: `1px dashed rgba(124, 58, 237, 0.3)`
                  }}
                >
                  <MenuBookIcon sx={{ fontSize: 60, color: '#7c3aed', mb: 2, opacity: 0.7 }} />
                  <Typography variant="h6" sx={{ color: '#64748b', mb: 2 }} gutterBottom>
                  {t.noOffers}
                  </Typography>
                  <GradientButton
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => {
                      setIsEditMode(false);
                      setOffer({ personId: param.id, book: "", subject: "", mode: "" });
                      dialogRef.current.showModal();
                    }}
                    sx={{ mt: 2 }}
                  >
                    {t.addOffer}
                  </GradientButton>
                </StyledPaper>
              )}
            </Box>
          ) : (
            // תצוגת שולחן עבודה - פריסת טבלה
            <TableContainer 
              component={StyledPaper} 
              sx={{ 
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(124, 58, 237, 0.08)',
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sortedOffers?.length > 0 ? (
                    sortedOffers.map((item, index) => (
                      <Zoom 
                        in={true} 
                        style={{ transitionDelay: `${index * 50}ms` }}
                        key={item.code}
                      >
                        <StyledTableRow>
                          <StyledTableCell align="center" sx={{ color: '#1e293b', fontWeight: 'medium' }}>
                            {item.code}
                          </StyledTableCell>
                          <StyledTableCell align="center" sx={{ color: '#1e293b', fontWeight: 'medium' }}>
                            {item.book}
                          </StyledTableCell>
                          <StyledTableCell align="center" sx={{ color: '#1e293b', fontWeight: 'medium' }}>
                            {item.subject}
                          </StyledTableCell>
                          <StyledTableCell align="center" sx={{ color: '#1e293b', fontWeight: 'medium' }}>
                            {item.mode}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            <StyledFab 
                              size="small" 
                              color="error" 
                              aria-label={t.delete}
                              onClick={() => deleteOffer(item.code)}
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
                                setOffer(item);
                                setIsEditMode(true);
                                dialogRef.current.showModal();
                              }}
                            >
                              <EditIcon />
                            </StyledFab>
                          </StyledTableCell>
                        </StyledTableRow>
                      </Zoom>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} align="center" sx={{ py: 4 }}>
                        <MenuBookIcon sx={{ fontSize: 60, color: '#7c3aed', mb: 2, opacity: 0.7 }} />
                        <Typography variant="h6" sx={{ color: '#64748b', mb: 2 }} gutterBottom>
                          {t.noOffers}
                        </Typography>
                        <GradientButton
                          variant="contained"
                          startIcon={<AddIcon />}
                          onClick={() => {
                            setIsEditMode(false);
                            setOffer({ personId: param.id, book: "", subject: "", mode: "" });
                            dialogRef.current.showModal();
                          }}
                          sx={{ mt: 2 }}
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
        
        {/* דיאלוג להוספה/עריכה של הצעות */}
        <dialog 
          ref={dialogRef}
          className="modern-dialog"
          style={{ 
            border: 'none',
            borderRadius: '16px',
            padding: 0,
            boxShadow: '0 24px 38px rgba(124, 58, 237, 0.14), 0 9px 46px rgba(124, 58, 237, 0.12), 0 11px 15px rgba(124, 58, 237, 0.2)',
            maxWidth: '500px',
            width: '100%',
            direction: textDirection,
            background: 'linear-gradient(145deg, #fffcf2, #fff9e6)',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <CardHeader sx={{ pb: 4 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1, position: 'relative' }}>
                <Typography variant="h5" fontWeight="bold">
                  {isEditMode ? t.edit : t.addOffer}
                </Typography>
                <IconButton 
                  onClick={() => dialogRef.current.close()}
                  sx={{ 
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'scale(1.1)',
                    }
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </CardHeader>
            
            <Box sx={{ p: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="subtitle1" fontWeight="medium" gutterBottom sx={{ color: '#1e293b' }}>
                    {t.id}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    color: '#7c3aed', 
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                  }}>
                    {param.id}
                  </Typography>
                </Grid>
                
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label={t.book}
                    variant="outlined"
                    value={offer.book}
                    onChange={(e) => setOffer({ ...offer, book: e.target.value })}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <BookIcon sx={{ color: '#7c3aed' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label={t.subject}
                    variant="outlined"
                    value={offer.subject}
                    onChange={(e) => setOffer({ ...offer, subject: e.target.value })}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SubjectIcon sx={{ color: '#7c3aed' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <StyledTextField
                    fullWidth
                    label={t.learningMethod}
                    variant="outlined"
                    value={offer.mode}
                    onChange={(e) => setOffer({ ...offer, mode: e.target.value })}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SchoolIcon sx={{ color: '#7c3aed' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
                <GradientButton
                  variant="outlined"
                  onClick={() => dialogRef.current.close()}
                  sx={{ borderRadius: 2 }}
                >
                  {t.exit}
                </GradientButton>
                
                <GradientButton
                  variant="contained"
                  onClick={isEditMode ? updateOffer : addOffer}
                >
                  {isEditMode ? t.update : t.add}
                </GradientButton>
              </Box>
            </Box>
          </Box>
        </dialog>
        
        {/* הודעות התראה */}
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
              boxShadow: '0 4px 12px rgba(124, 58, 237, 0.15)',
              borderRadius: 2,
              '&.MuiAlert-filledSuccess': {
                background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
              },
              '&.MuiAlert-filledError': {
                background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
              },
              '&.MuiAlert-filledWarning': {
                background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
              },
              '&.MuiAlert-filledInfo': {
                background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
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

