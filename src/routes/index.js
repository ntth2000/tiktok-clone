import routesConfig from '~/config/routes';
//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
//layouts
import { HeaderOnly } from '~/components/Layouts';
export const publicRoutes = [
    {
        path: routesConfig.home,
        component: Home,
    },
    {
        path: routesConfig.following,
        component: Following,
    },
    {
        path: routesConfig.profile,
        component: Profile,
    },
    {
        path: routesConfig.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: routesConfig.upload,
        component: Upload,
    },
];

export const privateRoutes = [];
