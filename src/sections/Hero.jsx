import Photo from '../assets/HeroPhoto.png'

const Hero = () => {
  return (
    <section id='home' className='relative flex min-h-screen overflow-hidden bg-[#0f1418] px-4 py-20 sm:px-6 lg:px-8 lg:py-0'>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:gap-16'>
        <div className='flex-1 text-center lg:text-left'>
          <div className='inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-500'>
            <span className='mr-2'>Hello</span> 👋
          </div>

          <h1 className='mt-6 font-serif text-4xl leading-tight text-slate-100 sm:text-5xl lg:text-6xl'>
            Welcome to my page, I’m{' '}
            <span className='text-orange-400'>Debraj</span>, a passionate developer and CI/CD engineer based in West Bengal.
          </h1>

          <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400 lg:mx-0'>
            I create thoughtful digital experiences and guide projects from concept to delivery with a strong focus on quality, clarity, and impact.
          </p>

          <div className='mt-8 flex flex-wrap justify-center gap-4 lg:justify-start'>
            <a
              href='#projects'
              className='rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-3 text-sm font-semibold text-orange-400 transition hover:bg-orange-400 hover:text-white'
            >
              Hire Me
            </a>
            <a
              href='#contact'
              className='rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10'
            >
              Download CV
            </a>
          </div>
        </div>

        <div className='flex justify-center lg:justify-end'>
          <div className='relative'>
            <div className='absolute inset-0 rounded-[2rem] bg-orange-500/30 blur-3xl' />
            <div className='relative overflow-hidden rounded-[2rem] border border-orange-400/40 bg-gradient-to-br from-orange-500/20 to-orange-300/10 p-3 shadow-[0_0_50px_rgba(249,115,22,0.25)]'>
              <img
                src={Photo}
                alt='Hero portrait'
                className='h-72 w-72 rounded-[1.5rem] object-cover sm:h-80 sm:w-80 lg:h-96 lg:w-96'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero