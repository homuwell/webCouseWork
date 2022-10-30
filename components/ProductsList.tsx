import React from 'react';
import {AppBar, Typography,Button, Toolbar,IconButton, ImageList, ImageListItem, ImageListItemBar} from '@mui/material'
import { Theme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import cookie from 'js-cookie'
import Link from 'next/link'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Image from 'next/image'
import {useRouter} from 'next/router'
import {ADD_TO_BASKET} from "../src/GraphQL/Mutation";
import {useMutation} from '@apollo/client';

const MyElem = React.forwardRef((props :any, ref :any) => {
    return (
        <a href={props.href}  ref={ref}>
            <Image
                src={'http://localhost:8000' + props.elem.image}
                width={300}
                height={300}
                unoptimized={true}
            />
            <ImageListItemBar
                title={props.elem.name}
                subtitle={'Цена: ' +props.elem.cost +'р'}
                actionIcon={
                    <IconButton size="large">
                        <ShoppingCartIcon style={{color: "white"}}/>
                    </IconButton>
                }
            />
        </a>
    );
})

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
    }),
);
function ProductsList(props) {

    return (
        <>
            <ImageList rowHeight={300} cols={3}>
                {props.data.map((elem) => (
                    <ImageListItem key={elem._id}>
                        <Link href={"/product/[id]"} as={`/product/${elem._id}`} passHref>
                        <MyElem elem={elem} />
                        </Link>
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}

export default ProductsList;