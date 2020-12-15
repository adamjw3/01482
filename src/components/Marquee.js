import React from 'react'

import Ticker from 'react-ticker'


const Marquee = () => {
    return (
        <Ticker mode="smooth">
            {() => (
                <p>
                    Full website coming early 2021
                </p>
            )}
        </Ticker>
    );
};

export default Marquee;