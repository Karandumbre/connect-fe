import React from 'react';
import * as Yup from 'yup';
import { Form, Field, Formik } from 'formik';

import { Box, Grid, Button, Switch, Typography, FormControlLabel } from '@mui/material';

import { Section, Heading } from 'src/components';

import { Label, CustomTextField as TextField } from './label'; // Assuming Label is a custom component for styled labels

// Validation schema
const SettingsSchema = Yup.object().shape({
  currentPassword: Yup.string().min(8, 'Password must be at least 8 characters long'),
  newPassword: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .notOneOf([Yup.ref('currentPassword'), null], 'New password must be different'),
  confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
});

const AccountSettings = () => {
  const handleSubmit = (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  };

  return (
    <Section>
      <Formik
        initialValues={{
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
          emailNotifications: false,
          pushNotifications: false,
        }}
        validationSchema={SettingsSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box sx={{ p: 2 }}>
              <Heading title="Account Management" />

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Label isRequired labelBold>
                    Current Password
                  </Label>
                  <TextField type="password" name="currentPassword" fullWidth />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Label isRequired labelBold>
                    New Password
                  </Label>
                  <TextField type="password" name="newPassword" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Label isRequired labelBold>
                    Confirm New Password
                  </Label>
                  <TextField type="password" name="confirmPassword" fullWidth />
                </Grid>
              </Grid>

              <Box mt={4}>
                <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                  Notification Settings
                </Typography>
                <FormControlLabel
                  control={<Field component={Switch} type="checkbox" name="emailNotifications" />}
                  label="Email Notifications"
                />
                <FormControlLabel
                  control={<Field component={Switch} type="checkbox" name="pushNotifications" />}
                  label="Push Notifications"
                />
              </Box>

              <Button variant="contained" sx={{ mt: 3 }} disabled={isSubmitting}>
                Save Changes
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default AccountSettings;
