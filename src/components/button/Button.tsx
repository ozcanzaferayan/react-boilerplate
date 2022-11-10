import React from 'react';

import './Button.css';

type Props = {
    children: React.ReactNode;
    onClick: () => void;
};
const Button = (props: Props) => {
    return (
        <a role="button" className="button" {...props}>
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
