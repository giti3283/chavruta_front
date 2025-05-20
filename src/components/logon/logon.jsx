import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddPersonThunk } from "../../redux/Person/addPersonThunk";
import { useNavigate, useParams } from "react-router-dom";
import './logon.css';

// Material UI
import { 
  Box, 
  Button, 
  FormControl, 
  FormControlLabel, 
  InputAdornment, 
  InputLabel, 
  MenuItem, 
  Radio, 
  RadioGroup, 
  Select, 
  Stack, 
  TextField,
  Typography,
  Container,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Grid,
  Divider,
  Alert,
  useTheme,
  ThemeProvider,
  createTheme
} from "@mui/material";
import { styled } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FaUser, FaIdCard, FaPhone, FaMapMarkerAlt, FaUserGraduate, FaBook, FaCalendarAlt, FaVenusMars } from 'react-icons/fa';

// עיצוב מותאם לקומפוננטות
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

const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(3),
  paddingBottom: theme.spacing(1),
  fontWeight: 600,
  color: '#1e293b',
  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '50px',
    height: '3px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
  }
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  color: '#7c3aed',
  '& svg': {
    marginRight: theme.spacing(1),
    fontSize: '1.25rem',
  }
}));

const filterOptions = (options, { inputValue }) => {
  const inputValueHebrew = inputValue.trim().toLowerCase();
  
  if (inputValueHebrew === '') {
    return options;
  }
  
  return options.filter(option => 
    option.label.toLowerCase().includes(inputValueHebrew)
  );
};

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
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

const StyledSelect = styled(Select)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    '&:hover': {
      borderColor: '#7c3aed',
    },
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#7c3aed',
  }
}));

const StyledButton = styled(Button)(({ theme, variant }) => ({
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

const StyledStepper = styled(Stepper)(({ theme }) => ({
  '& .MuiStepIcon-root': {
    color: '#e2e8f0',
    '&.Mui-active': {
      color: '#7c3aed',
    },
    '&.Mui-completed': {
      color: '#4f46e5',
    }
  },
  '& .MuiStepLabel-label': {
    fontWeight: 500,
    '&.Mui-active': {
      color: '#1e293b',
      fontWeight: 600,
    }
  }
}));

// יצירת ערכת נושא מותאמת
const getCustomTheme = (theme) => createTheme({
  ...theme,
  palette: {
    primary: {
      main: '#7c3aed',
    },
    secondary: {
      main: '#db2777',
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

export const Logon = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const [person, setPerson] = useState({ 
    id: param.id, 
    firstName: param.firstName, 
    lastName: param.lastName, 
    birthDate: '', 
    gender: 'male', 
    status: 'single', 
    cellularTelephone: '', 
    telephone: '', 
    country: null, // שינינו לnull במקום מחרוזת ריקה
    city: null,    // שינינו לnull במקום מחרוזת ריקה
    email: '', 
    role: '', 
    denomination: 'generic' 
  });
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState('');
  const [availableCities, setAvailableCities] = useState([]);
  const navi = useNavigate();
  const theme = useTheme();
  const customTheme = getCustomTheme(theme);

  // עדכון רשימת הערים כאשר המדינה משתנה
  useEffect(() => {
    if (person.country && person.country.code) {
      setAvailableCities(citiesByCountry[person.country.code] || []);
      // אם העיר הנוכחית לא שייכת למדינה החדשה, נאפס אותה
      if (person.city && !citiesByCountry[person.country.code]?.some(city => city.code === person.city.code)) {
        setPerson(prev => ({ ...prev, city: null }));
      }
    } else {
      setAvailableCities([]);
    }
  }, [person.country]);

  const steps = ['פרטים אישיים', 'פרטי קשר', 'העדפות לימוד'];

  const handleNext = () => {
    if (activeStep === 0) {
      if (!person.birthDate || !person.gender || !person.status) {
        setError('אנא מלאו את כל השדות הנדרשים');
        return;
      }
    } else if (activeStep === 1) {
      if (!person.cellularTelephone || !person.email || !person.country || !person.city) {
        setError('אנא מלאו את כל השדות הנדרשים');
        return;
      }
    }
    
    setError('');
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const log = async () => {
    if (!person.role || !person.denomination) {
      setError('אנא בחרו את תפקידכם והזרם שלכם');
      return;
    }
    
    // המרת אובייקטים למחרוזות לפני שליחה לשרת
    const personToSubmit = {
      ...person,
      country: person.country ? person.country.label : '',
      city: person.city ? person.city.label : ''
    };
    
    dispatch(AddPersonThunk(personToSubmit));
    if (person.role === "request")
      navi(`/request/${person.id}`);
    else
      navi(`/offer/${person.id}`);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #fffcf2 0%, #fff9e6 100%)',
        py: 6
      }}>
        <Container maxWidth="md" className="fade-in">
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography 
              variant="h3" 
              component="h1" 
              sx={{ 
                fontWeight: 700, 
                color: '#1e293b',
                mb: 2,
                background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              ברוכים הבאים, {param.firstName} {param.lastName}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
              אנו שמחים שבחרתם להצטרף לקהילת חברותא קונקט. אנא מלאו את הפרטים הבאים כדי שנוכל להתאים לכם חברותא מושלמת.
            </Typography>
          </Box>
          
          <StyledPaper elevation={3}>
            <StyledStepper activeStep={activeStep} alternativeLabel sx={{ mb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </StyledStepper>
            
            {error && (
              <Alert 
                severity="error" 
                sx={{ 
                  mb: 3, 
                  borderRadius: 2,
                  '& .MuiAlert-icon': {
                    color: '#db2777'
                  }
                }}
              >
                {error}
              </Alert>
            )}

            {activeStep === 0 && (
              <Box sx={{ px: { xs: 1, md: 3 } }}>
                <IconBox>
                  <FaUser />
                  <SectionTitle variant="h5">פרטים אישיים</SectionTitle>
                </IconBox>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
                      <FaCalendarAlt style={{ color: '#7c3aed', marginRight: '8px' }} />
                      <Typography variant="body2" color="text.secondary">תאריך לידה</Typography>
                    </Box>
                    <StyledTextField 
                      value={person.birthDate} 
                      type="date" 
                      id="birthDate" 
                      variant="outlined" 
                      fullWidth
                      required
                      InputLabelProps={{ shrink: true }}
                      onChange={x => setPerson({ ...person, birthDate: x.target.value })} 
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
                      <FaVenusMars style={{ color: '#7c3aed', marginRight: '8px' }} />
                      <Typography variant="body2" color="text.secondary">מגדר</Typography>
                    </Box>
                    <FormControl fullWidth variant="outlined" required>
                      <InputLabel id="gender-label">מגדר</InputLabel>
                      <StyledSelect
                        labelId="gender-label"
                        id="gender"
                        value={person.gender}
                        label="מגדר"
                        onChange={e => setPerson({ ...person, gender: e.target.value })}
                      >
                        <MenuItem value={"male"}>זכר</MenuItem>
                        <MenuItem value={"female"}>נקבה</MenuItem>
                      </StyledSelect>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
                      <FaIdCard style={{ color: '#7c3aed', marginRight: '8px' }} />
                      <Typography variant="body2" color="text.secondary">מצב משפחתי</Typography>
                    </Box>
                    <FormControl fullWidth variant="outlined" required>
                      <InputLabel id="status-label">מצב משפחתי</InputLabel>
                      <StyledSelect
                        labelId="status-label"
                        id="status"
                        value={person.status}
                        label="מצב משפחתי"
                        onChange={e => setPerson({ ...person, status: e.target.value })}
                      >
                        <MenuItem value={"single"}>רווק/ה</MenuItem>
                        <MenuItem value={"married"}>נשוי/אה</MenuItem>
                        <MenuItem value={"divorce"}>גרוש/ה</MenuItem>
                        <MenuItem value={"widower"}>אלמן/ה</MenuItem>
                      </StyledSelect>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
                      <FaBook style={{ color: '#7c3aed', marginRight: '8px' }} />
                      <Typography variant="body2" color="text.secondary">זרם</Typography>
                    </Box>
                    <FormControl fullWidth variant="outlined" required>
                      <InputLabel id="denomination-label">זרם</InputLabel>
                      <StyledSelect
                        labelId="denomination-label"
                        id="denomination"
                        value={person.denomination}
                        label="זרם"
                        onChange={e => setPerson({ ...person, denomination: e.target.value })}
                      >
                        <MenuItem value={"spaniard"}>ספרדי</MenuItem>
                        <MenuItem value={"ashkenazi"}>אשכנזי</MenuItem>
                        <MenuItem value={"yemeni"}>תימני</MenuItem>
                        <MenuItem value={"moroccan"}>מרוקאי</MenuItem>
                        <MenuItem value={"generic"}>כללי</MenuItem>
                        <MenuItem value={"another"}>אחר</MenuItem>
                      </StyledSelect>
                    </FormControl>
                  </Grid>
                </Grid>
              </Box>
            )}

{activeStep === 1 && (
        <Box sx={{ px: { xs: 1, md: 3 } }}>
          <IconBox>
            <FaPhone />
            <SectionTitle variant="h5">פרטי קשר</SectionTitle>
          </IconBox>
          <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField 
                      value={person.cellularTelephone} 
                      id="cellularTelephone" 
                      label="טלפון נייד" 
                      variant="outlined" 
                      fullWidth
                      required
                      onChange={x => setPerson({ ...person, cellularTelephone: x.target.value })} 
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField 
                      value={person.telephone} 
                      id="telephone" 
                      label="טלפון קווי" 
                      variant="outlined" 
                      fullWidth
                      onChange={x => setPerson({ ...person, telephone: x.target.value })} 
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="email"
                      label="דואר אלקטרוני"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={x => setPerson({ ...person, email: x.target.value + "@gmail.com" })}
                      InputProps={{
                        endAdornment: <InputAdornment position="end">@gmail.com</InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
  <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
    <FaMapMarkerAlt style={{ color: '#7c3aed', marginRight: '8px' }} />
    <Typography variant="body2" color="text.secondary">מדינה</Typography>
  </Box>
  <Autocomplete
    id="country"
    options={countries}
    value={person.country}
    onChange={(event, newValue) => {
      setPerson({ ...person, country: newValue, city: null });
    }}
    getOptionLabel={(option) => option.label || ''}
    isOptionEqualToValue={(option, value) => option.code === value?.code}
    renderInput={(params) => (
      <StyledTextField
        {...params}
        label="מדינה"
        required
        fullWidth
        error={error && !person.country}
        helperText={error && !person.country ? "יש לבחור מדינה" : ""}
        dir="rtl"
        InputProps={{
          ...params.InputProps,
          sx: { 
            direction: 'rtl',
            '& .MuiAutocomplete-endAdornment': {
              right: 'auto',
              left: '9px',
            }
          }
        }}
      />
    )}
    renderOption={(props, option) => (
      <Box component="li" {...props} sx={{ display: 'flex', alignItems: 'center', direction: 'rtl' }}>
        <Box 
          component="img" 
          loading="lazy"
          className="country-option-flag"
          src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${option.code}.svg`}
          alt=""
        />
        <span className="country-option-label">{option.label}</span>
      </Box>
    )}
    componentsProps={{
      popper: {
        sx: { direction: 'rtl' }
      },
      paper: {
        elevation: 8,
        sx: {
          '& .MuiAutocomplete-listbox': {
            padding: '4px 0'
          }
        }
      }
    }}
    autoHighlight
    openOnFocus
  />
</Grid>

<Grid item xs={12} md={6}>
  <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 1 }}>
    <FaMapMarkerAlt style={{ color: '#7c3aed', marginRight: '8px' }} />
    <Typography variant="body2" color="text.secondary">עיר</Typography>
  </Box>
  <Autocomplete
    id="city"
    options={availableCities}
    filterOptions={filterOptions}
    value={person.city}
    onChange={(event, newValue) => {
      setPerson({ ...person, city: newValue });
    }}
    getOptionLabel={(option) => option.label || ''}
    isOptionEqualToValue={(option, value) => option.code === value.code}
    disabled={!person.country}
    renderInput={(params) => (
      <StyledTextField
        {...params}
        label="עיר"
        required
        fullWidth
        error={error && !person.city && person.country}
        helperText={
          !person.country 
            ? "יש לבחור מדינה תחילה" 
            : error && !person.city 
              ? "יש לבחור עיר" 
              : ""
        }
        dir="rtl" 
        InputProps={{
          ...params.InputProps,
          sx: { 
            direction: 'rtl', 
            '& .MuiAutocomplete-endAdornment': {
              right: 'auto', 
              left: '9px', 
            }
          }
        }}
      />
    )}
    renderOption={(props, option) => (
      <Box component="li" {...props} sx={{ direction: 'rtl' }}>
        {option.label}
      </Box>
    )}
    noOptionsText="לא נמצאו ערים"
    autoHighlight
    openOnFocus
    disablePortal
    sx={{ 
      '& .MuiAutocomplete-endAdornment': { 
        right: 'auto', 
        left: 9 
      } 
    }}
  />
</Grid>
          </Grid>
        </Box>
      )}
      

            {activeStep === 2 && (
              <Box>
                <IconBox>
                  <FaUserGraduate />
                  <SectionTitle variant="h5">העדפות לימוד</SectionTitle>
                </IconBox>
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    בחרו את תפקידכם במערכת
                  </Typography>
                  <Typography variant="body2" color="textSecondary" paragraph>
                    אנא בחרו האם אתם מעוניינים ללמוד (מבקש) או ללמד (מציע)
                  </Typography>
                  <FormControl component="fieldset" required sx={{ mt: 2 }}>
                    <RadioGroup
                      row
                      value={person.role}
                      onChange={e => setPerson({ ...person, role: e.target.value })}
                    >
                      <FormControlLabel 
                        value="offer" 
                        control={<Radio color="primary" />} 
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>מציע (מלמד)</Typography>
                          </Box>
                        } 
                        sx={{ mr: 4 }}
                      />
                      <FormControlLabel 
                        value="request" 
                        control={
                          <Radio color="primary" />
                        } 
                        label={
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body1" sx={{ fontWeight: 500 }}>מבקש (לומד)</Typography>
                          </Box>
                        } 
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
                sx={{ borderRadius: 2, px: 3 }}
              >
                חזרה
              </Button>
              <Box>
                {activeStep === steps.length - 1 ? (
                  <Button 
                    variant="contained" 
                    onClick={log}
                    sx={{ 
                      borderRadius: 2, 
                      px: 4,
                      backgroundColor: '#3f51b5',
                      '&:hover': {
                        backgroundColor: '#303f9f',
                      }
                    }}
                  >
                    סיום והרשמה
                  </Button>
                ) : (
                  <Button 
                    variant="contained" 
                    onClick={handleNext}
                    sx={{ 
                      borderRadius: 2, 
                      px: 3,
                      backgroundColor: '#3f51b5',
                      '&:hover': {
                        backgroundColor: '#303f9f',
                      }
                    }}
                  >
                    המשך
                  </Button>
                )}
              </Box>
            </Box>
          </StyledPaper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

const citiesByCountry = {
  'IL': [
    { code: 'JLM', label: 'ירושלים' },
    { code: 'TLV', label: 'תל אביב' },
    { code: 'HFA', label: 'חיפה' },
    { code: 'BEV', label: 'באר שבע' },
    { code: 'ASH', label: 'אשדוד' },
    { code: 'RIS', label: 'ראשון לציון' },
    { code: 'PET', label: 'פתח תקווה' },
    { code: 'BNB', label: 'בני ברק' },
    { code: 'BTY', label: 'בית שמש' },
    { code: 'TZF', label: 'צפת' },
    { code: 'TIB', label: 'טבריה' },
    { code: 'ELT', label: 'אילת' },
    { code: 'NTN', label: 'נתניה' },
    { code: 'RHV', label: 'רחובות' },
    { code: 'ASK', label: 'אשקלון' },
    { code: 'MOD', label: 'מודיעין' },
    { code: 'HAD', label: 'חדרה' },
    { code: 'KFS', label: 'כפר סבא' }
  ],
  'US': [
    { code: 'NYC', label: 'ניו יורק' },
    { code: 'LAX', label: 'לוס אנג\'לס' },
    { code: 'CHI', label: 'שיקגו' },
    { code: 'MIA', label: 'מיאמי' },
    { code: 'BOS', label: 'בוסטון' },
    { code: 'LAK', label: 'לייקווד' },
    { code: 'BRK', label: 'ברוקלין' },
    { code: 'HOU', label: 'יוסטון' },
    { code: 'PHI', label: 'פילדלפיה' },
    { code: 'PHX', label: 'פיניקס' },
    { code: 'SAN', label: 'סן דייגו' },
    { code: 'DAL', label: 'דאלאס' },
    { code: 'SEA', label: 'סיאטל' },
    { code: 'DEN', label: 'דנבר' },
    { code: 'BAL', label: 'בולטימור' },
    { code: 'MON', label: 'מונסי' },
    { code: 'ATL', label: 'אטלנטה' },
    { code: 'DET', label: 'דטרויט' }
  ],
  'GB': [
    { code: 'LON', label: 'לונדון' },
    { code: 'MAN', label: 'מנצ\'סטר' },
    { code: 'BIR', label: 'ברמינגהם' },
    { code: 'GLS', label: 'גלזגו' },
    { code: 'LDS', label: 'לידס' },
    { code: 'EDI', label: 'אדינבורו' },
    { code: 'LIV', label: 'ליברפול' },
    { code: 'BRI', label: 'בריסטול' },
    { code: 'GOL', label: 'גולדרס גרין' },
    { code: 'STA', label: 'סטמפורד היל' }
  ],
  'FR': [
    { code: 'PAR', label: 'פריז' },
    { code: 'MAR', label: 'מרסיי' },
    { code: 'LYO', label: 'ליון' },
    { code: 'STR', label: 'שטרסבורג' },
    { code: 'NIC', label: 'ניס' },
    { code: 'BOR', label: 'בורדו' },
    { code: 'TOU', label: 'טולוז' },
    { code: 'LIL', label: 'ליל' },
    { code: 'MET', label: 'מץ' }
  ],
  'CA': [
    { code: 'TOR', label: 'טורונטו' },
    { code: 'MON', label: 'מונטריאול' },
    { code: 'VAN', label: 'ונקובר' },
    { code: 'OTT', label: 'אוטווה' },
    { code: 'CAL', label: 'קלגרי' },
    { code: 'EDM', label: 'אדמונטון' },
    { code: 'WIN', label: 'ויניפג' },
    { code: 'QUE', label: 'קוויבק סיטי' },
    { code: 'HAL', label: 'הליפקס' }
  ],
  'CN': [
    { code: 'BEI', label: 'בייג\'ינג' },
    { code: 'SHA', label: 'שנגחאי' },
    { code: 'HON', label: 'הונג קונג' },
    { code: 'SHE', label: 'שנזן' },
    { code: 'GUA', label: 'גואנגז\'ו' },
    { code: 'CHE', label: 'צ\'נגדו' },
    { code: 'NAN', label: 'נאנג\'ינג' },
    { code: 'WUH', label: 'ווהאן' },
    { code: 'TIA', label: 'טיאנג\'ין' },
    { code: 'HAR', label: 'הארבין' }
  ],
  'UA': [
    { code: 'KIE', label: 'קייב' },
    { code: 'KHA', label: 'חרקוב' },
    { code: 'ODE', label: 'אודסה' },
    { code: 'DNI', label: 'דנייפרו' },
    { code: 'UMA', label: 'אומן' },
    { code: 'LVI', label: 'לבוב' },
    { code: 'ZAP', label: 'זפורוז\'יה' },
    { code: 'DON', label: 'דונצק' },
    { code: 'MER', label: 'מז\'יבוז\'' }
  ],
  'AU': [
    { code: 'SYD', label: 'סידני' },
    { code: 'MEL', label: 'מלבורן' },
    { code: 'BRI', label: 'בריסביין' },
    { code: 'PER', label: 'פרת\'' },
    { code: 'ADE', label: 'אדלייד' },
    { code: 'GOL', label: 'גולד קוסט' },
    { code: 'CAN', label: 'קנברה' }
  ],
  'DE': [
    { code: 'BER', label: 'ברלין' },
    { code: 'MUN', label: 'מינכן' },
    { code: 'FRA', label: 'פרנקפורט' },
    { code: 'HAM', label: 'המבורג' },
    { code: 'COL', label: 'קלן' },
    { code: 'DUS', label: 'דיסלדורף' },
    { code: 'STU', label: 'שטוטגרט' },
    { code: 'LEI', label: 'לייפציג' },
    { code: 'DRE', label: 'דרזדן' }
  ],
  'IT': [
    { code: 'ROM', label: 'רומא' },
    { code: 'MIL', label: 'מילאנו' },
    { code: 'NAP', label: 'נאפולי' },
    { code: 'TUR', label: 'טורינו' },
    { code: 'BOL', label: 'בולוניה' },
    { code: 'FLO', label: 'פירנצה' },
    { code: 'VEN', label: 'ונציה' },
    { code: 'PAL', label: 'פלרמו' }
  ],
  'BE': [
    { code: 'BRU', label: 'בריסל' },
    { code: 'ANT', label: 'אנטוורפן' },
    { code: 'GEN', label: 'גנט' },
    { code: 'CHA', label: 'שרלרואה' },
    { code: 'LIE', label: 'ליאז\'' }
  ],
  'CH': [
    { code: 'ZUR', label: 'ציריך' },
    { code: 'GEN', label: 'ז\'נבה' },
    { code: 'BAS', label: 'באזל' },
    { code: 'BER', label: 'ברן' },
    { code: 'LAU', label: 'לוזאן' },
    { code: 'LUG', label: 'לוגאנו' }
  ],
  'NL': [
    { code: 'AMS', label: 'אמסטרדם' },
    { code: 'ROT', label: 'רוטרדם' },
    { code: 'HAG', label: 'האג' },
    { code: 'UTR', label: 'אוטרכט' },
    { code: 'EIN', label: 'איינדהובן' }
  ],
  'ES': [
    { code: 'MAD', label: 'מדריד' },
    { code: 'BAR', label: 'ברצלונה' },
    { code: 'VAL', label: 'ולנסיה' },
    { code: 'SEV', label: 'סביליה' },
    { code: 'MAL', label: 'מלגה' },
    { code: 'BIL', label: 'בילבאו' }
  ],
  'AR': [
    { code: 'BUE', label: 'בואנוס איירס' },
    { code: 'COR', label: 'קורדובה' },
    { code: 'ROS', label: 'רוסריו' },
    { code: 'MEN', label: 'מנדוסה' },
    { code: 'TUC', label: 'טוקומן' }
  ],
  'BR': [
    { code: 'SAO', label: 'סאו פאולו' },
    { code: 'RIO', label: 'ריו דה ז\'נירו' },
    { code: 'BRA', label: 'ברזיליה' },
    { code: 'SAL', label: 'סלבדור' },
    { code: 'FOR', label: 'פורטלזה' },
    { code: 'BEL', label: 'בלו הוריזונטה' }
  ],
  'ZA': [
    { code: 'JOH', label: 'יוהנסבורג' },
    { code: 'CAP', label: 'קייפטאון' },
    { code: 'DUR', label: 'דרבן' },
    { code: 'PRE', label: 'פרטוריה' },
    { code: 'BLO', label: 'בלומפונטיין' }
  ],
  'RU': [
    { code: 'MOS', label: 'מוסקבה' },
    { code: 'SPB', label: 'סנט פטרסבורג' },
    { code: 'NOV', label: 'נובוסיבירסק' },
    { code: 'YEK', label: 'יקטרינבורג' },
    { code: 'KAZ', label: 'קאזאן' },
    { code: 'SOC', label: 'סוצ\'י' }
  ],
  'JP': [
    { code: 'TOK', label: 'טוקיו' },
    { code: 'OSA', label: 'אוסקה' },
    { code: 'KYO', label: 'קיוטו' },
    { code: 'SAP', label: 'סאפורו' },
    { code: 'KOB', label: 'קובה' },
    { code: 'NAG', label: 'נגויה' }
  ],
  'KR': [
    { code: 'SEO', label: 'סיאול' },
    { code: 'BUS', label: 'בוסאן' },
    { code: 'INC', label: 'אינצ\'און' },
    { code: 'DAE', label: 'דאגו' }
  ],
  'MX': [
    { code: 'MEX', label: 'מקסיקו סיטי' },
    { code: 'GUA', label: 'גוודלחרה' },
    { code: 'MON', label: 'מונטריי' },
    { code: 'PUE', label: 'פואבלה' },
    { code: 'CAN', label: 'קנקון' }
  ]
};

// רשימת המדינות המורחבת
const countries = [
  { code: 'IL', label: 'ישראל' },
  { code: 'US', label: 'ארצות הברית' },
  { code: 'GB', label: 'בריטניה' },
  { code: 'FR', label: 'צרפת' },
  { code: 'CA', label: 'קנדה' },
  { code: 'CN', label: 'סין' },
  { code: 'UA', label: 'אוקראינה' },
  { code: 'AU', label: 'אוסטרליה' },
  { code: 'DE', label: 'גרמניה' },
  { code: 'IT', label: 'איטליה' },
  { code: 'BE', label: 'בלגיה' },
  { code: 'CH', label: 'שוויץ' },
  { code: 'NL', label: 'הולנד' },
  { code: 'ES', label: 'ספרד' },
  { code: 'AR', label: 'ארגנטינה' },
  { code: 'BR', label: 'ברזיל' },
  { code: 'ZA', label: 'דרום אפריקה' },
  { code: 'RU', label: 'רוסיה' },
  { code: 'JP', label: 'יפן' },
  { code: 'KR', label: 'דרום קוריאה' },
  { code: 'MX', label: 'מקסיקו' }
];