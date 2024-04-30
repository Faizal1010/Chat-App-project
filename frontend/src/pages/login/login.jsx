import { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
const Login = () => {
    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};
    return (
        <div className='container'>
            <div className='card'>
                <h1 className='title'>
                    Login
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label className='form-label'>
                            <span>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='form-input' value={username}
							onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>
                            <span>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='form-input'
                            value={password}
							onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to='/signup' className='link'>
                        {"Don't"} have an account?
                    </Link>

                    <div className='button-group'>
                        <button className='button'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;
