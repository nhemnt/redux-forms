import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class ReduxForm extends Component {
  renderInput({ input, label }) {
    return (
      <div className="label">
        <label>{label}</label>
        <input {...input} />
      </div>
    )
  }
  onSubmit(propsValues) { 
    console.log(propsValues)
  }
  
  render() {
    // console.log(this.props)
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" component={this.renderInput} label="Enter title"/>
          <Field name="description" component={this.renderInput} label="Enter Description" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const vaildate = (formValues) => {
  const error = {}
  if (!formValues.title) { 
    error.title= "You must enter a title"
  }
  if (!formValues.description) { 
    error.description = "You must enter a description"
  }
  return error
}

export default reduxForm({
  form: 'reduxForm'
})(ReduxForm)
