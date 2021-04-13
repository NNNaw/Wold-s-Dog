import { makeStyles } from '@material-ui/core/styles';




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

