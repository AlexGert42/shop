import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ItemsType} from "../../store/priceReducer/PriceReducer";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export type ModalItemType = {
    name: string
    discription: string
}

type ModalPropsType = {
    value: boolean
    item: ModalItemType
    closeModal: () => void
}
export const ModalWindow: React.FC<ModalPropsType> = ({value, item, closeModal}) => {


    return (
        <div>
            <Modal
                keepMounted
                open={value}
                onClose={closeModal}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography variant={'h4'} sx={{ mt: 2 }}>
                        Your Buy
                    </Typography>
                    <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
                        {item.name}
                    </Typography>
                    <Typography sx={{ mt: 2 }}>
                        {item.discription}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}