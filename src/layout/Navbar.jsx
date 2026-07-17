import { useState } from 'react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 border-b border-white/10 bg-[#0f1418]/80 backdrop-blur-xl'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-7 lg:px-8'>
        {/* Brand / Logo */}
        <a href='#' className='flex items-center gap-2 text-lg font-semibold tracking-[0.3em] text-slate-100'>
          <span className='text-orange-400'>DM</span>
          <span className='text-white/90'>.</span>
        </a>

        {/* Desktop Navbar */}
        <div className='hidden items-center gap-7 md:flex'>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className='text-sm font-medium text-slate-400 transition duration-200 hover:text-orange-400'
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href='#contact'
          className='hidden rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400 transition hover:bg-orange-400 hover:text-white md:inline-flex'
        >
          Let’s Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type='button'
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className='inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-slate-100 transition hover:bg-white/10 md:hidden'
          aria-label='Toggle navigation menu'
        >
          <svg viewBox='0 0 24 24' className='h-5 w-5' fill='none' stroke='currentColor' strokeWidth='2'>
            {isMenuOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' d='M4 7h16M4 12h16M4 17h16' />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Navbar */}
      <div className={`overflow-hidden transition-all duration-300 md:hidden ${isMenuOpen ? 'max-h-22rem opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className='space-y-2 border-t border-white/10 bg-[#0f1418]/95 px-4 py-4'>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className='block rounded-xl px-3 py-3 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-orange-400'
            >
              {link.label}
            </a>
          ))}
          <a
            href='#contact'
            onClick={() => setIsMenuOpen(false)}
            className='mt-2 inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400 transition hover:bg-orange-400 hover:text-white'
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar