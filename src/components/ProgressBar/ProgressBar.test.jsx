import React from 'react'
import { render, screen } from '@testing-library/react'
import ProgressBar from './ProgressBar'

const renderConfirm = (props) => ({
  ...render(<ProgressBar {...props} />),
})

test('ProgressBar is displayed', () => {
  renderConfirm()
  expect(screen.getAllByText('Raised'))
})
