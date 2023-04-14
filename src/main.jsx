import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { createBrowserRouter, RouterProvider,useParams} from "react-router-dom";
import Home from './component/Home/Home';
import ErrorPage from './component/ErrorPage/ErrorPage';
import Statistic from './component/Statistic/Statistic';
import DetailsJob from './component/DetailsJob/DetailsJob';
import Answering from './component/Answering/Answer'
import AppliedJobs from './component/AppliedJobs/AppliedJobs';
import { allData } from './loaders/getAllData';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: async()=>{
          const res  = await fetch('/jobs.json');
          const data = await res.json();
          return data;
        }
      },
      {
        path:'/details/:id',
        element:<DetailsJob></DetailsJob>,
        loader: async({params})=>{
          const res  = await fetch('/jobs.json');
          const data = await res.json();
          const details = data.find(info => info.id == params.id);
          return details ;
        }
      },
      {
        path:'statistic',
        element: <Statistic></Statistic>
      },
      {
        path:'applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: allData
      },
      {
        path:'blogs',
        element:<Answering></Answering>
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
