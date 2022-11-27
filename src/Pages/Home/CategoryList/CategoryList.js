import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CategoryCard from '../../CategoryCard/CategoryCard';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('http://localhost:5000/categories');
                console.log(res);
                setCategories(res.data)
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    }, [])
    return (

        <div>
            <div>
                <h1 className='text-4xl text-center font-bold my-10'>Categories</h1>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
                {categories.map(category => <CategoryCard key={category._id} category={category} >

                </CategoryCard>)}
            </div>
        </div>
    );
};

export default CategoryList;