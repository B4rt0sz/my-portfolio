import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import emailjs from 'emailjs-com'

const Form = () => {
  const [message, setMessage] = useState(false)
  const form = useRef()

  const schema = yup.object().shape({
    user_name: yup
      .string()
      .min(2, 'At least two characters are required.')
      .max(30, 'The max number of characters is thirty.')
      .required('Please enter your name.'),
    user_email: yup
      .string()
      .min(2, 'At least two characters are required.')
      .email('Please enter a valid email address.')
      .required('Please enter your email address.'),
    user_message: yup
      .string()
      .min(10, 'At least ten characters are required.')
      .max(
        2000,
        'Spam Suspected! Please shorten your message to two thousand characters.'
      )
      .required('Please enter your message.'),
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
    setMessage(true)
    setTimeout(() => setMessage(false), 5000)
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
          {...register('user_name')}
        />
        <p className='contact__form-error'>{errors.user_name?.message}</p>
        <input
          className='contact__form-input'
          type='text'
          placeholder='E-mail'
          {...register('user_email')}
        />
        <p className='contact__form-error'>{errors.user_email?.message}</p>
        <textarea
          className='contact__form-textarea'
          placeholder='Enter your message...'
          {...register('user_message')}
        ></textarea>
        <p className='contact__form-error'>{errors.user_message?.message}</p>
        {message ? (
          <p className='contact__form-success'>Your message has been sent!</p>
        ) : null}
        <button type='submit' className='contact__form-submit'>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Form
