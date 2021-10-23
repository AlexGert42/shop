import {createTheme, ThemeProvider} from '@mui/material/styles'
import React, {useEffect} from 'react';
import {Content} from './components/content/Content';
import {Footer} from './components/footer/Footer';
import {Header} from './components/header/Header';
import {useDispatch, useSelector} from "react-redux";
import {fetchPrice} from "./store/priceReducer/PriceReducer";
import {fetchUser} from "./store/binReducer/BinReducer";
import {RootState} from "./store/store";
import {ModalItemType, ModalWindow} from "./components/modal/Modal";
import {showModal} from "./store/appReducer/AppReducer";

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
    const modalOpen = useSelector<RootState, boolean>(state => state.app.modal)
    const modalContent = useSelector<RootState, ModalItemType>(state => state.app.modalCntent)

    useEffect(() => {
        if (!auth) {
            disptch(fetchUser())
        }
        disptch(fetchPrice())
    }, [])

    const closeModal = () => {
        disptch(showModal({value: false, item: {name: '', discription: ''}}))
    }

    return (
        <>
            <ModalWindow value={modalOpen} item={modalContent} closeModal={closeModal}/>
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




