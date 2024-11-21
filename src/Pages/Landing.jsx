import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center container-fluid' style={{height:'80vh'}}>
        <div className='w-75 border shadow p-5 text-center' >
          <h1>Recipee</h1>
         <Link to={'/home'} className='btn btn-outline-success mt-4'>Check Recipes</Link>
        </div>
    </div>
    </>
  )
}

export default Landing