import React from 'react';
import {Container, Typography, Grid, Button,Snackbar} from '@mui/material'
import {initializeApollo} from "../../lib/apolloClients";
import {GET_ALL_CATEGORIES, GET_PRODUCT} from "../../src/GraphQL/Query";
import Image from 'next/image'
import Index from "../index";
import Link from "next/link";
import cookie from 'js-cookie'
import Navigation from "../../components/navigation";
import DrawerCategories from "../../components/DrawerCategories";
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import {useMutation} from "@apollo/client";
import {ADD_TO_BASKET} from "../../src/GraphQL/Mutation";
import {useRouter} from "next/router";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        image: {
            display: 'block',
            margin: 'auto',
        }
    }),
);
export default function Product(props) {
    const [message,setMessage] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [addToBasket] = useMutation(ADD_TO_BASKET);
    const router = useRouter();
    const addToBskt = () => {
        addToBasket({
            variables: {
                token: cookie.get('token'),
                productId: props.result.id
            }
        }).then((res) => {
            setMessage('Товар успешно добавлен в корзину');
            setOpen(true);
            setInterval(()=> {
                setOpen(false);
            },3000)
        }).catch((err)=> {
            setMessage('Ошибка: ' + err.message);
            setOpen(true);
            setInterval(()=> {
                setOpen(false);
            },3000)
        })
    }
    const classes = useStyles();



        function NewlineText(props) {
            const text = props.text;
            const newText = text.split('\n').map(str => <p>{str}</p>);

            return newText;
        }

    return (
        <div>
            <Navigation/>
            <DrawerCategories data={props.result.categories} />
            <Container maxWidth='md'>
                <Snackbar open={open}
                          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                          message={message}
                          autoHideDuration={3000}
                />
                <Typography variant="h4" align="center">
                    {props.result.data.name}
                </Typography>
                <Grid container justifyContent = "center">
                    <Image
                        src={'http://localhost:8000' + props.result.data.image}
                        width={600}
                        height={600}
                        unoptimized={true}
                        className={classes.image}
                    />
                </Grid>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={addToBskt}
                >
                    Добавить в корзину
                </Button>
                <Typography variant="h4" align="center">
                    Общая информация
                </Typography>
                <strong>Цена: </strong> {props.result.data.cost}
                <br/>
                <strong>Категория: </strong> {props.result.data.category}
                <br/>
                <strong>Количество на складе: </strong> {props.result.data.quantity}
                <Typography variant="h4" align="center">
                    Описание
                </Typography>
                {props.result.data.description.split("\n").map((i, key) => {
                    return (key === 0) ? i : [<br key={key} />, i]
                })
                    }
            </Container>
        </div>
    );

}
//   <NewlineText text={props.result.data.description} />

export async function getServerSideProps(context)  {
    let result = {data: '', err: '', id: '', categories: ''};
    if (context.req) {
        const apolloClient = initializeApollo();
        await apolloClient.query({
            query: GET_PRODUCT,
            variables: {
                id: context.params.id,
            }
        }).then((res) => {
            result.data = res.data.getProduct;
            //@ts-ignore
            result.id = context.query.id;
        }).catch(err => {
            result.err = err.message;
        })
        await apolloClient.query({
            query: GET_ALL_CATEGORIES,
        }).then((res) => {
            result.categories = res.data.getCategories;
        }).catch(err => {
            result.err = err.message;
        })
    }
    return {props: {result}};
}
