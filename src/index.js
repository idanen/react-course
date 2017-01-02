import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const recipes = ['Omelette', 'Pancake', 'Waffels'];

const Header = () => (
  <h1>Our Recipes</h1>
);

const Recipes = () => (
  <ul>
    { recipes.map(recipe => <li key={ recipe }>{ recipe }</li>) }
  </ul>
);

const App = () => (
  <div>
    <Header />
    <Recipes />
  </div>
);



window.App = App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
