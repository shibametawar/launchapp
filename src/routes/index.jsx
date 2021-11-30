import { useRoutes } from 'react-router-dom';
import PageHome from '../pages/home';
import PageNotFound from '../pages/not-found';

const routes = [
    { path: '/', element: <PageHome /> },
    { path: '/dashboard', element: <PageHome />  },
    { path: '/summon', element: <PageHome />  },
    { path: '/comming-soon', element: <PageHome />  },
    // Not found routes work as you'd expect, always in the end of array
    { path: '*', element: <PageNotFound /> },
];

const Routes = () => useRoutes(routes);

export default Routes;
