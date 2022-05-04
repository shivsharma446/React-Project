import React from 'react';
import { Link } from 'react-router-dom';
import {IoIosArrowDropdownCircle} from 'react-icons/io';
import {AiFillPlusCircle} from 'react-icons/ai';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

const mainHeader = {
    background: "url(./assets/assets/BG-3.png)",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    backgroundColor: '#14274A !important',
}


class Home extends React.Component {
    render() {
        return (
            <div>
                <section class="header" style={mainHeader}>
                    <div class="container">
                        <nav class="navbar navbar-expand-lg navbar-light justify-content-end">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <a class="navbar-brand" href="/#"><img src="./assets/assets/Group 2.png" alt=""/></a>
                                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                                    <li class="nav-item active">
                                    <Link to="/" className='nav-link text-white px-4'> Home <span class="sr-only">(current)</span></Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link to="/" className='nav-link text-white px-4'> Facilities <span class="sr-only">(current)</span></Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link to="/room" className='nav-link text-white px-4'> Room <span class="sr-only"></span></Link>
                                    </li>
                                    <li class="nav-item">
                                    <Link to="/contact" className='nav-link text-white px-4'> Contact Us <span class="sr-only"></span></Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div class="row left-content">
                            <div class="col-md-4 text-white d-flex flex-column justify-content-center">
                                <h4>WELCOME TO</h4>
                                <h1 class="display-1 m-0">LUXURY</h1>
                                <h3 class="display-5">HOTELS</h3>
                                <p class="font-weight-bold">Book your stay and enjoy Luxury
                                    redefined at the most affordable rates.</p>
                            </div>
                        </div>
                        <div class="row text-center d-flex justify-content-center bottom-content">
                            <div class="col-md-12">
                                <button class="head-btn px-3 py-2 text-white font-weight-bold"><img class="mx-1" width="15" height="15"
                                    src="./assets/assets/Vector.png" alt=""/> Book Now</button>
                                <p class="mt-4 text-white font-weight-bold">Scroll</p>
                                <div class="text-white">
                                    <IoIosArrowDropdownCircle className='bottom-icons' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                    <section class="main-section">
                        <div class="container">
                            <div class="row justify-content-center font-weight-bold py-5">
                                <h3 class="font-weight-bold">ROOMS AND RATES</h3>
                                <p class="font-weight-bold">Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, 
                                comfort isn’t our only objective, we also value good design, sleek contemporary furnishing complemented 
                                by the rich tones of nature’s palette as visible from our rooms’ sea-view windows and terraces. </p>
                            </div>
                            </div>
                            <div class="container">
                            <div class="row d-flex justify-content-center align-items-center border border-rounded">
                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner border">
                                    <div class="carousel-item active">
                                    <img class="d-block w-100" src="./assets/assets/room-1.png" alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                    <img class="d-block w-100" src="./assets/assets/room-2.png" alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                    <img class="d-block w-100" src="./assets/assets/room-3.png" alt="Third slide" />
                                    </div>
                                </div>
                                <div class="row room-header">
                                    <div class="col-md-12">
                                    <ul class="list-unstyled row">
                                        <li class="col-md-12"><h1 class="text-white text-center py-3 all-bg">SINGLE ROOM</h1></li>
                                        <li class="col-md-6 d-flex flex-row align-items-center justify-content-center py-5"> 
                                        <p class="m-0 font-weight-bold px-3 align-items-center d-flex "><AiFillPlusCircle />VIEW ROOM DETAILS</p></li>
                                        <li class="col-md-6 d-flex flex-row align-items-center justify-content-center py-5"><button class="head-btn text-white px-3 py-2">$147  Avg/night</button></li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                            <br/>
                            <br/>
                        </section>
                        <Testimonials />
                        <Footer />
                    </div>
                    );
    }
}

                    export default Home;