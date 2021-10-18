import {createTheme, ThemeProvider} from '@mui/material/styles'
import React, {useEffect} from 'react';
import {Content} from './components/content/Content';
import {Footer} from './components/footer/Footer';
import {Header} from './components/header/Header';
import {useDispatch, useSelector} from "react-redux";
import {fetchPrice} from "./store/priceReducer/PriceReducer";
import {fetchUser} from "./store/binReducer/BinReducer";
import {RootState} from "./store/store";
import {ModalWindow} from "./components/modal/Modal";

const theme = createTheme({
    palette: {
        primary: {
            main: '#00897b',
        },
        secondary: {
            main: '#c62828',
        },
    },
});


export const App = () => {
    const disptch = useDispatch()
    const auth = useSelector<RootState, boolean>(state => state.app.auth)
    useEffect(() => {
        if (!auth) {
            disptch(fetchUser())
        }
        disptch(fetchPrice())
    }, [])


    return (
        <>
            <ModalWindow/>
            <ThemeProvider theme={theme}>
                <Header/>
                <main className={'container'}>
                    <Content/>
                </main>
                <Footer/>
            </ThemeProvider>
        </>

    )
}




