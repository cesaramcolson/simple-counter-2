import React from "react";
import SimpleCounter from "./SimpleCounter";
import Controls from "./Controls";
import Alarm from "./Alarm";
import CountDown from "./CountDown";

const Home = () => {
	return (<div className="container">
		<SimpleCounter />
		<Controls />
		<Alarm />
		<CountDown />
	</div>);
};

export default Home;
