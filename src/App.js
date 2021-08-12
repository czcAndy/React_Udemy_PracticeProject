import './App.css';
import AddUser from './components/AddUser/AddUser';
import DispayUsers from './components/DsiplayUsers/DisplayUsers';

function App() {
  return (
   <div>
     <section>
        <AddUser></AddUser>
     </section>
     <section>
        <DispayUsers></DispayUsers>
     </section>
   </div>
  );
}

export default App;
