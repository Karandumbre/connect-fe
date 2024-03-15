import { Grow, Zoom, Fade, Slide, Collapse } from '@mui/material';

export const snackbarConfig = (snackbarConfigObj) => {
  const {
    animation = 'Grow',
    horizontal = 'center',
    vertical = 'bottom',
    type = 'success',
    duration = 3000,
  } = snackbarConfigObj || {};

  const transition = {
    Collapse,
    Grow,
    Zoom,
    Slide,
    Fade,
  };

  return {
    TransitionComponent: transition[animation],
    autoHideDuration: duration,
    anchorOrigin: {
      horizontal,
      vertical,
    },
    variant: type,
  };
};
