import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'; 
import './styles/formUser.css';

// props que se reciben
const FormUser = ({createUser, editUser, updateUser, setEditUser, isOpen, setIsOpen}) => {

   
    const {handleSubmit, register, reset } = useForm();

    useEffect(() => {
      reset(editUser);
    }, [editUser]);

    const submit = (data) => {      
      if (editUser) {
        updateUser('/users', editUser.id, data);   
        setEditUser();     
      } else {
        createUser('/users', data);
      }

        reset({
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            birthay: ""
        });
        setIsOpen(false);
    }

    const handleClose = () => {
      setIsOpen(false);
        reset({
          email: "",
          password: "",
          first_name: "",
          last_name: "",
          birthay: ""
      });
    }

  return (
    <div className={`form-background ${isOpen&&'able'}`}>
      <form className='form-container' onSubmit={handleSubmit(submit)}>
        <div className='form-close' onClick={handleClose}><ion-icon name="close-circle-outline"></ion-icon></div>
        <h2 className='form-title'>Editar Usuario</h2>
        
        <div className='form-item'>
            <label className='form-label' htmlFor="first_name">Nombre</label> <br />
            <input {...register('first_name')} id="first_name" type='text' />
        </div>
        <div className='form-item'>
            <label className='form-label' htmlFor="last_name">Apellidos</label> <br />
            <input {...register('last_name')} id="last_name" type='text' />
        </div>
        <div className='form-item'>
            <label className='form-label' htmlFor="email">Correo</label> <br />
            <input {...register('email')} id="email" type='email' />
        </div>
        <div className='form-item'>
            <label className='form-label' htmlFor="password">Contraseña</label> <br />
            <input {...register('password')} id="password" type='password' />
        </div>
        <div className='form-item'> 
            <label className='form-label' htmlFor="birthday">Cumpleaños</label> <br />
            <input {...register('birthday')} id="birthday" type='date' />
        </div>
        <button className='form-btn' type='submit'>Guardar Cambios</button>
      </form>
    </div>
  )
}

export default FormUser;
