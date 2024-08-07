import React from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { Form, Field, Formik } from 'formik';

import { LoadingButton } from '@mui/lab';
import { useTheme } from '@mui/material/styles';
import { Close, AttachFile } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Stack,
  Button,
  Dialog,
  TextField,
  Typography,
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@mui/material';

import { LISTING_POP_TYPE } from 'src/constants/listing.constants';

// Validation Schema
const proposalValidationSchema = Yup.object({
  projectName: Yup.string().required('Project Name is required'),
  description: Yup.string().required('Description is required'),
  budget: Yup.number()
    .typeError('Budget must be a number')
    .positive('Budget must be positive')
    .required('Budget is required'),
  attachment: Yup.mixed()
    .required('A file is required')
    .test('fileFormat', 'Unsupported Format', (value) => value && value.type === 'application/pdf'),
});

const SendProposal = (props) => {
  const { open, handleClose, type } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle sx={{ pb: 0 }}>
        {type === LISTING_POP_TYPE.SEND_PROPOSAL ? 'Send Proposal' : 'Create Listing'}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <Formik
        initialValues={{
          projectName: '',
          description: '',
          budget: '',
          attachment: null,
        }}
        validationSchema={proposalValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, errors, touched }) => (
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
            <DialogContent>
              {LISTING_POP_TYPE.CREATE_LISTING === type && (
                <DialogContentText mb={2}>
                  Please provide detailed information about your project so we can match you with
                  the best companies.
                </DialogContentText>
              )}
              <Stack spacing={3}>
                <Field
                  as={TextField}
                  name="projectName"
                  label="Name of Project"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  error={touched.projectName && Boolean(errors.projectName)}
                  helperText={touched.projectName && errors.projectName}
                />
                <Field
                  as={TextField}
                  name="description"
                  label="Description"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  multiline
                  rows={4}
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                />
                <Field
                  as={TextField}
                  name="budget"
                  label="Budget"
                  fullWidth
                  margin="dense"
                  variant="outlined"
                  type="number"
                  error={touched.budget && Boolean(errors.budget)}
                  helperText={touched.budget && errors.budget}
                  InputProps={{
                    startAdornment: (
                      <Typography variant="body1" sx={{ mr: 1 }}>
                        $
                      </Typography>
                    ),
                  }}
                />
                <input
                  id="attachment"
                  name="attachment"
                  type="file"
                  onChange={(event) => {
                    setFieldValue('attachment', event.currentTarget.files[0]);
                  }}
                  hidden
                />

                <Button
                  variant="outlined"
                  component="span"
                  startIcon={<AttachFile />}
                  sx={{ mt: 2 }}
                >
                  Attach PDF
                </Button>

                {touched.attachment && Boolean(errors.attachment) && (
                  <Typography color="error" variant="caption">
                    {errors.attachment}
                  </Typography>
                )}
              </Stack>
            </DialogContent>
            <DialogActions>
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
                loadingIndicator="Submitting..."
              >
                Submit Proposal
              </LoadingButton>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

SendProposal.defaultProps = {
  type: LISTING_POP_TYPE.SEND_PROPOSAL,
};

SendProposal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default SendProposal;
