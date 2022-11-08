import axios from 'axios';

const { createAsyncThunk, createSlice } = require('@reduxjs/toolkit');

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('/posts');
    return response.data;
});
export const addPost = createAsyncThunk('posts/addPost', async (post) => {
    const response = await axios.post('/posts', post);
    return response.data;
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.posts = state.posts.concat(action.payload);
            });
    },
});

export const selectPosts = (state) => state.posts.posts;

export const selectPostById = (state, postId) =>
    state.posts.posts.find((post) => post.id === postId);

export default postsSlice.reducer;
