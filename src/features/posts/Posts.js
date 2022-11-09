import { faker } from '@faker-js/faker';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@components/Button';

import PostItem from './components/PostItem';
import { addPost, fetchPosts, selectPosts } from './postsSlice';

const Posts = () => {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const createPost = async () => {
        const data = {
            title: () => faker.lorem.words(2),
            content: faker.lorem.paragraphs,
            image: faker.image.imageUrl,
        };
        dispatch(addPost(data));
        dispatch(fetchPosts());
        setTimeout(() => {
            window.scrollBy(0, 500);
        }, 25);
    };
    return (
        // @ts-ignore
        <div style={styles.container}>
            {posts.map((post) => (
                <PostItem key={post.id} {...post} />
            ))}
            <Button onClick={createPost}>Create Post</Button>
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
