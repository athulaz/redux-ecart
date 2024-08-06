import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    <div className='container-fluid'> 

    <Row className='bg-secondary p-3'>
    <Col> <h4> Reduxcart</h4> 
    <p style={{ textAlign:'justify'}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias accusantium quos, eaque quidem recusandae voluptatum maxime aspernatur vel assumenda at placeat atque dolorum incidunt tenetur aut molestias ex qui hic?</p>
     </Col>


    <Col> 
    <h4> Links </h4>
    
     <ul> 
      <li>
           <Link className='text-light text-decoration-none' to={'/'} > Home  </Link>       
      </li>

      <li>
           <Link  className='text-light text-decoration-none' to={'/wish'} > Wishlist </Link>       
      </li>
      <li>
           <Link  className='text-light text-decoration-none' to={'/cart'} > Cart </Link>       
      </li>
     </ul>
     </Col>

    <Col>
    <h4> Contact </h4>
     <p>Email: redux@gmail.com</p>
     <p>Phone: +917894745632</p>

<div> 
<textarea name="" id="" className='form-control'></textarea>
<button className='btn-light btn mt-3'> Send </button>
</div>

      </Col>

<p style={{textAlign:'center'}}>copyright &copy; 2024 all right reserved </p>

    </Row>
    
    
    </div>
  </>
  )
}

export default Footer
