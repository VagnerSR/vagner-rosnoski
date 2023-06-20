import React from 'react'

type Props = {
  text: string
}

export default function SectionTitle({ text }: Props) {
  return (
    <h4 className='uppercase tracking-[10px] text-secondary dark:text-secondaryDark text-2xl lg:text-3xl'>
      {text}
    </h4>
  )
}
