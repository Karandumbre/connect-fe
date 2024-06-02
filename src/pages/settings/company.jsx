import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';

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

// Dialog Form Validation Schema
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
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (values, actions) => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  };

  return (
    <>
      <Section>
        <Formik onSubmit={handleSubmit}>
          {() => (
            <Form>
              <Box sx={{ p: 3, pt: 0 }}>
                <Heading title="Company Details" />

                <Avatar
                  sx={{ width: 90, height: 90, mb: 2 }}
                  src="/static/mock-images/avatars/avatar_default.jpg"
                />

                {/* Company Details */}
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Label isRequired labelBold>
                      Company Name
                    </Label>
                    <TextField
                      name="companyName"
                      value="Evermont"
                      fullWidth
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Label isRequired labelBold>
                      Description
                    </Label>
                    <TextField
                      name="description"
                      value="Leading provider of tech solutions."
                      fullWidth
                      multiline
                      rows={2}
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Label isRequired labelBold>
                      Address Line 1
                    </Label>
                    <TextField
                      name="addressLine1"
                      fullWidth
                      inputProps={{ readOnly: true }}
                      value="123 Tech Lane"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Label labelBold>Address Line 2</Label>
                    <TextField
                      name="addressLine2"
                      fullWidth
                      inputProps={{ readOnly: true }}
                      value="Suite 100"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Label isRequired labelBold>
                      City
                    </Label>
                    <TextField
                      name="city"
                      fullWidth
                      inputProps={{ readOnly: true }}
                      value="Innovation City"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Label isRequired labelBold>
                      Zip Code
                    </Label>
                    <TextField
                      name="zipCode"
                      fullWidth
                      inputProps={{ readOnly: true }}
                      value="12345"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Label isRequired labelBold>
                      Country
                    </Label>
                    <TextField
                      name="country"
                      fullWidth
                      value="USA"
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

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Request Changes</DialogTitle>
        <Formik
          initialValues={{
            companyName: 'Evermont',
            description: 'Leading provider of tech solutions.',
            addressLine1: '123 Tech Lane',
            addressLine2: 'Suite 100',
            city: 'Innovation City',
            zipCode: '12345',
            country: 'USA',
          }}
          validationSchema={DialogSchema}
          onSubmit={(values, actions) => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            handleClose();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Label isRequired labelBold>
                      Company name
                    </Label>
                    <TextField name="companyName" fullWidth />
                  </Grid>
                  <Grid item xs={12}>
                    <Label isRequired labelBold>
                      Description
                    </Label>
                    <TextField name="description" fullWidth multiline rows={2} />
                  </Grid>
                  <Grid item xs={6}>
                    <Label isRequired labelBold>
                      Address line 1
                    </Label>
                    <TextField name="addressLine1" fullWidth />
                  </Grid>
                  <Grid item xs={6}>
                    <Label isRequired labelBold>
                      Address line 2
                    </Label>
                    <TextField name="addressLine2" fullWidth />
                  </Grid>
                  <Grid item xs={4}>
                    <Label isRequired labelBold>
                      City
                    </Label>
                    <TextField name="city" fullWidth />
                  </Grid>
                  <Grid item xs={4}>
                    <Label isRequired labelBold>
                      Zip code
                    </Label>
                    <TextField name="zipCode" fullWidth />
                  </Grid>
                  <Grid item xs={4}>
                    <Label isRequired labelBold>
                      Country
                    </Label>
                    <TextField name="country" fullWidth select>
                      {countries.map((country) => (
                        <MenuItem key={country} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} variant="outlined" type="primary">
                  Cancel
                </Button>
                <Button type="primary" variant="contained" disabled={isSubmitting}>
                  Submit Request
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </>
  );
};

export default CompanyDetails;
