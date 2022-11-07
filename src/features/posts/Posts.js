import React, { useEffect } from 'react';

const Posts = () => {
    console.log('1');
    useEffect(() => {
        fetch('/user')
            .then((res) => res.json())
            .then((data) => console.log(data));
    }, []);
    return <div>posts</div>;
};

export default Posts;
