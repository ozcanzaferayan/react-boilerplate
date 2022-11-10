import {
    ActionReducerMapBuilder,
    PayloadAction,
    createAsyncThunk,
    createSlice,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from 'store/store';

import Post from './types/Post';

type PostSliceState = {
    posts: Post[];
    status: 'idle' | 'loading' | 'failed';
    error: string | null | undefined;
};

const initialState: PostSliceState = {
    posts: [],
    status: 'idle',
    error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('/posts');
    return response.data;
});
export const addPost = createAsyncThunk('posts/addPost', async (post: Post) => {
    const response = await axios.post('/posts', post);
    return response.data;
});

const { reducer: PostsReducer } = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state: PostSliceState, action: PayloadAction<Post>) => {
            state.posts.push(action.payload);
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<PostSliceState>) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.status = 'idle';
                state.posts = state.posts.concat(action.payload);
            });
    },
});

export const selectPosts = ({ posts }: RootState) => posts.posts;

export const selectPostById = ({ posts }: RootState, postId: string) =>
    posts.posts.find((post: Post) => post.id === postId);

export default PostsReducer;
