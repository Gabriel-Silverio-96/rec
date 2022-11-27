import { useCallback, useEffect, useState } from "react";
import HomeView from "./HomeView";
import { toast } from "react-toastify";

const Home = () => {
	const [isRecording, setRecording] = useState(false);
	const [microphoneAllowed, setMicrophoneAllowed] = useState(true);
	
	const [audioURL, setAudioURL] = useState("");
	const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | any>();

	const dataavailableFn = (event: BlobEvent) => {
		const { data } = event;
		const BLOB_TYPE = "audio/ogg; codecs=opus";
		const blob = new Blob([ data ], { type: BLOB_TYPE });

		const createAudioURL = window.URL.createObjectURL(blob);
		setAudioURL(createAudioURL);
	};

	const recordAudio = useCallback(async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				audio: true,
			});
			const instanceMediaRecorder = new MediaRecorder(stream);

			setMicrophoneAllowed(true);
			instanceMediaRecorder.addEventListener(
				"dataavailable",
				dataavailableFn
			);
			setMediaRecorder(instanceMediaRecorder);
		} catch (error) {
			setMicrophoneAllowed(false);

			const THREE_SECOND = 3000;
			toast.error("Permission to use microphone denied. Check browser permissions", {
				toastId: "permission-microphone",
				autoClose: THREE_SECOND
			});
			console.error(error);
		}
	}, []);

	useEffect(() => {
		recordAudio();
	}, []);

	const requestAccessMicrophone = () => recordAudio();

	const toggleRecording = async () => {
		setRecording(prevState => !prevState);
		if (!isRecording) {
			toast.info("Start recording");
			mediaRecorder.start();
			return;
		}

		toast.success("Stop recording");
		mediaRecorder.stop();
	};

	return (
		<HomeView
			{...{
				microphoneAllowed,
				isRecording,
				requestAccessMicrophone,
				toggleRecording,
				audioURL,
			}}
		/>
	);
};

export default Home;
