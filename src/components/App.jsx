import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './Home/Home';
import Movies from './Movies/Movies';
import { Container, Header, Link } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          {/* <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink> */}
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Container>
  );
};
