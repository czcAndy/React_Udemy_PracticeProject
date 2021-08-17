import { useState } from 'react';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import DispayUsers from './components/DisplayUsers/DisplayUsers';

const App = () => {

  const [userList, setUserList] = useState([]);

  const onSubmitUserHandler = (user) => {
    setUserList(prevUserList => {
      const updatedList = [...prevUserList];
      const userWithId = {...user, 'id': Math.random().toString()};
      updatedList.unshift(userWithId);
      return updatedList;
    })
  }

  const onDeleteUserHandler = (id) => {
    setUserList(prevUserList => {
      const updatedList = [...prevUserList];
      const index = updatedList.findIndex(u => u.id === id);
      updatedList.splice(index, 1);
      return updatedList;
    })
  }

  return (
   <div>
     <section>
        <AddUser onSubmit={onSubmitUserHandler}></AddUser>
     </section>
     <section>
        <DispayUsers users={userList} onDeleteItem={onDeleteUserHandler}></DispayUsers>
     </section>
   </div>
  );
}

export default App;
