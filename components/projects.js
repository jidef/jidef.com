import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'
import Marquee from './magicui/marquee'

const features = [
  {
    Icon: '',
    name: 'First',
    description: 'Search through all your files in one place.',
    href: '/',
    cta: 'Deploy',
    background: (
      <img
        src='/image1.jpg'
        className='absolute h-full w-full object-cover opacity-60 transition duration-300 ease-in-out hover:scale-110'
      ></img>
    ),
    className: 'lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3'
  },
  {
    Icon: '',
    name: 'Second',
    description: 'Search through all your files in one place.',
    href: '/',
    cta: 'Deploy',
    background: (
      <img
        src='/image5.jpg'
        className='absolute h-full w-full object-cover opacity-60 transition duration-300 ease-in-out hover:scale-110'
      ></img>
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3'
  },
  {
    Icon: '',
    name: 'Third',
    description: 'Search through all your files in one place.',
    href: '/',
    cta: 'Deploy',
    background: (
      <img
        src='/image3.jpg'
        className='absolute h-full w-full object-cover opacity-60 transition duration-300 ease-in-out hover:scale-110'
      ></img>
    ),
    className: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4'
  },
  {
    Icon: '',
    name: 'Fourth',
    description: 'Search through all your files in one place.',
    href: '/',
    cta: 'Deploy',
    background: (
      <img
        src='/image2.jpg'
        className='absolute h-full w-full object-cover opacity-60 transition duration-300 ease-in-out hover:scale-110'
      ></img>
    ),
    className: 'lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-4'
  }
]

export async function BentoDemo () {
  return (
    <BentoGrid className='lg:grid-rows-3'>
      {features.map(feature => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  )
}
