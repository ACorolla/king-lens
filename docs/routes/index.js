/*eslint-disable */
import IndexLayout from '../components/IndexLayout';
import Layout from '../components/Layout';

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
];
/*eslint-disable */