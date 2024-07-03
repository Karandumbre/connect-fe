import PropTypes from 'prop-types';

import { Box, Typography } from '@mui/material';

export const ErrorComponent = ({ message }) => {
  <Box
    sx={{
      width: '100%',
      padding: 2,
      backgroundColor: 'error.main',
      color: 'white',
      borderRadius: 1,
    }}
  >
    <Typography variant="body1">{message}</Typography>
  </Box>;
};

ErrorComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
