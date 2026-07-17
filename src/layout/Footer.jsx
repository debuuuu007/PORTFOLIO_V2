const Footer = () => {
  return (
    <footer className='border-t border-white/10 bg-[#0f1418] px-4 py-8 sm:px-6 lg:px-8'>
      <div className='mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between'>
        <div className='max-w-xl'>
          <p className='leading-7'>
            This portfolio is built on the fundamentals of the web — clean structure, thoughtful design, and smooth user experience — with a little magic of AI to shape the experience.
          </p>
        </div>

        <div className='flex flex-wrap items-center justify-center gap-4 sm:justify-end'>
          <a href='#home' className='transition hover:text-orange-400'>Home</a>
          <a href='#about' className='transition hover:text-orange-400'>About</a>
          <a href='#services' className='transition hover:text-orange-400'>Services</a>
          <a href='#contact' className='transition hover:text-orange-400'>Contact</a>
        </div>
      </div>

      <div className='mx-auto mt-6 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-4 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left'>
        <p>© 2026 <span className='font-semibold text-orange-400'>Debraj</span>. All rights reserved.</p>
        <p>Crafted with care ✨</p>
      </div>
    </footer>
  )
}

export default Footer
