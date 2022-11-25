import { useEffect, useState } from "react";
import HomeView from "./HomeView";

const Home = () => {
	const [isRecording, setRecording] = useState(false);
	const [audioURL, setAudioURL] = useState("");
	const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | any>();
	
	const dataavailableFn = (event: BlobEvent) => {
		const { data } = event;
		const BLOB_TYPE = "audio/ogg; codecs=opus";
		const blob = new Blob([data], {	type: BLOB_TYPE });

		const createAudioURL = window.URL.createObjectURL(blob);
		setAudioURL(createAudioURL);
	};

	useEffect(() => {
		const recordAudio = async () => {
			try {
				const stream =	await navigator.mediaDevices.getUserMedia({ audio: true });
				const instanceMediaRecorder = new MediaRecorder(stream);

				instanceMediaRecorder.addEventListener("dataavailable",	dataavailableFn);
				setMediaRecorder(instanceMediaRecorder);
			} catch (error) {
				console.error(error);
			}
		};
		recordAudio();
	}, []);

	const toggleRecording = async () => {
		setRecording(prevState => !prevState);
		if (!isRecording) {
			mediaRecorder.start();
			return;
		}
		mediaRecorder.stop();
	};

	return <HomeView {...{ isRecording, toggleRecording, audioURL }} />;
};

export default Home;
