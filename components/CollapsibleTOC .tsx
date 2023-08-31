'use client'
import React, { useState } from 'react'
import TOCInline from 'pliny/ui/TOCInline'

const CollapsibleTOC = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="relative">
      <h3>Table of content</h3>
      <button
        className="p-1 bg-orange-400 text-black rounded-full flex items-center"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? (
          <>
            <span className="mr-1 text-sm" role="img" aria-label="Expand">
              ⬇️
            </span>
            <span className="text-xs">Expand</span>
          </>
        ) : (
          <>
            <span className="mr-1 text-sm" role="img" aria-label="Collapse">
              ⬆️
            </span>
            <span className="text-xs">Collapse</span>
          </>
        )}
      </button>
      {!isCollapsed && <TOCInline {...props} />}
    </div>
  )
}

export default CollapsibleTOC
