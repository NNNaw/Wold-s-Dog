import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PetsIcon from '@material-ui/icons/Pets';
import CssBaseline from '@material-ui/core/CssBaseline';
import SearchIcon from '@material-ui/icons/Search';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import LinkCSS from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
// z


import HideOnScroll from './HideBar'



const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));



export default function BackToTop(props) {
  const classes = useStyles();
  return (
    <>

      <CssBaseline />

      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography className={classes.root}>
              <LinkCSS component={Link} to="/" color="inherit">
                <PetsIcon />
              </LinkCSS>
              <LinkCSS component={Link} to="/dog/images" color="inherit">
                {'Social Network'}
              </LinkCSS>
              <LinkCSS component={Link} to='/dog/breeds' color="inherit" variant="body2">
                {'Breeds'}
              </LinkCSS>
              <LinkCSS component={Link} to='/dogs/votes' color="inherit" variant="body2">
                {'Votes'}
              </LinkCSS>
              <LinkCSS component={Link} to='/dogs/favourites' color="inherit" variant="body2">
                {'Favourites'}
              </LinkCSS>

            </Typography>


            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Toolbar id="back-to-top-anchor" />


      <Container>
        <Box my={2}>
          ---
        </Box>
      </Container>

    </>
  );
}
