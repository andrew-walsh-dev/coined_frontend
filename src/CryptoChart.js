import { createChart } from 'lightweight-charts';
import { useEffect } from 'react';
import $ from 'jquery';
import API_BASE_URL from "./env";
import './CryptoChart.css';

export default function CryptoChart(props) {

    useEffect(() => {
        $.ajax({
            type: "GET",
            url: API_BASE_URL + "/coins?coins=bitcoin",
          }).then((res) => {
            console.log(res);
            let coin = res.coins[0];
            let data = [];
            for (let pricePoint of coin.history) {
                data.push({
                    'time': pricePoint.date,
                    'value': pricePoint.price   
                })
            }
            const chart = createChart('chart-container', { width: 800, height: 600 });
            const lineSeries = chart.addLineSeries();
            lineSeries.setData(data);
          });
    }, []);

    return <div id='chart-container' className='mx-auto d-flex justify-content-center'></div>
}