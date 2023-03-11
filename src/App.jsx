import './sass/App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Routes>
                    <Route exact path='/Portfolio/' element={<Home />} />
                    <Route path='/Portfolio/projects' element={<Projects />} />
                    <Route path='/Portfolio/contact' element={<Contact />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App