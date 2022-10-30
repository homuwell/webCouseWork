import React from 'react';
import {initializeApollo} from "../lib/apolloClients";
import {useMutation} from '@apollo/client';
import { CHANGE_QUANTITY, DELETE_PRODUCT, ADD_TO_ORDERS} from "../src/GraphQL/Mutation";
import { GET_USER_BASKET} from "../src/GraphQL/Query";
import Navigation from "../components/navigation";
import {produce} from 'immer'
import {
    Container, ImageList,
    ImageListItem,
    ImageListItemBar,
    IconButton,
    List,
    ListItem, ListItemSecondaryAction,
    ListItemText,
    Typography,
    Button, TextField
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import BasketList from "../components/BasketList";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            marginRight: 30,

        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);
function Basket(props) {
    const classes = useStyles();
    /*
    const delElem = productName => () => {
        deleteProduct({
            variables: {
                productName: productName,
                token: props.result.token
            }
        }).then((res) => {
            setDelProduct(productName);
        }).catch((err)=> {
        })
        updateProductsDelete(productName);
    }
    const ProductList = products.map((elem, index) => (

        <ListItem key={index}>
            <Button
                variant="contained"
                color="primary"
                onClick={delElem(elem.productName)}
                className={classes.button}
            >
                Удалить
            </Button>
            <ListItemText primary={`  Название товара: ${elem.productName} Цена товара: ${elem.cost} Количество товара: ${elem.quantity}`  } />
            <ListItemSecondaryAction>
                <TextField
                    //className={classes.button}
                    id="login"
                    size="small"
                    type="number"
                    label="Количество"
                    placeholder="Ваш Логин"
                    margin="normal"
                    InputProps= { {style: {width: 60 }} }
                    variant="outlined"
                    value={quantities[index]}
                    onChange={event=> {
                        changeQuantity({
                            variables: {
                                productName: elem.productName,
                                quantity: +event.target.value,
                                token: props.result.token
                            }
                        }).then((res) => {
                            setFlag(true);
                        }).catch((err)=> {
                            setFlag(false)
                        })
                        if (flag) {
                            updateQuantities(index,+event.target.value);
                            updateProducts(index,+event.target.value);
                        } else {
                            if (+event.target.value < 1) {
                                updateQuantities(index,1);
                                updateProducts(index,1);
                            } else {
                                if(+event.target.value > elem.quantity) {
                                    updateQuantities(index,elem.quantity-1);
                                    updateProducts(index,elem.quantity-1);
                                }
                            }
                        }
                    }

                    }
                >
                </TextField>
            </ListItemSecondaryAction>
        </ListItem>
    ));
    const addToOrders = () => {
        addToOrdrs({
            variables: {
                token: props.result.token,
                cost: sum,
                products
            }
        }).then(() => {
            setProducts(null);
            setSum(0);
        }).catch((err) => {
            console.log(`Не заебись ${err.message}`);
        })
    }
    const updateQuantities = (index,value) => {
        setQuantities(currQuantities => {
            return produce(currQuantities, num => {
                num[index] = value;
            })
        })
    }
    const updateProductsDelete = (productName) => {
            const arr = products.filter((item) => item.productName !==productName);
            setProducts(arr);
    }
    const updateProducts = (index,value) => {
        setProducts(currQuantities => {
            return produce(currQuantities, num => {
                num[index].quantity = value;
            })
        })
    }
    React.useEffect(() => {
        let sum = 0;
        for(let i = 0; i <products.length;i++ ) {
            sum += quantities[i] * products[i].cost;
        }
        setSum(sum);
    },[products,quantities]);

     */
    return (
        <>
        <Navigation />
    <Container maxWidth='md'>
        <Typography variant="h3" align="center">
            Корзина
        </Typography>
        <List>
            <BasketList token={props.result.token} items={props.result.data} />
        </List>
    </Container>
</>
    );
}

export default Basket;

export async function getServerSideProps(context)  {
    let result = {data: '', err: '', id: '', token: ''};
    result.token = context.req.cookies.token;
    if (context.req) {
        const apolloClient = initializeApollo();
        await apolloClient.query({
            query: GET_USER_BASKET,
            variables: {
                token: context.req.cookies.token
            }
        }).then((res) => {
            //@ts-ignore
            if (result.data.getUserBasket === null) {
                result.data = '';
            } else {
                result.data = res.data.getUserBasket.products;
            }
        }).catch(err => {
            result.err = err.message;
        })
    }
    console.log(result);
    return {props: {result}};
}