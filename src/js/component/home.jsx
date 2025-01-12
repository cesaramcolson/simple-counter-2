import React, { useEffect, useState } from "react";
import SimpleCounter from "./SimpleCounter";
import Controls from "./Controls";
import Alarm from "./Alarm";
import CountDown from "./CountDown";

const Home = () => {
	const [counter, setCounter] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let interval = null;

		if (isRunning) {
			interval = setInterval(() => {
				setCounter((prevCounter) => prevCounter + 1);
			}, 1000);
		} else if (!isRunning && interval) {
			clearInterval(interval);
		}
		return () => clearInterval(interval)
	}, [isRunning]);

	const fiveDigit = Math.floor(counter / 10000) % 10;
    const fourDigit = Math.floor(counter / 1000) % 10;
    const threeDigit = Math.floor(counter / 100) % 10;
    const twoDigit = Math.floor(counter / 10) % 10;
    const oneDigit = counter % 10;

	const handlePlay = () => setIsRunning(true);
	const handlePause = () => setIsRunning(false);
	const handleStop = () => {
		setIsRunning(false)
		setCounter(0)
	}

	return (<div className="container">
		<SimpleCounter
		    fiveDigit={fiveDigit.toString()}
			fourDigit={fourDigit.toString()}
			threeDigit={threeDigit.toString()}
			twoDigit={twoDigit.toString()}
			oneDigit={oneDigit.toString()}
		 />
		<Controls 
			onPlay={handlePlay}
			onPause={handlePause}
			onStop={handleStop}
		/>
		<Alarm />
		<CountDown />
	</div>);
};

export default Home;
