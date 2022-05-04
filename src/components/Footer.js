// import React from "react";

// function Footer() {
//   return (
//     <div>
//       <footer class="main-footer bg-footer">
//         <div class="container px-5">
//           <div class="row">
//             <div class="col">
//               <div class="text-white text-left address">
//                 <h1 class="m-0">LUXURY</h1>
//                 <p class="col offset-md-2">HOTELS</p>
//               </div>
//               <div class="text-white address">
//                 <p>497 Evergreen Rd. Roseville, CA 95673
//                   +44 345 678 903
//                   luxury_hotels@gmail.com</p>
//               </div>
//             </div>
//             <div class="col justify-content-around">
//               <ul class="list-unstyled text-white d-flex flex-column justify-content-between align-items-between">
//                 <li class="py-2"> About Us</li>
//                 <li class="py-2">Contact</li>
//                 <li class="py-2">Terms & Conditions</li>
//               </ul>
//             </div>
//             <div class="col justify-content-around">
//               <ul class="list-unstyled text-white d-flex flex-column justify-content-between">
//                 <li class="py-2 d-flex align-items-center">Facebook</li>
//                 <li class="py-2 d-flex align-items-center">Twitter</li>
//                 <li class="py-2 d-flex align-items-center">Instagram</li>
//               </ul>
//             </div>
//             <div class="col justify-content-around">
//               <ul class="list-unstyled text-white d-flex flex-column justify-content-between align-items-between">
//                 <li class="py-2"> Subscribe to our newsletter</li>
//                 <li class="search-btn py-2"><input type="email" placeholder="Email Address" /><p class="d-inline-block m-0">ok</p></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }


import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div><footer class="main-footer bg-footer">
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
      </footer></div>
    );
  }
}


