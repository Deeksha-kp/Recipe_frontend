import axios from "axios";

export const addRecipe=async(data)=>{
    return await axios.post('https://recipe-server-nbdm.onrender.com/recipes',data)
 }

 export const getRecipes=async()=>{
    return await axios.get('https://recipe-server-nbdm.onrender.com/recipes')
 }
 export const deleteRecipe=async(id)=>{
    return await axios.delete(`https://recipe-server-nbdm.onrender.com/recipes/${id}`)
 }
 