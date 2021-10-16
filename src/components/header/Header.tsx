import {Box, Button, Grid, Menu, MenuItem, Typography} from '@mui/material';
import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box className={styles.header}>
            <Grid container className={`${styles.header__inner} container`}>
                <Typography className={styles.header__title} variant={'h3'}>
                    Shop
                </Typography>
                <Button
                    className={styles.header__btn}
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    Menu
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem className={styles.header__link}><NavLink onClick={handleClose} to={'/price'}>Price</NavLink></MenuItem>
                    <MenuItem className={styles.header__link}><NavLink onClick={handleClose} to={'/bin'}>Bin</NavLink></MenuItem>
                    <MenuItem className={styles.header__link}><NavLink onClick={handleClose} to={'/admin'}>Admin</NavLink></MenuItem>
                    <MenuItem className={styles.header__link}><NavLink onClick={handleClose} to={'/login'}>Login</NavLink></MenuItem>
                </Menu>
            </Grid>
        </Box>
    )
}