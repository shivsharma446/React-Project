import React from "react";
import {IoIosArrowDropleftCircle} from 'react-icons/io';
import {IoIosArrowDroprightCircle} from 'react-icons/io';

function Testimonials() {
  return (
    <div>
      <section class="testinomial">
        <div class="container">
          <div class="row justify-content-center align-items-center font-weight-bold py-5">
            <div class="col-md-12">
              <h3 class="font-weight-bold text-center">Testimonials</h3>
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner d-flex justify-content-center align-items-center">
                  <div class="carousel-item active col-md-6">
                    <h1>Albert</h1>
                    <p class="font-weight-bold">My definition of a good hotel is a place I'd stay at.</p>
                  </div>
                  <div class="carousel-item col-md-6">
                    <h1>Levi</h1>
                    <p class="font-weight-bold">My dinners at home are startlingly simple. Every night, I stop at the market
                      near my hotel and pick up a steak, lamb chops or some liver, which I broil in the electric oven in my
                      room. I usually eat four or five raw carrots with my meat, and that is all. I must be part rabbit; I
                      never get bored with raw carrots.</p>
                  </div>
                  <div class="carousel-item col-md-6">
                    <h1>sands</h1>
                    <p class="font-weight-bold">I love the farm, I love growing stuff.</p>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <i><IoIosArrowDropleftCircle /></i>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                  <i><IoIosArrowDroprightCircle /></i>
                </a>
              </div>
            </div>
          </div>

        </div>

      </section>
    </div>
  );
}

export default Testimonials;