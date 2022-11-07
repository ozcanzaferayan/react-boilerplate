import React from 'react';

import './Button.css';

const Button = (props) => {
    return (
        <a className="button" {...props}>
            <span style={styles.text}>{props.children}</span>
        </a>
    );
};

const styles = {
    text: {
        color: '#ddd',
    },
};

export default Button;
