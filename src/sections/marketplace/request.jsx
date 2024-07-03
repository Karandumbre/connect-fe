import React, { useState } from 'react';

import { Box, Button, Tooltip } from '@mui/material';

import { LISTING_POP_TYPE } from 'src/constants/listing.constants';

import SendProposal from './send-proposal';

export const RequestDialog = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box display="flex" justifyContent="flex-end" sx={{ mb: 1 }}>
        <Tooltip
          title=" If you are unable to find a company that matches your requirements, simply create a listing
        with your project details. We will review it and suggest companies that align with your
        needs, who will then respond with tailored quotations."
          arrow
        >
          <Button variant="outlined" color="primary" onClick={handleOpen}>
            Create Listing
          </Button>
        </Tooltip>
      </Box>
      <SendProposal open={open} handleClose={handleClose} type={LISTING_POP_TYPE.CREATE_LISTING} />
      {/* <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Your Project Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide detailed information about your project so we can match you with the best
            companies.
          </DialogContentText>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <TextField fullWidth label="Project Title" variant="outlined" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Project Description"
                variant="outlined"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Estimated Budget" variant="outlined" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
};
