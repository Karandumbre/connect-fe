import PropTypes from 'prop-types';

import { Forum, Group, Groups } from '@mui/icons-material';

import SvgColor from 'src/components/svg-color';

const Icon = ({ name }) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

Icon.propTypes = {
  name: PropTypes.string,
};

const navConfig = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <Icon name="ic_analytics" />,
  },
  {
    title: 'Marketplace',
    path: '/marketplace',
    icon: <Groups />,
  },
  {
    title: 'Messages & Chats',
    path: '/messages',
    icon: <Forum />,
  },
  {
    title: 'Team',
    path: '/user',
    icon: <Icon name="ic_user" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Group />,
    children: [
      { title: 'Profile Management', path: '/profile' },
      { title: 'Account Settings', path: '/account' },
      { title: 'Billing & Subscription', path: '/billing' },
      { title: 'Security Settings', path: '/security' },
    ],
  },
];

export default navConfig;
