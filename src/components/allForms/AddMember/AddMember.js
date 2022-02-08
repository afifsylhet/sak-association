import React, { useRef } from 'react';
import useAuth from '../../../utilities/useAuth';

const AddMember = () => {
    const { error } = useAuth();

    const nameRef = useRef("");
    const shareNumberRef = useRef("");
    const shareQuantityRef = useRef("");
    const phoneRef = useRef("");
    const emailRef = useRef("");
    const imageRef = useRef("");
    const roleRef = useRef("");
    const employerRef = useRef("");
    const nationalIdRef = useRef("");
    const nomineeRef = useRef("");
    const addressRef = useRef("")


    const handleAddMember = e => {
        e.preventDefault();

        const name = nameRef.current.value;
        const shareNumber = shareNumberRef.current.value;
        const shareQuantity = shareQuantityRef.current.value;
        const phone = phoneRef.current.value;
        const email = emailRef.current.value;
        const image = imageRef.current.value;
        const role = roleRef.current.value;
        const employer = employerRef.current.value;
        const nationalId = nationalIdRef.current.value;
        const nominee = nomineeRef.current.value;
        const address = addressRef.current.value;

        const newMember = {
            name: name,
            shareNumber: shareNumber,
            shareQuantity: shareQuantity,
            phone: phone,
            email: email,
            image: image,
            role: role,
            employer: employer,
            nationalId: nationalId,
            nominee: nominee,
            address: address
        }

        console.log(newMember)

        if (!error) {
            fetch('http://localhost:5001/members', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newMember)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log(data)
                        alert(" Congratulations!!! user added successfully and data saved to database.")
                    }
                })
        }

        e.target.reset();
    }


    return (
        <div>
            <div>
                <br />
                <h3 className='text-primary text-center pb-2 border-bottom container'>Add a New <span className='text-secondary' >Member</span> </h3>
                <br />

                <form className='container text-center p-5 rounded bg-light' onSubmit={handleAddMember}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control rounded-pill" placeholder="Name" aria-label="Email" aria-describedby="basic-addon1" required ref={nameRef} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="number" className="form-control rounded-pill" placeholder="Share Number" aria-label="Email" aria-describedby="basic-addon1" required ref={shareNumberRef} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="number" className="form-control rounded-pill" placeholder="Share Quantity" aria-label="Email" aria-describedby="basic-addon1" required ref={shareQuantityRef} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="number" className="form-control rounded-pill" placeholder="Cell Phone" aria-label="Email" aria-describedby="basic-addon1" required ref={phoneRef} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="email" className="form-control rounded-pill" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" required ref={emailRef} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control rounded-pill" placeholder="Image url" aria-label="Email" aria-describedby="basic-addon1" required ref={imageRef} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control rounded-pill" placeholder="Role" aria-label="Email" aria-describedby="basic-addon1" required ref={roleRef} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control rounded-pill" placeholder="Employer" aria-label="Email" aria-describedby="basic-addon1" required ref={employerRef} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control rounded-pill" placeholder="National ID" aria-label="Email" aria-describedby="basic-addon1" required ref={nationalIdRef} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control rounded-pill" placeholder="Nominee" aria-label="Email" aria-describedby="basic-addon1" required ref={nomineeRef} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control rounded-pill" placeholder="Address" aria-label="Email" aria-describedby="basic-addon1" required ref={addressRef} />
                    </div>
                    <br />
                    <button type='submit' className='btn btn-outline-secondary w-100 p-2 rounded-pill'>Submit</button>
                </form>

                <br />
            </div>

        </div>
    );
};

export default AddMember;