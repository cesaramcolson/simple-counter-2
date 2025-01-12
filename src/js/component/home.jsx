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
	const [isCountingDown, setIsCountingDown] = useState(false)

	useEffect(() => {
		let interval = null;

		if (isRunning) {
			interval = setInterval(() => {
				if (isCountingDown) {
					setCountDown((prevCountDown) => {
						if (prevCountDown > 0) return prevCountDown - 1;
						setIsCountingDown(false)
						setCounter(0)
						setIsRunning(false);
						return null;
					});
				} else {
					setCounter((prevCounter) => prevCounter + 1)
					if (countDown !== null && counter + 1 === countDown) {
						setIsCountingDown(true);
					}
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
	}, [isRunning, counter, alarmTime, countDown, isCountingDown]);

    const fiveDigit = Math.floor((isCountingDown ? countDown : counter) / 10000) % 10;
    const fourDigit = Math.floor((isCountingDown ? countDown : counter) / 1000) % 10;
    const threeDigit = Math.floor((isCountingDown ? countDown : counter) / 100) % 10;
    const twoDigit = Math.floor((isCountingDown ? countDown : counter) / 10) % 10;
    const oneDigit = (isCountingDown ? countDown : counter) % 10;

	const handlePlay = () => setIsRunning(true);
	const handlePause = () => setIsRunning(false);
	const handleStop = () => {
		setIsRunning(false)
		setCounter(0)
		setCountDown(null)
		setIsCountingDown(false);
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
		setCountDown(counter + timeInSeconds);
		alert(`Count down set for ${counter + timeInSeconds} seconds`);
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
