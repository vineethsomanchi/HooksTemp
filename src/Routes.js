import Home from './Home'
import Test1 from './Test1';
import Test2 from './Test2';



const Routes = [
    {
        path: '/',
        sidebarName: 'Home',
        component: Home
    },
    {
        path: '/test1',
        sidebarName: 'Test 1',
        component: Test1
    },
    {
        path: '/test2',
        sidebarName: 'Test 2',
        component: Test2
    },
];

export default Routes;