import React from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

const DailyImage = styled.img `
    width: 100%;
    height: 100%;
    object-fit: scale;
    flex-shrink: 2;
    border-radius: 10%;
`

const PhotoCard = props => {
    return (
        <Col xs="12" md="6">
            <DailyImage className="imgOfDay" alt="pic of the day" src={props.imgUrl}/>
        </Col>
    );
};

export default PhotoCard;