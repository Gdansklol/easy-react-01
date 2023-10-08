import React, { useState } from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    // console.log(props.click);

    const clickString = props.click || 'clickB:';

    return (
        <button onClick={increment}>
            {/* {props.click }{count} */}
            {clickString}{count}
        </button>
    );
};

export default Counter;