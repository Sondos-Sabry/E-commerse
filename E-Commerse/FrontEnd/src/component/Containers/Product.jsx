import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/action';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';


const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);


    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {

            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());

        }
        getProduct();
    }, []);


    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={product.image} alt={product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className="text-uppercase  " style={{ color: 'navy' }}>
                        {product.category}
                    </h4>
                    <hr></hr>
                    <h1 className=" text-lowercase text-black-50" >{product.title}</h1>
                    <hr></hr>
                    <p className="lead fw-bolder  ">
                        Rating :  {product.rating && product.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <hr></hr>
                    <h3 className="display-6 fw-bold my-4">
                        Price: {product.price} $
                    </h3>
                    <hr></hr>
                    <p className="lead">{product.description}</p>
                    <br></br>
                    <i className="fa fa-shopping-cart me-1" onClick={() => addProduct(product)}> </i>
                    <NavLink to="/cart" className="btn btn-primary ms-2 px-3 py-2">
                        Go to Cart <i className="fa fa-shopping-cart me-1" onClick={() => addProduct(product)}> </i>
                    </NavLink>

                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    <ShowProduct />
                </div>
            </div>
        </div>
    );
}

export default Product;

// import React, { useEffect, useState } from 'react'
// import { NavLink, useParams } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { addCart } from '../redux/action'
