import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Loader() {
  return (
<Box sx={{ position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: 9999 }}>

      <LinearProgress />
    </Box>
  );
}