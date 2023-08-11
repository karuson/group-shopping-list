import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';

import GroceryForm from '../GroceryForm/GroceryForm.jsx';
import ListItem from './ListItem/ListItem.jsx';

function App() {

  const [shoppingList, setShoppingList] = useState([]);

  // GET items from the server / database
  const fetchGroceries = () => {
    axios({
      method: 'GET',
      url: '/list'
    }).then((response) => {
      console.log('Response Data | ', response.data)
      setShoppingList(response.data)
    }).catch((error) => {
      console.log('GET Error | ', error)
    })
  }
  
  useEffect( () => {
    fetchGroceries()
  }, []);
  
  return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                <GroceryForm fetchGroceries={fetchGroceries}/>
                <ListItem shoppingList={shoppingList}/>
            </main>
        </div>
    );
}

export default App;
