import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@mui/material';

import { hexToRGBA } from 'src/utils';

export const Section = ({ children }) => (
  <Box
    sx={{
      background: '#fff',
      boxShadow: `0 4px 8px ${hexToRGBA('#D9DBF2', 0.5)}`,
      borderRadius: '8px',
      padding: '32px 32px 8px',
      marginBottom: '32px',
    }}
  >
    {children}
  </Box>
);

Section.propTypes = {
  children: PropTypes.node,
};
