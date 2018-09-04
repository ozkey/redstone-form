import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'


const FormInput = (props) => {
  const {name, id, value, onChange,errBoolean, err, errorText, options, disabled} = props
  console.log(props)
  return (
    <FormControl disabled={disabled} error={errBoolean} >
      <InputLabel htmlFor={name}>Name</InputLabel>
      <Input id={id} value={value} onChange={onChange} disabled={disabled} />
      <FormHelperText id="name-helper-text">{err}</FormHelperText>
      <FormHelperText id="name-helper-text">{errorText}</FormHelperText>
    </FormControl>
  )
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  // values: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  // onSelect: PropTypes.func,
  disabled: PropTypes.bool.isRequired
}

FormInput.defaultProps = {

}

function mapStateToProps(store) {
  return {
    formData: store.appData
  }
}

export default connect(mapStateToProps)(FormInput)