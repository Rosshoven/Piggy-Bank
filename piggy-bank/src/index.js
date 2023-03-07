import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from '../src/error-page';
import AllData from './routes/all-data';
import CreateAccount from './routes/create-account.jsx';
import Deposit from './routes/deposit';
import Home from './routes/home';
import Root from './routes/root';
import Withdraw from './routes/withdraw';


// starting to set up my routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'create-account',
        element: <CreateAccount />
      },
      {
        path: 'deposit',
        element: <Deposit />
      }, 
      {
        path: 'withdraw',
        element: <Withdraw />
      },
      {
        path: 'all-data',
        element: <AllData />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

