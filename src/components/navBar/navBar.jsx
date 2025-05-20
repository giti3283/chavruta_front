import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  useMediaQuery,
  Switch,
  FormControlLabel,
  Tooltip,
  Badge,
  Container
} from '@mui/material';
import { styled, alpha, useTheme } from '@mui/material/styles';

// Icons
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.drawer + 1,
}));

const LogoText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: '1.5rem',
  background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  alignItems: 'center',
  '& svg': {
    marginRight: theme.spacing(1),
    fontSize: '1.8rem',
  }
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  margin: theme.spacing(0, 0.5),
  fontWeight: 500,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: 0,
    height: '2px',
    background: 'white',
    transition: 'all 0.3s ease',
    transform: 'translateX(-50%)',
  },
  '&:hover::after': {
    width: '70%',
  },
  '&.active::after': {
    width: '70%',
    background: theme.palette.secondary.light,
  }
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#db2777',
    color: 'white',
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

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#7c3aed',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const NavBar = ({ darkMode, toggleDarkMode, userId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notificationsAnchorEl, setNotificationsAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  
  const isActive = (path) => {
    return location.pathname.includes(path);
  };
  
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  
  const handleNotificationsClick = (event) => {
    setNotificationsAnchorEl(event.currentTarget);
  };
  
  const handleNotificationsClose = () => {
    setNotificationsAnchorEl(null);
  };
  
  const handleProfileClick = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };
  
  const handleProfileClose = () => {
    setProfileAnchorEl(null);
  };
  
  const handleNavigation = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };
  
  const handleLogout = () => {
    // Implement logout logic here
    navigate('/');
    setProfileAnchorEl(null);
  };
  
  const menuItems = [
    { text: 'דף הבית', icon: <HomeIcon />, path: '/home' },
    { text: 'ההצעות שלי', icon: <BookIcon />, path: `/offer/${userId}` },
    { text: 'הבקשות שלי', icon: <SearchIcon />, path: `/request/${userId}` },
    { text: 'מערכת שעות', icon: <CalendarMonthIcon />, path: `/schedule/${userId}` },
    { text: 'חיפוש חברותא', icon: <SearchIcon />, path: '/chavruta-search' },
  ];
  
  const notifications = [
    { id: 1, text: 'התאמה חדשה נמצאה עבורך!', time: '10 דקות' },
    { id: 2, text: 'בקשת חברותא חדשה', time: 'שעה' },
    { id: 3, text: 'תזכורת: חברותא בעוד שעה', time: '30 דקות' },
  ];

  return (
    <>
      <StyledAppBar>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                  <LogoText variant="h6" onClick={() => navigate('/home')} sx={{ cursor: 'pointer' }}>
                    <BookIcon /> חברותא
                  </LogoText>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Tooltip title="התראות">
                    <IconButton color="inherit" onClick={handleNotificationsClick}>
                      <StyledBadge badgeContent={notifications.length} color="secondary">
                        <NotificationsIcon />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                </Box>
              </>
            ) : (
              <>
                <LogoText variant="h6" onClick={() => navigate('/home')} sx={{ cursor: 'pointer', mr: 4 }}>
                  <BookIcon /> חברותא
                </LogoText>
                <Box sx={{ flexGrow: 1, display: 'flex' }}>
                  {menuItems.map((item) => (
                    <NavButton
                      key={item.text}
                      startIcon={item.icon}
                      onClick={() => handleNavigation(item.path)}
                      className={isActive(item.path) ? 'active' : ''}
                    >
                      {item.text}
                    </NavButton>
                  ))}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FormControlLabel
                    control={
                      <MaterialUISwitch 
                        checked={darkMode} 
                        onChange={toggleDarkMode} 
                      />
                    }
                    label=""
                  />
                  <Tooltip title="התראות">
                    <IconButton color="inherit" onClick={handleNotificationsClick}>
                      <StyledBadge badgeContent={notifications.length} color="secondary">
                        <NotificationsIcon />
                      </StyledBadge>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="הפרופיל שלי">
                    <IconButton
                      onClick={handleProfileClick}
                      sx={{ ml: 1 }}
                    >
                      <Avatar 
                        sx={{ 
                          bgcolor: theme.palette.secondary.main,
                          width: 32,
                          height: 32
                        }}
                      >
                        <PersonIcon />
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </StyledAppBar>
      
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': { 
            width: 280,
            background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(180deg, #1a1c23 0%, #111827 100%)'
            : 'linear-gradient(180deg, #ffffff 0%, #f9fafb 100%)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
        },
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        p: 2,
        borderBottom: `1px solid ${theme.palette.divider}`
      }}>
        <LogoText variant="h6" sx={{ 
          fontSize: '1.2rem',
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(135deg, #a5b4fc 0%, #c4b5fd 50%, #f9a8d4 100%)'
            : 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%)',
        }}>
          <BookIcon /> חברותא
        </LogoText>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      
      <Box sx={{ p: 2 }}>
        <FormControlLabel
          control={
            <MaterialUISwitch 
              checked={darkMode} 
              onChange={toggleDarkMode} 
            />
          }
          label={darkMode ? "מצב לילה" : "מצב יום"}
          sx={{ mb: 1, width: '100%', justifyContent: 'space-between' }}
        />
      </Box>
      
      <Divider />
      
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            key={item.text}
            onClick={() => handleNavigation(item.path)}
            sx={{ 
              borderRadius: '8px', 
              mb: 0.5, 
              mx: 1,
              bgcolor: isActive(item.path) 
                ? alpha(theme.palette.primary.main, 0.1)
                : 'transparent',
              color: isActive(item.path)
                ? theme.palette.primary.main
                : theme.palette.text.primary,
              '&:hover': {
                bgcolor: alpha(theme.palette.primary.main, 0.05),
              }
            }}
          >
            <ListItemIcon sx={{ 
              color: isActive(item.path) 
                ? theme.palette.primary.main
                : theme.palette.text.secondary,
              minWidth: '40px'
            }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      
      <Divider />
      
      <List>
        <ListItem 
          button 
          onClick={handleLogout}
          sx={{ 
            borderRadius: '8px', 
            mb: 0.5, 
            mx: 1,
            color: theme.palette.error.main,
            '&:hover': {
              bgcolor: alpha(theme.palette.error.main, 0.05),
            }
          }}
        >
          <ListItemIcon sx={{ color: theme.palette.error.main, minWidth: '40px' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="התנתקות" />
        </ListItem>
      </List>
    </Drawer>
    
    {/* Notifications Menu */}
    <Menu
      anchorEl={notificationsAnchorEl}
      open={Boolean(notificationsAnchorEl)}
      onClose={handleNotificationsClose}
      PaperProps={{
        elevation: 3,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
          mt: 1.5,
          width: 320,
          borderRadius: '12px',
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <Box sx={{ p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>התראות</Typography>
      </Box>
      {notifications.length > 0 ? (
        <>
          {notifications.map((notification) => (
            <MenuItem key={notification.id} onClick={handleNotificationsClose} sx={{ py: 1.5 }}>
              <Box sx={{ width: '100%' }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {notification.text}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  לפני {notification.time}
                </Typography>
              </Box>
            </MenuItem>
          ))}
          <Box sx={{ p: 1, borderTop: `1px solid ${theme.palette.divider}`, textAlign: 'center' }}>
            <Button 
              size="small" 
              sx={{ 
                borderRadius: '20px',
                color: theme.palette.primary.main,
                '&:hover': {
                  bgcolor: alpha(theme.palette.primary.main, 0.05),
                }
              }}
            >
              צפייה בכל ההתראות
            </Button>
          </Box>
        </>
      ) : (
        <Box sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            אין התראות חדשות
          </Typography>
        </Box>
      )}
    </Menu>
    
    {/* Profile Menu */}
    <Menu
      anchorEl={profileAnchorEl}
      open={Boolean(profileAnchorEl)}
      onClose={handleProfileClose}
      PaperProps={{
        elevation: 3,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.1))',
          mt: 1.5,
          width: 220,
          borderRadius: '12px',
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Avatar 
          sx={{ 
            width: 60, 
            height: 60, 
            mx: 'auto', 
            mb: 1,
            bgcolor: theme.palette.primary.main 
          }}
        >
          <PersonIcon fontSize="large" />
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {userId || 'משתמש'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          משתמש חברותא
        </Typography>
      </Box>
      <Divider />
      <MenuItem onClick={() => { handleNavigation(`/profile/${userId}`); handleProfileClose(); }}>
        <ListItemIcon>
          <AccountCircleIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="body2">הפרופיל שלי</Typography>
      </MenuItem>
      <MenuItem onClick={() => { handleNavigation(`/schedule/${userId}`); handleProfileClose(); }}>
        <ListItemIcon>
          <CalendarMonthIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="body2">מערכת שעות</Typography>
      </MenuItem>
      <MenuItem onClick={() => { handleNavigation('/settings'); handleProfileClose(); }}>
        <ListItemIcon>
          <SettingsIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="body2">הגדרות</Typography>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout} sx={{ color: theme.palette.error.main }}>
        <ListItemIcon sx={{ color: theme.palette.error.main }}>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        <Typography variant="body2">התנתקות</Typography>
      </MenuItem>
    </Menu>
  </>
);
};

export default NavBar;