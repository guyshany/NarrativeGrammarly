import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box id="circularLoader" sx={{ display: 'flex', justifyContent: "center", height: '395px', alignItems: "center" }}>
      <CircularProgress />
    </Box>
  );
}
