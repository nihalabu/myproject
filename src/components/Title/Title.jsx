import React from "react";
import './Title.css';
function Title(prop){
    return(
        <div className="Title">
            <h4>{prop.t1}</h4>
            <h1>{prop.t2}</h1>
        </div>
    )
}
export default Title;