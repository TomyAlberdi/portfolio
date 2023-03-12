import React from 'react'
import Card from '../utils/Card'

const Home = () => {
    return (
        <div className='Main Home'>
            <section className="pres">
                <h1>Tomás Alberdi</h1>
                <h3>Web Developer</h3>
            </section>
            <section className="content">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </section>
        </div>
    )
}

export default Home