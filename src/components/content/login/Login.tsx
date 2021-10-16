import React, {useState} from "react";
import {Box, Button, FormControl, Grid, TextField} from "@mui/material";
import styles from "./Login.module.scss";


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";





export const Login: React.FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')





    const clickHendler = async () => {


        const auth = getAuth();
        console.log(auth.currentUser)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    return (
        <Box>
            <FormControl className={styles.login__form}>
                <Grid className={styles.login__item}>
                    <TextField
                        label="Login"
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