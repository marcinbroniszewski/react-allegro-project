import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import Registration from './pages/Registration';
import RootLayout from './pages/Root';
import Login from './pages/Login';
import ErrorPage from './pages/Error';


const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, errorElement: <ErrorPage />, children: [
    {index: true, element: <HomePage />},
    {path: 'rejestracja', element: <Registration />},
    {path: 'logowanie', element: <Login />}
  ]},
])

function App() {
  return (

<RouterProvider router={router}/>

  );
}

export default App;
