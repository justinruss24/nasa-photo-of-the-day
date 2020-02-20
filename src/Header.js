import React from "react";
import { Col } from 'reactstrap';
import styled from 'styled-components';

const PicInfo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10% 0;
`

const Header = props => {
    return (
      <Col xs="12" md="6">
        <PicInfo>
          <h2>{props.title}</h2>
          <p>Photo of the Day {props.date}</p>
        </PicInfo>
      </Col>
    );
};

export default Header;