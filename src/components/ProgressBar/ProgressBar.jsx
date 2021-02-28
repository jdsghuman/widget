import React from 'react'
import PropTypes from 'prop-types'
import styles from './ProgressBar.module.scss'

const ProgressBar = ({ color, label, value }) => (
  <div className={styles.progressbar}>
    {/* {label && <div className={styles.progressbar__label}>{label}</div>} */}
    <div className={styles.txt__container}>
      <p>0%</p>
      <p className={styles.message}>Raised</p>
      <p>100%</p>
    </div>
    <div className={styles.progressbar__container}>
      <div
        className={styles.progressbar__fill}
        style={{ width: `${value}%`, background: color }}
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
