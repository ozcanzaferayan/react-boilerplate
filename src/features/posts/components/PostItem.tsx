import React from 'react';
import Post from '../types/Post';

const PostItem = ({ image, title, content, author }: Post) => {
    return (
        <div style={styles.container}>
            <div>
                <img alt="post" src={image} style={styles.image} />
            </div>

            <div style={styles.content as React.CSSProperties}>
                <h3 style={styles.title}>{title}</h3>
                <p style={styles.text}>{content}</p>
                <a href={`/` + author} style={styles.author}>
                    {author}
                </a>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        gap: 16,
    },
    image: {
        width: 160,
        height: 120,
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: 24,
        margin: 0,
    },
    text: {
        fontSize: 16,
        margin: 0,
    },
    author: {
        fontSize: 12,
        textDecoration: 'none',
        color: 'inherit',
        fontWeight: 'bold',
    },
};

export default PostItem;
