import React, {Component} from 'react';
import { useState } from 'react';
import './Login.css';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email: null,
            password: null,
        }

        
    }

    // handelChange=(e)=>{
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // }

    // handelSubmit=(e)=>{
    //     if(e.match("")){
    //         setError(true)
    //     }else{
    //         setError(false)
    //     }

    // }

    handelEmail=(e)=>{
        this.setState({email:e.target.value})
    }

    handelPassword=(e)=>{
        this.setState({password:e.target.value})
    }

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
                                <input type="text" placeholder="Enter your email" name="email" value={this.state.email} onChange={(e)=>{this.handelEmail(e)}} required/>{this.state.email}
                               
                            </fieldset>
                        </div>
                        <div className="input-box">
                            <fieldset>
                                <legend>Password</legend>                                
                                <input type="password" placeholder="Enter your password" name="password" value={this.state.password} onChange={(e)=>{this.handelPassword(e)}} required/>                               
                            </fieldset>
                        </div>
                        

                        <div className="button">
                            <button type="submit">Login</button>
                        </div>
                        <p>New to website? <br/><a href="#">Register</a></p>
                    </form>              
                </div>
            </div>
          
         );
    }
}
 
export default Login;