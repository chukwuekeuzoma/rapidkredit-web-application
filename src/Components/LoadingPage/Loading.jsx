import React from 'react'
import "./Loading.scss"
import RapidOne from "../../images/rapid.png"
import PulseLoader from "react-spinners/ClipLoader"

export default function Loading() {
    return (
        <>
            <div className="Loading_container">
               <div><img src={RapidOne} alt="load" className="Loding_icon" height="80px"/></div>
                <PulseLoader color={"rgb(17, 17, 66)"} size={30} />
            </div>
        </>
    )
}
