import React from 'react'
import SidebarChat from './SidebarChat'
import { BiSearchAlt } from "react-icons/bi";
import Logout from './Logout';
const Sidebar = () => {
  return (
    <div className="p-4 border-r border-slate-100  h-full gap-2 flex flex-col justify-between backdrop-blur-lg backdrop-filter overflow-auto">
        <form>
          <label className="input input-bordered flex items-center  ">
            <input type="text" placeholder="Search..." className="grow" />
            <BiSearchAlt size={24}/>
          </label>
        </form>
        <div className="divider mx-2"></div>
        <ul className="gap-2 flex flex-col">
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
        </ul>
        <Logout/>
    </div>
  )
}

export default Sidebar