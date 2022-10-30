import React from 'react';
import { Theme } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import {Drawer, List, ListItem, ListItemText, Toolbar} from "@mui/material";
import Link from 'next/link'
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
        drawerPaper: {
            width: 240,
        },
        drawer: {
            flexShrink: 0,
            flexDirection: 'column'
        },
        drawerContainer: {
            overflow: 'auto',
        },
    }),
);
function DrawerCategories(props) {
    const [categories,setCategories] = React.useState(props.data);
    const classes = useStyles();
    return (
        <Drawer
            variant="permanent"
            anchor="left"
            style={{zIndex:1301}}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar/>
            <List>
                <div className={classes.drawerContainer}>
                {categories.map((elem, index) => (
                    <Link href={"/category/[id]"} as={`/category/${elem.id}`} key ={elem.id}>
                    <ListItem button key={elem.name}>
                        <ListItemText primary={elem.name} />
                    </ListItem>
                        </Link>
                ))}
             </div>
            </List>
        </Drawer>
    );
}

export default DrawerCategories;