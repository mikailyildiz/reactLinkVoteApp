import { render, getByTestId, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ConfirmDialog from '.'

const propData = {
  open: true,
  title: 'Lorem Ipsum',
  message: 'Lorem ipsum dolor sit amed',
}

describe('Unit test - Confirm Dialog', () => {
  test('Show confirm dialog', () => {
    const { container } = render(<ConfirmDialog {...propData} />)
    const dialog = getByTestId(container, 'confirm-dialog')
    expect(dialog).toBeInTheDocument()

    const overlay = getByTestId(container, 'modal-overlay')
    expect(overlay).toBeInTheDocument()

    const title = getByTestId(container, 'modal-title')
    expect(title).toHaveTextContent(propData.title)

    const message = getByTestId(container, 'modal-body')
    expect(message).toHaveTextContent(propData.message)
  })

  test('Confirm dialog button events', () => {
    const onConfirmOk = jest.fn()
    const onClose = jest.fn()

    const { container } = render(
      <ConfirmDialog
        {...propData}
        onConfirmOk={onConfirmOk}
        onClose={onClose}
      />
    )
    const closeButton = getByTestId(container, 'modal-close-button')
    fireEvent.click(closeButton)
    expect(onClose).toHaveBeenCalledTimes(1)

    const cancelButton = getByTestId(container, 'modal-cancel-button')
    fireEvent.click(cancelButton)
    expect(onClose).toHaveBeenCalledTimes(2)

    const okButton = getByTestId(container, 'modal-ok-button')
    fireEvent.click(okButton)
    expect(onConfirmOk).toHaveBeenCalledTimes(1)
  })
})
