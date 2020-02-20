import React, { useState, useEffect } from "react";
import Header from "../Header";
import PhotoCard from "./PhotoCard";
import axios from "axios";
import { Container, Row } from "reactstrap";
import styled from 'styled-components';

const CenterContent = styled.div `
  display: flex;
  align-items: center;
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
        <Row>
          <CenterContent>
            <Header title={image.title} date={image.date} />
            {/* {console.log(image)} */}
            <PhotoCard imgUrl={image.url} />
          </CenterContent>
        </Row>
      </Container>
    );
}