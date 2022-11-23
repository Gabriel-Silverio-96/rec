import { useState } from "react";
import HomeView from "./HomeView";

const Home = () => {
	const [isRecording, setRecording] = useState(false);

	const toggleRecording = () => setRecording(prevState => !prevState);

	return <HomeView {...{ isRecording, toggleRecording }} />;
};

export default Home;
