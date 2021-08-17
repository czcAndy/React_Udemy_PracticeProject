import './UserItem.css';

const UserItem = (props) => {
    return (
    <li className="userListItem" >
        <h3 className="userListItem-name">{props.name}</h3>
        <p className="userListItem-age">{props.age}</p>
      </li>
    )
}

export default UserItem;