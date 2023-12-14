import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Category from './Category'
import View from './View'
import Add from './Add'
import { Link } from 'react-router-dom'
import Watchhistory from './Watchhistory'









function Home() {

  const[serverRes,setserverRes]=useState({})
  

  // function definition 
  const handleResponse=(res)=>{

    setserverRes(res)

  }



  return (
    <div className='container-fluid'>

      <Link style={{textDecoration:'none',fontSize:'30px',color:'blue'}} to={'/watchhistory'}>Watch History</Link>

      <Row>

        {/* add component */}

        <Col lg={1}>
          <Add handleResponse={handleResponse}/>
          </Col>


          {/* view component  */}
          <Col lg={7}>
            <View serverRes={serverRes}/>
          </Col>

          {/* category component */}
          <Col lg={4}>
            <Category/>
          </Col>


      </Row>

    </div>
  )
}

export default Home