import React from 'react'

const SidebarChat = () => {
  return (
    <li className="flex  hover:bg-stone-50 hover:text-stone-950 cursor-pointer m-1 unread rounded-md px-2 py-1 min-w-80 justify-between items-center gap-2">
            <div className="flex items-center gap-2">
                <div className="avatar online">
                    <div className="w-14 rounded-full">
                        <img src="https://pics.craiyon.com/2023-06-20/89f79a8dee744596981e7417b8a7ea1d.webp" alt="placeholder-profile"/>
                    </div>
                </div>
                <div className="flex flex-col justify-between h-14 ">
                    <h3>Aye Thiri</h3>
                    <p className="text-ellipsis overflow-hidden whitespace-nowrap w-40">Koe Koe Ko Chit Tl Have Sex lote chin tl</p>
                </div>

            </div>
            <div className="flex flex-col h-14  justify-between items-end ">
                <p className="text-sm">12:35pm</p>
                <span className="rounded-full bg-blue-600  w-2 h-2"></span>
            </div>
    </li>
  )
}

export default SidebarChat