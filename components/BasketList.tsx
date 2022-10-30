import React from 'react';
import {useMutation} from "@apollo/client";
import {CHANGE_QUANTITY, DELETE_PRODUCT, ADD_TO_ORDERS} from "../src/GraphQL/Mutation";
import BasketElem from "../components/BasketElem";
import {Button, Typography} from "@mui/material";
import {changeQuantity, changeQuantityVariables} from "../src/generated/changeQuantity";
import {deleteProduct, deleteProductVariables} from "../src/generated/deleteProduct";
import {addToOrders, addToOrdersVariables} from "../src/generated/addToOrders";
interface ProductType  {
    productName: string
    cost: number
    quantity: number
}
type propsTypes = {
    token: string
    items: Array<ProductType>
}
const BasketList : React.FC<propsTypes> = ({token, items}) => {
    const [changeQuantity] = useMutation<changeQuantity, changeQuantityVariables>(CHANGE_QUANTITY);
    const [addToOrdrs] = useMutation<addToOrders, addToOrdersVariables>(ADD_TO_ORDERS);
    const [deleteProduct] = useMutation<deleteProduct, deleteProductVariables>(DELETE_PRODUCT);
    const [products,setProducts] = React.useState<Array<ProductType>>(items);
    const [sum,setSum] = React.useState(0);
    const delElem = (productName :string, index :number) => () => {
        deleteProduct({
            variables: {
                productName: productName,
                token: token,
            }
        }).then(() => {
            let copy = Object.assign([],products);
            copy.splice(index,1);
            setProducts(copy);
            console.log(products);
        }).catch((err)=> {
            console.log(err);
        })
    }
    const updQuantity = (productName :string, quantity :number, index :number) => {
        changeQuantity({
            variables: {
                productName: productName,
                quantity: quantity,
                token: token,
            }
        }).then(() => {
            setProducts([...products.slice(0,index),{productName: products[index].productName, cost: products[index].cost, quantity: quantity},...products.slice(index + 1)]);
        }).catch((err)=> {
            console.log(err);
        })
    }
    React.useEffect(() => {
        let sum = 0;
        for(let i = 0; i <products.length;i++ ) {
            sum += products[i].quantity * products[i].cost;
        }
        setSum(sum);
    },[products]);

    const addToOrders = () => {
        addToOrdrs({
            variables: {
                token: token,
                cost: sum,
                products
            }
        }).then(() => {
            setProducts([]);
            setSum(0);
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <>
            {products && products.length !== 0 ?
                <>
                    {products.map((elem,index) =>
                    <BasketElem key={index} product={elem} remove={delElem} changeQuantity={updQuantity} index={index}/>
                    )}
                    <Typography variant="h5">
                        {`Итог: ${sum} рублей`}
                    </Typography>
                    <Button
                        variant="contained"
                        fullWidth
                        color="primary"
                        onClick={addToOrders}
                    >
                        Купить</Button>
                </>
             : <h3>Ваша корзина пуста</h3>}
        </>
    );
}

export default BasketList;