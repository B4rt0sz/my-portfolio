import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'

const Form = () => {
  const [messageSend, setMessageSend] = useState(false)
  const form = useRef()

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Please enter your name.')
      .min(2, 'At least two characters are required.')
      .matches(/^[a-z][a-z\s]*$/, 'Name should not contain numbers')
      .max(30, 'The max number of characters is thirty.'),
    email: yup
      .string()
      .required('Please enter your email address.')
      .min(2, 'At least two characters are required.')
      .email('Please enter a valid email address.'),
    message: yup
      .string()
      .required('Please enter your message.')
      .min(10, 'At least ten characters are required.')
      .max(
        1000,
        'Spam Suspected! Please shorten your message to two thousand characters.'
      ),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const sendEmail = () => {
    emailjs.sendForm(
      'service_f1l9brj',
      'template_pe85kcs',
      form.current,
      'user_ROylFzSvpK8X47yypl1cM'
    )
    reset()
    setMessageSend(true)
    setTimeout(() => setMessageSend(false), 2000)
  }

  return (
    <div className='contact__container'>
      <h2 className='contact__container-title'>Contact Form</h2>

      <form
        className='contact__form'
        onSubmit={handleSubmit(sendEmail)}
        ref={form}
      >
        <input
          className='contact__form-input'
          type='text'
          placeholder='Name'
          {...register('name')}
        />
        {errors.name && (
          <p className='contact__form-error'>{errors.name.message}</p>
        )}
        <input
          className='contact__form-input'
          type='text'
          placeholder='E-mail'
          {...register('email')}
        />
        {errors.email && (
          <p className='contact__form-error'>{errors.email.message}</p>
        )}
        <textarea
          className='contact__form-textarea'
          placeholder='Enter your message...'
          {...register('message')}
        />
        {errors.message && (
          <p className='contact__form-error'>{errors.message.message}</p>
        )}
        {messageSend && (
          <p className='contact__form-success'>Your message has been sent!</p>
        )}
        <motion.button
          className='contact__form-submit'
          type='submit'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.0 }}
        >
          Send Message
        </motion.button>
      </form>
    </div>
  )
}

export default Form
