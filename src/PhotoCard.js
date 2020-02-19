import React from 'react';

const PhotoCard = props => {
    return (
        <div className="imgCont" key="">
            <img className="imgOfDay" alt="pic of the day" src={props.imgUrl}/>
        </div>
    );
};

export default PhotoCard;