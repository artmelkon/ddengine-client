import React from 'react';

import classes from './Handle.module.scss';

const Handle = (props) =>
{
  return (
    // <img className={classes.handle} src="../../assets/icons/png/070-psd.png" />

    <img className={classes.handle} src={props.imgSource} alt="img" />
  );
}

export default Handle;


