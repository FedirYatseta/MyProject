import React,{useState} from 'react'
import { Form, Button,Col } from 'react-bootstrap';

let FormEdit = (props) => {
  debugger;

  const [user, setUsers] = useState([])
  const [userId, setUser] = useState()
  const submitForm = () => {
   
  }
  return (
    <Form>
       <Form.Row>
      <Form.Group as={Col} md="4">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="email" placeholder="First Name" />
      </Form.Group>
      <Form.Group as={Col} md="4">
        <Form.Label>Address</Form.Label>
        <Form.Control type="email" placeholder="Address" />
      </Form.Group>
      <Form.Group as={Col} md="4" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      </Form.Row>
      <Form.Row>
      <Form.Group  as={Col} md="4" >
        <Form.Label>Contact</Form.Label>
        <Form.Control type="email" placeholder="Contact" />
      </Form.Group>
      <Form.Group  as={Col} md="4" >
        <Form.Label>Gender</Form.Label>
        <Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </Form.Control>
      </Form.Group>
      </Form.Row>
      <Button type="save" variant="primary" onClick={()=>{submitForm() }}>Save</Button>{' '}
      <Button type="cancel" variant="danger">Cancel</Button>
    </Form>
  )

}

export default FormEdit