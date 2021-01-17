import PropTypes from 'prop-types'
import classNames from 'classnames'
import './style.scss'

const ConfirmDialog = (props) => {
  const { open, title, message, onConfirmOk, onClose } = props

  if (!open) return null

  return (
    <>
      <div
        data-testid="modal-overlay"
        className={classNames('modal-backdrop fade', { show: open })}
      ></div>
      <div
        data-testid="confirm-dialog"
        className={classNames('modal fade', { show: open })}
        id="staticBackdrop"
        data-backdrop="static"
        data-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4
                data-testid="modal-title"
                className="modal-title"
                id="staticBackdropLabel"
              >
                {title}
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
                data-testid="modal-close-button"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div data-testid="modal-body" className="modal-body">
              {message}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={onClose}
                data-testid="modal-cancel-button"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={onConfirmOk}
                data-testid="modal-ok-button"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

ConfirmDialog.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  onConfirmOk: PropTypes.func,
  onClose: PropTypes.func,
}

ConfirmDialog.defaultProps = {
  open: false,
  title: '',
  message: '',
  onConfirmOk: () => {},
  onClose: () => {},
}

export default ConfirmDialog
