import './Landing.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function Landing(props) {
    
    return (
        <div className="landing-container">
            <div className='headline'>
                <h1>Social Media meets Cryptocurrency.</h1>
                <br />
                <h3>Learn. Follow. Discuss.</h3>
            </div>
            <div className="flex-container">
                <div className="register-button">
                    <Link to='/register' style={{ textDecoration: 'none' }}><Button variant="outlined">Join</Button></Link>
                </div>    
                <div className="login-button">
                    <Link to='/login' style={{ textDecoration: 'none' }}><Button variant="outlined">Login</Button></Link>
                </div>
            </div>
        </div>
    );
}