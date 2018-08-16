import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Header, Container, Button, Divider } from 'semantic-ui-react'
import SignupForm from './SignupForm'
 class Signup extends Component {
  render() {
    return(
      <Container>
        <Header as='h2' textAlign='center'>
          Create a New Account
          <Divider hidden />
        </Header>
        <SignupForm />
        <Divider horizontal section>OR</Divider>
        <Button as={Link} to='/login' secondary>Log In</Button>
      </Container>
    )
  }
}
 export default Signup
  
