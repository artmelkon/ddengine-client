import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import {Card, Form, Button} from 'react-bootstrap';

import { UPLOAD_HUBFILE } from "../../queries";

// import Card from "./Card/Card.component";
// import FilePicker from "../components/UI/FormInput/FilePicker.component";
// import FormInput from "./FormInput/FormInput.component";
// import Button from "./Button/Button.component";
import Error from "../Error/Error.component";
import { AuthContext } from "../../store/auth-context";
import LoadingSpinner from "./LoadingSpinner";

const Upload = (props) => {
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
    // event.preventDefault();
    console.log("fiel to uploaded size", enteredFile.size);
    console.log("current userId", creatorId);
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
    setEnteredFile("");
    return;
  };

  const validateForm = () => {
    const isValid = !enteredFile;
    return isValid;
  };

  if (loading) return <LoadingSpinner />;
  if (error) return setErrors(error);
  return (
    <Card className="mt-3 w-50 m-auto shadow-sm bg-body rounded-3 text-center">
      <Card.Body>
        <Card.Title>Upload File</Card.Title>

          <Form onSubmit={(event) => handleSubmit(event, uploadHubFile)}>
            <label htmlFor="filepicker">
              FILE PICKER
              <Form.Control
                type="file"
                id="filepicker"
                name="fileName"
                accept=".psd, .tif, .tiff, .png, .psb"
                onChange={fileHandlerChange}
              />
            </label>
            <Button
              className="d-block mt-3 m-auto"
              type="submit"
              disabled={loading || validateForm()}
            >
              Submit
            </Button>
            {errors && <Error error={errors} />}
          </Form>
      </Card.Body>
    </Card>
  );
};

export default Upload;
