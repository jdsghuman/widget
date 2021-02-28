import React from 'react'
import ProgressBar from '../ProgressBar/ProgressBar'
import Button from '../Button/Button'
import Thermometer from '../Thermometer/Thermometer'
import styles from './Widget.module.scss'

const Widget = ({ logo, organization, themeColor }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <img src={logo} alt="logo" className={styles.image} />
      </div>
      <Thermometer organization={organization} />
    </div>
  )
}

export default Widget