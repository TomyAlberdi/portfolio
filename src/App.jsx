import './sass/App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import Welcome from './components/utils/Welcome'
import { useEffect, useState } from 'react'

function App() {

    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3500);
    }, [])
    
    return (
        <div className="App">
            <Navbar />
            <main>
                <Welcome Loading={Loading} />
                <div className="bkg"></div>
                <section className="pres">
                    <h1>Tomás Alberdi</h1>
                    <h3>Web Developer</h3>
                </section>
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