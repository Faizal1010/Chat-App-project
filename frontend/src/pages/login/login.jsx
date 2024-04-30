import './login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='container'>
            <div className='card'>
                <h1 className='title'>
                    Login
                </h1>

                <form>
                    <div className='form-group'>
                        <label className='form-label'>
                            <span>Username</span>
                        </label>
                        <input type='text' placeholder='Enter username' className='form-input' />
                    </div>

                    <div className='form-group'>
                        <label className='form-label'>
                            <span>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            className='form-input'
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
