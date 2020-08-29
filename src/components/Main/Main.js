import React, { useState, useEffect } from 'react';
import USNews from '../USNews/USNews';
import Source from '../Sources/Sources';
import FeaturedImage from '../FeaturedImage/FeaturedImage';
import Slider from '../Slider/Slider';
import { Row, Col } from 'react-bootstrap';

const Main = () => {

    // Store the data
    const [USData, setUSData] = useState([]);
    const [sources, setSources] = useState([]);

    // Fetch the US data
    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=19e919d99fdb4cdfae72042ba5aec644')
            .then(res => res.json())
            .then(data => setUSData(data.articles.slice(0, 10)))
    }, [])

    // Fetch the Canada data
    useEffect(() => {
        fetch('https://newsapi.org/v2/sources?language=en&apiKey=19e919d99fdb4cdfae72042ba5aec644')
            .then(res => res.json())
            .then(data => setSources(data.sources.slice(0, 10)))
    }, [])

    return (
        <>
            <Row>
                <Col>
                    <Slider></Slider>
                </Col>
                <Col xs lg="2">
                <h2>Top Sources</h2>
                    {
                        sources.map((source, idx) => <Source key={source.url} index={idx} source={source}></Source>)
                    }
                </Col>
            </Row>

            <FeaturedImage></FeaturedImage>

            {
                USData.map(news => <USNews key={news.url} news={news}></USNews>)
            }

        </>
    );
};

export default Main;