import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react';
import {Content} from './components/content/Content';
import {Footer} from './components/footer/Footer';
import {Header} from './components/header/Header';

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




