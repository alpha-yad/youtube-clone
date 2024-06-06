import React from 'react'
import "./SidebarRow.css";
function SidebarRow({selected,Icon,title}) {
  return (
    <div className={`SidebarRow ${selected && "selected"}`}>
      < Icon className='SidebarRow__Icons '/>
      <h2 className='SidebarRow__title'>{title}</h2>
    </div>
  )
}

export default SidebarRow
