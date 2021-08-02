import './Landing.css';
import Button from '@material-ui/core/Button';
import { BASE_URL } from './env';

export default function Landing(props) {
    
    return (
        <div className="landing-container">
            <div className='headline'>
                <h1>Social Media meets Cryptocurrency.</h1>
                <br />
                <h3>Learn. Follow. Discuss.</h3>
            </div>
            <div className="buttons">
                <Button variant="outlined" onClick={() =>  window.location = BASE_URL + '/register'}>Sign Up</Button>
                <Button variant="outlined" onClick={() =>  window.location = BASE_URL + '/login'}>Login</Button>
            </div>
        </div>
    );
}