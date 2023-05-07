import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Navbar, { Layout } from './ui/organisms/Navbar'
import Footer from './ui/organisms/Footer'
import React from 'react'
import { Theme } from './ui/theme'
import { ThemeProvider } from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import Courses from './pages/Courses'
import Planning from './pages/Planning'
import Cart from './pages/Cart'
import User from './pages/User'

export const ThemeContext = React.createContext(Theme);
function App() {
  const [theme, setTheme] = useState(Theme);

  return (
    <ThemeContext.Provider value={theme}>
      <div style={{ margin: "0px", padding: "0px", height: "100vh", border: "1px solid black" }}>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="planning" element={<Planning />} />
            <Route path="cart" element={<Cart />} />
            <Route path="profile" element={<User />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          </Route>
        </Routes>

      </div>
    </ThemeContext.Provider>
  )
}

export default App
