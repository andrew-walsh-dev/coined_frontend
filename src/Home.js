import { useState, useEffect } from 'react';
import Coin from './Coin';
import $ from 'jquery';
import API_BASE_URL from './env';

export default function Home() {
    
    const [ coins, setCoins ] = useState([]);

    useEffect(() => {
        $.ajax({
            type: 'GET',
            url: API_BASE_URL + '/coins',
        })
        .then((res) => {
            setCoins(res.coins);
        })
    }, []);

    return (
        <div className='d-flex flex-column w-50 m-auto'>
            {
                coins.map((coin, key) => {
                    return <Coin key={key} coinInfo={coin} />
                })
            }
        </div>
    )
}