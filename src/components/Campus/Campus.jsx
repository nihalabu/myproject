import React from "react";
import './Campus.css';
import campus1 from '../../assets/gallery-1.png';
import campus2 from '../../assets/gallery-2.png';
import campus3 from '../../assets/gallery-3.png';
import campus4 from '../../assets/gallery-4.png';
import whitearrow from '../../assets/white-arrow.png'
function Campus(){
    return(
        <div className="gallery">
            <div className="campuscontain">
            
                
                <div className="campus">
                    <img src={campus1} alt="" />
                </div>
                <div className="campus">
                    <img src={campus2} alt="" />
                </div>
                <div className="campus">
                    <img src={campus3} alt="" />
                </div>
                <div className="campus">
                    <img src={campus4} alt="" />
                </div>
            </div>
            <button className="seemore">See more here <img src={whitearrow} alt="" /></button>
        </div>
        
    )
}
export default Campus;