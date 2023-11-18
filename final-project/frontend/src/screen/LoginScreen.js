import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../component/FormContainer'
import axios from 'axios'

export const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const userLogin = localStorage.getItem('userInfo')
    if(userLogin){
      navigate('/')
    }

    const submitHandler = async(e) => {
      e.preventDefault()
      const config = {
        headers: {
            'Content-Type': 'application/json',
        }
      }
      try {
        const { data } = await axios.post('/api/users/login', {email, password}, config)
        localStorage.setItem('userInfo', JSON.stringify(data))
        navigate('/')
      } catch(err) {
        alert(err.response.data.message)
      }
      // const { data } = await axios.post('/api/users/login', {email, password}, config)
      // localStorage.setItem('userInfo', JSON.stringify(data))
      // navigate('/')
    }
    

  return (
    <div style={{marginTop:"5rem", marginBottom:"20rem"}}>
      <p></p>
    <FormContainer>

      <h1>Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button className='my-3' type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer? 
          <Link className='mx-3' to='/register'>Register</Link>
        </Col>
      </Row>
    </FormContainer>
    </div>
  )
}

export default LoginScreen
