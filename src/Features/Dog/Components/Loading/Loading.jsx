
import React from 'react';
import './index.css'

function Loading(props) {
    return (
    <div>
        {props.loading}
        <div className="loader-ellips">
            <span className="loader-ellips__dot" />
            <span className="loader-ellips__dot" />
            <span className="loader-ellips__dot" />
            <span className="loader-ellips__dot" />
        </div>


    </div>
    );
}

export default Loading;