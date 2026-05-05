import  { useState } from 'react'
import { create } from '../api/recipesApi'
import { useNavigate } from 'react-router-dom'
const RecipeForm = () => {
    const navigate=useNavigate()
    const[formData,setFormData]=useState({
        name:'',
        ingredients:'',
        instructions:''
    })

    const handleChange=(e)=>{
        const{name,value}=e.target
        setFormData(prev=>({...prev,[name]:value}))
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            await create('/recipes',formData)
            alert('Recipe created succefully!')
            navigate('/')
        }
        catch(err){
            throw(err.message)
        }
    }
    const handleCancel=()=>navigate('/')
  return (
    <div>
        <form action="#" onSubmit={handleSubmit}>
            <label htmlFor="name">
                <input 
                    type="text"
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                 />
            </label>
            <br />
              <label htmlFor="ingredients">
                <input 
                    type="text"
                    name='ingredients'
                    value={formData.ingredients}
                    onChange={handleChange}
                    required
                 />
            </label>
            <br />
              <label htmlFor="instruction">
                <input 
                    type="text"
                    name='instructions'
                    value={formData.instructions}
                    onChange={handleChange}
                    required
                 />
            </label>
            <button type='submit'>Create recipe</button>
            <button onClick={handleCancel}>Cancel</button>
          

            
        </form>
      
    </div>
  )
}

export default RecipeForm
