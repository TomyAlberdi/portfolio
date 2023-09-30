import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({Español}) => {
    return (
        <div className='Main Home'>
            <section className="infoPersonal">
                {Español ? (
                    <p>
                        Nacido en 2001 en <span>La Plata</span>, Argentina. <br />
                        Con el tiempo, he adquirido un conjunto diverso de habilidades
                        <span> técnicas y sociales </span> que 
                        estoy seguro contribuirán a mi desarrollo como profesional 
                        en este campo. <br />
                        Con mis conocimientos, estoy ansioso por aumentar el <span>valor</span> y 
                        la <span>productividad</span> de mi trabajo.
                    </p>
                ):  (
                    <p>
                        Born in 2001 in <span>La Plata</span>, Argentina. <br />
                        Over the years, I have acquired a diverse set of 
                        <span> technical and soft skills</span> that 
                        I am confident will contribute to my development as a professional 
                        in the field. <br />
                        With my abilities, I am eager to enhance the <span>value</span> and 
                        <span> productivity</span> of my work.
                    </p>
                )}
            </section>
            <section className="skills">
                {Español ? (
                    <>
                        <p>
                            En 2023, me gradué como <Link to="https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer" target="_blank">Certified Tech Developer</Link>,
                            una carrera respaldada por Globant y Mercado Libre. <br />
                            Gracias a esto, desarrollé conocimiento en las siguientes tecnologías:
                        </p>
                        <ul>
                            <li>Desarrollo Front End</li>
                            <li>Desarrollo Back End</li>
                            <li>Administración de bases de datos</li>
                            <li>CI/CD</li>
                        </ul>
                    </>
                ): (
                    <>
                        <p>
                            In 2023, I graduated as a <Link to="https://www.digitalhouse.com/ar/productos/programacion/certified-tech-developer" target="_blank">Certified Tech Developer</Link>, 
                            a degree backed by Globant and Mercado Libre. <br />
                            Thanks to this, I developed knowledge in the following fields:
                        </p>
                        <ul>
                            <li>Front End Development</li>
                            <li>Back End Development</li>
                            <li>Database adminstration</li>
                            <li>CI/CD</li>
                        </ul>
                    </>
                )}
            </section>
        </div>
    )
}

export default Home