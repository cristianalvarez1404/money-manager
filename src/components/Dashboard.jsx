import React, { useContext } from 'react'
import Menubar from './MenuBar'
import Sidebar from './Sidebar';
import { AppContext } from '../context/AppContext';

const Dashboard = ({children, activateMenu}) => {
  const { user } = useContext(AppContext);
  
  return (
    <div>
        <Menubar activateMenu={activateMenu}/>
        {user && (
          <div className='flex'>
            <div className='max-[1080px]:hidden'>
              <Sidebar activateMenu={activateMenu}/>
            </div>
            <div className='grow mx-5'>{children}</div>
          </div>
        )}
    </div>
  )
}

export default Dashboard
