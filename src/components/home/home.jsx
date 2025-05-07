
// בס"ד
import { Link, useNavigate } from "react-router-dom";
import './home.css';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { GetPersonThunk } from "../../redux/Person/getPersonThunk";

// Material UI imports
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Fade,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Zoom,
  useMediaQuery,
  useTheme,
  Fab,
  Slide,
  FormControlLabel,
  Switch
} from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GroupsIcon from '@mui/icons-material/Groups';
import BookIcon from '@mui/icons-material/Book';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChavrutaLogo from "../logo/logo";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  // State
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [language, setLanguage] = useState('he'); // 'he' for Hebrew, 'en' for English
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollFab, setShowScrollFab] = useState(false);

  // Translations
  const translations = {
    en: {
      login: "Login",
      register: "Register",
      // schedule: "Schedule",
      home: "Home",
      profile: "Profile",
      dashboard: "Dashboard",
      logout: "Logout",
      heroTitle: "Find Your Perfect Study Partner",
      heroSubtitle: "Connect with like-minded learners for meaningful study sessions",
      getStarted: "Get Started",
      learnMore: "Learn More",
      featuresTitle: "Why Choose ChavrutaMatch?",
      feature1Title: "Personalized Matching",
      feature1Desc: "Our intelligent algorithm finds the perfect study partner based on your learning style, schedule, and interests.",
      feature2Title: "Flexible Scheduling",
      feature2Desc: "Easily manage your availability and coordinate study sessions that work for both partners.",
      feature3Title: "Track Progress",
      feature3Desc: "Monitor your learning journey and celebrate achievements with your study partner.",
      testimonialTitle: "What Our Users Say",
      testimonial1: "ChavrutaMatch helped me find the perfect study partner. We've been learning together for 6 months now!",
      testimonial2: "The scheduling feature is amazing. It made coordinating study sessions so much easier.",
      testimonial3: "I've improved my understanding of complex topics thanks to my Chavruta partner.",
      ctaTitle: "Ready to Find Your Study Partner?",
      ctaButton: "Join Now",
      footerRights: "All Rights Reserved",
      footerTagline: "Connect. Learn. Grow. Together."
    },
    he: {
      login: "התחברות",
      register: "הרשמה",
      schedule: "מערכת שעות",
      home: "דף הבית",
      profile: "פרופיל",
      dashboard: "לוח בקרה",
      logout: "התנתק",
      heroTitle: "מצא את החברותא המושלמת",
      heroSubtitle: "התחבר עם לומדים בעלי תחומי עניין משותפים לשיעורים משמעותיים",
      getStarted: "התחל עכשיו",
      learnMore: "למידע נוסף",
      featuresTitle: "למה לבחור בחברותא מאטצ'?",
      feature1Title: "התאמה אישית",
      feature1Desc: "האלגוריתם החכם שלנו מוצא את החברותא המושלמת בהתבסס על סגנון הלמידה, לוח הזמנים והתחומים שמעניינים אותך.",
      feature2Title: "לוח זמנים גמיש",
      feature2Desc: "נהל בקלות את הזמינות שלך ותאם שיעורים שמתאימים לשני השותפים.",
      feature3Title: "מעקב התקדמות",
      feature3Desc: "עקוב אחר מסע הלמידה שלך וחגוג הישגים עם החברותא שלך.",
      testimonialTitle: "מה אומרים המשתמשים שלנו",
      testimonial1: "חברותא מאטצ' עזר לי למצוא את החברותא המושלמת. אנחנו לומדים יחד כבר 6 חודשים!",
      testimonial2: "תכונת התזמון היא מדהימה. היא הקלה מאוד על תיאום שיעורים.",
      testimonial3: "שיפרתי את ההבנה שלי בנושאים מורכבים הודות לשותף החברותא שלי.",
      ctaTitle: "מוכן למצוא את החברותא שלך?",
      ctaButton: "הצטרף עכשיו",
      footerRights: "כל הזכויות שמורות",
      footerTagline: "מתחברים. לומדים. צומחים. יחד."
    }
  };

  const t = translations[language];
  const textDirection = language === 'he' ? 'rtl' : 'ltr';

  // Navigation items
  const pages = [
    { name: t.home, path: '/' },
    // { name: t.schedule, path: '/schedule' }
  ];

  const settings = [
    { name: t.profile, path: '/profile' },
    { name: t.dashboard, path: '/dashboard' },
    { name: t.logout, path: '/logout' }
  ];

  // Features data
  const features = [
    {
      icon: <GroupsIcon sx={{ fontSize: 60 }} />,
      title: t.feature1Title,
      description: t.feature1Desc
    },
    {
      icon: <AccessTimeIcon sx={{ fontSize: 60 }} />,
      title: t.feature2Title,
      description: t.feature2Desc
    },
    {
      icon: <BookIcon sx={{ fontSize: 60 }} />,
      title: t.feature3Title,
      description: t.feature3Desc
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      text: t.testimonial1,
      author: "David Cohen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: t.testimonial2,
      author: "Sarah Levy",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: t.testimonial3,
      author: "Moshe Goldberg",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  // Handlers
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'en' ? 'he' : 'en');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Effects
  useEffect(() => {
    dispatch(GetPersonThunk());

    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setShowScrollFab(position > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  // Logo component
  // const ChavrutaLogo = () => (
  //   <Box sx={{ display: 'flex', alignItems: 'center' }}>
  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={isMobile ? "40" : "50"} height={isMobile ? "40" : "50"}>
  //       <defs>
  //         <linearGradient id="bookGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
  //           <stop offset="0%" stopColor="#3f51b5" />
  //           <stop offset="100%" stopColor="#2196f3" />
  //         </linearGradient>
  //         <linearGradient id="bookGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
  //           <stop offset="0%" stopColor="#2196f3" />
  //           <stop offset="100%" stopColor="#00bcd4" />
  //         </linearGradient>
  //         <linearGradient id="pageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
  //           <stop offset="0%" stopColor="#ffffff" />
  //           <stop offset="100%" stopColor="#f5f5f5" />
  //         </linearGradient>
  //       </defs>

  //       {/* Left Book */}
  //       <g transform="translate(50, 120) rotate(-15)">
  //         <path d="M0,0 L160,0 L160,200 L0,200 Q-20,100 0,0 Z" fill="url(#bookGradient1)" />
  //         <path d="M10,10 L150,10 L150,190 L10,190 Q-5,100 10,10 Z" fill="url(#pageGradient)" />
  //         <g stroke="#3f51b5" strokeWidth="1.5" strokeOpacity="0.5">
  //           <line x1="30" y1="40" x2="130" y2="40" />
  //           <line x1="30" y1="60" x2="130" y2="60" />
  //           <line x1="30" y1="80" x2="130" y2="80" />
  //           <line x1="30" y1="100" x2="130" y2="100" />
  //           <line x1="30" y1="120" x2="130" y2="120" />
  //           <line x1="30" y1="140" x2="130" y2="140" />
  //           <line x1="30" y1="160" x2="130" y2="160" />
  //         </g>
  //       </g>

  //       {/* Right Book */}
  //       <g transform="translate(302, 120) rotate(15) scale(-1, 1)">
  //         <path d="M0,0 L160,0 L160,200 L0,200 Q-20,100 0,0 Z" fill="url(#bookGradient2)" />
  //         <path d="M10,10 L150,10 L150,190 L10,190 Q-5,100 10,10 Z" fill="url(#pageGradient)" />
  //         <g stroke="#2196f3" strokeWidth="1.5" strokeOpacity="0.5">
  //           <line x1="30" y1="40" x2="130" y2="40" />
  //           <line x1="30" y1="60" x2="130" y2="60" />
  //           <line x1="30" y1="80" x2="130" y2="80" />
  //           <line x1="30" y1="100" x2="130" y2="100" />
  //           <line x1="30" y1="120" x2="130" y2="120" />
  //           <line x1="30" y1="140" x2="130" y2="140" />
  //           <line x1="30" y1="160" x2="130" y2="160" />
  //         </g>
  //       </g>

  //       {/* Star of David */}
  //       <g transform="translate(256, 230) scale(0.8)">
  //         <path d="M0,-30 L8.7,-9.3 L30,-9.3 L12.9,3.5 L19.1,23.5 L0,12.3 L-19.1,23.5 L-12.9,3.5 L-30,-9.3 L-8.7,-9.3 Z" 
  //               fill="#f5f5f5" stroke="#3f51b5" strokeWidth="2" opacity="0.7" />
  //       </g>
  //     </svg>

  //     {!isMobile && (
  //       <Typography
  //         variant="h6"
  //         noWrap
  //         sx={{
  //           ml: 1,
  //           fontFamily: 'Poppins, Arial, sans-serif',
  //           fontWeight: 700,
  //           letterSpacing: '.1rem',
  //           color: 'inherit',
  //           textDecoration: 'none',
  //           background: 'linear-gradient(45deg, #3f51b5 30%, #00bcd4 90%)',
  //           WebkitBackgroundClip: 'text',
  //           WebkitTextFillColor: 'transparent',
  //         }}
  //       >
  //         ChavrutaMatch
  //       </Typography>
  //     )}
  //   </Box>
  // );

  return (
    <Box sx={{
      minHeight: '100vh',
      direction: textDirection
    }}>
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          background: scrollPosition > 100 ?
            'rgba(255, 255, 255, 0.95)' :
            'transparent',
          boxShadow: scrollPosition > 100 ?
            '0 4px 20px rgba(0, 0, 0, 0.1)' :
            'none',
          color: scrollPosition > 100 ?
            'text.primary' :
            'white',
          transition: 'all 0.3s ease'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo for larger screens */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
              <ChavrutaLogo />
            </Box>

            {/* Mobile menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: language === 'he' ? 'right' : 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: language === 'he' ? 'right' : 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo for mobile */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
              <ChavrutaLogo />
            </Box>

            {/* Desktop menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: language === 'he' ? 'flex-start' : 'flex-start' }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu();
                    navigate(page.path);
                  }}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: 'inherit',
                    display: 'block',
                    fontWeight: 'medium',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      width: '0%',
                      height: '2px',
                      bottom: '10px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: 'primary.main',
                      transition: 'width 0.3s ease'
                    },
                    '&:hover::after': {
                      width: '70%'
                    }
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            {/* Language toggle */}
            <Box sx={{ mr: 2 }}>
              <Tooltip title={language === 'en' ? 'עברית' : 'English'}>
                <IconButton onClick={handleLanguageToggle} color="inherit">
                  <LanguageIcon />
                </IconButton>
              </Tooltip>
            </Box>

            {/* User menu */}
            <Box sx={{ flexGrow: 0 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/login')}
                sx={{
                  borderRadius: '50px',
                  px: 3,
                  py: 1,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                  background: 'linear-gradient(45deg, #3f51b5 30%, #2196f3 90%)',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #303f9f 30%, #1976d2 90%)',
                    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                {t.login}
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar /> {/* Spacer for fixed AppBar */}

      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: { xs: '100vh', md: '90vh' },
          display: 'flex',
          alignItems: 'center',
          backgroundImage: 'linear-gradient(135deg, rgba(33, 150, 243, 0.9) 0%, rgba(63, 81, 181, 0.9) 100%), url(https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Fade in={true} timeout={1000}>
            <Box sx={{
              maxWidth: '800px',
              mx: 'auto',
              px: 3,
              py: 5,
              borderRadius: 4,
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                }}
              >
                {t.heroTitle}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  opacity: 0.9,
                  maxWidth: '700px',
                  mx: 'auto',
                  lineHeight: 1.5,
                  fontSize: { xs: '1.2rem', md: '1.5rem' }
                }}
              >
                {t.heroSubtitle}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => navigate('/login')}
                  sx={{
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    fontWeight: 'bold',
                    backgroundColor: 'white',
                    color: 'primary.main',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {t.getStarted}
                </Button>
              </Box>
            </Box>
          </Fade>
        </Container>

        {/* Scroll indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 20%, 50%, 80%, 100%': {
                transform: 'translateX(-50%) translateY(0)'
              },
              '40%': {
                transform: 'translateX(-50%) translateY(-20px)'
              },
              '60%': {
                transform: 'translateX(-50%) translateY(-10px)'
              }
            }
          }}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: 40, opacity: 0.8 }} />
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 10, backgroundColor: '#f9f9f9' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              fontWeight: 'bold',
              mb: 6,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '80px',
                height: '4px',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'primary.main',
                borderRadius: '2px'
              }
            }}
          >
            {t.featuresTitle}
          </Typography>


          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Zoom in={true} style={{ transitionDelay: `${index * 150}ms` }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      borderRadius: 4,
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                      }
                    }}
                  >
                    <Box
                      sx={{
                        mb: 2,
                        color: 'primary.main',
                        p: 2,
                        borderRadius: '50%',
                        backgroundColor: 'rgba(63, 81, 181, 0.1)'
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                      {feature.title}
                    </Typography>
                    {/* כאן השינוי - הוספת סגנון מפורש שמבטל כל רקע על הטקסט */}
                    <Typography
                      variant="body1"
                      sx={{
                        lineHeight: 1.7,
                        color: 'text.secondary',
                        background: 'none',
                        WebkitBackgroundClip: 'initial',
                        WebkitTextFillColor: 'initial'
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Paper>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            align="center"
            sx={{
              fontWeight: 'bold',
              mb: 6,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '80px',
                height: '4px',
                bottom: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'primary.main',
                borderRadius: '2px'
              }
            }}
          >
            {t.testimonialTitle}
          </Typography>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Fade in={true} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Card
                    elevation={3}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      overflow: 'hidden',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)'
                      }
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 4 }}>
                      <Typography variant="body1" paragraph sx={{
                        fontStyle: 'italic',
                        lineHeight: 1.7,
                        mb: 3,
                        position: 'relative',
                        color: 'text.primary', // צבע רגיל במקום גרדיאנט
                        background: 'none',
                        WebkitBackgroundClip: 'initial',
                        WebkitTextFillColor: 'initial',
                        '&::before': {
                          content: '"""',
                          fontSize: '4rem',
                          position: 'absolute',
                          top: '-20px',
                          left: '-10px',
                          color: 'rgba(63, 81, 181, 0.1)',
                          fontFamily: 'Georgia, serif'
                        }
                      }}>
                        {testimonial.text}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          sx={{
                            width: 56,
                            height: 56,
                            border: '2px solid white',
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                          }}
                        />
                        <Box sx={{ ml: 2 }}>
                          <Typography variant="subtitle1" fontWeight="bold">
                            {testimonial.author}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            ChavrutaMatch User
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          backgroundImage: 'linear-gradient(135deg, rgba(63, 81, 181, 0.9) 0%, rgba(33, 150, 243, 0.9) 100%), url(https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 3,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
            }}
          >
            {t.ctaTitle}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              opacity: 0.9,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.5,
              color: 'white', // צבע רגיל במקום גרדיאנט
              background: 'none',
              WebkitBackgroundClip: 'initial',
              WebkitTextFillColor: 'initial'
            }}
          >
            {t.footerTagline}
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/login')}
            sx={{
              borderRadius: '50px',
              px: 5,
              py: 1.5,
              fontSize: '1.2rem',
              textTransform: 'none',
              fontWeight: 'bold',
              backgroundColor: 'white',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            {t.ctaButton}
          </Button>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 6,
          backgroundColor: '#1a237e',
          color: 'white'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ChavrutaLogo />
              </Box>
              <Typography variant="body2" sx={{ opacity: 0.8, maxWidth: '300px', lineHeight: 1.7 }}>
                {t.footerTagline}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Quick Links
              </Typography>
              <List disablePadding>
                {pages.map((page) => (
                  <ListItem
                    key={page.name}
                    disablePadding
                    sx={{
                      pb: 1,
                      '&:hover': {
                        color: 'primary.light'
                      }
                    }}
                  >
                    <Link
                      to={page.path}
                      style={{
                        color: 'inherit',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      {page.name}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body2" paragraph sx={{ opacity: 0.8 }}>
                Email: info@chavrutamatch.com
              </Typography>
              <Typography variant="body2" paragraph sx={{ opacity: 0.8 }}>
                Phone: +972 123 456 789
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <IconButton size="small" sx={{ color: 'white' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </IconButton>
                <IconButton size="small" sx={{ color: 'white' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                </IconButton>
                <IconButton size="small" sx={{ color: 'white' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </IconButton>
              </Box>
            </Grid>
          </Grid>
          <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
          <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} ChavrutaMatch. {t.footerRights}
          </Typography>
        </Container>
      </Box>

      {/* Scroll to top button */}
      <Zoom in={showScrollFab}>
        <Fab
          color="primary"
          aria-label="scroll to top"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: language === 'he' ? 'auto' : 24,
            left: language === 'he' ? 24 : 'auto',
            zIndex: 1000
          }}
        >
          {language === 'he' ? <ArrowForwardIcon /> : <ArrowBackIcon />}
        </Fab>
      </Zoom>
    </Box>
  );
};