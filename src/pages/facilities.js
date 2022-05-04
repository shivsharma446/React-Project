import React from 'react';
// import {IoIosArrowDropdownCircle} from 'react-icons/io';
// import { IoIosArrowDropleftCircle } from 'react-icons/io';
// import { IoIosArrowDroprightCircle } from 'react-icons/io';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

const mainHeader = {
    background: 'none',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '40vh',
    backgroundColor: '#14274A !important',
}

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header style={mainHeader} />
                {/* <section class="header" style={mainHeader}>
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
                        <div class="row text-center d-flex justify-content-center">
                            <div class="col-md-12">
                                <button class="head-btn px-3 py-2 text-white font-weight-bold"><img class="mx-1" width="15" height="15"
                                    src="./assets/assets/Vector.png" alt=""/> Book Now</button>
                                <p class="mt-4 text-white font-weight-bold">Scroll</p>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section class="main-section">
                    <div class="container">
                        <div class="row justify-content-center font-weight-bold py-5">
                            <h3 class="font-weight-bold">FACILITIES</h3>
                            <p class="font-weight-bold">We want your stay at our lush hotel to be truly unforgettable.  That is why we give special attention to all of your needs so
                                that we can ensure an experience quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure
                                and our modern luxury resort facilities will help you enjoy the best of all. </p>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row d-flex justify-content-center align-items-center">
                            <div class="col-md-12">
                                <img src="./assets/assets/gym.png" alt="" />
                            </div>
                            <div class="col-md-12 py-5">
                                <img src="./assets/assets/bar.png" alt="" />
                            </div>
                            <div class="col-md-12 py-5">
                                <img src="./assets/assets/spa.png" alt="" />
                            </div>
                            <div class="col-md-12 py-5">
                                <img src="./assets/assets/pool.png" alt="" />
                            </div>
                            <div class="col-md-12 py-5">
                                <img src="./assets/assets/resturant.png" alt="" />
                            </div>
                            <div class="col-md-12 py-5">
                                <img src="./assets/assets/laundry.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </section>
                <Testimonials />
                <Footer />
            </div>
        );
    }
}

export default Home;