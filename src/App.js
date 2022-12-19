import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import './App.css';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Card2,
  Card3,
} from './components/Card';


const data = [
  {
    name: 'Banana',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/1200px-Banana-Single.jpg',
    color: 'Yellow',
  },
  {
    name: 'Apple',
    img: 'https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=',
    color: 'Red',
  },
  {
    name: 'Orange',
    img: 'https://energevowholesale.com/admin/public/size_primary_images/1602506509-orange-kinova-mported.jpg',
    color: 'orange',
  },
  {
    name: 'Pineapple',
    img: 'https://organic-village.co.th/wp-content/uploads/2021/12/organic-pineapple-1200x1200.jpeg',
    color: 'Yellow',
  },
  {
    name: 'Pineapple 2',
    img: 'https://organic-village.co.th/wp-content/uploads/2021/12/organic-pineapple-1200x1200.jpeg',
    color: 'Yellow',
  },
];

function App() {
  const [query, setQuery] =  useState("");
  
  // function onSearch (event) {
  //   event.preventDefault();
  //   const searchQuery = event.target.elements['search-query'].value;
  //   setQuery(searchQuery);
  // }

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().startsWith(query.toLowerCase());
  });

  function onChangeSearchQuery (event) {
    const searchQuery = event.target.value;
    setQuery(searchQuery);
  }

  function onClickClear (event) {
    //event.preventDefault();
    setQuery("");
  }

  return (
    <div className="App">
      <h1> Fruits </h1>
    
      <form onSubmit={(event) => event.preventDefault()}>
        <label> Search for a fruit </label>
        <input type="text" id="search-query" onChange={onChangeSearchQuery} value={query}></input>
        <button onClick={onClickClear}> Clear </button>
      </form>
      
      {/* <form onSubmit={onSearch}>
        <label> Search for a fruit </label>
        <input type="text" id="search-query"></input>
        <button type="Submit"> Search </button>
      </form> */}

      <div className={"fruits-cards"}>
        {filteredData.map((item) => {
          return (
            <div className={"fruit-card"}>
              <Card key={item.name}>
                <CardHeader> {item.name} </CardHeader>
                <CardContent
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    height: '10%',
                    border: `1px solid ${item.color.toLowerCase()}`,
                  }}
                >
                  <img src={item.img} className="fruit-img"></img>
                </CardContent>
                <CardFooter> color: {item.color} </CardFooter>
              </Card>

              {/* <Card2
                key={item.name}
                header={item.name}
                img={item.img}
                footer={<div>`Color: {item.color}`</div>}
              ></Card2>

              <Card3
                key={item.name}
                data={{
                  header: item.name,
                  img: item.img,
                  footer: `Color ${item.color}`,
                }}
              ></Card3> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
