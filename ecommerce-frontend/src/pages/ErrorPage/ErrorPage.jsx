import Header from '../../components/Header.jsx'
import './ErrorPage.css'

function ErrorPage({ cart }) {
    return (
        <>

            <title>Error 404</title>

            <Header cart={cart} />

            <div className="error-container">
                <div className="error-code">404</div>
                <div className="error-title">Page Not Found</div>
                <div className="error-message">
                    Sorry, the page you’re looking for doesn’t exist.
                </div>
                
            </div>


        </>
    );
}

export default ErrorPage;