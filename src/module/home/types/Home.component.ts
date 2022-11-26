export interface IHomeView {
    microphoneAllowed: boolean;
    isRecording: boolean;
    requestAccessMicrophone: () => void;
    toggleRecording: () => void;
    audioURL: string;
}