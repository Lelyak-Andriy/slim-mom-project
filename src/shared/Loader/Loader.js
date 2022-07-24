import Loader from 'react-loader-spinner';
import React from 'react';
import classes from './Loader.module.css';

const Loaders=()=>{
    return (
      <Loader
        type="Grid"
        color="green"
        height={100}
        width={100}
        timeout={3000}
        className={classes.loader}
      />
    );
}
export default(Loaders)