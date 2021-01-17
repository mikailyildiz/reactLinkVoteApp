import PropTypes from 'prop-types'
import './style.scss'

const Dropdown = (props) => {
  const { items, onChange } = props

  return (
    <select
      data-testid="dropdown"
      className="form-control dropdown"
      onChange={onChange}
    >
      {items.map((item, index) => (
        <option key={index} value={item.value}>
          {item.text}
        </option>
      ))}
    </select>
  )
}

Dropdown.propTypes = {
  items: PropTypes.array,
  onChange: PropTypes.func,
}

Dropdown.defaultProps = {
  items: [],
  onChange: () => {},
}

export default Dropdown
