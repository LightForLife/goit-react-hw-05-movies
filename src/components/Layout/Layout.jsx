import { Outlet } from 'react-router-dom';
import { Container, Header, StyledLink } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
          {/* <NavLink to="/about">About</NavLink>
          <NavLink to="/products">Products</NavLink> */}
        </nav>
      </Header>
      <Outlet />
    </Container>
  );
};
