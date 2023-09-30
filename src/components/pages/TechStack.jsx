import React from 'react'

const TechStack = ({Español}) => {
  return (
    <div className='Main TechStack'>
      <ul>
        <li className="tech frontend">
          <h3>{ Español ? "Desarrollo Frontend" : "Frontend Development"}</h3>
        </li>
        <li className="tech backend">
          <h3>{ Español ? "Desarrollo Backend" : "Backend Development"}</h3>
        </li>
        <li className="tech database">
          <h3>{ Español ? "Administración de bases de datos" : "Database Administration"}</h3>
        </li>
        <li className="tech infrastructure">
          <h3>{ Español ? "Infraestructura" : "Infrastructure"}</h3>
        </li>
      </ul>
    </div>
  )
}

export default TechStack