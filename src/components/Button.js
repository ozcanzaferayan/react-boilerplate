import React from 'react';

import './Button.css';

const Button = (props) => {
    return (
        <a role="button" className="button" name={props.children} {...props}>
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
