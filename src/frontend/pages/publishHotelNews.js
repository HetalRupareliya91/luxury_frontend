import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import AddBlogs from './userprofile/addNews';
import { Container } from 'react-bootstrap';

const PublishHotelNews = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    } , []);
    return (
        <>
            <Header />
            <div className='publish_news_div'>
            <div className="page-headings mb-4">
<div className="heading-section">
<h1 className="text-center">publish-news-pr</h1>
</div>
</div>
                <Container>
               <AddBlogs/>
               </Container>
               </div>
            <Footer />
        </>
    );
};

export default PublishHotelNews;
