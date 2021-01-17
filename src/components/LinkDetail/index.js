import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './style.scss'

import FormInput from '../FormInput'

const LinkDetail = (props) => {
  const [link, setLink] = useState({ name: '', url: '' })
  const [formOk, setFormOk] = useState(false)

  const onLinkChange = (e, key) => {
    const value = e.target.value
    setLink({ ...link, [key]: value })
  }

  useEffect(() => {
    if (link.name.length > 0 && link.url.length > 0) setFormOk(true)
    else setFormOk(false)
  }, [link])

  const onFormSubmit = (e) => {
    e.preventDefault()
    props.onFormSubmit(link)
  }

  return (
    <div className="link-detail">
      <form data-testid="link-form" onSubmit={onFormSubmit}>
        <FormInput
          label="Link Name"
          id="txtname"
          type="text"
          placeholder="e.g. Alphabet"
          onChange={(e) => onLinkChange(e, 'name')}
          value={link.name}
        />
        <FormInput
          label="Link Url"
          id="txturl"
          type="url"
          placeholder="e.g. http://abc.xyz"
          onChange={(e) => onLinkChange(e, 'url')}
          value={link.url}
        />
        <div className="form-footer">
          <button
            type="submit"
            disabled={!formOk}
            className="btn btn-primary btn-submit"
            data-testid="link-save-button"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

LinkDetail.propTypes = {
  onFormSubmit: PropTypes.func,
}

LinkDetail.defaultProps = {
  onFormSubmit: () => {},
}

export default LinkDetail
