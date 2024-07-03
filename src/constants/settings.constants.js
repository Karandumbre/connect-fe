export const PAYMENT_DATA = [
  {
    id: 1,
    date: '2024-01-15',
    clientName: 'Client A',
    amount: '$2000',
    status: 'PAID',
    paymentID: 'PAY001',
    overdueDate: null, // No overdue date necessary for paid payments
  },
  {
    id: 2,
    date: '2024-02-15',
    clientName: 'Client B',
    amount: '$1500',
    status: 'OVERDUE',
    paymentID: 'PAY002',
    overdueDate: '2024-02-25', // Example overdue date for pending payment
  },
  {
    id: 3,
    date: '2024-03-15',
    clientName: 'Client C',
    amount: '$2500',
    status: 'PAID',
    paymentID: 'PAY003',
    overdueDate: null,
  },
  {
    id: 4,
    date: '2024-04-15',
    clientName: 'Client D',
    amount: '$1000',
    status: 'OPEN',
    paymentID: 'PAY004',
    overdueDate: '2024-04-25', // Example overdue date for failed payment
  },
];

export const languages = [
  {
    value: 'en',
    label: 'English',
  },
  {
    value: 'es',
    label: 'Spanish',
  },
  {
    value: 'fr',
    label: 'French',
  },
  {
    value: 'de',
    label: 'German',
  },
];

export const countries = [
  {
    value: 'IN',
    label: 'India',
  },
  {
    value: 'US',
    label: 'United States',
  },
  {
    value: 'CA',
    label: 'Canada',
  },
  {
    value: 'GB',
    label: 'United Kingdom',
  },
  {
    value: 'AU',
    label: 'Australia',
  },
  {
    value: 'DE',
    label: 'Germany',
  },
  {
    value: 'FR',
    label: 'France',
  },
];
