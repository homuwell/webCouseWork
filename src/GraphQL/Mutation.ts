import {gql} from '@apollo/client';

export const CREATE_USER_MUTATION = gql`
    mutation createUser(
    $login: String!
     $name: String!
      $surname: String!
       $email: String!
        $phoneNumber: String!
         $password: String!
         ) {
         createUser(
         login: $login
         name: $name
         surname: $surname
         email: $email
         phoneNumber: $phoneNumber
         password: $password
         ) {
         id
         }
      }
`

export const LOGIN_USER_MUTATION = gql`
    mutation LoginUser (
    $login: String!
    $password: String! 
    ) {
         LoginUser (
                    login: $login
                    password: $password
         ) {
            token
            login
           }
      }
`;

export const ADD_CATEGORY =gql`
    mutation addCategory (
    $name: String!
    ) {
         addCategory (
                    name: $name
         ) {
         id
         }
      }
`;

export const ADD_PRODUCT =gql`
    mutation addProduct (
        $name: String!
        $category: String!
        $description: String!
        $cost: Int!
        $quantity: Int!
        $image: Upload!
        ) {
            addProduct (
                name: $name
                category: $category
                description: $description
                cost: $cost
                quantity: $quantity
                image: $image
            ) {
                _id
            }
         } 
`;

export const ADD_TO_BASKET =gql`
    mutation addToBasket (
        $token: String!
        $productId: String!
        ) {
            addToBasket (
                token: $token
                productId: $productId
            ) {
                products {
                    productName
                }
            }
         } 
`;

export const CHANGE_QUANTITY=gql`
    mutation changeQuantity (
        $productName: String!
        $quantity: Int
        $token: String
    ) {
        changeQuantity (
            productName: $productName
            quantity: $quantity
            token: $token
        ) {
            products {
                productName
            }
        }
    }
`;

export const DELETE_PRODUCT =gql`
    mutation deleteProduct (
        $productName: String!
        $token: String!
        ) {
            deleteProduct (
                productName: $productName
                token: $token
            ) {
                products {
                    productName
                }
            }
         } 
`;

export const DEL_PRODUCT =gql`
    mutation delProduct (
        $name: String!
        ) {
            delProduct (
                name: $name
            ) {
                    name
            }
         } 
`;

export const ADD_TO_ORDERS = gql`
    mutation addToOrders (
        $token: String!
        $cost: Int!
        $products: [InputProductsType]!
        ) {
            addToOrders (
                token: $token
                cost: $cost
                products: $products
            ) {
                date
            }
         } 
`;

export const UPDATE_PRODUCT =gql`
    mutation changeProduct (
        $id: String!
        $name: String
        $category: String
        $description: String
        $cost: Int
        $quantity: Int
        $image: Upload
        ) {
            changeProduct (
                id: $id
                name: $name
                category: $category
                description: $description
                cost: $cost
                quantity: $quantity
                image: $image
            ) {
                name
            }
         } 
`;