import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const MyProduct = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`http://localhost:5000/products/user/${user.email}`);
                console.log(res);
                setProducts(res.data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    }, [user])


    return (
        <div>

        </div>
    );
};

export default MyProduct;