import React from 'react';
import './test.css';
import Kartinka from "../assets/icons/zyro.jpg"


const TestComponent = () => {
    return(
        <div className="lyboy">
            <div className="lyboy2">this is my country</div>
            <div className="lyboy3">
                <img src={Kartinka} alt="ggg" />
            </div>
        </div>
    );
};

export default TestComponent;