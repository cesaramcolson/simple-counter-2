import React from "react";

const Alarm = () => {
    return (
        <div className="mt-3 row">
            <button 
                className="btn btn-warning col-sm-3" 
                style={{ fontSize: "16px" }}
            >
                Set Alarm
            </button>
            <div className="col-sm-3">
                <input type="text" className="form-control" id="alarm" />
            </div>
        </div>
    )
}

export default Alarm