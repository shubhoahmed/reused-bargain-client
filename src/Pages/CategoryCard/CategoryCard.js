import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/category/${category._id}`)} className="card w-full bg-base-100 shadow-xl image-full cursor-pointer ">
            <figure><img src={category.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category.name}</h2>

            </div>
        </div>
    );
};

export default CategoryCard;