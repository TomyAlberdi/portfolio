import React from 'react'

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
                <section>
                    <i className="fa-brands fa-github"></i>
                    <span>
                        <h3>GitHub</h3>
                        <i className="fa-solid fa-link"></i>
                    </span>
                </section>
            </div>
            <div className='link div2'>
                <section>
                    <i className="fa-brands fa-linkedin"></i>
                    <span>
                        <h3>LinkedIn</h3>
                        <i className="fa-solid fa-link"></i>
                    </span>
                </section>
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