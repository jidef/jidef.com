import ShineBorder from '@/components/magicui/shine-border'

export function ShineBorderDemo () {
  return (
    <a
      href='https://youtube.com/jidef'
      target='_blank'
      rel='noopener noreferrer'
    >
      <ShineBorder
        className='text-center'
        color={['#A07CFE', '#FE8FB5', '#FFBE7B']}
      >
        Contact me
      </ShineBorder>
    </a>
  )
}
