import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

const Button = ({
  children,
  type,
  className,
  primary,
  accent,
  onClick,
  style,
  disabled,
}) => {
  return (
    <button
      type={type}
      className={cx('button', className, {
        'button--primary': primary,
        'button--accent': accent,
        'button--disabled': disabled,
      })}
      onClick={onClick}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
}

Button.defaultPropTypes = {
  type: 'button',
}

export default Button
