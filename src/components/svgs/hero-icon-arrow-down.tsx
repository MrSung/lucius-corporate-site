interface IProps {
  className?: string
}

export default function HeroIconArrowDown({ className = 'w-6 h-6' }: IProps) {
  return (
    <svg
      className={className}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M19 14l-7 7m0 0l-7-7m7 7V3'
      />
    </svg>
  )
}
