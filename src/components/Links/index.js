import { useEffect, useState } from 'react'
import { ROUTE } from '../../routing'
import './style.scss'

import { Link } from 'react-router-dom'
import LinkList from '../LinkList'
import Pagination from '../Pagination'
import Dropdown from '../Dropdown'
import ToastMessage from '../ToastMessage'
import ConfirmDialog from '../ConfirmDialog'

import { onDeleteLink, onVoteLink, onSortingLink } from '../../actions/links'

import { connect } from 'react-redux'
import {
  SORT_LIST,
  PAGE_SIZE,
  sliceItems,
  generatePagination,
} from '../../utils'

const LinkPage = (props) => {
  const [linkItems, setLinkItems] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [showPagniantion, setShowPagniantion] = useState(false)
  const [showSorting, setShowSorting] = useState(false)
  const [pagination, setPagination] = useState([])
  const [orderBy, setOrderBy] = useState(0)
  const [toast, setToast] = useState({})
  const [deleteConfirm, setDeleteConfirm] = useState({})

  useEffect(() => {
    fetchLinks(props.links)
    fetchPagination(props.links)
    sortingVisibleCheck(props.links)
  }, [props.links, pageNumber, orderBy])

  const onPageChange = (number) => {
    setPageNumber(number)
  }

  const onSortChange = (e) => {
    const sort = e.target.value
    props.onSortingLink(sort)
    setOrderBy(sort)
  }

  const onVoteClick = ({ id, type }) => {
    props.onVoteLink(id, type, orderBy)
  }

  const onToastClose = () => {
    setToast({})
  }

  const onCloseDeleteConfirm = () => {
    setDeleteConfirm({})
  }

  const showToast = (message) => {
    setToast({
      open: true,
      message,
    })
  }

  const showDeleteConfirm = (item) => {
    setDeleteConfirm({
      open: true,
      title: 'Delete Link Confirm',
      message: 'Do you want to delete: ' + item.name,
      onConfirmOk: () => deleteConfirmOk(item),
    })
  }

  const deleteConfirmOk = (item) => {
    props.onDeleteLink(item.id)
    onCloseDeleteConfirm()
    showToast('Deleted: ' + item.name)
  }

  const fetchLinks = (linkData) => {
    if (linkData.length > PAGE_SIZE) {
      const items = sliceItems(linkData, PAGE_SIZE, pageNumber)
      setLinkItems(items)
    } else {
      setLinkItems(linkData)
    }
  }

  const fetchPagination = (linkData) => {
    if (linkData.length > PAGE_SIZE) {
      const paginationItems = generatePagination(
        linkData,
        PAGE_SIZE,
        pageNumber
      )
      setPagination(paginationItems)
      setShowPagniantion(true)
    } else {
      setShowPagniantion(false)
    }
  }

  const sortingVisibleCheck = (linkData) => {
    if (linkData.length > 1) setShowSorting(true)
    else setShowSorting(false)
  }

  return (
    <div data-testid="page-links" className="page-links">
      <ToastMessage {...toast} onClose={onToastClose} />
      <ConfirmDialog {...deleteConfirm} onClose={onCloseDeleteConfirm} />
      <div className="container">
        <div className="align-items-center d-flex flex-column">
          <div className="page-wrap">
            <div className="page-header">
              <div className="row no-gutters">
                <div className="col">
                  {showSorting && (
                    <Dropdown items={SORT_LIST} onChange={onSortChange} />
                  )}
                </div>
                <div className="col">
                  <Link
                    className="btn btn-primary btn-new-link"
                    to={ROUTE.NEWLINK}
                  >
                    &#43; Add New Link
                  </Link>
                </div>
              </div>
            </div>
            <LinkList
              items={linkItems}
              onVoteClick={onVoteClick}
              onDeleteClick={showDeleteConfirm}
            />
            <div className="footer">
              {showPagniantion && (
                <Pagination
                  items={pagination}
                  onPageChange={onPageChange}
                  pageNumber={pageNumber}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ links }) => {
  return {
    links,
  }
}

const mapDispatchToProps = {
  onDeleteLink,
  onVoteLink,
  onSortingLink,
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkPage)
