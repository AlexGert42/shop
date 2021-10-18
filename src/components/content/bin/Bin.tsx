import React from 'react';
import styles from './Bin.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import Card from '@mui/material/Card';
import {Button, CardContent, Grid, Typography} from '@mui/material';
import {ItemUserType, removeBinItem} from "../../../store/binReducer/BinReducer";

export const Bin: React.FC = () => {
    const dispatch = useDispatch()
    const userBin = useSelector<RootState, ItemUserType[] | null>(state => state.bin.userBin)
    const cost = useSelector<RootState, number>(state => state.bin.fullCost)

    const removeHendler = (id: string) => {
        dispatch(removeBinItem(id))
    }

    return (
        <div className={styles.bin}>
            <Grid className={styles.bin__items}>
                {
                    userBin && userBin.map(item => {
                        return (
                            <Card className={styles.bin__item} key={item._idItem}>
                                <CardContent>
                                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        {item.cost} $
                                    </Typography>
                                    <Typography sx={{mb: 1.5}} color="text.secondary">
                                        {item.discription}
                                    </Typography>
                                    <Button onClick={() => removeHendler(item._idItem)}>Remove</Button>
                                </CardContent>

                            </Card>
                        )
                    })
                }
            </Grid>
            <Grid className={styles.bin__cost}>
                <Typography variant={'h2'} color="text.secondary" gutterBottom>
                    {cost.toFixed(2)} $
                </Typography>
            </Grid>
        </div>
    )
}