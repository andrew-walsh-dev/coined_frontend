import { CardContent } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';

export default function Coin(props) {
    return (
        <Card>
            <CardContent>
                <Link to={'/coin/' + props.coinInfo.name.toLowerCase()}><h5>{props.coinInfo.name}
                <br />
                  ${props.coinInfo.price}
                 <br />
                24hr % Change: {props.coinInfo.percentChange24hr}%
                <br />
                24hr Volume: {props.coinInfo.volume24hr}$
                <br />
                Market Cap: {props.coinInfo.marketCap}$
                 </h5>
                 </Link>
            </CardContent>
        </Card>
    )
}