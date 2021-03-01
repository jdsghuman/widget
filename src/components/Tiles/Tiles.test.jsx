import React from 'react'
import { render, screen } from '@testing-library/react'
import Tiles from './Tiles'

export const defaultDollarAmount = [5, 10, 25, 50]

const renderConfirm = (props) => ({
  ...render(<Tiles {...props} />),
})
test('The correct Dollar amounts appear in the Tiles', () => {
  renderConfirm()
  defaultDollarAmount.map((amount) => {
    expect(screen.getByTestId('tile')).toHaveTextContent(amount)
  })
})
