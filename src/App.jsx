import './sass/App.scss'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import Contact from './components/pages/Contact'
import TechStack from './components/pages/TechStack'
import Welcome from './components/utils/Welcome'
import { useEffect, useState } from 'react'

function App() {

    const [Español, setEspañol] = useState(false)

    const [Loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000);
    }, [])
    
    return (
        <div className="App">
            <Navbar setEspañol={setEspañol} Español={Español} />
            <main>
                <div className="bkg"></div>
                <Welcome Loading={Loading} />
                <section className="pres">
                    <h1>Tomás Alberdi</h1>
                    <h3>{Español ? "Desarrollador de Software" : "Software Developer"}</h3>
                </section>
                <Routes>
                    <Route exact path='/Portfolio/' element={<Home Español={Español} />} />
                    <Route path='/Portfolio/stack' element={<TechStack Español={Español} />} />
                    <Route path='/Portfolio/projects' element={<Projects Español={Español} />} />
                    <Route path='/Portfolio/contact' element={<Contact Español={Español} />} />
                </Routes>
            </main>
        </div>
    )
}

export default App