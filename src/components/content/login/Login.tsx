import React, {useState} from "react";
import {Box, Button, FormControl, Grid, TextField} from "@mui/material";
import styles from "./Login.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {authMe} from "../../../store/appReducer/AppReducer";
import {RootState} from "../../../store/store";
import {Redirect} from "react-router-dom";


export const Login: React.FC = () => {
    const auth = useSelector<RootState, boolean>(state => state.app.auth)
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const clickHendler = async () => {
        dispatch(authMe({email, password}))
    }

    if (auth) {
        return <Redirect to={'admin'}/>
    }

    return (
        <Box>
            <FormControl className={styles.login__form}>
                <Grid className={styles.login__item}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={e => setEmail(e.target.value)}

                    />
                </Grid>
                <Grid className={styles.login__item}>
                    <TextField
                        label="Password"
                        variant="outlined"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Grid>
                <Grid className={styles.login__item}>
                   <Button onClick={clickHendler} variant="contained">Go</Button>
                </Grid>
            </FormControl>
        </Box>
    )
}