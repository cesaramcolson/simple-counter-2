import React, { useState } from "react";

const Alarm = () => {
    const [alarmTime, setAlarmTime] = useState("");

    const handleInputChange = (event) => {
        setAlarmTime(event.target.value);
    }

    const handleSetAlarm = () => {
        const timeInSeconds = parseInt(alarmTime.trim(), 10);

        if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
            alert("Por favor, introduce un tiempo válido en segundos.");
            return;
        }

        alert(`Alarma configurada para ${timeInSeconds} segundos.`);

        setTimeout(() => {
            alert("¡Es hora de la alarma!");
        }, timeInSeconds * 1000);
    };

    return (
        <div className="mt-3 row">
            <button 
                className="btn btn-warning col-sm-3" 
                style={{ fontSize: "16px" }}
                onClick={handleSetAlarm}
            >
                Set Alarm
            </button>
            <div className="col-sm-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="alarm" 
                    value={alarmTime}
                    onChange={handleInputChange} 
                    placeholder="Tiempo en segundos"
                />
            </div>
        </div>
    )
}

export default Alarm