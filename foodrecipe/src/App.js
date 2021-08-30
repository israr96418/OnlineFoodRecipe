import { useState } from 'react'
import './App.css';
// import './App_appi'
import axios from 'axios'
import RecipeTitle from './RecipeTitle';


function App() {
  const [query, setquery] = useState("")
  const [recipe, setrecipe] = useState([])
  console.log("data come to the recipe: ",recipe)
  
  const [healthlabels, sethealthlabels] = useState("vegan")

  
  const YOUR_APP_ID = "aa15f5da"
  const YOUR_APP_KEY = "d8cf321c5f0b07930a2e6641a5eff563"

  // const base_url = `https://api.edamam.com/search?q=${query}id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`
  const base_url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthlabels}`

  async function GetdataFromServer() {
    let response = await axios.get(base_url)
    setrecipe(response.data.hits)
    // console.log(response.data)
  }

  const SubmitForm = (e) => {
    e.preventDefault()
  GetdataFromServer()
  }
  return (
    <div className="app">
      <h1>Food Online Recipe</h1>
      <div>

        <form className="app__searchForm" onSubmit={SubmitForm}>
          <input className="app__input" type="text"
            placeholder="Enter ingirdiant"
            value={query} onChange={e => setquery(e.target.value)}
          />

          <input  className="app__submit" type="submit" value="search" />

          <select className="app__healthLabels">
            <option  onClick={()=>sethealthlabels("vegan")}>Vegan</option>
            <option  onClick={()=>sethealthlabels("vegetarian")}>vegetarian</option>
            <option  onClick={()=>sethealthlabels("paleo")}>paleo</option>
            <option  onClick={()=>sethealthlabels("dairy-free")}>dairy</option>
            <option  onClick={()=>sethealthlabels("gluten-free")}>gluten-free</option>
            <option  onClick={()=>sethealthlabels("wheat-free")}>wheat-free</option>
            <option  onClick={()=>sethealthlabels("Egg-Free")}>Egg-Free</option>
            <option  onClick={()=>sethealthlabels("Sesame-Free")}>Sesame-Free</option>
            <option  onClick={()=>sethealthlabels("Alcohol-Cocktail")}>Alcohol-Cocktail</option>
            <option  onClick={()=>sethealthlabels("Crustacean-Free")}>Crustacean-Free</option>
            <option  onClick={()=>sethealthlabels("Celery-Free")}>Celery-Free</option>
            <option  onClick={()=>sethealthlabels("Lupine-Free")}>Lupine-Free</option>
            <option  onClick={()=>sethealthlabels("Fish-Free")}>Fish-Free</option>

          </select>
        </form>


      </div>
      <div className="app__recipes">
        {
          recipe.map( recipe =>{
           return <RecipeTitle recipe={recipe}/>
          }
          )
}
      </div>

    </div>
  );
      }

export default App;
