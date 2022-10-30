import React from 'react';
import {
    AppBar,
    Typography,
    Button,
    Toolbar,
    IconButton,
    Container,
    List,
    ListItem,
    ListItemText
} from '@mui/material'
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'
import Navigation from "../../components/navigation";
import { Alert } from '@mui/material';
import {initializeApollo} from "../../lib/apolloClients";
import {GET_USER_DATA} from "../../src/GraphQL/Query";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);
export default function Profile(props) {
    return (
        <div>
            <Navigation />
            <Container maxWidth='md'>
                <Typography variant="h3" align="center">
                    Профиль
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary={`Логин: ${props.result.data.login} `  } />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Имя: ${props.result.data.name} `  } />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Фамилия: ${props.result.data.surname} `  } />
                    </ListItem>
                    <ListItem>
                        {console.log(props.result.data.type)}
                        <ListItemText primary={`Тип аккаунта: ${props.result.data.type === false ? 'Пользователь' : 'Администратор'} `} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Почта: ${props.result.data.email} `  } />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary={`Телефон: ${props.result.data.phoneNumber} `  } />
                    </ListItem>
                </List>


            </Container>
        </div>
    );
}

export async function getServerSideProps(context) {
    let result = {data: '', err: ''};
    if (context.req) {
        const apolloClient = initializeApollo();
        await apolloClient.query({
            query: GET_USER_DATA,
            variables: {
                token: context.req.cookies.token,
            }
        }).then((res) => {
            result.data = res.data.getUserData;
        }).catch(err => {
           result.err = err.message;
        })
    }
        return {props: { result}};
}