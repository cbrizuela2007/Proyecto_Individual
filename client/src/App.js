import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/** import all components */
import Username from './components/Username';
import Password from './components/Password';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import PageNotFound from './components/PageNotFound';



/** auth middleware */
import { AuthorizeUser, ProtectRoute } from './middleware/auth'
import Container from './components/Container';
import Fondo from './components/Fondo';

/** root routes */
const router = createBrowserRouter([
    {
        path : '/',
        element : <Fondo><Username></Username></Fondo>
    },
    {
        path : '/register',
        element : <Fondo><Register></Register></Fondo>
    },
    {
        path : '/password',
        element : <Fondo><ProtectRoute><Password /></ProtectRoute></Fondo>
    },
    {
        path : '/profile',
        element : <Container><AuthorizeUser><Profile /></AuthorizeUser></Container>
    },
    {
        path : '/recovery',
        element : <Fondo><Recovery></Recovery></Fondo>
    },
    {
        path : '/reset',
        element : <Fondo><Reset></Reset></Fondo>
    },
    {
        path : '*',
        element : <PageNotFound></PageNotFound>
    },
  
])

export default function App() {
  return (

        <RouterProvider router={router}></RouterProvider>

  )
}
