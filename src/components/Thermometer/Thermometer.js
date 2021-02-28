import React, { useState } from 'react'
import Button from '../Button/Button'
import ProgressBar from '../ProgressBar/ProgressBar'

import styles from './Thermometer.module.scss'

const Thermometer = ({ organization }) => {
  const [name, setName] = useState('')
  const [amountRaised, setAmountRaised] = useState('')
  const [goal, setGoal] = useState(0)
  const [showForm, setShowForm] = useState(true)

  // Mock call to get data

  return (
    <div className={styles.container}>
      {showForm ? (
        <>
          <p>Make a Donation</p>
          <input type="text" />
        </>
      ) : (
        <>
          <h3>{organization}</h3>
          <p>$1,540</p>
          <ProgressBar message="test message" />
        </>
      )}
      <Button onClick={showForm} className={styles.button}>
        {showForm ? 'Donate' : 'Give Now!'}
      </Button>
    </div>
  )
}

export default Thermometer
