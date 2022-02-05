
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import useAuth from '../../utilities/useAuth';

const Login = () => {

    const { gotEmail } = useAuth();
    console.log(gotEmail)

    const element = <FontAwesomeIcon icon={faSignInAlt} />

    return (
        <div>
            <br />
            <div className='bg-light rounded px-4 pb-4 container' required style={{ maxWidth: "450px" }}>
                <div className='p-2 text-center text-secondary' required style={{ fontSize: "80px" }}>
                    {element}
                    <h4 className='text-muted'>Please Login</h4>
                </div>
                <form>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control rounded-pill" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required style={{ height: "50px" }} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control rounded-pill" placeholder="Password" aria-label="Email" aria-describedby="basic-addon1" required style={{ height: "50px" }} />
                    </div>

                    <div className="mb-3">
                        <button className='btn btn-secondary p-2 text-white w-100 rounded-pill' type='submit'> LOGIN</button>
                    </div>
                    <div>
                        <span className='p-2 text-muted'>Create account</span>
                        <span className='p-2 text-muted'>Forget Password</span>
                    </div>
                </form>
            </div>
            <br />

        </div>
    );
};

export default Login;