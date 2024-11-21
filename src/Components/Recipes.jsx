import React, { useEffect, useState } from 'react'
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getRecipes } from '../Services/allApis';
import { deleteRecipe } from '../Services/allApis';
import { toast } from 'react-toastify';



function Recipes({response}) {
    const[recipeList,setRecipeList]=useState([])
    useEffect(()=>{
        getData()
    },[response])
    const getData=async()=>{
        const result=await getRecipes()
        console.log(result);
        if(result.status==200){
            setRecipeList(result.data)
        }
    }
    const delRecipe=async(id)=>{
        const result = await deleteRecipe(id)
        console.log(result)
        if(result.status==200){
            getData()
            toast.success("Recipe Removed")
        }
    }
  return (
    <>
    <h2 className='mt-4'>All Recipes</h2>
    <div className='border border-2 border-dark p-3 'style={{backgroundColor:"#dedcdc"}}> 
    {
        recipeList.length > 0 ?
        <div className='row'>
            {
                recipeList.map(item=>(

                 
    <Card style={{ width: '18rem' , backgroundColor:"black",color:"white"}} className='m-3'>
      <Card.Img variant="top" height={'220px'} src={item?.imageUrl} />
      <Card.Body>
        <Card.Title>{item?.title}</Card.Title>
        <Card.Text className='d-flex justify-content-between'>
          <span>₹{item?.rate}</span>
          <span>{item?.description}</span>
        </Card.Text>
        <button className='btn' onClick={()=>{delRecipe(item.id)}}>
        <i className="fa-solid fa-trash-can fa-lg" style={{color: "#900404",}} />
        </button>
      </Card.Body>
    </Card>
  ))
    }
    </div>
    :
    <h2 className='text-center text-danger'>No recipes added yet</h2>
}
    </div>
    </>
  )
}

export default Recipes