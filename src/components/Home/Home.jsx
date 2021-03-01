import React from 'react'
import Button from '../Button/Button'
import Header from '../Header/Header'
import ProgressBar from '../ProgressBar/ProgressBar'
import { truncateText } from '../Utils/Data'

import styles from './Home.module.scss'

const Home = ({
  amountRaised,
  onAction,
  organization,
  themeColor,
  themeContrast,
}) => {
  return (
    <>
      <Header>{truncateText(organization, 35)}</Header>
      <p className={styles.amount} style={{ color: themeColor }}>
        $1,540
      </p>
      <ProgressBar
        amountRaised={amountRaised}
        organization={organization}
        themeColor={themeColor}
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
