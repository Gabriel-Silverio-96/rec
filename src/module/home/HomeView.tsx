import { FaMicrophone } from "react-icons/fa";
import { RiStopFill } from "react-icons/ri";

const HomeView: React.FC<any> = ({ isRecording, toggleRecording }) => {
	const isRecordingClassName = isRecording ? "btn-main btn-stop-recording" : "btn-main btn-recording";
	const isRecordingIcon = isRecording ? <RiStopFill color="white" size={90}/> : <FaMicrophone color="white" size={90} />;

	return (
		<div className="h-75vh flex items-center text-center justify-center flex-col">
			<button className={isRecordingClassName}
				onClick={toggleRecording}
			>
				{isRecordingIcon}				
			</button>
		</div>
	);
};

export default HomeView;
