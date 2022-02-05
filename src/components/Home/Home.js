import React from 'react';
import Banner from '../Banner/Banner';
import Committee from '../Committee/Committee';
import Contact from '../Contact/Contact';
import Faq from '../Faq/Faq';
import Gallery from '../Gallery/Gallery';
import Story from '../Story/Story';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Story></Story>
            <Gallery></Gallery>
            <Committee></Committee>
            <Faq></Faq>
            <Contact></Contact>
        </div>
    );
};

export default Home;