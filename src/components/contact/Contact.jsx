import React, { useState } from 'react';

const Contact = () => {
    const [userDetails, setUserDetail] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [userEmailErr, setUserEmailErr] = useState(false);
    const [userPasswordErr, setUserPasswordErr] = useState(false);
    const [userFirstNameErr, setUserFirstNameErr] = useState(false);
    const [userLastNameErr, setUserLastNameErr] = useState(false);
    const [userConfirmPasswordErr, setUserConfirmPasswordErr] = useState(false);

    const signInHandler = (e) => {
        e.preventDefault();

        setUserFirstNameErr(userDetails.firstName === "");
        setUserLastNameErr(userDetails.lastName === "");
        setUserEmailErr(userDetails.email === "");
        setUserPasswordErr(userDetails.password === "");
        setUserConfirmPasswordErr(userDetails.confirmPassword === "");

        console.log(userDetails);
    };

    return (
        <form onSubmit={signInHandler}>
            <div className="mb-3">
                <h3 className='mt-3 fs-5 text-white'>Please Fill the form</h3>
                <label htmlFor="firstName" className="text-white mb-2">First Name</label>
                <input
                    type="text"
                    className={`form-control m-auto w-25 ${userFirstNameErr ? 'border border-danger' : ''}`}
                    id="firstName"
                    value={userDetails.firstName}
                    onChange={(e) => setUserDetail({ ...userDetails, firstName: e.target.value })}
                />
                {userFirstNameErr && <span className='text-danger mt-4'>Enter your First Name</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="lastName" className="text-white mb-2">Last Name</label>
                <input
                    type="text"
                    className={`form-control m-auto w-25 ${userLastNameErr ? 'border border-danger' : ''}`}
                    id="lastName"
                    value={userDetails.lastName}
                    onChange={(e) => setUserDetail({ ...userDetails, lastName: e.target.value })}
                />
                {userLastNameErr && <span className='text-danger mt-4'>Enter your Last Name</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="text-white mb-2">Email address</label>
                <input
                    type="email"
                    className={`form-control m-auto w-25 ${userEmailErr ? 'border border-danger' : ''}`}
                    id="exampleInputEmail1"
                    placeholder="abc@gmail.com"
                    value={userDetails.email}
                    onChange={(e) => setUserDetail({ ...userDetails, email: e.target.value })}
                />
                {userEmailErr && <span className='text-danger mt-4'>Enter your email</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                <input
                    type="password"
                    className={`form-control w-25 m-auto justify-content-center ${userPasswordErr ? 'border border-danger' : ''}`}
                    id="exampleInputPassword1"
                    value={userDetails.password}
                    onChange={(e) => setUserDetail({ ...userDetails, password: e.target.value })}
                />
                {userPasswordErr && <span className='text-danger mt-4'>Enter your Password</span>}
            </div>

            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label text-white">Confirm Password</label>
                <input
                    type="password"
                    className={`form-control w-25 m-auto justify-content-center ${userConfirmPasswordErr ? 'border border-danger' : ''}`}
                    id="confirmPassword"
                    value={userDetails.confirmPassword}
                    onChange={(e) => setUserDetail({ ...userDetails, confirmPassword: e.target.value })}
                />
                {userConfirmPasswordErr && <span className='text-danger mt-4'>Confirm your Password</span>}
            </div>

            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
    );
};

export default Contact;
