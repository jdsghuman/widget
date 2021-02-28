import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import ProgressBar from '../ProgressBar/ProgressBar'
import Tiles from '../Tiles/Tiles'
import styles from './Thermometer.module.scss'

const Thermometer = ({ organization, formRef }) => {
  const [name, setName] = useState('')
  const [amountRaised, setAmountRaised] = useState('')
  const [goal, setGoal] = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [activeTile, setActiveTile] = useState(false)

  // Mock call to get data

  const setDefaultTileAmount = (amount) => {
    setAmountRaised(amount)
    setActiveTile(true)
  }

  const onChangeInput = (e) => {
    setAmountRaised(e.target.value)
    setActiveTile(false)
  }

  useEffect(() => {
    showForm && formRef.current.focus()
  }, [showForm])

  return (
    <div className={styles.container}>
      {showForm ? (
        <div className={styles['container--donate']}>
          <h3 className={styles.title}>Make a Donation</h3>
          <Tiles
            amountRaised={amountRaised}
            activeTile={activeTile}
            onClick={setDefaultTileAmount}
          />
          <span className={styles.input__currency}>
            <input
              ref={formRef}
              value={amountRaised}
              onChange={onChangeInput}
              className={styles.input}
              placeholder="0"
              type="text"
            />
          </span>
        </div>
      ) : (
        <>
          <h3 className={styles.title}>{organization}</h3>
          <p>$1,540</p>
          <ProgressBar message="test message" />
        </>
      )}
      <Button onClick={() => setShowForm(!showForm)} className={styles.button}>
        {showForm ? 'Donate' : 'Give Now!'}
      </Button>
    </div>
  )
}

export default Thermometer
