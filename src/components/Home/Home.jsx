import React from 'react'
import Button from '../Button/Button'
import Header from '../Header/Header'
import ProgressBar from '../ProgressBar/ProgressBar'
import { formatCurrency, truncateText } from '../Utils/Data'

import styles from './Home.module.scss'

const Home = ({
  amountRaised,
  goal,
  onAction,
  organizationName,
  themeColor,
  themeContrast,
  totalRaised,
}) => {
  return (
    <>
      <Header>{truncateText(organizationName, 37)}</Header>
      <p className={styles.amount} style={{ color: themeColor }}>
        {formatCurrency.format(goal)}
      </p>
      <ProgressBar
        amountRaised={amountRaised}
        organizationName={organizationName}
        themeColor={themeColor}
        goal={goal}
        totalRaised={totalRaised}
      />
      <Button
        onClick={onAction}
        type="button"
        className={styles.button}
        style={{
          background: themeColor,
          color: themeContrast,
          border: `2px solid ${themeColor}`,
        }}
      >
        Give Now!
      </Button>
    </>
  )
}

export default Home
