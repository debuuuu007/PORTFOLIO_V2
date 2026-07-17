import reactLogo from '../assets/react.svg'
import dockerLogo from '../assets/docker.svg'
import jsLogo from '../assets/js.svg'
import pythonLogo from '../assets/python.svg'
import cppLogo from '../assets/c++.svg'
import kubernetesLogo from '../assets/kubernetes.svg'
import jenkinsLogo from '../assets/jenkins.svg'
import awsLogo from '../assets/aws.svg'
import mysqlLogo from '../assets/mysql.svg'

const completedTech = [
  { name: 'React', image: reactLogo },
  { name: 'Docker', image: dockerLogo },
  { name: 'JavaScript', image: jsLogo },
  { name: 'Python', image: pythonLogo },
  { name: 'C++', image: cppLogo },
  { name: 'Kubernetes', image: kubernetesLogo },
  { name: 'Jenkins', image: jenkinsLogo },
  { name: 'AWS', image: awsLogo },
  { name: 'MySQL', image: mysqlLogo },
]

const learningTech = ['Terraform', 'UI/UX Designing', 'Machine Learning', 'Agentic AI', 'Monitoring like Argo CD']

const About = () => {
  return (
    <section id='about' className='relative overflow-hidden bg-[#0f1418] px-4 py-20 sm:px-6 lg:px-8'>
      <div className='mx-auto flex max-w-7xl flex-col gap-12'>
        <div className='max-w-3xl'>
          <div className='inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-orange-400'>
            About
          </div>
          <h2 className='mt-6 font-serif text-3xl text-slate-100 sm:text-4xl'>
            I work at the intersection of modern web development and automation.
          </h2>
          <p className='mt-4 text-lg leading-8 text-slate-400'>
            From understanding and writing application code to designing CI/CD pipelines and Kubernetes deployments, I enjoy working across both software development and DevOps to deliver reliable, scalable solutions.
          </p>
        </div>

        <div>
          <h3 className='mb-5 text-xl font-semibold text-slate-100'>Technologies I Use</h3>
          <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
            {completedTech.map((tech) => (
              <div
                key={tech.name}
                className='relative rounded-2xl border border-orange-400/20 bg-transparent p-5 shadow-[0_0_35px_rgba(249,115,22,0.08)] transition duration-300 hover:-translate-y-1 hover:border-orange-400/50 hover:shadow-[0_0_45px_rgba(249,115,22,0.16)]'
              >
                <div className='absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 shadow-[0_0_16px_rgba(34,197,94,0.25)]'>
                  <svg viewBox='0 0 24 24' className='h-4 w-4 text-emerald-400' fill='none' stroke='currentColor' strokeWidth='2.5'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='M5 12l4 4L19 6' />
                  </svg>
                </div>
                <div className='flex flex-col items-center text-center'>
                  <div className='flex h-30 w-30 items-center justify-center rounded-2xl border border-orange-400/20 bg-transparent p-3 shadow-[0_0_25px_rgba(249,115,22,0.12)]'>
                    <img src={tech.image} alt={tech.name} className='h-full w-full object-contain' />
                  </div>
                  <p className='mt-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-100'>
                    {tech.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className='mb-5 text-xl font-semibold text-slate-100'>Currently Learning</h3>
          <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
            {learningTech.map((tech) => (
              <div key={tech} className='rounded-2xl border border-white/10 bg-[#111820] p-5'>
                <div className='flex items-center gap-3'>
                  <div className='flex h-10 w-10 items-center justify-center rounded-full border border-orange-400/30 bg-orange-500/10'>
                    <div className='h-4 w-4 animate-spin rounded-full border-2 border-orange-400 border-t-transparent' />
                  </div>
                  <div>
                    <p className='text-sm font-semibold uppercase tracking-[0.25em] text-slate-100'>{tech}</p>
                    <p className='mt-1 text-sm text-orange-400'>On progress</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About