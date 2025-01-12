import PropTypes, { string } from "prop-types";
import React from "react";

const SimpleCounter = (props) => {
    return (<div className="counter">
        <div className="icon"><i class="fa-regular fa-clock"></i></div>
        <div className="five">{props.fiveDigit}</div>
        <div className="four">{props.fourDigit}</div>
        <div className="three">{props.threeDigit}</div>
        <div className="two">{props.twoDigit}</div>
        <div className="one">{props.oneDigit}</div>
    </div>);
};

SimpleCounter.propTypes = {
    fiveDigit: PropTypes.string,
    fourDigit: PropTypes.string,
    threeDigit: PropTypes.string,
    twoDigit: PropTypes.string,
    oneDigit: PropTypes.string,
};

SimpleCounter.defaultProps = {
    fiveDigit: "0",
    fourDigit: "0",
    threeDigit: "0",
    twoDigit: "0",
    oneDigit: "0",
};

export default SimpleCounter;