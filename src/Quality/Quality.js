import React from 'react';
import Contact from '../Contact';
export default function Qualtity() {
   return (
      <div>
         <div className="Homepage">
            <h1>
               Wood we Use <p>Tested qualtiy</p>
            </h1>
         </div>
         <div className="main">
            <div className="container">
               <div>
                  <div className="Homepage">
                     {' '}
                     <img
                        className="Homepage-column"
                        src="https://images.unsplash.com/photo-1589275197588-9dfc35760ba9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        alt="img1"
                     />
                     <h2 className="Homepage-column text2">
                        Quality of wood is Our main focus for providing long
                        lasting furniture.
                     </h2>
                  </div>
               </div>
               <div>
                  {' '}
                  <div className="Homepage">
                     {' '}
                     <h2 className="Homepage-column text2">
                        Wood we use has no effect of climate, it will last
                        forever no matters where you live.
                     </h2>
                     <img
                        className="Homepage-column"
                        src="https://images.unsplash.com/photo-1569485280337-53f1db13a9d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                        alt="img2"
                     />
                  </div>{' '}
               </div>
               <div>
                  {' '}
                  <div className="Homepage ">
                     <img
                        className="Homepage-column "
                        src="https://images.unsplash.com/photo-1585590816538-2cc689689ba7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
                        alt="img3"
                     />

                     <h2 className="Homepage-column text2">
                        Wood we use is pest resistant. We don't use any bad
                        quality of wood because we believe in taking good wishes
                        from people.
                     </h2>
                  </div>
               </div>
            </div>
         </div>
         <Contact />
      </div>
   );
}
