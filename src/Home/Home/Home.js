import React from 'react';
import Feedbacks from '../../Main/Feedbacks/Feedbacks';
import Services from '../../Main/Services/Services';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Feedbacks></Feedbacks>
        </div>
    );
};

export default Home;