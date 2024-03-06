import React, { useContext } from 'react'
import Input from '../components/UI/input/Input'
import Button from '../components/UI/button/Button'
import { AuthContext } from '../context';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();

    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')

        navigate("/posts");
    }
  
    return (
    <div>
        <h1>Login</h1>
        <form onSubmit={login}>
            <Input type='text' placeholder='Input login'/>
            <Input type='password' placeholder='Input password'/>
            <Button>Sign in</Button>
        </form>
    </div>
  )
}

export default Login