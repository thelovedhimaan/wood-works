import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from './List/List';
import WoodWorks from './WoodWorks/WoodWorks';
import Quality from './Quality/Quality';
import Workers from './Workers/Workers';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import './App.css';

function App(Description, Product, ProductName, Image, Price) {
   const [Products, setProducts] = useState([]);
   useEffect(() => {
      getProducts();
   }, []);
   const getProducts = async () => {
      try {
         const localApi = await axios.get('http://localhost:5000/');
         setProducts(localApi.data);
         // console.log(localApi.data);
      } catch (e) {
         alert(e);
      }
   };
   // const findProduct = (id) => {
   //    return Products.find((item) => {
   //       return item.Product === id;
   //    });
   // };
   return (
      <Router>
         <Switch>
            <Route path="/Workers">
               <Workers />
            </Route>
            <Route path="/Quality">
               <Quality />
            </Route>
            <Route
               path="/List/:id"
               render={(props) => <WoodWorks Products={Products} {...props} />}
            />
            <Route path="/List">
               <List Products={Products} />
            </Route>
            <Route exact path="/">
               <Homepage />
            </Route>
         </Switch>
      </Router>
   );
}

export default App;
