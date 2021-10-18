import {Box, Button, ButtonGroup, Grid, Menu, MenuItem, Typography} from '@mui/material';
import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {signOut} from "../../store/appReducer/AppReducer";
import cart from '../../imgs/icons/cart.svg'


export const Header: React.FC = () => {
    const dispatch = useDispatch()
    const data = useSelector<RootState, string>(state => state.app.userData)
    const auth = useSelector<RootState, boolean>(state => state.app.auth)
    const count = useSelector<RootState, number | null>(state => state.bin.cartCount)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const logout = () => {
        dispatch(signOut())
    }

    return (
        <Box className={styles.header}>
            <Grid container className={`${styles.header__inner} container`}>
                <Typography className={styles.header__title} variant={'h3'}>
                    Shop
                </Typography>
                <ButtonGroup>
                    {
                        auth ?
                            <Button className={styles.header__btn} onClick={logout}>{data}</Button>
                            :
                            <Button className={styles.header__btn}>
                                <NavLink onClick={handleClose} to={'/login'}>Login</NavLink>
                            </Button>
                    }
                    <Button
                        className={styles.header__btn}
                        id="basic-button"
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        Menu
                    </Button>
                    {
                        !auth && <Button className={styles.header__btn}>
                            <NavLink onClick={handleClose} to={'/bin'}>
                                {
                                    count && <span className={styles.header__count}>{count}</span>
                                }
                                <img src={cart} alt=" "/>
                            </NavLink>
                        </Button>
                    }
                </ButtonGroup>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem className={styles.header__link}>
                        <NavLink onClick={handleClose} to={'/price'}>Price</NavLink>
                    </MenuItem>

                    {
                        auth ?
                            <MenuItem className={styles.header__link}>
                                <NavLink onClick={handleClose} to={'/admin'}>Admin</NavLink>
                            </MenuItem>
                            :
                            <MenuItem className={styles.header__link}>
                                <NavLink onClick={handleClose} to={'/bin'}>Bin</NavLink>
                            </MenuItem>
                    }
                </Menu>
            </Grid>
        </Box>
    )
}