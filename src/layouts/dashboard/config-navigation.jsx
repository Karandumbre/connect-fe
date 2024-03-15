import { Forum, Group, Groups } from '@mui/icons-material';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Collaborations & Projects',
    path: '/user',
    icon: <Groups />,
  },
  {
    title: 'Messages & Chats',
    path: '/products',
    icon: <Forum />,
  },
  {
    title: 'Profile & Portfolio',
    path: '/blog',
    icon: <Group />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Group />,
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
