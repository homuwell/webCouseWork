import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import { Alert } from '@mui/material';
import {useMutation} from "@apollo/client";
import {DEL_PRODUCT} from "../src/GraphQL/Mutation";

function DeleteProductForm(props) {
    const [productName, setProductName] = React.useState('');
    const [delProduct] = useMutation(DEL_PRODUCT);
    const [requestMessage, setRequestMessage] = React.useState('');
    const [requestFlag, setRequestFlag] = React.useState(false);
    const deleteProductRequest = () => {
        delProduct({
            variables: {
                name: productName
            }
        }).then((res) => {
            setRequestMessage('Товар успешно добавлен');
            setRequestFlag(true);
        }).catch((err)=> {
            setRequestMessage(err.message);
            setRequestFlag(false);
        })
    }

    return (
        <>
            <Typography variant="h3" align="center">
                Удалить товар
            </Typography>
            {(requestMessage && requestFlag === false) && <Alert  severity="error">{requestMessage}</Alert>}
            {(requestMessage && requestFlag) && <Alert  severity="success">{requestMessage}</Alert>}
            <TextField
                fullWidth
                id="login"
                type="text"
                label="Название товара"
                placeholder="Название вашего товара"
                margin="normal"
                variant="outlined"
                value={productName}
                onChange={event=> {
                    setProductName(event.target.value);
                }}
            >
            </TextField>
            <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={deleteProductRequest}
            >
                Удалить Товар
            </Button>
        </>
    );
}

export default DeleteProductForm;