import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from "./Rating";
import './css/style.css';
import { CartState } from './Context/Context';

const SingleProduct = ({product}) => {
  
  const {
    state: { cart },
    dispatch,
  } = CartState();

  // console.log("state Vale:",CartState());
  return (
    <div className="products">
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image} alt={product.name}/>
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
              <Card.Subtitle style={{ paddingBottom: 10 }}>
                  <span>₹ {product.price}</span>
                  {product.fastDelivery ? (
                    <div>Fast Delivery</div>
                  ) : (
                    <div>4 days delivery</div>
                  )}
                  <Rating rating={product.ratings} />
            </Card.Subtitle>
            {cart && cart.some((p) => p.id === product.id) ? (
            <Button
              variant="danger"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product,
                })
              }
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  payload: product,
                })
              }
              disabled={!product.inStock}
            >
              {!product.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
          </Card.Body>
    </Card>
    </div>
  )
}

export default SingleProduct;