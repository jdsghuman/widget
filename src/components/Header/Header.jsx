import React from 'react'
import styles from './Header.module.scss'

const Header = ({ children }) => {
  return <h3 className={styles.title}>{children}</h3>
}

export default Header
