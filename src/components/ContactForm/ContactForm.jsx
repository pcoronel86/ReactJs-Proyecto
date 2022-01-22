import { useState } from 'react'
import './ContactForm.css'

const ContactForm = ({ toggleVisibility, setContact }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            name,
            phone,
            address,
            email
        }
        setContact(objContact)
        setName('')
        setPhone('')
        setAddress('')
        setEmail('')
    }

    return (
        <div className='ContactContainer'>
          <h2>Contacto</h2>
          <form className='ContactForm' onSubmit={handleContactForm}>
          <label className='LabelContact'><h4>Nombre:</h4>
              <input
                className='InputContact'
                type='text'
                value={name}
                onChange={({ target }) => setName(target.value)}
              />
            </label>
            <label className='LabelContact'><h4>Telefono:</h4>
              <input
                className='InputContact'
                type='tel'
                value={phone}
                onChange={({ target }) => setPhone(target.value)}
              />
            </label>
            <label className='LabelContact'><h4>Direccion:</h4>
              <input
                className='InputContact'
                type='text'
                value={address}
                onChange={({ target }) => setAddress(target.value)}
              />
            </label>
            <label className='LabelContact'><h4>Email:</h4> 
              <input
                className='InputContact'
                type='email'
                value={email}
                onChange={({ target }) => setEmail(target.value)}
              />
            </label>
            <button className="btn btn-success ml-auto confirmarButton" type="submit" data-toggle="modal" data-target="#comprarModal">Confirmar</button>
          </form>
        </div>
      )
}

export default ContactForm