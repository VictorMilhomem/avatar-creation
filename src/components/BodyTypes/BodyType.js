import React from "react"
import './BodyType.css'

const BodyType = ({bodytype }) => {
    return (
        <div>
            {bodytype.map(item => (
               <img key={item.id} src={item.imageSrc} alt="body" />
            ))}
        </div>
    )
}

export default BodyType
