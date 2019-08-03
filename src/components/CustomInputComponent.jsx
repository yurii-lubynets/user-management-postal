import React from 'react';
import { ErrorMessage } from 'formik';
import TextField from '@material-ui/core/TextField';

import '../App.css';


const CustomInputComponent = ({ field, ...props }) =>
  <div className="inputField">
    <TextField fullWidth {...field} {...props} />
    <ErrorMessage name={field.name} component="div" className="error"/>
  </div>

export default CustomInputComponent