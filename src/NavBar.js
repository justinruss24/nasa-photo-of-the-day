import React from "react";
import {
  Navbar,
} from "reactstrap";
import styled from 'styled-components';

const LogoFit = styled.img `
    width: 10%;
    height: 10%;
    object-fit: scale;
    flex-shrink: 2;
`

const Navigation = props => {

  return (
    <div>
      <Navbar color="light" light expand="md">
        <LogoFit src="https://upload.wikimedia.org/wikipedia/commons/a/a3/NASA_Worm_logo.svg" alt="Nasa Logo" />
      </Navbar>
    </div>
  );
};

export default Navigation;