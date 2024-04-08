import { Forum, Group, Groups } from '@mui/icons-material';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

// const SIDEBAR_MENU_CONSTANTS = {
//   dashboard:'dashboard',
//   user:'user'
//   products:'products',
// }

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Marketplace',
    path: '/marketplace',
    icon: <Groups />,
  },
  {
    title: 'Collaborations & Projects',
    path: '/user',
    icon: <Groups />,
  },
  // {
  //   title: 'User',
  //   path: '/user',
  //   icon: <Groups />,
  // },
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
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
