import React, { useState } from "react";
import PropTypes from "prop-types";

const CountDown = ( {onSetCountDown}) => {
    const [inputTime, setInputTime] = useState("");

    const handleInputChange = (event) => {
        setInputTime(event.target.value);
    }

    const handleSetCountDownClick = () => {
        const timeInSeconds = parseInt(inputTime.trim(), 10);
        if (timeInSeconds <=0 || isNaN(timeInSeconds)) {
            alert("Please enter a valid time in seconds");
            return;
        }
        onSetCountDown(timeInSeconds);
    }


    return (
        <div className="mt-3 row">
            <button 
                className="btn btn-warning col-sm-5" 
                style={{ fontSize: "16px" }}
                onClick={handleSetCountDownClick}
            >
                Set Count Down
            </button>
            <div className="col-sm-3">
                <input 
                    type="text" 
                    className="form-control" 
                    id="countDown" 
                    value={inputTime}
                    onChange={handleInputChange}
                    placeholder="Countdown in seconds"
                />
            </div>
        </div>
    )
};

CountDown.propTypes = {
    onSetCountDown: PropTypes.func.isRequired,
};

export default CountDown