import React, { useRef, useState } from 'react';

import { Send, CloseRounded } from '@mui/icons-material';
import {
  Button,
  Dialog,
  MenuItem,
  FormControl,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

import { PAYMENT_DATA } from 'src/constants/settings.constants';

import { Label, CustomTextField as TextField } from './components';

export const MarkAsPaid = () => {
  const [open, setOpen] = useState(false);
  const [selectedPaymentId, setSelectedPaymentId] = useState('');
  const [file, setFile] = useState(null);

  const fileInputRef = useRef(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setSelectedPaymentId(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleVerify = () => {
    console.log('Payment ID:', selectedPaymentId, 'File:', file);
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Mark As Paid
      </Button>
      <Dialog
        open={open}
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleClose();
          }
        }}
        PaperProps={{
          sx: {
            width: ['100%', 400],
            margin: [0, 'initial'],
            height: ['100%', 'initial'],
            maxHeight: ['100%', 'initial'],
          },
        }}
      >
        <DialogTitle display="flex" alignItems="center" justifyContent="space-between">
          Verify Payment{' '}
          <CloseRounded
            sx={{
              cursor: 'pointer',
              ml: 1,
            }}
            onClick={handleClose}
          />
        </DialogTitle>
        <DialogContent>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <Label>Select payment ID</Label>
            <TextField select value={selectedPaymentId} onChange={handleChange}>
              {PAYMENT_DATA.filter((payment) => payment.status !== 'PAID').map((payment) => (
                <MenuItem key={payment.id} value={payment.paymentID}>
                  {payment.paymentID} - {payment.clientName} - {payment.status} - {payment.amount}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <Button
            variant="outlined"
            component="span"
            sx={{ my: 2 }}
            fullWidth
            onClick={handleFileButtonClick}
          >
            Upload File
          </Button>
          <input ref={fileInputRef} type="file" hidden onChange={handleFileChange} accept=".pdf" />
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'space-between',
            px: 3,
            pb: 2,
          }}
        >
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleVerify} variant="contained" color="primary">
            Send <Send fontSize="small" sx={{ ml: 1 }} />
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
