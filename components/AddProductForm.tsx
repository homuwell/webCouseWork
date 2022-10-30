import React from 'react';
import {Button, Container, TextField, Typography} from "@mui/material";
import {useMutation} from "@apollo/client";
import {ADD_PRODUCT} from "../src/GraphQL/Mutation";
import { Alert } from '@mui/material';

function AddProductForm(props) {
    const [addProduct] = useMutation(ADD_PRODUCT);
    const [requestMessage, setRequestMessage] = React.useState('');
    const [requestFlag, setRequestFlag] = React.useState(false);
    const [product, setProduct] = React.useState<any>({
        name: '',
        category: '',
        description: '',
        cost: 0,
        quantity: 0,
        file: null
    });
    const addProductRequest = () => {
        addProduct({
            variables: {
                name: product.name,
                category: product.category,
                description: product.description,
                cost: product.cost,
                quantity: product.quantity,
                image: product.file
            }
        }).then((res) => {
                setProduct({    name: '',
                    category: '',
                    description: '',
                    cost: 0,
                    quantity: 0,
                    file: null});
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
                Создать товар
            </Typography>

            {(requestMessage && requestFlag === false) && <Alert  severity="error">{requestMessage}</Alert>}
            {(requestMessage && requestFlag) && <Alert  severity="success">{requestMessage}</Alert>}
            <TextField
                fullWidth
                type="text"
                label="Название товара"
                placeholder="Название вашего товара"
                margin="normal"
                variant="outlined"
                value={product.name}
                onChange={event => {
                    const newProduct = {...product, name: event.target.value};
                    setProduct(newProduct);
                }}
            >
            </TextField>
            <TextField
                fullWidth
                type="text"
                label="Категория товара"
                placeholder="Категория вашего товара"
                margin="normal"
                variant="outlined"
                value={product.category}
                onChange={event=> {
                    const newProduct = {...product, category: event.target.value};
                    setProduct(newProduct);
                }}
            >
            </TextField>
            <TextField
                fullWidth
                type="text"
                label="Описание товара"
                placeholder="Ваше описание товара"
                margin="normal"
                multiline={true}
                rows={5}
                variant="outlined"
                value={product.description}
                onChange={event=> {
                    const newProduct = {...product, description: event.target.value};
                    setProduct(newProduct);
                }}
            >
            </TextField>
            <TextField
                fullWidth
                type="number"
                label="Цена товара"
                placeholder="Ваша цена товара"
                margin="normal"
                variant="outlined"
                value={product.cost}
                onChange={event=> {
                    const newProduct = {...product, cost: parseInt(event.target.value)};
                    setProduct(newProduct);
                }}
            >
            </TextField>
            <TextField
                fullWidth
                type="number"
                label="Количество товара"
                placeholder="Ваше количество товара"
                margin="normal"
                variant="outlined"
                value={product.quantity}
                onChange={event=> {
                    const newProduct = {...product, quantity: parseInt(event.target.value)};
                    setProduct(newProduct);
                }}
            >
            </TextField>
            <input
                type="file"
                name="logo"
                className="form-control"
                onChange={({target: {files}}) => {
                    const newProduct = {...product, file: files[0]};
                    setProduct(newProduct);
                }}
            />
            <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={addProductRequest}
            >
                Добавить Товар
            </Button>
        </>
    );
}

export default AddProductForm;