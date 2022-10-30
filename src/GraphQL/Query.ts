import {gql} from "@apollo/client";

export const AUTHENTICATE_USER =gql`
query AuthenticateUser($token: String!) {
      authenticateUser(token: $token) {
        id
    }
}
`

export const GET_USER_DATA=gql`
query GetUserData($token: String!) {
      getUserData(token: $token) {
        login
        email
        name
        surname
        phoneNumber
        type
    }
}
`

export const VERIFY_ADMIN =gql`
query VerifyAdmin($token: String!) {
      getUserData(token: $token) {
        type
    }
}
`

export const GET_ALL_PRODUCTS=gql`
query GetAllProducts { 
    getProducts {
        name 
        image
        _id
        cost
    }
}
`
export const GET_ALL_PRODUCTS_BY_CATEGORY=gql`
query GetProductsByCategory($category: String) {
    getProducts(category: $category){
        name 
        image
        _id
        cost
    }
}
`



export const GET_PRODUCT =gql`
query GetProduct($id: String!) {
      getProduct(id: $id) {
            name
            category
            description
            cost
            quantity
            image
    }
}
`

export const GET_PRODUCT_BY_NAME =gql`
query GetProductByName($name: String!) {
      getProductByName(name: $name) {
            _id
            name
            category
            description
            cost
            quantity
            image
    }
}
`


export const GET_USER_BASKET =gql`
query GetUserBasket($token: String!) {
      getUserBasket(token: $token) {
            products {
                productName
                quantity
                cost
            }
    }
}
`

export const GET_ALL_CATEGORIES=gql`
query GetAllCategories {
    getCategories {
       id
       name
    }
}
`