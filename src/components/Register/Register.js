

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Register = () => {
    const element = <FontAwesomeIcon icon={faUserPlus} />

    return (
        <div>
            <br />

            <div className='bg-light rounded px-4 pb-4 container' required style={{ maxWidth: "450px" }}>
                <div className='p-2 text-center text-secondary' required style={{ fontSize: "80px" }}>
                    {element}
                    <h4 className='text-muted'>Please Register</h4>
                </div>
                <form>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control rounded-pill" placeholder="Email" aria-label="Full Name" aria-describedby="basic-addon1" required style={{ height: "50px" }} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="email" className="form-control rounded-pill" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required style={{ height: "50px" }} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control rounded-pill" placeholder="Password" aria-label="Email" aria-describedby="basic-addon1" required style={{ height: "50px" }} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="password" className="form-control rounded-pill" placeholder="Confirm Password" aria-label="Email" aria-describedby="basic-addon1" required style={{ height: "50px" }} />
                    </div>

                    <div className="mb-3">
                        <button className='btn btn-secondary p-2 text-white w-100 rounded-pill' type='submit'> REGISTER</button>
                    </div>
                    <div>
                        <span className='p-2 text-muted'>Allready have an account? Please login</span>
                    </div>
                </form>
            </div>
            <br />

        </div>
    );
};

export default Register;