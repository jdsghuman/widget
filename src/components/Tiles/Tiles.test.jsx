import React from 'react'
import { render, screen } from '@testing-library/react'
import Tiles from './Tiles'
import { defaultDollarAmount } from '../Utils/Data'

const renderConfirm = (props) => ({
  ...render(<Tiles {...props} />),
})
test('The correct Dollar amounts appear in the Tiles', () => {
  renderConfirm()
  defaultDollarAmount.map((amount) => {
    expect(screen.getByTestId('tile')).toHaveTextContent(amount)
  })
})
