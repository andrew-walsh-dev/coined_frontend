import './Landing.css';
import Button from '@material-ui/core/Button';
import CryptoSky from './CryptoSky';

export default function Landing() {
    return (
        <div>
            <div className="landing-container">
                <div className='headline'><h1>Social Media meets Cryptocurrency.</h1><br /><h3>Learn. Follow. Discuss.</h3>
                </div>
                <div className="buttons">
                    <Button variant="outlined">Sign Up</Button>
                    <Button variant="outlined">Login</Button>
                </div>
            </div>
            <CryptoSky />
        </div>
    );
}