import { Route, Routes, redirect } from 'react-router-dom';

import Counter from '@features/counter/Counter';
import Root from '@features/root/Root';
import Posts from '@features/posts/Posts';

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Root />}>
                <Route path="/" element={<Counter />} />
                <Route path="/posts" element={<Posts />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
