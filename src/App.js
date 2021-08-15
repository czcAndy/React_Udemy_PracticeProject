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

  return (
   <div>
     <section>
        <AddUser onSubmit={onSubmitUserHandler}></AddUser>
     </section>
     <section>
        <DispayUsers users={userList}></DispayUsers>
     </section>
   </div>
  );
}

export default App;
