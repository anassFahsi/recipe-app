import { useEffect, useState } from "react";
import { getAll } from "../api/recipesApi";

const RecipeList = () => {
    const[recipes,setRecipes]=useState([])
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState(null)
    const fetchRecipes=async()=>{
        setLoading(true)
        try{
            const data=await getAll()
            console.log(data)
            setRecipes(data)
        }
        catch(err){
            setError(err.message)
        }
        finally{
            setLoading(false)
           
        }
    }

    useEffect(()=>{
        fetchRecipes()
    },[])

    if(error)return <p>{error}</p>
    if(loading)return <p>Loading...</p>
  return (
    <div>
        <ul>
        
            {recipes.map(recipe=>
            (<li key={recipe.id}>
                {recipe.name}
            </li>))}
        </ul>
    </div>
  )
}

export default RecipeList
