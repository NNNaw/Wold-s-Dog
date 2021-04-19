import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';


import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import IconButton from '@material-ui/core/IconButton';
import { FavoriteBorder, ThumbDown, ThumbUp } from '@material-ui/icons';
import dogApi from '../../../../api/dogApi';

import Loading from './../../Components/Loading/Loading'

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1200,
        height: 900,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    icon_action: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
    },
    imageCenter: {
        // top: "60%"
    },
    imageTop: {
        top: "70%",

    },
    item2x2: {
        gridColumnStart: 1,
        gridColumnEnd: 2,
        gridRowStart: 5,
        gridRowEnd: 7,

    },
    item1x2: {
        gridColumnStart: 2,
        gridColumnEnd: 3,
        gridRowStart: 1,
        gridRowEnd: 2,

    }
}));



const setCol = (obj) => {

    if (obj.col_remain > obj.col + 1) {

        obj.col_remain -= obj.col;


    } else {
        if (obj.col_remain === 4) {
            obj.col = 2;
            obj.col_remain -= 2;
            return
        }
        obj.col = obj.col_remain;
        obj.col_remain = 7;
    }
    // return obj;
}

const renderItem = (lst, classes) => {

    const obj = {
        col: 0,
        col_remain: 7,
    }

    // let row_remain = 4;
    return lst?.map((image, index) => {

        //set col
        const widthImage = image.width;
        const heightImage = image.height;
        if (widthImage >= 1000) {
            obj.col = 3;
            setCol(obj)
        } else if (widthImage >= 500 && widthImage < 1000) {
            obj.col = 2;
            setCol(obj)
        }
        else {
            obj.col = 2;
            setCol(obj)
        }

        return <GridListTile key={index} cols={obj.col} rows={1}>
            <img
                className={heightImage + 200 >= widthImage && widthImage > 800 && obj.col >= 3 ? classes.imageTop : classes.imageCenter}
                src={image.url} alt='Error' />
            <GridListTileBar
                title={<FavoriteBorder onClick={() => { dogApi.postFavouritesDog(image.id) }} />}
                // subtitle={<span>Breed Group: {dog.breed_group}</span>}

                actionIcon={
                    <IconButton
                        aria-label={`info about ${0}`}
                        className={classes.icon}
                    >
                        <div className={classes.icon_action}>
                            <ThumbUp onClick={() => dogApi.postVote(image.id, 1)} />
                            --
                            <ThumbDown onClick={() => dogApi.postVote(image.id, 0)} />
                        </div>
                    </IconButton>

                }

            />


        </GridListTile >
    })


}

function MainDog(props) {

    const [currentPage, setPageCurrent] = useState(0);

    // const [dogList, setDogList] = useState([]);
    const [listOfDogImage, setListOfDogImage] = useState([]);


    const [isLoading, setIsLoading] = useState(true);
    const classes = useStyles();


    const handleScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

        if (scrollHeight - Math.round(scrollTop) === clientHeight) {

            setPageCurrent(currentPage + 1);
        }
    }


    useEffect(() => {

        setIsLoading(true);
        const fetchDogList = async () => {
            try {

                const params = {
                    size: 'full',
                    mime_types: [],
                    order: 'RANDOM',
                    limit: 15,
                    page: currentPage,
                    category_ids: [],
                    format: 'json',
                    breed_id: '',
                }
                const payLoad = await dogApi.getListOfDogImage(params);

                setIsLoading(false);
                setListOfDogImage((prev) =>
                    [...prev, ...payLoad]
                );

                console.log('use state 1');

            } catch (error) {
                console.log(error);
            }
        }
        fetchDogList();

    }, [currentPage]);


    return (
        <>
            {console.log(listOfDogImage)}
            <div className={classes.root} >
                <GridList onScroll={handleScroll} cellHeight={300} spacing={2} className={classes.gridList} cols={7} rows={4}>
                    {renderItem(listOfDogImage, classes)}
                </GridList>

            </div>

            {isLoading ? <Loading loading='loading...' />
                : <div styles={{ height: 100, width: 100 }} className="Loading">--</div>}


        </>
    );
}


export default MainDog;