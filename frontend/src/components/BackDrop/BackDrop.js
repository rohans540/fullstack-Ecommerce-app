import React from 'react';
import './BackDrop.css';

const Backdrop = ({ show, onClick }) => {

    return show && (
        <div className="backdrop" onClick={onClick}>

        </div>
    );
}

export default Backdrop;