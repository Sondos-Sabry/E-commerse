import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { addCart, delCart, delItem, clearCart } from '../../redux/action';
import '../Styles/Cart.css'
var  showDate=()=>{
    var show=new Date();
    var displayDate=show.getDate()+'/'+show.getMonth()+'/'+show.getFullYear();
    return displayDate;
}
var showTime=()=>{
    var show= new Date();
    var display=show.getHours()+'::'+show.getMinutes();
    return display;
}
const Cart = () => {
    const state = useSelector((state) => state.handleCart)
    const dispatch = useDispatch()


    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const handleDel = (item) => {
        dispatch(delCart(item))
    }


    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const handleClear = (item) => {
        dispatch(clearCart(item))
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }
    const cartItems = (product) => {
        return (
            <>

                <div  >
                    <table className="table" >
                    <thead>
                            <tr className='table-rows'>
                                <th scope="col">Image</th>
                                <th scope="col">Actions</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">Order Date</th>
                                <th scope="col">Remove</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            <tr className='table-rows'>

                               <td><img src={product.image} class="card-img-top" alt={product.title} style={{ width: "5rem" }} /> </td> 
                                <td>  <button className="btn btn-outline-dark" onClick={() => handleAdd(product)}>
                                    <i className="fa fa-plus"></i>
                                </button>  {product.qty} <button className="btn btn-outline-dark me-4" onClick={() => handleDel(product)}>
                                        <i className="fa fa-minus"></i>
                                    </button> </td>
                                <td> ${product.qty * product.price}</td>
                                <td>{showDate()} <br/>at:<span className='time'>{showTime()} </span></td>

                               <td> <i class="fa-solid fa-trash" onClick={() => handleClose(product)}></i></td>


                            </tr>


                        </tbody>
                    </table>

                </div>

            </>
        )

    }
    const buttons = (product) => {
        return (
            <>

                <div className="container">
                    <div className="row">
                        <button type="button" className="btn btn-danger   mb-5 w-25 mx-auto" onClick={() => handleClear(product)}>clear all</button>
                        <NavLink to="/checkout" className="btn btn-outline-secondary mb-5 w-25 mx-auto">checkout</NavLink>

                    </div>
                </div>


            </>
        )
    }

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && buttons()}


        </div>


    );
}

export default Cart;