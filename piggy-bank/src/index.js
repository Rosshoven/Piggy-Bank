import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from '../src/error-page';
import { AccountProvider } from './routes/account-context';
import AllData from './routes/all-data';
import CreateAccount from './routes/create-account.jsx';
import Deposit from './routes/deposit';
import Home from './routes/home';
import Root from './routes/root';
import Withdraw from './routes/withdraw';

// starting to set up my routes
// router is defined as a createBrowserRouter(imported from react-router-dom) with routes I create
// This is not a navbar. This is the router the navbar uses to go from page to page
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        // the path given for index: will show upon inital load
        index: 'home',
        element: <Home />
      },
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
    <AccountProvider>
      <RouterProvider router={router} />
    </AccountProvider>
  </React.StrictMode>
);

