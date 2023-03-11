import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className='navbar-desktop'>
                <section className='links'>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/"}>Projects</Link>
                    <Link to={"/"}>Contact</Link>
                </section>
                <section className="icon">
                    <Link to={"/"}><img src="/favicon.ico" alt="Ícono de la barra de navegación" /></Link>
                </section>
            </header>
            <header className='navbar-mobile'>
                <section className="menuSection">
                    <i className="fa-solid fa-bars"></i>
                </section>
                <section className="icon">
                    <Link to={"/"}><img src="/favicon.ico" alt="Ícono de la barra de navegación" /></Link>
                </section>
            </header>
        </>
    )
}

export default Navbar