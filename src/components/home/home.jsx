// // import { Link, useNavigate } from "react-router-dom";
// // import './home.css';
// // import * as React from 'react';
// // import { useEffect, useState, useRef } from 'react';
// // import { useDispatch } from "react-redux";
// // import { GetPersonThunk } from "../../redux/Person/getPersonThunk";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { alpha, createTheme, ThemeProvider } from '@mui/material/styles';
// // import Lottie from 'react-lottie';
// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// // // ===================================================================
// // import CountUp from 'react-countup';
// // import StarIcon from '@mui/icons-material/Star';
// // import StarHalfIcon from '@mui/icons-material/StarHalf';
// // import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// // import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// // import CookieIcon from '@mui/icons-material/Cookie';
// // import PersonAddIcon from '@mui/icons-material/PersonAdd';
// // import LoginIcon from '@mui/icons-material/Login';
// // import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// // // ===================================================================

// // // Material UI imports
// // import {
// //     AppBar, Box, Toolbar, IconButton, Typography, Menu, Container,
// //     Avatar, Button, Tooltip, MenuItem, Drawer, List, ListItem,
// //     ListItemIcon, ListItemText, Divider, Fade, Paper, Card, CardContent,
// //     CardMedia, Grid, Zoom, useMediaQuery, useTheme, Fab, Slide,
// //     FormControlLabel, Switch, Backdrop, CircularProgress, Rating,
// //     Chip, Tabs, Tab, Badge, Skeleton, Snackbar, Alert, Stack,
// //     Collapse
// // } from '@mui/material';

// // // Icons
// // import MenuIcon from '@mui/icons-material/Menu';
// // import SchoolIcon from '@mui/icons-material/School';
// // import PersonIcon from '@mui/icons-material/Person';
// // import InfoIcon from '@mui/icons-material/Info';
// // import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// // import LanguageIcon from '@mui/icons-material/Language';
// // import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// // import GroupsIcon from '@mui/icons-material/Groups';
// // import BookIcon from '@mui/icons-material/Book';
// // import AccessTimeIcon from '@mui/icons-material/AccessTime';
// // import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// // import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// // import DarkModeIcon from '@mui/icons-material/DarkMode';
// // import LightModeIcon from '@mui/icons-material/LightMode';
// // import EmailIcon from '@mui/icons-material/Email';
// // import PhoneIcon from '@mui/icons-material/Phone';
// // import FacebookIcon from '@mui/icons-material/Facebook';
// // import TwitterIcon from '@mui/icons-material/Twitter';
// // import InstagramIcon from '@mui/icons-material/Instagram';
// // import LinkedInIcon from '@mui/icons-material/LinkedIn';
// // import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// // import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// // import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
// // import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// // import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
// // import MouseIcon from '@mui/icons-material/Mouse';
// // import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// // import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// // import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// // import SpeedIcon from '@mui/icons-material/Speed';
// // import SecurityIcon from '@mui/icons-material/Security';
// // import SupportAgentIcon from '@mui/icons-material/SupportAgent';

// // // Custom components
// // import ChavrutaLogo from "../logo/logo";

// // // Register GSAP plugins
// // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// // export const Home = () => {
// //     const dispatch = useDispatch();
// //     const navigate = useNavigate();
// //     const theme = useTheme();
// //     const isMobile = useMediaQuery(theme.breakpoints.down('md'));
// //     const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

// //     // Refs for sections
// //     const heroRef = useRef(null);
// //     const featuresRef = useRef(null);
// //     const testimonialRef = useRef(null);
// //     const statsRef = useRef(null);
// //     const ctaRef = useRef(null);
// //     const faqRef = useRef(null);
// //     const mainRef = useRef(null);

// //     // State
// //     const [anchorElNav, setAnchorElNav] = useState(null);
// //     const [anchorElUser, setAnchorElUser] = useState(null);
// //     const [language, setLanguage] = useState('he'); // 'he' for Hebrew, 'en' for English
// //     const [scrollPosition, setScrollPosition] = useState(0);
// //     const [showScrollFab, setShowScrollFab] = useState(false);
// //     const [darkMode, setDarkMode] = useState(false);
// //     const [isLoading, setIsLoading] = useState(true);
// //     const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
// //     const [activeSection, setActiveSection] = useState('hero');
// //     const [scrollTrigger, setScrollTrigger] = useState(false);
// //     const [showNotification, setShowNotification] = useState(false);
// //     const [currentFaqIndex, setCurrentFaqIndex] = useState(null);
// //     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// //     const [cursorVariant, setCursorVariant] = useState("default");

// //     // Theme colors based on mode
// //     const themeColors = {
// //         primary: darkMode ? '#6366f1' : '#3f51b5',
// //         secondary: darkMode ? '#8b5cf6' : '#2196f3',
// //         accent: darkMode ? '#ec4899' : '#00bcd4',
// //         background: darkMode ? '#0f172a' : '#ffffff',
// //         paper: darkMode ? '#1e293b' : '#f9f9f9',
// //         cardBg: darkMode ? '#1e293b' : '#ffffff',
// //         text: darkMode ? '#e2e8f0' : '#333333',
// //         footerBg: darkMode ? '#0f172a' : '#1a237e',
// //         heroGradient: darkMode ?
// //             'linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(139, 92, 246, 0.9) 50%, rgba(236, 72, 153, 0.8) 100%), url(https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)' :
// //             'linear-gradient(135deg, rgba(63, 81, 181, 0.9) 0%, rgba(33, 150, 243, 0.9) 50%, rgba(0, 188, 212, 0.8) 100%), url(https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
// //     };
    
// //     // Translations with expanded content
// //     const translations = {
// //         en: {
// //             login: "Login",
// //             register: "Register",
// //             home: "Home",
// //             features: "Features",
// //             testimonials: "Testimonials",
// //             stats: "Stats",
// //             faq: "FAQ",
// //             contact: "Contact",
// //             profile: "Profile",
// //             dashboard: "Dashboard",
// //             logout: "Logout",
// //             heroTitle: "Find Your Perfect Study Partner",
// //             heroSubtitle: "Connect with like-minded learners for meaningful study sessions and elevate your learning experience",
// //             heroDescription: "ChavrutaMatch uses advanced AI to pair you with the ideal study partner based on your learning style, goals, and schedule. Start your journey to more effective and enjoyable learning today.",
// //             getStarted: "Get Started",
// //             learnMore: "Learn More",
// //             featuresTitle: "Why Choose ChavrutaMatch?",
// //             featuresSub: "Discover the tools that make your learning journey exceptional",
// //             feature1Title: "AI-Powered Matching",
// //             feature1Desc: "Our intelligent algorithm finds the perfect study partner based on your learning style, schedule, and interests, ensuring meaningful and productive sessions.",
// //             feature2Title: "Flexible Scheduling",
// //             feature2Desc: "Easily manage your availability and coordinate study sessions that work for both partners with our intuitive calendar system.",
// //             feature3Title: "Progress Tracking",
// //             feature3Desc: "Monitor your learning journey and celebrate achievements with your study partner through detailed analytics and milestone tracking.",
// //             feature4Title: "Secure Communication",
// //             feature4Desc: "Connect with your study partner through our secure messaging platform designed specifically for educational discussions.",
// //             testimonialTitle: "What Our Users Say",
// //             testimonialSub: "Real stories from our community of learners",
// //             testimonial1: "ChavrutaMatch helped me find the perfect study partner. We've been learning together for 6 months now and my understanding of complex topics has improved dramatically!",
// //             testimonial2: "The scheduling feature is amazing. It made coordinating study sessions so much easier, and the reminder system ensures we never miss a session.",
// //             testimonial3: "I've improved my understanding of complex topics thanks to my Chavruta partner. The matching algorithm really found someone who complements my learning style.",
// //             statsTitle: "ChavrutaMatch by the Numbers",
// //             statsSub: "Join our growing community of learners",
// //             stat1: "Active Users",
// //             stat2: "Study Hours",
// //             stat3: "Matches Made",
// //             stat4: "Success Rate",
// //             faqTitle: "Frequently Asked Questions",
// //             faqSub: "Everything you need to know about ChavrutaMatch",
// //             faq1Q: "How does the matching algorithm work?",
// //             faq1A: "Our AI-powered algorithm considers your learning style, subject interests, proficiency level, availability, and personal goals to find the most compatible study partner for you. The more you use the platform, the better our matches become.",
// //             faq2Q: "Is ChavrutaMatch free to use?",
// //             faq2A: "We offer a free basic plan that includes essential features. For advanced matching, unlimited scheduling, and premium resources, we offer affordable subscription plans.",
// //             faq3Q: "Can I change my study partner?",
// //             faq3A: "Absolutely! If you feel your current match isn't working out, you can request a new partner at any time. We want to ensure your learning experience is as effective as possible.",
// //             faq4Q: "What subjects are supported?",
// //             faq4A: "ChavrutaMatch supports a wide range of subjects from religious studies to academic disciplines. If you don't see your subject listed, you can request it to be added.",
// //             ctaTitle: "Ready to Find Your Study Partner?",
// //             ctaDescription: "Join thousands of learners who have transformed their educational journey with ChavrutaMatch. Your perfect study partner is just a click away.",
// //             ctaButton: "Join Now",
// //             footerRights: "All Rights Reserved",
// //             footerTagline: "Connect. Learn. Grow. Together."
// //         },
// //         he: {
// //             login: "התחברות",
// //             register: "הרשמה",
// //             home: "דף הבית",
// //             features: "תכונות",
// //             testimonials: "המלצות",
// //             stats: "נתונים",
// //             faq: "שאלות נפוצות",
// //             // contact: "צור קשר",
// //             profile: "פרופיל",
// //             dashboard: "לוח בקרה",
// //             logout: "התנתק",
// //             heroTitle: "מצא את החברותא המושלמת",
// //             heroSubtitle: "התחבר עם לומדים בעלי תחומי עניין משותפים לשיעורים משמעותיים והעלה את חווית הלמידה שלך",
// //             heroDescription: "חברותא מאטצ' משתמש בבינה מלאכותית מתקדמת כדי להתאים לך את השותף האידיאלי ללימוד בהתבסס על סגנון הלמידה, המטרות והלוח זמנים שלך. התחל את המסע שלך ללמידה יעילה ומהנה יותר היום.",
// //             getStarted: "התחל עכשיו",
// //             learnMore: "למידע נוסף",
// //             featuresTitle: "למה לבחור בחברותא מאטצ'?",
// //             featuresSub: "גלה את הכלים שהופכים את מסע הלמידה שלך ליוצא דופן",
// //             feature1Title: "התאמה מבוססת בינה מלאכותית",
// //             feature1Desc: "האלגוריתם החכם שלנו מוצא את החברותא המושלמת בהתבסס על סגנון הלמידה, לוח הזמנים והתחומים שמעניינים אותך, ומבטיח שיעורים משמעותיים ופרודוקטיביים.",
// //             feature2Title: "לוח זמנים גמיש",
// //             feature2Desc: "נהל בקלות את הזמינות שלך ותאם שיעורים שמתאימים לשני השותפים באמצעות מערכת היומן האינטואיטיבית שלנו.",
// //             feature3Title: "מעקב התקדמות",
// //             feature3Desc: "עקוב אחר מסע הלמידה שלך וחגוג הישגים עם החברותא שלך באמצעות ניתוחים מפורטים ומעקב אחר אבני דרך.",
// //             feature4Title: "תקשורת מאובטחת",
// //             feature4Desc: "התחבר עם החברותא שלך דרך פלטפורמת ההודעות המאובטחת שלנו שתוכננה במיוחד לדיונים חינוכיים.",
// //             testimonialTitle: "מה אומרים המשתמשים שלנו",
// //             testimonialSub: "סיפורים אמיתיים מקהילת הלומדים שלנו",
// //             testimonial1: "חברותא מאטצ' עזר לי למצוא את החברותא המושלמת. אנחנו לומדים יחד כבר 6 חודשים וההבנה שלי בנושאים מורכבים השתפרה באופן דרמטי!",
// //             testimonial2: "תכונת התזמון היא מדהימה. היא הקלה מאוד על תיאום שיעורים, ומערכת התזכורות מבטיחה שלעולם לא נפספס שיעור.",
// //             testimonial3: "שיפרתי את ההבנה שלי בנושאים מורכבים הודות לשותף החברותא שלי. האלגוריתם התאמה באמת מצא מישהו שמשלים את סגנון הלמידה שלי.",
// //             statsTitle: "חברותא מאטצ' במספרים",
// //             statsSub: "הצטרף לקהילה הגדלה שלנו של לומדים",
// //             stat1: "משתמשים פעילים",
// //             stat2: "שעות לימוד",
// //             stat3: "התאמות שנעשו",
// //             stat4: "אחוז הצלחה",
// //             faqTitle: "שאלות נפוצות",
// //             faqSub: "כל מה שצריך לדעת על חברותא מאטצ'",
// //             faq1Q: "איך עובד אלגוריתם ההתאמה?",
// //             faq1A: "האלגוריתם שלנו המבוסס על בינה מלאכותית מתחשב בסגנון הלמידה שלך, תחומי העניין, רמת המיומנות, זמינות ומטרות אישיות כדי למצוא את שותף הלימוד המתאים ביותר עבורך. ככל שתשתמש יותר בפלטפורמה, כך ההתאמות שלנו ישתפרו.",
// //             faq2Q: "האם חברותא מאטצ' חינמי לשימוש?",
// //             faq2A: "אנו מציעים תוכנית בסיסית חינמית הכוללת תכונות חיוניות. עבור התאמה מתקדמת, תזמון בלתי מוגבל ומשאבים פרימיום, אנו מציעים תוכניות מנוי במחירים סבירים.",
// //             faq3Q: "האם אני יכול להחליף את שותף הלימוד שלי?",
// //             faq3A: "בהחלט! אם אתה מרגיש שההתאמה הנוכחית שלך אינה עובדת, תוכל לבקש שותף חדש בכל עת. אנו רוצים להבטיח שחווית הלמידה שלך תהיה יעילה ככל האפשר.",
// //             faq4Q: "אילו נושאים נתמכים?",
// //             faq4A: "חברותא מאטצ' תומך במגוון רחב של נושאים מלימודי קודש ועד תחומים אקדמיים. אם אינך רואה את הנושא שלך ברשימה, תוכל לבקש להוסיף אותו.",
// //             ctaTitle: "מוכן למצוא את החברותא שלך?",
// //             ctaDescription: "הצטרף לאלפי לומדים ששינו את מסע הלמידה שלהם עם חברותא מאטצ'. שותף הלימוד המושלם שלך נמצא במרחק לחיצה.",
// //             ctaButton: "הצטרף עכשיו",
// //             footerRights: "כל הזכויות שמורות",
// //             footerTagline: "מתחברים. לומדים. צומחים. יחד."
// //         }
// //     };

// //     const t = translations[language];
// //     const textDirection = language === 'he' ? 'rtl' : 'ltr';

// //     // Enhanced navigation items with refs
// //     const pages = [
// //         { name: t.home, path: '/', ref: heroRef },
// //         { name: t.features, path: '/features', ref: featuresRef },
// //         { name: t.testimonials, path: '/testimonials', ref: testimonialRef },
// //         { name: t.stats, path: '/stats', ref: statsRef },
// //         { name: t.faq, path: '/faq', ref: faqRef },
// //         // { name: t.contact, path: '/contact', ref: null }
// //     ];

// //     const settings = [
// //         { name: t.profile, path: '/profile' },
// //         { name: t.dashboard, path: '/dashboard' },
// //         { name: t.logout, path: '/logout' }
// //     ];

// //     // Enhanced features data with colors and animations
// //     const features = [
// //         {
// //             icon: <LocalLibraryIcon sx={{ fontSize: 60 }} />,
// //             title: t.feature1Title,
// //             description: t.feature1Desc,
// //             color: '#6366f1',
// //             animation: 'brain-pulse.json'
// //         },
// //         {
// //             icon: <AccessTimeIcon sx={{ fontSize: 60 }} />,
// //             title: t.feature2Title,
// //             description: t.feature2Desc,
// //             color: '#8b5cf6',
// //             animation: 'calendar-sync.json'
// //         },
// //         {
// //             icon: <EmojiEventsIcon sx={{ fontSize: 60 }} />,
// //             title: t.feature3Title,
// //             description: t.feature3Desc,
// //             color: '#ec4899',
// //             animation: 'progress-chart.json'
// //         },
// //         {
// //             icon: <SecurityIcon sx={{ fontSize: 60 }} />,
// //             title: t.feature4Title,
// //             description: t.feature4Desc,
// //             color: '#10b981',
// //             animation: 'secure-chat.json'
// //         }
// //     ];

// //     // Enhanced testimonials data
// //     const testimonials = [
// //         {
// //             text: t.testimonial1,
// //             author: "דוד כהן",
// //             role: "סטודנט לרפואה",
// //             avatar: "https://randomuser.me/api/portraits/men/32.jpg",
// //             rating: 5,
// //             subject: "גמרא",
// //             background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
// //         },
// //         {
// //             text: t.testimonial2,
// //             author: "שרה לוי",
// //             role: "מורה",
// //             avatar: "https://randomuser.me/api/portraits/women/44.jpg",
// //             rating: 4.5,
// //             subject: "תנ״ך",
// //             background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
// //         },
// //         {
// //             text: t.testimonial3,
// //             author: "משה גולדברג",
// //             role: "עורך דין",
// //             avatar: "https://randomuser.me/api/portraits/men/67.jpg",
// //             rating: 5,
// //             subject: "הלכה",
// //             background: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)"
// //         }
// //     ];

// //     // Stats data
// //     const stats = [
// //         { value: "10,000+", label: t.stat1, icon: <PeopleAltIcon />, color: "#6366f1" },
// //         { value: "250,000+", label: t.stat2, icon: <AccessTimeIcon />, color: "#8b5cf6" },
// //         { value: "15,000+", label: t.stat3, icon: <GroupsIcon />, color: "#ec4899" },
// //         { value: "98%", label: t.stat4, icon: <CheckCircleIcon />, color: "#10b981" }
// //     ];


// //     // Handlers
// //     const handleOpenNavMenu = (event) => {
// //         setAnchorElNav(event.currentTarget);
// //     };

// //     const handleOpenUserMenu = (event) => {
// //         setAnchorElUser(event.currentTarget);
// //     };

// //     const handleCloseNavMenu = () => {
// //         setAnchorElNav(null);
// //     };

// //     const handleCloseUserMenu = () => {
// //         setAnchorElUser(null);
// //     };

// //     const handleLanguageToggle = () => {
// //         setLanguage(language === 'en' ? 'he' : 'en');
// //     };

// //     const handleDarkModeToggle = () => {
// //         setDarkMode(!darkMode);
// //     };

// //     const scrollToTop = () => {
// //         window.scrollTo({
// //             top: 0,
// //             behavior: 'smooth'
// //         });
// //     };

// //     // const scrollToSection = (ref) => {
// //     //     if (ref && ref.current) {
// //     //         gsap.to(window, {
// //     //             duration: 1,
// //     //             scrollTo: { y: ref.current, offsetY: 80, autoKill: true },
// //     //             ease: "power3.inOut"
// //     //         });
// //     //     }
// //     // };

// //     const scrollToSection = (ref) => {
// //         if (ref && ref.current) {
// //             // גלילה פשוטה באמצעות scrollIntoView
// //             ref.current.scrollIntoView({
// //                 behavior: 'smooth',
// //                 block: 'start'
// //             });
// //         }
// //     };

// //     const handleNextTestimonial = () => {
// //         setCurrentTestimonialIndex((prev) =>
// //             prev === testimonials.length - 1 ? 0 : prev + 1
// //         );
// //     };

// //     const handlePrevTestimonial = () => {
// //         setCurrentTestimonialIndex((prev) =>
// //             prev === 0 ? testimonials.length - 1 : prev - 1
// //         );
// //     };

// //     const handleFaqClick = (index) => {
// //         setCurrentFaqIndex(currentFaqIndex === index ? null : index);
// //     };

// //     const handleMouseMove = (e) => {
// //         setMousePosition({ x: e.clientX, y: e.clientY });
// //     };

// //     const handleCursorHover = () => {
// //         setCursorVariant("hover");
// //     };

// //     const handleCursorDefault = () => {
// //         setCursorVariant("default");
// //     };


// //     // ==============================================================
// //     // Refs

// //     const [showCookieConsent, setShowCookieConsent] = useState(true);
// //     const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

// //     // FAQ data
// //     const faqs = [
// //         {
// //             question: t.faq1Question || "איך אני מוצא חברותא מתאימה?",
// //             answer: t.faq1Answer || "המערכת שלנו משתמשת באלגוריתם חכם שמתאים בין לומדים על בסיס תחומי עניין, רמת לימוד, זמינות ומיקום. פשוט מלא את הפרופיל שלך בצורה מלאה והמערכת תציע לך התאמות מתאימות."
// //         },
// //         {
// //             question: t.faq2Question || "האם השירות בתשלום?",
// //             answer: t.faq2Answer || "אנו מציעים תוכנית בסיסית חינמית שמאפשרת לך למצוא חברותא. קיימות גם תוכניות פרימיום עם תכונות נוספות כמו הודעות מתקדמות, חיפוש מורחב ואפשרויות תיאום מתקדמות."
// //         },
// //         {
// //             question: t.faq3Question || "איך אני מתאם מפגש עם חברותא?",
// //             answer: t.faq3Answer || "לאחר שמצאת התאמה, תוכל לשלוח הזמנה ללימוד. כאשר ההזמנה מתקבלת, תוכלו להשתמש במערכת התיאום שלנו כדי למצוא זמן שמתאים לשניכם, או לתקשר ישירות דרך הפלטפורמה."
// //         },
// //         {
// //             question: t.faq4Question || "האם אפשר ללמוד מרחוק?",
// //             answer: t.faq4Answer || "בהחלט! הפלטפורמה שלנו תומכת גם בלימוד מרחוק. תוכל לציין בהעדפות שלך אם אתה מעוניין בלימוד פנים אל פנים, מרחוק, או שניהם, והמערכת תתאים לך חברותות בהתאם."
// //         }
// //     ];

// //     // Social links
// //     const socialLinks = [
// //         {
// //             icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
// //                 <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
// //             </svg>,
// //             color: '#3b5998'
// //         },
// //         {
// //             icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
// //                 <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
// //             </svg>,
// //             color: '#1da1f2'
// //         },
// //         {
// //             icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
// //                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
// //             </svg>,
// //             color: '#e1306c'
// //         },
// //         {
// //             icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
// //                 <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
// //             </svg>,
// //             color: '#ff0000'
// //         }
// //     ];


// //     const footerLinks = [
// //         { name: t.home, action: scrollToTop },
// //         { name: t.features || "Features", action: () => featuresRef.current.scrollIntoView({ behavior: 'smooth' }) },
// //         { name: t.testimonials || "Testimonials", action: () => testimonialRef.current.scrollIntoView({ behavior: 'smooth' }) },
// //         { name: t.stats || "Stats", action: () => statsRef.current.scrollIntoView({ behavior: 'smooth' }) },
// //         { name: t.faq || "FAQ", action: () => faqRef.current.scrollIntoView({ behavior: 'smooth' }) },
// //         // { name: t.contact || "Contact", action: () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }) }
// //     ];



// //     // Legal links
// //     const legalLinks = [
// //         { name: t.privacy || "Privacy Policy", path: '/privacy' },
// //         { name: t.terms || "Terms of Service", path: '/terms' },
// //         { name: t.cookies || "Cookie Policy", path: '/cookies' }
// //     ];

// //     // Contact info
// //     const contactInfo = [
// //         {
// //             icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
// //                 <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
// //             </svg>,
// //             label: t.email || "Email",
// //             value: "info@chavrutamatch.com"
// //         },
// //         {
// //             icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
// //                 <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
// //             </svg>,
// //             label: t.phone || "Phone",
// //             value: "+972 123 456 789"
// //         },
// //         {
// //             icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
// //                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
// //             </svg>,
// //             label: t.address || "Address",
// //             value: "Jerusalem, Israel"
// //         }
// //     ];


// //     const handleFaqToggle = (index) => {
// //         setCurrentFaqIndex(currentFaqIndex === index ? null : index);
// //     };

// //     const handleCookieAccept = () => {
// //         setShowCookieConsent(false);
// //         localStorage.setItem('cookieConsent', 'true');
// //     };


// //     // Effects
// //     useEffect(() => {
// //         dispatch(GetPersonThunk());

// //         const handleScroll = () => {
// //             const position = window.pageYOffset;
// //             setScrollPosition(position);
// //             setShowScrollFab(position > 400);
// //         };

// //         window.addEventListener('scroll', handleScroll);
// //         window.addEventListener('mousemove', handleMouseMove);

// //         // Check for cookie consent
// //         const hasConsent = localStorage.getItem('cookieConsent');
// //         if (hasConsent === 'true') {
// //             setShowCookieConsent(false);
// //         }

// //         // Testimonial rotation interval
// //         const testimonialInterval = setInterval(() => {
// //             setCurrentTestimonialIndex((prev) =>
// //                 prev === testimonials.length - 1 ? 0 : prev + 1
// //             );
// //         }, 5000);

// //         return () => {
// //             window.removeEventListener('scroll', handleScroll);
// //             window.removeEventListener('mousemove', handleMouseMove);
// //             clearInterval(testimonialInterval);
// //         };
// //     }, [dispatch, testimonials.length]);

// //     // Cursor variants for framer-motion
// //     const cursorVariants = {
// //         default: {
// //             x: cursorPosition.x - 16,
// //             y: cursorPosition.y - 16,
// //             height: 32,
// //             width: 32,
// //             backgroundColor: alpha(themeColors.primary, 0.2),
// //             border: `2px solid ${themeColors.primary}`,
// //             transition: {
// //                 type: "spring",
// //                 mass: 0.5
// //             }
// //         },
// //         hover: {
// //             x: cursorPosition.x - 24,
// //             y: cursorPosition.y - 24,
// //             height: 48,
// //             width: 48,
// //             backgroundColor: alpha(themeColors.secondary, 0.2),
// //             border: `2px solid ${themeColors.secondary}`,
// //             transition: {
// //                 type: "spring",
// //                 mass: 0.5
// //             }
// //         }
// //     };
// //     // ==============================================================
// //     // Effects
// //     useEffect(() => {
// //         dispatch(GetPersonThunk());

// //         // Simulate loading
// //         const timer = setTimeout(() => {
// //             setIsLoading(false);
// //         }, 1500);

// //         // Handle scroll events
// //         const handleScroll = () => {
// //             const position = window.pageYOffset;
// //             setScrollPosition(position);
// //             setShowScrollFab(position > 400);

// //             // Set scroll trigger for animations
// //             if (position > 200) {
// //                 setScrollTrigger(true);
// //             }
// //         };

// //         window.addEventListener('scroll', handleScroll);
// //         window.addEventListener('mousemove', handleMouseMove);

// //         // GSAP animations for sections
// //         gsap.from(heroRef.current, {
// //             duration: 1,
// //             y: 50,
// //             opacity: 0,
// //             ease: "power3.out",
// //             delay: 1.5
// //         });

// //         // Set up ScrollTrigger animations
// //         if (featuresRef.current) {
// //             ScrollTrigger.create({
// //                 trigger: featuresRef.current,
// //                 start: "top 80%",
// //                 onEnter: () => {
// //                     gsap.to(featuresRef.current, {
// //                         opacity: 1,
// //                         y: 0,
// //                         duration: 0.8,
// //                         stagger: 0.2,
// //                         ease: "power3.out"
// //                     });
// //                 },
// //                 once: true
// //             });
// //         }

// //         // Cleanup
// //         return () => {
// //             window.removeEventListener('scroll', handleScroll);
// //             window.removeEventListener('mousemove', handleMouseMove);
// //             clearTimeout(timer);
// //             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
// //         };
// //     }, [dispatch]);

// //     // Effect for section detection
// //     useEffect(() => {
// //         const handleScrollForSections = () => {
// //             const scrollPosition = window.scrollY + 100;

// //             // Check which section is in view
// //             const sections = [
// //                 { id: 'hero', ref: heroRef },
// //                 { id: 'features', ref: featuresRef },
// //                 { id: 'testimonials', ref: testimonialRef },
// //                 { id: 'stats', ref: statsRef },
// //                 { id: 'cta', ref: ctaRef },
// //                 { id: 'faq', ref: faqRef }
// //             ];

// //             for (const section of sections) {
// //                 if (section.ref.current) {
// //                     const offsetTop = section.ref.current.offsetTop;
// //                     const height = section.ref.current.offsetHeight;

// //                     if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
// //                         setActiveSection(section.id);
// //                         break;
// //                     }
// //                 }
// //             }
// //         };

// //         window.addEventListener('scroll', handleScrollForSections);
// //         return () => window.removeEventListener('scroll', handleScrollForSections);
// //     }, []);

// //     // Testimonial auto-rotation
// //     useEffect(() => {
// //         const interval = setInterval(() => {
// //             handleNextTestimonial();
// //         }, 8000);

// //         return () => clearInterval(interval);
// //     }, [currentTestimonialIndex]);

// //     // Loading screen
// //     if (isLoading) {
// //         return (
// //             <Backdrop
// //                 sx={{
// //                     color: '#fff',
// //                     zIndex: (theme) => theme.zIndex.drawer + 1,
// //                     background: themeColors.heroGradient,
// //                     flexDirection: 'column'
// //                 }}
// //                 open={isLoading}
// //             >
// //                 <Box sx={{ position: 'relative', mb: 4 }}>
// //                     <ChavrutaLogo size={80} animated />
// //                 </Box>
// //                 <CircularProgress color="inherit" />
// //                 <Typography
// //                     variant="h6"
// //                     sx={{
// //                         mt: 2,
// //                         fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                         letterSpacing: 2
// //                     }}
// //                 >
// //                     CHAVRUTA MATCH
// //                 </Typography>
// //             </Backdrop>
// //         );
// //     }

// //     return (
// //         <Box
// //             ref={mainRef}
// //             sx={{
// //                 minHeight: '100vh',
// //                 direction: textDirection,
// //                 backgroundColor: themeColors.background,
// //                 color: themeColors.text,
// //                 transition: 'all 0.3s ease',
// //                 position: 'relative',
// //                 overflowX: 'hidden'
// //             }}
// //         >
// //             {/* Custom cursor (visible only on desktop) */}
// //             {!isMobile && (
// //                 <motion.div
// //                     className="cursor"
// //                     variants={cursorVariants}
// //                     animate={cursorVariant}
// //                     transition={{ type: "spring", stiffness: 500, damping: 28 }}
// //                     style={{
// //                         position: 'fixed',
// //                         zIndex: 9999,
// //                         pointerEvents: 'none',
// //                         mixBlendMode: 'difference',
// //                         height: 32,
// //                         width: 32,
// //                         borderRadius: '50%'
// //                     }}
// //                 />
// //             )}

// //             {/* Header */}
// //             <AppBar
// //                 position="fixed"
// //                 sx={{
// //                     background: scrollPosition > 100 ?
// //                         (darkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)') :
// //                         'transparent',
// //                     boxShadow: scrollPosition > 100 ?
// //                         '0 4px 20px rgba(0, 0, 0, 0.1)' :
// //                         'none',
// //                     color: scrollPosition > 100 ?
// //                         themeColors.text :
// //                         'white',
// //                     transition: 'all 0.3s ease',
// //                     backdropFilter: scrollPosition > 100 ? 'blur(10px)' : 'none',
// //                     borderBottom: scrollPosition > 100 ?
// //                         (darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)') :
// //                         'none'
// //                 }}
// //             >
// //                 <Container maxWidth="xl">
// //                     <Toolbar disableGutters>
// //                         {/* Logo for larger screens */}
// //                         <Box
// //                             sx={{
// //                                 display: { xs: 'none', md: 'flex' },
// //                                 mr: 2,
// //                                 cursor: 'pointer'
// //                             }}
// //                             onClick={scrollToTop}
// //                             onMouseEnter={handleCursorHover}
// //                             onMouseLeave={handleCursorDefault}
// //                         >
// //                             <ChavrutaLogo
// //                                 color={scrollPosition > 100 ? themeColors.primary : 'white'}
// //                                 size={isMobile ? 40 : 50}
// //                                 animated
// //                             />
// //                         </Box>

// //                         {/* Mobile menu */}
// //                         <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
// //                             <IconButton
// //                                 size="large"
// //                                 aria-label="menu"
// //                                 aria-controls="menu-appbar"
// //                                 aria-haspopup="true"
// //                                 onClick={handleOpenNavMenu}
// //                                 color="inherit"
// //                                 onMouseEnter={handleCursorHover}
// //                                 onMouseLeave={handleCursorDefault}
// //                             >
// //                                 <MenuIcon />
// //                             </IconButton>
// //                             <Menu
// //                                 id="menu-appbar"
// //                                 anchorEl={anchorElNav}
// //                                 anchorOrigin={{
// //                                     vertical: 'bottom',
// //                                     horizontal: language === 'he' ? 'right' : 'left',
// //                                 }}
// //                                 keepMounted
// //                                 transformOrigin={{
// //                                     vertical: 'top',
// //                                     horizontal: language === 'he' ? 'right' : 'left',
// //                                 }}
// //                                 open={Boolean(anchorElNav)}
// //                                 onClose={handleCloseNavMenu}
// //                                 sx={{
// //                                     display: { xs: 'block', md: 'none' },
// //                                     '& .MuiPaper-root': {
// //                                         backgroundColor: darkMode ? themeColors.paper : 'white',
// //                                         borderRadius: 2,
// //                                         boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
// //                                         border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
// //                                     }
// //                                 }}
// //                             >
// //                                 {pages.map((page) => (
// //                                     <MenuItem
// //                                         key={page.name}
// //                                         onClick={() => {
// //                                             handleCloseNavMenu();
// //                                             scrollToSection(page.ref);
// //                                         }}
// //                                         sx={{
// //                                             color: themeColors.text,
// //                                             '&:hover': {
// //                                                 backgroundColor: alpha(themeColors.primary, 0.1)
// //                                             }
// //                                         }}
// //                                     >
// //                                         <Typography textAlign="center" fontFamily="'Heebo', 'Rubik', Arial, sans-serif">
// //                                             {page.name}
// //                                         </Typography>
// //                                     </MenuItem>
// //                                 ))}
// //                             </Menu>
// //                         </Box>

// //                         {/* Logo for mobile */}
// //                         <Box
// //                             sx={{
// //                                 flexGrow: 1,
// //                                 display: { xs: 'flex', md: 'none' },
// //                                 justifyContent: 'center',
// //                                 cursor: 'pointer'
// //                             }}
// //                             onClick={scrollToTop}
// //                         >
// //                             <ChavrutaLogo
// //                                 color={scrollPosition > 100 ? themeColors.primary : 'white'}
// //                                 size={40}
// //                                 animated
// //                             />
// //                         </Box>

// //                         {/* Desktop menu */}
// //                         <Box
// //                             sx={{
// //                                 flexGrow: 1,
// //                                 display: { xs: 'none', md: 'flex' },
// //                                 justifyContent: language === 'he' ? 'flex-start' : 'flex-start'
// //                             }}
// //                         >
// //                             {pages.map((page) => (
// //                                 <Button
// //                                     key={page.name}
// //                                     onClick={() => {
// //                                         handleCloseNavMenu();
// //                                         scrollToSection(page.ref);
// //                                     }}
// //                                     onMouseEnter={handleCursorHover}
// //                                     onMouseLeave={handleCursorDefault}
// //                                     sx={{
// //                                         my: 2,
// //                                         mx: 1,
// //                                         color: 'inherit',
// //                                         display: 'block',
// //                                         fontWeight: 'medium',
// //                                         fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                         position: 'relative',
// //                                         '&::after': {
// //                                             content: '""',
// //                                             position: 'absolute',
// //                                             width: activeSection === page.name.toLowerCase() ? '70%' : '0%',
// //                                             height: '2px',
// //                                             bottom: '10px',
// //                                             left: '50%',
// //                                             transform: 'translateX(-50%)',
// //                                             backgroundColor: activeSection === page.name.toLowerCase() ?
// //                                                 themeColors.accent : themeColors.primary,
// //                                             transition: 'width 0.3s ease',
// //                                             borderRadius: '2px'
// //                                         },
// //                                         '&:hover::after': {
// //                                             width: '70%'
// //                                         }
// //                                     }}
// //                                 >
// //                                     {page.name}
// //                                 </Button>
// //                             ))}
// //                         </Box>

// //                         {/* Theme toggle */}
// //                         <Box sx={{ mr: 2 }}>
// //                             <Tooltip title={darkMode ? t.lightMode : t.darkMode}>
// //                                 <IconButton
// //                                     onClick={handleDarkModeToggle}
// //                                     color="inherit"
// //                                     onMouseEnter={handleCursorHover}
// //                                     onMouseLeave={handleCursorDefault}
// //                                     sx={{
// //                                         transition: 'transform 0.3s ease',
// //                                         '&:hover': {
// //                                             transform: 'rotate(30deg)'
// //                                         }
// //                                     }}
// //                                 >
// //                                     {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
// //                                 </IconButton>
// //                             </Tooltip>
// //                         </Box>

// //                         {/* Language toggle */}
// //                         <Box sx={{ mr: 2 }}>
// //                             <Tooltip title={language === 'en' ? 'עברית' : 'English'}>
// //                                 <IconButton
// //                                     onClick={handleLanguageToggle}
// //                                     color="inherit"
// //                                     onMouseEnter={handleCursorHover}
// //                                     onMouseLeave={handleCursorDefault}
// //                                     sx={{
// //                                         transition: 'transform 0.3s ease',
// //                                         '&:hover': {
// //                                             transform: 'scale(1.1)'
// //                                         }
// //                                     }}
// //                                 >
// //                                     <LanguageIcon />
// //                                 </IconButton>
// //                             </Tooltip>
// //                         </Box>

// //                         {/* Login button */}
// //                         <Box sx={{ flexGrow: 0 }}>
// //                             <Button
// //                                 variant="contained"
// //                                 color="primary"
// //                                 onClick={() => navigate('/login')}
// //                                 onMouseEnter={handleCursorHover}
// //                                 onMouseLeave={handleCursorDefault}
// //                                 sx={{
// //                                     borderRadius: '50px',
// //                                     px: 3,
// //                                     py: 1,
// //                                     textTransform: 'none',
// //                                     fontWeight: 'bold',
// //                                     fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                     boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
// //                                     background: `linear-gradient(45deg, ${themeColors.primary} 30%, ${themeColors.secondary} 90%)`,
// //                                     '&:hover': {
// //                                         background: `linear-gradient(45deg, ${themeColors.primary} 50%, ${themeColors.secondary} 100%)`,
// //                                         boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
// //                                         transform: 'translateY(-2px)'
// //                                     },
// //                                     transition: 'all 0.3s ease',
// //                                     position: 'relative',
// //                                     overflow: 'hidden',
// //                                     '&::after': {
// //                                         content: '""',
// //                                         position: 'absolute',
// //                                         top: 0,
// //                                         left: 0,
// //                                         width: '100%',
// //                                         height: '100%',
// //                                         background: 'linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,.4), rgba(255,255,255,0) 70%)',
// //                                         transform: 'translateX(-100%)',
// //                                         animation: 'shine 3s infinite linear'
// //                                     }
// //                                 }}
// //                             >
// //                                 {t.login}
// //                             </Button>
// //                         </Box>
// //                     </Toolbar>
// //                 </Container>
// //             </AppBar>
// //             <Toolbar />
// //             {/* Spacer for fixed AppBar */}

// //             {/* Hero Section */}
// //             <Box
// //                 ref={heroRef}
// //                 sx={{
// //                     position: 'relative',
// //                     height: { xs: '100vh', md: '90vh' },
// //                     display: 'flex',
// //                     alignItems: 'center',
// //                     backgroundImage: themeColors.heroGradient,
// //                     backgroundSize: 'cover',
// //                     backgroundPosition: 'center',
// //                     backgroundAttachment: 'fixed',
// //                     color: 'white',
// //                     textAlign: 'center',
// //                     overflow: 'hidden'
// //                 }}
// //             >
// //                 {/* Animated particles background */}
// //                 <Box sx={{
// //                     position: 'absolute',
// //                     top: 0,
// //                     left: 0,
// //                     right: 0,
// //                     bottom: 0,
// //                     overflow: 'hidden',
// //                     zIndex: 1
// //                 }}>
// //                     {[...Array(20)].map((_, i) => (
// //                         <Box
// //                             key={i}
// //                             sx={{
// //                                 position: 'absolute',
// //                                 width: Math.random() * 10 + 5,
// //                                 height: Math.random() * 10 + 5,
// //                                 backgroundColor: 'rgba(255, 255, 255, 0.3)',
// //                                 borderRadius: '50%',
// //                                 top: `${Math.random() * 100}%`,
// //                                 left: `${Math.random() * 100}%`,
// //                                 animation: `float ${Math.random() * 10 + 10}s linear infinite`,
// //                                 '@keyframes float': {
// //                                     '0%': {
// //                                         transform: 'translateY(0) rotate(0deg)',
// //                                         opacity: 0.8
// //                                     },
// //                                     '50%': {
// //                                         transform: 'translateY(-60px) rotate(180deg)',
// //                                         opacity: 0.4
// //                                     },
// //                                     '100%': {
// //                                         transform: 'translateY(-120px) rotate(360deg)',
// //                                         opacity: 0
// //                                     }
// //                                 }
// //                             }}
// //                         />
// //                     ))}
// //                 </Box>

// //                 <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
// //                     <Fade in={true} timeout={1000}>
// //                         <Box sx={{
// //                             maxWidth: '800px',
// //                             mx: 'auto',
// //                             px: 3,
// //                             py: 5,
// //                             borderRadius: 4,
// //                             backdropFilter: 'blur(10px)',
// //                             backgroundColor: 'rgba(255, 255, 255, 0.1)',
// //                             boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
// //                         }}>
// //                             <Typography
// //                                 variant="h2"
// //                                 component="h1"
// //                                 sx={{
// //                                     fontWeight: 'bold',
// //                                     mb: 2,
// //                                     fontSize: { xs: '2.5rem', md: '3.5rem' },
// //                                     textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
// //                                     fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                 }}
// //                             >
// //                                 {t.heroTitle}
// //                             </Typography>
// //                             <Typography
// //                                 variant="h5"
// //                                 sx={{
// //                                     mb: 4,
// //                                     opacity: 0.9,
// //                                     maxWidth: '700px',
// //                                     mx: 'auto',
// //                                     lineHeight: 1.5,
// //                                     fontSize: { xs: '1.2rem', md: '1.5rem' },
// //                                     fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                 }}
// //                             >
// //                                 {t.heroSubtitle}
// //                             </Typography>
// //                             <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
// //                                 <Button
// //                                     variant="contained"
// //                                     size="large"
// //                                     onClick={() => navigate('/login')}
// //                                     onMouseEnter={handleCursorHover}
// //                                     onMouseLeave={handleCursorDefault}
// //                                     sx={{
// //                                         borderRadius: '50px',
// //                                         px: 4,
// //                                         py: 1.5,
// //                                         fontSize: '1.1rem',
// //                                         textTransform: 'none',
// //                                         fontWeight: 'bold',
// //                                         backgroundColor: 'white',
// //                                         color: themeColors.primary,
// //                                         fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                         '&:hover': {
// //                                             backgroundColor: 'rgba(255, 255, 255, 0.9)',
// //                                             boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
// //                                             transform: 'translateY(-2px)'
// //                                         },
// //                                         transition: 'all 0.3s ease',
// //                                         position: 'relative',
// //                                         overflow: 'hidden',
// //                                         '&::after': {
// //                                             content: '""',
// //                                             position: 'absolute',
// //                                             top: 0,
// //                                             left: 0,
// //                                             width: '100%',
// //                                             height: '100%',
// //                                             background: 'linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,.7), rgba(255,255,255,0) 70%)',
// //                                             transform: 'translateX(-100%)',
// //                                             animation: 'shine 3s infinite linear',
// //                                             '@keyframes shine': {
// //                                                 '100%': {
// //                                                     transform: 'translateX(100%)'
// //                                                 }
// //                                             }
// //                                         }
// //                                     }}
// //                                 >
// //                                     {t.getStarted}
// //                                 </Button>
// //                                 <Button
// //                                     variant="outlined"
// //                                     size="large"
// //                                     onClick={() => scrollToSection(featuresRef)}
// //                                     onMouseEnter={handleCursorHover}
// //                                     onMouseLeave={handleCursorDefault}
// //                                     endIcon={<ExpandMoreIcon />}
// //                                     sx={{
// //                                         borderRadius: '50px',
// //                                         px: 4,
// //                                         py: 1.5,
// //                                         fontSize: '1.1rem',
// //                                         textTransform: 'none',
// //                                         fontWeight: 'medium',
// //                                         borderColor: 'white',
// //                                         color: 'white',
// //                                         fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                         '&:hover': {
// //                                             borderColor: 'white',
// //                                             backgroundColor: 'rgba(255, 255, 255, 0.1)',
// //                                             transform: 'translateY(-2px)'
// //                                         },
// //                                         transition: 'all 0.3s ease'
// //                                     }}
// //                                 >
// //                                     {t.learnMore}
// //                                 </Button>
// //                             </Box>
// //                         </Box>
// //                     </Fade>
// //                 </Container>

// //                 <Box
// //                     sx={{
// //                         position: 'absolute',
// //                         bottom: 40,
// //                         left: '50%',
// //                         transform: 'translateX(-50%)',
// //                         animation: 'bounce 2s infinite',
// //                         '@keyframes bounce': {
// //                             '0%, 20%, 50%, 80%, 100%': {
// //                                 transform: 'translateX(-50%) translateY(0)'
// //                             },
// //                             '40%': {
// //                                 transform: 'translateX(-50%) translateY(-20px)'
// //                             },
// //                             '60%': {
// //                                 transform: 'translateX(-50%) translateY(-10px)'
// //                             }
// //                         },
// //                         zIndex: 2,
// //                         cursor: 'pointer'
// //                     }}
// //                     onClick={() => scrollToSection(featuresRef)}
// //                     onMouseEnter={handleCursorHover}
// //                     onMouseLeave={handleCursorDefault}
// //                 >
// //                     <KeyboardArrowDownIcon sx={{ fontSize: 40, opacity: 0.8 }} />
// //                 </Box>

// //                 {/* Wave divider */}
// //                 <Box
// //                     sx={{
// //                         position: 'absolute',
// //                         bottom: -2,
// //                         left: 0,
// //                         width: '100%',
// //                         overflow: 'hidden',
// //                         lineHeight: 0,
// //                         transform: 'rotate(180deg)',
// //                         zIndex: 1
// //                     }}
// //                 >
// //                     <svg
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         viewBox="0 0 1200 120"
// //                         preserveAspectRatio="none"
// //                         style={{
// //                             position: 'relative',
// //                             display: 'block',
// //                             width: 'calc(100% + 1.3px)',
// //                             height: '60px',
// //                             transform: 'rotateY(180deg)'
// //                         }}
// //                     >
// //                         <path
// //                             d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
// //                             fill={themeColors.background}
// //                         ></path>
// //                     </svg>
// //                 </Box>
// //             </Box>

// //             {/* Features Section */}
// //             <Box
// //                 ref={featuresRef}
// //                 sx={{
// //                     py: { xs: 8, md: 12 },
// //                     backgroundColor: themeColors.paper,
// //                     position: 'relative',
// //                     overflow: 'hidden'
// //                 }}
// //             >
// //                 {/* Decorative background */}
// //                 <Box sx={{
// //                     position: 'absolute',
// //                     top: 0,
// //                     left: 0,
// //                     right: 0,
// //                     bottom: 0,
// //                     opacity: 0.03,
// //                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${darkMode ? 'ffffff' : '000000'}' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
// //                 }} />

// //                 <Container maxWidth="lg">
// //                     <motion.div
// //                         initial={{ opacity: 0, y: 30 }}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         viewport={{ once: true }}
// //                         transition={{ duration: 0.8 }}
// //                     >
// //                         <Typography
// //                             variant="h2"
// //                             component="h2"
// //                             align="center"
// //                             sx={{
// //                                 fontWeight: 'bold',
// //                                 mb: 2,
// //                                 fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                 color: themeColors.text,
// //                                 position: 'relative',
// //                                 display: 'inline-block',
// //                                 left: '50%',
// //                                 transform: 'translateX(-50%)'
// //                             }}
// //                         >
// //                             {t.featuresTitle}
// //                             <Box
// //                                 sx={{
// //                                     position: 'absolute',
// //                                     bottom: -5,
// //                                     left: '50%',
// //                                     transform: 'translateX(-50%)',
// //                                     width: '80px',
// //                                     height: '4px',
// //                                     background: `linear-gradient(90deg, ${themeColors.primary}, ${themeColors.secondary})`,
// //                                     borderRadius: '2px'
// //                                 }}
// //                             />
// //                         </Typography>

// //                         <Typography
// //                             variant="h6"
// //                             align="center"
// //                             sx={{
// //                                 mb: 8,
// //                                 opacity: 0.8,
// //                                 maxWidth: '700px',
// //                                 mx: 'auto',
// //                                 fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                 color: themeColors.text
// //                             }}
// //                         >
// //                             {t.featuresSub}
// //                         </Typography>
// //                     </motion.div>

// //                     <Grid container spacing={4}>
// //                         {features.map((feature, index) => (
// //                             <Grid item xs={12} sm={6} md={3} key={index}>
// //                                 <motion.div
// //                                     initial={{ opacity: 0, y: 30 }}
// //                                     whileInView={{ opacity: 1, y: 0 }}
// //                                     viewport={{ once: true }}
// //                                     transition={{ duration: 0.5, delay: index * 0.1 }}
// //                                 >
// //                                     <Paper
// //                                         elevation={darkMode ? 0 : 2}
// //                                         sx={{
// //                                             p: 4,
// //                                             height: '100%',
// //                                             display: 'flex',
// //                                             flexDirection: 'column',
// //                                             alignItems: 'center',
// //                                             textAlign: 'center',
// //                                             borderRadius: 4,
// //                                             transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
// //                                             '&:hover': {
// //                                                 transform: 'translateY(-10px)',
// //                                                 boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
// //                                             },
// //                                             backgroundColor: themeColors.cardBg,
// //                                             border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
// //                                             position: 'relative',
// //                                             overflow: 'hidden'
// //                                         }}
// //                                         onMouseEnter={handleCursorHover}
// //                                         onMouseLeave={handleCursorDefault}
// //                                     >
// //                                         {/* Decorative corner */}
// //                                         {/* <Box
// //                                                 sx={{
// //                                                     position: 'absolute',
// //                                                     top: 0,
// //                                                     right: 0,
// //                                                     borderWidth: '0 50px 50px 0',
// //                                                     borderStyle: 'solid',
// //                                                     borderColor: `transparent ${alpha(feature.color, 0.1)} transparent transparent`,
// //                                                     transition: 'all 0.3s ease'
// //                                                 }}
// //                                             /> */}

// //                                         <Box
// //                                             sx={{
// //                                                 mb: 3,
// //                                                 color: feature.color,
// //                                                 p: 2,
// //                                                 borderRadius: '50%',
// //                                                 backgroundColor: alpha(feature.color, 0.1),
// //                                                 position: 'relative',
// //                                                 '&::after': {
// //                                                     content: '""',
// //                                                     position: 'absolute',
// //                                                     top: -5,
// //                                                     left: -5,
// //                                                     right: -5,
// //                                                     bottom: -5,
// //                                                     borderRadius: '50%',
// //                                                     border: `2px dashed ${alpha(feature.color, 0.3)}`,
// //                                                     animation: 'spin 20s linear infinite',
// //                                                 }
// //                                             }}
// //                                         >
// //                                             {feature.icon}
// //                                         </Box>

// //                                         <Typography
// //                                             variant="h5"
// //                                             component="h3"
// //                                             fontWeight="bold"
// //                                             gutterBottom
// //                                             sx={{
// //                                                 fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                                 color: themeColors.text,
// //                                                 position: 'relative',
// //                                                 zIndex: 1
// //                                             }}
// //                                         >
// //                                             {feature.title}
// //                                         </Typography>

// //                                         <Typography
// //                                             variant="body1"
// //                                             sx={{
// //                                                 lineHeight: 1.7,
// //                                                 color: alpha(themeColors.text, 0.8),
// //                                                 background: 'none',
// //                                                 WebkitBackgroundClip: 'initial',
// //                                                 WebkitTextFillColor: 'initial',
// //                                                 fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                                 position: 'relative',
// //                                                 zIndex: 1
// //                                             }}
// //                                         >
// //                                             {feature.description}
// //                                         </Typography>
// //                                     </Paper>
// //                                 </motion.div>
// //                             </Grid>
// //                         ))}
// //                     </Grid>
// //                 </Container>
// //             </Box>

// //             {/* Stats Section */}
// //             <Box
// //                 ref={statsRef}
// //                 sx={{
// //                     py: { xs: 8, md: 10 },
// //                     background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
// //                     color: 'white',
// //                     position: 'relative',
// //                     overflow: 'hidden'
// //                 }}
// //             >
// //                 {/* Decorative background */}
// //                 <Box sx={{
// //                     position: 'absolute',
// //                     top: 0,
// //                     left: 0,
// //                     right: 0,
// //                     bottom: 0,
// //                     opacity: 0.1,
// //                     backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
// //                 }} />

// //                 <Container maxWidth="lg">
// //                     <motion.div
// //                         initial={{ opacity: 0, y: 30 }}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         viewport={{ once: true }}
// //                         transition={{ duration: 0.8 }}
// //                     >
// //                         <Typography
// //                             variant="h2"
// //                             component="h2"
// //                             align="center"
// //                             sx={{
// //                                 fontWeight: 'bold',
// //                                 mb: 2,
// //                                 fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                 color: 'white',
// //                                 textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
// //                                 position: 'relative',
// //                                 display: 'inline-block',
// //                                 left: '50%',
// //                                 transform: 'translateX(-50%)'
// //                             }}
// //                         >
// //                             {t.statsTitle}
// //                             <Box
// //                                 sx={{
// //                                     position: 'absolute',
// //                                     bottom: -5,
// //                                     left: '50%',
// //                                     transform: 'translateX(-50%)',
// //                                     width: '80px',
// //                                     height: '4px',
// //                                     background: 'rgba(255, 255, 255, 0.5)',
// //                                     borderRadius: '2px'
// //                                 }}
// //                             />
// //                         </Typography>

// //                         <Typography
// //                             variant="h6"
// //                             align="center"
// //                             sx={{
// //                                 mb: 8,
// //                                 opacity: 0.9,
// //                                 maxWidth: '700px',
// //                                 mx: 'auto',
// //                                 fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                 color: 'white'
// //                             }}
// //                         >
// //                             {t.statsSub}
// //                         </Typography>
// //                     </motion.div>

// //                     <Grid container spacing={4} justifyContent="center">
// //                         {stats.map((stat, index) => (
// //                             <Grid item xs={6} md={3} key={index}>
// //                                 <motion.div
// //                                     initial={{ opacity: 0, scale: 0.8 }}
// //                                     whileInView={{ opacity: 1, scale: 1 }}
// //                                     viewport={{ once: true }}
// //                                     transition={{
// //                                         duration: 0.5,
// //                                         delay: index * 0.1,
// //                                         type: "spring",
// //                                         stiffness: 100
// //                                     }}
// //                                 >
// //                                     <Box
// //                                         sx={{
// //                                             display: 'flex',
// //                                             flexDirection: 'column',
// //                                             alignItems: 'center',
// //                                             textAlign: 'center',
// //                                             p: 3,
// //                                             borderRadius: 4,
// //                                             backgroundColor: 'rgba(255, 255, 255, 0.1)',
// //                                             backdropFilter: 'blur(10px)',
// //                                             border: '1px solid rgba(255, 255, 255, 0.2)',
// //                                             transition: 'transform 0.3s ease',
// //                                             '&:hover': {
// //                                                 transform: 'translateY(-5px)'
// //                                             }
// //                                         }}
// //                                         onMouseEnter={handleCursorHover}
// //                                         onMouseLeave={handleCursorDefault}
// //                                     >
// //                                         <Box
// //                                             sx={{
// //                                                 color: 'white',
// //                                                 mb: 2,
// //                                                 p: 1.5,
// //                                                 borderRadius: '50%',
// //                                                 backgroundColor: alpha(stat.color, 0.3),
// //                                                 display: 'flex',
// //                                                 alignItems: 'center',
// //                                                 justifyContent: 'center'
// //                                             }}
// //                                         >
// //                                             {stat.icon}
// //                                         </Box>

// //                                         <Typography
// //                                             variant="h3"
// //                                             component="p"
// //                                             sx={{
// //                                                 fontWeight: 'bold',
// //                                                 mb: 1,
// //                                                 fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                                 color: 'white',
// //                                                 textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
// //                                                 fontSize: { xs: '1.8rem', md: '2.5rem' }
// //                                             }}
// //                                         >
// //                                             <CountUp end={parseInt(stat.value.replace(/[^0-9]/g, ''))} duration={2.5} separator="," />
// //                                             {stat.value.includes('+') && '+'}
// //                                         </Typography>

// //                                         <Typography
// //                                             variant="body1"
// //                                             sx={{
// //                                                 fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                                 color: 'rgba(255, 255, 255, 0.9)',
// //                                                 fontWeight: 500
// //                                             }}
// //                                         >
// //                                             {stat.label}
// //                                         </Typography>
// //                                     </Box>
// //                                 </motion.div>
// //                             </Grid>
// //                         ))}
// //                     </Grid>
// //                 </Container>
// //             </Box>

// //             {/* Testimonials Section */}
// //             <Box
// //                 ref={testimonialRef}
// //                 sx={{
// //                     py: 10,
// //                     backgroundColor: darkMode ? '#0a0a0a' : '#ffffff',
// //                     transition: 'background-color 0.3s ease'
// //                 }}
// //             >
// //                 <Container maxWidth="lg">
// //                     <Typography
// //                         variant="h3"
// //                         component="h2"
// //                         align="center"
// //                         sx={{
// //                             fontWeight: 'bold',
// //                             mb: 6,
// //                             position: 'relative',
// //                             fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                             '&::after': {
// //                                 content: '""',
// //                                 position: 'absolute',
// //                                 width: '80px',
// //                                 height: '4px',
// //                                 bottom: '-15px',
// //                                 left: '50%',
// //                                 transform: 'translateX(-50%)',
// //                                 background: `linear-gradient(to right, ${themeColors.primary}, ${themeColors.secondary})`,
// //                                 borderRadius: '2px'
// //                             }
// //                         }}
// //                     >
// //                         {t.testimonialTitle}
// //                     </Typography>

// //                     <Box sx={{ position: 'relative', mt: 8, mb: 4 }}>
// //                         <AnimatePresence mode="wait">
// //                             <motion.div
// //                                 key={currentTestimonialIndex}
// //                                 initial={{ opacity: 0, x: 100 }}
// //                                 animate={{ opacity: 1, x: 0 }}
// //                                 exit={{ opacity: 0, x: -100 }}
// //                                 transition={{ duration: 0.5 }}
// //                             >
// //                                 <Card
// //                                     elevation={darkMode ? 8 : 3}
// //                                     sx={{
// //                                         display: 'flex',
// //                                         flexDirection: { xs: 'column', md: 'row' },
// //                                         borderRadius: 4,
// //                                         overflow: 'hidden',
// //                                         backgroundColor: darkMode ? themeColors.cardBg : '#ffffff',
// //                                         position: 'relative'
// //                                     }}
// //                                 >
// //                                     <Box
// //                                         sx={{
// //                                             width: { xs: '100%', md: '30%' },
// //                                             display: 'flex',
// //                                             flexDirection: 'column',
// //                                             alignItems: 'center',
// //                                             justifyContent: 'center',
// //                                             p: 4,
// //                                             background: testimonials[currentTestimonialIndex].background,
// //                                             color: 'white',
// //                                             textAlign: 'center'
// //                                         }}
// //                                     >
// //                                         <Avatar
// //                                             src={testimonials[currentTestimonialIndex].avatar}
// //                                             alt={testimonials[currentTestimonialIndex].author}
// //                                             sx={{
// //                                                 width: 120,
// //                                                 height: 120,
// //                                                 border: '4px solid white',
// //                                                 boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
// //                                                 mb: 2
// //                                             }}
// //                                         />
// //                                         <Typography variant="h6" fontWeight="bold" gutterBottom>
// //                                             {testimonials[currentTestimonialIndex].author}
// //                                         </Typography>
// //                                         <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
// //                                             {testimonials[currentTestimonialIndex].role}
// //                                         </Typography>
// //                                         <Chip
// //                                             label={testimonials[currentTestimonialIndex].subject}
// //                                             sx={{
// //                                                 backgroundColor: 'rgba(255, 255, 255, 0.2)',
// //                                                 color: 'white',
// //                                                 fontWeight: 'medium',
// //                                                 mb: 2
// //                                             }}
// //                                         />
// //                                         <Box sx={{ display: 'flex', alignItems: 'center' }}>
// //                                             {[...Array(Math.floor(testimonials[currentTestimonialIndex].rating))].map((_, i) => (
// //                                                 <StarIcon key={i} sx={{ color: '#FFD700', fontSize: 20 }} />
// //                                             ))}
// //                                             {testimonials[currentTestimonialIndex].rating % 1 !== 0 && (
// //                                                 <StarHalfIcon sx={{ color: '#FFD700', fontSize: 20 }} />
// //                                             )}
// //                                         </Box>
// //                                     </Box>
// //                                     <CardContent sx={{
// //                                         flexGrow: 1,
// //                                         p: 5,
// //                                         display: 'flex',
// //                                         flexDirection: 'column',
// //                                         justifyContent: 'center'
// //                                     }}>
// //                                         <Typography
// //                                             variant="h6"
// //                                             paragraph
// //                                             sx={{
// //                                                 fontStyle: 'italic',
// //                                                 lineHeight: 1.8,
// //                                                 mb: 3,
// //                                                 position: 'relative',
// //                                                 color: darkMode ? 'white' : 'text.primary',
// //                                                 background: 'none',
// //                                                 WebkitBackgroundClip: 'initial',
// //                                                 WebkitTextFillColor: 'initial',
// //                                                 fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                                 fontSize: { xs: '1rem', md: '1.25rem' }
// //                                             }}
// //                                         >
// //                                             {testimonials[currentTestimonialIndex].text}
// //                                         </Typography>
// //                                     </CardContent>
// //                                 </Card>
// //                             </motion.div>
// //                         </AnimatePresence>

// //                         {/* Navigation dots */}
// //                         <Box sx={{
// //                             display: 'flex',
// //                             justifyContent: 'center',
// //                             mt: 4,
// //                             gap: 1
// //                         }}>
// //                             {testimonials.map((_, index) => (
// //                                 <Box
// //                                     key={index}
// //                                     onClick={() => setCurrentTestimonialIndex(index)}
// //                                     sx={{
// //                                         width: 12,
// //                                         height: 12,
// //                                         borderRadius: '50%',
// //                                         backgroundColor: currentTestimonialIndex === index ?
// //                                             themeColors.primary :
// //                                             alpha(themeColors.primary, 0.3),
// //                                         cursor: 'pointer',
// //                                         transition: 'all 0.3s ease',
// //                                         '&:hover': {
// //                                             transform: 'scale(1.2)',
// //                                             backgroundColor: alpha(themeColors.primary, 0.7)
// //                                         }
// //                                     }}
// //                                     onMouseEnter={handleCursorHover}
// //                                     onMouseLeave={handleCursorDefault}
// //                                 />
// //                             ))}
// //                         </Box>
// //                     </Box>
// //                 </Container>
// //             </Box>

// //             <Box
// //                 ref={faqRef}
// //                 sx={{
// //                     py: { xs: 8, md: 12 },
// //                     backgroundColor: themeColors.paper,
// //                     position: 'relative',
// //                     overflow: 'hidden'
// //                 }}
// //             >
// //                 <Container maxWidth="lg">
// //                     <motion.div
// //                         initial={{ opacity: 0, y: 30 }}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         viewport={{ once: true }}
// //                         transition={{ duration: 0.8 }}
// //                     >
// //                         <Typography
// //                             variant="h2"
// //                             component="h2"
// //                             align="center"
// //                             sx={{
// //                                 fontWeight: 'bold',
// //                                 mb: 2,
// //                                 fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                 color: themeColors.text,
// //                                 position: 'relative',
// //                                 display: 'inline-block',
// //                                 right: '18%',
// //                                 transform: 'translateX(-50%)'
// //                             }}
// //                         >
// //                             {t.faqTitle}
// //                             <Box
// //                                 sx={{
// //                                     position: 'absolute',
// //                                     bottom: -5,
// //                                     left: '50%',
// //                                     transform: 'translateX(-50%)',
// //                                     width: '80px',
// //                                     height: '4px',
// //                                     background: `linear-gradient(90deg, ${themeColors.primary}, ${themeColors.secondary})`,
// //                                     borderRadius: '2px'
// //                                 }}
// //                             />
// //                         </Typography>

// //                         <Typography
// //                             variant="h6"
// //                             align="center"
// //                             sx={{
// //                                 mb: 8,
// //                                 opacity: 0.8,
// //                                 maxWidth: '700px',
// //                                 mx: 'auto',
// //                                 fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                 color: themeColors.text
// //                             }}
// //                         >
// //                             {t.faqSub}
// //                         </Typography>
// //                     </motion.div>

// //                     <Grid container spacing={4}>
// //                         <Grid item xs={12} md={6}>
// //                             <Box
// //                                 component="img"
// //                                 src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
// //                                 alt="Students studying together"
// //                                 sx={{
// //                                     width: '100%',
// //                                     height: '100%',
// //                                     objectFit: 'cover',
// //                                     borderRadius: 4,
// //                                     boxShadow: darkMode ? 'none' : '0 20px 40px rgba(0, 0, 0, 0.1)',
// //                                     border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
// //                                     maxHeight: '500px'
// //                                 }}
// //                             />
// //                         </Grid>

// //                         <Grid item xs={12} md={6}>
// //                             <Box sx={{ maxWidth: '600px' }}>
// //                                 {faqs.map((faq, index) => (
// //                                     <motion.div
// //                                         key={index}
// //                                         initial={{ opacity: 0, y: 20 }}
// //                                         whileInView={{ opacity: 1, y: 0 }}
// //                                         viewport={{ once: true }}
// //                                         transition={{ duration: 0.5, delay: index * 0.1 }}
// //                                     >
// //                                         <Paper
// //                                             elevation={darkMode ? 0 : 1}
// //                                             sx={{
// //                                                 mb: 2,
// //                                                 overflow: 'hidden',
// //                                                 borderRadius: 2,
// //                                                 backgroundColor: themeColors.cardBg,
// //                                                 border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
// //                                             }}
// //                                         >
// //                                             <Box
// //                                                 onClick={() => handleFaqClick(index)}
// //                                                 sx={{
// //                                                     p: 3,
// //                                                     display: 'flex',
// //                                                     justifyContent: 'space-between',
// //                                                     alignItems: 'center',
// //                                                     cursor: 'pointer',
// //                                                     backgroundColor: currentFaqIndex === index ?
// //                                                         alpha(themeColors.primary, 0.1) :
// //                                                         'transparent',
// //                                                     transition: 'background-color 0.3s ease',
// //                                                     '&:hover': {
// //                                                         backgroundColor: alpha(themeColors.primary, 0.05)
// //                                                     }
// //                                                 }}
// //                                                 onMouseEnter={handleCursorHover}
// //                                                 onMouseLeave={handleCursorDefault}
// //                                             >
// //                                                 <Typography
// //                                                     variant="h6"
// //                                                     sx={{
// //                                                         fontWeight: 'bold',
// //                                                         color: currentFaqIndex === index ?
// //                                                             themeColors.primary :
// //                                                             themeColors.text,
// //                                                         fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
// //                                                     }}
// //                                                 >
// //                                                     {faq.question}
// //                                                 </Typography>

// //                                                 <IconButton
// //                                                     size="small"
// //                                                     sx={{
// //                                                         transform: currentFaqIndex === index ? 'rotate(180deg)' : 'rotate(0)',
// //                                                         transition: 'transform 0.3s ease',
// //                                                         color: currentFaqIndex === index ?
// //                                                             themeColors.primary :
// //                                                             alpha(themeColors.text, 0.7)
// //                                                     }}
// //                                                 >
// //                                                     <ExpandMoreIcon />
// //                                                 </IconButton>
// //                                             </Box>
// //                                             <Collapse in={currentFaqIndex === index}>
// //                                                 <Box sx={{ p: 3, pt: 0 }}>
// //                                                     <Typography
// //                                                         variant="body1"
// //                                                         sx={{
// //                                                             color: alpha(themeColors.text, 0.8),
// //                                                             lineHeight: 1.7,
// //                                                             fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
// //                                                         }}
// //                                                     >
// //                                                         {faq.answer}
// //                                                     </Typography>
// //                                                 </Box>
// //                                             </Collapse>
// //                                         </Paper>
// //                                     </motion.div>
// //                                 ))}
// //                             </Box>
// //                         </Grid>
// //                     </Grid>
// //                 </Container>
// //             </Box>


// //             <Box
// //                 sx={{
// //                     direction: textDirection,
// //                     backgroundColor: darkMode ? '#121212' : '#ffffff',
// //                     color: themeColors.text,
// //                     transition: 'background-color 0.3s ease, color 0.3s ease',
// //                     position: 'relative'
// //                 }}
// //                 onMouseMove={handleMouseMove}
// //             >
// //                 {/*  // Custom cursor (hidden on mobile) */}
// //                 {!isMobile && (
// //                     <motion.div
// //                         className="cursor"
// //                         variants={cursorVariants}
// //                         animate={cursorVariant}
// //                         style={{
// //                             position: 'fixed',
// //                             borderRadius: '50%',
// //                             pointerEvents: 'none',
// //                             zIndex: 9999,
// //                             mixBlendMode: 'difference'
// //                         }}
// //                     />
// //                 )}


// //                 <Box
// //                     ref={ctaRef}
// //                     sx={{
// //                         py: 10,
// //                         backgroundImage: themeColors.ctaGradient,
// //                         backgroundSize: 'cover',
// //                         backgroundPosition: 'center',
// //                         backgroundAttachment: 'fixed',
// //                         color: 'white',
// //                         textAlign: 'center',
// //                         position: 'relative',
// //                         overflow: 'hidden'
// //                     }}
// //                 >
// //                     {/* Animated overlay */}
// //                     {/* <Box sx={{
// //                             position: 'absolute',
// //                             top: 0,
// //                             left: 0,
// //                             right: 0,
// //                             bottom: 0,
// //                             backgroundColor: 'rgba(0, 0, 0, 0.2)',
// //                             zIndex: 1
// //                         }} />

// //                         <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
// //                             <motion.div
// //                                 initial={{ opacity: 0, y: 50 }}
// //                                 whileInView={{ opacity: 1, y: 0 }}
// //                                 viewport={{ once: true }}
// //                                 transition={{ duration: 0.5 }}
// //                             >
// //                                 <Typography
// //                                     variant="h3"
// //                                     component="h2"
// //                                     sx={{
// //                                         fontWeight: 'bold',
// //                                         mb: 3,
// //                                         textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
// //                                         fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
// //                                     }}
// //                                 >
// //                                     {t.ctaTitle}
// //                                 </Typography>
// //                                 <Typography
// //                                     variant="h6"
// //                                     sx={{
// //                                         mb: 4,
// //                                         opacity: 0.9,
// //                                         maxWidth: '700px',
// //                                         mx: 'auto',
// //                                         lineHeight: 1.5,
// //                                         color: 'white',
// //                                         background: 'none',
// //                                         WebkitBackgroundClip: 'initial',
// //                                         WebkitTextFillColor: 'initial',
// //                                         fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
// //                                     }}
// //                                 >
// //                                     {t.footerTagline}
// //                                 </Typography>
// //                                 <Button
// //                                     variant="contained"
// //                                     size="large"
// //                                     onClick={() => navigate('/register')}
// //                                     onMouseEnter={handleCursorHover}
// //                                     onMouseLeave={handleCursorDefault}
// //                                     endIcon={<ArrowRightIcon />}
// //                                     sx={{
// //                                         borderRadius: '50px',
// //                                         px: 5,
// //                                         py: 1.5,
// //                                         fontSize: '1.2rem',
// //                                         textTransform: 'none',
// //                                         fontWeight: 'bold',
// //                                         backgroundColor: 'white',
// //                                         color: themeColors.primary,
// //                                         fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                         '&:hover': {
// //                                             backgroundColor: 'rgba(255, 255, 255, 0.9)',
// //                                             boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
// //                                             transform: 'translateY(-2px)'
// //                                         },
// //                                         transition: 'all 0.3s ease',
// //                                         position: 'relative',
// //                                         overflow: 'hidden',
// //                                         '&::after': {
// //                                             content: '""',
// //                                             position: 'absolute',
// //                                             top: 0,
// //                                             left: 0,
// //                                             width: '100%',
// //                                             height: '100%',
// //                                             background: 'linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,.7), rgba(255,255,255,0) 70%)',
// //                                             transform: 'translateX(-100%)',
// //                                             animation: 'shine 3s infinite linear',
// //                                             '@keyframes shine': {
// //                                                 '100%': {
// //                                                     transform: 'translateX(100%)'
// //                                                 }
// //                                             }
// //                                         }
// //                                     }}
// //                                 >
// //                                     {t.ctaButton}
// //                                 </Button>
// //                             </motion.div>
// //                         </Container>
// //                     </Box> */}

// //                     {/* Footer */}
// //                     <Box
// //                         component="footer"
// //                         sx={{
// //                             py: 6,
// //                             backgroundColor: themeColors.footerBg,
// //                             color: 'white',
// //                             transition: 'background-color 0.3s ease'
// //                         }}
// //                     >
// //                         <Container maxWidth="lg">
// //                             <Grid container spacing={4}>
// //                                 <Grid item xs={12} md={4}>
// //                                     <Box
// //                                         sx={{
// //                                             display: 'flex',
// //                                             alignItems: 'center',
// //                                             mb: 2,
// //                                             cursor: 'pointer'
// //                                         }}
// //                                         onClick={scrollToTop}
// //                                         onMouseEnter={handleCursorHover}
// //                                         onMouseLeave={handleCursorDefault}
// //                                     >
// //                                         <ChavrutaLogo color="white" />
// //                                     </Box>
// //                                     <Typography
// //                                         variant="body2"
// //                                         sx={{
// //                                             opacity: 0.8,
// //                                             maxWidth: '300px',
// //                                             lineHeight: 1.7,
// //                                             fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
// //                                         }}
// //                                     >
// //                                         {t.footerTagline}
// //                                     </Typography>
// //                                     <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
// //                                         {socialLinks.map((social, index) => (
// //                                             <IconButton
// //                                                 key={index}
// //                                                 size="small"
// //                                                 sx={{
// //                                                     color: 'white',
// //                                                     backgroundColor: alpha(social.color, 0.2),
// //                                                     transition: 'all 0.3s ease',
// //                                                     '&:hover': {
// //                                                         backgroundColor: social.color,
// //                                                         transform: 'translateY(-3px)'
// //                                                     }
// //                                                 }}
// //                                                 onMouseEnter={handleCursorHover}
// //                                                 onMouseLeave={handleCursorDefault}
// //                                             >
// //                                                 {social.icon}
// //                                             </IconButton>
// //                                         ))}
// //                                     </Box>
// //                                 </Grid>
// //                                 <Grid item xs={12} sm={6} md={2}>
// //                                     <Typography
// //                                         variant="h6"
// //                                         fontWeight="bold"
// //                                         gutterBottom
// //                                         sx={{ fontFamily: "'Heebo', 'Rubik', Arial, sans-serif" }}
// //                                     >
// //                                         {t.quickLinks || "קישורים מהירים"}
// //                                     </Typography>
// //                                     <List disablePadding>
// //                                         {footerLinks.map((link) => (
// //                                             <ListItem
// //                                                 key={link.name}
// //                                                 disablePadding
// //                                                 sx={{
// //                                                     pb: 1,
// //                                                     '&:hover': {
// //                                                         color: themeColors.secondary
// //                                                     }
// //                                                 }}
// //                                             >
// //                                                 <Box
// //                                                     component="a"
// //                                                     onClick={link.action}
// //                                                     sx={{
// //                                                         color: 'inherit',
// //                                                         textDecoration: 'none',
// //                                                         transition: 'color 0.3s ease',
// //                                                         fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                                         display: 'flex',
// //                                                         alignItems: 'center',
// //                                                         cursor: 'pointer',
// //                                                         width: '100%'
// //                                                     }}
// //                                                     onMouseEnter={handleCursorHover}
// //                                                     onMouseLeave={handleCursorDefault}
// //                                                 >
// //                                                     <ArrowRightIcon
// //                                                         onClick={(e) => {
// //                                                             e.stopPropagation();
// //                                                             scrollToTop();
// //                                                         }}
// //                                                         sx={{
// //                                                             fontSize: 16,
// //                                                             mr: 1,
// //                                                             opacity: 0.7,
// //                                                             transition: 'transform 0.3s ease',
// //                                                             cursor: 'pointer'
// //                                                         }}
// //                                                     />
// //                                                     {link.name}
// //                                                 </Box>
// //                                             </ListItem>
// //                                         ))}

// //                                     </List>
// //                                 </Grid>

// //                                 <Grid item xs={12} sm={6} md={4}>
// //                                     <List disablePadding>
// //                                         {contactInfo.map((info, index) => (
// //                                             <ListItem
// //                                                 key={index}
// //                                                 disablePadding
// //                                                 sx={{
// //                                                     pb: 2,
// //                                                     display: 'flex',
// //                                                     alignItems: 'flex-start'
// //                                                 }}
// //                                             >
// //                                                 <Box
// //                                                     sx={{
// //                                                         mr: 2,
// //                                                         color: themeColors.secondary,
// //                                                         mt: 0.5
// //                                                     }}
// //                                                 >
// //                                                     {info.icon}
// //                                                 </Box>
// //                                                 <Box>
// //                                                     <Typography
// //                                                         variant="body2"
// //                                                         sx={{
// //                                                             opacity: 0.7,
// //                                                             fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
// //                                                         }}
// //                                                     >
// //                                                         {info.label}
// //                                                     </Typography>
// //                                                     <Typography
// //                                                         variant="body1"
// //                                                         sx={{ fontFamily: "'Heebo', 'Rubik', Arial, sans-serif" }}
// //                                                     >
// //                                                         {info.value}
// //                                                     </Typography>
// //                                                 </Box>
// //                                             </ListItem>
// //                                         ))}
// //                                     </List>
// //                                 </Grid>
// //                             </Grid>
// //                             <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
// //                             <Box sx={{
// //                                 display: 'flex',
// //                                 flexDirection: { xs: 'column', sm: 'row' },
// //                                 justifyContent: 'space-between',
// //                                 alignItems: { xs: 'center', sm: 'flex-start' },
// //                                 gap: 2
// //                             }}>
// //                                 <Typography
// //                                     variant="body2"
// //                                     sx={{
// //                                         opacity: 0.7,
// //                                         fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
// //                                         textAlign: { xs: 'center', sm: 'left' }
// //                                     }}
// //                                 >
// //                                     © {new Date().getFullYear()} ChavrutaMatch. {t.footerRights}
// //                                 </Typography>
// //                                 <Box sx={{
// //                                     display: 'flex',
// //                                     gap: { xs: 2, sm: 4 },
// //                                     flexWrap: 'wrap',
// //                                     justifyContent: 'center'
// //                                 }}>

// //                                 </Box>
// //                             </Box>
// //                         </Container>
// //                     </Box>


// //                     {/* Scroll to top button */}
// //                     <Zoom in={showScrollFab}>
// //                         <Fab
// //                             color="primary"
// //                             aria-label="scroll to top"
// //                             onClick={scrollToTop}
// //                             onMouseEnter={handleCursorHover}
// //                             onMouseLeave={handleCursorDefault}
// //                             sx={{
// //                                 position: 'fixed',
// //                                 bottom: 24,
// //                                 right: language === 'he' ? 'auto' : 24,
// //                                 left: language === 'he' ? 24 : 'auto',
// //                                 zIndex: 1000,
// //                                 background: `linear-gradient(45deg, ${themeColors.primary} 30%, ${themeColors.secondary} 90%)`,
// //                                 '&:hover': {
// //                                     background: `linear-gradient(45deg, ${themeColors.primary} 20%, ${themeColors.secondary} 80%)`,
// //                                     transform: 'translateY(-3px)',
// //                                     boxShadow: `0 6px 15px ${alpha(themeColors.primary, 0.4)}`
// //                                 },
// //                                 transition: 'all 0.3s ease'
// //                             }}
// //                         >
// //                             {language === 'he' ? <ArrowForwardIcon /> : <ArrowBackIcon />}
// //                         </Fab>
// //                     </Zoom>
// //                 </Box>
// //             </Box>
// //         </Box>
// //     );
// // };

// // export default Home;

























// import { Link, useNavigate } from "react-router-dom";
// import './home.css';
// import * as React from 'react';
// import { useEffect, useState, useRef } from 'react';
// import { useDispatch } from "react-redux";
// import { GetPersonThunk } from "../../redux/Person/getPersonThunk";
// import { motion, AnimatePresence } from "framer-motion";
// import { alpha, createTheme, ThemeProvider } from '@mui/material/styles';
// import Lottie from 'react-lottie';
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import CountUp from 'react-countup';

// // Material UI imports
// import {
//     AppBar, Box, Toolbar, IconButton, Typography, Menu, Container,
//     Avatar, Button, Tooltip, MenuItem, Drawer, List, ListItem,
//     ListItemIcon, ListItemText, Divider, Fade, Paper, Card, CardContent,
//     CardMedia, Grid, Zoom, useMediaQuery, useTheme, Fab, Slide,
//     FormControlLabel, Switch, Backdrop, CircularProgress, Rating,
//     Chip, Tabs, Tab, Badge, Skeleton, Snackbar, Alert, Stack,
//     Collapse, InputAdornment, TextField,
//     AccordionSummary,
//     Accordion,
//     AccordionDetails
// } from '@mui/material';

// // Icons
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import EmailIcon from '@mui/icons-material/Email';
// import PhoneIcon from '@mui/icons-material/Phone';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import MenuIcon from '@mui/icons-material/Menu';
// import SchoolIcon from '@mui/icons-material/School';
// import PersonIcon from '@mui/icons-material/Person';
// import InfoIcon from '@mui/icons-material/Info';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import LanguageIcon from '@mui/icons-material/Language';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import GroupsIcon from '@mui/icons-material/Groups';
// import BookIcon from '@mui/icons-material/Book';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
// import MouseIcon from '@mui/icons-material/Mouse';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
// import SpeedIcon from '@mui/icons-material/Speed';
// import SecurityIcon from '@mui/icons-material/Security';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
// import StarIcon from '@mui/icons-material/Star';
// import StarHalfIcon from '@mui/icons-material/StarHalf';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import CookieIcon from '@mui/icons-material/Cookie';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import LoginIcon from '@mui/icons-material/Login';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// // Custom components
// import ModernChavrutaLogo from "../logo/modernLogo.jsx";

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// // Chavruta color palette
// const chavrutaTheme = {
//   primary: {
//     main: '#2E5266',
//     light: '#4A7C95',
//     dark: '#1A3A4A',
//     contrastText: '#ffffff'
//   },
//   secondary: {
//     main: '#D4A574',
//     light: '#E6C299',
//     dark: '#B8935F',
//     contrastText: '#1A3A4A'
//   },
//   accent: {
//     main: '#8B4513',
//     light: '#A0522D',
//     dark: '#654321'
//   },
//   background: {
//     default: '#F8F6F0',
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

// export const Home = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//     const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

//     // Refs for sections
//     const heroRef = useRef(null);
//     const featuresRef = useRef(null);
//     const testimonialRef = useRef(null);
//     const statsRef = useRef(null);
//     const ctaRef = useRef(null);
//     const faqRef = useRef(null);
//     const mainRef = useRef(null);

//     // State
//     const [anchorElNav, setAnchorElNav] = useState(null);
//     const [anchorElUser, setAnchorElUser] = useState(null);
//     const [language, setLanguage] = useState('he');
//     const [scrollPosition, setScrollPosition] = useState(0);
//     const [showScrollFab, setShowScrollFab] = useState(false);
//     const [darkMode, setDarkMode] = useState(false);
//     const [isLoading, setIsLoading] = useState(true);
//     const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
//     const [activeSection, setActiveSection] = useState('hero');
//     const [scrollTrigger, setScrollTrigger] = useState(false);
//     const [showNotification, setShowNotification] = useState(false);
//     const [currentFaqIndex, setCurrentFaqIndex] = useState(null);
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const [cursorVariant, setCursorVariant] = useState("default");
//     const [snackbar, setSnackbar] = useState({
//         open: false,
//         message: '',
//         severity: 'success'
//       });

//     // Theme colors based on mode
//     const themeColors = {
//         primary: darkMode ? chavrutaTheme.primary.light : chavrutaTheme.primary.main,
//         secondary: darkMode ? chavrutaTheme.secondary.light : chavrutaTheme.secondary.main,
//         accent: darkMode ? chavrutaTheme.accent.light : chavrutaTheme.accent.main,
//         background: darkMode ? '#0f172a' : chavrutaTheme.background.default,
//         paper: darkMode ? '#1e293b' : chavrutaTheme.background.paper,
//         cardBg: darkMode ? '#1e293b' : chavrutaTheme.background.elevated,
//         text: darkMode ? '#e2e8f0' : chavrutaTheme.text.primary,
//         footerBg: darkMode ? '#0f172a' : chavrutaTheme.primary.dark,
//         heroGradient: darkMode ?
//             'linear-gradient(135deg, rgba(46, 82, 102, 0.95) 0%, rgba(26, 58, 74, 0.95) 50%, rgba(139, 69, 19, 0.9) 100%), url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)' :
//             'linear-gradient(135deg, rgba(46, 82, 102, 0.9) 0%, rgba(212, 165, 116, 0.9) 50%, rgba(139, 69, 19, 0.8) 100%), url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
//     };

//     // Translations
//     const translations = {
//         he: {
//             nav: {
//                 home: 'בית',
//                 features: 'יכולות',
//                 testimonials: 'המלצות',
//                 about: 'אודות',
//                 contact: 'צור קשר',
//                 login: 'התחברות',
//                 register: 'הרשמה',
//                 language: 'שפה'
//             },
//             hero: {
//                 title: 'מצא את שותף הלמידה המושלם שלך',
//                 subtitle: 'פלטפורמה מתקדמת לחיבור בין לומדי תורה ברחבי העולם',
//                 description: 'הצטרף לקהילה של אלפי לומדים, צור הצעות לימוד מותאמות אישית ומצא את החברותא הטובה ביותר עבורך',
//                 cta: 'התחל עכשיו',
//                 learnMore: 'למד עוד',
//                 watchVideo: 'צפה בסרטון',
//                 stats: {
//                     users: 'משתמשים פעילים',
//                     matches: 'זיווגים מוצלחים',
//                     sessions: 'שיעורים השבוע',
//                     countries: 'מדינות'
//                 }
//             },
//             features: {
//                 title: 'למה לבחור בחברותא?',
//                 subtitle: 'פתרון מקיף ומתקדם ללמידה משותפת',
//                 items: [
//                     {
//                         title: 'התאמה חכמה',
//                         description: 'אלגוריתם מתקדם שמתאים בין לומדים לפי רמה, נושאים ועדפות אישיות',
//                         icon: '🎯'
//                     },
//                     {
//                         title: 'לוח זמנים גמיש',
//                         description: 'תיאום זמנים אוטומטי ומערכת תזכורות חכמה',
//                         icon: '📅'
//                     },
//                     {
//                         title: 'מעקב התקדמות',
//                         description: 'כלים מתקדמים למעקב אחר ההתקדמות והישגים בלמידה',
//                         icon: '📊'
//                     },
//                     {
//                         title: 'קהילה עולמית',
//                         description: 'התחבר ללומדים מכל רחבי העולם ובנה קשרים משמעותיים',
//                         icon: '🌍'
//                     },
//                     {
//                         title: 'בטיחות ואמינות',
//                         description: 'מערכת אימות מתקדמת ובקרת איכות קפדנית',
//                         icon: '🔒'
//                     },
//                     {
//                         title: 'תמיכה 24/7',
//                         description: 'צוות תמיכה מקצועי זמין בכל עת לעזרה ויעוץ',
//                         icon: '🎧'
//                     }
//                 ]
//             },
//             testimonials: {
//                 title: 'מה אומרים עלינו',
//                 subtitle: 'חוויות אמיתיות של משתמשים מרוצים',
//                 items: [
//                     {
//                         name: 'רבי יוסף כהן',
//                         role: 'ראש ישיבה',
//                         content: 'המערכת שינתה לחלוטין את אופן הלמידה בישיבה שלנו. התלמידים מוצאים שותפים מתאימים בקלות ומתקדמים בצורה מרשימה.',
//                         rating: 5,
//                         image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
//                     },
//                     {
//                         name: 'שרה לוי',
//                         role: 'סטודנטית למשפטים',
//                         content: 'כאמא עובדת, המערכת מאפשרת לי ללמוד בזמנים שמתאימים לי ולמצוא שותפות לימוד באיכות גבוהה.',
//                         rating: 5,
//                         image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
//                     },
//                     {
//                         name: 'דוד גולדברג',
//                         role: 'עורך דין',
//                         content: 'אחרי שנים של חיפוש אחר חברותא מתאימה, מצאתי כאן בדיוק מה שחיפשתי. הלמידה הפכה למהנה ויעילה יותר.',
//                         rating: 5,
//                         image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
//                     }
//                 ]
//             },
//             faq: {
//                 title: 'שאלות נפוצות',
//                 subtitle: 'מענה לשאלות הנפוצות ביותר',
//                 items: [
//                     {
//                         question: 'איך המערכת מתאימה בין לומדים?',
//                         answer: 'המערכת משתמשת באלגוריתם מתקדם שלוקח בחשבון רמת הלמידה, נושאי העניין, זמינות, מיקום גיאוגרפי ועדפות אישיות כדי למצוא את ההתאמה הטובה ביותר.'
//                     },
//                     {
//                         question: 'האם השירות בתשלום?',
//                         answer: 'המערכת מציעה תוכנית בסיסית חינמית הכוללת יכולות התאמה בסיסיות. תוכניות פרימיום מציעות תכונות מתקדמות נוספות.'
//                     },
//                     {
//                         question: 'איך אני יכול להבטיח את איכות שותף הלמידה?',
//                         answer: 'כל המשתמשים עוברים תהליך אימות, ויש מערכת דירוגים והמלצות שעוזרת לבחור שותפים איכותיים.'
//                     },
//                     {
//                         question: 'מה קורה אם אני לא מרוצה מהשותף?',
//                         answer: 'תמיד ניתן לשנות שותף או לחפש שותפים נוספים. המערכת מעודדת גמישות ומתאימה את ההצעות בהתאם לחוויה.'
//                     }
//                 ]
//             },
//             footer: {
//                 company: 'חברותא',
//                 description: 'פלטפורמה מובילה לחיבור בין לומדי תורה',
//                 links: {
//                     about: 'אודות',
//                     privacy: 'פרטיות',
//                     terms: 'תנאי שימוש',
//                     contact: 'צור קשר',
//                     help: 'עזרה'
//                 },
//                 social: 'עקבו אחרינו',
//                 newsletter: 'הירשם לעדכונים',
//                 newsletterPlaceholder: 'כתובת אימייל',
//                 subscribe: 'הירשם',
//                 copyright: 'כל הזכויות שמורות'
//             }
//         },
//         en: {
//             nav: {
//                 home: 'Home',
//                 features: 'Features',
//                 testimonials: 'Testimonials',
//                 about: 'About',
//                 contact: 'Contact',
//                 login: 'Login',
//                 register: 'Register',
//                 language: 'Language'
//             },
//             hero: {
//                 title: 'Find Your Perfect Study Partner',
//                 subtitle: 'Advanced platform connecting Torah learners worldwide',
//                 description: 'Join thousands of learners, create personalized study offers and find the best chavruta for you',
//                 cta: 'Get Started',
//                 learnMore: 'Learn More',
//                 watchVideo: 'Watch Video',
//                 stats: {
//                     users: 'Active Users',
//                     matches: 'Successful Matches',
//                     sessions: 'Sessions This Week',
//                     countries: 'Countries'
//                 }
//             },
//             features: {
//                 title: 'Why Choose Chavruta?',
//                 subtitle: 'Comprehensive and advanced solution for collaborative learning',
//                 items: [
//                     {
//                         title: 'Smart Matching',
//                         description: 'Advanced algorithm that matches learners by level, topics and personal preferences',
//                         icon: '🎯'
//                     },
//                     {
//                         title: 'Flexible Scheduling',
//                         description: 'Automatic time coordination and smart reminder system',
//                         icon: '📅'
//                     },
//                     {
//                         title: 'Progress Tracking',
//                         description: 'Advanced tools for tracking progress and achievements in learning',
//                         icon: '📊'
//                     },
//                     {
//                         title: 'Global Community',
//                         description: 'Connect with learners from around the world and build meaningful relationships',
//                         icon: '🌍'
//                     },
//                     {
//                         title: 'Safety & Reliability',
//                         description: 'Advanced verification system and strict quality control',
//                         icon: '🔒'
//                     },
//                     {
//                         title: '24/7 Support',
//                         description: 'Professional support team available anytime for help and consultation',
//                         icon: '🎧'
//                     }
//                 ]
//             },
//             testimonials: {
//                 title: 'What People Say',
//                 subtitle: 'Real experiences from satisfied users',
//                 items: [
//                     {
//                         name: 'Rabbi Joseph Cohen',
//                         role: 'Rosh Yeshiva',
//                         content: 'The system completely changed how we learn in our yeshiva. Students easily find suitable partners and progress impressively.',
//                         rating: 5,
//                         image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
//                     },
//                     {
//                         name: 'Sarah Levy',
//                         role: 'Law Student',
//                         content: 'As a working mother, the system allows me to learn at convenient times and find high-quality study partners.',
//                         rating: 5,
//                         image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
//                     },
//                     {
//                         name: 'David Goldberg',
//                         role: 'Lawyer',
//                         content: 'After years of searching for a suitable chavruta, I found exactly what I was looking for here. Learning became more enjoyable and efficient.',
//                         rating: 5,
//                         image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
//                     }
//                 ]
//             },
//             faq: {
//                 title: 'Frequently Asked Questions',
//                 subtitle: 'Answers to the most common questions',
//                 items: [
//                     {
//                         question: 'How does the system match learners?',
//                         answer: 'The system uses an advanced algorithm that considers learning level, topics of interest, availability, geographic location and personal preferences to find the best match.'
//                     },
//                     {
//                         question: 'Is the service paid?',
//                         answer: 'The system offers a free basic plan that includes basic matching capabilities. Premium plans offer additional advanced features.'
//                     },
//                     {
//                         question: 'How can I ensure the quality of my study partner?',
//                         answer: 'All users go through a verification process, and there is a rating and recommendation system that helps choose quality partners.'
//                     },
//                     {
//                         question: 'What happens if I am not satisfied with my partner?',
//                         answer: 'You can always change partners or look for additional partners. The system encourages flexibility and adapts suggestions based on experience.'
//                     }
//                 ]
//             },
//             footer: {
//                 company: 'Chavruta',
//                 description: 'Leading platform for connecting Torah learners',
//                 links: {
//                     about: 'About',
//                     privacy: 'Privacy',
//                     terms: 'Terms of Service',
//                     contact: 'Contact',
//                     help: 'Help'
//                 },
//                 social: 'Follow Us',
//                 newsletter: 'Subscribe to Updates',
//                 newsletterPlaceholder: 'Email address',
//                 subscribe: 'Subscribe',
//                 copyright: 'All rights reserved'
//             }
//         }
//     };

//     const t = translations[language];
//     const isRTL = language === 'he';

//     // Navigation items
//     const pages = [
//         { key: 'home', label: t.nav.home, section: 'hero' },
//         { key: 'features', label: t.nav.features, section: 'features' },
//         { key: 'testimonials', label: t.nav.testimonials, section: 'testimonials' },
//         { key: 'about', label: t.nav.about, section: 'faq' },
//         { key: 'contact', label: t.nav.contact, section: 'contact' }
//     ];

//     // Effects
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsLoading(false);
//         }, 2000);

//         return () => clearTimeout(timer);
//     }, []);

//     useEffect(() => {
//         const handleScroll = () => {
//             const position = window.pageYOffset;
//             setScrollPosition(position);
//             setShowScrollFab(position > 300);

//             // Update active section
//             const sections = ['hero', 'features', 'testimonials', 'faq'];
//             const currentSection = sections.find(section => {
//                 const element = document.getElementById(section);
//                 if (element) {
//                     const rect = element.getBoundingClientRect();
//                     return rect.top <= 100 && rect.bottom >= 100;
//                 }
//                 return false;
//             });
//             if (currentSection) {
//                 setActiveSection(currentSection);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     useEffect(() => {
//         const handleMouseMove = (e) => {
//             setMousePosition({ x: e.clientX, y: e.clientY });
//         };

//         window.addEventListener('mousemove', handleMouseMove);
//         return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, []);

//     useEffect(() => {
//         // GSAP animations
//         gsap.fromTo('.hero-title', 
//             { opacity: 0, y: 50 },
//             { opacity: 1, y: 0, duration: 1, delay: 0.5 }
//         );

//         gsap.fromTo('.hero-subtitle', 
//             { opacity: 0, y: 30 },
//             { opacity: 1, y: 0, duration: 1, delay: 0.8 }
//         );

//         gsap.fromTo('.hero-buttons', 
//             { opacity: 0, y: 20 },
//             { opacity: 1, y: 0, duration: 1, delay: 1.1 }
//         );

//         // Scroll triggered animations
//         gsap.utils.toArray('.feature-card').forEach((card, index) => {
//             gsap.fromTo(card,
//                 { opacity: 0, y: 50, scale: 0.9 },
//                 {
//                     opacity: 1,
//                     y: 0,
//                     scale: 1,
//                     duration: 0.8,
//                     delay: index * 0.2,
//                     scrollTrigger: {
//                         trigger: card,
//                         start: 'top 80%',
//                         end: 'bottom 20%',
//                         toggleActions: 'play none none reverse'
//                     }
//                 }
//             );
//         });

//         return () => {
//             ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//         };
//     }, []);

//     // Testimonial carousel
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentTestimonialIndex(prev => 
//                 (prev + 1) % t.testimonials.items.length
//             );
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [t.testimonials.items.length]);

//     // Handlers
//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleLanguageToggle = () => {
//         setLanguage(prev => prev === 'he' ? 'en' : 'he');
//     };

//     const scrollToSection = (sectionId) => {
//         const element = document.getElementById(sectionId);
//         if (element) {
//             gsap.to(window, {
//                 duration: 1,
//                 scrollTo: { y: element, offsetY: 80 },
//                 ease: "power2.inOut"
//             });
//         }
//         handleCloseNavMenu();
//     };

//     const scrollToTop = () => {
//         gsap.to(window, {
//             duration: 1,
//             scrollTo: { y: 0 },
//             ease: "power2.inOut"
//         });
//     };

//     const handleFaqToggle = (index) => {
//         setCurrentFaqIndex(currentFaqIndex === index ? null : index);
//     };

//     const textEnterAnimation = {
//         initial: { opacity: 0, y: 20 },
//         animate: { opacity: 1, y: 0 },
//         transition: { duration: 0.6 }
//     };

//     const cardHoverAnimation = {
//         whileHover: { 
//             scale: 1.05, 
//             y: -10,
//             transition: { duration: 0.3 }
//         },
//         whileTap: { scale: 0.95 }
//     };

//     if (isLoading) {
//         return (
//             <Backdrop open={true} sx={{ 
//                 color: '#fff', 
//                 zIndex: 9999,
//                 background: `linear-gradient(135deg, ${chavrutaTheme.primary.main} 0%, ${chavrutaTheme.secondary.main} 100%)`
//             }}>
//                 <Box sx={{ textAlign: 'center' }}>
//                     <ModernChavrutaLogo size={100} animated={true} showText={false} />
//                     <Typography variant="h4" sx={{ mt: 3, fontWeight: 'bold' }}>
//                         חברותא
//                     </Typography>
//                     <Typography variant="subtitle1" sx={{ mt: 1, opacity: 0.8 }}>
//                         טוען...
//                     </Typography>
//                     <CircularProgress sx={{ mt: 3, color: chavrutaTheme.secondary.main }} />
//                 </Box>
//             </Backdrop>
//         );
//     }

//     return (
//         <Box 
//             ref={mainRef}
//             sx={{ 
//                 minHeight: '100vh',
//                 background: themeColors.background,
//                 color: themeColors.text,
//                 direction: isRTL ? 'rtl' : 'ltr',
//                 overflow: 'hidden'
//             }}
//         >
//             {/* Custom Cursor */}
//             <Box
//                 sx={{
//                     position: 'fixed',
//                     top: mousePosition.y - 10,
//                     left: mousePosition.x - 10,
//                     width: 20,
//                     height: 20,
//                     borderRadius: '50%',
//                     background: `radial-gradient(circle, ${chavrutaTheme.secondary.main}40, transparent)`,
//                     pointerEvents: 'none',
//                     zIndex: 9999,
//                     transition: 'all 0.1s ease',
//                     transform: cursorVariant === 'hover' ? 'scale(2)' : 'scale(1)',
//                     display: isMobile ? 'none' : 'block'
//                 }}
//             />

//             {/* Navigation */}
//             <AppBar 
//                 position="fixed" 
//                 sx={{ 
//                     background: scrollPosition > 50 
//                         ? `${themeColors.paper}ee`
//                         : 'transparent',
//                     backdropFilter: scrollPosition > 50 ? 'blur(20px)' : 'none',
//                     boxShadow: scrollPosition > 50 
//                         ? `0 4px 20px ${alpha(chavrutaTheme.primary.main, 0.1)}`
//                         : 'none',
//                     transition: 'all 0.3s ease',
//                     borderBottom: scrollPosition > 50 
//                         ? `1px solid ${alpha(chavrutaTheme.secondary.main, 0.2)}`
//                         : 'none'
//                 }}
//             >
//                 <Container maxWidth="xl">
//                     <Toolbar disableGutters sx={{ py: 1 }}>
//                         {/* Logo */}
//                         <ModernChavrutaLogo 
//                             size={50} 
//                             animated={true}
//                             onClick={() => scrollToSection('hero')}
//                             onMouseEnter={() => setCursorVariant('hover')}
//                             onMouseLeave={() => setCursorVariant('default')}
//                         />

//                         {/* Desktop Navigation */}
//                         <Box sx={{ 
//                             flexGrow: 1, 
//                             display: { xs: 'none', md: 'flex' },
//                             justifyContent: 'center',
//                             gap: 1
//                         }}>
//                             {pages.map((page) => (
//                                 <Button
//                                     key={page.key}
//                                     onClick={() => scrollToSection(page.section)}
//                                     onMouseEnter={() => setCursorVariant('hover')}
//                                     onMouseLeave={() => setCursorVariant('default')}
//                                     sx={{
//                                         mx: 1,
//                                         px: 3,
//                                         py: 1,
//                                         color: scrollPosition > 50 ? themeColors.text : 'white',
//                                         fontWeight: activeSection === page.section ? 'bold' : 'medium',
//                                         fontSize: '1rem',
//                                         borderRadius: '25px',
//                                         position: 'relative',
//                                         overflow: 'hidden',
//                                         background: activeSection === page.section 
//                                             ? `linear-gradient(135deg, ${chavrutaTheme.secondary.main}20, ${chavrutaTheme.accent.main}20)`
//                                             : 'transparent',
//                                         '&:hover': {
//                                             background: `linear-gradient(135deg, ${chavrutaTheme.secondary.main}30, ${chavrutaTheme.accent.main}30)`,
//                                             transform: 'translateY(-2px)',
//                                         },
//                                         '&::before': {
//                                             content: '""',
//                                             position: 'absolute',
//                                             bottom: 0,
//                                             left: '50%',
//                                             width: activeSection === page.section ? '80%' : '0%',
//                                             height: '2px',
//                                             background: `linear-gradient(90deg, ${chavrutaTheme.secondary.main}, ${chavrutaTheme.accent.main})`,
//                                             transform: 'translateX(-50%)',
//                                             transition: 'width 0.3s ease',
//                                         },
//                                         transition: 'all 0.3s ease'
//                                     }}
//                                 >
//                                     {page.label}
//                                 </Button>
//                             ))}
//                         </Box>

//                         {/* Right side buttons */}
//                         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//                             {/* Language Toggle */}
//                             <Tooltip title={t.nav.language}>
//                                 <IconButton
//                                     onClick={handleLanguageToggle}
//                                     onMouseEnter={() => setCursorVariant('hover')}
//                                     onMouseLeave={() => setCursorVariant('default')}
//                                     sx={{
//                                         color: scrollPosition > 50 ? themeColors.text : 'white',
//                                         background: `${chavrutaTheme.secondary.main}20`,
//                                         '&:hover': {
//                                             background: `${chavrutaTheme.secondary.main}40`,
//                                             transform: 'scale(1.1)',
//                                         },
//                                         transition: 'all 0.3s ease'
//                                     }}
//                                 >
//                                     <LanguageIcon />
//                                 </IconButton>
//                             </Tooltip>

//                             {/* Dark Mode Toggle */}
//                             <Tooltip title="מצב כהה/בהיר">
//                                 <IconButton
//                                     onClick={() => setDarkMode(!darkMode)}
//                                     onMouseEnter={() => setCursorVariant('hover')}
//                                     onMouseLeave={() => setCursorVariant('default')}
//                                     sx={{
//                                         color: scrollPosition > 50 ? themeColors.text : 'white',
//                                         background: `${chavrutaTheme.secondary.main}20`,
//                                         '&:hover': {
//                                             background: `${chavrutaTheme.secondary.main}40`,
//                                             transform: 'scale(1.1)',
//                                         },
//                                         transition: 'all 0.3s ease'
//                                     }}
//                                 >
//                                     {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
//                                 </IconButton>
//                             </Tooltip>

//                             {/* Login Button */}
//                             <Button
//                                 onClick={() => navigate('/login')}
//                                 onMouseEnter={() => setCursorVariant('hover')}
//                                 onMouseLeave={() => setCursorVariant('default')}
//                                 startIcon={<LoginIcon />}
//                                 sx={{
//                                     display: { xs: 'none', sm: 'flex' },
//                                     background: `linear-gradient(135deg, ${chavrutaTheme.secondary.main} 0%, ${chavrutaTheme.accent.main} 100%)`,
//                                     color: 'white',
//                                     fontWeight: 'bold',
//                                     px: 3,
//                                     py: 1,
//                                     borderRadius: '25px',
//                                     boxShadow: `0 4px 15px ${alpha(chavrutaTheme.secondary.main, 0.3)}`,
//                                     '&:hover': {
//                                         background: `linear-gradient(135deg, ${chavrutaTheme.accent.main} 0%, ${chavrutaTheme.secondary.main} 100%)`,
//                                         transform: 'translateY(-2px)',
//                                         boxShadow: `0 6px 20px ${alpha(chavrutaTheme.secondary.main, 0.4)}`,
//                                     },
//                                     transition: 'all 0.3s ease'
//                                 }}
//                             >
//                                 {t.nav.login}
//                             </Button>

//                             {/* Mobile menu */}
//                             <IconButton
//                                 size="large"
//                                 onClick={handleOpenNavMenu}
//                                 sx={{ 
//                                     display: { xs: 'flex', md: 'none' },
//                                     color: scrollPosition > 50 ? themeColors.text : 'white'
//                                 }}
//                             >
//                                 <MenuIcon />
//                             </IconButton>
//                         </Box>
//                     </Toolbar>
//                 </Container>

//                 {/* Mobile Navigation Menu */}
//                 <Menu
//                     anchorEl={anchorElNav}
//                     open={Boolean(anchorElNav)}
//                     onClose={handleCloseNavMenu}
//                     sx={{
//                         display: { xs: 'block', md: 'none' },
//                         '& .MuiPaper-root': {
//                             background: `${themeColors.paper}f0`,
//                             backdropFilter: 'blur(20px)',
//                             borderRadius: '15px',
//                             border: `1px solid ${alpha(chavrutaTheme.secondary.main, 0.2)}`,
//                             mt: 1
//                         }
//                     }}
//                 >
//                     {pages.map((page) => (
//                         <MenuItem 
//                             key={page.key} 
//                             onClick={() => scrollToSection(page.section)}
//                             sx={{
//                                 borderRadius: '10px',
//                                 mx: 1,
//                                 my: 0.5,
//                                 '&:hover': {
//                                     background: `linear-gradient(135deg, ${chavrutaTheme.secondary.main}20, ${chavrutaTheme.accent.main}20)`,
//                                 }
//                             }}
//                         >
//                             <Typography textAlign="center" fontWeight="medium">
//                                 {page.label}
//                             </Typography>
//                         </MenuItem>
//                     ))}
//                     <Divider sx={{ my: 1 }} />
//                     <MenuItem 
//                         onClick={() => {
//                             navigate('/login');
//                             handleCloseNavMenu();
//                         }}
//                         sx={{
//                             borderRadius: '10px',
//                             mx: 1,
//                             my: 0.5,
//                             background: `linear-gradient(135deg, ${chavrutaTheme.secondary.main} 0%, ${chavrutaTheme.accent.main} 100%)`,
//                             color: 'white',
//                             '&:hover': {
//                                 background: `linear-gradient(135deg, ${chavrutaTheme.accent.main} 0%, ${chavrutaTheme.secondary.main} 100%)`,
//                             }
//                         }}
//                     >
//                         <LoginIcon sx={{ mr: 1 }} />
//                         <Typography textAlign="center" fontWeight="bold">
//                             {t.nav.login}
//                         </Typography>
//                     </MenuItem>
//                 </Menu>
//             </AppBar>

//             {/* Hero Section */}
//             <Box
//                 id="hero"
//                 ref={heroRef}
//                 sx={{
//                     minHeight: '100vh',
//                     display: 'flex',
//                     alignItems: 'center',
//                     position: 'relative',
//                     background: themeColors.heroGradient,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                     backgroundAttachment: 'fixed',
//                     '&::before': {
//                         content: '""',
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: `linear-gradient(135deg, ${alpha(chavrutaTheme.primary.main, 0.8)} 0%, ${alpha(chavrutaTheme.secondary.main, 0.6)} 50%, ${alpha(chavrutaTheme.accent.main, 0.7)} 100%)`,
//                         zIndex: 1
//                     },
//                     '&::after': {
//                         content: '""',
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: 'radial-gradient(circle at 30% 70%, rgba(212, 165, 116, 0.3) 0%, transparent 50%)',
//                         zIndex: 2
//                     }
//                 }}
//             >
//                 <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 3 }}>
//                     <Grid container spacing={4} alignItems="center">
//                         <Grid item xs={12} lg={6}>
//                             <motion.div
//                                 initial={{ opacity: 0, x: -50 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 1, delay: 0.2 }}
//                             >
//                                 <Typography
//                                     variant="h1"
//                                     className="hero-title"
//                                     sx={{
//                                         fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
//                                         fontWeight: 900,
//                                         color: 'white',
//                                         mb: 3,
//                                         textShadow: '0 4px 8px rgba(0,0,0,0.3)',
//                                         lineHeight: 1.1,
//                                         background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #e9ecef 100%)',
//                                         backgroundClip: 'text',
//                                         WebkitBackgroundClip: 'text',
//                                         WebkitTextFillColor: 'transparent'
//                                     }}
//                                 >
//                                     {t.hero.title}
//                                 </Typography>
//                             </motion.div>

//                             <motion.div
//                                 initial={{ opacity: 0, x: -30 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 1, delay: 0.5 }}
//                             >
//                                 <Typography
//                                     variant="h4"
//                                     className="hero-subtitle"
//                                     sx={{
//                                         fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
//                                         fontWeight: 600,
//                                         color: 'rgba(255,255,255,0.9)',
//                                         mb: 2,
//                                         textShadow: '0 2px 4px rgba(0,0,0,0.2)'
//                                     }}
//                                 >
//                                     {t.hero.subtitle}
//                                 </Typography>
//                             </motion.div>

//                             <motion.div
//                                 initial={{ opacity: 0, x: -20 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 1, delay: 0.8 }}
//                             >
//                                 <Typography
//                                     variant="h6"
//                                     sx={{
//                                         fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
//                                         fontWeight: 400,
//                                         color: 'rgba(255,255,255,0.8)',
//                                         mb: 4,
//                                         maxWidth: '600px',
//                                         lineHeight: 1.6,
//                                         textShadow: '0 1px 2px rgba(0,0,0,0.2)'
//                                     }}
//                                 >
//                                     {t.hero.description}
//                                 </Typography>
//                             </motion.div>

//                             <motion.div
//                                 className="hero-buttons"
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 1, delay: 1.1 }}
//                             >
//                                 <Stack 
//                                     direction={{ xs: 'column', sm: 'row' }} 
//                                     spacing={2}
//                                     sx={{ mb: 4 }}
//                                 >
//                                     <Button
//                                         variant="contained"
//                                         size="large"
//                                         onClick={() => navigate('/register')}
//                                         onMouseEnter={() => setCursorVariant('hover')}
//                                         onMouseLeave={() => setCursorVariant('default')}
//                                         startIcon={<PersonAddIcon />}
//                                         sx={{
//                                             background: `linear-gradient(135deg, ${chavrutaTheme.secondary.main} 0%, ${chavrutaTheme.accent.main} 100%)`,
//                                             color: 'white',
//                                             fontWeight: 'bold',
//                                             fontSize: '1.1rem',
//                                             px: 4,
//                                             py: 1.5,
//                                             borderRadius: '50px',
//                                             boxShadow: `0 8px 25px ${alpha(chavrutaTheme.secondary.main, 0.4)}`,
//                                             '&:hover': {
//                                                 background: `linear-gradient(135deg, ${chavrutaTheme.accent.main} 0%, ${chavrutaTheme.secondary.main} 100%)`,
//                                                 transform: 'translateY(-3px)',
//                                                 boxShadow: `0 12px 35px ${alpha(chavrutaTheme.secondary.main, 0.5)}`,
//                                             },
//                                             transition: 'all 0.3s ease'
//                                         }}
//                                     >
//                                         {t.hero.cta}
//                                     </Button>

//                                     <Button
//                                         variant="outlined"
//                                         size="large"
//                                         onClick={() => scrollToSection('features')}
//                                         onMouseEnter={() => setCursorVariant('hover')}
//                                         onMouseLeave={() => setCursorVariant('default')}
//                                         startIcon={<InfoIcon />}
//                                         sx={{
//                                             color: 'white',
//                                             borderColor: 'rgba(255,255,255,0.5)',
//                                             fontWeight: 'bold',
//                                             fontSize: '1.1rem',
//                                             px: 4,
//                                             py: 1.5,
//                                             borderRadius: '50px',
//                                             backdropFilter: 'blur(10px)',
//                                             background: 'rgba(255,255,255,0.1)',
//                                             '&:hover': {
//                                                 borderColor: 'white',
//                                                 background: 'rgba(255,255,255,0.2)',
//                                                 transform: 'translateY(-3px)',
//                                                 boxShadow: '0 8px 25px rgba(255,255,255,0.2)',
//                                             },
//                                             transition: 'all 0.3s ease'
//                                         }}
//                                     >
//                                         {t.hero.learnMore}
//                                     </Button>
//                                 </Stack>
//                             </motion.div>

//                             {/* Stats */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 30 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 1, delay: 1.4 }}
//                             >
//                                 <Grid container spacing={3} sx={{ mt: 2 }}>
//                                     {[
//                                         { number: 15000, label: t.hero.stats.users, icon: <PeopleAltIcon /> },
//                                         { number: 8500, label: t.hero.stats.matches, icon: <EmojiEventsIcon /> },
//                                         { number: 1200, label: t.hero.stats.sessions, icon: <LocalLibraryIcon /> },
//                                         { number: 45, label: t.hero.stats.countries, icon: <LanguageIcon /> }
//                                     ].map((stat, index) => (
//                                         <Grid item xs={6} sm={3} key={index}>
//                                             <Box
//                                                 sx={{
//                                                     textAlign: 'center',
//                                                     p: 2,
//                                                     borderRadius: '15px',
//                                                     background: 'rgba(255,255,255,0.1)',
//                                                     backdropFilter: 'blur(10px)',
//                                                     border: '1px solid rgba(255,255,255,0.2)',
//                                                     transition: 'all 0.3s ease',
//                                                     '&:hover': {
//                                                         background: 'rgba(255,255,255,0.2)',
//                                                         transform: 'translateY(-5px)',
//                                                     }
//                                                 }}
//                                             >
//                                                 <Box sx={{ color: chavrutaTheme.secondary.main, mb: 1 }}>
//                                                     {stat.icon}
//                                                 </Box>
//                                                 <Typography
//                                                     variant="h4"
//                                                     sx={{
//                                                         fontWeight: 'bold',
//                                                         color: 'white',
//                                                         mb: 0.5
//                                                     }}
//                                                 >
//                                                     <CountUp
//                                                         end={stat.number}
//                                                         duration={2}
//                                                         separator=","
//                                                     />
//                                                     {stat.number >= 1000 ? '+' : ''}
//                                                 </Typography>
//                                                 <Typography
//                                                     variant="body2"
//                                                     sx={{
//                                                         color: 'rgba(255,255,255,0.8)',
//                                                         fontWeight: 'medium'
//                                                     }}
//                                                 >
//                                                     {stat.label}
//                                                 </Typography>
//                                             </Box>
//                                         </Grid>
//                                     ))}
//                                 </Grid>
//                             </motion.div>
//                         </Grid>

//                         <Grid item xs={12} lg={6}>
//                             <motion.div
//                                 initial={{ opacity: 0, x: 50 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 1, delay: 0.6 }}
//                             >
//                                 <Box
//                                     sx={{
//                                         position: 'relative',
//                                         display: 'flex',
//                                         justifyContent: 'center',
//                                         alignItems: 'center',
//                                         height: { xs: '300px', md: '500px' }
//                                     }}
//                                 >
//                                     {/* Floating Elements */}
//                                     <Box
//                                         sx={{
//                                             position: 'absolute',
//                                             top: '10%',
//                                             right: '10%',
//                                             animation: 'float 3s ease-in-out infinite',
//                                             '@keyframes float': {
//                                                 '0%, 100%': { transform: 'translateY(0px)' },
//                                                 '50%': { transform: 'translateY(-20px)' }
//                                             }
//                                         }}
//                                     >
//                                         <Paper
//                                             elevation={8}
//                                             sx={{
//                                                 p: 2,
//                                                 borderRadius: '15px',
//                                                 background: `linear-gradient(135deg, ${chavrutaTheme.secondary.main} 0%, ${chavrutaTheme.accent.main} 100%)`,
//                                                 color: 'white'
//                                             }}
//                                         >
//                                             <BookIcon sx={{ fontSize: 30 }} />
//                                         </Paper>
//                                     </Box>

//                                     <Box
//                                         sx={{
//                                             position: 'absolute',
//                                             bottom: '20%',
//                                             left: '15%',
//                                             animation: 'float 3s ease-in-out infinite 1s',
//                                         }}
//                                     >
//                                         <Paper
//                                             elevation={8}
//                                             sx={{
//                                                 p: 2,
//                                                 borderRadius: '15px',
//                                                 background: `linear-gradient(135deg, ${chavrutaTheme.primary.main} 0%, ${chavrutaTheme.primary.dark} 100%)`,
//                                                 color: 'white'
//                                             }}
//                                         >
//                                             <GroupsIcon sx={{ fontSize: 30 }} />
//                                         </Paper>
//                                     </Box>

//                                     <Box
//                                         sx={{
//                                             position: 'absolute',
//                                             top: '30%',
//                                             left: '5%',
//                                             animation: 'float 3s ease-in-out infinite 2s',
//                                         }}
//                                     >
//                                         <Paper
//                                             elevation={8}
//                                             sx={{
//                                                 p: 2,
//                                                 borderRadius: '15px',
//                                                 background: `linear-gradient(135deg, ${chavrutaTheme.success} 0%, #2ecc71 100%)`,
//                                                 color: 'white'
//                                             }}
//                                         >
//                                             <AccessTimeIcon sx={{ fontSize: 30 }} />
//                                         </Paper>
//                                     </Box>

//                                     {/* Central Logo */}
//                                     <ModernChavrutaLogo 
//                                         size={200} 
//                                         animated={true}
//                                         showText={false}
//                                     />
//                                 </Box>
//                             </motion.div>
//                         </Grid>
//                     </Grid>
//                 </Container>

//                 {/* Scroll Indicator */}
//                 <Box
//                     sx={{
//                         position: 'absolute',
//                         bottom: 30,
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         zIndex: 3,
//                         animation: 'bounce 2s infinite',
//                         '@keyframes bounce': {
//                             '0%, 20%, 50%, 80%, 100%': { transform: 'translateX(-50%) translateY(0)' },
//                             '40%': { transform: 'translateX(-50%) translateY(-10px)' },
//                             '60%': { transform: 'translateX(-50%) translateY(-5px)' }
//                         }
//                     }}
//                 >
//                     <IconButton
//                         onClick={() => scrollToSection('features')}
//                         sx={{
//                             color: 'white',
//                             background: 'rgba(255,255,255,0.1)',
//                             backdropFilter: 'blur(10px)',
//                             border: '1px solid rgba(255,255,255,0.2)',
//                             '&:hover': {
//                                 background: 'rgba(255,255,255,0.2)',
//                                 transform: 'scale(1.1)',
//                             },
//                             transition: 'all 0.3s ease'
//                         }}
//                     >
//                         <KeyboardArrowDownIcon />
//                     </IconButton>
//                     <Typography
//                         variant="caption"
//                         sx={{
//                             display: 'block',
//                             textAlign: 'center',
//                             color: 'rgba(255,255,255,0.8)',
//                             mt: 1,
//                             fontWeight: 'medium'
//                         }}
//                     >
//                         <MouseIcon sx={{ fontSize: 16, mr: 0.5 }} />
//                         גלול למטה
//                     </Typography>
//                 </Box>
//             </Box>

//             {/* Features Section */}
//             <Box
//                 id="features"
//                 ref={featuresRef}
//                 sx={{
//                     py: { xs: 8, md: 12 },
//                     background: `linear-gradient(180deg, ${themeColors.background} 0%, ${themeColors.cardBg} 100%)`,
//                     position: 'relative',
//                     '&::before': {
//                         content: '""',
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: 'radial-gradient(circle at 70% 30%, rgba(212, 165, 116, 0.05) 0%, transparent 50%)',
//                         pointerEvents: 'none'
//                     }
//                 }}
//             >
//                 <Container maxWidth="xl">
//                     <motion.div {...textEnterAnimation}>
//                         <Typography
//                             variant="h2"
//                             sx={{
//                                 textAlign: 'center',
//                                 fontWeight: 900,
//                                 fontSize: { xs: '2.5rem', md: '3.5rem' },
//                                 background: `linear-gradient(135deg, ${chavrutaTheme.primary.main} 0%, ${chavrutaTheme.secondary.main} 100%)`,
//                                 backgroundClip: 'text',
//                                 WebkitBackgroundClip: 'text',
//                                 WebkitTextFillColor: 'transparent',
//                                 mb: 2
//                             }}
//                         >
//                             {t.features.title}
//                         </Typography>
//                     </motion.div>

//                     <motion.div {...textEnterAnimation}>
//                         <Typography
//                             variant="h5"
//                             sx={{
//                                 textAlign: 'center',
//                                 color: themeColors.text,
//                                 opacity: 0.8,
//                                 mb: 8,
//                                 maxWidth: '600px',
//                                 mx: 'auto',
//                                 fontWeight: 'medium'
//                             }}
//                         >
//                             {t.features.subtitle}
//                         </Typography>
//                     </motion.div>

//                     <Grid container spacing={4}>
//                         {t.features.items.map((feature, index) => (
//                             <Grid item xs={12} sm={6} lg={4} key={index}>
//                                 <motion.div
//                                     className="feature-card"
//                                     {...cardHoverAnimation}
//                                     onMouseEnter={() => setCursorVariant('hover')}
//                                     onMouseLeave={() => setCursorVariant('default')}
//                                 >
//                                     <Card
//                                         elevation={0}
//                                         sx={{
//                                             height: '100%',
//                                             background: `linear-gradient(145deg, ${themeColors.paper} 0%, ${themeColors.cardBg} 100%)`,
//                                             borderRadius: '20px',
//                                             border: `1px solid ${alpha(chavrutaTheme.secondary.main, 0.1)}`,
//                                             overflow: 'hidden',
//                                             position: 'relative',
//                                             transition: 'all 0.3s ease',
//                                             '&:hover': {
//                                                 boxShadow: `0 20px 40px ${alpha(chavrutaTheme.primary.main, 0.15)}`,
//                                                 '& .feature-icon': {
//                                                     transform: 'scale(1.2) rotate(10deg)',
//                                                 },
//                                                 '& .feature-content': {
//                                                     transform: 'translateY(-5px)',
//                                                 }
//                                             },
//                                             '&::before': {
//                                                 content: '""',
//                                                 position: 'absolute',
//                                                 top: 0,
//                                                 left: 0,
//                                                 right: 0,
//                                                 height: '4px',
//                                                 background: `linear-gradient(90deg, ${chavrutaTheme.secondary.main}, ${chavrutaTheme.accent.main})`,
//                                             }
//                                         }}
//                                     >
//                                         <CardContent sx={{ p: 4, textAlign: 'center' }}>
//                                             <Box
//                                                 className="feature-icon"
//                                                 sx={{
//                                                     fontSize: '4rem',
//                                                     mb: 3,
//                                                     display: 'inline-block',
//                                                     transition: 'all 0.3s ease',
//                                                     filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
//                                                 }}
//                                             >
//                                                 {feature.icon}
//                                             </Box>

//                                             <Box className="feature-content">
//                                                 <Typography
//                                                     variant="h5"
//                                                     sx={{
//                                                         fontWeight: 'bold',
//                                                         color: themeColors.text,
//                                                         mb: 2,
//                                                         transition: 'all 0.3s ease'
//                                                     }}
//                                                 >
//                                                     {feature.title}
//                                                 </Typography>

//                                                 <Typography
//                                                     variant="body1"
//                                                     sx={{
//                                                         color: themeColors.text,
//                                                         opacity: 0.8,
//                                                         lineHeight: 1.6,
//                                                         transition: 'all 0.3s ease'
//                                                     }}
//                                                 >
//                                                     {feature.description}
//                                                 </Typography>
//                                             </Box>
//                                         </CardContent>
//                                     </Card>
//                                 </motion.div>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Container>
//             </Box>

//             {/* Testimonials Section */}
//             <Box
//                 id="testimonials"
//                 ref={testimonialRef}
//                 sx={{
//                     py: { xs: 8, md: 12 },
//                     background: `linear-gradient(135deg, ${chavrutaTheme.primary.main} 0%, ${chavrutaTheme.primary.dark} 50%, ${chavrutaTheme.accent.main} 100%)`,
//                     color: 'white',
//                     position: 'relative',
//                     overflow: 'hidden',
//                     '&::before': {
//                         content: '""',
//                         position: 'absolute',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         background: 'radial-gradient(circle at 30% 70%, rgba(212, 165, 116, 0.2) 0%, transparent 50%)',
//                         pointerEvents: 'none'
//                     }
//                 }}
//             >
//                 <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
//                     <motion.div {...textEnterAnimation}>
//                         <Typography
//                             variant="h2"
//                             sx={{
//                                 textAlign: 'center',
//                                 fontWeight: 900,
//                                 fontSize: { xs: '2.5rem', md: '3.5rem' },
//                                 mb: 2,
//                                 textShadow: '0 2px 4px rgba(0,0,0,0.3)'
//                             }}
//                         >
//                             {t.testimonials.title}
//                         </Typography>
//                     </motion.div>

//                     <motion.div {...textEnterAnimation}>
//                         <Typography
//                             variant="h5"
//                             sx={{
//                                 textAlign: 'center',
//                                 opacity: 0.9,
//                                 mb: 8,
//                                 maxWidth: '600px',
//                                 mx: 'auto',
//                                 fontWeight: 'medium'
//                             }}
//                         >
//                             {t.testimonials.subtitle}
//                         </Typography>
//                     </motion.div>

//                     <Box sx={{ position: 'relative', maxWidth: '800px', mx: 'auto' }}>
//                         <AnimatePresence mode="wait">
//                             <motion.div
//                                 key={currentTestimonialIndex}
//                                 initial={{ opacity: 0, x: 100 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 exit={{ opacity: 0, x: -100 }}
//                                 transition={{ duration: 0.5 }}
//                             >
//                                 <Card
//                                     elevation={0}
//                                     sx={{
//                                         background: 'rgba(255,255,255,0.1)',
//                                         backdropFilter: 'blur(20px)',
//                                         borderRadius: '25px',
//                                         border: '1px solid rgba(255,255,255,0.2)',
//                                         p: 4,
//                                         textAlign: 'center'
//                                     }}
//                                 >
//                                     <FormatQuoteIcon 
//                                         sx={{ 
//                                             fontSize: '3rem', 
//                                             color: chavrutaTheme.secondary.main,
//                                             mb: 3,
//                                             opacity: 0.8
//                                         }} 
//                                     />

//                                     <Typography
//                                         variant="h6"
//                                         sx={{
//                                             fontStyle: 'italic',
//                                             lineHeight: 1.8,
//                                             mb: 4,
//                                             fontSize: { xs: '1.1rem', md: '1.3rem' }
//                                         }}
//                                     >
//                                         "{t.testimonials.items[currentTestimonialIndex].content}"
//                                     </Typography>

//                                     <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
//                                         <Avatar
//                                             src={t.testimonials.items[currentTestimonialIndex].image}
//                                             sx={{
//                                                 width: 60,
//                                                 height: 60,
//                                                 border: `3px solid ${chavrutaTheme.secondary.main}`
//                                             }}
//                                         />
//                                         <Box sx={{ textAlign: isRTL ? 'right' : 'left' }}>
//                                             <Typography variant="h6" fontWeight="bold">
//                                                 {t.testimonials.items[currentTestimonialIndex].name}
//                                             </Typography>
//                                             <Typography variant="body2" sx={{ opacity: 0.8 }}>
//                                                 {t.testimonials.items[currentTestimonialIndex].role}
//                                             </Typography>
//                                             <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
//                                                 {[...Array(5)].map((_, i) => (
//                                                     <StarIcon 
//                                                         key={i}
//                                                         sx={{ 
//                                                             fontSize: '1rem',
//                                                             color: chavrutaTheme.secondary.main
//                                                         }} 
//                                                     />
//                                                 ))}
//                                             </Box>
//                                         </Box>
//                                     </Box>
//                                 </Card>
//                             </motion.div>
//                         </AnimatePresence>

//                         {/* Navigation Buttons */}
//                         <IconButton
//                             onClick={() => setCurrentTestimonialIndex(prev => 
//                                 prev === 0 ? t.testimonials.items.length - 1 : prev - 1
//                             )}
//                             sx={{
//                                 position: 'absolute',
//                                 left: { xs: -20, md: -60 },
//                                 top: '50%',
//                                 transform: 'translateY(-50%)',
//                                 background: 'rgba(255,255,255,0.1)',
//                                 backdropFilter: 'blur(10px)',
//                                 color: 'white',
//                                 border: '1px solid rgba(255,255,255,0.2)',
//                                 '&:hover': {
//                                     background: 'rgba(255,255,255,0.2)',
//                                     transform: 'translateY(-50%) scale(1.1)',
//                                 }
//                             }}
//                         >
//                             {isRTL ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//                         </IconButton>

//                         <IconButton
//                             onClick={() => setCurrentTestimonialIndex(prev => 
//                                 (prev + 1) % t.testimonials.items.length
//                             )}
//                             sx={{
//                                 position: 'absolute',
//                                 right: { xs: -20, md: -60 },
//                                 top: '50%',
//                                 transform: 'translateY(-50%)',
//                                 background: 'rgba(255,255,255,0.1)',
//                                 backdropFilter: 'blur(10px)',
//                                 color: 'white',
//                                 border: '1px solid rgba(255,255,255,0.2)',
//                                 '&:hover': {
//                                     background: 'rgba(255,255,255,0.2)',
//                                     transform: 'translateY(-50%) scale(1.1)',
//                                 }
//                             }}
//                         >
//                             {isRTL ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//                         </IconButton>

//                         {/* Dots Indicator */}
//                         <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 4 }}>
//                             {t.testimonials.items.map((_, index) => (
//                                 <Box
//                                     key={index}
//                                     onClick={() => setCurrentTestimonialIndex(index)}
//                                     sx={{
//                                         width: 12,
//                                         height: 12,
//                                         borderRadius: '50%',
//                                         background: index === currentTestimonialIndex 
//                                         ? chavrutaTheme.secondary.main
//                                         : 'rgba(255,255,255,0.3)',
//                                     cursor: 'pointer',
//                                     transition: 'all 0.3s ease',
//                                     '&:hover': {
//                                         background: index === currentTestimonialIndex 
//                                             ? chavrutaTheme.secondary.main
//                                             : 'rgba(255,255,255,0.5)',
//                                         transform: 'scale(1.2)',
//                                     }
//                                 }}
//                             />
//                         ))}
//                     </Box>
//                 </Box>
//             </Container>
//         </Box>

//         {/* FAQ Section */}
//         <Box
//             id="faq"
//             ref={faqRef}
//             sx={{
//                 py: { xs: 8, md: 12 },
//                 background: `linear-gradient(180deg, ${themeColors.background} 0%, ${themeColors.cardBg} 100%)`,
//                 position: 'relative'
//             }}
//         >
//             <Container maxWidth="lg">
//                 <motion.div {...textEnterAnimation}>
//                     <Typography
//                         variant="h2"
//                         sx={{
//                             textAlign: 'center',
//                             fontWeight: 900,
//                             fontSize: { xs: '2.5rem', md: '3.5rem' },
//                             background: `linear-gradient(135deg, ${chavrutaTheme.primary.main} 0%, ${chavrutaTheme.secondary.main} 100%)`,
//                             backgroundClip: 'text',
//                             WebkitBackgroundClip: 'text',
//                             WebkitTextFillColor: 'transparent',
//                             mb: 2
//                         }}
//                     >
//                         {t.faq.title}
//                     </Typography>
//                 </motion.div>

//                 <motion.div {...textEnterAnimation}>
//                     <Typography
//                         variant="h5"
//                         sx={{
//                             textAlign: 'center',
//                             color: themeColors.text,
//                             opacity: 0.8,
//                             mb: 8,
//                             maxWidth: '600px',
//                             mx: 'auto',
//                             fontWeight: 'medium'
//                         }}
//                     >
//                         {t.faq.subtitle}
//                     </Typography>
//                 </motion.div>

//                 <Box sx={{ maxWidth: '800px', mx: 'auto' }}>
//                     {t.faq.items.map((item, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             viewport={{ once: true }}
//                         >
//                             <Accordion
//                                 expanded={currentFaqIndex === index}
//                                 onChange={() => handleFaqToggle(index)}
//                                 sx={{
//                                     mb: 2,
//                                     borderRadius: '15px !important',
//                                     background: `linear-gradient(145deg, ${themeColors.paper} 0%, ${themeColors.cardBg} 100%)`,
//                                     border: `1px solid ${alpha(chavrutaTheme.secondary.main, 0.1)}`,
//                                     boxShadow: currentFaqIndex === index 
//                                         ? `0 8px 25px ${alpha(chavrutaTheme.primary.main, 0.15)}`
//                                         : `0 2px 8px ${alpha(chavrutaTheme.primary.main, 0.05)}`,
//                                     '&:before': { display: 'none' },
//                                     '&.Mui-expanded': {
//                                         margin: '0 0 16px 0',
//                                     },
//                                     transition: 'all 0.3s ease'
//                                 }}
//                             >
//                                 <AccordionSummary
//                                     expandIcon={
//                                         <ExpandMoreIcon 
//                                             sx={{ 
//                                                 color: chavrutaTheme.primary.main,
//                                                 transition: 'transform 0.3s ease',
//                                                 transform: currentFaqIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
//                                             }} 
//                                         />
//                                     }
//                                     sx={{
//                                         borderRadius: '15px',
//                                         '&.Mui-expanded': {
//                                             borderBottomLeftRadius: 0,
//                                             borderBottomRightRadius: 0,
//                                         },
//                                         '& .MuiAccordionSummary-content': {
//                                             margin: '16px 0',
//                                         }
//                                     }}
//                                 >
//                                     <Typography
//                                         variant="h6"
//                                         sx={{
//                                             fontWeight: 'bold',
//                                             color: themeColors.text,
//                                             display: 'flex',
//                                             alignItems: 'center',
//                                             gap: 2
//                                         }}
//                                     >
//                                         <HelpOutlineIcon 
//                                             sx={{ 
//                                                 color: chavrutaTheme.secondary.main,
//                                                 fontSize: '1.2rem'
//                                             }} 
//                                         />
//                                         {item.question}
//                                     </Typography>
//                                 </AccordionSummary>
//                                 <AccordionDetails
//                                     sx={{
//                                         borderTop: `1px solid ${alpha(chavrutaTheme.secondary.main, 0.1)}`,
//                                         pt: 3
//                                     }}
//                                 >
//                                     <Typography
//                                         variant="body1"
//                                         sx={{
//                                             color: themeColors.text,
//                                             opacity: 0.8,
//                                             lineHeight: 1.7,
//                                             fontSize: '1.1rem'
//                                         }}
//                                     >
//                                         {item.answer}
//                                     </Typography>
//                                 </AccordionDetails>
//                             </Accordion>
//                         </motion.div>
//                     ))}
//                 </Box>
//             </Container>
//         </Box>

//         {/* CTA Section */}
//         <Box
//             sx={{
//                 py: { xs: 8, md: 12 },
//                 background: `linear-gradient(135deg, ${chavrutaTheme.secondary.main} 0%, ${chavrutaTheme.accent.main} 50%, ${chavrutaTheme.primary.main} 100%)`,
//                 color: 'white',
//                 textAlign: 'center',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 '&::before': {
//                     content: '""',
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                     right: 0,
//                     bottom: 0,
//                     background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
//                     pointerEvents: 'none'
//                 }
//             }}
//         >
//             <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.8 }}
//                     viewport={{ once: true }}
//                 >
//                     <Typography
//                         variant="h2"
//                         sx={{
//                             fontWeight: 900,
//                             fontSize: { xs: '2.5rem', md: '3.5rem' },
//                             mb: 3,
//                             textShadow: '0 2px 4px rgba(0,0,0,0.3)'
//                         }}
//                     >
//                         {language === 'he' ? 'מוכן להתחיל?' : 'Ready to Start?'}
//                     </Typography>

//                     <Typography
//                         variant="h5"
//                         sx={{
//                             opacity: 0.9,
//                             mb: 6,
//                             fontWeight: 'medium',
//                             lineHeight: 1.6
//                         }}
//                     >
//                         {language === 'he' 
//                             ? 'הצטרף לאלפי לומדים ומצא את שותף הלמידה המושלם שלך עוד היום'
//                             : 'Join thousands of learners and find your perfect study partner today'
//                         }
//                     </Typography>

//                     <Stack 
//                         direction={{ xs: 'column', sm: 'row' }} 
//                         spacing={3}
//                         justifyContent="center"
//                         alignItems="center"
//                     >
//                         <Button
//                             variant="contained"
//                             size="large"
//                             onClick={() => navigate('/register')}
//                             onMouseEnter={() => setCursorVariant('hover')}
//                             onMouseLeave={() => setCursorVariant('default')}
//                             startIcon={<PersonAddIcon />}
//                             sx={{
//                                 background: 'white',
//                                 color: chavrutaTheme.primary.main,
//                                 fontWeight: 'bold',
//                                 fontSize: '1.2rem',
//                                 px: 5,
//                                 py: 2,
//                                 borderRadius: '50px',
//                                 boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
//                                 '&:hover': {
//                                     background: 'rgba(255,255,255,0.95)',
//                                     transform: 'translateY(-3px)',
//                                     boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
//                                 },
//                                 transition: 'all 0.3s ease'
//                             }}
//                         >
//                             {language === 'he' ? 'הרשמה חינם' : 'Sign Up Free'}
//                         </Button>

//                         <Button
//                             variant="outlined"
//                             size="large"
//                             onClick={() => navigate('/login')}
//                             onMouseEnter={() => setCursorVariant('hover')}
//                             onMouseLeave={() => setCursorVariant('default')}
//                             startIcon={<LoginIcon />}
//                             sx={{
//                                 color: 'white',
//                                 borderColor: 'rgba(255,255,255,0.5)',
//                                 fontWeight: 'bold',
//                                 fontSize: '1.2rem',
//                                 px: 5,
//                                 py: 2,
//                                 borderRadius: '50px',
//                                 backdropFilter: 'blur(10px)',
//                                 background: 'rgba(255,255,255,0.1)',
//                                 '&:hover': {
//                                     borderColor: 'white',
//                                     background: 'rgba(255,255,255,0.2)',
//                                     transform: 'translateY(-3px)',
//                                     boxShadow: '0 8px 25px rgba(255,255,255,0.2)',
//                                 },
//                                 transition: 'all 0.3s ease'
//                             }}
//                         >
//                             {language === 'he' ? 'התחברות' : 'Login'}
//                         </Button>
//                     </Stack>
//                 </motion.div>
//             </Container>
//         </Box>

//         {/* Footer */}
//         <Box
//             component="footer"
//             sx={{
//                 background: `linear-gradient(135deg, ${chavrutaTheme.primary.dark} 0%, ${chavrutaTheme.primary.main} 100%)`,
//                 color: 'white',
//                 py: 6
//             }}
//         >
//             <Container maxWidth="xl">
//                 <Grid container spacing={4}>
//                     <Grid item xs={12} md={4}>
//                         <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//                             <ModernChavrutaLogo size={40} animated={false} />
//                             <Typography variant="h5" fontWeight="bold" sx={{ ml: 2 }}>
//                                 {t.footer.company}
//                             </Typography>
//                         </Box>
//                         <Typography variant="body1" sx={{ opacity: 0.8, mb: 3, lineHeight: 1.6 }}>
//                             {t.footer.description}
//                         </Typography>
//                         <Box sx={{ display: 'flex', gap: 1 }}>
//                             {[
//                                 { icon: <FacebookIcon />, url: '#' },
//                                 { icon: <TwitterIcon />, url: '#' },
//                                 { icon: <InstagramIcon />, url: '#' },
//                                 { icon: <LinkedInIcon />, url: '#' }
//                             ].map((social, index) => (
//                                 <IconButton
//                                     key={index}
//                                     href={social.url}
//                                     sx={{
//                                         color: 'white',
//                                         background: 'rgba(255,255,255,0.1)',
//                                         '&:hover': {
//                                             background: chavrutaTheme.secondary.main,
//                                             transform: 'translateY(-2px)',
//                                         },
//                                         transition: 'all 0.3s ease'
//                                     }}
//                                 >
//                                     {social.icon}
//                                 </IconButton>
//                             ))}
//                         </Box>
//                     </Grid>

//                     <Grid item xs={12} md={2}>
//                         <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
//                             קישורים
//                         </Typography>
//                         <Stack spacing={1}>
//                             {Object.entries(t.footer.links).map(([key, label]) => (
//                                 <Link
//                                     key={key}
//                                     href="#"
//                                     sx={{
//                                         color: 'rgba(255,255,255,0.8)',
//                                         textDecoration: 'none',
//                                         '&:hover': {
//                                             color: chavrutaTheme.secondary.main,
//                                             textDecoration: 'underline',
//                                         },
//                                         transition: 'all 0.3s ease'
//                                     }}
//                                 >
//                                     {label}
//                                 </Link>
//                             ))}
//                         </Stack>
//                     </Grid>

//                     <Grid item xs={12} md={3}>
//                         <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
//                             {t.footer.social}
//                         </Typography>
//                         <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
//                             עקבו אחרינו ברשתות החברתיות לעדכונים ותכנים מעניינים
//                         </Typography>
//                     </Grid>

//                     <Grid item xs={12} md={3}>
//                         <Typography variant="h6" fontWeight="bold" sx={{ mb: 3 }}>
//                             {t.footer.newsletter}
//                         </Typography>
//                         <Box sx={{ display: 'flex', gap: 1 }}>
//                             <TextField
//                                                                     placeholder={t.footer.newsletterPlaceholder}
//                                                                     variant="outlined"
//                                                                     size="small"
//                                                                     sx={{
//                                                                         flexGrow: 1,
//                                                                         '& .MuiOutlinedInput-root': {
//                                                                             background: 'rgba(255,255,255,0.1)',
//                                                                             borderRadius: '25px',
//                                                                             '& fieldset': {
//                                                                                 borderColor: 'rgba(255,255,255,0.3)',
//                                                                             },
//                                                                             '&:hover fieldset': {
//                                                                                 borderColor: 'rgba(255,255,255,0.5)',
//                                                                             },
//                                                                             '&.Mui-focused fieldset': {
//                                                                                 borderColor: chavrutaTheme.secondary.main,
//                                                                             },
//                                                                         },
//                                                                         '& .MuiOutlinedInput-input': {
//                                                                             color: 'white',
//                                                                             '&::placeholder': {
//                                                                                 color: 'rgba(255,255,255,0.7)',
//                                                                                 opacity: 1,
//                                                                             },
//                                                                         },
//                                                                     }}
//                                                                 />
//                                                                 <Button
//                                                                     variant="contained"
//                                                                     sx={{
//                                                                         background: chavrutaTheme.secondary.main,
//                                                                         borderRadius: '25px',
//                                                                         px: 3,
//                                                                         '&:hover': {
//                                                                             background: chavrutaTheme.accent.main,
//                                                                         },
//                                                                     }}
//                                                                 >
//                                                                     {t.footer.subscribe}
//                                                                 </Button>
//                                                             </Box>
//                                                         </Grid>
//                                                     </Grid>
                                
//                                                     <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />
                                
//                                                     <Box sx={{ 
//                                                         display: 'flex', 
//                                                         justifyContent: 'space-between', 
//                                                         alignItems: 'center',
//                                                         flexDirection: { xs: 'column', md: 'row' },
//                                                         gap: 2
//                                                     }}>
//                                                         <Typography variant="body2" sx={{ opacity: 0.8 }}>
//                                                             {t.footer.copyright}
//                                                         </Typography>
//                                                         <Box sx={{ display: 'flex', gap: 3 }}>
//                                                             <Link
//                                                                 href="#"
//                                                                 sx={{
//                                                                     color: 'rgba(255,255,255,0.8)',
//                                                                     textDecoration: 'none',
//                                                                     fontSize: '0.875rem',
//                                                                     '&:hover': {
//                                                                         color: chavrutaTheme.secondary.main,
//                                                                         textDecoration: 'underline',
//                                                                     },
//                                                                 }}
//                                                             >
//                                                                 {t.footer.privacy}
//                                                             </Link>
//                                                             <Link
//                                                                 href="#"
//                                                                 sx={{
//                                                                     color: 'rgba(255,255,255,0.8)',
//                                                                     textDecoration: 'none',
//                                                                     fontSize: '0.875rem',
//                                                                     '&:hover': {
//                                                                         color: chavrutaTheme.secondary.main,
//                                                                         textDecoration: 'underline',
//                                                                     },
//                                                                 }}
//                                                             >
//                                                                 {t.footer.terms}
//                                                             </Link>
//                                                         </Box>
//                                                     </Box>
//                                                 </Container>
//                                             </Box>
                                
//                                             {/* Scroll to Top Button */}
//                                             <Zoom in={scrollPosition > 300}>
//                                                 <Fab
//                                                     onClick={scrollToTop}
//                                                     onMouseEnter={() => setCursorVariant('hover')}
//                                                     onMouseLeave={() => setCursorVariant('default')}
//                                                     sx={{
//                                                         position: 'fixed',
//                                                         bottom: 24,
//                                                         right: 24,
//                                                         background: `linear-gradient(135deg, ${chavrutaTheme.secondary.main} 0%, ${chavrutaTheme.accent.main} 100%)`,
//                                                         color: 'white',
//                                                         zIndex: 1000,
//                                                         boxShadow: `0 8px 25px ${alpha(chavrutaTheme.secondary.main, 0.4)}`,
//                                                         '&:hover': {
//                                                             background: `linear-gradient(135deg, ${chavrutaTheme.accent.main} 0%, ${chavrutaTheme.secondary.main} 100%)`,
//                                                             transform: 'scale(1.1)',
//                                                             boxShadow: `0 12px 35px ${alpha(chavrutaTheme.secondary.main, 0.5)}`,
//                                                         },
//                                                         transition: 'all 0.3s ease'
//                                                     }}
//                                                 >
//                                                     <KeyboardArrowUpIcon />
//                                                 </Fab>
//                                             </Zoom>
                                
//                                             {/* Enhanced Snackbar for notifications */}
//                                             <Snackbar
//                                                 open={snackbar.open}
//                                                 autoHideDuration={6000}
//                                                 onClose={() => setSnackbar({ ...snackbar, open: false })}
//                                                 anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//                                             >
//                                                 <Alert
//                                                     onClose={() => setSnackbar({ ...snackbar, open: false })}
//                                                     severity={snackbar.severity}
//                                                     variant="filled"
//                                                     sx={{
//                                                         borderRadius: '12px',
//                                                         boxShadow: `0 8px 25px ${alpha(chavrutaTheme.primary.main, 0.3)}`,
//                                                         '& .MuiAlert-icon': {
//                                                             fontSize: '1.5rem'
//                                                         }
//                                                     }}
//                                                 >
//                                                     {snackbar.message}
//                                                 </Alert>
//                                             </Snackbar>
//                                         </Box>
//                                     );
//                                 };
                                
//                                 export default Home;
                                

// ===================================================================









import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  Divider,
  Chip,
  Avatar,
  Stack,
  useTheme,
  useMediaQuery,
  alpha,
  Fade,
  Slide,
  Zoom
} from '@mui/material';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ChatIcon from '@mui/icons-material/Chat';

import { styled, keyframes } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import './home.css';

// Chavruta Color Palette
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
  }
};

// Animations
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

// Styled Components
const ModernAppBar = styled(AppBar)(({ theme }) => ({
  background: `linear-gradient(135deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.primary.dark} 50%, ${chavrutaColors.accent.main} 100%)`,
  backgroundSize: '200% 200%',
  animation: `${gradientShift} 8s ease infinite`,
  backdropFilter: 'blur(10px)',
  borderBottom: `1px solid ${alpha(chavrutaColors.secondary.main, 0.2)}`,
  boxShadow: `0 4px 20px ${alpha(chavrutaColors.primary.main, 0.3)}`,
}));

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.primary.dark} 50%, ${chavrutaColors.accent.main} 100%)`,
  backgroundSize: '400% 400%',
  animation: `${gradientShift} 15s ease infinite`,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 30% 70%, rgba(212, 165, 116, 0.3) 0%, transparent 50%)',
  }
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '20px',
  background: `linear-gradient(145deg, ${chavrutaColors.background.paper} 0%, ${chavrutaColors.background.elevated} 100%)`,
  boxShadow: `0 10px 30px ${alpha(chavrutaColors.primary.main, 0.1)}`,
  border: `1px solid ${alpha(chavrutaColors.secondary.light, 0.2)}`,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-12px)',
    boxShadow: `0 20px 50px ${alpha(chavrutaColors.primary.main, 0.2)}`,
    '& .feature-icon': {
      transform: 'scale(1.1) rotate(5deg)',
      background: `linear-gradient(135deg, ${chavrutaColors.secondary.main} 0%, ${chavrutaColors.accent.main} 100%)`,
    }
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${chavrutaColors.secondary.main}, ${chavrutaColors.accent.main})`,
  }
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${chavrutaColors.secondary.main} 0%, ${chavrutaColors.accent.main} 100%)`,
  color: chavrutaColors.secondary.contrastText,
  fontWeight: 'bold',
  fontSize: '1.1rem',
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
  }
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(145deg, ${chavrutaColors.background.paper} 0%, ${chavrutaColors.background.elevated} 100%)`,
  borderRadius: '20px',
  padding: theme.spacing(3),
  boxShadow: `0 8px 25px ${alpha(chavrutaColors.primary.main, 0.1)}`,
  border: `1px solid ${alpha(chavrutaColors.secondary.light, 0.2)}`,
  transition: 'all 0.3s ease',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 15px 35px ${alpha(chavrutaColors.primary.main, 0.15)}`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    background: `linear-gradient(45deg, ${chavrutaColors.secondary.main}, ${chavrutaColors.accent.main})`,
    borderRadius: '22px',
    zIndex: -1,
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 1,
  }
}));

// Translations
const translations = {
  he: {
    nav: {
      home: 'בית',
      features: 'תכונות',
      testimonials: 'המלצות',
      faq: 'שאלות נפוצות',
      login: 'התחברות',
      language: 'שפה'
    },
    hero: {
      title: 'חברותא',
      subtitle: 'מצא את שותף הלמידה המושלם שלך',
      description: 'פלטפורמה מתקדמת לחיבור בין לומדים, תיאום לימודים ומעקב אחר התקדמות. הצטרף לאלפי לומדים והתחל את מסע הלמידה שלך היום.',
      cta: 'הצטרף עכשיו',
      learnMore: 'למד עוד'
    },
    features: {
      title: 'למה לבחור בחברותא?',
      subtitle: 'גלה כלים מתקדמים שיעזרו לך למצוא שותפי לימוד מושלמים ולנהל את הלמידה שלך ביעילות',
      items: [
        {
          icon: <GroupsIcon />,
          title: 'התאמת שותפים חכמה',
          description: 'אלגוריתם מתקדם שמתאים לך שותפי לימוד על בסיס תחומי עניין, רמה ולוח זמנים'
        },
        {
          icon: <CalendarTodayIcon />,
          title: 'ניהול לוח זמנים',
          description: 'תיאום קל של מפגשי לימוד, תזכורות אוטומטיות ומעקב אחר התקדמות'
        },
        {
          icon: <AutoStoriesIcon />,
          title: 'ספרייה דיגיטלית',
          description: 'גישה לאלפי ספרים וחומרי לימוד, כלי שיתוף הערות וחיפוש מתקדם'
        },
        {
          icon: <ChatIcon />,
          title: 'תקשורת מובנית',
          description: 'צ\'אט משולב, שיחות וידאו ושיתוף מסמכים - הכל במקום אחד'
        },
        {
          icon: <TrendingUpIcon />,
          title: 'מעקב התקדמות',
          description: 'דוחות מפורטים על הלמידה שלך, יעדים אישיים וסטטיסטיקות מתקדמות'
        },
        {
          icon: <EmojiEventsIcon />,
          title: 'מערכת הישגים',
          description: 'אתגרים יומיים, פרסים על השלמת יעדים ולוח מובילים קהילתי'
        }
      ]
    },
    testimonials: {
      title: 'מה אומרים עלינו',
      subtitle: 'הצטרף לאלפי לומדים מרוצים שכבר מצאו את שותפי הלמידה המושלמים שלהם',
      items: [
        {
          content: 'חברותא שינתה לחלוטין את הדרך שבה אני לומד. מצאתי שותפי לימוד מעולים ואני מתקדם הרבה יותר מהר מאשר בלמידה לבד.',
          name: 'יוסף כהן',
          role: 'תלמיד ישיבה',
          rating: 5
        },
        {
          content: 'הפלטפורמה מאוד ידידותית למשתמש והאלגוריתם באמת מצא לי שותפים שמתאימים לסגנון הלמידה שלי.',
          name: 'שרה לוי',
          role: 'סטודנטית',
          rating: 5
        },
        {
          content: 'הכלים לניהול לוח הזמנים והמעקב אחר ההתקדמות עזרו לי להיות הרבה יותר מאורגן ויעיל בלמידה.',
          name: 'אברהם גולדשטיין',
          role: 'חוקר',
          rating: 5
        }
      ]
    },
    faq: {
      title: 'שאלות נפוצות',
      subtitle: 'מצא תשובות לשאלות הנפוצות ביותר על השימוש בפלטפורמה',
      items: [
        {
          question: 'איך הפלטפורמה מוצאת שותפי לימוד מתאימים?',
          answer: 'אנו משתמשים באלגוריתם מתקדם שלוקח בחשבון את תחומי העניין שלך, הרמה שלך, לוח הזמנים שלך והעדפות אישיות כדי למצוא את השותפים הכי מתאימים עבורך.'
        },
        {
            question: 'האם השירות בחינם?',
            answer: 'אנו מציעים תוכנית בסיסית חינמית הכוללת חיפוש שותפי לימוד בסיסי. לתכונות מתקדמות כמו מעקב התקדמות מפורט וכלי ניהול מתקדמים, יש תוכניות פרימיום במחירים נוחים.'
          },
          {
            question: 'איך אני יכול להתחיל?',
            answer: 'פשוט הירשם לפלטפורמה, מלא את הפרופיל שלך עם תחומי העניין והעדפות שלך, והמערכת תתחיל להציע לך שותפי לימוד מתאימים תוך דקות ספורות.'
          },
          {
            question: 'מה אם אני לא מרוצה משותף הלימוד?',
            answer: 'אתה יכול בכל עת לסיים שיתוף פעולה עם שותף לימוד ולחפש שותפים חדשים. המערכת שלנו גמישה ומתאימה את ההצעות על בסיס המשוב שלך.'
          },
          {
            question: 'האם יש תמיכה טכנית?',
            answer: 'כן! יש לנו צוות תמיכה זמין 24/6 דרך הצ\'אט באתר, אימייל או טלפון. אנו כאן כדי לעזור לך בכל שאלה או בעיה.'
          }
        ]
      },
      footer: {
        title: 'חברותא',
        description: 'הפלטפורמה המובילה לחיבור בין לומדים ושיתוף ידע',
        contact: {
          title: 'צור קשר',
          email: 'info@chavruta.co.il',
          phone: '03-1234567',
          address: 'רחוב הלמידה 123, תל אביב'
        },
        
        social: {
          title: 'עקוב אחרינו'
        },
        copyright: '© 2024 חברותא. כל הזכויות שמורות.'
      }
    },
    en: {
      nav: {
        home: 'Home',
        features: 'Features',
        testimonials: 'Testimonials',
        faq: 'FAQ',
        login: 'Login',
        language: 'Language'
      },
      hero: {
        title: 'Chavruta',
        subtitle: 'Find Your Perfect Study Partner',
        description: 'Advanced platform for connecting learners, coordinating studies and tracking progress. Join thousands of learners and start your learning journey today.',
        cta: 'Join Now',
        learnMore: 'Learn More'
      },
      features: {
        title: 'Why Choose Chavruta?',
        subtitle: 'Discover advanced tools that will help you find perfect study partners and manage your learning efficiently',
        items: [
          {
            icon: <GroupsIcon />,
            title: 'Smart Partner Matching',
            description: 'Advanced algorithm that matches you with study partners based on interests, level and schedule'
          },
          {
            icon: <CalendarTodayIcon />,
            title: 'Schedule Management',
            description: 'Easy coordination of study sessions, automatic reminders and progress tracking'
          },
          {
            icon: <AutoStoriesIcon />,
            title: 'Digital Library',
            description: 'Access to thousands of books and study materials, note sharing tools and advanced search'
          },
          {
            icon: <ChatIcon />,
            title: 'Built-in Communication',
            description: 'Integrated chat, video calls and document sharing - all in one place'
          },
          {
            icon: <TrendingUpIcon />,
            title: 'Progress Tracking',
            description: 'Detailed reports on your learning, personal goals and advanced statistics'
          },
          {
            icon: <EmojiEventsIcon />,
            title: 'Achievement System',
            description: 'Daily challenges, rewards for completing goals and community leaderboard'
          }
        ]
      },
      testimonials: {
        title: 'What People Say About Us',
        subtitle: 'Join thousands of satisfied learners who have already found their perfect study partners',
        items: [
          {
            content: 'Chavruta completely changed the way I study. I found excellent study partners and I progress much faster than studying alone.',
            name: 'Joseph Cohen',
            role: 'Yeshiva Student',
            rating: 5
          },
          {
            content: 'The platform is very user-friendly and the algorithm really found me partners that match my learning style.',
            name: 'Sarah Levy',
            role: 'Student',
            rating: 5
          },
          {
            content: 'The schedule management and progress tracking tools helped me become much more organized and efficient in learning.',
            name: 'Abraham Goldstein',
            role: 'Researcher',
            rating: 5
          }
        ]
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Find answers to the most common questions about using the platform',
        items: [
          {
            question: 'How does the platform find suitable study partners?',
            answer: 'We use an advanced algorithm that takes into account your interests, level, schedule and personal preferences to find the most suitable partners for you.'
          },
          {
            question: 'Is the service free?',
            answer: 'We offer a free basic plan that includes basic study partner search. For advanced features like detailed progress tracking and advanced management tools, there are premium plans at affordable prices.'
          },
          {
            question: 'How can I get started?',
            answer: 'Simply sign up for the platform, fill out your profile with your interests and preferences, and the system will start suggesting suitable study partners within minutes.'
          },
          {
            question: 'What if I\'m not satisfied with a study partner?',
            answer: 'You can end collaboration with a study partner at any time and search for new partners. Our system is flexible and adapts suggestions based on your feedback.'
          },
          {
            question: 'Is there technical support?',
            answer: 'Yes! We have a support team available 24/7 through website chat, email or phone. We\'re here to help with any question or issue.'
          }
        ]
      },
      footer: {
        title: 'Chavruta',
        description: 'The leading platform for connecting learners and sharing knowledge',
        contact: {
          title: 'Contact Us',
          email: 'info@chavruta.com',
          phone: '+1-234-567-8900',
          address: '123 Learning Street, New York, NY'
        },
        
        social: {
          title: 'Follow Us'
        },
        copyright: '© 2024 Chavruta. All rights reserved.'
      }
    }
  };
  
  export const Home = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    // State
    const [language, setLanguage] = useState('he');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const [showScrollTop, setShowScrollTop] = useState(false);
  
    const t = translations[language];
    const isRTL = language === 'he';
  
    useEffect(() => {
      const handleScroll = () => {
        setShowScrollTop(window.pageYOffset > 300);
      };
    
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handlers
    const handleLanguageMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleLanguageMenuClose = () => {
      setAnchorEl(null);
    };
  
    const handleLanguageChange = (lang) => {
      setLanguage(lang);
      handleLanguageMenuClose();
    };
  
    const handleFaqToggle = (index) => {
      setExpandedFaq(expandedFaq === index ? null : index);
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileMenuOpen(false);
    };
  
    return (
      <Box sx={{ direction: isRTL ? 'rtl' : 'ltr', bgcolor: chavrutaColors.background.default }}>
        {/* Navigation */}
        <ModernAppBar position="fixed" elevation={0}>
          <Toolbar>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <AutoStoriesIcon sx={{ 
                fontSize: 40, 
                mr: 2, 
                color: chavrutaColors.secondary.main,
                animation: `${float} 3s ease-in-out infinite`
              }} />
              <Typography variant="h5" component="div" sx={{ 
                fontWeight: 'bold',
                background: `linear-gradient(45deg, ${chavrutaColors.secondary.main}, ${chavrutaColors.background.paper})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                {t.hero.title}
              </Typography>
            </Box>
  
            {/* Desktop Navigation */}
            {!isMobile && (
              <Stack direction="row" spacing={3} sx={{ mr: 3 }}>
                {[
                  { key: 'home', label: t.nav.home, action: () => scrollToSection('hero') },
                  { key: 'features', label: t.nav.features, action: () => scrollToSection('features') },
                  { key: 'testimonials', label: t.nav.testimonials, action: () => scrollToSection('testimonials') },
                  { key: 'faq', label: t.nav.faq, action: () => scrollToSection('faq') }
                ].map((item) => (
                  <Button
                    key={item.key}
                    color="inherit"
                    onClick={item.action}
                    sx={{
                      fontWeight: 'medium',
                      fontSize: '1rem',
                      '&:hover': {
                        bgcolor: alpha(chavrutaColors.secondary.main, 0.1),
                        color: chavrutaColors.secondary.main
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>
            )}
  
            {/* Language Selector */}
            <IconButton
              color="inherit"
              onClick={handleLanguageMenuOpen}
              sx={{ 
                bgcolor: alpha(chavrutaColors.secondary.main, 0.1),
                '&:hover': { bgcolor: alpha(chavrutaColors.secondary.main, 0.2) }
              }}
            >
              <LanguageIcon />
            </IconButton>
  
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleLanguageMenuClose}
              PaperProps={{
                sx: {
                  borderRadius: '12px',
                  boxShadow: `0 8px 25px ${alpha(chavrutaColors.primary.main, 0.15)}`,
                }
              }}
            >
              <MenuItem onClick={() => handleLanguageChange('he')}>עברית</MenuItem>
              <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
            </Menu>
  
            {/* Login Button */}
            <GradientButton
              variant="contained"
              onClick={() => navigate('/login')}
              sx={{ ml: 2 }}
            >
              {t.nav.login}
            </GradientButton>
  
            {/* Mobile Menu */}
            {isMobile && (
              <IconButton
                color="inherit"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                sx={{ ml: 1 }}
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}
          </Toolbar>
  
          {/* Mobile Menu Dropdown */}
          {isMobile && (
            <Slide direction="down" in={mobileMenuOpen} mountOnEnter unmountOnExit>
              <Box sx={{ 
                bgcolor: alpha(chavrutaColors.primary.dark, 0.95),
                backdropFilter: 'blur(10px)',
                p: 2
              }}>
                <Stack spacing={1}>
                  {[
                    { key: 'home', label: t.nav.home, action: () => scrollToSection('hero') },
                    { key: 'features', label: t.nav.features, action: () => scrollToSection('features') },
                    { key: 'testimonials', label: t.nav.testimonials, action: () => scrollToSection('testimonials') },
                    { key: 'faq', label: t.nav.faq, action: () => scrollToSection('faq') }
                  ].map((item) => (
                    <Button
                      key={item.key}
                      color="inherit"
                      onClick={item.action}
                      fullWidth
                      sx={{ justifyContent: 'flex-start', py: 1.5 }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Stack>
              </Box>
            </Slide>
          )}
        </ModernAppBar>
  
        {/* Hero Section */}
        <HeroSection id="hero">
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Fade in={true} timeout={1000}>
                  <Box>
                    <Typography
                      variant="h2"
                      component="h1"
                      sx={{
                        fontWeight: 'bold',
                        color: 'white',
                        mb: 2,
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        fontSize: { xs: '2.5rem', md: '3.5rem' }
                      }}
                    >
                      {t.hero.subtitle}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: alpha('#fff', 0.9),
                        mb: 4,
                        lineHeight: 1.6,
                        fontSize: { xs: '1.2rem', md: '1.5rem' }
                      }}
                    >
                      {t.hero.description}
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                      <GradientButton
                        size="large"
                        onClick={() => navigate('/login')}
                        sx={{ 
                          px: 4,
                          py: 2,
                        fontSize: '1.2rem'
                      }}
                    >
                      {t.hero.cta}
                    </GradientButton>
                    <Button
                      variant="outlined"
                      size="large"
                      startIcon={<PlayArrowIcon />}
                      onClick={() => scrollToSection('features')}
                      sx={{
                        borderColor: 'white',
                        color: 'white',
                        px: 4,
                        py: 2,
                        fontSize: '1.1rem',
                        borderRadius: '50px',
                        '&:hover': {
                          borderColor: chavrutaColors.secondary.main,
                          bgcolor: alpha(chavrutaColors.secondary.main, 0.1)
                        }
                      }}
                    >
                      {t.hero.learnMore}
                    </Button>
                  </Stack>
                </Box>
              </Fade>
            </Grid>
            <Grid item xs={12} md={6}>
              <Zoom in={true} timeout={1500}>
                <Box
                  sx={{
                    textAlign: 'center',
                    animation: `${float} 6s ease-in-out infinite`,
                  }}
                >
                  <AutoStoriesIcon
                    sx={{
                      fontSize: { xs: 200, md: 300 },
                      color: alpha(chavrutaColors.secondary.main, 0.8),
                      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
                    }}
                  />
                </Box>
              </Zoom>
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* Features Section */}
      <Box id="features" sx={{ py: 10, bgcolor: chavrutaColors.background.default }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 'bold',
                color: chavrutaColors.text.primary,
                mb: 2
              }}
            >
              {t.features.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: chavrutaColors.text.secondary,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              {t.features.subtitle}
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {t.features.items.map((feature, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Zoom in={true} timeout={500 + (index * 200)}>
                  <FeatureCard>
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box
                        className="feature-icon"
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          background: `linear-gradient(135deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.primary.dark} 100%)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mx: 'auto',
                          mb: 3,
                          color: 'white',
                          fontSize: 40,
                          transition: 'all 0.3s ease',
                          boxShadow: `0 8px 20px ${alpha(chavrutaColors.primary.main, 0.3)}`
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          fontWeight: 'bold',
                          color: chavrutaColors.text.primary,
                          mb: 2
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: chavrutaColors.text.secondary,
                          lineHeight: 1.6
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </FeatureCard>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box 
        id="testimonials" 
        sx={{ 
          py: 10, 
          background: `linear-gradient(135deg, ${alpha(chavrutaColors.primary.main, 0.05)} 0%, ${alpha(chavrutaColors.secondary.main, 0.05)} 100%)`
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 'bold',
                color: chavrutaColors.text.primary,
                mb: 2
              }}
            >
              {t.testimonials.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: chavrutaColors.text.secondary,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              {t.testimonials.subtitle}
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {t.testimonials.items.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Fade in={true} timeout={1000 + (index * 300)}>
                  <TestimonialCard>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon
                          key={i}
                          sx={{ color: chavrutaColors.secondary.main, fontSize: 24 }}
                        />
                      ))}
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: chavrutaColors.text.primary,
                        mb: 3,
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                        position: 'relative',
                        '&::before': {
                          content: '"',
                          fontSize: '3rem',
                          color: chavrutaColors.secondary.main,
                          position: 'absolute',
                          top: -10,
                          right: isRTL ? 'auto' : -10,
                          left: isRTL ? -10 : 'auto',
                          opacity: 0.3
                        }
                      }}
                    >
                      {testimonial.content}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: chavrutaColors.secondary.main,
                          color: chavrutaColors.secondary.contrastText,
                          fontWeight: 'bold'
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 'bold',
                            color: chavrutaColors.text.primary
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: chavrutaColors.text.secondary }}
                        >
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </TestimonialCard>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box id="faq" sx={{ py: 10, bgcolor: chavrutaColors.background.default }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 'bold',
                color: chavrutaColors.text.primary,
                mb: 2
              }}
            >
              {t.faq.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: chavrutaColors.text.secondary,
                lineHeight: 1.6
              }}
            >
              {t.faq.subtitle}
            </Typography>
          </Box>

          <Stack spacing={2}>
            {t.faq.items.map((faq, index) => (
              <Fade in={true} timeout={500 + (index * 200)} key={index}>
                <Accordion
                  expanded={expandedFaq === index}
                  onChange={() => handleFaqToggle(index)}
                  sx={{
                    borderRadius: '16px !important',
                    boxShadow: `0 4px 15px ${alpha(chavrutaColors.primary.main, 0.08)}`,
                    border: `1px solid ${alpha(chavrutaColors.secondary.main, 0.1)}`,
                    '&:before': { display: 'none' },
                    mb: 2
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon 
                        sx={{ 
                          color: chavrutaColors.secondary.main,
                          fontSize: 28
                        }} 
                      />
                    }
                    sx={{
                      bgcolor: expandedFaq === index 
                        ? alpha(chavrutaColors.secondary.main, 0.05)
                        : 'transparent',
                      borderRadius: '16px',
                      '&:hover': {
                        bgcolor: alpha(chavrutaColors.secondary.main, 0.05)
                      }
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: chavrutaColors.text.primary
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: chavrutaColors.text.secondary,
                        lineHeight: 1.6
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Fade>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          background: `linear-gradient(135deg, ${chavrutaColors.primary.main} 0%, ${chavrutaColors.primary.dark} 100%)`,
          color: 'white',
          py: 6
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Company Info */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <AutoStoriesIcon sx={{ fontSize: 40, mr: 2, color: chavrutaColors.secondary.main }} />
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                  {t.footer.title}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 3, opacity: 0.9, lineHeight: 1.6 }}>
                {t.footer.description}
              </Typography>
              <Stack direction="row" spacing={2}>
                {[
                  { icon: <FacebookIcon />, href: '#' },
                  { icon: <TwitterIcon />, href: '#' },
                  { icon: <LinkedInIcon />, href: '#' },
                  { icon: <InstagramIcon />, href: '#' }
                ].map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.href}
                    sx={{
                      color: 'white',
                      bgcolor: alpha('#fff', 0.1),
                      '&:hover': {
                        bgcolor: chavrutaColors.secondary.main,
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Grid>

            {/* Contact Info */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                {t.footer.contact.title}
              </Typography>
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <EmailIcon sx={{ color: chavrutaColors.secondary.main }} />
                  <Typography variant="body1">{t.footer.contact.email}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ color: chavrutaColors.secondary.main }}>📞</Box>
                  <Typography variant="body1">{t.footer.contact.phone}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ color: chavrutaColors.secondary.main }}>📍</Box>
                  <Typography variant="body1">{t.footer.contact.address}</Typography>
                </Box>
              </Stack>
            </Grid>

            
        </Grid>

        <Divider sx={{ my: 4, bgcolor: alpha('#fff', 0.2) }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            {t.footer.copyright}
          </Typography>
        </Box>
      </Container>
    </Box>
    <Zoom in={showScrollTop}>
        <Box
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${chavrutaColors.secondary.main} 0%, ${chavrutaColors.accent.main} 100%)`,
            color: chavrutaColors.secondary.contrastText,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: `0 8px 25px ${alpha(chavrutaColors.secondary.main, 0.4)}`,
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1000,
            '&:hover': {
              transform: 'translateY(-4px) scale(1.1)',
              boxShadow: `0 12px 35px ${alpha(chavrutaColors.secondary.main, 0.6)}`,
            }
          }}
        >
          <Box
            sx={{
              transform: 'rotate(-90deg)',
              fontSize: 24,
              fontWeight: 'bold'
            }}
          >
            ➤
          </Box>
        </Box>
      </Zoom>
  </Box>
);
};

// export default Home;


