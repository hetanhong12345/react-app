// author: DELL
// created:2018/4/18 14:48
import React from 'react';
import {renderRoutes} from 'react-router-config';
import lazyLoad from 'react-lazy-import';
import {Link} from 'react-router-dom';

const Root = ({route}) => (
    <div>
        <h1>Root</h1>
        <Link to={'/'} replace={true}>home</Link>
        <span style={{width: '50px', display: 'inline-block'}}></span>
        <Link to={'/login'} replace={true}>login</Link>
        {/* child routes won't render without this */}
        {renderRoutes(route.routes)}
    </div>
)
const Home = lazyLoad(() =>
    import('../contianers/Home')
)
const Login = lazyLoad(() =>
    import('../contianers/Login')
)
const NotFound = () => (
    <div>404 notfound</div>
)
const Info = () => (
    <div>info</div>
)
const User = () => (
    <div>user</div>
)
const routes = [
    {
        component: Root,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/login',
                component: Login,
                title: '登录',
                routes: [{
                    path: '/login/info',
                    component: Info
                },
                    {
                        path: '/login/user',
                        component: User
                    },
                    {
                        path: '*',
                        component: NotFound
                    }]
            },
            {
                path: '*',
                component: NotFound
            }
        ]
    }
]
export default routes;
