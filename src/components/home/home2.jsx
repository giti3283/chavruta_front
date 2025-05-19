import { Link, useNavigate } from "react-router-dom";
import './home.css';
import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { GetPersonThunk } from "../../redux/Person/getPersonThunk";
import { motion, AnimatePresence } from "framer-motion";
import { alpha, createTheme, ThemeProvider } from '@mui/material/styles';
import Lottie from 'react-lottie';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// ===================================================================
import CountUp from 'react-countup';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CookieIcon from '@mui/icons-material/Cookie';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// ===================================================================

// Material UI imports
import {
    AppBar, Box, Toolbar, IconButton, Typography, Menu, Container,
    Avatar, Button, Tooltip, MenuItem, Drawer, List, ListItem,
    ListItemIcon, ListItemText, Divider, Fade, Paper, Card, CardContent,
    CardMedia, Grid, Zoom, useMediaQuery, useTheme, Fab, Slide,
    FormControlLabel, Switch, Backdrop, CircularProgress, Rating,
    Chip, Tabs, Tab, Badge, Skeleton, Snackbar, Alert, Stack,
    Collapse
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
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MouseIcon from '@mui/icons-material/Mouse';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

// Custom components
import ChavrutaLogo from "../logo/logo";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

    // Refs for sections
    const heroRef = useRef(null);
    const featuresRef = useRef(null);
    const testimonialRef = useRef(null);
    const statsRef = useRef(null);
    const ctaRef = useRef(null);
    const faqRef = useRef(null);
    const mainRef = useRef(null);

    // State
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [language, setLanguage] = useState('he'); // 'he' for Hebrew, 'en' for English
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showScrollFab, setShowScrollFab] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [activeSection, setActiveSection] = useState('hero');
    const [scrollTrigger, setScrollTrigger] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [currentFaqIndex, setCurrentFaqIndex] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorVariant, setCursorVariant] = useState("default");

    // Theme colors based on mode
    const themeColors = {
        primary: darkMode ? '#6366f1' : '#3f51b5',
        secondary: darkMode ? '#8b5cf6' : '#2196f3',
        accent: darkMode ? '#ec4899' : '#00bcd4',
        background: darkMode ? '#0f172a' : '#ffffff',
        paper: darkMode ? '#1e293b' : '#f9f9f9',
        cardBg: darkMode ? '#1e293b' : '#ffffff',
        text: darkMode ? '#e2e8f0' : '#333333',
        footerBg: darkMode ? '#0f172a' : '#1a237e',
        heroGradient: darkMode ?
            'linear-gradient(135deg, rgba(99, 102, 241, 0.9) 0%, rgba(139, 92, 246, 0.9) 50%, rgba(236, 72, 153, 0.8) 100%), url(https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)' :
            'linear-gradient(135deg, rgba(63, 81, 181, 0.9) 0%, rgba(33, 150, 243, 0.9) 50%, rgba(0, 188, 212, 0.8) 100%), url(https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80)'
    };
    
    // Translations with expanded content
    const translations = {
        en: {
            login: "Login",
            register: "Register",
            home: "Home",
            features: "Features",
            testimonials: "Testimonials",
            stats: "Stats",
            faq: "FAQ",
            contact: "Contact",
            profile: "Profile",
            dashboard: "Dashboard",
            logout: "Logout",
            heroTitle: "Find Your Perfect Study Partner",
            heroSubtitle: "Connect with like-minded learners for meaningful study sessions and elevate your learning experience",
            heroDescription: "ChavrutaMatch uses advanced AI to pair you with the ideal study partner based on your learning style, goals, and schedule. Start your journey to more effective and enjoyable learning today.",
            getStarted: "Get Started",
            learnMore: "Learn More",
            featuresTitle: "Why Choose ChavrutaMatch?",
            featuresSub: "Discover the tools that make your learning journey exceptional",
            feature1Title: "AI-Powered Matching",
            feature1Desc: "Our intelligent algorithm finds the perfect study partner based on your learning style, schedule, and interests, ensuring meaningful and productive sessions.",
            feature2Title: "Flexible Scheduling",
            feature2Desc: "Easily manage your availability and coordinate study sessions that work for both partners with our intuitive calendar system.",
            feature3Title: "Progress Tracking",
            feature3Desc: "Monitor your learning journey and celebrate achievements with your study partner through detailed analytics and milestone tracking.",
            feature4Title: "Secure Communication",
            feature4Desc: "Connect with your study partner through our secure messaging platform designed specifically for educational discussions.",
            testimonialTitle: "What Our Users Say",
            testimonialSub: "Real stories from our community of learners",
            testimonial1: "ChavrutaMatch helped me find the perfect study partner. We've been learning together for 6 months now and my understanding of complex topics has improved dramatically!",
            testimonial2: "The scheduling feature is amazing. It made coordinating study sessions so much easier, and the reminder system ensures we never miss a session.",
            testimonial3: "I've improved my understanding of complex topics thanks to my Chavruta partner. The matching algorithm really found someone who complements my learning style.",
            statsTitle: "ChavrutaMatch by the Numbers",
            statsSub: "Join our growing community of learners",
            stat1: "Active Users",
            stat2: "Study Hours",
            stat3: "Matches Made",
            stat4: "Success Rate",
            faqTitle: "Frequently Asked Questions",
            faqSub: "Everything you need to know about ChavrutaMatch",
            faq1Q: "How does the matching algorithm work?",
            faq1A: "Our AI-powered algorithm considers your learning style, subject interests, proficiency level, availability, and personal goals to find the most compatible study partner for you. The more you use the platform, the better our matches become.",
            faq2Q: "Is ChavrutaMatch free to use?",
            faq2A: "We offer a free basic plan that includes essential features. For advanced matching, unlimited scheduling, and premium resources, we offer affordable subscription plans.",
            faq3Q: "Can I change my study partner?",
            faq3A: "Absolutely! If you feel your current match isn't working out, you can request a new partner at any time. We want to ensure your learning experience is as effective as possible.",
            faq4Q: "What subjects are supported?",
            faq4A: "ChavrutaMatch supports a wide range of subjects from religious studies to academic disciplines. If you don't see your subject listed, you can request it to be added.",
            ctaTitle: "Ready to Find Your Study Partner?",
            ctaDescription: "Join thousands of learners who have transformed their educational journey with ChavrutaMatch. Your perfect study partner is just a click away.",
            ctaButton: "Join Now",
            footerRights: "All Rights Reserved",
            footerTagline: "Connect. Learn. Grow. Together."
        },
        he: {
            login: "התחברות",
            register: "הרשמה",
            home: "דף הבית",
            features: "תכונות",
            testimonials: "המלצות",
            stats: "נתונים",
            faq: "שאלות נפוצות",
            // contact: "צור קשר",
            profile: "פרופיל",
            dashboard: "לוח בקרה",
            logout: "התנתק",
            heroTitle: "מצא את החברותא המושלמת",
            heroSubtitle: "התחבר עם לומדים בעלי תחומי עניין משותפים לשיעורים משמעותיים והעלה את חווית הלמידה שלך",
            heroDescription: "חברותא מאטצ' משתמש בבינה מלאכותית מתקדמת כדי להתאים לך את השותף האידיאלי ללימוד בהתבסס על סגנון הלמידה, המטרות והלוח זמנים שלך. התחל את המסע שלך ללמידה יעילה ומהנה יותר היום.",
            getStarted: "התחל עכשיו",
            learnMore: "למידע נוסף",
            featuresTitle: "למה לבחור בחברותא מאטצ'?",
            featuresSub: "גלה את הכלים שהופכים את מסע הלמידה שלך ליוצא דופן",
            feature1Title: "התאמה מבוססת בינה מלאכותית",
            feature1Desc: "האלגוריתם החכם שלנו מוצא את החברותא המושלמת בהתבסס על סגנון הלמידה, לוח הזמנים והתחומים שמעניינים אותך, ומבטיח שיעורים משמעותיים ופרודוקטיביים.",
            feature2Title: "לוח זמנים גמיש",
            feature2Desc: "נהל בקלות את הזמינות שלך ותאם שיעורים שמתאימים לשני השותפים באמצעות מערכת היומן האינטואיטיבית שלנו.",
            feature3Title: "מעקב התקדמות",
            feature3Desc: "עקוב אחר מסע הלמידה שלך וחגוג הישגים עם החברותא שלך באמצעות ניתוחים מפורטים ומעקב אחר אבני דרך.",
            feature4Title: "תקשורת מאובטחת",
            feature4Desc: "התחבר עם החברותא שלך דרך פלטפורמת ההודעות המאובטחת שלנו שתוכננה במיוחד לדיונים חינוכיים.",
            testimonialTitle: "מה אומרים המשתמשים שלנו",
            testimonialSub: "סיפורים אמיתיים מקהילת הלומדים שלנו",
            testimonial1: "חברותא מאטצ' עזר לי למצוא את החברותא המושלמת. אנחנו לומדים יחד כבר 6 חודשים וההבנה שלי בנושאים מורכבים השתפרה באופן דרמטי!",
            testimonial2: "תכונת התזמון היא מדהימה. היא הקלה מאוד על תיאום שיעורים, ומערכת התזכורות מבטיחה שלעולם לא נפספס שיעור.",
            testimonial3: "שיפרתי את ההבנה שלי בנושאים מורכבים הודות לשותף החברותא שלי. האלגוריתם התאמה באמת מצא מישהו שמשלים את סגנון הלמידה שלי.",
            statsTitle: "חברותא מאטצ' במספרים",
            statsSub: "הצטרף לקהילה הגדלה שלנו של לומדים",
            stat1: "משתמשים פעילים",
            stat2: "שעות לימוד",
            stat3: "התאמות שנעשו",
            stat4: "אחוז הצלחה",
            faqTitle: "שאלות נפוצות",
            faqSub: "כל מה שצריך לדעת על חברותא מאטצ'",
            faq1Q: "איך עובד אלגוריתם ההתאמה?",
            faq1A: "האלגוריתם שלנו המבוסס על בינה מלאכותית מתחשב בסגנון הלמידה שלך, תחומי העניין, רמת המיומנות, זמינות ומטרות אישיות כדי למצוא את שותף הלימוד המתאים ביותר עבורך. ככל שתשתמש יותר בפלטפורמה, כך ההתאמות שלנו ישתפרו.",
            faq2Q: "האם חברותא מאטצ' חינמי לשימוש?",
            faq2A: "אנו מציעים תוכנית בסיסית חינמית הכוללת תכונות חיוניות. עבור התאמה מתקדמת, תזמון בלתי מוגבל ומשאבים פרימיום, אנו מציעים תוכניות מנוי במחירים סבירים.",
            faq3Q: "האם אני יכול להחליף את שותף הלימוד שלי?",
            faq3A: "בהחלט! אם אתה מרגיש שההתאמה הנוכחית שלך אינה עובדת, תוכל לבקש שותף חדש בכל עת. אנו רוצים להבטיח שחווית הלמידה שלך תהיה יעילה ככל האפשר.",
            faq4Q: "אילו נושאים נתמכים?",
            faq4A: "חברותא מאטצ' תומך במגוון רחב של נושאים מלימודי קודש ועד תחומים אקדמיים. אם אינך רואה את הנושא שלך ברשימה, תוכל לבקש להוסיף אותו.",
            ctaTitle: "מוכן למצוא את החברותא שלך?",
            ctaDescription: "הצטרף לאלפי לומדים ששינו את מסע הלמידה שלהם עם חברותא מאטצ'. שותף הלימוד המושלם שלך נמצא במרחק לחיצה.",
            ctaButton: "הצטרף עכשיו",
            footerRights: "כל הזכויות שמורות",
            footerTagline: "מתחברים. לומדים. צומחים. יחד."
        }
    };

    const t = translations[language];
    const textDirection = language === 'he' ? 'rtl' : 'ltr';

    // Enhanced navigation items with refs
    const pages = [
        { name: t.home, path: '/', ref: heroRef },
        { name: t.features, path: '/features', ref: featuresRef },
        { name: t.testimonials, path: '/testimonials', ref: testimonialRef },
        { name: t.stats, path: '/stats', ref: statsRef },
        { name: t.faq, path: '/faq', ref: faqRef },
        // { name: t.contact, path: '/contact', ref: null }
    ];

    const settings = [
        { name: t.profile, path: '/profile' },
        { name: t.dashboard, path: '/dashboard' },
        { name: t.logout, path: '/logout' }
    ];

    // Enhanced features data with colors and animations
    const features = [
        {
            icon: <LocalLibraryIcon sx={{ fontSize: 60 }} />,
            title: t.feature1Title,
            description: t.feature1Desc,
            color: '#6366f1',
            animation: 'brain-pulse.json'
        },
        {
            icon: <AccessTimeIcon sx={{ fontSize: 60 }} />,
            title: t.feature2Title,
            description: t.feature2Desc,
            color: '#8b5cf6',
            animation: 'calendar-sync.json'
        },
        {
            icon: <EmojiEventsIcon sx={{ fontSize: 60 }} />,
            title: t.feature3Title,
            description: t.feature3Desc,
            color: '#ec4899',
            animation: 'progress-chart.json'
        },
        {
            icon: <SecurityIcon sx={{ fontSize: 60 }} />,
            title: t.feature4Title,
            description: t.feature4Desc,
            color: '#10b981',
            animation: 'secure-chat.json'
        }
    ];

    // Enhanced testimonials data
    const testimonials = [
        {
            text: t.testimonial1,
            author: "דוד כהן",
            role: "סטודנט לרפואה",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            rating: 5,
            subject: "גמרא",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
        },
        {
            text: t.testimonial2,
            author: "שרה לוי",
            role: "מורה",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            rating: 4.5,
            subject: "תנ״ך",
            background: "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)"
        },
        {
            text: t.testimonial3,
            author: "משה גולדברג",
            role: "עורך דין",
            avatar: "https://randomuser.me/api/portraits/men/67.jpg",
            rating: 5,
            subject: "הלכה",
            background: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)"
        }
    ];

    // Stats data
    const stats = [
        { value: "10,000+", label: t.stat1, icon: <PeopleAltIcon />, color: "#6366f1" },
        { value: "250,000+", label: t.stat2, icon: <AccessTimeIcon />, color: "#8b5cf6" },
        { value: "15,000+", label: t.stat3, icon: <GroupsIcon />, color: "#ec4899" },
        { value: "98%", label: t.stat4, icon: <CheckCircleIcon />, color: "#10b981" }
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

    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // const scrollToSection = (ref) => {
    //     if (ref && ref.current) {
    //         gsap.to(window, {
    //             duration: 1,
    //             scrollTo: { y: ref.current, offsetY: 80, autoKill: true },
    //             ease: "power3.inOut"
    //         });
    //     }
    // };

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            // גלילה פשוטה באמצעות scrollIntoView
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleNextTestimonial = () => {
        setCurrentTestimonialIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1
        );
    };

    const handlePrevTestimonial = () => {
        setCurrentTestimonialIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const handleFaqClick = (index) => {
        setCurrentFaqIndex(currentFaqIndex === index ? null : index);
    };

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleCursorHover = () => {
        setCursorVariant("hover");
    };

    const handleCursorDefault = () => {
        setCursorVariant("default");
    };


    // ==============================================================
    // Refs

    const [showCookieConsent, setShowCookieConsent] = useState(true);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // FAQ data
    const faqs = [
        {
            question: t.faq1Question || "איך אני מוצא חברותא מתאימה?",
            answer: t.faq1Answer || "המערכת שלנו משתמשת באלגוריתם חכם שמתאים בין לומדים על בסיס תחומי עניין, רמת לימוד, זמינות ומיקום. פשוט מלא את הפרופיל שלך בצורה מלאה והמערכת תציע לך התאמות מתאימות."
        },
        {
            question: t.faq2Question || "האם השירות בתשלום?",
            answer: t.faq2Answer || "אנו מציעים תוכנית בסיסית חינמית שמאפשרת לך למצוא חברותא. קיימות גם תוכניות פרימיום עם תכונות נוספות כמו הודעות מתקדמות, חיפוש מורחב ואפשרויות תיאום מתקדמות."
        },
        {
            question: t.faq3Question || "איך אני מתאם מפגש עם חברותא?",
            answer: t.faq3Answer || "לאחר שמצאת התאמה, תוכל לשלוח הזמנה ללימוד. כאשר ההזמנה מתקבלת, תוכלו להשתמש במערכת התיאום שלנו כדי למצוא זמן שמתאים לשניכם, או לתקשר ישירות דרך הפלטפורמה."
        },
        {
            question: t.faq4Question || "האם אפשר ללמוד מרחוק?",
            answer: t.faq4Answer || "בהחלט! הפלטפורמה שלנו תומכת גם בלימוד מרחוק. תוכל לציין בהעדפות שלך אם אתה מעוניין בלימוד פנים אל פנים, מרחוק, או שניהם, והמערכת תתאים לך חברותות בהתאם."
        }
    ];

    // Social links
    const socialLinks = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>,
            color: '#3b5998'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
            </svg>,
            color: '#1da1f2'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>,
            color: '#e1306c'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>,
            color: '#ff0000'
        }
    ];


    const footerLinks = [
        { name: t.home, action: scrollToTop },
        { name: t.features || "Features", action: () => featuresRef.current.scrollIntoView({ behavior: 'smooth' }) },
        { name: t.testimonials || "Testimonials", action: () => testimonialRef.current.scrollIntoView({ behavior: 'smooth' }) },
        { name: t.stats || "Stats", action: () => statsRef.current.scrollIntoView({ behavior: 'smooth' }) },
        { name: t.faq || "FAQ", action: () => faqRef.current.scrollIntoView({ behavior: 'smooth' }) },
        // { name: t.contact || "Contact", action: () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }) }
    ];



    // Legal links
    const legalLinks = [
        { name: t.privacy || "Privacy Policy", path: '/privacy' },
        { name: t.terms || "Terms of Service", path: '/terms' },
        { name: t.cookies || "Cookie Policy", path: '/cookies' }
    ];

    // Contact info
    const contactInfo = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>,
            label: t.email || "Email",
            value: "info@chavrutamatch.com"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>,
            label: t.phone || "Phone",
            value: "+972 123 456 789"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>,
            label: t.address || "Address",
            value: "Jerusalem, Israel"
        }
    ];


    const handleFaqToggle = (index) => {
        setCurrentFaqIndex(currentFaqIndex === index ? null : index);
    };

    const handleCookieAccept = () => {
        setShowCookieConsent(false);
        localStorage.setItem('cookieConsent', 'true');
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
        window.addEventListener('mousemove', handleMouseMove);

        // Check for cookie consent
        const hasConsent = localStorage.getItem('cookieConsent');
        if (hasConsent === 'true') {
            setShowCookieConsent(false);
        }

        // Testimonial rotation interval
        const testimonialInterval = setInterval(() => {
            setCurrentTestimonialIndex((prev) =>
                prev === testimonials.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(testimonialInterval);
        };
    }, [dispatch, testimonials.length]);

    // Cursor variants for framer-motion
    const cursorVariants = {
        default: {
            x: cursorPosition.x - 16,
            y: cursorPosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: alpha(themeColors.primary, 0.2),
            border: `2px solid ${themeColors.primary}`,
            transition: {
                type: "spring",
                mass: 0.5
            }
        },
        hover: {
            x: cursorPosition.x - 24,
            y: cursorPosition.y - 24,
            height: 48,
            width: 48,
            backgroundColor: alpha(themeColors.secondary, 0.2),
            border: `2px solid ${themeColors.secondary}`,
            transition: {
                type: "spring",
                mass: 0.5
            }
        }
    };
    // ==============================================================
    // Effects
    useEffect(() => {
        dispatch(GetPersonThunk());

        // Simulate loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        // Handle scroll events
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
            setShowScrollFab(position > 400);

            // Set scroll trigger for animations
            if (position > 200) {
                setScrollTrigger(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        // GSAP animations for sections
        gsap.from(heroRef.current, {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out",
            delay: 1.5
        });

        // Set up ScrollTrigger animations
        if (featuresRef.current) {
            ScrollTrigger.create({
                trigger: featuresRef.current,
                start: "top 80%",
                onEnter: () => {
                    gsap.to(featuresRef.current, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power3.out"
                    });
                },
                once: true
            });
        }

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [dispatch]);

    // Effect for section detection
    useEffect(() => {
        const handleScrollForSections = () => {
            const scrollPosition = window.scrollY + 100;

            // Check which section is in view
            const sections = [
                { id: 'hero', ref: heroRef },
                { id: 'features', ref: featuresRef },
                { id: 'testimonials', ref: testimonialRef },
                { id: 'stats', ref: statsRef },
                { id: 'cta', ref: ctaRef },
                { id: 'faq', ref: faqRef }
            ];

            for (const section of sections) {
                if (section.ref.current) {
                    const offsetTop = section.ref.current.offsetTop;
                    const height = section.ref.current.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScrollForSections);
        return () => window.removeEventListener('scroll', handleScrollForSections);
    }, []);

    // Testimonial auto-rotation
    useEffect(() => {
        const interval = setInterval(() => {
            handleNextTestimonial();
        }, 8000);

        return () => clearInterval(interval);
    }, [currentTestimonialIndex]);

    // Loading screen
    if (isLoading) {
        return (
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    background: themeColors.heroGradient,
                    flexDirection: 'column'
                }}
                open={isLoading}
            >
                <Box sx={{ position: 'relative', mb: 4 }}>
                    <ChavrutaLogo size={80} animated />
                </Box>
                <CircularProgress color="inherit" />
                <Typography
                    variant="h6"
                    sx={{
                        mt: 2,
                        fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                        letterSpacing: 2
                    }}
                >
                    CHAVRUTA MATCH
                </Typography>
            </Backdrop>
        );
    }

    return (
        <Box
            ref={mainRef}
            sx={{
                minHeight: '100vh',
                direction: textDirection,
                backgroundColor: themeColors.background,
                color: themeColors.text,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflowX: 'hidden'
            }}
        >
            {/* Custom cursor (visible only on desktop) */}
            {!isMobile && (
                <motion.div
                    className="cursor"
                    variants={cursorVariants}
                    animate={cursorVariant}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                    style={{
                        position: 'fixed',
                        zIndex: 9999,
                        pointerEvents: 'none',
                        mixBlendMode: 'difference',
                        height: 32,
                        width: 32,
                        borderRadius: '50%'
                    }}
                />
            )}

            {/* Header */}
            <AppBar
                position="fixed"
                sx={{
                    background: scrollPosition > 100 ?
                        (darkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)') :
                        'transparent',
                    boxShadow: scrollPosition > 100 ?
                        '0 4px 20px rgba(0, 0, 0, 0.1)' :
                        'none',
                    color: scrollPosition > 100 ?
                        themeColors.text :
                        'white',
                    transition: 'all 0.3s ease',
                    backdropFilter: scrollPosition > 100 ? 'blur(10px)' : 'none',
                    borderBottom: scrollPosition > 100 ?
                        (darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)') :
                        'none'
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* Logo for larger screens */}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                mr: 2,
                                cursor: 'pointer'
                            }}
                            onClick={scrollToTop}
                            onMouseEnter={handleCursorHover}
                            onMouseLeave={handleCursorDefault}
                        >
                            <ChavrutaLogo
                                color={scrollPosition > 100 ? themeColors.primary : 'white'}
                                size={isMobile ? 40 : 50}
                                animated
                            />
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
                                onMouseEnter={handleCursorHover}
                                onMouseLeave={handleCursorDefault}
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
                                    '& .MuiPaper-root': {
                                        backgroundColor: darkMode ? themeColors.paper : 'white',
                                        borderRadius: 2,
                                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
                                        border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                                    }
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem
                                        key={page.name}
                                        onClick={() => {
                                            handleCloseNavMenu();
                                            scrollToSection(page.ref);
                                        }}
                                        sx={{
                                            color: themeColors.text,
                                            '&:hover': {
                                                backgroundColor: alpha(themeColors.primary, 0.1)
                                            }
                                        }}
                                    >
                                        <Typography textAlign="center" fontFamily="'Heebo', 'Rubik', Arial, sans-serif">
                                            {page.name}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        {/* Logo for mobile */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                                justifyContent: 'center',
                                cursor: 'pointer'
                            }}
                            onClick={scrollToTop}
                        >
                            <ChavrutaLogo
                                color={scrollPosition > 100 ? themeColors.primary : 'white'}
                                size={40}
                                animated
                            />
                        </Box>

                        {/* Desktop menu */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: language === 'he' ? 'flex-start' : 'flex-start'
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page.name}
                                    onClick={() => {
                                        handleCloseNavMenu();
                                        scrollToSection(page.ref);
                                    }}
                                    onMouseEnter={handleCursorHover}
                                    onMouseLeave={handleCursorDefault}
                                    sx={{
                                        my: 2,
                                        mx: 1,
                                        color: 'inherit',
                                        display: 'block',
                                        fontWeight: 'medium',
                                        fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                        position: 'relative',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            width: activeSection === page.name.toLowerCase() ? '70%' : '0%',
                                            height: '2px',
                                            bottom: '10px',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            backgroundColor: activeSection === page.name.toLowerCase() ?
                                                themeColors.accent : themeColors.primary,
                                            transition: 'width 0.3s ease',
                                            borderRadius: '2px'
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

                        {/* Theme toggle */}
                        <Box sx={{ mr: 2 }}>
                            <Tooltip title={darkMode ? t.lightMode : t.darkMode}>
                                <IconButton
                                    onClick={handleDarkModeToggle}
                                    color="inherit"
                                    onMouseEnter={handleCursorHover}
                                    onMouseLeave={handleCursorDefault}
                                    sx={{
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'rotate(30deg)'
                                        }
                                    }}
                                >
                                    {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                                </IconButton>
                            </Tooltip>
                        </Box>

                        {/* Language toggle */}
                        <Box sx={{ mr: 2 }}>
                            <Tooltip title={language === 'en' ? 'עברית' : 'English'}>
                                <IconButton
                                    onClick={handleLanguageToggle}
                                    color="inherit"
                                    onMouseEnter={handleCursorHover}
                                    onMouseLeave={handleCursorDefault}
                                    sx={{
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.1)'
                                        }
                                    }}
                                >
                                    <LanguageIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>

                        {/* Login button */}
                        <Box sx={{ flexGrow: 0 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => navigate('/login')}
                                onMouseEnter={handleCursorHover}
                                onMouseLeave={handleCursorDefault}
                                sx={{
                                    borderRadius: '50px',
                                    px: 3,
                                    py: 1,
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                    fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                                    background: `linear-gradient(45deg, ${themeColors.primary} 30%, ${themeColors.secondary} 90%)`,
                                    '&:hover': {
                                        background: `linear-gradient(45deg, ${themeColors.primary} 50%, ${themeColors.secondary} 100%)`,
                                        boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                                        transform: 'translateY(-2px)'
                                    },
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,.4), rgba(255,255,255,0) 70%)',
                                        transform: 'translateX(-100%)',
                                        animation: 'shine 3s infinite linear'
                                    }
                                }}
                            >
                                {t.login}
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar />
            {/* Spacer for fixed AppBar */}

            {/* Hero Section */}
            <Box
                ref={heroRef}
                sx={{
                    position: 'relative',
                    height: { xs: '100vh', md: '90vh' },
                    display: 'flex',
                    alignItems: 'center',
                    backgroundImage: themeColors.heroGradient,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    color: 'white',
                    textAlign: 'center',
                    overflow: 'hidden'
                }}
            >
                {/* Animated particles background */}
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: 'hidden',
                    zIndex: 1
                }}>
                    {[...Array(20)].map((_, i) => (
                        <Box
                            key={i}
                            sx={{
                                position: 'absolute',
                                width: Math.random() * 10 + 5,
                                height: Math.random() * 10 + 5,
                                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                                borderRadius: '50%',
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
                                '@keyframes float': {
                                    '0%': {
                                        transform: 'translateY(0) rotate(0deg)',
                                        opacity: 0.8
                                    },
                                    '50%': {
                                        transform: 'translateY(-60px) rotate(180deg)',
                                        opacity: 0.4
                                    },
                                    '100%': {
                                        transform: 'translateY(-120px) rotate(360deg)',
                                        opacity: 0
                                    }
                                }
                            }}
                        />
                    ))}
                </Box>

                <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
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
                                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                                    fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
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
                                    fontSize: { xs: '1.2rem', md: '1.5rem' },
                                    fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                }}
                            >
                                {t.heroSubtitle}
                            </Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={() => navigate('/login')}
                                    onMouseEnter={handleCursorHover}
                                    onMouseLeave={handleCursorDefault}
                                    sx={{
                                        borderRadius: '50px',
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        textTransform: 'none',
                                        fontWeight: 'bold',
                                        backgroundColor: 'white',
                                        color: themeColors.primary,
                                        fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                                            transform: 'translateY(-2px)'
                                        },
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,.7), rgba(255,255,255,0) 70%)',
                                            transform: 'translateX(-100%)',
                                            animation: 'shine 3s infinite linear',
                                            '@keyframes shine': {
                                                '100%': {
                                                    transform: 'translateX(100%)'
                                                }
                                            }
                                        }
                                    }}
                                >
                                    {t.getStarted}
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    onClick={() => scrollToSection(featuresRef)}
                                    onMouseEnter={handleCursorHover}
                                    onMouseLeave={handleCursorDefault}
                                    endIcon={<ExpandMoreIcon />}
                                    sx={{
                                        borderRadius: '50px',
                                        px: 4,
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        textTransform: 'none',
                                        fontWeight: 'medium',
                                        borderColor: 'white',
                                        color: 'white',
                                        fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                        '&:hover': {
                                            borderColor: 'white',
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            transform: 'translateY(-2px)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {t.learnMore}
                                </Button>
                            </Box>
                        </Box>
                    </Fade>
                </Container>

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
                        },
                        zIndex: 2,
                        cursor: 'pointer'
                    }}
                    onClick={() => scrollToSection(featuresRef)}
                    onMouseEnter={handleCursorHover}
                    onMouseLeave={handleCursorDefault}
                >
                    <KeyboardArrowDownIcon sx={{ fontSize: 40, opacity: 0.8 }} />
                </Box>

                {/* Wave divider */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: -2,
                        left: 0,
                        width: '100%',
                        overflow: 'hidden',
                        lineHeight: 0,
                        transform: 'rotate(180deg)',
                        zIndex: 1
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        style={{
                            position: 'relative',
                            display: 'block',
                            width: 'calc(100% + 1.3px)',
                            height: '60px',
                            transform: 'rotateY(180deg)'
                        }}
                    >
                        <path
                            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                            fill={themeColors.background}
                        ></path>
                    </svg>
                </Box>
            </Box>

            {/* Features Section */}
            <Box
                ref={featuresRef}
                sx={{
                    py: { xs: 8, md: 12 },
                    backgroundColor: themeColors.paper,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Decorative background */}
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.03,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${darkMode ? 'ffffff' : '000000'}' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />

                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography
                            variant="h2"
                            component="h2"
                            align="center"
                            sx={{
                                fontWeight: 'bold',
                                mb: 2,
                                fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                color: themeColors.text,
                                position: 'relative',
                                display: 'inline-block',
                                left: '50%',
                                transform: 'translateX(-50%)'
                            }}
                        >
                            {t.featuresTitle}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: -5,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '80px',
                                    height: '4px',
                                    background: `linear-gradient(90deg, ${themeColors.primary}, ${themeColors.secondary})`,
                                    borderRadius: '2px'
                                }}
                            />
                        </Typography>

                        <Typography
                            variant="h6"
                            align="center"
                            sx={{
                                mb: 8,
                                opacity: 0.8,
                                maxWidth: '700px',
                                mx: 'auto',
                                fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                color: themeColors.text
                            }}
                        >
                            {t.featuresSub}
                        </Typography>
                    </motion.div>

                    <Grid container spacing={4}>
                        {features.map((feature, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Paper
                                        elevation={darkMode ? 0 : 2}
                                        sx={{
                                            p: 4,
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            borderRadius: 4,
                                            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                            '&:hover': {
                                                transform: 'translateY(-10px)',
                                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                                            },
                                            backgroundColor: themeColors.cardBg,
                                            border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                        onMouseEnter={handleCursorHover}
                                        onMouseLeave={handleCursorDefault}
                                    >
                                        {/* Decorative corner */}
                                        {/* <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 0,
                                                    borderWidth: '0 50px 50px 0',
                                                    borderStyle: 'solid',
                                                    borderColor: `transparent ${alpha(feature.color, 0.1)} transparent transparent`,
                                                    transition: 'all 0.3s ease'
                                                }}
                                            /> */}

                                        <Box
                                            sx={{
                                                mb: 3,
                                                color: feature.color,
                                                p: 2,
                                                borderRadius: '50%',
                                                backgroundColor: alpha(feature.color, 0.1),
                                                position: 'relative',
                                                '&::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: -5,
                                                    left: -5,
                                                    right: -5,
                                                    bottom: -5,
                                                    borderRadius: '50%',
                                                    border: `2px dashed ${alpha(feature.color, 0.3)}`,
                                                    animation: 'spin 20s linear infinite',
                                                }
                                            }}
                                        >
                                            {feature.icon}
                                        </Box>

                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            fontWeight="bold"
                                            gutterBottom
                                            sx={{
                                                fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                                color: themeColors.text,
                                                position: 'relative',
                                                zIndex: 1
                                            }}
                                        >
                                            {feature.title}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                lineHeight: 1.7,
                                                color: alpha(themeColors.text, 0.8),
                                                background: 'none',
                                                WebkitBackgroundClip: 'initial',
                                                WebkitTextFillColor: 'initial',
                                                fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                                position: 'relative',
                                                zIndex: 1
                                            }}
                                        >
                                            {feature.description}
                                        </Typography>
                                    </Paper>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Stats Section */}
            <Box
                ref={statsRef}
                sx={{
                    py: { xs: 8, md: 10 },
                    background: `linear-gradient(135deg, ${themeColors.primary} 0%, ${themeColors.secondary} 100%)`,
                    color: 'white',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Decorative background */}
                <Box sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.1,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />

                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography
                            variant="h2"
                            component="h2"
                            align="center"
                            sx={{
                                fontWeight: 'bold',
                                mb: 2,
                                fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                color: 'white',
                                textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                                position: 'relative',
                                display: 'inline-block',
                                left: '50%',
                                transform: 'translateX(-50%)'
                            }}
                        >
                            {t.statsTitle}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: -5,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '80px',
                                    height: '4px',
                                    background: 'rgba(255, 255, 255, 0.5)',
                                    borderRadius: '2px'
                                }}
                            />
                        </Typography>

                        <Typography
                            variant="h6"
                            align="center"
                            sx={{
                                mb: 8,
                                opacity: 0.9,
                                maxWidth: '700px',
                                mx: 'auto',
                                fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                color: 'white'
                            }}
                        >
                            {t.statsSub}
                        </Typography>
                    </motion.div>

                    <Grid container spacing={4} justifyContent="center">
                        {stats.map((stat, index) => (
                            <Grid item xs={6} md={3} key={index}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            textAlign: 'center',
                                            p: 3,
                                            borderRadius: 4,
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            transition: 'transform 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-5px)'
                                            }
                                        }}
                                        onMouseEnter={handleCursorHover}
                                        onMouseLeave={handleCursorDefault}
                                    >
                                        <Box
                                            sx={{
                                                color: 'white',
                                                mb: 2,
                                                p: 1.5,
                                                borderRadius: '50%',
                                                backgroundColor: alpha(stat.color, 0.3),
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}
                                        >
                                            {stat.icon}
                                        </Box>

                                        <Typography
                                            variant="h3"
                                            component="p"
                                            sx={{
                                                fontWeight: 'bold',
                                                mb: 1,
                                                fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                                color: 'white',
                                                textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                                                fontSize: { xs: '1.8rem', md: '2.5rem' }
                                            }}
                                        >
                                            <CountUp end={parseInt(stat.value.replace(/[^0-9]/g, ''))} duration={2.5} separator="," />
                                            {stat.value.includes('+') && '+'}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                                color: 'rgba(255, 255, 255, 0.9)',
                                                fontWeight: 500
                                            }}
                                        >
                                            {stat.label}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Testimonials Section */}
            <Box
                ref={testimonialRef}
                sx={{
                    py: 10,
                    backgroundColor: darkMode ? '#0a0a0a' : '#ffffff',
                    transition: 'background-color 0.3s ease'
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        variant="h3"
                        component="h2"
                        align="center"
                        sx={{
                            fontWeight: 'bold',
                            mb: 6,
                            position: 'relative',
                            fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                width: '80px',
                                height: '4px',
                                bottom: '-15px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: `linear-gradient(to right, ${themeColors.primary}, ${themeColors.secondary})`,
                                borderRadius: '2px'
                            }
                        }}
                    >
                        {t.testimonialTitle}
                    </Typography>

                    <Box sx={{ position: 'relative', mt: 8, mb: 4 }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonialIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card
                                    elevation={darkMode ? 8 : 3}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', md: 'row' },
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        backgroundColor: darkMode ? themeColors.cardBg : '#ffffff',
                                        position: 'relative'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: { xs: '100%', md: '30%' },
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            p: 4,
                                            background: testimonials[currentTestimonialIndex].background,
                                            color: 'white',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <Avatar
                                            src={testimonials[currentTestimonialIndex].avatar}
                                            alt={testimonials[currentTestimonialIndex].author}
                                            sx={{
                                                width: 120,
                                                height: 120,
                                                border: '4px solid white',
                                                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
                                                mb: 2
                                            }}
                                        />
                                        <Typography variant="h6" fontWeight="bold" gutterBottom>
                                            {testimonials[currentTestimonialIndex].author}
                                        </Typography>
                                        <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
                                            {testimonials[currentTestimonialIndex].role}
                                        </Typography>
                                        <Chip
                                            label={testimonials[currentTestimonialIndex].subject}
                                            sx={{
                                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                color: 'white',
                                                fontWeight: 'medium',
                                                mb: 2
                                            }}
                                        />
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            {[...Array(Math.floor(testimonials[currentTestimonialIndex].rating))].map((_, i) => (
                                                <StarIcon key={i} sx={{ color: '#FFD700', fontSize: 20 }} />
                                            ))}
                                            {testimonials[currentTestimonialIndex].rating % 1 !== 0 && (
                                                <StarHalfIcon sx={{ color: '#FFD700', fontSize: 20 }} />
                                            )}
                                        </Box>
                                    </Box>
                                    <CardContent sx={{
                                        flexGrow: 1,
                                        p: 5,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center'
                                    }}>
                                        <Typography
                                            variant="h6"
                                            paragraph
                                            sx={{
                                                fontStyle: 'italic',
                                                lineHeight: 1.8,
                                                mb: 3,
                                                position: 'relative',
                                                color: darkMode ? 'white' : 'text.primary',
                                                background: 'none',
                                                WebkitBackgroundClip: 'initial',
                                                WebkitTextFillColor: 'initial',
                                                fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                                fontSize: { xs: '1rem', md: '1.25rem' }
                                            }}
                                        >
                                            {testimonials[currentTestimonialIndex].text}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation dots */}
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 4,
                            gap: 1
                        }}>
                            {testimonials.map((_, index) => (
                                <Box
                                    key={index}
                                    onClick={() => setCurrentTestimonialIndex(index)}
                                    sx={{
                                        width: 12,
                                        height: 12,
                                        borderRadius: '50%',
                                        backgroundColor: currentTestimonialIndex === index ?
                                            themeColors.primary :
                                            alpha(themeColors.primary, 0.3),
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.2)',
                                            backgroundColor: alpha(themeColors.primary, 0.7)
                                        }
                                    }}
                                    onMouseEnter={handleCursorHover}
                                    onMouseLeave={handleCursorDefault}
                                />
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Box
                ref={faqRef}
                sx={{
                    py: { xs: 8, md: 12 },
                    backgroundColor: themeColors.paper,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography
                            variant="h2"
                            component="h2"
                            align="center"
                            sx={{
                                fontWeight: 'bold',
                                mb: 2,
                                fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                color: themeColors.text,
                                position: 'relative',
                                display: 'inline-block',
                                right: '18%',
                                transform: 'translateX(-50%)'
                            }}
                        >
                            {t.faqTitle}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: -5,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '80px',
                                    height: '4px',
                                    background: `linear-gradient(90deg, ${themeColors.primary}, ${themeColors.secondary})`,
                                    borderRadius: '2px'
                                }}
                            />
                        </Typography>

                        <Typography
                            variant="h6"
                            align="center"
                            sx={{
                                mb: 8,
                                opacity: 0.8,
                                maxWidth: '700px',
                                mx: 'auto',
                                fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                color: themeColors.text
                            }}
                        >
                            {t.faqSub}
                        </Typography>
                    </motion.div>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Students studying together"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: 4,
                                    boxShadow: darkMode ? 'none' : '0 20px 40px rgba(0, 0, 0, 0.1)',
                                    border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                                    maxHeight: '500px'
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box sx={{ maxWidth: '600px' }}>
                                {faqs.map((faq, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Paper
                                            elevation={darkMode ? 0 : 1}
                                            sx={{
                                                mb: 2,
                                                overflow: 'hidden',
                                                borderRadius: 2,
                                                backgroundColor: themeColors.cardBg,
                                                border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                                            }}
                                        >
                                            <Box
                                                onClick={() => handleFaqClick(index)}
                                                sx={{
                                                    p: 3,
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    cursor: 'pointer',
                                                    backgroundColor: currentFaqIndex === index ?
                                                        alpha(themeColors.primary, 0.1) :
                                                        'transparent',
                                                    transition: 'background-color 0.3s ease',
                                                    '&:hover': {
                                                        backgroundColor: alpha(themeColors.primary, 0.05)
                                                    }
                                                }}
                                                onMouseEnter={handleCursorHover}
                                                onMouseLeave={handleCursorDefault}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        color: currentFaqIndex === index ?
                                                            themeColors.primary :
                                                            themeColors.text,
                                                        fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
                                                    }}
                                                >
                                                    {faq.question}
                                                </Typography>

                                                <IconButton
                                                    size="small"
                                                    sx={{
                                                        transform: currentFaqIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                                                        transition: 'transform 0.3s ease',
                                                        color: currentFaqIndex === index ?
                                                            themeColors.primary :
                                                            alpha(themeColors.text, 0.7)
                                                    }}
                                                >
                                                    <ExpandMoreIcon />
                                                </IconButton>
                                            </Box>
                                            <Collapse in={currentFaqIndex === index}>
                                                <Box sx={{ p: 3, pt: 0 }}>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            color: alpha(themeColors.text, 0.8),
                                                            lineHeight: 1.7,
                                                            fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
                                                        }}
                                                    >
                                                        {faq.answer}
                                                    </Typography>
                                                </Box>
                                            </Collapse>
                                        </Paper>
                                    </motion.div>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>


            <Box
                sx={{
                    direction: textDirection,
                    backgroundColor: darkMode ? '#121212' : '#ffffff',
                    color: themeColors.text,
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                    position: 'relative'
                }}
                onMouseMove={handleMouseMove}
            >
                {/*  // Custom cursor (hidden on mobile) */}
                {!isMobile && (
                    <motion.div
                        className="cursor"
                        variants={cursorVariants}
                        animate={cursorVariant}
                        style={{
                            position: 'fixed',
                            borderRadius: '50%',
                            pointerEvents: 'none',
                            zIndex: 9999,
                            mixBlendMode: 'difference'
                        }}
                    />
                )}


                <Box
                    ref={ctaRef}
                    sx={{
                        py: 10,
                        backgroundImage: themeColors.ctaGradient,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                        color: 'white',
                        textAlign: 'center',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Animated overlay */}
                    {/* <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                            zIndex: 1
                        }} />

                        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <Typography
                                    variant="h3"
                                    component="h2"
                                    sx={{
                                        fontWeight: 'bold',
                                        mb: 3,
                                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
                                        fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
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
                                        color: 'white',
                                        background: 'none',
                                        WebkitBackgroundClip: 'initial',
                                        WebkitTextFillColor: 'initial',
                                        fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
                                    }}
                                >
                                    {t.footerTagline}
                                </Typography>
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={() => navigate('/register')}
                                    onMouseEnter={handleCursorHover}
                                    onMouseLeave={handleCursorDefault}
                                    endIcon={<ArrowRightIcon />}
                                    sx={{
                                        borderRadius: '50px',
                                        px: 5,
                                        py: 1.5,
                                        fontSize: '1.2rem',
                                        textTransform: 'none',
                                        fontWeight: 'bold',
                                        backgroundColor: 'white',
                                        color: themeColors.primary,
                                        fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                            boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                                            transform: 'translateY(-2px)'
                                        },
                                        transition: 'all 0.3s ease',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(120deg, rgba(255,255,255,0) 30%, rgba(255,255,255,.7), rgba(255,255,255,0) 70%)',
                                            transform: 'translateX(-100%)',
                                            animation: 'shine 3s infinite linear',
                                            '@keyframes shine': {
                                                '100%': {
                                                    transform: 'translateX(100%)'
                                                }
                                            }
                                        }
                                    }}
                                >
                                    {t.ctaButton}
                                </Button>
                            </motion.div>
                        </Container>
                    </Box> */}

                    {/* Footer */}
                    <Box
                        component="footer"
                        sx={{
                            py: 6,
                            backgroundColor: themeColors.footerBg,
                            color: 'white',
                            transition: 'background-color 0.3s ease'
                        }}
                    >
                        <Container maxWidth="lg">
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={4}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            mb: 2,
                                            cursor: 'pointer'
                                        }}
                                        onClick={scrollToTop}
                                        onMouseEnter={handleCursorHover}
                                        onMouseLeave={handleCursorDefault}
                                    >
                                        <ChavrutaLogo color="white" />
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            opacity: 0.8,
                                            maxWidth: '300px',
                                            lineHeight: 1.7,
                                            fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
                                        }}
                                    >
                                        {t.footerTagline}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                                        {socialLinks.map((social, index) => (
                                            <IconButton
                                                key={index}
                                                size="small"
                                                sx={{
                                                    color: 'white',
                                                    backgroundColor: alpha(social.color, 0.2),
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        backgroundColor: social.color,
                                                        transform: 'translateY(-3px)'
                                                    }
                                                }}
                                                onMouseEnter={handleCursorHover}
                                                onMouseLeave={handleCursorDefault}
                                            >
                                                {social.icon}
                                            </IconButton>
                                        ))}
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={2}>
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        gutterBottom
                                        sx={{ fontFamily: "'Heebo', 'Rubik', Arial, sans-serif" }}
                                    >
                                        {t.quickLinks || "קישורים מהירים"}
                                    </Typography>
                                    <List disablePadding>
                                        {footerLinks.map((link) => (
                                            <ListItem
                                                key={link.name}
                                                disablePadding
                                                sx={{
                                                    pb: 1,
                                                    '&:hover': {
                                                        color: themeColors.secondary
                                                    }
                                                }}
                                            >
                                                <Box
                                                    component="a"
                                                    onClick={link.action}
                                                    sx={{
                                                        color: 'inherit',
                                                        textDecoration: 'none',
                                                        transition: 'color 0.3s ease',
                                                        fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        cursor: 'pointer',
                                                        width: '100%'
                                                    }}
                                                    onMouseEnter={handleCursorHover}
                                                    onMouseLeave={handleCursorDefault}
                                                >
                                                    <ArrowRightIcon
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            scrollToTop();
                                                        }}
                                                        sx={{
                                                            fontSize: 16,
                                                            mr: 1,
                                                            opacity: 0.7,
                                                            transition: 'transform 0.3s ease',
                                                            cursor: 'pointer'
                                                        }}
                                                    />
                                                    {link.name}
                                                </Box>
                                            </ListItem>
                                        ))}

                                    </List>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4}>
                                    <List disablePadding>
                                        {contactInfo.map((info, index) => (
                                            <ListItem
                                                key={index}
                                                disablePadding
                                                sx={{
                                                    pb: 2,
                                                    display: 'flex',
                                                    alignItems: 'flex-start'
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        mr: 2,
                                                        color: themeColors.secondary,
                                                        mt: 0.5
                                                    }}
                                                >
                                                    {info.icon}
                                                </Box>
                                                <Box>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            opacity: 0.7,
                                                            fontFamily: "'Heebo', 'Rubik', Arial, sans-serif"
                                                        }}
                                                    >
                                                        {info.label}
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{ fontFamily: "'Heebo', 'Rubik', Arial, sans-serif" }}
                                                    >
                                                        {info.value}
                                                    </Typography>
                                                </Box>
                                            </ListItem>
                                        ))}
                                    </List>
                                </Grid>
                            </Grid>
                            <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
                            <Box sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                justifyContent: 'space-between',
                                alignItems: { xs: 'center', sm: 'flex-start' },
                                gap: 2
                            }}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        opacity: 0.7,
                                        fontFamily: "'Heebo', 'Rubik', Arial, sans-serif",
                                        textAlign: { xs: 'center', sm: 'left' }
                                    }}
                                >
                                    © {new Date().getFullYear()} ChavrutaMatch. {t.footerRights}
                                </Typography>
                                <Box sx={{
                                    display: 'flex',
                                    gap: { xs: 2, sm: 4 },
                                    flexWrap: 'wrap',
                                    justifyContent: 'center'
                                }}>

                                </Box>
                            </Box>
                        </Container>
                    </Box>


                    {/* Scroll to top button */}
                    <Zoom in={showScrollFab}>
                        <Fab
                            color="primary"
                            aria-label="scroll to top"
                            onClick={scrollToTop}
                            onMouseEnter={handleCursorHover}
                            onMouseLeave={handleCursorDefault}
                            sx={{
                                position: 'fixed',
                                bottom: 24,
                                right: language === 'he' ? 'auto' : 24,
                                left: language === 'he' ? 24 : 'auto',
                                zIndex: 1000,
                                background: `linear-gradient(45deg, ${themeColors.primary} 30%, ${themeColors.secondary} 90%)`,
                                '&:hover': {
                                    background: `linear-gradient(45deg, ${themeColors.primary} 20%, ${themeColors.secondary} 80%)`,
                                    transform: 'translateY(-3px)',
                                    boxShadow: `0 6px 15px ${alpha(themeColors.primary, 0.4)}`
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {language === 'he' ? <ArrowForwardIcon /> : <ArrowBackIcon />}
                        </Fab>
                    </Zoom>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;