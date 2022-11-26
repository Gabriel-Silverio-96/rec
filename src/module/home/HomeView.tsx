import { FaMicrophone } from "react-icons/fa";
import { RiStopFill } from "react-icons/ri";
import { IHomeView } from "./types/Home.component";

const HomeView: React.FC<IHomeView> = props => {
	const {
		microphoneAllowed,
		isRecording,
		requestAccessMicrophone,
		toggleRecording,
		audioURL,
	} = props;

	const isRecordingClassName = isRecording ? "btn-main btn-stop-recording" : "btn-main btn-recording";

	const isRecordingIcon = isRecording ? (
		<RiStopFill color="white" size={90} />
	) : (
		<FaMicrophone color="white" size={90} />
	);

	return (
		<div className="h-75vh flex items-center text-center justify-center flex-col">
			<button
				className={isRecordingClassName}
				onClick={toggleRecording}
				disabled={!microphoneAllowed}>
				{isRecordingIcon}
			</button>
			{!microphoneAllowed && (
				<button
					className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded mb-5"
					onClick={requestAccessMicrophone}>
					Allow use of microphone
				</button>
			)}
			<audio controls src={audioURL} />
		</div>
	);
};

export default HomeView;
