import React, { Component } from 'react';



class Register extends Component
{



    render(){
        return(
            
            <div>
                <form>
                    <div class="form-group">
                        <label for="exampleInputUser">UserName</label>
                        <input type="text" class="form-control" id="exampleInputUser" aria-describedby="emailHelp"/>
    
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword2">Password Again</label>
                        <input type="password" class="form-control" id="exampleInputPassword"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
                    </div>

                    <button type="submit" class="btn btn-primary">Register</button>
                    <button type="reset"  class="btn btn-primary" value="Reset form">Reset</button>
                </form>




            </div>
        )
    }
}export default Register;