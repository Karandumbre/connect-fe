import * as Yup from 'yup';

export const CompanySchema = Yup.object().shape({
  companyName: Yup.string().required('Company name is required'),
  description: Yup.string().required('Description is required'),
  addressLine1: Yup.string().required('Address line 1 is required'),
  addressLine2: Yup.string(),
  city: Yup.string().required('City is required'),
  zipCode: Yup.string().required('Zip code is required'),
  countryCode: Yup.string().required('Country is required'),
});

export const ProfileSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  language: Yup.string().required('Preferred language is required'),
  phone: Yup.string().required('Phone is required'),
  designation: Yup.string().required('Designation is required'),
  experience: Yup.string().required('Experience is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
