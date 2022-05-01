import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Popup from '../home/popup/popup'

class HomeNav extends Component
{
    render()
    {
        return(

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon Logo" width="150" height="60">
                    </img>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link to="/" role="presentation">  <a class = "nav-link"> Home</a> </Link>
                </li>

                <li class="nav-item">
                    <Link to="/pokegame" role="presentation">  <a class = "nav-link"> PokeGame</a> </Link>
                </li>
                </ul>
                <Popup ></Popup>
    
            </div>
            </nav>


            // <nav>
            //     <ul className="nav nav-tabs">
            //         <li class="nav-item">
            //             <Link to="/" role="presentation">  <a class = "nav-link"> Home</a> </Link>
            //         </li>
            //         <li class="nav-item">
            //             <Link to="/register" role="presentation"> <a class = "nav-link"> Game </a> </Link>
            //         </li>
                   
                    
            //     </ul>
            // </nav>
          
        );
    }
}export default HomeNav;

