import PropTypes from 'prop-types'
import classNames from 'classnames'

import './style.scss'

const Pagination = (props) => {
  const { items, pageNumber, onPageChange } = props

  return (
    <nav data-testid="pagination" className="pagination-nav">
      <ul className="pagination">
        <li
          data-testid="prev-page"
          className={classNames('page-item', { disabled: pageNumber <= 1 })}
        >
          <div
            className="page-link"
            aria-label="Previous"
            onClick={() => onPageChange(pageNumber - 1)}
          >
            <span aria-hidden="true">&lsaquo;</span>
          </div>
        </li>
        {items.map((item, index) => (
          <li
            data-testid="page-item"
            key={index}
            className={classNames('page-item', {
              active: pageNumber == item,
            })}
          >
            <div className="page-link" onClick={() => onPageChange(item)}>
              {item}
            </div>
          </li>
        ))}
        <li
          data-testid="page-next"
          className={classNames('page-item', {
            disabled: pageNumber >= items[items.length - 1],
          })}
        >
          <div
            className="page-link"
            aria-label="Next"
            onClick={() => onPageChange(pageNumber + 1)}
          >
            <span aria-hidden="true">&rsaquo;</span>
          </div>
        </li>
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  items: PropTypes.array,
  pageNumber: PropTypes.number,
  onPageChange: PropTypes.func,
}

Pagination.defaultProps = {
  items: [],
  pageNumber: 1,
  onPageChange: () => {},
}

export default Pagination
