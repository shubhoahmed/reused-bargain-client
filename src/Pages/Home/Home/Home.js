import React from 'react';
import AdvertiseItem from '../../AdvertiseItem/AdvertiseItem';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <AdvertiseItem></AdvertiseItem>

        </div>
    );
};

export default Home;