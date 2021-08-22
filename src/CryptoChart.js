import { createChart } from 'lightweight-charts';
import { useEffect } from 'react';
import $ from 'jquery';
import './CryptoChart.css';

export default function CryptoChart(props) {

    useEffect(() => {
        $('.tv-lightweight-charts').remove();   
            const chart = createChart('chart-container', { width: 1200, height: 200 });
            const lineSeries = chart.addLineSeries();
            lineSeries.setData(props.data);
    }, [props.data]);

    return <div id='chart-container' className='mx-auto d-flex justify-content-center'></div>
}