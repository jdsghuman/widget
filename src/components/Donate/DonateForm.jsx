import React from 'react'
import Button from '../Button/Button'
import Header from '../Header/Header'
import Tiles from '../Tiles/Tiles'

import styles from './DonateForm.module.scss'

const DonateForm = ({
  activeTile,
  amountRaised,
  formRef,
  onAction,
  onChangeInput,
  setDefaultTileAmount,
  themeColor,
  themeContrast,
}) => {
  return (
    <>
      <div className={styles.container}>
        <Header>Make a Donation</Header>
        <Tiles
          amountRaised={amountRaised}
          activeTile={activeTile}
          onClick={setDefaultTileAmount}
        />
        <span className={styles.input__currency}>
          <input
            ref={formRef}
            value={amountRaised}
            onChange={onChangeInput}
            className={styles.input}
            placeholder="0"
            type="text"
          />
        </span>
      </div>
      <Button
        type="button"
        onClick={onAction}
        className={styles.button}
        disabled={amountRaised < 1}
        style={{
          background: themeColor,
          color: themeContrast,
          border: `2px solid ${themeColor}`,
        }}
      >
        Donate {amountRaised > 0 && `$${amountRaised}`}
      </Button>
    </>
  )
}

export default DonateForm
