import apiClient from "./axiosConfig";

export const getAll=async()=>{
    try{
        const res=await apiClient.get('/recipes')
    return res.data.recipes
    }
    catch (err){
        throw new Error('failed to fetch recipes :',err.message)
    }
}
export const getById=async(id)=>{
    try{
        const res=await apiClient.get(`/recipes/${id}`)
        return res.data
    }
    catch(err){
        throw new Error('failed to fetch recipe ',err.message)
    }
}

export const remove=async(id)=>{
    try{
        const res=await apiClient.delete(`/recipes/${id}`)
        return res.data
    }
    catch (error){
        throw new Error('Failed to delete recipe :',error.message)
    }
}

export const create=async(data)=>{
    try{
         const res=await apiClient.create('/recipes',data)
    return res.data
    }
    catch(err){
        throw new Error('Failed to create recipe :', err.message)
    }
    
}