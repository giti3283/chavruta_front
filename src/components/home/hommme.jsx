import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Divider,
  AppBar,
  Toolbar,
  Menu,

  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Fade,
  Zoom,
  Grow,
  Slide,
  Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LanguageIcon from '@mui/icons-material/Language';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CloseIcon from '@mui/icons-material/Close';

// Styled components
const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  color: theme.palette.common.white,
  padding: theme.spacing(10, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
  }
}));

const FeatureCard = styled(Card)(({ theme }) => ({
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

const StepCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
}));

const StepNumber = styled(Box)(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: theme.palette.common.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  fontSize: '1.25rem',
  marginBottom: theme.spacing(2)
}));

export const Home = () => {
  const navigate = useNavigate();




  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  // State
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [language, setLanguage] = useState('he'); // 'he' for Hebrew, 'en' for English
  const [anchorEl, setAnchorEl] = useState(null);
  
  // Translations
  const translations = {
    en: {
      title: "Find Your Perfect Chavruta",
      subtitle: "Connect with Torah learning partners based on your schedule, interests, and learning style",
      search: "Search by book or subject...",
      searchButton: "Find Chavruta",
      login: "Login",
      register: "Register",
      features: "Features",
      howItWorks: "How It Works",
      testimonials: "Testimonials",
      faq: "FAQ",
      contact: "Contact Us",
      featureTitle1: "Personalized Matching",
      featureDesc1: "Our smart algorithm matches you with the perfect learning partner based on your preferences and schedule.",
      featureTitle2: "Flexible Scheduling",
      featureDesc2: "Set your availability and find partners who can learn when you're free.",
      featureTitle3: "Diverse Learning Options",
      featureDesc3: "Choose from various learning styles, books, and subjects that interest you.",
      step1: "Create an Account",
      step1Desc: "Sign up with your personal details and learning preferences.",
      step2: "Set Your Schedule",
      step2Desc: "Mark your available times for learning in our calendar system.",
      step3: "Browse Offers",
      step3Desc: "Find potential learning partners based on your interests.",
      step4: "Connect and Learn",
      step4Desc: "Start your chavruta journey and grow in Torah knowledge together.",
      getStarted: "Get Started Now",
      learnMore: "Learn More",
      faqTitle: "Frequently Asked Questions",
      faq1: "How does the matching process work?",
      faq1Answer: "Our algorithm considers your learning preferences, schedule, and learning style to suggest the most compatible chavruta partners for you.",
      faq2: "Is this service free?",
      faq2Answer: "Yes, ChavrutaConnect is completely free for all users. Our mission is to promote Torah learning worldwide.",
      faq3: "Can I change my chavruta if it's not working out?",
      faq3Answer: "Absolutely. You can end a chavruta arrangement at any time and find a new partner through our system.",
      faq4: "What subjects and books are available?",
      faq4Answer: "You can learn any Jewish text or subject. Users specify what they want to learn or teach when creating their profiles.",
      testimonialTitle: "What Our Users Say",
      testimonial1: "ChavrutaConnect helped me find the perfect learning partner. We've been learning Gemara together for 6 months now!",
      testimonial1Author: "David Cohen, Jerusalem",
      testimonial2: "As someone with a busy schedule, I never thought I'd find time for regular Torah study. This platform made it possible!",
      testimonial2Author: "Sarah Levy, New York",
      testimonial3: "The matching algorithm is incredible. My chavruta and I are perfectly aligned in our learning pace and interests.",
      testimonial3Author: "Moshe Goldberg, Tel Aviv",
      contactTitle: "Ready to Start Your Learning Journey?",
      contactDesc: "Join thousands of users who have found their perfect chavruta partner.",
      emailPlaceholder: "Your email",
      subscribe: "Subscribe",
      footerText: "© 2023 ChavrutaConnect. All rights reserved.",
      language: "Language"
    },
    he: {
      title: "מצא את החברותא המושלמת עבורך",
      subtitle: "התחבר עם שותפים ללימוד תורה על פי הלו״ז, תחומי העניין וסגנון הלמידה שלך",
      search: "חפש לפי ספר או נושא...",
      searchButton: "חפש חברותא",
      login: "התחברות",
      register: "הרשמה",
      features: "תכונות",
      howItWorks: "איך זה עובד",
      testimonials: "המלצות",
      faq: "שאלות נפוצות",
      contact: "צור קשר",
      featureTitle1: "התאמה אישית",
      featureDesc1: "האלגוריתם החכם שלנו מתאים לך את שותף הלימוד המושלם על פי העדפותיך ולוח הזמנים שלך.",
      featureTitle2: "לוח זמנים גמיש",
      featureDesc2: "הגדר את הזמינות שלך ומצא שותפים שיכולים ללמוד כשאתה פנוי.",
      featureTitle3: "מגוון אפשרויות לימוד",
      featureDesc3: "בחר מבין סגנונות לימוד, ספרים ונושאים שמעניינים אותך.",
      step1: "צור חשבון",
      step1Desc: "הירשם עם הפרטים האישיים שלך והעדפות הלימוד.",
      step2: "הגדר את לוח הזמנים שלך",
      step2Desc: "סמן את הזמנים הפנויים שלך ללימוד במערכת היומן שלנו.",
      step3: "עיין בהצעות",
      step3Desc: "מצא שותפי לימוד פוטנציאליים על פי תחומי העניין שלך.",
      step4: "התחבר ולמד",
      step4Desc: "התחל את מסע החברותא שלך וגדל בידע תורני יחד.",
      getStarted: "התחל עכשיו",
      learnMore: "למד עוד",
      faqTitle: "שאלות נפוצות",
      faq1: "איך תהליך ההתאמה עובד?",
      faq1Answer: "האלגוריתם שלנו מתחשב בהעדפות הלימוד שלך, בלוח הזמנים ובסגנון הלמידה כדי להציע את שותפי החברותא המתאימים ביותר עבורך.",
      faq2: "האם השירות הזה חינמי?",
      faq2Answer: "כן, חברותא קונקט הוא לחלוטין חינמי לכל המשתמשים. המשימה שלנו היא לקדם לימוד תורה בכל העולם.",
      faq3: "האם אני יכול להחליף חברותא אם זה לא מסתדר?",
      faq3Answer: "בהחלט. אתה יכול לסיים הסדר חברותא בכל עת ולמצוא שותף חדש דרך המערכת שלנו.",
      faq4: "אילו נושאים וספרים זמינים?",
      faq4Answer: "אתה יכול ללמוד כל טקסט או נושא יהודי. משתמשים מציינים מה הם רוצים ללמוד או ללמד בעת יצירת הפרופילים שלהם.",
      testimonialTitle: "מה המשתמשים שלנו אומרים",
      testimonial1: "חברותא קונקט עזרה לי למצוא את שותף הלימוד המושלם. אנחנו לומדים גמרא יחד כבר 6 חודשים!",
      testimonial1Author: "דוד כהן, ירושלים",
      testimonial2: "כמישהי עם לוח זמנים עמוס, מעולם לא חשבתי שאמצא זמן ללימוד תורה קבוע. הפלטפורמה הזו הפכה את זה לאפשרי!",
      testimonial2Author: "שרה לוי, ניו יורק",
      testimonial3: "האלגוריתם ההתאמה מדהים. החברותא שלי ואני מסונכרנים בצורה מושלמת בקצב הלימוד ובתחומי העניין.",
      testimonial3Author: "משה גולדברג, תל אביב",
      contactTitle: "מוכנים להתחיל את מסע הלמידה שלכם?",
      contactDesc: "הצטרפו לאלפי משתמשים שמצאו את שותף החברותא המושלם שלהם.",
      emailPlaceholder: "האימייל שלך",
      subscribe: "הרשם",
      footerText: "© 2023 חברותא קונקט. כל הזכויות שמורות.",
      language: "שפה"
    }
  };

  const t = translations[language];
  const textDirection = language === 'he' ? 'rtl' : 'ltr';

  const handleLanguageChange = () => {
    setLanguage(language === 'he' ? 'en' : 'he');
    handleMenuClose();
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleSearch = () => {
    if (searchValue.trim()) {
      navigate(`/chavruta?search=${encodeURIComponent(searchValue)}`);
    }
  };

  const faqItems = [
    { question: t.faq1, answer: t.faq1Answer },
    { question: t.faq2, answer: t.faq2Answer },
    { question: t.faq3, answer: t.faq3Answer },
    { question: t.faq4, answer: t.faq4Answer }
  ];

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
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: `1px solid ${theme.palette.divider}`
      }}>
        <Typography variant="h6" fontWeight="bold">
          חברותא קונקט
        </Typography>
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <List>
        <ListItem button onClick={() => navigate('/login')}>
          <ListItemIcon>
            <LoginIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={t.login} />
        </ListItem>
        
        <ListItem button onClick={() => navigate('/logon')}>
          <ListItemIcon>
            <HowToRegIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={t.register} />
        </ListItem>
        
        <Divider />
        
        <ListItem button onClick={handleLanguageChange}>
          <ListItemIcon>
            <LanguageIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary={t.language} />
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
      {/* App Bar */}
      <AppBar position="static" elevation={0} sx={{ 
        background: 'transparent',
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.divider}`,
        color: 'text.primary'
      }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ 
            flexGrow: 1, 
            fontWeight: 'bold',
            color: theme.palette.primary.main
          }}>
            ChavrutaConnect
          </Typography>
          
          {isMobile ? (
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button color="inherit" onClick={() => navigate('/login')}>
                {t.login}
              </Button>
              
              <GradientButton
                variant="contained"
                onClick={() => navigate('/logon')}
              >
                {t.register}
              </GradientButton>
              
              <IconButton color="inherit" onClick={handleLanguageChange}>
                <LanguageIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      {/* Mobile Drawer */}
      <Drawer
        anchor={textDirection === 'rtl' ? 'right' : 'left'}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerList()}
      </Drawer>
      
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <Fade in={true} timeout={1000}>
                <Box>
                  <Typography 
                    variant="h2" 
                    component="h1" 
                    sx={{ 
                      fontWeight: 'bold',
                      mb: 2,
                      fontSize: { xs: '2.5rem', md: '3.5rem' }
                    }}
                  >
                    {t.title}
                  </Typography>
                  
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 4,



                      opacity: 0.9,
                      fontWeight: 'normal',
                      fontSize: { xs: '1.2rem', md: '1.5rem' }
                    }}
                  >
                    {t.subtitle}
                  </Typography>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                    maxWidth: '600px'
                  }}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      placeholder={t.search}
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon sx={{ color: 'white' }} />
                          </InputAdornment>
                        ),
                        sx: {
                          borderRadius: 3,
                          bgcolor: 'rgba(255, 255, 255, 0.15)',
                          color: 'white',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(255, 255, 255, 0.5)',
                          },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                          },
                          '&::placeholder': {
                            color: 'rgba(255, 255, 255, 0.7)',
                          }
                        }
                      }}
                    />
                    
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      onClick={handleSearch}
                      sx={{ 
                        borderRadius: 3,
                        whiteSpace: 'nowrap',
                        px: 4,
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
                      }}
                    >
                      {t.searchButton}
                    </Button>
                  </Box>
                </Box>
              </Fade>
            </Grid>
            
            <Grid item xs={12} md={5}>
              <Zoom in={true} timeout={1500}>
                <Box 
                  component="img"
                  src="/assets/hero-image.png" // Replace with your actual image path
                  alt="Chavruta learning"
                  sx={{
                    width: '100%',
                    maxWidth: '500px',
                    display: { xs: 'none', md: 'block' },
                    mx: 'auto',
                    filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))',
                    borderRadius: 4
                  }}
                />
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>
      
      {/* Features Section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold',
                mb: 2,
                color: 'text.primary'
              }}
            >
              {t.features}
            </Typography>
            
            <Divider sx={{ width: '80px', mx: 'auto', mb: 4, borderColor: theme.palette.primary.main, borderWidth: 2 }} />
          </Box>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Grow in={true} timeout={1000}>
                <FeatureCard>
                  <Box sx={{ 
                    height: '200px', 
                    background: `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <PersonIcon sx={{ fontSize: 80, color: 'white' }} />
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                      {t.featureTitle1}
                    </Typography>
                    
                    <Typography variant="body1" color="text.secondary">
                      {t.featureDesc1}
                    </Typography>
                  </CardContent>
                  
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button 
                      color="primary" 
                      endIcon={<ArrowForwardIcon />}
                      sx={{ fontWeight: 'medium' }}
                    >
                      {t.learnMore}
                    </Button>
                  </CardActions>
                </FeatureCard>
              </Grow>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Grow in={true} timeout={1500}>
                <FeatureCard>
                  <Box sx={{ 
                    height: '200px', 
                    background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, ${theme.palette.secondary.main} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <AccessTimeIcon sx={{ fontSize: 80, color: 'white' }} />
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                      {t.featureTitle2}
                    </Typography>
                    
                    <Typography variant="body1" color="text.secondary">
                      {t.featureDesc2}
                    </Typography>
                  </CardContent>
                  
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button 
                      color="primary" 
                      endIcon={<ArrowForwardIcon />}
                      sx={{ fontWeight: 'medium' }}
                    >
                      {t.learnMore}
                    </Button>
                  </CardActions>
                </FeatureCard>
              </Grow>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Grow in={true} timeout={2000}>
                <FeatureCard>
                  <Box sx={{ 
                    height: '200px', 
                    background: `linear-gradient(135deg, ${theme.palette.success.light} 0%, ${theme.palette.success.main} 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <BookIcon sx={{ fontSize: 80, color: 'white' }} />
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" component="h3" gutterBottom fontWeight="bold">
                      {t.featureTitle3}
                    </Typography>
                    
                    <Typography variant="body1" color="text.secondary">
                      {t.featureDesc3}
                    </Typography>
                  </CardContent>
                  
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button 
                      color="primary" 
                      endIcon={<ArrowForwardIcon />}
                      sx={{ fontWeight: 'medium' }}
                    >
                      {t.learnMore}
                    </Button>
                  </CardActions>
                </FeatureCard>
              </Grow>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* How It Works Section */}
      <Box sx={{ py: 10, bgcolor: 'rgba(0, 0, 0, 0.02)' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold',
                mb: 2,
                color: 'text.primary'
              }}
            >
              {t.howItWorks}
            </Typography>
            
            <Divider sx={{ width: '80px', mx: 'auto', mb: 4, borderColor: theme.palette.primary.main, borderWidth: 2 }} />
          </Box>
          
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <Fade in={true} timeout={1000}>
                <StepCard>
                  <StepNumber>1</StepNumber>
                  <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                    {t.step1}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    {t.step1Desc}
                  </Typography>
                </StepCard>
              </Fade>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Fade in={true} timeout={1500}>
                <StepCard>
                  <StepNumber>2</StepNumber>
                  <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                    {t.step2}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    {t.step2Desc}
                  </Typography>
                </StepCard>
              </Fade>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Fade in={true} timeout={2000}>
                <StepCard>
                  <StepNumber>3</StepNumber>
                  <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                    {t.step3}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    {t.step3Desc}
                  </Typography>
                </StepCard>
              </Fade>
            </Grid>
            
            <Grid item xs={12} sm={6} md={3}>
              <Fade in={true} timeout={2500}>
                <StepCard>
                  <StepNumber>4</StepNumber>
                  <Typography variant="h6" component="h3" gutterBottom fontWeight="bold">
                    {t.step4}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    {t.step4Desc}
                  </Typography>
                </StepCard>
              </Fade>
            </Grid>
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <GradientButton
              variant="contained"
              size="large"
              onClick={() => navigate('/logon')}
              sx={{ px: 4, py: 1.5 }}
            >
              {t.getStarted}
            </GradientButton>
          </Box>
        </Container>
      </Box>
      
      {/* Testimonials Section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold',
                mb: 2,
                color: 'text.primary'
              }}
            >
              {t.testimonialTitle}
            </Typography>
            
            <Divider sx={{ width: '80px', mx: 'auto', mb: 4, borderColor: theme.palette.primary.main, borderWidth: 2 }} />
          </Box>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Zoom in={true} timeout={1000}>
                <Card sx={{ 
                  height: '100%', 
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                  overflow: 'visible',
                  '&::before': {
                    content: '"""',
                    position: 'absolute',
                    top: -20,
                    left: 20,
                    fontSize: '4rem',
                    color: theme.palette.primary.main,
                    opacity: 0.2,
                    fontFamily: 'serif'
                  }
                }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="body1" paragraph>
                      {t.testimonial1}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                      <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>
                        DC
                      </Avatar>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {t.testimonial1Author}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Zoom in={true} timeout={1500}>
                <Card sx={{ 
                  height: '100%', 
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                  overflow: 'visible',
                  '&::before': {
                    content: '"""',
                    position: 'absolute',
                    top: -20,
                    left: 20,
                    fontSize: '4rem',
                    color: theme.palette.primary.main,
                    opacity: 0.2,
                    fontFamily: 'serif'
                  }
                }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="body1" paragraph>
                      {t.testimonial2}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                      <Avatar sx={{ bgcolor: theme.palette.secondary.main, mr: 2 }}>
                        SL
                      </Avatar>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {t.testimonial2Author}
                      </Typography>
                    </Box>
                  </CardContent>





                </Card>
              </Zoom>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Zoom in={true} timeout={2000}>
                <Card sx={{ 
                  height: '100%', 
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                  position: 'relative',
                  overflow: 'visible',
                  '&::before': {
                    content: '"""',
                    position: 'absolute',
                    top: -20,
                    left: 20,
                    fontSize: '4rem',
                    color: theme.palette.primary.main,
                    opacity: 0.2,
                    fontFamily: 'serif'
                  }
                }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="body1" paragraph>
                      {t.testimonial3}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                      <Avatar sx={{ bgcolor: theme.palette.success.main, mr: 2 }}>
                        MG
                      </Avatar>
                      <Typography variant="subtitle2" fontWeight="bold">
                        {t.testimonial3Author}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      {/* FAQ Section */}
      <Box sx={{ py: 10, bgcolor: 'rgba(0, 0, 0, 0.02)' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold',
                mb: 2,
                color: 'text.primary'
              }}
            >
              {t.faqTitle}
            </Typography>
            
            <Divider sx={{ width: '80px', mx: 'auto', mb: 4, borderColor: theme.palette.primary.main, borderWidth: 2 }} />
          </Box>
          
          <Box>
            {faqItems.map((item, index) => (
              <Fade key={index} in={true} timeout={1000 + (index * 300)}>
                <Paper 
                  elevation={0}
                  sx={{ 
                    mb: 2, 
                    overflow: 'hidden',
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      p: 3, 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      bgcolor: expandedFaq === index ? 'rgba(0, 0, 0, 0.03)' : 'transparent',
                      borderBottom: expandedFaq === index ? `1px solid ${theme.palette.divider}` : 'none'
                    }}
                    onClick={() => toggleFaq(index)}
                  >
                    <Typography variant="h6" fontWeight="medium">
                      {item.question}
                    </Typography>
                    
                    <IconButton size="small">
                      {expandedFaq === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  </Box>
                  
                  <Collapse in={expandedFaq === index}>
                    <Box sx={{ p: 3, pt: 2 }}>
                      <Typography variant="body1" color="text.secondary">
                        {item.answer}
                      </Typography>
                    </Box>
                  </Collapse>
                </Paper>
              </Fade>
            ))}
          </Box>
        </Container>
      </Box>
      
      {/* Call to Action Section */}
      <Box sx={{ 
        py: 10, 
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
        color: theme.palette.common.white,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at top right, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
        }
      }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                fontWeight: 'bold',
                mb: 2
              }}
            >
              {t.contactTitle}
            </Typography>
            
            <Typography variant="h6" sx={{ opacity: 0.9, mb: 4 }}>
              {t.contactDesc}
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              maxWidth: '500px',
              mx: 'auto'
            }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder={t.emailPlaceholder}
                InputProps={{
                  sx: {
                    borderRadius: 3,
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                    '&::placeholder': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    }
                  }
                }}
              />
              
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ 
                  borderRadius: 3,
                  whiteSpace: 'nowrap',
                  px: 4,
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
                }}
              >
                {t.subscribe}
              </Button>
            </Box>
          </Box>
          
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 4,
            flexWrap: 'wrap',
            mt: 6
          }}>
            <Button 
              variant="outlined" 
              color="inherit" 
              sx={{ 
                borderColor: 'rgba(255, 255, 255, 0.5)',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              {t.features}
            </Button>
            
            <Button 
              variant="outlined" 
              color="inherit" 
              sx={{ 
                borderColor: 'rgba(255, 255, 255, 0.5)',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              {t.howItWorks}
            </Button>
            
            <Button 
              variant="outlined" 
              color="inherit" 
              sx={{ 
                borderColor: 'rgba(255, 255, 255, 0.5)',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              {t.testimonials}
            </Button>
            
            <Button 
              variant="outlined" 
              color="inherit" 
              sx={{ 
                borderColor: 'rgba(255, 255, 255, 0.5)',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              {t.faq}
            </Button>
          </Box>
        </Container>
      </Box>
      
      {/* Footer */}
      <Box sx={{ py: 4, borderTop: `1px solid ${theme.palette.divider}` }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2
          }}>
            <Typography variant="body2" color="text.secondary">
              {t.footerText}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton size="small" color="primary">
                <LanguageIcon fontSize="small" />
              </IconButton>
              
              <IconButton size="small" color="primary" onClick={handleLanguageChange}>
                {language === 'he' ? 'EN' : 'עב'}
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;