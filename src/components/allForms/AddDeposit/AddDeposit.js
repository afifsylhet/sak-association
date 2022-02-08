import React, { useRef } from 'react';

const AddDeposit = () => {


    const nameRef = useRef("");
    const collectionRef = useRef("");
    const targetRef = useRef("");

    const handleDeposit = e => {
        e.preventDefault();

        const name = nameRef.current.value;
        const collection = collectionRef.current.value;
        const target = targetRef.current.value;


        const newDeposit = {
            name: name,
            collection: collection,
            target: target,
        }
        console.log(newDeposit)

        if (newDeposit) {
            fetch('http://localhost:5001/deposit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newDeposit)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        console.log(data)
                        alert(" Congratulations!!! deposit added successfully and data saved to database.")
                    }
                })
        }

        e.target.reset();
    }


    return (
        <div>

            <div>
                <br />
                <h3 className='text-primary text-center pb-2 border-bottom container'>Add a New <span className='text-secondary' >Monthly Collection</span> </h3>
                <br />
            </div>

            <div>
                <form className='container text-center p-5 rounded bg-light' onSubmit={handleDeposit}>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control rounded-pill" placeholder="Name of Month (Example: Jan-21)" aria-label="Email" aria-describedby="basic-addon1" required ref={nameRef} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="number" className="form-control rounded-pill" placeholder="Monthly Collection" aria-label="Email" aria-describedby="basic-addon1" required ref={collectionRef} />
                    </div>

                    <div className="input-group mb-3">
                        <input type="number" className="form-control rounded-pill" placeholder="Monthly Target" aria-label="Email" aria-describedby="basic-addon1" required ref={targetRef} />
                    </div>
                    <br />
                    <button type='submit' className='btn btn-outline-secondary w-100 p-2 rounded-pill'>Submit</button>
                </form>
                <br />
            </div>



        </div>
    );
};

export default AddDeposit;