import React from 'react';
import {
    Button,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel, Radio,
    RadioGroup,
    TextField,
    Typography
} from '@mui/material';
import AdminRoute from '../components/adminRoute'
import {ADD_CATEGORY, ADD_PRODUCT, UPDATE_PRODUCT, DEL_PRODUCT} from "../src/GraphQL/Mutation";
import AddProductForm from '../components/AddProductForm'
import DeleteProductForm from '../components/DeleteProductForm'
import UpdateProductForm from '../components/UpdateProductForm'
import {GET_PRODUCT_BY_NAME} from "../src/GraphQL/Query";
import {useMutation, useLazyQuery} from '@apollo/client';
import { Alert } from '@mui/material';
import {DropzoneArea} from 'material-ui-dropzone'
function Admin(props) {
    const [categoryName, setCategoryName] = React.useState('');
    const [categoryError, setCategoryError] = React.useState('');
    const [categorySuccess, setCategorySuccess] = React.useState('');
    const [addCategory] = useMutation(ADD_CATEGORY);
    const [value,setValue] = React.useState('');





    const addCtg = () => {
        addCategory({
            variables: {
             name: categoryName
            }
        }).then((res) => {
            setCategorySuccess('Категория успешно добавлена');
            setCategoryError('');
        }).catch((err)=> {
            setCategorySuccess('');
            setCategoryError(err.message);
        })
    }


    const switchHandler= (event) => {
        setValue(event.target.value);
    }

    return (
        <Container>
            <Typography variant="h3" align="center">
                Добавить Категорию
            </Typography>
            {categoryError && <Alert  severity="error">{categoryError}</Alert>}
            {categorySuccess && <Alert severity="success">{categorySuccess}</Alert>}
            <TextField
                fullWidth
                id="login"
                type="text"
                label="Имя категории"
                placeholder="Ваша категория"
                margin="normal"
                variant="outlined"
                value={categoryName}
                onChange={event=> {
                    setCategoryName(event.target.value);
                }}
            >
            </TextField>

            <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={addCtg}
            >
                Добавить Категорию
            </Button>
            <FormControl component="fieldset">
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={switchHandler}>
                    <FormControlLabel value="add" control={<Radio />} label="Добавить товар" />
                    <FormControlLabel value="update" control={<Radio />} label="Изменить товар" />
                    <FormControlLabel value="delete" control={<Radio />} label="Удалить товар" />
                </RadioGroup>
            </FormControl>
            {value === 'add' && <AddProductForm/>}
            {value === 'delete' && <DeleteProductForm />}
            {value === 'update' &&  <UpdateProductForm />}
        </Container>
    );
}
export default AdminRoute(Admin);