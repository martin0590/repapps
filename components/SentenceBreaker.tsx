import { wordStyles } from '@/constants'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const SentenceBreaker = ({ sentence, setSentence }: { sentence: string, setSentence: React.Dispatch<React.SetStateAction<string>> }) => {

  const handleCopyToClipboardButton = () => {
      navigator.clipboard.writeText(sentence)
  }

  const wordTransform = (textStyle: string, idx: number) => {
    const sentenceArr = sentence.split(' ')
    switch(textStyle) {
      case 'capitalize':
        sentenceArr[idx] = sentenceArr[idx].charAt(0).toUpperCase() + sentenceArr[idx].slice(1).toLowerCase()
        break
      case 'uppercase':
        sentenceArr[idx] = sentenceArr[idx].toUpperCase()
        break
      case 'lowercase':
        sentenceArr[idx] = sentenceArr[idx].toLowerCase()
        break
      default:
        break
    }
    const joinedSentence = sentenceArr.join(' ')
    setSentence(joinedSentence)
  }

  const capitalizeALlWords = () => {
    const sentenceArr = sentence.split(' ')
    sentenceArr.forEach((word, index) => {
      sentenceArr[index] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    const joinedSentence = sentenceArr.join(' ')
    setSentence(joinedSentence)
  }

  return (
    <div>
        <div className="flex  flex-col gap-2">
          {sentence && sentence.split(' ').map((word, index) => (
            <div key={index} className='flex gap-4 items-center'>
              <span className="">{word}</span>
              <div className='flex gap-2'>
                <button onClick={() => wordTransform('capitalize', index)} className={` border border-gray-500 p-2 rounded-lg`}>{wordStyles[0]}</button>
                <button onClick={() => wordTransform('uppercase', index)} className={` border border-gray-500 p-2 rounded-lg`}>{wordStyles[1]}</button>
                <button onClick={() => wordTransform('lowercase', index)} className={` border border-gray-500 p-2 rounded-lg`}>{wordStyles[2]}</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 gap-4 flex justify-between items-center">
          <button onClick={capitalizeALlWords} className={` border border-gray-500 p-2 rounded-lg`}>{wordStyles[0]}</button>
          <p className={`mt-4`}>{sentence}</p>
          <button onClick={handleCopyToClipboardButton}>
          <Image
            src={'/svgs/copyText.svg'}
            width={25}
            height={25}
            className='cursor-pointer'
            alt='copy text icon'
          />
          </button>
        </div>
    </div>
  )
}

export default SentenceBreaker