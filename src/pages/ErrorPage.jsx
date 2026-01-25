import { Link } from 'react-router';
import Header from '../components/Header.jsx'
import './ErrorPage.css'

function ErrorPage() {
    return (
        <>
            <Header />

            <div class="error-container">
                <div class="error-code">404</div>
                <div class="error-title">Page Not Found</div>
                <div class="error-message">
                    Sorry, the page you’re looking for doesn’t exist.
                </div>
                
            </div>


        </>
    );
}

export default ErrorPage;