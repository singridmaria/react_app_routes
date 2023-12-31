import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './pages/Login.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/", //Onde o fronte vai responder
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login", //Onde o fronte vai responder
    element: <Login/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
