import Widget from './components/Widget/Widget'
import './styles/main.scss'
import styles from './styles/App.module.scss'

function App() {
  return (
    <div className={styles.container}>
      <Widget
        organization="waterProject"
        themeColor="#784295"
        themeContrast="#ffffff"
        logo="https://images.unsplash.com/photo-1501951653466-8df816debe46?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTIyfHxsb2dvJTIwd2hpdGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
      />
    </div>
  )
}

export default App
