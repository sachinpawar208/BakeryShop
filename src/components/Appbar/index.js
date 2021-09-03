import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1
    },
    link: {
        textDecoration: "none!important",
        color: "white",
        '&:hover': {
            color: "white"
        }

    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    IconBtn: {
        border: "none!important",
        fontSize: "1rem",
        outline: "none!important"
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        '&:hover': {},
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto'
        }
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${
            theme.spacing(4)
        }px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch'
        }
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    }
}));

export default function Appbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };


    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu anchorEl={mobileMoreAnchorEl}
            anchorOrigin={
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
            id={mobileMenuId}
            keepMounted
            transformOrigin={
                {
                    vertical: 'top',
                    horizontal: 'right'
                }
            }
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}>
            <MenuItem>

                <p>About
                </p>
            </MenuItem>
            <MenuItem>

                <p>Customer Support</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <Link to={
                    {pathname: "/login"}
                }>
                    <p style={
                        {color: "black"}
                    }>Login</p>
                </Link>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={
            classes.grow
        }>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={
                            classes.IconBtn
                        }
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"></IconButton>
                    <Link to={
                            {pathname: "/dashboard"}
                        }
                        className={
                            classes.link
                    }>
                        <Typography className={
                                classes.title
                            }
                            variant="h6"
                            noWrap>
                            Bakery Store
                        </Typography>
                    </Link>

                    <div className={
                        classes.grow
                    }/>
                    <div className={
                        classes.sectionDesktop
                    }>
                        <IconButton className={
                                classes.IconBtn
                            }
                            aria-label="show 4 new mails"
                            color="inherit">
                            About
                        </IconButton>
                        <IconButton className={
                                classes.IconBtn
                            }
                            aria-label="show 17 new notifications"
                            color="inherit">
                            Customer Support
                        </IconButton>
                        <Link to={
                                {pathname: "/login"}
                            }
                            className={
                                classes.link
                        }>
                            <IconButton className={
                                    classes.IconBtn
                                }
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit">
                                Login
                            </IconButton>
                        </Link>
                    </div>
                    <div className={
                        classes.sectionMobile
                    }>
                        <IconButton aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit">
                            <MenuIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu} </div>
    );
}
