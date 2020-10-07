import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact';
import './List.css';

export default function List(props) {
   const unique = [...new Set(props.Products.map((item) => item.Product))];

   return (
      <div className="head">
         <div className="Homepage">
            <h1>
               Our Products <p>Best quality is here everwhere</p>
            </h1>
         </div>

         <div className="chartlist">
            {unique.map((item) => (
               <div className="charthead" key={item}>
                  <Link to={`/List/${item}`}>
                     <div className="chart">{item}</div>
                  </Link>
               </div>
            ))}
         </div>
         <Contact />
      </div>
   );
}
