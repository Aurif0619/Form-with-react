import React, { useState } from 'react'

const Contact = () => {

    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const signInHandler = (e) => {
        e.preventDefault();
        console.log(userEmail, userPassword);

    }

    return (
        <form onSubmit={signInHandler}>
            <div className="mb-3">
                <h3 className='mt-3 fs-5 text-white'>Please Fill the form</h3>
                <label for="exampleInputEmail1" className="text-white ">Email address</label>
                <input type="email"
                style={{border:"3px solid"}} className="form-control m-auto w-25 border-danger" placeholder="abc@gmail.com" required
                    id="exampleInputEmail1" aria-describedby="emailHelp"
                    value={userEmail}
                    onChange={(e) => {
                        setUserEmail(e.target.value);

                    }} />

                    <span className='text-danger'> Enter your email</span>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label  text-white">Password</label>
                <input type="password"
                style={{border:"3px solid red"}} className="form-control w-25 m-auto justify-content-center border-danger" id="exampleInputPassword1"required
                    value={userPassword}
                    onChange={(e) => {
                        setUserPassword(e.target.value);

                    }}
                />
                <span className='text-danger'>Enter your password</span>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
    )
}

export default Contact