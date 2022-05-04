import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const mainHeader = {
    background: 'none',
    backgroundPosition:  'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '40vh',
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
                                <a class="navbar-brand" href="/#"><img src="./assets/assets/Group 2.png" alt="" /></a>
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
                        <div class="row">
                            <div class="col-md-12 text-white d-flex flex-column align-items-center justify-content-center">
                                <h1 class="display-3 m-0 font-weight-normal">CONTACT US</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="main-section">
                    <div class="container">
                        <div class="row justify-content-start font-weight-bold py-5">
                            <h3 class="font-weight-bold">WE ARE HERE FOR YOU</h3>
                            <p class="font-weight-bold">At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests,
                                please forward it to our support desk and we will get back to you as soon as possible.</p>
                            <div class="col d-flex flex-row pt-4">
                                <div class="col-md-6">
                                    <h4>497 Evergreen Rd. Roseville, <br />
                                        CA 95673</h4>
                                        <h4 class="font-weight-bold d-flex align-items-center">View map<BsArrowRight /></h4>
                                    <h4>Phone: +44 345 678 903
                                        Email: luxury_hotels@gmail.com</h4>
                                </div>
                                <div class="col-md-6">
                                    <form class="d-flex flex-column">
                                        <label for="fname">First Name</label>
                                        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>

                                        <label for="lname">Last Name</label>
                                        <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                                        <label for="country">Message</label>
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </section>

                <footer class="main-footer bg-footer">
                    <div class="container px-5">
                        <div class="row">
                            <div class="col">
                                <div class="text-white text-left address">
                                    <h1 class="m-0">LUXURY</h1>
                                    <p class="col offset-md-2">HOTELS</p>
                                </div>
                                <div class="text-white address">
                                    <p>497 Evergreen Rd. Roseville, CA 95673
                                        +44 345 678 903
                                        luxury_hotels@gmail.com</p>
                                </div>
                            </div>
                            <div class="col justify-content-around">
                                <ul class="list-unstyled text-white d-flex flex-column justify-content-between align-items-between">
                                    <li class="py-2"> About Us</li>
                                    <li class="py-2">Contact</li>
                                    <li class="py-2">Terms & Conditions</li>
                                </ul>
                            </div>
                            <div class="col justify-content-around">
                                <ul class="list-unstyled text-white d-flex flex-column justify-content-between">
                                    <li class="py-2 d-flex align-items-center">Facebook</li>
                                    <li class="py-2 d-flex align-items-center">Twitter</li>
                                    <li class="py-2 d-flex align-items-center">Instagram</li>
                                </ul>
                            </div>
                            <div class="col justify-content-around">
                                <ul class="list-unstyled text-white d-flex flex-column justify-content-between align-items-between">
                                    <li class="py-2"> Subscribe to our newsletter</li>
                                    <li class="search-btn py-2"><input type="email" placeholder="Email Address" /><p class="d-inline-block m-0">ok</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home;