import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

class Home extends React.Component {
    render() {
        return (
            <div>
                <section class="header">
                    <div class="container">
                        <nav class="navbar navbar-expand-lg navbar-light justify-content-end">
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <a class="navbar-brand" href="/#"><img src="./assets/assets/Group 2.png" alt="" /></a>
                                <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                                    <li class="nav-item active">
                                        <Link to="/" className='nav-link text-white px-4'> Home <span class="sr-only">(current)</span></Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="/facilities" className='nav-link text-white px-4'> Facilities <span class="sr-only"></span></Link>
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
                                    src="./assets/assets/Vector.png" alt="" /> Book Now</button>
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
                            <p class="h5">All our room types are including complementary breakfast</p>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-md-4 custom-room">
                                <h1>Luxury redefined</h1>
                                <p class="font-weight-bold">Our rooms are designed to transport
                                    you into an environment made for leisure.
                                    Take your mind off the day-to-day of home
                                    life and find a private paradise for yourself.</p>
                                <button class="head-btn px-3 py-2 text-white font-weight-bold  w-30">EXPLORE</button>
                            </div>
                            <div class="col-md-6">
                                <img src="./assets/assets/main-1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-md-4 custom-room">
                                <h1>Leave your worries in the sand</h1>
                                <p class="font-weight-bold">We love life at the beach. Being close
                                    to the ocean with access to endless sandy
                                    beach ensures a relaxed state of mind. It
                                    seems like time stands still watching the
                                    ocean. </p>
                                <button class="head-btn px-3 py-2 text-white font-weight-bold  w-30">EXPLORE</button>
                            </div>
                            <div class="col-md-6">
                                <img src="./assets/assets/main-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <Testimonials />
                <Footer />
            </div>
        );
    }
}

export default Home;