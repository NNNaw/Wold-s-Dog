

import { Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import ScrollTop from './../../Commons/ScrollTop'

import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
    }
    render() {
        return (
            <div className="Footer" ref={this.wrapper}>
                Footer
               
                {/* <ScrollTop  {...this.props}>

                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop> */}
            </div>
        );
    }
}

export default Footer;