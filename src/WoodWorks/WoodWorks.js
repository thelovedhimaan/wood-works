import React from 'react';
import Furniture from './Furniture.js';
import Contact from '../Contact';
function WoodWorks(props) {
   const Type = props.Products.filter((item) => {
      if (item.Product === props.match.params.id) {
         return item;
      }
   });

   return (
      <div>
         <div className="Homepage">
            <h1>
               Category Name <p>Designs speak here</p>
            </h1>
         </div>
         <div
            className="mainTable"
            style={{ display: 'flex', flexWrap: 'wrap' }}
         >
            {Type.map((item) => (
               <div
                  className="Table"
                  key={item.ProductName}
                  style={{
                     width: '400px',
                     display: 'flex',
                     flexWrap: 'wrap',
                     margin: '20px',
                     height: '440px',
                  }}
               >
                  <Furniture
                     Description={item.Description}
                     Product={item.Product}
                     ProductName={item.ProductName}
                     key={item.ProductName}
                     id={item.ProductName}
                     Image={item.Image}
                     Price={item.Price}
                  />
               </div>
            ))}
         </div>
         <Contact />
      </div>
   );
}
export default WoodWorks;
