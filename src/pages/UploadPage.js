import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/client";

import { UPLOAD_HUBFILE } from "../queries";

import Card from "../components/UI/Card/Card.component";
// import FilePicker from "../components/UI/FormInput/FilePicker.component";
import FormInput from "../components/UI/FormInput/FormInput.component";
import Button from "../components/UI/Button/Button.component";
import Error from "../components/Error/Error.component";
import classes from "../components/Auth/Signin.module.scss";
import { AuthContext } from "../context/auth-context";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import classInput from "../components/UI/FormInput/FormInput.module.scss";

const FileUpload = (props) => {
  const [enteredFile, setEnteredFile] = useState("");
  const [errors, setErrors] = useState([]);
  const authCtx = useContext(AuthContext);
  const creatorId = authCtx.user._id;

  const [uploadHubFile, { loading, error }] = useMutation(UPLOAD_HUBFILE);


  const fileHandlerChange = (event) => {
    setEnteredFile(event.target.files[0]);
    // console.log(event.target.files[0]);
  };

  const handleSubmit = async (event, uploadHubFile) => {
    event.preventDefault();
    console.log(enteredFile)
    uploadHubFile(
      {
        variables: {
          file: enteredFile,
          filetype: enteredFile.name.split(".").pop(),
          filesize: enteredFile.size,
          creatorId,
        },
      },
      console.log("Success!")
    );
    setEnteredFile('');
  };

  const validateForm = () => {
    const isValid = !enteredFile;
    return isValid;
  };

  if (loading) return <LoadingSpinner />;
  if (error) return setErrors(error);
  return (
    <Card className={classes.form__input}>
      <h2>Upload File</h2>
      <form
        onSubmit={(event) => handleSubmit(event, uploadHubFile)}
        className={classInput.form}
      >
        <label htmlFor="filepicker" className={classInput.filepicker}>
          FILE PICKER
          <FormInput
            type="file"
            id="filepicker"
            name="fileName"
            accept=".psd, .tif, .tiff, .png, .psb"
            handleChange={fileHandlerChange}
          />
        </label>
        <Button type="submit" disabled={loading || validateForm()}>
          Submit
        </Button>
        {errors && <Error error={errors} />}
      </form>
    </Card>
  );
};

export default FileUpload;
