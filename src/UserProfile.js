import profPic from './images/sample-profile.png';
import './UserProfile.css';

export default function UserProfile(props) {
    
    const user = props.user;
    
    return (
        <div className='d-flex justify-content-center picture-container'>
            <img src={profPic} id='profile-pic' className='rounded mx-5' alt='profile'></img>
            <div className='d-flex flex-column'>
                <h1>
                    @{user.username}
                </h1>
                <h4>Followers: 5</h4>
                <h4>Following: 5</h4>
            </div>
        </div>
    )
}