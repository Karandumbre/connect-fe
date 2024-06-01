import * as Yup from 'yup';

// Validation schema
export const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

// Validation schema
export const companyValidationSchema = Yup.object().shape({
  country: Yup.string().required('Required'),
  companyName: Yup.string().required('Required'),
});

export const signupValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});
