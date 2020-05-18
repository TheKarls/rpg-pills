import React from 'react';

import Carousel from 'react-elastic-carousel';


export default function HomeCarousel(props){

    const elements = [
        {
            name: 'Games',
            image: require('../../../../../img/HomeCarousel/rpgGame.jpg')
        },
        {
            name: 'News',
            image: require('../../../../../img/HomeCarousel/news.jpg')
        },
        {
            name: 'Comics',
            image: require('../../../../../img/HomeCarousel/swords.png')
        }

    ]

    return(
        <>

            <Carousel>
                {elements.map( (element, index) => (

                    <div className="carouselElement">
                        <img src={element.image} alt="News" className="img"/>
                        <h2>{element.name}</h2>
                    </div>
                  
                ))}
            </Carousel>
            
        </>
    )


}