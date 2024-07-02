import React, { useEffect } from 'react';

import {
  Chip,
  Table,
  Paper,
  TableRow,
  useTheme,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  useMediaQuery,
  TableContainer,
} from '@mui/material';

import { Heading, Loader, Section } from 'src/components';
import { PAYMENT_DATA } from 'src/constants/settings.constants';

import { MarkAsPaid } from './mark-as-paid';

const getStatusColor = (status) => {
  switch (status) {
    case 'PAID':
      return 'success';
    case 'OPEN':
      return 'warning';
    case 'OVERDUE':
      return 'error';
    default:
      return 'default';
  }
};

const PaymentHistory = () => {
  const theme = useTheme();
  const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (PAYMENT_DATA.length === 0) {
    return (
      <Section>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <Typography variant="h5">Looks like you don&apos;t have any payment history.</Typography>
          <Typography variant="subtitle1" style={{ marginTop: '10px' }}>
            Once you make transactions, they&apos;ll appear here.
          </Typography>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
        <Heading title="Payment History" content={<MarkAsPaid />} />
        <Table aria-label="payment history table" size={isXsScreen ? 'small' : 'medium'}>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Client Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Payment ID</TableCell>
              <TableCell>Overdue Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {PAYMENT_DATA.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.clientName}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>
                  <Chip label={row.status} color={getStatusColor(row.status)} />
                </TableCell>
                <TableCell>{row.paymentID}</TableCell>
                <TableCell>{row.overdueDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Section>
  );
};

export default PaymentHistory;
