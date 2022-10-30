import React from 'react';
import {AppBar, Typography,Button, Toolbar,IconButton} from '@mui/material'
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import cookie from 'js-cookie'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
    }),
);
function Navigation(props) {
    const classes = useStyles();
    const [userStatus,setUserStatus] = React.useState(null);
    const logOut = () => {
        cookie.remove('token');
        localStorage.removeItem('user_login');
    }
    React.useEffect(()=> {
        setUserStatus(localStorage.getItem('user_login'));
    },[]);
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Магазин бытовой техники 1000-7
                    </Typography>
                    <Link href="/">
                        <Button color='inherit'>
                            На главную
                        </Button>
                    </Link>
                    {userStatus && <Link href="/basket">
                        <Button color="inherit">Корзина</Button>
                    </Link>
                    }
                    {!userStatus && <Link href="/login">
                        <Button color="inherit">Войти</Button>
                    </Link>
                    }
                    {!userStatus  && <Link href="/register">
                        <Button color="inherit">Зарегистрироваться</Button>
                    </Link>
                    }
                    {userStatus  &&
                    <Link href={"/profile/[name]"} as={`/profile/${userStatus}`}>
                        <Button color="inherit">{localStorage.getItem('user_login')}</Button>
                        </Link>
                        }
                    {userStatus  &&
                    <Link href="/">
                        <Button color="inherit" onClick={logOut}>Выйти</Button>
                    </Link>
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navigation;