import React,{Component} from 'react'
import UserService from '../Service/UserService'
class ListUser extends Component
{
    constructor (props)
    {
        super(props)
        this.state={
            user:[],
            // users: String
        }
        this.addUser=this.addUser.bind(this);
    }
    componentDidMount()
    {
        UserService.getUser().then((res)=>
        {
            this.setState({user:res.data})
        });
    }
    addUser()
    {
        this.props.history.push('/add-user')
    }
    render()
    {
        return(
          
            <div>
                  <h2 className="text-center">User List</h2>
                  <div className="row">
                    <br></br>
                    <button className='btn-btn-priary' onClick={this.addUser}>Add User</button>

                  </div>
                  <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name </th>
                                <th>Last Name </th>
                                <th>Email Id</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            this.state.user.map(
                               users =>
                                <tr key={users.id}>
                                <td> {users.firstName}</td>
                                <td> {users.lastName}</td>
                                <td> {users.emailId}</td>
                                </tr>
                            )
    }
                        </tbody>

                    </table>
                  </div>

            </div>
        )
    }
}
export default ListUser