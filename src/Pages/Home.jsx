import React ,{useState}from 'react'
import {Row,Col} from 'react-bootstrap'
import Add from '../Components/Add'

import Recipes from '../Components/Recipes'

function Home() {
    const[response,setResponse]=useState("")
  return (
    <>
    <div className='container-fluid'>
        <Row>
            <Col sm={12} md={3}>
                <Add res={setResponse}/>
            </Col>
            <Col sm={12} md={9}>
                <Recipes response={response}/>
            </Col>
        </Row>
    </div>
    </>
  )
}

export default Home