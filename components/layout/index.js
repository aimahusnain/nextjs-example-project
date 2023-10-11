import Header from '../header';
import Footer from '../footer';

function Layout({children}) {
    return (
        <div className="main">
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout