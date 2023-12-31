import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import { Sign_Up } from "../../Redux/AllSlice/AuthSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container, MainLogo, CustomForm, MainLogoURL } from "./commonComponents";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EmailIcon from "@mui/icons-material/Email";
const Registration = () => {
    let dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading } = useSelector(state => state.auth)

    let [inputState, setInput] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    });

    const changeHandler = (event) => {
        event.persist();
        let { name, value } = event.target;
        setInput({ ...inputState, [name]: value })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(Sign_Up({inputState, navigate}));
    }



    return (
      <Container>
        <CustomForm>
          <MainLogo src={MainLogoURL} />
          <TextField
            type="text"
            name="name"
            label="Name"
            placeholder="Full Name"
            onChange={changeHandler}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            type="text"
            name="username"
            label="Username"
            placeholder="username"
            onChange={changeHandler}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            type="email"
            name="email"
            label="Email"
            placeholder="Email"
            onChange={changeHandler}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            onChange={changeHandler}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />
          <Button variant="outlined" type="submit" value="Register" onClick={submitHandler}>
            Register
          </Button>
        </CustomForm>
        <p>
          Have an account?{" "}
          <NavLink as="a" to="/log-in">
            Sign In
          </NavLink>
        </p>
      </Container>
    );
}

export default Registration
