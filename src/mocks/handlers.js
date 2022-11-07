import { rest } from 'msw';

import db from './db';

export const handlers = [
    rest.get('/posts', (req, res, ctx) => {
        const posts = db.post.findMany({});
        return res(ctx.json(posts));
    }),

    rest.post('/posts', async (req, res, ctx) => {
        const post = await req.json();
        db.post.create(post);
        return res(ctx.json(post));
    }),
];
