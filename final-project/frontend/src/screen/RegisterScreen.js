import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../component/FormContainer';
import axios from 'axios'
// import { listenerCount } from '../../../backend/models/user';

export const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')

    const navigate = useNavigate()

    const submitHandler = async(e) => {
        e.preventDefault()
        if(password !== confirmedPassword){
            alert("The passwords you entered two times are not consistence!")
        }else if(name === '' || email === '' || password === '' || confirmedPassword === ''){
            alert("Please enter every fields of the page!")
        }else{
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                }
            }

            // const data = await axios.post('/api/users', { email, name, password, confirmedPassword }, config)
            // console.log(data.data.message)
 
            try {
              await axios.post('/api/users', { email, name, password, confirmedPassword }, config)
              alert("Register Successed!")
              navigate('/login')
            } catch(error) {
              alert(error.response.data.message)
            }
            
        }
    }


  return (
    <FormContainer>
      <h1>Register</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
            <Form.Label>User Name</Form.Label>
            <Form.Control type='text' placeholder='Enter User Name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
            <Form.Label>Confirmed Password</Form.Label>
            <Form.Control type='password' placeholder='Enter Password Again' value={confirmedPassword} onChange={(e) => setConfirmedPassword(e.target.value)}></Form.Control>
        </Form.Group>
        <Button className='my-3' type='submit' variant='primary'>
          Register
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          Have an Account? 
          <Link className='mx-3' to={'/login'}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen