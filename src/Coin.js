import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';

export default function Coin(props) {
    
    return (
        <Card>
            <CardContent>
                <h5>Coin Name: {props.coinInfo.name} | Coin Price: {props.coinInfo.price}</h5>
            </CardContent>
        </Card>
    )
}