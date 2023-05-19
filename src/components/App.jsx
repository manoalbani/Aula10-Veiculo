import { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className={styles['main-text']}>App</h1>
    </div>
  )
}

export default App
