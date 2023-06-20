import Header from '@/components/Header/Header'
import React from 'react'

type Props = {
  children: JSX.Element
}

export default function MainLayout({children}: Props) {
  return (
    <div className='bg-light text-primary dark:bg-dark dark:text-primaryDark overflow-scroll z-0
    overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-indigo-200 scrollbar-thumb-indigo-300 lg:scrollbar'>
      <Header />
      {children}
    </div>
  )
}
