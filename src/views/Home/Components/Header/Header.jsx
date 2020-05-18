import React from 'react';

export default function Header(props){
    return(

        <>
            <div className="headerImage">

                <img src={require("../../../../img/icon.svg")} className="icon" alt="Header"/>

            </div>

            <nav class="navbarEdit navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">RPG Pills</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="#News">News</a>
                        <a class="nav-item nav-link" href="#Artworks">Artworks</a>
                        <a class="nav-item nav-link" href="#Game">Game</a>
                    </div>
                </div>
            </nav>

        </>

    )
}