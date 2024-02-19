import React from 'react';
import './styles/cardUser.css';

const CardUser = ({user, deleteUser, setEditUser, setIsOpen}) => {

  const  handleDelete = () => {
        deleteUser('/users', user.id);

    }

    const handleEdit = ()  => {
      setEditUser(user);
      setIsOpen(true);
    }

  return (
    <div className="card-container">
      <article className='card-user'>
          <h3 className='card-name'>{user.first_name} {user.last_name}</h3>
          <hr/>
          <ul className='card-info'>
              <li><span className='card-email'>Correo </span> <br /> <span>{user.email}</span></li>
              <li><span className='card-birthday'>Cumpleaños </span> <br /> <span><ion-icon name="gift-outline" className='gift'></ion-icon> {user.birthday}</span></li>
          </ul>
          <hr/>
          <div className='card-btn-group'>
            <button className='card-btn-delete' onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon></button>
            <button className='card-btn-edit' onClick={handleEdit}><ion-icon name="pencil-outline"></ion-icon></button>
          </div>
      </article>
    </div>
  )
}

export default CardUser;