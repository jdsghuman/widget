import Widget from './components/Widget/Widget'
import './styles/main.scss'
import styles from './styles/App.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <Widget
        organization="TheCreatorProject"
        logo="https://images.unsplash.com/photo-1468421870903-4df1664ac249?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3052&q=80"
      />
    </div>
  )
}

export default App
