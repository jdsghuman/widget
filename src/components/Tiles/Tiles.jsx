import React from 'react'
import classNames from 'classnames/bind'
import { defaultDollarAmount } from '../Utils/Data'
import styles from './Tiles.module.scss'
const cx = classNames.bind(styles)

const Tiles = ({ activeTile, amountRaised, onClick }) => {
  return (
    <div className={styles.container}>
      {defaultDollarAmount.map((amount, i) => {
        return (
          <div
            key={i + amount}
            onClick={() => onClick(amount)}
            className={cx('tile', {
              'tile--active': activeTile && amount === amountRaised,
            })}
          >
            ${amount}
          </div>
        )
      })}
    </div>
  )
}

export default Tiles
