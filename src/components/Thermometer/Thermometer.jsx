import React, { useEffect, useState } from 'react'
import Confirm from '../Confirm/Confirm'
import DonateForm from '../Donate/DonateForm'
import Home from '../Home/Home'
import { getCampaignData, setCampaignAmountRaised } from '../Utils/Data'
import styles from './Thermometer.module.scss'

const Thermometer = ({ formRef, organization, themeColor, themeContrast }) => {
  const [organizationName, setOrganizationName] = useState('')
  const [amountRaised, setAmountRaised] = useState('')
  const [goal, setGoal] = useState(0)
  const [totalRaised, setTotalRaised] = useState(0)
  const [activeTile, setActiveTile] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)

  const setDefaultTileAmount = (amountRaised) => {
    setAmountRaised(amountRaised)
    setActiveTile(true)
  }

  const onChangeInput = (e) => {
    e.target.value < 1000000 && setAmountRaised(e.target.value)
    setActiveTile(false)
  }

  const onAction = () => {
    if (currentStep === 1) {
      setCampaignAmountRaised(amountRaised, organization)
    }
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
            goal={goal}
            organizationName={organizationName}
            themeColor={themeColor}
            themeContrast={themeContrast}
            totalRaised={totalRaised}
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
        return <Confirm amountRaised={amountRaised} />
    }
  }

  useEffect(() => {
    currentStep === 1 && formRef.current.focus()
  }, [currentStep])

  // Mock API call to get updated data
  useEffect(async () => {
    const data = await getCampaignData(organization)
    setTotalRaised(data.amountRaised)
  }, [currentStep])

  useEffect(() => {
    if (currentStep === 2) {
      setTimeout(() => {
        setCurrentStep(0)
        setAmountRaised('')
        setActiveTile(false)
      }, 3000)
    }
  }, [currentStep])

  // Mock call to get data
  useEffect(async () => {
    const data = await getCampaignData(organization)
    setGoal(data.goal)
    setTotalRaised(data.amountRaised)
    setOrganizationName(data.name)
  }, [])

  return <div className={styles.container}>{getWidgetScreen()}</div>
}

export default Thermometer
