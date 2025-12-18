import styles from './Item.module.css';

export const Item = ({ foodItems }) => {
  return (
    <li className={`${styles["kg-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItems}</span>
      <button className={`${styles.button} btn btn-info`} onClick={() => console.log(`${foodItems} being bought`)}>buy</button>
    </li>
  );
};
