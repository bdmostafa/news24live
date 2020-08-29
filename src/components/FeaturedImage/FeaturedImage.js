import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const FeaturedImage = () => {

    // Store the data
    const [data, setData] = useState([]);

    // Fetch the data about everything category
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=women&apiKey=19e919d99fdb4cdfae72042ba5aec644')
            .then(res => res.json())
            .then(data => setData(data.articles))
    }, [])

    // CSS (Materiul-UI)
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
        },
        gridList: {
            flexWrap: 'nowrap',
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
        },
        title: {
            color: theme.palette.primary.white,
        },
        titleBar: {
            background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
    }));
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h2>Featured Images</h2>
            <GridList className={classes.gridList} cols={2.5}>
                {data.map((news) => (
                    <GridListTile key={news.urlToImage}>
                        <a href={news.url} target="_blank"> <img src={news.urlToImage} alt={news.title} /></a>
                        <GridListTileBar
                            title={news.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${news.title}`}>
                                    <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
};

export default FeaturedImage;