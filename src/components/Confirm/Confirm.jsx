import React, { createContext } from 'react'
import classNames from 'classnames/bind'
import { truncateText } from '../Utils/Data'
import styles from './Confirm.module.scss'
const cx = classNames.bind(styles)

const Confirmation = ({ amountRaised }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Thank you!</p>
      <p className={styles.text__description}>For your donation of</p>
      <p className={cx('text', 'text__dollar')}>${amountRaised}</p>
    </div>
  )
}

export default Confirmation
