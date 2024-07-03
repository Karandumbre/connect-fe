import { useRef } from 'react';
import { Form, Formik } from 'formik';
import { useSelector } from 'react-redux';

import { Box, Grid, Avatar, Button } from '@mui/material';

import { Heading, Section } from 'src/components';
import { languages } from 'src/constants/settings.constants';

import { ProfileSchema } from './validation';
import { InputWithError } from './components';
import AccountManagement from './account-settings';

const ProfileManagement = () => {
  const user = useSelector((state) => state.user);

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
            ...user,
          }}
          enableReinitialize
          validationSchema={ProfileSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, isSubmitting, errors, handleChange }) => (
            <Form>
              <Box sx={{ p: 3, pt: 0 }}>
                <Heading title="Profile Details" />
                <Box display="flex" alignItems="center" flexDirection={['column', 'row']}>
                  <Avatar
                    sx={{ width: 90, height: 90, mb: 2 }}
                    src={user.logo || '/static/mock-images/avatars/avatar_default.jpg'}
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
                    <InputWithError
                      label="First Name"
                      name="firstName"
                      errors={errors}
                      type="text"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputWithError
                      label="Last Name"
                      name="lastName"
                      errors={errors}
                      type="text"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <InputWithError
                      label="Email"
                      name="email"
                      errors={errors}
                      type="email"
                      onChange={handleChange}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <InputWithError
                      name="language"
                      label="Preferred Language"
                      errors={errors}
                      type="dropdown"
                      options={languages}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <InputWithError
                      label="Phone"
                      name="phone"
                      errors={errors}
                      type="text"
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputWithError
                      label="Designation"
                      name="designation"
                      errors={errors}
                      type="text"
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={2} sx={{ mt: 2 }}>
                  <Grid item xs={12}>
                    <InputWithError
                      label="Experience"
                      name="experience"
                      errors={errors}
                      type="text"
                      onChange={handleChange}
                    />
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
