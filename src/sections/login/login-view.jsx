import { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { Form, Field, Formik } from 'formik';

import { LoadingButton } from '@mui/lab';
import { alpha, useTheme } from '@mui/material/styles';
import {
  Box,
  Link,
  Card,
  Stack,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';

import { postData } from 'src/routes/api';
import { useRouter } from 'src/routes/hooks';

import storageService from 'src/utils/storage-service';

import { Logo } from 'src/components/logo';
import { bgGradient } from 'src/theme/css';
import { logIn } from 'src/store/reducers/login';
// reducers
import { stopLoading, startLoading } from 'src/store/reducers/loading';
import { LOGIN_ENDPOINT } from 'src/constants/api-endpoints.constants';

import Iconify from 'src/components/iconify';

import SignUpDialog from './signup-view';
import { validationSchema } from './validation';

const RenderForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const setAccessTokenOnSubmit = (values, setSubmitting) => {
    dispatch(startLoading);
    postData(LOGIN_ENDPOINT, values)
      .then((res) => {
        storageService.setToken(res.data);
        dispatch(logIn());
        router.push('/home');
      })
      .catch(({ response }) => {
        enqueueSnackbar(response.data.error, { variant: 'error' });
      })
      .finally(() => {
        dispatch(stopLoading);
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setAccessTokenOnSubmit(values, setSubmitting);
        }, 400);
      }}
    >
      {({ isSubmitting, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <Stack spacing={3}>
            <Field
              as={TextField}
              name="email"
              label="Email address"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            <Field
              as={TextField}
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
            <Link variant="subtitle2" underline="hover">
              Forgot password?
            </Link>
          </Stack>

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            color="inherit"
            disabled={isSubmitting}
          >
            Login
          </LoadingButton>
        </Form>
      )}
    </Formik>
  );
};

export default function LoginView() {
  const theme = useTheme();
  const [openSignupModal, setOpenSignupModal] = useState(false);

  const handleOpenSignupModal = () => {
    // Open the sign up dialog
    setOpenSignupModal(true);
  };

  const handleCloseSignupModal = () => {
    // Close the sign up dialog
    setOpenSignupModal(false);
  };
  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: '/assets/background/overlay_4.jpg',
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: 'fixed',
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="h4">Sign in to Zyncup</Typography>

          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don&apos;t have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5 }} onClick={handleOpenSignupModal}>
              Get started
            </Link>
          </Typography>

          <RenderForm />
        </Card>
      </Stack>
      <SignUpDialog open={openSignupModal} onClose={handleCloseSignupModal} />
    </Box>
  );
}
