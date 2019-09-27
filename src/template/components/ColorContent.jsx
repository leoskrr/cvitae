import React from 'react'
import './ColorContent.css'

export default props =>{
    return(
        <div className="content-color">
            <div className="content-title">
                <h1>{props.title}</h1>
                <p>{props.titleDesc}</p>
            </div>
            <div className="content-desc">
                {props.children}
            </div>
        </div>
    )
}