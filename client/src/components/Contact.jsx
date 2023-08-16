import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

import emailjs from '@emailjs/browser'

const Contact = () => {
  const [msg, setMsg] = useState('')

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_0km3evu',
        'template_4ozcty8',
        form.current,
        'RyynIDWMma0JIFoK0'
      )
      .then(
        (result) => {
          console.log(result.text)
          setMsg('Message has been successfully sent!')
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div>
      <motion.h1
        className="text-2xl"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Finally... <span className="text-alt"> How do you contact me? </span>
      </motion.h1>

      <motion.div className="mt-12 font-['Outfit']">
        <motion.form
          className="w-full"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex flex-col w-full">
              <label htmlFor="name"> Name </label>
              <input
                type="text"
                name="name"
                className="mt-3 bg-secondary rounded-sm px-3 py-2"
                required
              />
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="email"> Email </label>
              <input
                type="email"
                name="email"
                className="mt-3 bg-secondary bg-secondary rounded-sm px-3 py-2"
                required
              />
            </div>
          </div>

          <div className="flex flex-col mt-8">
            <label htmlFor="message"> Message </label>
            <textarea
              name="message"
              rows="12"
              className="mt-3 bg-secondary rounded-sm resize-none p-3"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-8 bg-secondary px-8 py-2 rounded-sm hover:bg-alt hover:text-black transition-al w-full lg:w-48"
          >
            {' '}
            Submit{' '}
          </button>

          {msg && (
            <motion.div
              className="mt-8 bg-alt px-8 py-2 ml-4 rounded-sm text-black transition-all inline-block"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
            >
              {msg}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </div>
  )
}

export default Contact
