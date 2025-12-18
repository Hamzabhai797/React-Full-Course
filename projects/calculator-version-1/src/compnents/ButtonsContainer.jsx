import styles from'./ButtonsContainer.module.css'

const buttonsContainer = () => {

  const ButtonNames = ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.'];
  return (
    <div className={styles.buttonsContainer}>

      {ButtonNames.map(buttonName => 
        <button key={buttonName} className={styles.button}>{buttonName}</button>
      )}
    </div>
  );
};
export default buttonsContainer;