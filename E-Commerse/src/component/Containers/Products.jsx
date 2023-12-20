import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addCart } from '../../redux/action';
import Search from '../Utilities/Search';
import '../Styles/products.css'


const Products = () => {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    let componentMounted = true;;

    const getProducts = async () => {

        const response = await fetch("https://fakestoreapi.com/products");
        if (componentMounted) {
            setData(await response.clone().json());
            setFilter(await response.json());

            console.log(filter);
        }
    }

    useEffect(() => {

        getProducts()
    }, [])

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    }
    const ShowProducts = () => {
        return (<>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className="btn btn-outline-primary me-3" onClick={() => setFilter(data)}>All</button>

                <button className="btn btn-outline-primary me-3" onClick={() => filterProduct("women's clothing")}>
                    Women Section
                </button>
                <button className="btn btn-outline-primary me-3" onClick={() => filterProduct("men's clothing")}>Men Section</button>
                <button className="btn btn-outline-primary me-3" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                <button className="btn btn-outline-primary me-3" onClick={() => filterProduct("electronics")}>Electronic</button>
            </div>
            {filter.map((product) => {
                return (
                    <>

                    <div className="col-12 col-md-6 col-lg-3 product">
                            <div class="card  text-center p-4" key={product.id}>
                                <img src={product.image} class="card-img-top mx-5 " alt={product.title} height="150px" />
                                <div class="card-body">
                                    <h5 class="card-title mb-0">{product.title}</h5>
                                    <p class="card-text lead fw-bold">
                                        ${product.price}
                                    </p>
                                    <div></div>

                                    <i className="fa fa-shopping-cart me-1" onClick={() => addProduct(product)}> </i>


                                    <NavLink to={`/products/${product.id}`} className="btn btn-light ms-2 px-3 py-2">
                                        More Details
                                    </NavLink>
                                </div>
                            </div>
                            </div> 
                        {/* <div class=" d-flex product  " >
                            <div class="column  col-12 col-md-6 col-lg-3">
                                <div class="card product my-4 "key={product.id}  >
                                    <img src={product.image} class="card-img-top mx-5 justify-content-center " alt={product.title} height="150px" />
                                    <div class="card-body">
                                        <h4 class="card-title text-center">{product.title}</h4>
                                        <p class="card-text text-center lead fw-bold">${product.price}</p>
                                        <div class="product">
                                            <div class="col-6 col-lg-4">
                                                <i className="fa fa-shopping-cart me-1" onClick={() => addProduct(product)}> </i>
                                            </div>
                                            <div class="col-sm-6 col-lg-8">
                                                <NavLink to={`/products/${product.id}`} className="btn btn-light ms-2 px-3 py-2">
                                                    More Details
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </>
                );
            })}
        </>)
    }
    return (
        <div>
            <div>
                <div className="container my-5 py-4">

                    <div className="row justify-content-center">
                        <Search />
                        <ShowProducts />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products