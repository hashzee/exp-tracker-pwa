import React from 'react';
import {Box} from '@material-ui/core';
import walletImage from '../wallet-icon.png';

const Head = () => {
    return (
        <>
            <Box>
                <div className="header">
                    <img src={walletImage} alt='Exp. Tracker' className="headerImg" />
                </div>            
            </Box>
        </>
    )
}

export default Head;