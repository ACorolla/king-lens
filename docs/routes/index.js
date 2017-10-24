/*eslint-disable */
import IndexLayout from '../components/IndexLayout';
import Layout from '../components/Layout';
import Demo from '../components/Demo';

import Index from '../pages/Index.md';


export default [
  {
    path: '',
    component: IndexLayout,
    childRoutes: [
      {
        path: '/',
        component: Index,
      }
    ],
  },
  {
    path: 'components',
    component: Layout,
    childRoutes: [
    ],
  },
  {
    path: 'demo',
    component: Demo,
    childRoutes: [
    ],
  },
];
/*eslint-disable */