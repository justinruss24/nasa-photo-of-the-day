import React, { useState, useEffect } from "react";
import Header from "./Header";
import PhotoCard from "./PhotoCard";
import axios from "axios";

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
      <div className="main-container">
        <Header title={image.title} date={image.date}/>
        {/* {console.log(image)} */}
          <PhotoCard imgUrl={image.url} />
      </div>
    );
}