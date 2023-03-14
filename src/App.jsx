import './sass/App.css'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'

function App() {

    let getLocation = () => {
        return useLocation().pathname
    }

    return (
        <div className="App">
            <main>
                <header>
                    <div className="pres">
                        <h1>Tomás Alberdi</h1>
                        <h3>Web Developer</h3>
                    </div>
                    <nav>
                        <Link to={"/"}>{getLocation() === "/" ? <i className="fa-solid fa-circle"></i> : ""}Home</Link>
                        <Link to={"/projects"}>{getLocation() === "/projects" ? <i className="fa-solid fa-circle"></i> : ""}Projects</Link>
                        <Link to={"/contact"}>{getLocation() === "/contact" ? <i className="fa-solid fa-circle"></i> : ""}Contact</Link>
                    </nav>
                </header>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </main>
        </div>
    )
}

export default App