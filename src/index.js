import React from 'react'
import styles from './styles.module.css'
import Modalejs from './modale'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Modale = Modalejs
