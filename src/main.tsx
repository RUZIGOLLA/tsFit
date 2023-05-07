import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from './pages/Home.tsx';
import Courses from './pages/Courses.tsx';
import Planning from './pages/Planning.tsx';
import { Layout } from './ui/organisms/Navbar.tsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout></Layout>
    ),
  },
  {
    path: "/courses",
    element: <Courses></Courses>,
  },
  {
    path: "planning",
    element: <Planning></Planning>,
  },
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>

      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
