import { useEffect } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const ToastMessage = (props) => {
  const { open, message, onClose } = props

  useEffect(() => {
    const interval = setInterval(() => {
      onClose()
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  if (!open) return null

  return (
    <div
      data-testid="toast"
      className="toast success"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-body">{message}</div>
    </div>
  )
}

ToastMessage.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string,
  onClose: PropTypes.func,
}

ToastMessage.defaultProps = {
  open: false,
  message: '',
  onClose: () => {},
}

export default ToastMessage
