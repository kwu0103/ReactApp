import React, { Component } from 'react';

class LoginForm extends Component
{


    render(){
        return(
            
            <div>
                 <form id="myForm" >
                    <div class="form-group">
                        <label for="exampleInputUser">User</label>
                        <input type="email" class="form-control" id="exampleInputUser" aria-describedby="emailHelp"/>
    
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                   
                    <button type="submit" class="btn btn-primary">Login</button>
                <button type="reset"  class="btn btn-primary" value="Reset form">Reset</button>
                </form>
                
                


            </div>
        )
    }
}export default LoginForm;