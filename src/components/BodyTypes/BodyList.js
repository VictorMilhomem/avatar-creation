import {React, useState, useEffect} from "react"
import './BodyList.css'
import BodyType from "./BodyType"
import {fetchBodyType} from '../../apiCalls'

const BodyList = () => {
    const [body, setBody] = useState(null)
    const handle = async () => {
        const res = await fetchBodyType()
        setBody(res.bodytypes)
    }

    useEffect(() => {
        handle()
        console.log(body)
    },[])

    return (
        <div>
           
        </div>
    )
}

export default BodyList
