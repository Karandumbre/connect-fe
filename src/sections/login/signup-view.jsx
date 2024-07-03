import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Form, Field, Formik } from 'formik';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
  Stack,
  Dialog,
  Button,
  useTheme,
  TextField,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

import { useResponsive } from 'src/hooks/use-responsive';

import { signupValidationSchema, companyValidationSchema } from './validation';

function SignUpDialog({ open, onClose }) {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const maxSteps = 3;
  const mobileDevice = useResponsive('down', 'sm');

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = ({ step, touched, handleChange, handleBlur, errors }) => {
    switch (step) {
      case 0:
        return (
          <>
            <Field
              autoFocus
              as={TextField}
              name="country"
              label="Country"
              error={touched.country && Boolean(errors.country)}
              helperText={touched.country && errors.country}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              as={TextField}
              label="Company Name"
              name="companyName"
              error={touched.companyName && Boolean(errors.companyName)}
              helperText={touched.companyName && errors.companyName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </>
        );
      case 1:
        return (
          <>
            <Field
              as={TextField}
              label="First Name"
              name="firstName"
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              autoFocus
            />
            <TextField
              as={TextField}
              label="Last Name"
              name="lastName"
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              as={TextField}
              label="Phone"
              name="phone"
              error={touched.phone && Boolean(errors.phone)}
              helperText={touched.phone && errors.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              as={TextField}
              id="email"
              label="Email Address"
              name="email"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextField
              as={TextField}
              label="Password"
              type="password"
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
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
    <Dialog open={open} onClose={onClose} fullScreen={mobileDevice}>
      <DialogTitle id="form-dialog-title">Create an account</DialogTitle>
      <DialogContent
        sx={{
          minHeight: '300px',
        }}
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={
            // eslint-disable-next-line no-nested-ternary
            activeStep === 0
              ? companyValidationSchema
              : activeStep === 1
                ? signupValidationSchema
                : null
          }
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);

            onClose();
          }}
        >
          {({ isSubmitting, errors, touched, handleChange, handleSubmit, handleBlur }) => (
            <Form>
              <Stack spacing={3}>
                {getStepContent({
                  step: activeStep,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  handleBlur,
                })}
              </Stack>
            </Form>
          )}
        </Formik>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'space-between', pb: 2, px: 3 }}>
        <Button
          variant="outlined"
          type="ghost"
          onClick={activeStep === 0 ? onClose : handleBack}
          color="primary"
        >
          {activeStep > 0 && <KeyboardArrowLeft />}
          {activeStep === 0 ? 'Cancel' : 'Back'}
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
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
