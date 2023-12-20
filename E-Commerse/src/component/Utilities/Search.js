import { useEffect, useState } from 'react'
import '../Styles/search.css'
import { addCart } from '../../redux/action';
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
function Search() {

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
            setFilterData(data);
        })
    }, [])
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
            <div className='search-result'>
                {data.map((product, i) => (


                    <div className="col-md-1 ">
                        <div class="card h-100 text-center p-4" key={product.id}>
                            <img src={product.image} class="card-img-top" alt={product.title} style={{ width: "15rem" }} />
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

                ))}
            </div>
        </div >

    )
}

export default Search