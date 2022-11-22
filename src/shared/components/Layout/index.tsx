import { ILayout } from "./types/Layout.types";

const Layout: React.FC<ILayout> = ({ children }) => <div className="container mx-auto">{children}</div>;

export default Layout;
