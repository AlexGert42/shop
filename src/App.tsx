import {createTheme, ThemeProvider} from '@mui/material/styles'
import React, {useEffect} from 'react';
import {Content} from './components/content/Content';
import {Footer} from './components/footer/Footer';
import {Header} from './components/header/Header';
import {useDispatch} from "react-redux";
import {fetchPrice} from "./store/priceReducer/PriceReducer";

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

    useEffect(() => {
        disptch(fetchPrice())
    }, [])


    return (
        <ThemeProvider theme={theme}>
            <Header/>
            <main className={'container'}>
                <Content/>
            </main>
            <Footer/>
        </ThemeProvider>
    )
}




