import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import RecipeDetailspage from './pages/RecipeDetailsPage'
import RecipesPage from './pages/RecipesPage'
import CreateRecipePage from './pages/createRecipePage'


function App() {
 
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/recipes' element={<RecipesPage />} />
      <Route path='/recipes/:id' element={<RecipeDetailspage />} />
      <Route path='/create' element={<CreateRecipePage />} />
    </Routes>
        
    </BrowserRouter>
  

    </>
  )
}

export default App
