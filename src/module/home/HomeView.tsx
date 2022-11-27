import { FaMicrophone } from "react-icons/fa";
import { RiStopFill } from "react-icons/ri";
import { IHomeView } from "./types/Home.component";
import "./style/home.css";

const HomeView: React.FC<IHomeView> = props => {
	const {
		microphoneAllowed,
		isRecording,
		requestAccessMicrophone,
		toggleRecording,
		audioURL,
	} = props;

	const isRecordingClassName = isRecording ? "btn-stop-recording" : "btn-recording";
	const btnMainClassesName = `btn-main ${isRecordingClassName}`;

	const isRecordingIcon = isRecording ? (
		<RiStopFill color="white" size={90} />
	) : (
		<FaMicrophone color="white" size={90} />
	);

	const isRecordingAudioPointEventNone = isRecording ? "pointer-events-none" : "";

	return (
		<div className="home-container">
			<button
				className={btnMainClassesName}
				onClick={toggleRecording}
				disabled={!microphoneAllowed}>
				{isRecordingIcon}
			</button>
			{!microphoneAllowed && (
				<button
					className="btn-allowed-microphone"
					onClick={requestAccessMicrophone}>
						Allow use of microphone
				</button>
			)}
			<audio controls src={audioURL} className={isRecordingAudioPointEventNone} />
		</div>
	);
};

export default HomeView;
