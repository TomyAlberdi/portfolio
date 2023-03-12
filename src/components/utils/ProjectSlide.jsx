import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'

const ProjectSlide = ({data}) => {

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 1000, friction: 100 },
    })

    return (
        <div className='ProjectSlide' onClick={() => set(!flipped)}>
            <a.div className="card" style={{
                backgroundImage: "url(https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/08/02181322/ASAP-Rocky-2.jpg)",
                opacity: opacity.to(o => 1 - o), transform
            }} />
            <a.div className="card" style={{
                backgroundImage: "url(https://notify.com.ar/gamba/wp-content/uploads/sites/6/2023/03/Travis-scott-780x470.jpg)",
                opacity, transform, rotateX: '180deg',
            }} />
        </div>
    )
}

export default ProjectSlide