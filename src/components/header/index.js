import React from 'react';
import { Header as Container, Headline, Wrapper, Link, Nav } from './styled';

const Header = () => (
  <Container>
    <Wrapper className="animate__animated animate__fadeInDown">
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
