import React from 'react'
import { FaVideo } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TiMessages} from "react-icons/ti";
import Messages from './Messages';
import MessageInput from './MessageInput';
const Conversation = () => {
  const noChatSelected = true;
  return (
    <div className="flex h-full overflow-auto  flex-col">
        {
            noChatSelected ? 
            (
                <NoChatSelected/>
            )
            :
            <>
                <div className="flex min-w-96  rounded-t-md pb-3 border-b border-slate-400 p-2 justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="avatar online">
                            <div className="w-14 rounded-full">
                                <img src="https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp" alt="placeholder-profile"/>
                            </div>
                        </div>
                        <div className="flex-col flex">
                            <h3 className="text-lg">Aye Thiri</h3>
                            <p className="text-xs text-gray-600">Active Now</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaVideo fontSize={20} className="text-stone-900" />
                        <BsThreeDotsVertical fontSize={20} className="text-stone-900"/>
                    </div>
                </div>

                <Messages/>
                <MessageInput/>

            </>
        }
    </div>
  )
}

export default Conversation


const NoChatSelected = () => {
    return ( 
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 Thura</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center"/>
            </div>
        </div>
    )
}