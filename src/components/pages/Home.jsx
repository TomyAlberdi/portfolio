import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='Main Home'>
            <section className="infoPersonal">
                <p>
                    Born in 2001 in <span>La Plata</span>, Argentina. <br />
                    Over the years, I have acquired a diverse set of 
                    <span> technical and soft skills</span> that 
                    I am confident will contribute to my development as a professional 
                    in the field. <br />
                    With my abilities, I am eager to enhance the <span>value</span> and 
                    <span> productivity</span> of my employer.
                </p>
            </section>
            <section className="skills">
                <p>
                    In 2023, I graduated as a <Link to="http://google.com" target="_blank">Certified Tech Developer</Link>, 
                    a degree backed by Globant and Mercado Libre. <br />
                    Thanks to this, I developed knowledge in the following fields:
                </p>
                <ul>
                    <li>Front End Development: Basic, Sass & React</li>
                    <li>Back End Development: SQL & Java (Spring/Hibernate)</li>
                    <li>Other Skills: UX/UI & Testing</li>
                </ul>
            </section>
        </div>
    )
}

export default Home