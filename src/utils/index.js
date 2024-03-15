import { snackbarConfig } from './snackbar-config';

export const successMessage = (message, snackbar) => {
  if (snackbar) {
    snackbar(message, snackbarConfig());
  }
};
