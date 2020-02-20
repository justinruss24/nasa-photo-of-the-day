import React, { useState, useEffect } from "react";
import NavBar from "../NavBar";
import Header from "../Header";
import PhotoCard from "./PhotoCard";
import axios from "axios";
import { Container } from "reactstrap";
import styled from 'styled-components';

const CenterContent = styled.div `
  display: flex;
  align-items: center;
  margin-top: 5%;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    margin-top: 2%;
  }
`


export default function Photos() {
    const [image, setImage] = useState([]);

    useEffect(() => {
        axios
          .get(
            "https://api.nasa.gov/planetary/apod?api_key=n8rHmcbKW5g6jDWMUflccnJVco04zL1lPnSPnj41"
          )
          .then(response => {
            console.log(response);
            setImage(response.data);
          })
          .catch(error => {
            console.log("cant do that", error);
          });
    }, []);
    return (
      <Container>
        <NavBar />
          <CenterContent>
            <Header title={image.title} date={image.date} description={image.explanation} />
            <PhotoCard imgUrl={image.url} />
          </CenterContent>
      </Container>
    );
}