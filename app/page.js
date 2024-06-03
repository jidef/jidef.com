'use client'
import Image from 'next/image'
import { cn } from '@/app/lib/utils'
import GridPattern from '@/app/components/magicui/grid-pattern'

export default function Home () {
  return (
    <div className='relative font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-[#0a0a0a] text-[#fff]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <h1 className='font-sans list-inside list-decimal text-center sm:text-left text-3xl font-semibold'>
          Jidef / Software developer
        </h1>
        <span className='text-center sm:text-left'>
          Architecting innovative solutions for scalable enterprise growth
        </span>
        <div className='flex gap-4 items-center flex-col sm:flex-row'>
          <a
            className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center  text-background gap-2 hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 bg-foreground'
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
            className='rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 gap-2 bg-background'
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
            x.com/jidef
          </a>
          <a
            className='rounded-full border border-solid border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 gap-2 bg-background'
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
            youtube.com/jidef
          </a>
        </div>
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          className={cn(
            '[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] '
          )}
        />
      </main>
    </div>
  )
}
