import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import ProductModal from '../ProductModal/ProductModal';

const Product = ({ product }) => {
    const { name, img, location, resalePrice, originalPrice, usedYear, postedTime, sellerName, isVerified, categoryId } = product;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <ProductModal></ProductModal>
            <figure><img className='w-full h-[250px]' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title uppercase">
                    {name}

                </h2>
                <p>Seller Name: {sellerName}{isVerified && <CheckCircleIcon className=" inline-block h-4 w-4 ml-2 text-blue-500" />} </p>
                <p>Location: {location}</p>
                <p>Resale Price: {resalePrice}</p>
                <p>Original Price: {originalPrice}</p>
                <p>Used Year: {usedYear}</p>
                <p>Published Time: {postedTime}</p>
                <div className="card-actions justify-end">
                    {/* <div className="badge badge-outline w-full p-4">Book Now</div> */}
                    <label htmlFor="book-now" className="btn btn-outline btn-primary w-full">Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default Product;