import * as Yup from 'yup';
import { Form, Field, Formik } from 'formik';
import React, { useRef, useState } from 'react';

import { CloseRounded } from '@mui/icons-material';
import {
  Box,
  Grid,
  Avatar,
  Button,
  Dialog,
  MenuItem,
  DialogTitle,
  DialogActions,
  DialogContent,
} from '@mui/material';

import { Section, Heading } from 'src/components';

import { Label, CustomTextField as TextField } from './label';

const countries = ['USA', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France'];

const DialogSchema = Yup.object().shape({
  companyName: Yup.string().required('Company name is required'),
  description: Yup.string().required('Description is required'),
  addressLine1: Yup.string().required('Address line 1 is required'),
  addressLine2: Yup.string(),
  city: Yup.string().required('City is required'),
  zipCode: Yup.string().required('Zip code is required'),
  country: Yup.string().required('Country is required'),
});

const CompanyDetails = () => {
  const fileInputRef = useRef(null);

  const handleAvatarClick = () => {
    fileInputRef.current.click(); // This will trigger the hidden file input
  };

  const defaultValues = {
    companyName: 'Evermont',
    description: 'Leading provider of tech solutions.',
    addressLine1: '123 Tech Lane',
    addressLine2: 'Suite 100',
    city: 'Innovation City',
    zipCode: '12345',
    country: 'USA',
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
          initialValues={defaultValues}
          validationSchema={DialogSchema}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            handleClose();
          }}
        >
          {({ handleSubmit }) => (
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
                    <Label isRequired labelBold>
                      Company Name
                    </Label>
                    <Field
                      as={TextField}
                      name="companyName"
                      fullWidth
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Label isRequired labelBold>
                      Description
                    </Label>
                    <Field
                      as={TextField}
                      name="description"
                      fullWidth
                      multiline
                      rows={2}
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Label isRequired labelBold>
                      Address Line 1
                    </Label>
                    <Field
                      as={TextField}
                      name="addressLine1"
                      fullWidth
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Label labelBold>Address Line 2</Label>
                    <Field
                      as={TextField}
                      name="addressLine2"
                      fullWidth
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Label isRequired labelBold>
                      City
                    </Label>
                    <Field as={TextField} name="city" fullWidth inputProps={{ readOnly: true }} />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Label isRequired labelBold>
                      Zip Code
                    </Label>
                    <Field
                      as={TextField}
                      name="zipCode"
                      fullWidth
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Label isRequired labelBold>
                      Country
                    </Label>
                    <Field
                      as={TextField}
                      name="country"
                      fullWidth
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
            initialValues={defaultValues}
            validationSchema={DialogSchema}
            onSubmit={(values, actions) => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              handleClose();
            }}
          >
            {({ isSubmitting }) => (
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
                    <Label isRequired labelBold>
                      Company Name
                    </Label>
                    <Field as={TextField} name="companyName" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <Label isRequired labelBold>
                      Description
                    </Label>
                    <Field as={TextField} name="description" fullWidth multiline rows={2} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Label isRequired labelBold>
                      Address Line 1
                    </Label>
                    <Field as={TextField} name="addressLine1" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Label isRequired labelBold>
                      Address Line 2
                    </Label>
                    <Field as={TextField} name="addressLine2" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Label isRequired labelBold>
                      City
                    </Label>
                    <Field as={TextField} name="city" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Label isRequired labelBold>
                      Zip Code
                    </Label>
                    <Field as={TextField} name="zipCode" fullWidth />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Label isRequired labelBold>
                      Country
                    </Label>
                    <Field as={TextField} name="country" fullWidth select>
                      {countries.map((country) => (
                        <MenuItem key={country} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </Field>
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
