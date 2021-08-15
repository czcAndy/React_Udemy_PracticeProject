import "./DisplayUsers.css";

const DispayUsers = (props) => {
  let content = <p className="noUserDisplayMessage">No users added yet.</p>;

  if (props.users && props.users.length > 0) {
    content = (
      <ul className="displayUsers-container">
        {props.users.map((u) => (
          <li className="userListItem" key={u.id}>
            <h3 className="userListItem-name">{u.name}</h3>
            <p className="userListItem-age">{u.age}</p>
          </li>
        ))}
      </ul>
    );
  }

  return <div>{content}</div>;
};

export default DispayUsers;
