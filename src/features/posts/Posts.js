import { faker } from '@faker-js/faker';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import PostItem from './components/PostItem';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        axios.get('/posts').then(({ data }) => setPosts(data));
    };

    const createPost = async () => {
        const data = {
            title: () => faker.lorem.words(2),
            content: faker.lorem.paragraphs,
            image: faker.image.imageUrl,
        };
        await axios.post('/posts', data);
        getPosts();
    };
    return (
        // @ts-ignore
        <div style={styles.container}>
            {posts.map((post) => (
                <PostItem key={post.id} {...post} />
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        gap: 16,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#A599E9dd',
        padding: 20,
    },
};

export default Posts;
