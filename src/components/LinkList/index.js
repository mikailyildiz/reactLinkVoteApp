import PropTypes from 'prop-types'
import './style.scss'

import LinkListItem from '../LinkListItem'

const LinkList = (props) => {
  const { items, onVoteClick, onDeleteClick } = props

  return (
    <div data-testid="link-list" className="link-list">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <LinkListItem
              onVoteClick={onVoteClick}
              onDeleteClick={() => onDeleteClick(item)}
              item={item}
            />
          </li>
        ))}
        {!items.length && (
          <li data-testid="link-list-empty" className="empty-message">
            Please add new link
          </li>
        )}
      </ul>
    </div>
  )
}

LinkList.propTypes = {
  items: PropTypes.array,
  onVoteClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
}

LinkList.defaultProps = {
  items: [],
  onVoteClick: () => {},
  onDeleteClick: () => {},
}

export default LinkList
