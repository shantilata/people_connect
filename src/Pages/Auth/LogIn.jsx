import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Log_In } from "../../Redux/AllSlice/AuthSlice";
import { NavLink, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import {
  Container,
  MainLogo,
  CustomForm,
  MainLogoURL,
} from "./commonComponents";

const LogIn = () => {
  let dispatch = useDispatch();
  const navigate = useNavigate();

  let { isLoading, username, password } = useSelector((state) => state.auth);
  console.log("data", isLoading, username, password);

  let [inputState, setInput] = useState({
    username: "",
    password: "",
  });
  const changeHandler = (event) => {
    event.persist();
    let { name, value } = event.target;
    setInput({ ...inputState, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(Log_In({ inputState, navigate }));
  };

  return (
    <Container>
      <CustomForm>
        <MainLogo src={MainLogoURL} />
        {/* <p>Welcome Back...</p> */}
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
          type="password"
          name="password"
          label="password"
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
        <Button type="submit" value="Login" variant="outlined" onClick={submitHandler}>
          Log In
        </Button>
      </CustomForm>
      <p>
        Don't have an account?{" "}
        <NavLink as="a" to="/registration">
          Create an Account
        </NavLink>
      </p>
    </Container>
  );
};

export default LogIn;
