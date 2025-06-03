'use client'

import Image from 'next/image'
import { toast } from 'sonner'
import ShineBorder from './shine-border'

export default function ContactButton() {
  return (
    <button
      onClick={() => {
        const email = 'tres@duck.com'
        navigator.clipboard.writeText(email).then(() => {
          toast('Email copied to clipboard!', {
            description: email,
            duration: 2000,
            className: 'bg-background'
          })
        })
      }}
    >
      <ShineBorder
        className='text-center capitalize bg-background transition-[0.6s] hover:scale-105'
        color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
      >
        <span className='whitespace-pre-wrap text-center leading-none tracking-tight text-white text-sm py-0 sm:text-base flex items-center justify-center gap-2 min-w-52 xl:min-w-40 '>
          <Image
            aria-hidden
            src='/send.svg'
            alt='Send icon'
            width={20}
            height={20}
          />
          Let&apos;s talk
        </span>
      </ShineBorder>
    </button>
  )
}
