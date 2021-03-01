import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProgressBar.module.scss'

const ProgressBar = ({ label, themeColor, organization, value }) => (
  <div className={styles.progressbar}>
    <div className={styles.label__container}>
      <p className={styles.percentage}>0%</p>
      <p className={styles.message}>Raised</p>
      <p className={styles.percentage}>100%</p>
    </div>
    <div className={styles.progressbar__container}>
      <div
        className={styles.progressbar__fill}
        style={{ width: `${value}%`, background: themeColor }}
      />
    </div>
  </div>
)

ProgressBar.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  message: PropTypes.string,
  color: PropTypes.string,
}

ProgressBar.defaultProps = {
  label: null,
  value: 0,
  message: null,
}

export default ProgressBar
