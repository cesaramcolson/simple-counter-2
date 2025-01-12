import React, { useState } from "react";
import PropTypes from "prop-types";


const Alarm = ( {onSetAlarm}) => {
    const [inputTime, setInputTime] = useState("");

    const handleInputChange = (event) => {
        setInputTime(event.target.value);
    }

    const handleSetAlarmClick = () => {
        const timeInSeconds = parseInt(inputTime.trim(), 10);
        onSetAlarm(timeInSeconds)
    };

    return (
        <div className="mt-3 row">
            <button 
                className="btn btn-warning col-sm-3" 
                style={{ fontSize: "16px" }}
                onClick={handleSetAlarmClick}
            >
                Set Alarm
            </button>
            <div className="col-sm-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="alarm" 
                    value={inputTime}
                    onChange={handleInputChange} 
                    placeholder="Tiempo en segundos"
                />
            </div>
        </div>
    )
};

Alarm.PropTypes = {
    onSetAlarm: PropTypes.func.isRequired,
};

export default Alarm