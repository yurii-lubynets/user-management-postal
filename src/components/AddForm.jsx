import React, { Component } from 'react';
import { inject } from 'mobx-react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import CustomInputComponent from './CustomInputComponent';

import '../App.css';


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  companyName: Yup.string().required('Required'),
  phone: Yup.number().positive().integer().min(0, "Invalid.").required('Required'),
});


@inject("userStore")
class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  _addValue = () => this.props.userStore.addUser(this.state.inputValue)

  render() {
    return (
    <div className="addForm">
      <Formik
        initialValues={{ name: '', companyName: '', phone: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {this.props.userStore.addUser(values); resetForm();}}
      >
        <Paper elevation={10}>
          <Form>
            <div className="form-container">
              <Field name="name" label="Name" placeholder="Name" component={CustomInputComponent} className="field"/>
              <Field name="companyName" label="Company Name" placeholder="Company Name" component={CustomInputComponent} className="field"/>
              <Field type="number" name="phone" label="Phone Number" placeholder="Phone Number" component={CustomInputComponent} className="field"/>
              <Button
                type="submit"
                variant="contained"
                color="primary">
                Submit
            </Button>
            </div>
          </Form>
          </Paper>
      </Formik>
    </div>
    );
  }
}

export default AddForm;
