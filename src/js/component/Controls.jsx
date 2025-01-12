import PropTypes from "prop-types";
import React from "react";

const Controls = ({ onPlay, onPause, onStop }) => {
    return (<div className="container d-flex justify-content-end mt-3">
        <button type="button" className="btn btn-danger me-1" onClick={onStop}><i class="fa-solid fa-stop"></i></button>
        <button type="button" className="btn btn-success" onClick={onPlay}><i class="fa-solid fa-play"></i></button>
        <button type="button" className="btn btn-warning ms-1" onClick={onPause}><i class="fa-solid fa-pause"></i></button>
    </div>
)};

Controls.propTypes = {
    onPlay: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onStop: PropTypes.func.isRequired
}

export default Controls