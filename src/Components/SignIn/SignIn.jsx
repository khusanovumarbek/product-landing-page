import { TextField } from '@mui/material';
import './SignIn.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import syop from "../../img/yopish.png";


const SignIn = () => {
const [IsShowpas, setIsShowpas] = useState(false);
  const [email, setEmail] = useState("");
  const [createPass, setCreatePass] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate()

  const handleCreatePassChange = (event) => {
    const value = event.target.value;
    setCreatePass(value);

  };


  const closeSignIn = () => {
    const Signuppage = document.getElementById("SignInpage");
    const signp = document.getElementById("sigin");
    Signuppage.style.scale = "0";
    signp.style.scale = "0";
  };

  const handleSignIn = () => {
    setIsSubmitted(true);

    if (email === "" || createPass === "") {
      alert("Please fill all fields!");
      return;
    }
      alert("You have successfully signed up!");
      navigate('/')

  };

  return (
    <div className="SignInBack" id="SignInpage">
      <div className="SignIn" id="signp">
        <img onClick={closeSignIn} src={syop} alt="" className="syop" />
        <h1>Sign In</h1>
        <TextField
          id="email-phone-input"
          label="Name or Email"
          type="text"
          autoComplete="off"
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={email === "" && isSubmitted}
          helperText={email === "" && isSubmitted ? "Please enter account Name or Email" : ""}
        />
        <TextField
          id="create-password-input"
          label="Password"
          type={IsShowpas ? "text" : "password"}
          autoComplete="off"
          variant="filled"
          value={createPass}
          onChange={handleCreatePassChange}
          error={(createPass === "" && isSubmitted)}
          helperText={
            (createPass === "" && isSubmitted) ? "Please enter a password" :''
          }
        />
        <div className="chekked">
          <input
            type="checkbox"
            onClick={() => setIsShowpas(!IsShowpas)}id="checkk"
            />
            <label htmlFor="checkk">Show password</label>
          </div>
          <button className="signinbtn" onClick={handleSignIn}>
            Sign In
          </button>
          <Link>Forgot password</Link>
        </div>
      </div>
    );
}

export default SignIn
