import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import React, { useRef } from 'react';

import { Box, Grid, Avatar, Button } from '@mui/material';

import { Heading, Section } from 'src/components';

import AccountManagement from './account-settings';
import { Label, CustomTextField as TextField } from './label';

// Validation schema
const ProfileSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  preferredLanguage: Yup.string().required('Preferred language is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});

const ProfileManagement = () => {
  const fileInputRef = useRef(null);
  const handleSubmit = (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  };

  const handleAvatarClick = () => {
    fileInputRef.current.click(); // This will trigger the hidden file input
  };

  return (
    <>
      <Section>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            preferredLanguage: '',
            logo: null,
          }}
          validationSchema={ProfileSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form>
              <Box sx={{ p: 3, pt: 0 }}>
                <Heading title="Profile Details" />
                <Box display="flex" alignItems="center" flexDirection={['column', 'row']}>
                  <Avatar
                    sx={{ width: 90, height: 90, mb: 2 }}
                    src="/static/mock-images/avatars/avatar_default.jpg"
                  />
                  <input
                    ref={fileInputRef}
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    style={{ display: 'none' }}
                    onChange={(event) => {
                      setFieldValue('logo', event.currentTarget.files[0]);
                    }}
                  />
                  <Button
                    sx={{ ml: [0, '12px'] }}
                    variant="outlined"
                    color="primary"
                    component="span"
                    onClick={handleAvatarClick} // Call the function to trigger click
                  >
                    Upload
                  </Button>
                </Box>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Label isRequired labelBold>
                      First name
                    </Label>
                    <TextField name="firstName" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Label isRequired labelBold>
                      Last name
                    </Label>
                    <TextField name="lastName" fullWidth />
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <Label isRequired labelBold>
                      Email address
                    </Label>
                    <TextField name="email" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Label isRequired labelBold>
                      Preferred Language
                    </Label>
                    <TextField name="preferredLanguage" fullWidth />
                  </Grid>
                </Grid>

                <Button type="submit" variant="contained" sx={{ mt: 3 }} disabled={isSubmitting}>
                  Update Profile
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Section>
      <AccountManagement />
    </>
  );
};

export default ProfileManagement;
