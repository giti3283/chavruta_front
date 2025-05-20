import React, { useState, useMemo, createContext, useContext, useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { prefixer } from 'stylis';
// import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import getTheme from './theme';

// יצירת קונטקסט לשיתוף מצב הנושא בין קומפוננטות
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light',
});

// יצירת קאש RTL עבור emotion
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer],
});//, rtlPlugin

export const useColorMode = () => useContext(ColorModeContext);

export const ThemeProvider = ({ children }) => {
  // בדיקה אם יש העדפת מצב שמורה בלוקל סטורג'
  const storedMode = localStorage.getItem('themeMode');
  const [mode, setMode] = useState(storedMode === 'dark' ? 'dark' : 'light');

  // שמירת מצב הנושא בלוקל סטורג' בכל שינוי
  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  // פונקציה להחלפת מצב הנושא
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );

  // יצירת ערכת הנושא בהתאם למצב הנוכחי
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CacheProvider value={cacheRtl}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </CacheProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeProvider;