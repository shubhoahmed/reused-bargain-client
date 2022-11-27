import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`http://localhost:5000/products/${id}`);
                console.log(res);
                setProducts(res.data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    }, [id]);
    return (
        <div>
            {
                products.map(product => <Product key={product.id} product={product} ></Product>)
            }
        </div>
    );
};

export default Products;