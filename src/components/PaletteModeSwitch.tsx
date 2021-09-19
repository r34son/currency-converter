import { ToggleButton, useTheme } from '@mui/material';
import { useContext } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import PaletteModeContext from '../PaletteModeContext';

const PaletteModeSwitch = () => {
  const theme = useTheme();
  const toggleMode = useContext(PaletteModeContext);

  return (
    <ToggleButton
      value=""
      size="small"
      onClick={toggleMode}
    >
      {theme.palette.mode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
    </ToggleButton>
  );
};

export default PaletteModeSwitch;
