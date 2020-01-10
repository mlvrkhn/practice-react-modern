import React from 'react';
import PropTypes from 'prop-types';

import ClockTime from './ClockTime';
import ClockDate from './ClockDate';

const Clock = props => {
    return (
        <>
            <ClockTime date={props.date} />
            <ClockDate date={props.date} />
        </>
    );
};

Clock.propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
};

export default Clock;
