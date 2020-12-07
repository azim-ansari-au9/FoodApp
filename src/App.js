import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Axios from 'axios';
import Footer from './components/Footer';



const App = () => {

  const [search,setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "f18ad21e";
  const APP_KEY = "768e7962d93f81bf6a8dcee6b83105a5";

  useEffect(() => {
    getRecipes(); 
  }, [search,recipes]);
  
  const getRecipes = async () =>{
    const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    setRecipes(result.data.hits)
  }

  const onInputChange = e => {
    setSearch(e.target.value)
  }

  const searchClick = () => {
    getRecipes();
  }
  return (
    <div className='App'>
          <Header search={search} onInputChange={onInputChange} searchClick={searchClick}/>
          <div className='container'>
            <Recipes recipes={recipes} />
          </div>
          <Footer />
      </div>
  );
}

export default App;
