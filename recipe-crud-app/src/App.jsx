
import './App.css'
import RecipeList from './components/recipeList'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import RecipeDetailspage from './pages/RecipeDetailsPage'
import RecipesPage from './pages/RecipesPage'


function App() {
 
  return (
    <>
    <BrowserRouter>
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/recipes' element={<RecipesPage />} />
      <Route path='/recipes/:id' element={<RecipeDetailspage />} />
    </Routes>
        
    </BrowserRouter>
  

    </>
  )
}

export default App
