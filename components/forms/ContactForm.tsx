import React, { useEffect, useRef, useState, MutableRefObject, LegacyRef } from 'react'
import emailjs from '@emailjs/browser'
import { useForm, ValidationError } from '@formspree/react'

const ContactForm = ({ formspreeKey }: { formspreeKey: string }) => {
  const [state, handleSubmit] = useForm(formspreeKey)

  const form = useRef(null)
  const [succeeded, setSucceeded] = useState(false)

  const handleSend = (e: any) => {
    e.preventDefault()
    emailjs.sendForm('service_triuh5r', 'template_b95sxo6', form.current!, '545OfaJrinbIh8pM4').then(
      (result) => {
        setSucceeded(true)
      },
      (error) => {
        console.log(error.text)
      },
    )
    e.target.reset()
  }

  return (
    <form className="grid grid-cols-1 gap-4" ref={form} onSubmit={handleSend}>
      {succeeded && <div className="alert-success">Email successfully sent!</div>}
      {state.errors[0] && state.errors[0].code === 'EMPTY' && <div className="alert-error">{state.errors[0].message}</div>}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <div className="backdrop-blur-lg">
            <input type="text" name="from_name" id="name" placeholder="Your Name" className="input h-14 w-full" />
          </div>
          <ValidationError prefix="Name" field="name" errors={state.errors} className="pt-1 text-xs leading-none text-red-600" />
        </div>
        <div>
          <div className="backdrop-blur-lg">
            <input type="text" name="from_email" id="email" placeholder="Your Email" className="input h-14 w-full" />
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} className="pt-1 text-xs leading-none text-red-600" />
        </div>
      </div>
      <div>
        <div className="backdrop-blur-lg">
          <input type="text" name="subject" id="subject" placeholder="Subject" className="input h-14 w-full" />
        </div>
        <ValidationError prefix="Subject" field="subject" errors={state.errors} className="pt-1 text-xs leading-none text-red-600" />
      </div>
      <div>
        <div className="backdrop-blur-lg">
          <textarea name="message" id="message" rows={5} placeholder="Message" className="input w-full" />
        </div>
        <ValidationError prefix="Message" field="message" errors={state.errors} className="pt-1 text-xs leading-none text-red-600" />
      </div>
      <div className="mx-auto h-14 w-1/2 backdrop-blur-lg">
        <button
          disabled={state.submitting}
          className=" mx-auto block h-full w-full bg-white font-bold opacity-75 hover:opacity-100 dark:bg-black"
        >
          SEND MESSAGE
        </button>
      </div>
    </form>
  )
}

export default ContactForm
