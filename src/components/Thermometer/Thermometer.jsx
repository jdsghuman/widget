import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Header from '../Header/Header'
import Confirm from '../Confirm/Confirm'
import DonateForm from '../Donate/DonateForm'
import Home from '../Home/Home'
import Tiles from '../Tiles/Tiles'
import styles from './Thermometer.module.scss'

const Thermometer = ({ formRef, organization, themeColor, themeContrast }) => {
  const [name, setName] = useState('')
  const [amountRaised, setAmountRaised] = useState('')
  const [goal, setGoal] = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [activeTile, setActiveTile] = useState(false)
  const [onComplete, setOnComplete] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  // Mock call to get data

  const setDefaultTileAmount = (amount) => {
    setAmountRaised(amount)
    setActiveTile(true)
  }

  const onChangeInput = (e) => {
    setAmountRaised(e.target.value)
    setActiveTile(false)
  }

  const onAction = () => {
    if (currentStep < 2) {
      return setCurrentStep(currentStep + 1)
    }
  }

  const getWidgetScreen = () => {
    switch (currentStep) {
      case 0:
        return (
          <Home
            onAction={onAction}
            organization={organization}
            themeColor={themeColor}
            themeContrast={themeContrast}
          />
        )
      case 1:
        return (
          <DonateForm
            activeTile={activeTile}
            amountRaised={amountRaised}
            onAction={onAction}
            formRef={formRef}
            onChangeInput={onChangeInput}
            setDefaultTileAmount={setDefaultTileAmount}
            themeColor={themeColor}
            themeContrast={themeContrast}
          />
        )
      case 2:
        return <Confirm />
    }
  }

  useEffect(() => {
    currentStep === 1 && formRef.current.focus()
  }, [showForm])

  return <div className={styles.container}>{getWidgetScreen()}</div>
}

export default Thermometer
