
import './App.css'
import RecipeList from './components/recipeList'

function App({recipes}) {
 
  return (
    <>
    <RecipeList  recipes={recipes}/>
    </>
  )
}

export default App
