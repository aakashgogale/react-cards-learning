import React from 'react'
import Usercard from './components/Usercard'
import usersData from './data/userData'

const App = () => {
  return (
   <div className="min-h-screen bg-gray-100 p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center">
        
        {usersData.map((user) => (
          <Usercard key={user.id} user={user} />
        ))}

      </div>

    </div>
  )
}

export default App

