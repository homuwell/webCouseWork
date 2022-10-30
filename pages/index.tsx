
import {Button, Container, Drawer, List, ListItem, ListItemText} from '@mui/material'
import React from 'react';
import Link from 'next/link'
import {useQuery} from "@apollo/client";
import Navigation from '../components/navigation'
import DrawerCategories from "../components/DrawerCategories";
import ProductsList from '../components/ProductsList'
import {initializeApollo, addApolloState} from "../lib/apolloClients";
import {GET_ALL_PRODUCTS, GET_ALL_CATEGORIES} from "../src/GraphQL/Query";
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
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
        appBar: {
            position: 'relative',
            zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
                flexShrink: 0,
        }
    }),
);
function Index(props) {
    const classes = useStyles();
    const [products,getProducts] = React.useState(props.data);
    return (
        <div>
            <Navigation />
            <DrawerCategories data={props.categories} />
            <Container maxWidth='md'>
                <ProductsList data={products}>

                </ProductsList>
            </Container>
        </div>
    );
}

export async function getServerSideProps(context)  {
    let result = {data: '', err: '', categories: ''};
   if (context.req) {
       const apolloClient = initializeApollo();
       await apolloClient.query({
           query: GET_ALL_PRODUCTS,
       }).then((res) => {
           result.data = res.data.getProducts;
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
   console.log(result);
   return {props: result};
}

export default Index;