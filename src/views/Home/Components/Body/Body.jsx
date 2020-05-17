import React from 'react';

import NewsCarousel from "./Components/NewsCarousel";
import Artworks from "./Components/Artworks"
import Game from "./Components/Game"



export default function Body(props){

    
    const RSS_URL = `https://rickandmortyapi.com/api/character/2`;

fetch(RSS_URL)
  .then(response => response.json())
//   .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => console.log(data.location.url))


    return(
        <>
            <div className="pageContainer">

            <NewsCarousel/>
            <Artworks/>
            <Game/>

            </div>

        </>
    )
}
