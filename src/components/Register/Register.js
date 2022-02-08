import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import useAuth from '../../utilities/useAuth';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Register = () => {

    const { error, password, confirmPassword, setUser, setIsLoading, passwordSignUp, gotEmail, gotPassword, gotConfirmPassword, setError, } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();
    const redirectUrl = location.state?.from || '/home';

    const signUpByPassword = (e) => {
        e.preventDefault()

        if (password < 100000) {
            return alert('Password must be 6 digit, please try again')
        } else if (password !== confirmPassword) {
            return alert('Password not mached, please try again')
        } else {
            passwordSignUp()
                .then((result) => {
                    const user = result.user;
                    setUser(user)
                    setError("")
                    navigate.push(redirectUrl)
                    console.log(user)
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
                })
                .finally(() => setIsLoading(false));
            e.target.reset();
        }
    }




    const element = <FontAwesomeIcon icon={faUserPlus} />

    return (
        <div>
            <br />

            <div className='bg-light rounded px-4 pb-4 container' required style={{ maxWidth: "450px" }}>
                <div className='p-2 text-center text-secondary' required style={{ fontSize: "80px" }}>
                    {element}
                    <h4 className='text-muted'>Please Register</h4>
                </div>


                <form onSubmit={signUpByPassword}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control rounded-pill" placeholder="Full Name" aria-label="Full Name" aria-describedby="basic-addon1" required style={{ height: "50px" }} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control rounded-pill" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required style={{ height: "50px" }} onBlur={gotEmail} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control rounded-pill" placeholder="Password" aria-label="Email" aria-describedby="basic-addon1" required style={{ height: "50px" }} onBlur={gotPassword} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control rounded-pill" placeholder="Confirm Password" aria-label="Email" aria-describedby="basic-addon1" required style={{ height: "50px" }} onChange={gotConfirmPassword} />
                    </div>

                    <div className="mb-3">
                        <button className='btn btn-secondary p-2 text-white w-100 rounded-pill' type='submit'> REGISTER</button>
                    </div>
                    <div>
                        <span className='p-2 text-muted'>Allready have an account? </span>
                        <NavLink to="/login" className='p-2 text-muted fw-bold'>Please login</NavLink>

                    </div>
                </form>
            </div>
            <br />

        </div>
    );
};

export default Register;