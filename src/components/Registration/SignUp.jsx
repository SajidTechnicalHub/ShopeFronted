import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const SignUp = () => {
    const [user, setInput] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    });
    let navigate = useNavigate()
    const InputEvent = (e) => {
        const { name, value } = e.target;
        setInput(() => {
            return { ...user, [name]: value }
        })
    }
    const SubmitEvent = (e) => {
        e.preventDefault()
        // alert(`Your Email: ${user.email} and Password is: ${user.password} `)

        axios.post("http://localhost:3000/users", {user})
        
        .then(function (response){
          console.log(response);
         
          
        })
        .catch( function (error){
          console.log(error);
        })

        // setInput({
        //     username:'',
        //     email: '',
        //     password: '',
        //     confirm_password:''
        // })
        navigate('/')
    }

    return (
        <>
            <section className="vh-100" >
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" >
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4" onSubmit={SubmitEvent}>

                                                <div className="mb-4">
                                                    <label htmlFor="Inputusername" className="form-label">User Name<span className='estaric'>*</span></label>
                                                    <input type="text"
                                                        name="username"
                                                        value={user.username}
                                                        onChange={InputEvent}
                                                        className="form-control"
                                                        required="required"
                                                        placeholder='Username '
                                                    />

                                                </div>

                                                <div className="mb-4">
                                                    <label htmlFor="Inputemail" className="form-label">Email<span className='estaric'>*</span></label>
                                                    <input type="text"
                                                        name="email"
                                                        value={user.email}
                                                        onChange={InputEvent}
                                                        className="form-control"
                                                        required="required"
                                                        placeholder='Email '
                                                    />

                                                </div>

                                                <div className="mb-4">
                                                    <label htmlFor="Inputpassword" className="form-label">Password<span className='estaric'>*</span></label>
                                                    <input type="password"
                                                        name="password"
                                                        value={user.password}
                                                        onChange={InputEvent}
                                                        className="form-control"
                                                        required="required"
                                                        placeholder='password '
                                                    />

                                                </div>

                                                <div className="mb-4">
                                                    <label htmlFor="Inputconfirm_password" className="form-label">Confirm Password<span className='estaric'>*</span></label>
                                                    <input type="password"
                                                        name="confirm_password"
                                                        value={user.confirm_password}
                                                        onChange={InputEvent}
                                                        className="form-control"
                                                        required="required"
                                                        placeholder='Confirm Password '
                                                    />

                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                    <label className="form-check-label" for="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>

                                                <div className=" mb-3">
                                                    <button type="submit" className="btn btn-primary ">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp