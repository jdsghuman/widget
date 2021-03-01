import React from 'react'
import PropTypes from 'prop-types'
import Thermometer from '../Thermometer/Thermometer'
import styles from './Widget.module.scss'

const Widget = ({ logo, organization, themeColor, themeContrast }) => {
  const formRef = React.useRef()

  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <img src={logo} alt="logo" className={styles.image} />
      </div>
      <Thermometer
        formRef={formRef}
        themeColor={themeColor}
        themeContrast={themeContrast}
        organization={organization}
      />
    </div>
  )
}

Widget.propTypes = {
  logo: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  themeColor: PropTypes.string.isRequired,
  themeContrast: PropTypes.string.isRequired,
}

export default Widget
