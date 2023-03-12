import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'

const Card = ({data}) => {

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 1, tension: 1500, friction: 150 },
    })

    return (
        <div className='Card' onClick={() => set(!flipped)}>
            <a.div className="cardFace" style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80)",
                opacity: opacity.to(o => 1 - o), transform
            }} />
            <a.div className="cardFace" style={{
                backgroundImage: "url(https://i.ytimg.com/vi/eTD0WWFIDAg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEogEyh_MA8=&rs=AOn4CLCdryPFu5IzUAI9EZlXcGu62SpFnw)",
                opacity, transform, rotateX: '180deg',
            }} />
        </div>
    )
}

export default Card