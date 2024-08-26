import * as React from 'react';

import { PaletteMode } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';

interface ToggleThemeProps {
  mode: PaletteMode;
  onToggle: () => void;
}

function ToggleTheme({ mode, onToggle }: ToggleThemeProps) {
  return (
    <IconButton
      onClick={onToggle}
      color="primary"
      aria-label="Theme toggle button"
      sx={{
        height: 'fit-content'
      }}
    >
      {mode === 'dark' ? (
        <WbSunnyRoundedIcon fontSize="small" />
      ) : (
        <ModeNightRoundedIcon fontSize="small" />
      )}
    </IconButton>
  );
}

export default ToggleTheme;