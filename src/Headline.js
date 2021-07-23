import Button from '@material-ui/core/Button';

export default function Headline(props) {
    return (
        <div className="landing-container">
            <div className='headline'>
                <h1>Social Media meets Cryptocurrency.</h1>
                <br />
                <h3>Learn. Follow. Discuss.</h3>
            </div>
            <div className="buttons">
                <Button variant="outlined" onClick={() =>  props.setForm('register') }>Sign Up</Button>
                <Button variant="outlined" onClick={() =>  props.setForm('login') }>Login</Button>
            </div>
        </div>
    );
}