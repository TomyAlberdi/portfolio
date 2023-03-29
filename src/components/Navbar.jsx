import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({setEspañol, Español}) => {

    const openMenu = () => {
        document.querySelector(".mobileMenu").classList.toggle("open")
    }

    return (
        <>
            <header className='navbar-desktop'>
                <section className="language">
                    <div onClick={() => setEspañol(!Español)}>
                        <i className={Español ? "fa-regular fa-square" : "fa-regular fa-square-check"}></i>
                        English
                    </div>
                    <div onClick={() => setEspañol(!Español)}>
                        <i className={Español ? "fa-regular fa-square-check" : "fa-regular fa-square"}></i>
                        Español
                    </div>
                </section>
                <div className='nav'>
                    <section className='links'>
                        <div className='navLinks'>
                            <Link to={"/"}>{Español ? "Inicio" : "Home"}</Link>
                        </div>
                        <div className='navLinks'>
                            <Link to={"/projects"}>{Español ? "Proyectos" : "Projects"}</Link>
                        </div>
                        <div className='navLinks'>
                            <Link to={"/contact"}>{Español ? "Contacto" : "Contact"}</Link>
                        </div>
                    </section>
                    <section className="icon">
                        <Link to={"/"}><img src="/favicon.ico" alt="Ícono de la barra de navegación" /></Link>
                    </section>
                </div>
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
                <div className='container'>
                    <Link to={"/"} onClick={openMenu}><i className="fa-solid fa-house"></i><span>{Español ? " Inicio" : " Home"}</span></Link>
                    <Link to={"/projects"} onClick={openMenu}><i className="fa-solid fa-briefcase"></i><span>{Español ? " Proyectos" : " Projects"}</span></Link>
                    <Link to={"/contact"} onClick={openMenu}><i className="fa-solid fa-message"></i><span>{Español ? " Contacto" : " Contact"}</span></Link>
                </div>
                <section className="language">
                    <div onClick={() => setEspañol(!Español)}>
                        <i className={Español ? "fa-regular fa-square-check" : "fa-regular fa-square"}></i>
                        Español
                    </div>
                    <div onClick={() => setEspañol(!Español)}>
                        <i className={Español ? "fa-regular fa-square" : "fa-regular fa-square-check"}></i>
                        English
                    </div> 
                </section>
            </section>
        </>
    )
}

export default Navbar