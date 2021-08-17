import './UserItem.css';

const UserItem = (props) => {

  const deleteItemHandler = () => {
    props.onDelete(props.user.id);
  }

    return (
    <li className="userListItem" >
      <header className="userListItem-header">
        <h3 className="userListItem-name">{props.user.name}</h3>
        <button className="userListItem-close" onClick={deleteItemHandler}>X</button>
      </header> 
        <p className="userListItem-age">{props.user.age}</p>
      </li>
    )
}

export default UserItem;