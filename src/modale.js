/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react'
import './modale.css'
import close from './close_icon.png'
import PropTypes from 'prop-types'

const Modale = ({message, open=false, onClose}) => {
    const [modaleOpen, setModaleOpen] = useState(open)

    function hideModale() {
        if (onClose) {
            onClose()
        }
    }

    // This function below prevents clicking from the inside of the message.
    function noClicking(e) {
        e.stopPropagation()
    }

    useEffect(() => {
        setModaleOpen(open)
    }, [open]);

    return (
        <div onClick={hideModale} className={modaleOpen === true ? "openModaleDiv" : "closedModaleDiv"}>
            <div className="messageAndClose">
                <div onClick={noClicking} className="modaleMessage">{message}</div>
                <img src={close} alt="" onClick={hideModale} className="modaleClose"/>
            </div>
        </div>
    )
}

Modale.propTypes = {
    message: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Modale