import React from 'react';
import {Container, TextField, Button, Typography} from '@mui/material';
import cookie from 'js-cookie'
import { Alert } from '@mui/material';
import {LOGIN_USER_MUTATION} from "../src/GraphQL/Mutation";
import {useMutation} from '@apollo/client';
import Navigation from "../components/navigation"
import { useRouter } from 'next/router'
import {useFormik, FormikProps} from 'formik';
import * as Yup from 'yup';
function Login(props) {

    const router = useRouter();
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorMessage, setErrorMessage] = React.useState('');
    const [successMessage, setSuccessMessage] = React.useState('');
    const [loginUser] = useMutation(LOGIN_USER_MUTATION);
    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        validationSchema: Yup.object({
            login: Yup.string()
                .min(4, 'Логин не может быть меньше 4 символов')
                .max(30, 'Логин не может быть больше 30 символов')
                .required('Поле обязательно для заполнения'),
            password: Yup.string()
                .max(50, 'Must be 50 characters or less')
                .required('Required'),
        }),
        onSubmit: ({login, password},actions) => {
            console.log(5);
            loginUser({
                variables: {
                    login,
                    password
                }
            }).then((res) => {
                setSuccessMessage('Вы успешно вошли в систему');
                localStorage.setItem('user_login',res.data.LoginUser.login);
                cookie.set('token',res.data.LoginUser.token);
                setErrorMessage('');
                router.push('/');
            }).catch((err)=> {
                setErrorMessage(err.message);
                actions.setFieldError('general', err.message);
                console.log(err);
                setSuccessMessage('');
            })
        },
    });


    return (
        <>
            <Navigation />
            <Container maxWidth='md'>
                <Typography variant="h3" align="center">
                        Вход в аккаунт
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="login"
                    type="text"
                    label="Логин"
                    placeholder="Ваш Логин"
                    margin="normal"
                    variant="outlined"
                    value={formik.values.login}
                    error={formik.touched.login && Boolean(formik.errors.login)}
                    onChange={formik.handleChange}
                    helperText={formik.touched.login && formik.errors.login}
                />

                <TextField
                    fullWidth
                    id="password"
                    type="password"
                    label="Пароль"
                    placeholder="Ваш пароль"
                    margin="normal"
                    variant="outlined"
                    value={formik.values.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    onChange={formik.handleChange}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button
                    variant="contained"
                    fullWidth
                    color="primary"
                    type="submit"
                >
                    Войти
                </Button>
                </form>
            </Container>
        </>
    );
}

export default Login;