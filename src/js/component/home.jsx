import React, { useEffect, useState } from "react";
import SimpleCounter from "./SimpleCounter";
import Controls from "./Controls";
import Alarm from "./Alarm";
import CountDown from "./CountDown";

const Home = () => {
	const [counter, setCounter] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	const [alarmTime, setAlarmTime] = useState(null)
	const [countDown, setCountDown] = useState(null)

	useEffect(() => {
		let interval = null;
		if (isRunning) {
			interval = setInterval(() => {
				setCounter((prevCounter) => prevCounter + 1);

				if (countDown !== null && countDown > 0) {
					setCountDown((prevCounter) => prevCounter - 1)
				}
			}, 1000);
		} else if (!isRunning && interval) {
			clearInterval(interval);
		}

		if (alarmTime !== null && counter >= alarmTime) {
			alert("Alarm Time!!")
			setAlarmTime(null);
		}

		return () => clearInterval(interval)
	}, [isRunning, counter, alarmTime, countDown]);

	const activeCounter = countDown !== null && countDown >= 0 ? countDown : counter;

    const fiveDigit = Math.floor(activeCounter / 10000) % 10;
    const fourDigit = Math.floor(activeCounter / 1000) % 10;
    const threeDigit = Math.floor(activeCounter / 100) % 10;
    const twoDigit = Math.floor(activeCounter / 10) % 10;
    const oneDigit = activeCounter % 10;

	const handlePlay = () => setIsRunning(true);
	const handlePause = () => setIsRunning(false);
	const handleStop = () => {
		setIsRunning(false)
		setCounter(0)
		setCountDown(null)
	}

	const handleSetAlarm = (timeInSeconds) => {
		if (timeInSeconds <= 0 || isNaN(timeInSeconds)) {
			alert("Please enter a valid time in seconds");
			return;
		}
		setAlarmTime (counter + timeInSeconds);
		alert(`Alarm set for ${timeInSeconds} seconds`)
	}

	const handleSetCountDown = (timeInSeconds) => {
		if (timeInSeconds <= 0 || isNaN(timeInSeconds)) {
			alert("Please enter a valid time in seconds");
			return;
		}
		setCountDown(timeInSeconds);
		alert(`Countdown started for ${timeInSeconds} seconds`);
		setIsRunning(true);
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
		<Alarm 
			onSetAlarm={handleSetAlarm}
		 />
		<CountDown
			onSetCountDown={handleSetCountDown}
		 />
	</div>);
};

export default Home;
