import axios from 'axios'
const USER_API_BASE_URL='http://localhost:8002/api/v1/patients'
class UserService
{
    getUser()
    {
        return axios.get(USER_API_BASE_URL)
    }
    createUser(user)
    {
        return axios.post(USER_API_BASE_URL,user)
    }
}
export default new UserService