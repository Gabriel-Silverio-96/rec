import { FaMicrophone } from "react-icons/fa";

const HomeView = () => {
	return (
		<div className="h-75vh flex items-center text-center justify-center flex-col">					
			<button className="bg-indigo-500 w-72 h-72 flex items-center justify-center m-auto rounded-full bg-red-recording-main shadow-lg shadow-recording">
				<FaMicrophone color="white" size={90} />
			</button>
		</div>
	);
};

export default HomeView;
