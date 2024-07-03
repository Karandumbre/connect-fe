import { useRef, useState } from 'react';
import { Form, Formik } from 'formik';
import { useSelector } from 'react-redux';

import { CloseRounded } from '@mui/icons-material';
import {
  Box,
  Grid,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material';

import { Section, Heading } from 'src/components';
import { countries } from 'src/constants/settings.constants';

import { CompanySchema } from './validation';
import { InputWithError } from './components';

const CompanyDetails = () => {
  const fileInputRef = useRef(null);
  const companyDetails = useSelector((state) => state.company);

  const handleAvatarClick = () => {
    fileInputRef.current.click(); // This will trigger the hidden file input
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAvatarChange = (file) => {
    console.log(file);
  };

  return (
    <>
      <Section>
        <Formik
          initialValues={{
            ...companyDetails,
            ...companyDetails.address,
          }}
          validationSchema={CompanySchema}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            handleClose();
          }}
        >
          {({ handleSubmit, errors, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <Box sx={{ p: 3 }}>
                <Heading title="Company Details" />
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
                      handleAvatarChange(event.currentTarget.files[0]);
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
                      label="Company Name"
                      name="name"
                      type="text"
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputWithError
                      label="Description"
                      name="description"
                      type="text"
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputWithError
                      label="Address Line 1"
                      name="addressLine1"
                      type="text"
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputWithError
                      label="Address Line 2"
                      name="addressLine2"
                      type="text"
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <InputWithError
                      label="City"
                      name="city"
                      type="text"
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <InputWithError
                      label="Zip Code"
                      name="zipcode"
                      type="text"
                      errors={errors}
                      onChange={handleChange}
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <InputWithError
                      label="Country"
                      name="countryCode"
                      type="text"
                      errors={errors}
                      onChange={handleChange}
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                </Grid>

                <Button onClick={handleOpen} variant="outlined" sx={{ mt: 3 }}>
                  Request to Update Company Details
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Section>

      <Dialog
        open={open}
        fullWidth
        maxWidth="sm"
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleClose();
          }
        }}
        PaperProps={{
          sx: {
            width: ['100%', 'initial'],
            margin: [0, 'initial'],
            height: ['100%', 'initial'],
            maxHeight: ['100%', 'initial'],
          },
        }}
      >
        <DialogTitle display="flex" alignItems="center" justifyContent="space-between">
          Request Changes{' '}
          <CloseRounded
            sx={{
              cursor: 'pointer',
              ml: 1,
            }}
            onClick={handleClose}
          />
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              ...companyDetails,
              ...companyDetails.address,
            }}
            validationSchema={CompanySchema}
            onSubmit={(values, actions) => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              handleClose();
            }}
          >
            {({ isSubmitting, handleChange, errors }) => (
              <Form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  '@media (min-width: 600px)': {
                    flexDirection: 'row',
                  },
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputWithError
                      label="Company Name"
                      name="name"
                      type="text"
                      errors={errors}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputWithError
                      label="Description"
                      name="description"
                      type="text"
                      errors={errors}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputWithError
                      label="Address Line 1"
                      name="addressLine1"
                      type="text"
                      errors={errors}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputWithError
                      label="Address Line 2"
                      name="addressLine2"
                      type="text"
                      errors={errors}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <InputWithError
                      label="City"
                      name="city"
                      type="text"
                      errors={errors}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <InputWithError
                      label="Zip Code"
                      name="zipcode"
                      type="text"
                      errors={errors}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <InputWithError
                      label="Country"
                      name="countryCode"
                      type="dropdown"
                      errors={errors}
                      onChange={handleChange}
                      options={countries}
                    />
                  </Grid>
                </Grid>
                <DialogActions sx={{ justifyContent: 'space-between', mt: 2 }}>
                  <Button onClick={handleClose} variant="outlined">
                    Cancel
                  </Button>
                  <Button type="submit" variant="contained" disabled={isSubmitting}>
                    Submit Request
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CompanyDetails;
