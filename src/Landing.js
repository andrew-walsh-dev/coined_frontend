import './Landing.css';
import Login from './Login';
import Headline from './Headline';
import { useAnimatePresence } from "use-animate-presence";
import { useState } from 'react';

export default function Landing() {
    
    const [form, setForm] = useState('headline');
    //for mount/unmount animation
    const landingVariants = {
        x: { from: 0, to: 800 }
    }
    
    if (form === 'headline') {
        return (
            <Headline setForm={setForm} />
        )
    }
    else if (form === 'login') {
        return (
            <Login setForm={setForm}/>
        );
    }
    // else {
    //     return (
    //         <Register />
    //     )
    // }
}