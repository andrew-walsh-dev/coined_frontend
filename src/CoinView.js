import CryptoChart from "./CryptoChart";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import $ from 'jquery';
import API_BASE_URL from './env';

export default function CoinView(props) {
    
    const { coinName } = useParams();
    const [ coinInfo, setCoinInfo ] = useState([]);

    useEffect(() => {
        $.ajax({
          type: "GET",
          url: API_BASE_URL + "/coins?coins=" + coinName
        }).then((res) => {
          setCoinInfo(res.coins[0]);
        })
      }, []);
    
    return (
        <>
        <CryptoChart coinName={coinName} />
        <div>{coinInfo.price}</div>
        </>
    )
}