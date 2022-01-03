import { useState, useContext } from 'react'
import './Login.css'
import UserContext from '../../Context/userContext'
import { useNavigate } from 'react-router-dom'



const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userphone, setUserphone] = useState('')
    const [useraddress, setUseraddress] = useState('')
    const [usermail, setUsermail] = useState('')
    const {login} = useContext(UserContext)
    const navigate = useNavigate()
    
    const handleLogin = (event) => {
        event.preventDefault()

        const objUser = {
            username,
            password,
            userphone,
            useraddress,
            usermail
        }

        login(objUser)
        navigate('/')
    }

    return (
        <div className='LoginContainer'>
          <h3>Log In</h3>
          <form onSubmit={handleLogin} className='LoginForm'>
            <label className='LabelLogin'>
                Usuario
              <input
                className='InputLogin'
                type='text'
                value={username}
                required
                onChange={({ target }) => setUsername(target.value)}
              />
            </label>
            <label className='LabelLogin'>
                Contraseña
              <input
                className='InputLogin'
                type='password'
                value={password}
                required
                onChange={({ target }) => setPassword(target.value)}
              />
            </label>
            <label className='LabelLogin'>
                Telefono
              <input
                className='InputLogin'
                type='tel'
                value={userphone}
                required
                onChange={({ target }) => setUserphone(target.value)}
              />
            </label>
            <label className='LabelLogin'>
                Direccion
              <input
                className='InputLogin'
                type='text'
                value={useraddress}
                required
                onChange={({ target }) => setUseraddress(target.value)}
              />
            </label>
            <label className='LabelLogin'>
                Mail
              <input
                className='InputLogin'
                type='email'
                value={usermail}
                required
                onChange={({ target }) => setUsermail(target.value)}
              />
            </label>
            <div className='LabelLogin'>
                <button type='submit' className='Button'>Registrar</button>
            </div>
          </form>
        </div>
      )
}

export default Login