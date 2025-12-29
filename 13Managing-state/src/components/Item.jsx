import styles from './Item.module.css';

export const Item = ({ foodItems, handleBuyButton }) => {

  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button className={`${styles.button} btn btn-info`} onClick={handleBuyButton}>buy</button>
    </li>
  );
};
