import './sass/App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'

function App() {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App