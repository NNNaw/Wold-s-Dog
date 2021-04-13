import React, { Fragment } from 'react';
import { Route } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Footer from '../../Components/Footer/Footer';
import ScrollTop from './../../Commons/ScrollTop'
import { Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const HomeLayout = (props) => {
    return <Fragment>
        <Header />
        {/* <NavHeader /> */}

        {props.children}
        <Footer />
      
        <ScrollTop {...props}>
           
            <Fab color="secondary" size="small" aria-label="scroll back to top">
                <KeyboardArrowUpIcon />
            </Fab>
        </ScrollTop>

    </Fragment>
}

export const Basictemplate = ({ Component, ...props }) => (
    <Route {...props} render={(propComponent) => (
        <HomeLayout>
            <Component {...propComponent} />
        </HomeLayout>
    )} />
)