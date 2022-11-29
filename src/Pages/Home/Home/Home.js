import React from 'react';
import AdvertiseItem from '../../AdvertiseItem/AdvertiseItem';
import Banner from '../Banner/Banner';
import CategoryList from '../CategoryList/CategoryList';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertiseItem></AdvertiseItem>
            <CategoryList></CategoryList>

        </div>
    );
};

export default Home;