import React from 'react';

import Card from 'react-bootstrap/Card';

import './Furniture.css';
export default function Furniture(props) {
   return (
      <Card>
         <div className="colors">
            <img
               className="cardImage"
               src={props.Image}
               alt="Image_not_found"
            />

            <Card.Body>
               <Card.Title>
                  <h2 className="par">{props.ProductName}</h2>
               </Card.Title>
               <Card.Text>{props.Description}</Card.Text>
               <Card.Text>
                  <b>Price</b> :
                  <a href={`/List/${props.Product}/${props.ProductName}`}>
                     Rs{props.Price}
                  </a>
               </Card.Text>

               <br></br>
            </Card.Body>
         </div>
      </Card>
   );
}
