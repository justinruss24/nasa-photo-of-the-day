import React from 'react';
import styled from 'styled-components';

const DailyImage = styled.img `
    width: 60%;
    height: 60%;
    object-fit: scale;
    flex-shrink: 2;
    border-radius: 10%;
    @media (max-width: 800px) {
        width: 80%;
        height: 80%;
    }
`

const PhotoCard = props => {
    return (
        <DailyImage className="imgOfDay" alt="pic of the day" src={props.imgUrl}/>
    );
};

export default PhotoCard;