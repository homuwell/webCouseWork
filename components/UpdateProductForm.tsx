import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import { Alert } from '@mui/material';
import {useLazyQuery, useMutation} from "@apollo/client";
import AddProductForm from './AddProductForm'
import {GET_PRODUCT_BY_NAME} from "../src/GraphQL/Query";
import {UPDATE_PRODUCT} from "../src/GraphQL/Mutation";

function UpdateProductForm(props) {
    const [findProduct, setFindProduct] = React.useState({
        product: '',
        flag: false,
        message: ''
    });
    const [product, setProduct] = React.useState<any>({
        id: '',
        name: '',
        category: '',
        description: '',
        cost: 0,
        quantity: 0,
        file: null,
        flag: false,
        message: ''
    });
    const [changeProduct] = useMutation(UPDATE_PRODUCT);
    const [getProduct] = useLazyQuery(GET_PRODUCT_BY_NAME, { onCompleted: (data) => {
        console.log('123');
            const newProduct = {
                id: data.getProductByName._id,
                name: data.getProductByName.name,
                category: data.getProductByName.category,
                description: data.getProductByName.description,
                cost: data.getProductByName.cost,
                quantity: data.getProductByName.quantity,
                file: null,
                flag: false,
                message: ''
            }
            setProduct(newProduct);
            let newFind = {product:  data.getProductByName.name, flag: true, message: 'Товар успешно найден'};
            setFindProduct(newFind);
        },onError: (err) => {
        console.log('321');
            const newFind = {...findProduct, message: err.message};
            setFindProduct(newFind);
        }});

    const updateProduct = () => {
        changeProduct({
            variables: {
                id: product.id,
                name: product.name,
                category: product.category,
                description: product.description,
                cost: product.cost,
                quantity: product.quantity,
                image: product.file
            }
        }).then((res) => {
            const newProduct = {
                id: '',
               name: '',
                category: '',
                description: '',
                cost: 0,
                quantity: 0,
                file: null,
                flag: true,
                message: 'Товар успешно добавлен'
            }
            setProduct(newProduct);
            setInterval(()=> {
                const newFindProduct = {product: '', flag: false, message: ''};
                setFindProduct(newFindProduct);
            },1000)
        }).catch((err)=> {
            const newProduct = {...product, message: err.message};
            setProduct(newProduct);
        })
    }
    const updateForm = () => {
        return (
            <>
                <Typography variant="h3" align="center">
                    Создать товар
                </Typography>

                {(product.message && product.flag === false) && <Alert  severity="error">{product.message}</Alert>}
                {(product.message && product.flag) && <Alert  severity="success">{product.message}</Alert>}
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
                    onClick={updateProduct}
                >
                    Обновить товар
                </Button>
            </>
        )
    }

    // @ts-ignore
    return (
        <>
            <Typography variant="h3" align="center">
                Изменить товар
            </Typography>
            {(findProduct.message && findProduct.flag === false) && <Alert  severity="error">{findProduct.message }</Alert>}
            {(findProduct.message  && findProduct.flag) && <Alert  severity="success">{findProduct.message }</Alert>}
            <TextField
                fullWidth
                id="login"
                type="text"
                label="Название товара"
                placeholder="Название вашего товара"
                margin="normal"
                variant="outlined"
                value={findProduct.product}
                onChange={event => {
                    const newProduct = {...findProduct, product: event.target.value};
                    setFindProduct(newProduct);
                }}
            >
            </TextField>
            <Button
                variant="contained"
                fullWidth
                color="primary"
                // @ts-ignore
                onClick={(event )=> {
                    getProduct({variables: {name: findProduct.product}});
                }}
            >
                Найти товар
            </Button>
            { findProduct.flag && updateForm()}
        </>
    );
}

export default UpdateProductForm;