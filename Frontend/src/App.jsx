import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Home';
import UserContext from './UseContext.jsx';
import { First } from './first';
import LoginForm from "./components/LoginForm.jsx"
import RegisterForm from './components/RegisterForm.jsx';;
import SingleProduct from './SingleProduct.jsx';
import Cart from '../src/cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <First />, 
    children: [
      { index: true, element: <RegisterForm /> },           
      { path: 'LoginForm', element: <LoginForm /> },    
       
      {
        path: '/Home',
        element: (
        
            <Home />
        
        ),
      },

          { path: '/cart', element: <Cart/> },
           { path: '/product/:id', element: <SingleProduct /> }     
     
    ],
  },
]);
function App() {
  return (
    <UserContext>
      <RouterProvider router={router} />
    </UserContext>
  );
}

  

export default App;
