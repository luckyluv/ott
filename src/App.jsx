import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/HomePage', element: <HomePage /> },
{ path: '/LoginPage', element: <LoginPage /> },
{ path: '/SignIn', element: <SignIn /> },
{ path: '/SignUp', element: <SignUp /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}