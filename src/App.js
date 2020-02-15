import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipe';
import './App.css';
import config from './config.js';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    var url = `${config.API_ENDPOINT}?q=${query}&app_id=${config.APP_ID}&app_key=${config.APP_KEY}`;
    console.log(url);

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error('Something goes wrong, please try again later.');
        }
        return res;
      })
      .then(response => response.json())
      .then(data => setRecipes(data.hits))
      .catch(err =>
        console.error(err.message))
  }, [query])

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <header className="App-header">Okie Dokie Recipe</header>
      <form onSubmit={getSearch} className="form">
        <input className="search-form" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="button">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) =>
          <Recipe
            key={index}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}

          />
        )}
      </div>
    </div>
  );
}

export default App;
