import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lokeshAdmin, ankushAdmin,setAdmin } from './changeUser/adminSlice'




const Admin = () => {

    const admin = useSelector((state) => state.admin.adminDetails);
    const dispatch = useDispatch();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return (
      <div>
        <div>
          <strong>Current Admin:</strong> {admin.userName} ({admin.password})
        </div>
        <button
          onClick={() => dispatch(lokeshAdmin())}
        >
          Lokesh Admin
        </button>
        <button
          onClick={() => dispatch(ankushAdmin())}
        >
          Ankush Admin
        </button>
        <div>
          <input
            type="text"
            placeholder='Set Admin UserName'
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder='Set admin password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button
            onClick={() => dispatch(setAdmin({ userName, password }))}
          >
            Set Admin
          </button>
        </div>
      </div>
    )
}

export default Admin