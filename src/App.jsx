import { useEffect, useState } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';
import FormUser from './components/FormUser';
import CardUser from './components/CardUser';

function App() {

  const [editUser, setEditUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const url = 'https://users-crud.academlo.tech';
  const [user, getUsers, createUser, deleteUser, updateUser] = useCrud(url);

  useEffect(() => {
    getUsers('/users');
  },[]);

  const handleOpen = () => {
    setIsOpen(true);
  }
  
  return (
    <div>
      <header  className="app-header">
        <h1>Usuarios</h1>
        <button className='app-btn' onClick={handleOpen}>+ Crear Nuevo Usuario</button>
      </header>
        <FormUser 
          createUser={createUser}
          editUser={editUser}
          updateUser= {updateUser}
          setEditUser= {setEditUser}
          isOpen= {isOpen}
          setIsOpen= {setIsOpen}
          />
        <div className='App'>
          {
            user?.map(user => (
              <CardUser 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setEditUser= {setEditUser}
              setIsOpen= {setIsOpen}
              />
            ))
          }
        </div>
    </div>
  )
}

export default App;
