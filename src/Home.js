import { useState, useEffect } from 'react';
import Coin from './Coin';
import $ from 'jquery';
import API_BASE_URL from './env';
import './Home.css'

export default function Home() {

    const [coins, setCoins] = useState([]);
    const [biggestMovers, setBiggestMovers] = useState([]);

    useEffect(() => {
        $.ajax({
            type: 'GET',
            url: API_BASE_URL + '/coins',
        })
            .then((res) => {
                console.log(res);
                setCoins(res.coins);
                setBiggestMovers(res.biggestMovers);
            })
    }, []);

    return (
        <div className='cards d-flex w-100 h-100 align-items-center'>
            <div className='d-flex m-auto'>
                {
                    coins.map((coin, key) => {
                        return <Coin key={key} coinInfo={coin} />
                    })
                }
            </div>
        </div>
    )
}