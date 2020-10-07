import React from 'react';

import Contact from '../Contact';
import './Homepage.css';
export default function Products() {
   return (
      <div>
         <div className="Homepage">
            <h1>
               WoodWorks <p>Quality that speaks itself</p>
            </h1>
         </div>
         <div className="main">
            <div className="container">
               <div>
                  <a href="/List">
                     <div className="Homepage">
                        {' '}
                        <img
                           className="Homepage-column"
                           src="https://images.unsplash.com/photo-1594100618274-3e351e135b07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                           alt="img1"
                        />
                        <h2 className="Homepage-column text"> All Products</h2>
                     </div>
                  </a>
               </div>
               <div>
                  {' '}
                  <a href="Workers">
                     <div className="Homepage">
                        {' '}
                        <h2 className="Homepage-column text">
                           Manufacturing process
                        </h2>
                        <img
                           className="Homepage-column"
                           src="https://images.unsplash.com/photo-1506599667882-385dd6673353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
                           alt="img2"
                        />
                     </div>{' '}
                  </a>
               </div>
               <div>
                  {' '}
                  <a href="/Quality">
                     <div className="Homepage ">
                        <img
                           className="Homepage-column "
                           src="https://images.unsplash.com/photo-1582282577080-2ebf8af6ca81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
                           alt="img3"
                        />

                        <h2 className="Homepage-column text">
                           Best quality of Wood
                        </h2>
                     </div>
                  </a>
               </div>
            </div>
         </div>
         <Contact />
      </div>
   );
}
