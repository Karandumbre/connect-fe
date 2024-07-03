import React from 'react';

import { Box, Skeleton } from '@mui/material';

export const Loader = () => (
  <Box>
    <Box sx={{ padding: 2, borderBottom: '1px solid #e0e0e0' }}>
      <Skeleton variant="text" width={210} height={30} />
      <Skeleton variant="text" width={190} height={30} />
      <Skeleton variant="rectangular" width="100%" height={118} />
    </Box>
    <Box sx={{ padding: 2, borderBottom: '1px solid #e0e0e0' }}>
      <Skeleton variant="text" width={210} height={30} />
      <Skeleton variant="text" width={190} height={30} />
      <Skeleton variant="rectangular" width="100%" height={118} />
    </Box>
  </Box>
);
