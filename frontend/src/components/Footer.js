import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3 footer'> &copy; Aftab Shaikh &nbsp; &nbsp;  |  &nbsp; &nbsp; 
          <a href='mailto:aftabshaikh9998675366@gmail.com' ><img className='footer_image' src='../gmail.png' /></a> 
          </Col>
         
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
