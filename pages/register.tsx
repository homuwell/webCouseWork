import React from 'react';
import {Grid, Container, TextField, Button, Typography,} from '@mui/material';
import { Alert } from '@mui/material';
import {CREATE_USER_MUTATION} from "../src/GraphQL/Mutation";
import Navigation from "../components/navigation"
import {useMutation} from '@apollo/client';
function Register(props) {
    const [createUser] = useMutation(CREATE_USER_MUTATION);
    const [errorMessage, setErrorMessage] = React.useState('');
    const [successMessage, setSuccessMessage] = React.useState('');
    const [login, setLogin] = React.useState('');
    const [name, setName] = React.useState('');
    const [surname, setSurname] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const addUser = () => {
        createUser({
            variables: {
                login,
                name,
                surname,
                phoneNumber,
                email,
                password
            }
        }).then((msg) => {
            setSuccessMessage('Вы успешно зарегистрировались');
            setErrorMessage('');
        }).catch((err)=> {
            setErrorMessage(err.message);
            setSuccessMessage('');
        })
    }
    return (
        <div>
            <Navigation/>
            <Container maxWidth='md'>
                <Typography variant="h3" align="center">
                    Регистрация
                </Typography>
                {errorMessage && <Alert  severity="error">{errorMessage}</Alert>}
                {successMessage && <Alert severity="success">{successMessage}</Alert>}
                <TextField
                    fullWidth
                    id="login"
                    type="text"
                    label="Логин"
                    placeholder="Ваш Логин"
                    margin="normal"
                    variant="outlined"
                    value={login}
                    onChange={event=> {
                        setLogin( event.target.value);
                    }}
                >
                </TextField>

                <TextField
                    fullWidth
                    id="name"
                    type="text"
                    label="Имя"
                    placeholder="Ваше имя"
                    margin="normal"
                    variant="outlined"
                    value={name}
                    onChange={event=> {
                        setName( event.target.value);
                    }}
                >
                </TextField>
                <TextField
                    fullWidth
                    id="surname"
                    type="text"
                    label="Фамилия"
                    placeholder="Ваша фамилия"
                    margin="normal"
                    variant="outlined"
                    value={surname}
                    onChange={event=> {
                        setSurname( event.target.value);
                    }}
                >
                </TextField>

                <TextField
                    fullWidth
                    id="number"
                    type="tel"
                    label="Номер Телефона"
                    placeholder="Ваш номера телефона"
                    margin="normal"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={event=> {
                        setPhoneNumber( event.target.value);
                    }}
                >
                </TextField>

                <TextField
                    fullWidth
                    id="email"
                    type="email"
                    label="Электронная почта"
                    placeholder="Ваша электронная почта"
                    margin="normal"
                    variant="outlined"
                    value={email}
                    onChange={event=> {
                        setEmail( event.target.value);
                    }}
                >

                </TextField>

                <TextField
                    fullWidth
                    id="password"
                    type="password"
                    label="Пароль"
                    placeholder="Ваш пароль"
                    margin="normal"
                    variant="outlined"
                    value={password}
                    onChange={event=> {
                        setPassword( event.target.value);
                    }}
                >
                </TextField>

                <TextField
                    fullWidth
                    id="repeatPassword"
                    type="password"
                    label="Повторите пароль"
                    placeholder="Ваш пароль"
                    margin="normal"
                    variant="outlined"
                >
                </TextField>
                <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    onClick = {addUser}
                >
                    Зарегистрироваться
                </Button>
            </Container>
        </div>
    );
}

export default Register;