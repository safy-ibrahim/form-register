import React, { useState } from 'react' // for state 

export default function Register() {
// any thing is change put it in state
// every input read his value from state so we need to connect input with state 
    const [user, setUser] = useState({ //distruct user&setUsr from useState
        name: "",
        email: "",
        userName: "",
        password: "",
        confirmpassword: "",
    })
// contain the message error
    const [error, setError] = useState({
        nameErr: "",
        emailErr: "",
        usernameErr: " ",
        passErr: "",
        confirmpassErr: "",
    })
// this functions is call when the user change the value in input
    function updateForm(event) {
        // const emailRegx = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/
        const emailRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;
       // event.target help me to accesse the element(input)mack the event do
   
        setUser({ ...user, [event.target.name]: event.target.value })
        switch (event.target.name) {
            //trenary operator
            case "name": setError({ ...error, nameErr: (event.target.value.length === 0) ? "name is required " : ""  })
                break;
            case "email": setError({ ...error, emailErr: (emailRegx.test(event.target.value) )? " " : "please enter valid email" })
                break;
            case "password":
                setError({ ...error, passErr: passReg.test(event.target.value) ? "" : "please enter valid password" })
                break;
            case "confirmpassword":
                setError({ ...error, confirmpassErr: (user.password === event.target.value) ? "" : " invalid confirm password" })
                break;
            default: break;
        }

    }
  function handleSubmit(e){
     e.preventDefault();
   
  }

    return (
        <form onSubmit={(e)=>{handleSubmit(e)}} className='container col-6 text-start'>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="text" className="form-control" placeholder="Enter your name"
                    name="name" // help me to catch the input 
                    value={user.name} // make input read the valu from state 
                    // the input initial value="" so the input read and not write so we should handle event onchange
                    //to change the state value
                    onChange={(e) => { updateForm(e) }} />   
                    {/*دا المكان الي بعرض الايرور بتاعي ف حالة وجوده */}
                <p className="text-danger">{error.nameErr}</p>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input type="email" className="form-control" placeholder="email" name="email"
                    value={user.email}
                    onChange={(e) => { updateForm(e) }} />
            </div>
            <p className='text-danger'>{error.emailErr}</p>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">User Name</label>
                <input type="text" className="form-control" placeholder="user name" name="userName"
                    value={user.userName}
                    onChange={(e) => { updateForm(e) }} />
            </div>
            <div className="form-group mt-2">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" placeholder="Password" name="password"
                    value={user.password}
                    onChange={(e) => { updateForm(e) }} />
            </div>
            <p className="text-danger">{error.passErr}</p>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Confirme Password</label>
                <input type="password" className="form-control" placeholder="confirmePassword" name='confirmpassword'
                    value={user.confirmpassword}
                    onChange={(e) => { updateForm(e) }} />
            </div>

            <div className="form-group mt-2">
                <label for="exampleInputPassword1">Upload image</label>
                <input type="file" className="form-control" placeholder="confirmePassword" name='file'/>
                    
            </div>
            <p  className="text-danger">{error.confirmpassErr}</p>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}