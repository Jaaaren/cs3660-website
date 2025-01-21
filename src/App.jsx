import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import NotFound from './NotFound'

function App() {
    const [theme, setTheme] = useState('default')

    function switchTheme(newTheme) {
        setTheme(newTheme)
    }

    return (
        <div className={`app-container theme-${theme}`}>
            <Router>
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                </nav>
                <div className="theme-buttons">
                    <button onClick={() => switchTheme('default')}>Default Theme</button>
                    <button onClick={() => switchTheme('matrix')}>Matrix Theme</button>
                    <button onClick={() => switchTheme('space')}>Space Theme</button>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App
