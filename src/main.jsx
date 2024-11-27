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
  },
  {
    path:"/addFruit",
    element:<AddFruit></AddFruit>
  },
  {
    path:"/updateFruit",
    element:<UpdateFruit></UpdateFruit>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
