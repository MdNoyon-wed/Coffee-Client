import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './MainLayout.jsx';
import Home from './layout/Home.jsx';
import AddCoffee from './layout/AddCoffee.jsx';
import UpdataCoffee from './layout/UpdataCoffee.jsx';
const router = createBrowserRouter([
  {
    path: "/",
     Component:MainLayout,
     children:[
      {
        index:true,
        loader:()=> fetch('http://localhost:4000/coffees'),
        Component:Home,
      },
      {
        path:'addCoffee',
        Component:AddCoffee,
        
      },
      {
        path:'updateCoffee/:id',
        loader:({params})=> fetch(`http://localhost:4000/coffees/${params.id}`),
        Component:UpdataCoffee,


      }
     ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
