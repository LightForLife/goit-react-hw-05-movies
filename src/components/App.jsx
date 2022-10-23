import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Route>
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
