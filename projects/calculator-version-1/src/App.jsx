import Display from './compnents/Display.jsx'
import ButtonsContainer from './compnents/ButtonsContainer.jsx'
import styles from'./App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App
