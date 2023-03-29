import React from 'react'
import projectsList from '../utils/projects.json'

const Projects = ({Español}) => {
    return (
        <div className='Main Projects'>
            <ul>
                {
                    projectsList.map((item,index) => {
                        return <li key={index}>
                            <a href={item.link} target="_blank">
                                <span className="date">{item.año}</span>
                                <span className="nombre">{Español ? item.nombre_spanish : item.nombre_english}</span>
                                <div className="icons">
                                    {
                                        item.icons.map((e,index) => {
                                            return <i className={e} key={index}></i>
                                        })
                                    }
                                </div>
                            </a>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Projects