import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import EditProfileModal from './modals/EditProfileModal';

const UserProfile = () => {
  const[isEditProfileModalOpen, setIsEditProfileModelOpen]=useState(false);
  const {user}=useAuth();


  return (
   <>
     <div className='shadow grid items-center justify-center mt-20 text-xl border-2 h-70 w-200 ms-20 bg-red-200 '>
         <div>
          <span>Name:</span> <span>{user.fullName}</span>
         </div>
         <div>
          <span>Email:</span> <span>{user.email}</span>
         </div>
         <div>
          <span>Phone:</span> <span>{user.mobileNumber}</span>
         </div>

         <button className =" bg-red-500 shadow  border rounded-2xl  hover:scale-105 hover:text-white" onClick={()=>setIsEditProfileModelOpen(true)}>Edit Profile</button>
      </div>  
      {isEditProfileModalOpen && <EditProfileModal onClose={()=>setIsEditProfileModelOpen(false)}/> }
      
   </>
  )
}

export default UserProfile