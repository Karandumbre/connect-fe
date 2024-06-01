import React from 'react';
import PropTypes from 'prop-types';

import { Stack, Typography } from '@mui/material';

export const Heading = ({ title, content = <></> }) => (
  <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
    <Typography variant="h4">{title}</Typography>
    {content}
  </Stack>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node,
};
