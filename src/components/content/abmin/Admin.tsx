import React, {useState} from "react";
import {Box, Button, FormControl, Grid, TextField, Typography} from "@mui/material";
import styles from './Admin.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {addPrice, ItemsType, removePrice} from "../../../store/priceReducer/PriceReducer";
import {RootState} from "../../../store/store";


export const Admin = () => {
    const items = useSelector<RootState, ItemsType[]>(state => state.price.items)
    const dispatch = useDispatch()

    const [item, setItem] = useState({
        name: '',
        discription: '',
        cost: ''
    })

    const [id, setId] = useState('')

    const submitHendler = (e: any) => {
        e.preventDefault()

        if (
            item.name.trim().length > 0 &&
            item.cost.trim().length > 0 &&
            item.discription.trim().length > 0
        )
            dispatch(addPrice(item))
    }




    const removeHendler = () => {

        dispatch(removePrice(id.trim()))
    }

    return (
        <Box className={styles.price}>
            <Grid spacing={10}>
                <Typography variant={'h5'}>Create Item</Typography>
                <FormControl onSubmit={submitHendler}>
                    <Grid className={styles.form__item}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            value={item.name}
                            onChange={e => setItem({...item, name: e.target.value})}
                        />
                    </Grid>
                    <Grid className={styles.form__item}>
                        <TextField
                            label="Cost"
                            variant="outlined"
                            value={item.cost}
                            onChange={e => setItem({...item, cost: e.target.value})}
                        />
                    </Grid>
                    <Grid className={styles.form__item}>
                        <TextField
                            label="Discription"
                            variant="outlined"
                            value={item.discription}
                            onChange={e => setItem({...item, discription: e.target.value})}
                        />
                    </Grid>
                    <Grid className={styles.form__item}>
                        <Button onClick={submitHendler} variant="outlined">Outlined</Button>
                    </Grid>
                </FormControl>
            </Grid>


            <Grid spacing={10} className={styles.price__list}>
                <TextField
                    label="Search"
                    variant="outlined"
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <Button onClick={removeHendler} variant="outlined">Remove</Button>
                {
                    items && items.map(item => {
                        return (
                            <div className={styles.price__list_item}>
                                <p>id: {item._id}</p>
                                <p>name: {item.name}</p>
                                <p>cost: {item.cost}</p>
                                <p>discription: {item.discription}</p>
                            </div>
                        )
                    })
                }
            </Grid>

        </Box>
    )
}