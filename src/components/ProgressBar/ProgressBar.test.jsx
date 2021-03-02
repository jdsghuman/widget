import React from 'react'
import { render, screen } from '@testing-library/react'
import ProgressBar from './ProgressBar'

const renderConfirm = (props) => ({
  ...render(<ProgressBar {...props} goal={5000} totalRaised={2000} />),
})

test('ProgressBar is displayed with the correct width', () => {
  renderConfirm()
  expect(screen.getByTestId('progressBar')).toHaveStyle('width: 40%')
})
