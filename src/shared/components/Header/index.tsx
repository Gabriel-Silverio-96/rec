import LogoRec from "assets/images/logo-rec.svg";

const Header = () => (
	<header className="flex items-center gap-3 mt-10">
		<img src={LogoRec} />
		<span className="w-0.5 h-5 bg-white" />
		<p className="text-white font-display font-bold">test your microphone</p>
	</header>
);

export default Header;