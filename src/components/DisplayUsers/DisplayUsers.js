import UserItem from "../UserItem/UserItem";
import "./DisplayUsers.css";

const DispayUsers = (props) => {
  let content = <p className="noUserDisplayMessage">No users added yet.</p>;

  const handleItemDeletion = (id) => {
    props.onDeleteItem(id);
  }

  if (props.users && props.users.length > 0) {
    content = (
      <ul className="displayUsers-container">
        {props.users.map((u) => (
          <UserItem user={u} key={u.id} onDelete={handleItemDeletion}/>
        ))}
      </ul>
    );
  }

  return <div>{content}</div>;
};

export default DispayUsers;
