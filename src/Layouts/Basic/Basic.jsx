import React, { Fragment } from 'react';
import { Route } from "react-router-dom"
import Header from "../../Components/Header/Header"
import Footer from '../../Components/Footer/Footer';

const HomeLayout = (props) => {
    console.log('home layout');
    return <Fragment>

        <Header />

        {props.children}
        <Footer />

      

    </Fragment>
}

const BasicTemplate = ({ Component, ...props }) => {

    console.log('BasicTemplate');
    return (
        <Route {...props} render={(propComponent) => (
            <HomeLayout>
                <Component {...propComponent} />
            </HomeLayout>


        )} />
    )
}
export default BasicTemplate;