import React, { Component } from 'react';

class Login extends Component {
constructor(){
  super();

  this.state= {
    username: '',
    password: ''
  }
}

handleChange = (e) => {
  e.preventDefault();
  this.setState({[e.target.name]: e.target.value});
}
handleSubmit = (e) => {
  e.preventDefault();
console.log('handle submit is working');
this.props.login(this.state.username);

}
  render(){
    console.log(this.state, ' this state');
    return (
<form onSubmit={this.handleSubmit}>
<input type='text' name='username' value={this.state.username} onChange={this.handleChange} placeholder='username' />
<input type='password' name='password' value={this.state.password} onChange={this.handleChange}  placeholder='password' />
<input type='submit' value='Submit' />

</form>

    )
  }
}
 export default Login;
