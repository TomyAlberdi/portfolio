import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {

    const copyMail = () => {
        navigator.clipboard.writeText("tomas.alberdi.2001@gmail.com")
        let sec = document.querySelector(".copyMail section")
        let icon = document.querySelector(".copyMail section i")
        let text = document.querySelector(".copyMail section h2")
        sec.classList.add("copied")
        icon.classList.remove("fa-copy")
        icon.classList.remove("fa-regular")
        icon.classList.add("fa-check")
        icon.classList.add("fa-solid")
        text.innerHTML = "Email Saved!"
    }

    return (
        <div className='Main Contact'>
            <div className='link div1'>
                <Link to="https://github.com/TomyAlberdi" target="_blank">
                    <i className="fa-brands fa-github"></i>
                    <span>
                        <h3>GitHub</h3>
                        <i className="fa-solid fa-link"></i>
                    </span>
                </Link>
            </div>
            <div className='link div2'>
                <Link to="https://www.linkedin.com/in/tom%C3%A1s-alberdi-42150a219/" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                    <span>
                        <h3>LinkedIn</h3>
                        <i className="fa-solid fa-link"></i>
                    </span>
                </Link>
            </div>
            <div className='copyMail div3'>
                <section onClick={copyMail}>
                    <h2>tomas.alberdi.2001@gmail.com</h2>
                    <i className="fa-regular fa-copy"></i>
                </section>
            </div>
            <div className='linkForm div4'>
            </div>
        </div>
    )
}

export default Contact