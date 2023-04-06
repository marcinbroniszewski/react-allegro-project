import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import Registration from './pages/Registration';
import RootLayout from './pages/Root';
import Login from './pages/Login';


const router = createBrowserRouter([
  {path: '', element: <RootLayout />, children: [
    {path: '', element: <HomePage /> },
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
