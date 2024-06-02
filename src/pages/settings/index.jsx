import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Settings() {
  return (
    <>
      <Helmet>
        <title> Settings</title>
      </Helmet>
      <Outlet />
    </>
  );
}
