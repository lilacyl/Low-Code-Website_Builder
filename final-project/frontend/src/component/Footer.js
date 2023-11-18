import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import { Row, Col } from 'react-bootstrap'

export const Footer = () => {
  return (
    <>
      <footer style={{backgroundColor: '#0c2852'}}>
        <Container>
          <Row>
            <Col className='text-center py-3' style={{color: 'white', fontSize: '60%'}}>
              Copyright@UIUC CS409 Five Questions template
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
