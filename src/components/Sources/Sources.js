import React from 'react';
import { Card } from 'react-bootstrap';

const Source = (props) => {
    const { url, name } = props.source;
    // console.log(props.news)
    return (
        <Card>   
            <Card.Link href={url} target="_blank"> {name}  </Card.Link>  
        </Card>
    );
};

export default Source;