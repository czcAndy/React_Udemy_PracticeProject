import './App.css';
import AddUser from './components/AddUser/AddUser';
import DispayUsers from './components/DsiplayUsers/DisplayUsers';

const App = () => {

  const onSubmitUserHandler = (user) => {
    console.log(user);
  }

  return (
   <div>
     <section>
        <AddUser onSubmit={onSubmitUserHandler}></AddUser>
     </section>
     <section>
        <DispayUsers></DispayUsers>
     </section>
   </div>
  );
}

export default App;
