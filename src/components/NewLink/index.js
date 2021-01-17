import { useState } from 'react'
import { ROUTE } from '../../routing'
import './style.scss'

import { Link } from 'react-router-dom'
import LinkDetail from '../LinkDetail'
import ToastMessage from '../ToastMessage'

import { connect } from 'react-redux'
import { onNewLink } from '../../actions/links'

const NewLink = (props) => {
  const [linkDetailFormKey, setDetailFormKey] = useState(new Date())
  const [toast, setToast] = useState({})

  const onNewLinkSubmit = (data) => {
    props.onNewLink(data)
    showToast('Added: ' + data.name)
    resetForm()
  }

  const showToast = (message) => {
    setToast({
      open: true,
      message,
    })
  }

  const resetForm = () => {
    setDetailFormKey(new Date())
  }

  const onToastClose = () => {
    setToast({})
  }

  return (
    <div data-testid="page-newlink" className="page-newlink">
      <ToastMessage {...toast} onClose={onToastClose} />
      <div className="container">
        <div className="align-items-center d-flex flex-column">
          <div className="page-wrap">
            <div className="page-header">
              <Link to={ROUTE.LINKS} className="btn-back btn btn-link">
                &#8592; Return to List
              </Link>
            </div>
            <h2>Add New Link</h2>
            <LinkDetail
              key={linkDetailFormKey}
              onFormSubmit={onNewLinkSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = {
  onNewLink,
}

export default connect(mapStateToProps, mapDispatchToProps)(NewLink)
