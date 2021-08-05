import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';

export default function Coin(props) {
    return (
        <Card>
            <CardContent>
                <h5>{props.coinInfo.name} 
                <br />
                  ${props.coinInfo.price}
                 <br />
                24hr % Change: {props.coinInfo.percentChange24hr}%
                 </h5>
            </CardContent>
        </Card>
    )
}