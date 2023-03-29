import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const openMenu = () => {
        document.querySelector(".mobileMenu").classList.toggle("open")
    }

    return (
        <>
            <header className='navbar-desktop'>
                <section className='links'>
                    <div>
                        <Link to={"/"}>Home</Link>
                    </div>
                    <div>
                        <Link to={"/projects"}>Projects</Link>
                    </div>
                    <div>
                        <Link to={"/contact"}>Contact</Link>
                    </div>
                </section>
                <section className="icon">
                    <Link to={"/"}><img src="/favicon.ico" alt="Ícono de la barra de navegación" /></Link>
                </section>
            </header>
            <header className='navbar-mobile'>
                <section className="menuSection" onClick={openMenu}>
                    <i className="fa-solid fa-bars"></i>
                </section>
                <section className="icon">
                    <Link to={"/"}><img src="/favicon.ico" alt="Ícono de la barra de navegación" /></Link>
                </section>
            </header>
            <section className="mobileMenu">
                <i className='fa-solid fa-xmark' onClick={openMenu}></i>
                <div>
                    <Link to={"/"} onClick={openMenu}><i className="fa-solid fa-house"></i><span> Home</span></Link>
                    <Link to={"/projects"} onClick={openMenu}><i className="fa-solid fa-briefcase"></i><span> Projects</span></Link>
                    <Link to={"/contact"} onClick={openMenu}><i className="fa-solid fa-message"></i><span> Contact</span></Link>
                </div>
            </section>
        </>
    )
}

export default Navbar