import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component
{
    render()
    {
        return(
            <nav>
                <ul className="nav nav-tabs">
                    <li class="nav-item">
                        <Link to="/" role="presentation">  <a class = "nav-link"> Login</a> </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/register" role="presentation"> <a class = "nav-link"> Register </a> </Link>
                    </li>
                   
                    
                </ul>
            </nav>
          
        );
    }
}export default Nav;