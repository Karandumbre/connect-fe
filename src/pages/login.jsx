// vendor
import { Helmet } from 'react-helmet-async';

// constants
import { NAME } from 'src/constants/app.constants';

// components
import { LoginView } from 'src/sections/login';

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> {NAME} </title>
      </Helmet>

      <LoginView />
    </>
  );
}
