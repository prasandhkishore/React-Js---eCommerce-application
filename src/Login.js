import React, {Component} from 'react';
import { useState } from 'react';
import './Login.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email: null,
            password: null,
            submitClicked: false,
              emailError: "",
              passwordError: ""
        }

        
    }

    handelChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
            [e.target.name+"error"]: ""

        })
    }

    handelSubmit=(e)=>{
        if (
            this.state.email &&
            this.state.password 
          ) {
            this.setState({
              submitClicked: true
            });
          } else {
            if (!this.state.email) {
              this.setState({
                emailError: "Enter the email"
              });
            }
            if (!this.state.password) {
              this.setState({
                passwordError: "Enter the password"
              });
             }
        }
    }

    // handelEmail=(e)=>{
    //     this.setState({email:e.target.value, })
    // }

    
    // handelPassword=(e)=>{
    //     this.setState({password:e.target.value})
    // }

    render() { 
        return ( 
            <div className="login-container">
                <div className="login-box">
                    <form >
                    {/* onSubmit={(e)=>{this.handelSubmit(e)}} */}
                        <h1>Login</h1>
                        <div className="input-box">
                            <fieldset>
                                <legend>Email</legend>  
                                <input type="text" placeholder="Enter your email" name="email" value={this.state.email} onChange={(e)=>{this.handelChange(e)}} required/>
                               
                            </fieldset>
                        </div>
                        <p className="danger">{!this.state.email ? this.state.emailError : ""}</p>
                        <div className="input-box">
                            <fieldset>
                                <legend>Password</legend>                                
                                <input type="password" placeholder="Enter your password" name="password" value={this.state.password} onChange={(e)=>{this.handelChange(e)}} required/>                               
                            </fieldset>
                        </div>
                        <p className="danger">{!this.state.password ? this.state.passwordError : ""}</p>

                        <div className="button">
                            <button type="submit" onClick={this.handelSubmit} disabled={!this.state.email && !this.state.password}>Login</button>
                        </div>
                        <p>New to website? <br/><a href="#">Register</a></p>
                    </form>              
                </div>
            </div>
          
         );
    }
}
 
export default Login;