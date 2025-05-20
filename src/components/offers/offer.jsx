
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
  Alert
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
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
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
  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
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
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: 'background.default',
      direction: textDirection
    }}>
      <AppBar position="static" elevation={0} sx={{ 
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
      }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ 
            flexGrow: 1, 
            fontWeight: 'bold',
            letterSpacing: '0.5px'
          }}>
            {t.myOffers}
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
                      </AppBar>
                      
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
                                  sx={{ height: '100%' }}
                                >
                                  {t.schedule}
                                </GradientButton>
                              </Box>
                            </Grid>
                          </Grid>
                        </Box>
                        
                        {isMobile ? (
                          // Mobile view - Card layout
                          <Box sx={{ mt: 4 }}>
                            {sortedOffers?.length > 0 ? (
                              <Grid container spacing={3}>
                                {sortedOffers.map((item) => (
                                  <Grid item xs={12} sm={6} key={item.code}>
                                    <Grow in={true} timeout={500 + (sortedOffers.indexOf(item) * 100)}>
                                      <AnimatedCard>
                                        <CardHeader>
                                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography variant="h6" fontWeight="bold">
                                              {t.code}: {item.code}
                                            </Typography>
                                            <Chip 
                                              label={item.subject}
                                              color="secondary"
                                              size="small"
                                              sx={{ fontWeight: 'medium' }}
                                            />
                                          </Box>
                                        </CardHeader>
                                        
                                        <CardContent sx={{ flexGrow: 1 }}>
                                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <BookIcon color="primary" sx={{ mr: 1 }} />
                                            <Typography variant="body1" fontWeight="medium">
                                              {t.book}: {item.book}
                                            </Typography>
                                          </Box>
                                          
                                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <SubjectIcon color="primary" sx={{ mr: 1 }} />
                                            <Typography variant="body1" fontWeight="medium">
                                              {t.subject}: {item.subject}
                                            </Typography>
                                          </Box>
                                          
                                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <SchoolIcon color="primary" sx={{ mr: 1 }} />
                                            <Typography variant="body1" fontWeight="medium">
                                              {t.learningMethod}: {item.mode}
                                            </Typography>
                                          </Box>
                                        </CardContent>
                                        
                                        <Divider />
                                        
                                        <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
                                          <Tooltip title={t.edit}>
                                            <IconButton 
                                              color="secondary"
                                              onClick={() => {
                                                setOffer(item);
                                                setIsEditMode(true);
                                                dialogRef.current.showModal();
                                              }}
                                            >
                                              <EditIcon />
                                            </IconButton>
                                          </Tooltip>
                                          
                                          <Tooltip title={t.delete}>
                                            <IconButton 
                                              color="error"
                                              onClick={() => deleteOffer(item.code)}
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
                                  {t.noOffers}
                                </Typography>
                                <Button
                                  variant="contained"
                                  color="primary"
                                  startIcon={<AddIcon />}
                                  onClick={() => {
                                    setIsEditMode(false);
                                    setOffer({ personId: param.id, book: "", subject: "", mode: "" });
                                    dialogRef.current.showModal();
                                  }}
                                  sx={{ mt: 2 }}
                                >
                                  {t.addOffer}
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
                                        <StyledTableCell align="center">{item.code}</StyledTableCell>
                                        <StyledTableCell align="center">{item.book}</StyledTableCell>
                                        <StyledTableCell align="center">{item.subject}</StyledTableCell>
                                        <StyledTableCell align="center">{item.mode}</StyledTableCell>
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
                                      <Typography variant="h6" color="text.secondary" gutterBottom>
                                        {t.noOffers}
                                      </Typography>
                                      <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<AddIcon />}
                                        onClick={() => {
                                          setIsEditMode(false);
                                          setOffer({ personId: param.id, book: "", subject: "", mode: "" });
                                          dialogRef.current.showModal();
                                        }}
                                        sx={{ mt: 2 }}
                                      >
                                        {t.addOffer}
                                      </Button>
                                    </TableCell>
                                  </TableRow>
                                )}
                              </TableBody>
                            </Table>
                          </TableContainer>
                        )}
                      </Container>
                      
                      {/* Dialog for adding/editing offers */}
                      <dialog 
                        ref={dialogRef}
                        className="modern-dialog"
                        style={{ 
                          border: 'none',
                          borderRadius: '16px',
                          padding: 0,
                          boxShadow: '0 24px 38px rgba(0,0,0,0.14), 0 9px 46px rgba(0,0,0,0.12), 0 11px 15px rgba(0,0,0,0.2)',
                          maxWidth: '500px',
                          width: '100%',
                          direction: textDirection
                        }}
                      >
                        <Box sx={{ position: 'relative' }}>
                          <CardHeader sx={{ pb: 4 }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Typography variant="h5" fontWeight="bold">
                                {isEditMode ? t.edit : t.addOffer}
                              </Typography>
                              <IconButton 
                                onClick={() => dialogRef.current.close()}
                                sx={{ color: 'white' }}
                              >
                                <CloseIcon />
                              </IconButton>
                            </Box>
                          </CardHeader>
                          
                          <Box sx={{ p: 3 }}>
                            <Grid container spacing={3}>
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
                                  value={offer.book}
                                  onChange={(e) => setOffer({ ...offer, book: e.target.value })}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <BookIcon color="primary" />
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
                                  value={offer.subject}
                                  onChange={(e) => setOffer({ ...offer, subject: e.target.value })}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <SubjectIcon color="primary" />
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
                                  value={offer.mode}
                                  onChange={(e) => setOffer({ ...offer, mode: e.target.value })}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <SchoolIcon color="primary" />
                                      </InputAdornment>
                                    ),
                                  }}
                                />
                              </Grid>
                            </Grid>
                            
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 4 }}>
                              <Button
                                variant="outlined"
                                onClick={() => dialogRef.current.close()}
                                sx={{ borderRadius: 2 }}
                              >
                                {t.exit}
                              </Button>
                              
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
      </Box>
    
  );
};

