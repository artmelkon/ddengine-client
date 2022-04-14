import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { useForm } from "../../utils/hooks";
import { AuthContext } from "../../store/auth-context";
import Card from "../UI/Card/Card.component";
import FormInput from "../UI/FormInput/FormInput.component";
import Button from "../UI/Button/Button.component";
import Error from "../Error/Error.component";

import { LOGIN_USER } from "../../queries/index";

import classes from "./Signin.module.scss";

const SignIn = (props) => {
  const [errors, setErrors] = useState([]);
  const authCtx = useContext(AuthContext);
  let history = useHistory();

  const loginUserCallback = () => {
    loginUser().then(res => console.log('signin token ', res))
  }

  const {changeHandler, submitHandler, values} = useForm(loginUserCallback, {
    email: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    variables: {
      email: values.email,
      password: values.password
    },
    update(client, {data: {loginUser: userData}}) {
      authCtx.login(userData);
      history.push('/')
    },
    onError({graphQLErrors}) {
      setErrors(graphQLErrors)
      console.log('onError ', errors)
    }
  });

  const validateForm = () => {
    const { email, password } = values;
    const isInValid = !email || !password;
    return isInValid;
  };

  return (
    <Card className={classes.form__input}>
        <h2 className="py-5">Sign in with your GP Color account</h2>
        <form onSubmit={submitHandler}>
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
          <Button
            style={{width: '100%'}}
            type="submit"
            disabled={loading || validateForm()}
          >
            sign in
          </Button>

          {/* <Button onClick={signInWithGoogle} isGoogleSignedIn>
              Google Sign In
            </Button> */}
          {errors.map(err => <Error key={err} error={err.message} />)}
        </form>
    </Card>
  );
};

export default SignIn;
