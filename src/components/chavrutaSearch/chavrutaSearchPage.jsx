// // בס"ד
// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import {ChavrutaCards} from "../chavruta/chavruta";
// import { Container, Typography, Box, Paper } from '@mui/material';

// export const ChavrutaSearchPage = () => {
//     const { requestCode } = useParams(); // אם אתה משתמש בניתוב עם פרמטר של קוד בקשה
    
//     return (
//         <Container maxWidth="xl">
//             <Box sx={{ py: 4 }}>
//                 <Paper elevation={0} sx={{ p: 3, mb: 3, borderRadius: 2, bgcolor: '#f8f9fa' }}>
//                     <Typography variant="h4" component="h1" align="center" gutterBottom>
//                         מערכת חיפוש חברותא
//                     </Typography>
//                     <Typography variant="body1" align="center" color="text.secondary">
//                         כאן תוכלו למצוא חברותות מתאימות לפי תחומי עניין, ספרים וזמנים שנוחים לכם
//                     </Typography>
//                 </Paper>
                
//                 <ChavrutaCards requestCode={requestCode} />
//             </Box>
//         </Container>
//     );
// };

// // export default ChavrutaSearchPage;





















import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { ChavrutaCards } from "../chavruta/chavruta";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
  InputAdornment,
  Button,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  Skeleton,
  Fade
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import BookIcon from '@mui/icons-material/Book';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Styled components
const SearchHeader = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  background: theme.palette.mode === 'dark'
    ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)'
    : 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: theme.shadows[2],
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: theme.palette.mode === 'dark'
      ? 'radial-gradient(circle at 25% 25%, rgba(124, 58, 237, 0.2) 0%, rgba(0, 0, 0, 0) 50%), radial-gradient(circle at 75% 75%, rgba(219, 39, 119, 0.2) 0%, rgba(0, 0, 0, 0) 50%)'
      : 'radial-gradient(circle at 25% 25%, rgba(124, 58, 237, 0.2) 0%, rgba(255, 255, 255, 0) 50%), radial-gradient(circle at 75% 75%, rgba(219, 39, 119, 0.2) 0%, rgba(255, 255, 255, 0) 50%)',
    zIndex: 0,
  },
}));

const StyledSearchBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: 700,
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
}));

const FilterPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  borderRadius: theme.shape.borderRadius * 1.5,
  position: 'sticky',
  top: theme.spacing(2),
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  fontWeight: 500,
  '&.MuiChip-outlined': {
    borderWidth: 1.5,
  },
}));

const FilterTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  position: 'relative',
  paddingBottom: theme.spacing(1),
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '40px',
    height: '3px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    borderRadius: '1.5px',
  },
}));

// Mock data
const subjects = [
  { id: 1, name: 'גמרא', icon: <MenuBookIcon /> },
  { id: 2, name: 'הלכה', icon: <BookIcon /> },
  { id: 3, name: 'מוסר', icon: <SchoolIcon /> },
  { id: 4, name: 'תנ"ך', icon: <MenuBookIcon /> },
  { id: 5, name: 'חסידות', icon: <LocalLibraryIcon /> },
  { id: 6, name: 'פרשת שבוע', icon: <BookIcon /> },
];

const levels = [
  { id: 1, name: 'מתחיל' },
  { id: 2, name: 'בינוני' },
  { id: 3, name: 'מתקדם' },
  { id: 4, name: 'מומחה' },
];

const days = [
  { id: 1, name: 'ראשון', value: 'sun' },
  { id: 2, name: 'שני', value: 'mon' },
  { id: 3, name: 'שלישי', value: 'tue' },
  { id: 4, name: 'רביעי', value: 'wed' },
  { id: 5, name: 'חמישי', value: 'thu' },
  { id: 6, name: 'שישי', value: 'fri' },
  { id: 7, name: 'שבת', value: 'shabbos' },
];

export const ChavrutaSearchPage = () => {
  const { requestCode } = useParams();
//   const location = useLocation();
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Get search query from URL
  const searchParams = new URLSearchParams(location.search);
  const initialQuery = searchParams.get('q') || '';
  const initialSubject = searchParams.get('subject') || '';
  
  // State
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedSubjects, setSelectedSubjects] = useState(initialSubject ? [initialSubject] : []);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [timeRange, setTimeRange] = useState({ from: '', to: '' });
  const [location, setLocation] = useState('');
  const [isOnline, setIsOnline] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Update URL with search parameters
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    navigate({
      pathname: location.pathname,
      search: params.toString()
    });
  };

  const toggleSubject = (subject) => {
    setSelectedSubjects(prev => 
      prev.includes(subject)
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    );
  };

  const toggleLevel = (level) => {
    setSelectedLevels(prev => 
      prev.includes(level)
        ? prev.filter(l => l !== level)
        : [...prev, level]
    );
  };

  const toggleDay = (day) => {
    setSelectedDays(prev => 
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const clearFilters = () => {
    setSelectedSubjects([]);
    setSelectedLevels([]);
    setSelectedDays([]);
    setTimeRange({ from: '', to: '' });
    setLocation('');
    setIsOnline(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const filterContent = (
    <Box sx={{ p: isMobile ? 3 : 0 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <FilterTitle variant="h6">סינון תוצאות</FilterTitle>
        {isMobile && (
          <IconButton onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        )}
      </Box>

      <Accordion defaultExpanded elevation={0} sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ px: 0 }}
        >
          <Typography variant="subtitle1" fontWeight={600}>נושאי לימוד</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {subjects.map((subject) => (
              <CategoryChip
                key={subject.id}
                icon={subject.icon}
                label={subject.name}
                variant={selectedSubjects.includes(subject.name) ? "filled" : "outlined"}
                color={selectedSubjects.includes(subject.name) ? "primary" : "default"}
                onClick={() => toggleSubject(subject.name)}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded elevation={0} sx={{ mb: 2 }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ px: 0 }}
        >
          <Typography variant="subtitle1" fontWeight={600}>רמת לימוד</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 0 }}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {levels.map((level) => (
              <CategoryChip
              key={level.id}
              label={level.name}
              variant={selectedLevels.includes(level.name) ? "filled" : "outlined"}
              color={selectedLevels.includes(level.name) ? "primary" : "default"}
              onClick={() => toggleLevel(level.name)}
            />
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded elevation={0} sx={{ mb: 2 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ px: 0 }}
      >
        <Typography variant="subtitle1" fontWeight={600}>ימים</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {days.map((day) => (
            <CategoryChip
              key={day.id}
              label={day.name}
              variant={selectedDays.includes(day.value) ? "filled" : "outlined"}
              color={selectedDays.includes(day.value) ? "primary" : "default"}
              onClick={() => toggleDay(day.value)}
            />
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded elevation={0} sx={{ mb: 2 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ px: 0 }}
      >
        <Typography variant="subtitle1" fontWeight={600}>שעות</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="משעה"
              type="time"
              value={timeRange.from}
              onChange={(e) => setTimeRange({ ...timeRange, from: e.target.value })}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="עד שעה"
              type="time"
              value={timeRange.to}
              onChange={(e) => setTimeRange({ ...timeRange, to: e.target.value })}
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>

    <Accordion defaultExpanded elevation={0} sx={{ mb: 3 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{ px: 0 }}
      >
        <Typography variant="subtitle1" fontWeight={600}>מיקום</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0 }}>
        <TextField
          label="עיר/שכונה"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
        <FormControl fullWidth>
          <InputLabel>אופן הלימוד</InputLabel>
          <Select
            value={isOnline ? "online" : "inperson"}
            onChange={(e) => setIsOnline(e.target.value === "online")}
            label="אופן הלימוד"
          >
            <MenuItem value="inperson">פנים אל פנים</MenuItem>
            <MenuItem value="online">לימוד מקוון</MenuItem>
            <MenuItem value="both">שניהם</MenuItem>
          </Select>
        </FormControl>
      </AccordionDetails>
    </Accordion>

    <Button
      variant="outlined"
      color="primary"
      fullWidth
      onClick={clearFilters}
      sx={{ mb: isMobile ? 2 : 0 }}
    >
      נקה סינון
    </Button>
  </Box>
);

return (
  <Container maxWidth="xl">
    <Box sx={{ py: 4 }}>
      <Fade in={!loading} timeout={1000}>
        <SearchHeader elevation={0}>
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom fontWeight={700}>
              מערכת חיפוש חברותא
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4, maxWidth: '700px', mx: 'auto' }}>
              כאן תוכלו למצוא חברותות מתאימות לפי תחומי עניין, ספרים וזמנים שנוחים לכם
            </Typography>
            
            <form onSubmit={handleSearch}>
              <StyledSearchBox>
                <TextField
                  fullWidth
                  placeholder="חפש לפי נושא, ספר או מסכת..."
                  variant="outlined"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ bgcolor: theme.palette.background.paper, borderRadius: 2 }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    ml: 1,
                    borderRadius: '8px',
                    px: 3,
                    py: 1.5,
                    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  }}
                >
                  חיפוש
                </Button>
              </StyledSearchBox>
            </form>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: 3 }}>
              {subjects.slice(0, 5).map((subject) => (
                <CategoryChip
                  key={subject.id}
                  icon={subject.icon}
                  label={subject.name}
                  variant={selectedSubjects.includes(subject.name) ? "filled" : "outlined"}
                  color={selectedSubjects.includes(subject.name) ? "primary" : "default"}
                  onClick={() => toggleSubject(subject.name)}
                />
              ))}
            </Box>
          </Box>
        </SearchHeader>
      </Fade>

      <Grid container spacing={3}>
        {/* Filter sidebar for desktop */}
        {!isMobile && (
          <Grid item xs={12} md={3}>
            <Fade in={!loading} timeout={1000}>
              <FilterPaper elevation={1}>
                {filterContent}
              </FilterPaper>
            </Fade>
          </Grid>
        )}
        
        {/* Results */}
        <Grid item xs={12} md={9}>
          {/* Mobile filter button */}
          {isMobile && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
              <Button
                variant="outlined"
                startIcon={<TuneIcon />}
                onClick={toggleDrawer(true)}
              >
                סינון
              </Button>
            </Box>
          )}
          
          {/* Active filters */}
          {(selectedSubjects.length > 0 || selectedLevels.length > 0 || selectedDays.length > 0 || timeRange.from || timeRange.to || location) && (
            <Fade in={!loading} timeout={1000}>
              <Paper sx={{ p: 2, mb: 3, borderRadius: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
                  <Typography variant="subtitle2" sx={{ mr: 1 }}>סינון פעיל:</Typography>
                  
                  {selectedSubjects.map(subject => (
                    <Chip
                      key={`subject-${subject}`}
                      label={subject}
                      size="small"
                      onDelete={() => toggleSubject(subject)}
                      color="primary"
                    />
                  ))}
                  
                  {selectedLevels.map(level => (
                    <Chip
                      key={`level-${level}`}
                      label={level}
                      size="small"
                      onDelete={() => toggleLevel(level)}
                      color="primary"
                    />
                  ))}
                  
                  {selectedDays.map(day => {
                    const dayObj = days.find(d => d.value === day);
                    return (
                      <Chip
                        key={`day-${day}`}
                        label={dayObj ? dayObj.name : day}
                        size="small"
                        onDelete={() => toggleDay(day)}
                        color="primary"
                      />
                    );
                  })}
                  
                  {(timeRange.from || timeRange.to) && (
                    <Chip
                      label={`שעות: ${timeRange.from || '00:00'} - ${timeRange.to || '23:59'}`}
                      size="small"
                      onDelete={() => setTimeRange({ from: '', to: '' })}
                      color="primary"
                    />
                  )}
                  
                  {location && (
                    <Chip
                      label={`מיקום: ${location}`}
                      size="small"
                      onDelete={() => setLocation('')}
                      color="primary"
                    />
                  )}
                  
                  <Button
                    variant="text"
                    size="small"
                    onClick={clearFilters}
                    sx={{ ml: 'auto' }}
                  >
                    נקה הכל
                  </Button>
                </Box>
              </Paper>
            </Fade>
          )}
          
          {/* Results count */}
          <Fade in={!loading} timeout={1000}>
            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="subtitle1" fontWeight={500}>
                נמצאו 24 חברותות
              </Typography>
              <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
                <InputLabel>מיון</InputLabel>
                <Select
                  label="מיון"
                  defaultValue="relevance"
                >
                  <MenuItem value="relevance">רלוונטיות</MenuItem>
                  <MenuItem value="newest">חדש ביותר</MenuItem>
                  <MenuItem value="popular">פופולרי</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Fade>
          
          {/* Results */}
          {loading ? (
            <Box>
              {Array.from(new Array(3)).map((_, index) => (
                <Skeleton 
                  key={index}
                  variant="rectangular" 
                  height={200} 
                  sx={{ borderRadius: 2, mb: 3 }} 
                />
              ))}
            </Box>
          ) : (
            <ChavrutaCards requestCode={requestCode} />
          )}
        </Grid>
      </Grid>
    </Box>
    
    {/* Mobile filter drawer */}
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      sx={{
        '& .MuiDrawer-paper': {
          width: '85%',
          maxWidth: '360px',
          boxSizing: 'border-box',
        },
      }}
    >
      {filterContent}
    </Drawer>
  </Container>
);
};

export default ChavrutaSearchPage;

