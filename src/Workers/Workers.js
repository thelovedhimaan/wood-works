import React from 'react';
import Contact from '../Contact';
export default function Workers() {
   return (
      <div>
         <div className="Homepage">
            <h1>
               How we Manufacture <p>Hardwork is our hobby</p>
            </h1>
         </div>
         <div className="main">
            <div className="container">
               <div>
                  <div className="Homepage">
                     {' '}
                     <img
                        className="Homepage-column"
                        src="https://images.unsplash.com/photo-1560846389-956694677531?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80"
                        alt="img1"
                     />
                     <h2 className="Homepage-column text2">
                        {' '}
                        Top class machinery that we use is exported from America
                        so that we can provide best quality of furniture in our
                        country.
                     </h2>
                  </div>
               </div>
               <div>
                  {' '}
                  <div className="Homepage">
                     {' '}
                     <h2 className="Homepage-column text2">
                        {' '}
                        We have certified workers who are qualified to perform
                        there respective task and all are hardworking in nature.{' '}
                     </h2>
                     <img
                        className="Homepage-column"
                        src="https://images.unsplash.com/photo-1571412182149-36989eb33723?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                        alt="img2"
                     />
                  </div>{' '}
               </div>
               <div>
                  {' '}
                  <div className="Homepage ">
                     <img
                        className="Homepage-column "
                        src="https://images.unsplash.com/photo-1561297331-a9c00b9c2c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        alt="img3"
                     />

                     <h2 className="Homepage-column text2">
                        We provide proper finishing to our prducts which makes
                        our furniture more superior than any other seller.
                     </h2>
                  </div>
               </div>
            </div>
         </div>
         <Contact />
      </div>
   );
}
