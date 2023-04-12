import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './component/Home/Home';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Statistic from './component/Statistic/Statistic';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'statistic',
        element: <Statistic></Statistic>
      },
      {
        path:'applied',
        element: <h2>Applied Jobs</h2>
      },
      {
        path:'blogs',
        element: <h3>Blog Here</h3>
      }
    ]
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
