import React, {useState} from 'react'
import { VscSend } from "react-icons/vsc";
const MessageInput = () => {
  const [rows,setRows] = useState(1);

  const handleFocus = () => {
    setRows(2);
  }
  const handleBlur = () => {
    setRows(1);
  }
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <textarea 
        type="text" 
        className="border resize-none pe-8 text-sm rounded-lg w-full p-2.5 border-gray-500 text-stone-950"
        placeholder='Send Message...'
        rows={rows}
        onFocus={handleFocus}
        onBlur={handleBlur}
        >

        </textarea>
        <button
        type="submit"
        className="absolute inset-y-0 end-0 flex items-center pe-3">
          <VscSend size={24} className="text-sky-400"/>
        </button>
      </div>
    </form>
  )
}

export default MessageInput