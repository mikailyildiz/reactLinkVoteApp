import PropTypes from 'prop-types'

const FormInput = (props) => {
  const { label, id, type, placeholder, value, onChange } = props

  return (
    <div data-testid={`input-${id}`} className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

FormInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

FormInput.defaultProps = {
  label: '',
  id: '',
  type: '',
  placeholder: '',
  value: '',
  onChange: () => {},
}

export default FormInput
