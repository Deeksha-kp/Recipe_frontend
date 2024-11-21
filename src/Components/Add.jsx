import React ,{useState} from 'react'
// import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addRecipe } from '../Services/allApis';
import { toast } from 'react-toastify';



function Add({res}) {
    const [show, setShow] = useState(false);
    const[recipe,setRecipe]=useState({
        title:"",description:"",rate:"",imageUrl:""
    })
    const handleAdd=async()=>{
        console.log(recipe);
        const {title,description,rate,imageUrl}=recipe
        if(!title || !description ||!rate|| !imageUrl){
            //alert("enter valid input")
            toast.warning("enter valid input!")
        }
        else{
            const result=await addRecipe(recipe)
            console.log(result)
            if(result.status==201){
                toast.success("Recipe Added")
                handleClose()
                setRecipe({
                    title:"",description:"",rate:"",imageUrl:""
                })
                res(result)
            }
            else{
                toast.error("Adding Failed")
            }
        }
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className=' d-grid p-4'>
        <button className='btn btn-dark' onClick={handleShow}> Add Recipes</button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add recipes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input type="text" placeholder='Recipe Name' onChange={(e)=>{setRecipe({...recipe,title:e.target.value})} }className='form-control mb-3' />
            <input type="text" placeholder='Description'  onChange={(e)=>{setRecipe({...recipe,description:e.target.value})} }className='form-control mb-3' />
            <input type="number" placeholder='Rate' onChange={(e)=>{setRecipe({...recipe,rate:e.target.value})} } className='form-control mb-3' />
            <input type="text" placeholder=' Image URL'  onChange={(e)=>{setRecipe({...recipe,imageUrl:e.target.value})} }className='form-control mb-3' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd} >Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add