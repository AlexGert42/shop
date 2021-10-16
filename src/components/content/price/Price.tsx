import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import React from 'react';
import styles from './Price.module.scss';
import img from '../../../imgs/dont_photo.png'
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {ItemsType} from '../../../store/priceReducer/PriceReducer';

export const Price: React.FC = () => {

    const items = useSelector<RootState, ItemsType[]>(state => state.price.items)
    console.log('items', items)

    return (
        <div className={styles.price}>
            {
                items ?
                items.map(item => {
                    console.log(item)
                    return <CardComponent
                        key={item._id}
                        name={item.name}
                        cost={item.cost}
                        discription={item.discription}
                    />
                })
                    :
                    <p>not items</p>
            }
        </div>
    )
}


type CardComponentType = {
    name: string,
    discription: string
    cost: string
    pic?: string
}

export const CardComponent: React.FC<CardComponentType> = ({name, discription, cost}) => {
    return (
        <Card className={styles.card} sx={{maxWidth: 345}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h4" component="div">
                        Cost: {cost}$
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {discription}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}