import React from 'react';
import { Header as Container, Headline, Wrapper, Link, Nav } from './styles';

const Header = () => (
  <Container>
    <Wrapper>
      <Link to="/">
        <Headline>
          REAL<span>ESTATE</span>
        </Headline>
      </Link>
      <Nav>
        <Link activeClassName="link-active" to="/">
          Home
        </Link>
        <Link activeClassName="link-active" to="/about-us">
          About us
        </Link>
        <Link activeClassName="link-active" to="/estates">
          Estates
        </Link>
      </Nav>
    </Wrapper>
  </Container>
);

export default Header;
