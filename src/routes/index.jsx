import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import { Layout } from 'src/layout';

export const IndexPage = lazy(() => import('src/pages/app'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const MessagePage = lazy(() => import('src/pages/messages'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const Marketplace = lazy(() => import('src/pages/marketplace'));
export const Settings = lazy(() => import('src/pages/settings'));

// Lazy load each component
const ProfileManagement = lazy(() => import('src/pages/settings/profile-management'));
const AccountSettings = lazy(() => import('src/pages/settings/account-settings'));
const BillingSubscription = lazy(() => import('src/pages/settings/billing-subscription'));
const SecuritySettings = lazy(() => import('src/pages/settings/security-settings'));

export default function Router() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);

  const routes = useRoutes([
    {
      element: isLoggedIn ? (
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Layout>
      ) : (
        <Navigate to="/login" replace />
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'marketplace', element: <Marketplace /> },
        { path: 'user', element: <UserPage /> },
        { path: 'messages', element: <MessagePage /> },
        {
          path: 'settings',
          element: <Settings />,
          children: [
            { path: '', element: <Navigate to="profile" replace /> },
            { path: 'profile', element: <ProfileManagement /> },
            { path: 'account', element: <AccountSettings /> },
            { path: 'billing', element: <BillingSubscription /> },
            { path: 'security', element: <SecuritySettings /> },
          ],
        },
      ],
    },
    {
      path: 'login',
      element: !isLoggedIn ? <LoginPage /> : <Navigate to="/" replace />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
