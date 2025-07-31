'use client'
import { useState } from "react";
import toast from 'react-hot-toast'

const AmaznLinkShortenerPage = () => {
  const [inputLink, setInputLink] = useState<string>("");

  const handleInputLinkChange = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    const pastedText = e.clipboardData.getData('text')
      const pastedTextArray = pastedText.split('/')
      const regExToTest = /^[A-Z0-9]{10}$/
      const productKeyCode = pastedTextArray.findIndex(str => regExToTest.test(str))
      if(!productKeyCode || productKeyCode < 3) {
        toast.error("Please provide a valid link")
        return
      }
      const finalLink = `${pastedTextArray[0]}//${pastedTextArray[2]}/dp/${pastedTextArray[productKeyCode]}`
      navigator.clipboard.writeText(finalLink)
      toast.success("Your link has beed copied to the clipboard")
      setInputLink(finalLink);
  }

  return (
    <div className="flex mx-4 flex-col gap-4 h-screen text-gray-200">
      <h1 className="text-2xl text-center font-bold">Amazon Link Shortener</h1>
      <input
        className="w-full h-12 text-gray-800 text-xl"
        type="text"
        placeholder="Paste your amazon link here"
        value={inputLink}
        onPaste={handleInputLinkChange}
        readOnly={true}
      />
    </div>
  );
};

export default AmaznLinkShortenerPage;
