import Image from 'next/image'
import { cn } from '@/lib/utils'
import { BentoDemo } from '@/components/projects'
import DotPattern from '@/components/magicui/dot-pattern'
import ShimmerButton from '@/components/magicui/shimmer-button'
import Particles from '@/components/magicui/particles'

export default function Home () {
  return (
    <div className='relative font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20  text-[#fff]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start w-full xl:w-[1000px] mx-auto mt-4'>
        <h1 className='font-sans list-inside list-decimal text-center sm:text-left text-3xl font-semibold'>
          Jidef / Web Developer
        </h1>
        <span className='text-center sm:text-left'>
          Architecting innovative solutions for scalable enterprise growth.
        </span>
        <div className='flex gap-4 items-center flex-col lg:flex-row'>
          <a
            className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center  text-background gap-2 hover:bg-[#ccccccf1] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 bg-foreground min-w-56 xl:min-w-44'
            href='https://github.com/jidef'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              aria-hidden
              src='/github.svg'
              alt='GitHub icon'
              width={20}
              height={20}
            />
            GitHub
          </a>
          <a
            className='rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 min-w-56 xl:min-w-44 gap-2 '
            href='https://x.com/jidef'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              aria-hidden
              src='/x.svg'
              alt='X icon'
              width={20}
              height={20}
            />
            @jidef
          </a>
          <a
            className='rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 gap-2 bg-background min-w-56 xl:min-w-44'
            href='https://youtube.com/jidef'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              aria-hidden
              src='/youtube.svg'
              alt='YouTube icon'
              width={20}
              height={20}
            />
            YouTube
          </a>
          <a
            href='mailto:contact@jidef.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ShimmerButton className='shadow-2xl'>
              <span className='whitespace-pre-wrap text-center  leading-none tracking-tight text-white dark:from-white text-sm py-0 sm:text-base flex items-center justify-center gap-2 min-w-44 xl:min-w-32'>
                <Image
                  aria-hidden
                  src='/send.svg'
                  alt='Send icon'
                  width={20}
                  height={20}
                />
                Let's talk
              </span>
            </ShimmerButton>
          </a>
        </div>
        {/* separator */}
        <div className='h-2'></div>

        <h2 className='font-sans list-inside list-decimal text-center sm:text-left text-3xl font-semibold'>
          My Projects
        </h2>
        <BentoDemo />
        {/* <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] '
          )}
        /> */}
        {/* <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] '
          )}
        /> */}
        <Particles
          className='absolute inset-0 -z-10'
          quantity={100}
          ease={80}
          color={'#ffffff'}
          refresh
        />
      </main>
    </div>
  )
}
