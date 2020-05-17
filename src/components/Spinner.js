import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => (
    <Fragment>
        <img
            src={spinner}
            style={{ width: '50px', margin: 'auto', display: 'block', paddingTop: '250px' }}
            alt='Loading...'
        />
    </Fragment>
);
