import PropTypes from 'prop-types'
import VoteButton from '../VoteButton'

import './style.scss'

const LinkListItem = (props) => {
  const { item, onVoteClick, onDeleteClick } = props

  return (
    <div data-testid="link-list-item" className="link-list-item">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-3 vote">
            <div data-testid="link-vote" className="number">
              {item.vote}
            </div>
            <div>Points</div>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h3 data-testid="link-title" className="card-title">
                {item.name}
              </h3>
              <p data-testid="link-url" className="card-text">
                {item.url}
              </p>
              <div className="item-controls">
                <VoteButton
                  onClick={() => onVoteClick({ id: item.id, type: 'up' })}
                  up
                  className="btn-up-vote"
                />
                <VoteButton
                  onClick={() => onVoteClick({ id: item.id, type: 'down' })}
                  down
                  className="btn-down-vote"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          data-testid="link-delete-button"
          className="btn-delete btn btn-dark"
          onClick={onDeleteClick}
        >
          &#215;
        </div>
      </div>
    </div>
  )
}

LinkListItem.propTypes = {
  item: PropTypes.object,
  onVoteClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
}

LinkListItem.defaultProps = {
  item: {},
  onVoteClick: () => {},
  onDeleteClick: () => {},
}

export default LinkListItem
