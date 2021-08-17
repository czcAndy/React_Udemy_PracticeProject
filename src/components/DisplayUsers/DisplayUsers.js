import UserItem from "../UserItem/UserItem";
import "./DisplayUsers.css";

const DispayUsers = (props) => {
  let content = <p className="noUserDisplayMessage">No users added yet.</p>;

  if (props.users && props.users.length > 0) {
    content = (
      <ul className="displayUsers-container">
        {props.users.map((u) => (
          <UserItem name={u.name} age={u.age} key={u.id}/>
        ))}
      </ul>
    );
  }

  return <div>{content}</div>;
};

export default DispayUsers;
