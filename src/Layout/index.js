//layout Components
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, activePage }) => {
    return (
        <>
            <Header activePage={activePage} />
            {children}
            < Footer />
        </>
    );
};
export default Layout;