import React from 'react';

// import classes from './Filepicker.module.scss';

const FilePicker = props =>
{
  const fileInputHandler = event =>
  {
    
  }
  return (
    <label
      htmlFor="image"
      className={classes.filepicker}
    >
      FILE PICKER
      <input
        type="file"
        id="image"
        name="fileName"
        accept=".psd, .tif, .tiff, .png"
        style={{ display: "none" }}
        onChange={fileInputHandler}
      />
    </label>
  );
}

export default FilePicker;
