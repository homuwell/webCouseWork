import React from 'react';
import {Button, ListItem, ListItemSecondaryAction, ListItemText, TextField} from "@mui/material";
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
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
function BasketElem({product, changeQuantity, remove, index}) {
    const classes = useStyles();
    return (
        <>
            {
                <ListItem key={product.id}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={remove(product.productName, index)}
                        className={classes.button}
                    >
                        Удалить
                    </Button>
                    <ListItemText primary={`  Название товара: ${product.productName} Цена товара: ${product.cost} Количество товара: ${product.quantity}`  } />
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
                            value={product.quantity}
                            onChange={event=> {
                                changeQuantity(product.productName,+event.target.value,index);
                            }
                            }
                        >
                        </TextField>
                    </ListItemSecondaryAction>
                </ListItem>
            }
        </>
    );
}

export default BasketElem;