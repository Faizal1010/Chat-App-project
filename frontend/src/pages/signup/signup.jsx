import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import './signup.css'
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
const SignUp = () => {
    const [inputs,setInputs]=useState({
        fullName:'',
        username :'',
        password:'',
        confirmPassword:'',
        gender:''
    })
    const {loading , signup}=useSignup()
    const handleCheckboxChange=(gender)=>{
        setInputs({...inputs,gender})
    }
    const handleSubmit=async (e)=>{
        e.preventDefault();
        // console.log(inputs);
        await signup(inputs)
    }
    return (
        <div className="container">
            <div className='signup-container'>
                <div className='background'>
                    <h1 className='signup-heading'>
                        Sign Up
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className='label'>
                                <span className='text-base label-text'>Full Name</span>
                            </label>
                            <input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' 
                                value={inputs.fullName}
                                onChange={(e)=>setInputs({...inputs,fullName:e.target.value})}
                            />
                        </div>

                        <div>
                            <label className='label'>
                                <span className='text-base label-text'>Username</span>
                            </label>
                            <input type='text' placeholder='johndoe' className='w-full input input-bordered h-10'
                            value={inputs.username }
                            onChange={(e)=>setInputs({...inputs,username:e.target.value})} />
                        </div>

                        <div>
                            <label className='label'>
                                <span className='text-base label-text'>Password</span>
                            </label>
                            <input
                                type='password'
                                placeholder='Enter Password'
                                className='w-full input input-bordered h-10'
                                value={inputs.password}
                                onChange={(e)=>setInputs({...inputs,password:e.target.value})}
                            />
                        </div>

                        <div>
                            <label className='label'>
                                <span className='text-base label-text'>Confirm Password</span>
                            </label>
                            <input
                                type='password'
                                placeholder='Confirm Password'
                                className='w-full input input-bordered h-10'
                                value={inputs.confirmPassword}
                                onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})}
                            />
                        </div>

                        <GenderCheckbox onCheckboxChange ={handleCheckboxChange} selectedGender={inputs.gender}/>

                        <Link to='/login' className='link'>
                            Already have an account?
                        </Link>

                        <div className="btn-container">
                            <button className='button'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default SignUp;