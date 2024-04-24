import React from 'react'

const Message = () => {
  return (
    <div className="chat chat-start">
        <div className="chat-image avatar online">
            <div className="w-10 rounded-full">
                <img src="https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp" alt="placeholder-profile"/>
            </div>
        </div>
        <div className="chat-bubble bg-stone-50 text-stone-950">
            Hi Thura! How can I help you today?
        </div>
    </div>
  )
}

export default Message