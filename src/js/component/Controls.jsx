import React from "react";

const Controls = () => {
    return (<div className="container d-flex justify-content-end mt-3">
        <button type="button" className="btn btn-danger me-1"><i class="fa-solid fa-stop"></i></button>
        <button type="button" className="btn btn-success"><i class="fa-solid fa-play"></i></button>
        <button type="button" className="btn btn-warning ms-1"><i class="fa-solid fa-pause"></i></button>
    </div>
)};

export default Controls