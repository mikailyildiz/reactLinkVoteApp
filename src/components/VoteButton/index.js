import PropTypes from 'prop-types'

const VoteButton = (props) => {
  const { up, down, className, onClick } = props
  return (
    <div
      data-testid="vote-button"
      onClick={onClick}
      className={`btn btn-light btn-sm ${className}`}
    >
      {up && <span>&#8593; Up Vote</span>}
      {down && <span>&#8595; Down Vote</span>}
    </div>
  )
}

VoteButton.propTypes = {
  up: PropTypes.bool,
  down: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

VoteButton.defaultProps = {
  up: false,
  down: false,
  className: '',
  onClick: () => {},
}

export default VoteButton
