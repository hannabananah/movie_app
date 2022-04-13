import React from 'react';

function Fruit({fav}){
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
  <div>
    <h1>
      <p>안녕하세요!</p>
      </h1>
      <Fruit fav="coconuts" />
      <Fruit fav="avocados" />
      <Fruit fav="mangoes" />
      <Fruit fav="dragon fruits" />
  </div> 
    );
}

export default App;
