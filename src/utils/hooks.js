import { useState } from "react";

export const useForm = (callback, initialState) => {
  const [values, setValues] = useState(initialState);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setValues({...values, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log('submit data ', values)
    callback();
  };

  return {
    changeHandler,
    submitHandler,
    values,
  };
};
