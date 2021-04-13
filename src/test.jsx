import React, { Component } from 'react';

class test extends Component {
    show(a){
        alert(a)
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.show('xx')}>show</button>
            </div>
        );
    }
}

export default test;