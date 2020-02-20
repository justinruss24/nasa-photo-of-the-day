import React from "react";
import styled from 'styled-components';


const PicInfo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Kosugi';
    width: 100%;
    margin: 0 1%;
`


const Header = props => {
    return (
          <PicInfo>
            <h2>{props.title}</h2>
            <h4>Photo of the Day: {props.date}</h4>
            <p>{props.description}</p>
          </PicInfo>
    );
};

export default Header;