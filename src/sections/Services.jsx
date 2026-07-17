const Services = () => {
  const services = [
    { title: 'Web Development', icon: '🌐' },
    { title: 'CI/CD Automations', icon: '⚙️' },
    { title: 'Technical Support', icon: '🛠️' },
    { title: 'Code Review', icon: '🔍' },
  ]

  const stats = [
    { value: '15+', label: 'Minor projects on Web and Automation' },
    { value: '30+', label: 'Students mentored' },
    { value: '10+', label: 'Automation projects deployed' },
  ]

  return (
    <section id='services' className='relative overflow-hidden bg-[#0f1418] px-4 py-20 sm:px-6 lg:px-8'>
      <div className='mx-auto flex max-w-7xl flex-col gap-12'>
        <div className='max-w-3xl'>
          <div className='inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400'>
            Services
          </div>
          <h2 className='mt-6 font-serif text-3xl text-slate-100 sm:text-4xl'>
            I help turn ideas into reliable digital experiences.
          </h2>
          <p className='mt-4 text-lg leading-8 text-slate-400'>
            I’m your web design partner and CI/CD helper, supporting deployment, maintenance, and smooth product growth with practical solutions.
          </p>
        </div>

        <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-4'>
          {services.map((service, index) => (
            <div
              key={service.title}
              className='group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:bg-orange-500/10'
            >
              <div className='flex items-center justify-between'>
                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-2xl text-orange-400'>
                  {service.icon}
                </div>
                <span className='text-xl text-slate-500 transition group-hover:text-orange-400'>→</span>
              </div>
              <h3 className='mt-5 text-lg font-semibold text-slate-100'>{service.title}</h3>
              <p className='mt-2 text-sm leading-7 text-slate-400'>
                Flexible support for building, shipping, and improving modern web solutions.
              </p>
            </div>
          ))}
        </div>

        <div className='grid gap-4 md:grid-cols-3'>
          {stats.map((stat) => (
            <div key={stat.label} className='rounded-2xl border border-white/10 bg-[#111820] p-6'>
              <p className='text-3xl font-semibold text-orange-400'>{stat.value}</p>
              <p className='mt-2 text-sm leading-7 text-slate-400'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services