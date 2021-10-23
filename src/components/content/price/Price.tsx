import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import React from 'react';
import styles from './Price.module.scss';
import img from '../../../imgs/dont_photo.png'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {ItemsType} from '../../../store/priceReducer/PriceReducer';
import {addBinItem} from "../../../store/binReducer/BinReducer";
import { showModal } from '../../../store/appReducer/AppReducer';




export const Price: React.FC = () => {
    const items = useSelector<RootState, ItemsType[]>(state => state.price.items)
    const dispatch = useDispatch()

    const addItem = (item: ItemsType) => {
        dispatch(showModal({value: true, item: {name: item.name, discription: item.discription}}))
        dispatch(addBinItem(item))
    }

    return (
        <div className={styles.price}>
            {
                items ?
                    items.map(item => {
                        return <CardComponent
                            key={item._id}
                            id={item._id}
                            name={item.name}
                            cost={item.cost}
                            discription={item.discription}
                            eventHendler={addItem}
                        />
                    })
                    :
                    <p>Not Items</p>
            }
        </div>
    )
}


type CardComponentType = {
    id: string
    name: string,
    discription: string
    cost: string
    eventHendler: (item: ItemsType) => void
}

export const CardComponent = ({id, name, discription, cost, eventHendler}: CardComponentType) => {

    const clickHendler = () => eventHendler({_id: id, name, discription, cost})

    return (
        <Card className={styles.card} onClick={clickHendler}>
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
                        Cost: {cost} $
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {discription}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}