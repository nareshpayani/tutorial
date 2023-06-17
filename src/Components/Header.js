import React from 'react'
import './css/style.css'
import {
  Container, 
  Navbar, 
  Form, 
  FormControl, 
  Badge,
  Dropdown,
  Button
} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from './Context/Context';
import { AiFillDelete } from "react-icons/ai";

const Header = () => {

  const {
    state: { cart }, dispatch
  } = CartState();
  return (
    <Navbar bg="dark" variant="dark">
       <Container >
       <Navbar.Brand >
        <Link to={'/'}>Shopping Cart</Link>
       </Navbar.Brand>

          <Form >
            <FormControl type="text" placeholder="Search a product" className="mr-3" />
          </Form>


          <Dropdown alignright="true">
            <Dropdown.Toggle variant="success" >
            <FaShoppingCart color="white" fontSize="25px" />
              <Badge>{cart && cart?.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {cart && cart?.length > 0 ? (
                <>
                  {cart && cart.map((prod) => (
                    <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              )}
            </Dropdown.Menu>

          </Dropdown>
       </Container>
  </Navbar>
  )
}

export default Header