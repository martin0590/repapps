'use client'
import SentenceBreaker from '@/components/SentenceBreaker'
import React, { useState } from 'react'

const TextTransformPage = () => {
  const [sentence, setSentence] = useState("")

  return (
    <div className='px-6 min-h-screen flex flex-col gap-10 items-center justify-start '>
      <h1 className='text-4xl font-bold '>Text Transform</h1>
      <div className='w-full flex flex-col gap-6 items-center'>
        <input className='text-gray-800 w-full p-2 text-xl rounded-lg sm:w-1/2' type="text" onChange={(e) => setSentence(e.target.value)} value={sentence}  />
        <div className='sm:w-1/2'>
          {<SentenceBreaker sentence={sentence.trim()} setSentence={setSentence}/>}
        </div>
      </div>
    </div>
  )
}

export default TextTransformPage