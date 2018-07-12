import React from 'react';
import './Loading.css';
import { PropTypes } from 'prop-types';

const Loading = (props) => {
    const {width, height} = props;

    return <div className="Loading" style={{width, height}} />;
}

Loading.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
}

export default Loading;