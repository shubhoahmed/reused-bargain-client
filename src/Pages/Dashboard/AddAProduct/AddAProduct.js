import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider';

const AddAProduct = () => {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

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

    const handleSubmit = (event) => {
        event.preventDefault()

        const product = {
            name: event.target.name.value,
            usedYear: event.target.usedYear.value,
            location: event.target.location.value,
            resalePrice: event.target.resalePrice.value,
            originalPrice: event.target.originalPrice.value,
            condition: event.target.condition.value,
            categoryId: event.target.categoryId.value,
            number: event.target.number.value,
            description: event.target.description.value,
            email: user.email,
            isSold: false, isAdvertised: false,

        }
        fetch('https://reused-bargain-server-side-shubhoahmed.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                toast('Successfully added')
                navigate('/dashboard/my-products');
            })

    }

    return (
        <div>
            <h1 className='text-2xl font-semibold my-4 text-center'>Add a Product</h1>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 w-full gap-2' >
                <input type="text" name='name' placeholder="Product Name" className="input input-bordered w-full " required />
                <input type="text" name='usedYear' placeholder="Used Year" className="input input-bordered w-full " required />
                <input type="number" name='resalePrice' placeholder="Resale Price" className="input input-bordered w-full " required />
                <input type="number" name='originalPrice' placeholder="Original Price" className="input input-bordered w-full " required />
                <select name='condition' className="select w-full" required>
                    <option disabled selected>Condition</option>
                    <option value={'excellent'}>Excellent</option>
                    <option value={'good'}>Good</option>
                    <option value={'fair'}>Fair</option>

                </select>

                <input type="number" name='number' placeholder="Phone Number" className="input input-bordered w-full " required />

                <input type="text" name='location' placeholder="Location" className="input input-bordered w-full " required />

                <select name='categoryId' className="select w-full " required>
                    <option disabled selected>Category Name</option>
                    {categories.map(category => <option key={category._id} value={category._id}>{category.name}</option>)}

                </select>
                <textarea className='border p-2' name="description" placeholder='Add a short description' id="" cols="10" rows="3" required ></textarea>

                <input type="text" name='img' placeholder="Image URL" className="input input-bordered w-full " required />

                <button className='btn' type="submit">Submit</button>
            </form>

        </div>
    );
};

export default AddAProduct;