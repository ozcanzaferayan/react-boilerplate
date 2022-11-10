import { faker } from '@faker-js/faker';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'store/store';

import Button from '@components/button/Button';

import PostItem from './components/PostItem';
import { addPost, fetchPosts, selectPosts } from './postsSlice';
import Post from './types/Post';

const Posts = () => {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const createPost = async () => {
        const data: Post = {
            title: faker.lorem.words(2),
            content: faker.lorem.paragraphs(),
            image: faker.image.imageUrl(),
            author: faker.name.firstName(),
        };
        dispatch(addPost(data));
        dispatch(fetchPosts());
        setTimeout(() => {
            window.scrollBy(0, 500);
        }, 25);
    };
    return (
        <div style={styles.container as React.CSSProperties}>
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
