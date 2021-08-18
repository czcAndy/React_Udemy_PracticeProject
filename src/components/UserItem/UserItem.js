import styles from './UserItem.module.css';

const UserItem = (props) => {

  const deleteItemHandler = () => {
    props.onDelete(props.user.id);
  }

    return (
    <li className={styles["item"]} >
      <header className={styles["header"]}>
        <h3 className={styles["name"]}>{props.user.name}</h3>
        <button className={styles["close"]} onClick={deleteItemHandler}>X</button>
      </header> 
        <p className={styles["age"]}>{props.user.age}</p>
      </li>
    )
}

export default UserItem;