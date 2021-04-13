import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

// import PropTypes from 'prop-types';

// Home.propTypes = {

// };

function Home(props) {
    const [number, setNumber] = useState(1);

    const setNumber1 = (x) => setNumber(number + x)

    useEffect(()=>{
        document.title = `you clicked ${number} times`
    })
    return (
        <div>
            <Button variant="contained" color="primary" onClick={() => setNumber1(1)}>+1</Button>
            <Button variant="contained" color="secondary" onClick={() => setNumber1(3)}>+2</Button>

            <p> Number : {number}</p>

            Home


        </div>
    );
}

export default Home;