import React, { useState } from 'react'
import Form from './components/Form'
import Table from './components/Table'
import Edit from './components/Edit'

const App = () => {
  const [isEditOpne, setisEditOpne] = useState(false)
  return (
    <div>
      <Edit isOpen={{isEditOpne ,setisEditOpne}}/>
<div className='flex flex-wrap justify-around mt-20'>
<div><Form/></div>
<div><Table isEditOpne={[isEditOpne, setisEditOpne]}/></div>
    </div>
    </div>
  )
}

export default App