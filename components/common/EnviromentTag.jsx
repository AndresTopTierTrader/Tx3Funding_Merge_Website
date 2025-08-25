import React from 'react'
import { ENVIRONMENT } from '@/constants/global';


function EnvironmentTag() {
  return (
    <div>
      {
        ENVIRONMENT == 'development' && (
          <div className="fixed right-0 -mr-20 md:-mr-24 top-1/4 transform  z-50">
            <div className="transform bg-yellow-400 rounded-t-2xl text-xl md:text-2xl px-4 py-2 -rotate-90 whitespace-nowrap  font-medium tracking-wider">
              DEVELOPMENT
            </div>
          </div>
        )
      }
    </div>
  )
}

export default EnvironmentTag