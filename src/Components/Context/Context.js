import React, { createContext, useContext, useReducer } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer } from './Reducers';


const Cart = createContext();

faker.seed(99); // this will give static data( it wont change while refreshing)
const Context = ({children}) => {

    const products = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.avatar(),
        inStock: faker.string.numeric(),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.string.numeric(),
    }))

    const[state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart:[],
    })
    //console.log(products);
  return (
    <Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context;


// Expoertjin the Cart contect

export const CartState = () => {
    return useContext(Cart);
}