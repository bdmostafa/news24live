import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {

    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tech&apiKey=19e919d99fdb4cdfae72042ba5aec644')
            .then(res => res.json())
            .then(data => setNewsData(data.articles))
    }, [])

    return (
        <Carousel>
            {
                newsData.map(news =>
                    <Carousel.Item>
                        <a href={news.url} target="_blank">
                            <img
                                key={news.url}
                                className="d-block w-100"
                                src={news.urlToImage}
                                alt={news.title}
                            />
                        </a>
                        <Carousel.Caption>
                            <h3>{news.title}</h3>
                            <p>{news.source.name}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }
        </Carousel>
    );
};

export default Slider;