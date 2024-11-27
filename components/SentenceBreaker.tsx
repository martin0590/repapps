import { wordStyles } from '@/constants'
import Image from 'next/image'

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
    <div className='flex flex-col gap-4'>
        <div className="flex  flex-col gap-3">
          {sentence && sentence.split(' ').map((word, index) => (
            <div key={index} className='flex gap-4 items-center justify-between'>
              <span className="font-semibold">{word}</span>
              <div className='flex gap-2'>
                <button onClick={() => wordTransform('capitalize', index)} className={`hover:bg-slate-700 border border-gray-500 p-2 rounded-lg`}>{wordStyles[0]}</button>
                <button onClick={() => wordTransform('uppercase', index)} className={`hover:bg-slate-700 border border-gray-500 p-2 rounded-lg`}>{wordStyles[1]}</button>
                <button onClick={() => wordTransform('lowercase', index)} className={`hover:bg-slate-700 border border-gray-500 p-2 rounded-lg`}>{wordStyles[2]}</button>
              </div>
            </div>
          ))}
        </div>
        <button onClick={capitalizeALlWords} className={`hover:bg-slate-700 border border-gray-300 p-2 rounded-lg  w-full`}>Capitalize All</button>
        <div className="flex justify-between items-center ">
          <p className={` bg-slate-700 font-semibold p-2 rounded-lg rounded-r-none w-full`}>{sentence}</p>
          <button className='p-2 bg-slate-700 rounded-lg rounded-l-none hover:bg-slate-700' onClick={handleCopyToClipboardButton}>
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