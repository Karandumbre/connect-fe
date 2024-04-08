import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
  Dialog,
  Button,
  useTheme,
  TextField,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

function SignUpDialog({ open, onClose }) {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const maxSteps = 3;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField
              autoFocus
              margin="dense"
              id="country"
              label="Country"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="company-name"
              label="Company Name"
              type="text"
              fullWidth
              variant="outlined"
            />
          </>
        );
      case 1:
        return (
          <>
            <TextField
              autoFocus
              margin="dense"
              id="first-name"
              label="First Name"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="last-name"
              label="Last Name"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="phone"
              label="Phone"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
            />
          </>
        );
      case 2:
        return (
          <Typography variant="body1" component="p">
            Review and confirm your details.
          </Typography>
        );
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
      <DialogContent>{getStepContent(activeStep)}</DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between' }}>
        <Button onClick={activeStep === 0 ? onClose : handleBack} color="primary">
          {activeStep > 0 && <KeyboardArrowLeft />}
          {activeStep === 0 ? 'Cancel' : 'Back'}
        </Button>
        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
          Next
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

SignUpDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SignUpDialog;
