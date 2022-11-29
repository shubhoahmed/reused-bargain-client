import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AddAProduct = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get('https://reused-bargain-server-side-shubhoahmed.vercel.app/categories');
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
            <h1 className='text-2xl font-semibold my-5 text-center'>Add a Product</h1>
            <form className='grid grid-cols-1 w-full gap-4'>
                <input type="text" name='name' placeholder="Product Name" className="input input-bordered w-full " />
                <input type="number" name='resalePrice' placeholder="Price" className="input input-bordered w-full " />
                <input type="number" name='originalPrice' placeholder="Price" className="input input-bordered w-full " />
                <select name='condition' className="select w-full ">
                    <option disabled selected>Condition</option>
                    <option value={'excellent'}>Excellent</option>
                    <option value={'good'}>Good</option>
                    <option value={'fair'}>Fair</option>

                </select>

                <input type="number" name='number' placeholder="Phone Number" className="input input-bordered w-full " />

                <input type="text" name='location' placeholder="Location" className="input input-bordered w-full " />

                <select name='categoryId' className="select w-full ">
                    <option disabled selected>Category Name</option>
                    {categories.map(category => <option key={category._id} value={category._id}>{category.name}</option>)}

                </select>

            </form>
        </div>
    );
};

export default AddAProduct;