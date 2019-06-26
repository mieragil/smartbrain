import React from 'react';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            email: '',
            password: '',
            name: ''
        }
    }
    onNameChange = (event) =>{
        this.setState({name: event.target.value})
    }
    onEmailChange = (event) =>{
        this.setState({email: event.target.value})
    }
    onPasswordChange = (event) =>{
        this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {
        if(!this.state.email || !this.state.password || !this.state.name){
            return alert("Please fill all the fields properly")
        }
        fetch('https://still-beyond-78055.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        }).then(response => response.json()).then(user => {
            if (user.id){
                this.props.loadUser(user);
                this.props.onRouteChange('home');
            }
        }).catch(console.log)
    }
    
    render(){
        return (
            <article className="mw6 center bg-light-pink br3 pa3 pa4-ns mv3 shadow-5 ba b--black-10">
                <main className="pa4 black-80">
                    <div className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 input-reset ba w-100" onChange={this.onNameChange} type="text" name="name"  id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba w-100" onChange={this.onEmailChange} type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba w-100" onChange={this.onPasswordChange} type="password" name="password"  id="password" />
                        </div>
                        </fieldset>
                        <div className="">
                        <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                        </div>
                    </div>
                </main>
            </article>
        );
    }
  }

export default Register;
