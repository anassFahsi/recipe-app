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