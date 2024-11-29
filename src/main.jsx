import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddFruit from './Components/AddFruit.jsx';
import UpdateFruit from './Components/UpdateFruit.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=>fetch('http://localhost:5000/fruits')
  },
  {
    path:"/addFruit",
    element:<AddFruit></AddFruit>
  },
  {
    path:"/updateFruit/:id",
    element:<UpdateFruit></UpdateFruit>,
    loader:({params})=> fetch(`http://localhost:5000/fruits/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
