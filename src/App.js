import React from 'react';
import propTypes from 'prop-types';

function Fruit({ what, picture, rating }){
  return (
    <div>
      <img src={picture} alt={what} />
      <h2>I like {what}</h2>
      <h4>{rating} / 5.0 </h4>
      <hr/>
      <br/>
    </div>
  );
}

const fruitLike=[
  {
    id: 1,
    name: '바나나',
    image: 'http://qwerew.cafe24.com/images/banana.png',
    rating: 5,
  },
  {
    id: 2,
    name: '오렌지',
    image: 'http://qwerew.cafe24.com/images/orange.png',
    rating: 4.2,
  },
  {
    id: 3,
    name: '사과',
    image: 'http://qwerew.cafe24.com/images/apple.png',
    raging: 4.8,
  },
  {
    id: 4,
    name: '메론',
    image: 'http://qwerew.cafe24.com/images/melon.jpg',
    rating: 3.7,
  },
];

function App() {
  return (
    <div>
      {fruitLike.map((dish) => (
        <Fruit key={dish.id} what={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}
Fruit.propTypes = {
  what: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
};

export default App;
