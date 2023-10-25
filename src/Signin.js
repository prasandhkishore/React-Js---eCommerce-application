import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import './Signin.css';

class Signin extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div className="signin-container">
                <div className="signin-box">
                    <form>
                        <h1>Sign In</h1>
                        <div className="input-box">
                            <fieldset>
                                <legend>User Name</legend>  
                                <input type="text" placeholder="Enter your name" name="userName" required/>
                            </fieldset>
                        </div>
                        <div className="input-box">
                            <fieldset>
                                <legend>Email</legend>  
                                <input type="text" placeholder="Enter your email" name="email" required/>
                            </fieldset>
                        </div>
                        <div className="input-box">
                            <fieldset>
                                <legend>Password</legend>                                
                                <input type="password" placeholder="Enter your password" name="email" required/>                               
                            </fieldset>
                        </div>
                        

                        <div className="button">
                            <button type="submit">Sign In</button>
                        </div>
                        <p>Already have an account? <br/><Link to='Login-page'>Login here</Link></p>
                    </form>              
                </div>
            </div>
          
         );
    }
}
 
export default Signin;