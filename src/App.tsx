import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import Registration from './pages/Registration';
import RootLayout from './pages/Root';
import Login from './pages/Login';
import ErrorPage from './pages/Error';
import Category, {loader as categoryLoader} from './pages/Category';
import Product, {loader as productLoader} from './pages/Product';


const categoriesLoader = async () => { 
  const response = await fetch('https://allegro-642ad-default-rtdb.europe-west1.firebasedatabase.app/categories.json')
    
  const resData = await response.json()
  
  return resData
}


const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, errorElement: <ErrorPage />, loader: categoriesLoader, children: [
    {index: true, element: <HomePage />},
    {path: 'rejestracja', element: <Registration />},
    {path: 'logowanie', element: <Login />},
    {path: ':categoryId', element: <Category />, loader: categoryLoader},
    {path: ':categoryId/:subcategoryId', element: <Category />},
    {path: ':categoryId/:subcategoryId/:subcategoryId2', element: <Category />, loader: categoryLoader},
    {path: ':categoryId/:subcategoryId/:subcategoryId2/:product', element: <Product />, loader: productLoader}
  ]},
])

function App() {
  return (

<RouterProvider router={router}/>

  );
}

export default App;
