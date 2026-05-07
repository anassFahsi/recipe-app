import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import RecipeDetailspage from './pages/RecipeDetailsPage'
import RecipesPage from './pages/RecipesPage'
import CreateRecipePage from './pages/createRecipePage'
import UpdateRecipePage from './pages/UpdateRecipePage'


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
      <Route path='/recipes/:id/edit' element={<UpdateRecipePage />}/>
    </Routes>
        
    </BrowserRouter>
  

    </>
  )
}

export default App
