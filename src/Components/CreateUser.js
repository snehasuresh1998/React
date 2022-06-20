import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import UserService from '../Service/UserService';

class CreateUser extends Component
{
    constructor (props)
    {
        super(props)
        this.state={
            firstName:'',
            lastName:'',
            emailId:''
           
        }
        this.chageLastNameHandler=this.chageLastNameHandler.bind(this);
        this.chageFirstNameHandler=this.chageFirstNameHandler.bind(this);
        this.chageEmailHandler=this.chageEmailHandler.bind(this);
        this.saveUser=this.saveUser.bind(this);
    }
    chageFirstNameHandler=(event)=>
    {
this.setState({firstName:event.target.value});
    }
    chageLastNameHandler=(event)=>
    {
this.setState({lastName:event.target.value});
    }
    chageEmailHandler=(event)=>
    {
this.setState({emailId:event.target.value});
    }
    saveUser=(e)=>
        {
            e.preventDefault();
            let user={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId};
            console.log("user =>"+JSON.stringify(user));
            UserService.createUser(user).then(res=>
                {
                    this.props.history.push('/patients')
                })
        }
    cancel()
    {
        this.props.history.push('/patients')
    }
    render()
    {
        return(
          
            <div>
               <div className="container" style={{position:"absolute"}}>
                <br></br>
                <div className="row">
                    <div className="card cl-md-6 offset-md-3 offset-md-3">
                        <br></br>
                        <h3 className='text-center'>Add User</h3>
                        <div className='card-body'>
                            <form>
                                <div className='form-group'>
                                    <label> First Name</label>
                                    <input placeholder='First Name' name='firstName' className='form-control' 
                                    value={this.state.firstName}onChange={this.chageFirstNameHandler}/>
                                </div>
                                <div className='form-group'>
                                    <label> Last Name</label>
                                    <input placeholder='Last Name' name='lastName' className='form-control' 
                                    value={this.state.lastName} onChange={this.chageLastNameHandler}/>
                                </div>
                                <div className='form-group'>
                                    <label> Email </label>
                                    <input placeholder='Email' name='email' className='form-control' 
                                    value={this.state.emailId} onChange={this.chageEmailHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={this.saveUser}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:'10px'}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
               </div>
            </div>
        )
    }
}
export default CreateUser

