import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import './css/filter.css';
import Rating from './Rating';
import {Button} from 'react-bootstrap'

const Filters = () => {

    const [rating, setRating] = useState(1)
  return (
    <div className='filters'>
        <span className='title'>Filters Products</span>

        <Form>
            <div className=" filtersList mb-3">
            <Form.Check
                inline
                label="Ascending"
                name="group1"
                type="radio"
                id={`inline-1`}
            />
            <Form.Check
                inline
                label="Decending"
                name="group1"
                type={"radio"}
                id={`inline-2`}
            />

            <Form.Check
                inline
                label="Out Of Stock"
                type='checkbox'
                id={`inline-3`}
            />

            <Form.Check
                inline
                label="Fast Delivery"
                type='checkbox'
                id={`inline-4`}
            />
            </div>
        </Form>
    
    <div className='rating'>
        <label style={{paddingRight: 10}}>Rating :</label>
        <Rating rating={rating} style={{cursor: "pointer"}} onClick={(i)=> setRating(i+1)}/>
    </div>

    <Button variant='light'>Clear Filter</Button>
    </div>
  )
}

export default Filters