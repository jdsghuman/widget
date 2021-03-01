import React from 'react'
import PropTypes from 'prop-types'
import { getProgressBarPercentage } from '../Utils/Data'
import styles from './ProgressBar.module.scss'

const ProgressBar = ({ goal, themeColor, totalRaised }) => (
  <div className={styles.progressbar}>
    <div className={styles.label__container}>
      <p className={styles.percentage}>0%</p>
      <p className={styles.message}>Raised</p>
      <p className={styles.percentage}>100%</p>
    </div>
    <div className={styles.progressbar__container}>
      <div
        className={styles.progressbar__fill}
        style={{
          width: `${getProgressBarPercentage(totalRaised, goal)}%`,
          background: themeColor,
        }}
      />
    </div>
  </div>
)

ProgressBar.propTypes = {
  totalRaised: PropTypes.number,
  color: PropTypes.string,
}

ProgressBar.defaultProps = {
  totalRaised: 0,
}

export default ProgressBar
