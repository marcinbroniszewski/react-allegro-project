import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import RegistrationPage from './pages/Registration';
import RootLayout from './pages/Root';
import LoginPage from './pages/Login';
import ErrorPage from './pages/Error';
import CategoryPage, {loader as categoryLoader} from './pages/Category';
import ProductPage, {loader as productLoader} from './pages/Product';
import CartPage from './pages/Cart';
import SalePage from './pages/Sale';

const categoriesLoader = async () => { 
  const response = await fetch('https://allegro-642ad-default-rtdb.europe-west1.firebasedatabase.app/categories.json')
    
  const resData = await response.json()
  
  return resData
}

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, errorElement: <ErrorPage />, loader: categoriesLoader, children: [
    {index: true, element: <HomePage />},
    {path: 'rejestracja', element: <RegistrationPage />},
    {path: 'logowanie', element: <LoginPage />},
    {path: 'koszyk', element: <CartPage />},
    {path: 'wystaw', element: <SalePage />, loader: categoriesLoader},
    {path: ':categoryId', element: <CategoryPage />, loader: categoryLoader},
    {path: ':categoryId/:subcategoryId', element: <CategoryPage />},
    {path: ':categoryId/:subcategoryId/:subcategoryId2', element: <CategoryPage />, loader: categoryLoader},
    {path: ':categoryId/:subcategoryId/:subcategoryId2/:product', element: <ProductPage />, loader: productLoader}
  ]},
])


function App() {

  return (

<RouterProvider router={router}/>

  );
}

export default App;
