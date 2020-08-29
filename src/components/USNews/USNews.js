import React from 'react';
import { Card } from 'react-bootstrap';

const USNews = (props) => {
    const { title, author, content, description, publishedAt, url, urlToImage } = props.news;
    // console.log(props.news)
    return (
        <Card style={{ width: '100%' }}>
            <Card.Body>
                <a href={url} target="_blank">
                    <Card.Img variant="top" src={urlToImage} width="25%" /></a>
                <Card.Title> {title} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted"> {description} </Card.Subtitle>
                <Card.Text className="blockquote-footer" > {author} </Card.Text>
                <Card.Text> {content} <Card.Link href={url} target="_blank"> Read More... </Card.Link> </Card.Text>
                <Card.Text> Published at: {new Date().toDateString(publishedAt)} </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default USNews;