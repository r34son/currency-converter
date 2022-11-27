import { useCallback, useMemo, useState } from 'react';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, PaletteMode, useMediaQuery } from '@mui/material';
import { HashRouter } from 'react-router-dom';
import PaletteModeContext from './PaletteModeContext';
import Layout from './components/Layout';
import queryClient from './queryClient';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });
  const [paletteMode, setPaletteMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');

  const toggleMode = useCallback(
    () => setPaletteMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
    [],
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme({ palette: { mode: paletteMode } }), [paletteMode]);

  return (
    <QueryClientProvider client={queryClient}>
      <PaletteModeContext.Provider value={toggleMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <HashRouter>
            <Layout />
          </HashRouter>
        </ThemeProvider>
      </PaletteModeContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
