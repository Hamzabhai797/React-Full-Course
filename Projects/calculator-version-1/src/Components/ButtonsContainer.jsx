import styles from './Buttons.module.css';

const ButtonsContainer = () => {

  const buttons = ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];

  return  (
    <div className={styles.buttonsContainer}>

      {buttons.map(buttonsName => {
        return <button className={styles.button}>{buttonsName}</button>
      })}
      </div>
  )
}

export default ButtonsContainer;