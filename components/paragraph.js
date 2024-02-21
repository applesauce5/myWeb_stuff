// components/Paragraph.js

import React from 'react';
import utilStyles from '../styles/utils.module.css'

const Paragraph = ({ text }) => {
    return (
        <p className={utilStyles.headingLg_emphasize} >{text}</p>
    );
};

export default Paragraph;