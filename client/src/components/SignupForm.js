import React, { Component } from 'react'
import { Container, Form, Input, Button } from 'semantic-ui-react'

 class SignupForm extends Component {
  render(){
    return(
      <div className='form-container'>
        <Form>
          <Form.Group widths='equal' className='form-input'>
            <Form.Field>
              <label>Email</label>
              <input type='text' placeholder='you@something.com' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input type='password' placeholder='••••••••'/>
            </Form.Field>
          </Form.Group>
          <Form.Group widths='equal' className='form-input'>
            <Form.Field>
              <label>First Name</label>
              <input type='text' placeholder='your name' />
            </Form.Field>
          </Form.Group>
          <br />
          <Button primary type='submit'>Submit</Button>
        </Form>
      </div>
    )
  }
}
 export default SignupForm
