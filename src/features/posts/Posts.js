import { faker } from '@faker-js/faker';
import axios from 'axios';
import React, { useEffect } from 'react';

const Posts = () => {
    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        axios.get('/posts').then(({ data }) => console.log(data));
    };

    const createPost = async () => {
        const data = {
            title: faker.lorem.words,
            content: faker.lorem.paragraphs,
            image: faker.image.imageUrl,
        };
        await axios.post('/posts', data);
        getPosts();
    };
    return <button onClick={createPost}>Create</button>;
};

export default Posts;
