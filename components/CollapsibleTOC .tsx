'use client'
import React, { useState } from 'react'
import TOCInline from 'pliny/ui/TOCInline'

const CollapsibleTOC = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="relative">
      <div className="mb-2">
        <button
          className="p-2 bg-orange-500 text-black rounded-md"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? 'Expand TOC' : 'Collapse TOC'}
        </button>
      </div>
      {!isCollapsed && <TOCInline {...props} />}
    </div>
  )
}

export default CollapsibleTOC
