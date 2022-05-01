import React, { Component } from 'react';


class Home extends Component{

    
    render(){
        return (

        <div >
    
            <h2 >Pokémon</h2>
            <p>Pokémon, also known as Pocket Monsters in Japan, 
                is a Japanese media franchise managed by the Pokémon Company, a company founded and 
                with shares divided between Nintendo, Game Freak, and Creatures. </p>

            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://miro.medium.com/max/1200/1*y0-zWEUPYi6TRuz0lC-0Ig.jpeg" width ="545px" height ="900" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://wi-images.condecdn.net/image/Pq586yJV2b5/crop/405/f/Pokemon_SunMoon_Starters.jpg"  width ="545px" height ="900" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://bestreamer.com/wp-content/uploads/2019/12/06-Snivy-Tepig-Oshawott.jpg"  width ="545px" height ="900" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src="https://qph.fs.quoracdn.net/main-qimg-f8acdd659d9ef4c3b1945ab5ff98433a.webp"  width ="545px" height ="900"  class="d-block w-100" alt="..."/>
                    
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
       
      );
    }
    // render() {
    //     return (
    //       <div>
    //        <h1> Simple Popup Example In React Application </h1>
    //        <button onClick={this.togglePopup.bind(this)}> Click To Launch Popup</button>
    
    //        {this.state.showPopup ?
    //          <Popup
    //           text='Click "Close Button" to hide popup'
    //           closePopup={this.togglePopup.bind(this)}
    //          />
    //          : null
    //        }
    //       </div>
    
    //     );
    //   }
  }
  
  export default Home;