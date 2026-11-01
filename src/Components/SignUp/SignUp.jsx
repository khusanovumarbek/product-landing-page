import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";
import { TextField } from "@mui/material";
import syop from "../../img/yopish.png";

function SignUp() {
  const [IsShowpas, setIsShowpas] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [createPass, setCreatePass] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate()

  const handleCreatePassChange = (event) => {
    const value = event.target.value;
    setCreatePass(value);

    if (repeatPass && value !== repeatPass) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleRepeatPassChange = (event) => {
    const value = event.target.value;
    setRepeatPass(value);

    if (createPass && value !== createPass) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const closeSignUp = () => {
    const Signuppage = document.getElementById("Signuppage");
    const signp = document.getElementById("signp");
    Signuppage.style.scale = "0";
    signp.style.scale = "0";
  };

  const handleSignUp = () => {
    setIsSubmitted(true);

    if (name === "" || email === "" || createPass === "" || repeatPass === "") {
      alert("Please fill all fields!");
      return;
    }

    if (passwordError) {
      alert("Passwords do not match!");
      return;
    }

      alert("You have successfully signed up!");
      navigate('/')

  };

  return (
    <div className="SignupBack" id="Signuppage">
      <div className="SignUp" id="signp">
        <img onClick={closeSignUp} src={syop} alt="" className="syop" />
        <h1>Sign Up</h1>
        <TextField
          id="name-input"
          label="Name"
          type="text"
          autoComplete="off"
          variant="filled"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={name === "" && isSubmitted}
          helperText={name === "" && isSubmitted ? "Please enter your name" : ""}
        />
        <TextField
          id="email-phone-input"
          label="Email or Phone Number"
          type="text"
          autoComplete="off"
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={email === "" && isSubmitted}
          helperText={email === "" && isSubmitted ? "Please enter your email or phone number" : ""}
        />
        <TextField
          id="create-password-input"
          label="Create Password"
          type={IsShowpas ? "text" : "password"}
          autoComplete="off"
          variant="filled"
          value={createPass}
          onChange={handleCreatePassChange}
          error={(createPass === "" && isSubmitted) || passwordError}
          helperText={
            (createPass === "" && isSubmitted) ? "Please enter a password" :
            passwordError ? "Passwords don't match!" : ""
          }
        />
        <TextField
          id="repeat-password-input"
          label="Repeat Password"
          type={IsShowpas ? "text" : "password"}
          autoComplete="off"
          variant="filled"
          value={repeatPass}
          onChange={handleRepeatPassChange}
          error={(repeatPass === "" && isSubmitted) || passwordError}
          helperText={
            (repeatPass === "" && isSubmitted) ? "Please repeat your password" :
            passwordError ? "Passwords don't match!" : ""
          }
        />
        <div className="chekked">
          <input
            type="checkbox"
            onClick={() => setIsShowpas(!IsShowpas)}id="checkk"
            />
            <label htmlFor="checkk">Show password</label>
          </div>
          <button className="signupbtn" onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    );
  }
  
  export default SignUp;