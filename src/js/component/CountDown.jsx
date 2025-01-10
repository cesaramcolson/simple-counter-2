import React from "react";

const CountDown = () => {
    return (
        <div className="mt-3 row">
            <button 
                className="btn btn-warning col-sm-5" 
                style={{ fontSize: "16px" }}
            >
                Set Count Down
            </button>
            <div className="col-sm-3">
                <input type="text" className="form-control" id="countDown" />
            </div>
        </div>
    )
}

export default CountDown