import React from "react";
import './Programs.css';
import program1 from '../../assets/program-1.png';
import program2 from '../../assets/program-2.png';
import program3 from '../../assets/program-3.png';
import programicon1 from '../../assets/program-icon-1.png'
import programicon2 from '../../assets/program-icon-2.png'
import programicon3 from '../../assets/program-icon-3.png'
function Programs(){
    return(
        <div className="programs">
            <div className="program">
                <img src={program1} alt="" />
                <div className="overlay">
                    <img src={programicon1} alt="" />
                    <p>Undergraduate</p>
                </div>
            </div>
            <div className="program">
                <img src={program2} alt="" />
                <div className="overlay">
                    <img src={programicon2} alt=""/>
                    <p>Undgraduate</p>
                </div>
            </div>
            <div className="program">
                <img src={program3} alt="" />
                <div className="overlay">
                    <img src={programicon3} alt="" />
                    <p>Undergraduate</p>
                </div>
            </div>
        </div>
    )

}
export default Programs;