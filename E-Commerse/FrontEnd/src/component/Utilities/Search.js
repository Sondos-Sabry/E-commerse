import { useEffect, useState } from 'react'
import '../Styles/search.css'
import '../Styles/products.css'
import { addCart } from '../../redux/action';
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import StarRating from '../Containers/StarRating'; // Adjust the path based on your file structure


function Search() {

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }
    const [productRatings, setProductRatings] = useState({});

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
            setFilterData(data);
        })

    }, [])

        //rating

        const handleRatingChange = (productId, newRating) => {
            setProductRatings((prevRatings) => ({
                ...prevRatings,
                [productId]: newRating,
            }));
        };
    
    const [data, setData] = useState([])
    const [filterData, setFilterData] = useState([])
    const handleFilter = (value) => {
        const res = filterData.filter(f => f.title.toLowerCase().includes(value))
        setData(res)
        if (value === "") {
            setData([])
        }

    }

    return (
        <div className='search-top'>
            <div className='search'>
                <input type='text' placeholder='search...' onChange={e => handleFilter(e.target.value)} />
            </div>
            <div className="row search-product search-result">
                { data.map((product, i) => (
                    <div class="col-md-6 col-lg-3 card  text-center p-4" key={product.id}>
                        <img src={product.image} class="card-img-top mx-5 " alt={product.title} height="150px" />
                        <div class="card-body">
                            <h5 class="card-title mb-0">{product.title}</h5>
                            <p class="card-text lead fw-bold">
                                ${product.price}
                            </p>
                            <div></div>
                            <i className="fa fa-shopping-cart me-1" onClick={() => addProduct(product)}> </i>
                            <NavLink to={`/products/${product.id}`} className="btn btn-light ms-2 px-3 py-2 details">   More Details</NavLink>
                            <div className="rating-box">
                                <h3>How was your experience?</h3>
                                <StarRating
                                    productId={product.id}
                                    rating={productRatings[product.id] || 0}
                                    onRatingChange={handleRatingChange}
                                />
                                <p>Selected Rating: {productRatings[product.id] || 0}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                        </div>
                        
                        
        </div >

    )
}

export default Search;