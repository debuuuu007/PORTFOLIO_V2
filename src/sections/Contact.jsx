
import { useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState('')

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_placeholder'
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_placeholder'
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key_placeholder'

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSending(true)
    setStatus('')

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          name: formData.name,
          from_email: formData.email,
          email: formData.email,
          reply_to: formData.email,
          message: formData.message,
          subject: `Portfolio enquiry from ${formData.name || 'a visitor'}`,
        },
        publicKey
      )

      setStatus('Thanks! Your message has been sent successfully.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('Something went wrong. Please try again later.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id='contact' className='relative overflow-hidden bg-[#0f1418] px-4 py-20 sm:px-6 lg:px-8'>
      <div className='mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between'>
        <div className='max-w-2xl'>
          <div className='inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400'>
            Contact
          </div>
          <h2 className='mt-6 font-serif text-3xl text-slate-100 sm:text-4xl'>
            Let’s build something meaningful together ✨
          </h2>
          <p className='mt-4 text-lg leading-8 text-slate-400'>
            Have a project idea, a deployment challenge, or just want to say hello? Drop me a message and I’ll get back to you soon. 🚀
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className='w-full max-w-xl rounded-[2rem] border border-orange-400/30 bg-[#111820]/80 p-6 shadow-[0_0_45px_rgba(249,115,22,0.16)] backdrop-blur-xl sm:p-8'
        >
          <div className='grid gap-5'>
            <div>
              <label className='mb-2 block text-sm font-medium text-slate-200'>Name</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Your name'
                required
                className='w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/20'
              />
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium text-slate-200'>Email</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='your@email.com'
                required
                className='w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/20'
              />
            </div>

            <div>
              <label className='mb-2 block text-sm font-medium text-slate-200'>Your Query</label>
              <textarea
                rows='5'
                name='message'
                value={formData.message}
                onChange={handleChange}
                placeholder='Tell me about your idea or problem... 💬'
                required
                className='w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 outline-none transition focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/20'
              />
            </div>

            {status ? (
              <p className={`text-sm ${status.includes('successfully') ? 'text-emerald-400' : 'text-rose-400'}`}>
                {status}
              </p>
            ) : null}

            <button
              type='submit'
              disabled={isSending}
              className='rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-400 transition hover:bg-orange-400 hover:text-white disabled:cursor-not-allowed disabled:opacity-60'
            >
              {isSending ? 'Sending...' : 'Submit ✉️'}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact