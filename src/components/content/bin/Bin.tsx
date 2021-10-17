import React, {useEffect, useState} from 'react';
import styles from './Bin.module.scss';
import {useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {ItemsType} from "../../../store/priceReducer/PriceReducer";
import Card from '@mui/material/Card';
import {CardContent, Grid, Typography} from '@mui/material';

export const Bin: React.FC = () => {
    const userBin = useSelector<RootState, ItemsType[]>(state => state.bin.userBin)
    const cost = useSelector<RootState, number>(state => state.bin.fullCost)



    return (
        <div className={styles.bin}>
            {
                userBin && userBin.map((item, i) => {

                    return (
                        <Card key={i}>
                            <CardContent>
                                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                    {item.name}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {item.cost}
                                </Typography>
                                <Typography sx={{mb: 1.5}} color="text.secondary">
                                    {item.discription}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                })
            }
            <Grid>
                <Typography variant={'h2'} color="text.secondary" gutterBottom>
                    {cost}
                </Typography>
            </Grid>
        </div>
    )
}