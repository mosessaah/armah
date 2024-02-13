import Sidebar from '../Sidebar';
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_q793pau', 'template_vlzbvjh', form.current, 'TRfkWKDSqnkV330AG')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
    )
  }




  return (
    <>
      <div className="container contact-page">
        <Sidebar/>
      <div className='contact_zone'>
            <h1>Hola!</h1>
            <p>
            I am interested in freelance opportunities - especially 
            on ambitious or large projects. However, if you have any 
            other requests or questions, don't hesitate to contact me using below form either.
            </p>
            <a className='email'>Email: ethanarmah@gmail.com</a>
        </div>
        <div className="text-zone">
          <h1 className='message'>
            Message Me
          </h1>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
       
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
