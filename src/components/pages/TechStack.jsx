import React from 'react'

const TechStack = ({Español}) => {
  return (
    <div className='Main TechStack'>
      <ul>
        <li className="tech frontend">
          <h3>{ Español ? "Desarrollo Frontend" : "Frontend Development"}</h3>
          <section className="tech_details">
            <div>
              <i className="fa-brands fa-react"></i>
              React
            </div>
            <div>
              <i className="fa-brands fa-js"></i>
              JavaScript
            </div>
            <div>
              <i className="fa-brands fa-html5"></i>
              HTML
            </div>
            <div>
              <i className="fa-brands fa-css3-alt"></i>
              CSS
            </div>
            <div>
              <i className="fa-brands fa-sass"></i>
              SASS
            </div>
            <div>
              <i className="fa-solid fa-mobile-screen"></i>
              Responsive
            </div>
            <div>
              <i className="fa-brands fa-figma"></i>
              Figma
            </div>
          </section>
        </li>
        <li className="tech backend">
          <h3>{ Español ? "Desarrollo Backend" : "Backend Development"}</h3>
          <section className="tech_details">
            <div>
              <i className="fa-brands fa-java"></i>
              Java
            </div>
            <div>
              <i className="fa-brands fa-golang"></i>
              Golang
            </div>
            <div>
              <i className="fa-solid fa-circle-nodes"></i>
              APIs
            </div>
            <div>
              <i className="fa-solid fa-network-wired"></i>
              Microservices
            </div>
            <div>
              <i className="fa-solid fa-shield-halved"></i>
              Security
            </div>
          </section>
        </li>
        <li className="tech database">
          <h3>{ Español ? "Administración de bases de datos" : "Database Administration"}</h3>
          <section className="tech_details">
            <div>
              <i className="fa-solid fa-database"></i>
              MySQL
            </div>
            <div>
              <i class="fa-solid fa-file-lines"></i>
              MongoDB
            </div>
          </section>
        </li>
        <li className="tech infrastructure">
          <h3>{ Español ? "Infraestructura" : "Infrastructure"}</h3>
          <section className="tech_details">
            <div>
              <i class="fa-solid fa-code-compare"></i>
              Version Control
            </div>
            <div>
              <i className="fa-brands fa-github"></i>
              GitHub
            </div>
            <div>
              <i class="fa-brands fa-docker"></i>
              Docker
            </div>
            <div>
              <i class="fa-brands fa-aws"></i>
              Amazon Web Services
            </div>
          </section>
        </li>
      </ul>
    </div>
  )
}

export default TechStack