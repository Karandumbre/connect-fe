import React from 'react';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

import { styled } from '@mui/material/styles';
import { Box, Grid, Avatar, Button } from '@mui/material';

import { Heading, Section } from 'src/components';

import {} from 'src/components/component-heading';

import AccountManagement from './account-settings';
import { Label, CustomTextField as TextField } from './label';

const Input = styled('input')({
  display: 'none',
});

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
  const handleSubmit = (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
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

                <Box>
                  <Avatar
                    sx={{ width: 90, height: 90, mb: 2 }}
                    src="/static/mock-images/avatars/avatar_default.jpg"
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    type="file"
                    onChange={(event) => {
                      setFieldValue('logo', event.currentTarget.files[0]);
                    }}
                  />
                </Box>

                {/* First Name & Last Name */}
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Label isRequired labelBold>
                      First name
                    </Label>
                    <TextField name="firstName" fullWidth />
                  </Grid>
                  <Grid item xs={6}>
                    <Label isRequired labelBold>
                      Last name
                    </Label>
                    <TextField name="lastName" fullWidth />
                  </Grid>
                </Grid>

                {/* Email & Preferred Language */}
                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={6}>
                    <Label isRequired labelBold>
                      Email address
                    </Label>

                    <TextField
                      sx={{ mt: 0 }}
                      name="email"
                      fullWidth
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={6}>
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
