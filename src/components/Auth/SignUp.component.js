import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { AuthContext } from "../../context/auth-context";
import { useForm } from "../../utils/hooks";
import Card from "../UI/Card/Card.component";
import Button from "../UI/Button/Button.component";
import FormInput from "../UI/FormInput/FormInput.component";
import Error from "../Error/Error.component";

import { CREATE_USER } from "../../queries/index";

import classes from "./Signin.module.scss";

const SignUp = (props) => {
  const [errors, setErrors] = useState([]);
  const authCtx = useContext(AuthContext);
  let history = useHistory();

  const createUserCallback = (props) => {
    createUser();
  };

  const { changeHandler, submitHandler, values } = useForm(createUserCallback, {
    name: "",
    email: "",
    password: "",
  });

  const [createUser, { loading }] = useMutation(CREATE_USER, {
    variables: {
      name: values.name,
      email: values.email,
      password: values.password,
    },
    update(client, { data: { createUser: userData } }) {
      authCtx.login(userData);
      history.push("/");
    },
    onError({ graphQLErrors }) {
      setErrors(graphQLErrors);
    },
  });

  const validateForm = () => {
    const { name, email, password } = values;
    const isInValid = !name || !email || !password;
    return isInValid;
  };

  return (
    <Card className={classes.form__input}>
      <h2>Sign-Up</h2>
      <form onSubmit={submitHandler}>
        <FormInput
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={changeHandler}
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
        />
        <Button style={{width: '100%'}} type="submit" disabled={loading || validateForm()}>
          sign up
        </Button>
        {errors && <Error error={errors} />}
      </form>
    </Card>
  );
};

export default SignUp;
