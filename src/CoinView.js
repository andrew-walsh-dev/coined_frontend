import CryptoChart from "./CryptoChart";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CoinView.css'
import $ from 'jquery';
import API_BASE_URL from './env';

export default function CoinView(props) {
    
    const { coinName } = useParams();
    const [ coinInfo, setCoinInfo ] = useState([]);
    const [ chartData, setChartData ] = useState([]);

    useEffect(() => {
        $.ajax({
          type: "GET",
          url: API_BASE_URL + "/coins?coins=" + coinName
        }).then((res) => {
          setCoinInfo(res.coins[0]);
          let data = []
          for (let pricePoint of res.coins[0].history) {
            data.push({
                'time': pricePoint.date,
                'value': pricePoint.price   
            })
          }
          setChartData(data);
        })
      }, [coinName]);
    
    return (
        <>
        <div className='m-auto'>
          <h1 id='top'>{coinInfo.name}  <span className='text-secondary'>{coinInfo.symbol}</span></h1>
          <CryptoChart data={chartData} />
        </div>
        <div className='d-flex justify-content-center mt-5'>
          <h1 className='mx-5'>${Number(coinInfo.price).toFixed(2)}</h1>
          <table id='coin-table' className='mx-5'>
            <tr>
              <td>
                <h4>Market Cap</h4>
              </td>
              <td>
                <h5>${numberWithCommas(Number(coinInfo.marketCap).toFixed(2))}</h5>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Volume</h4>
              </td>
              <td>
                <h5>{numberWithCommas(Number(coinInfo.volume24hr).toFixed(2))} {coinInfo.symbol}</h5>
              </td>
            </tr>
            <tr>
              <td>
                <h4 className='text-center'>24hr Change</h4>
              </td>
              <td>
                <h5 className='text-center'>{Number(coinInfo.percentChange24hr).toFixed(2)}%</h5>
              </td>
            </tr>
          </table>
        </div>
        </>
    )
}

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}