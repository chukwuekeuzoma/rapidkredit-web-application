import React from 'react'
import "./Loading.scss"
import RapidOne from "../../images/rapid.png"
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Loading() {
    return (
        <>
            <div className="Loading_container">
               <div><img src={RapidOne} alt="load" className="Loding_icon" height="80px"/></div>
                <CircularProgress color="secondary" />
                <div><h1>Loading...</h1></div>
            </div>
        </>
    )
}
