import React, { useState } from 'react'

import { ExampleComponent, Modale } from 'react-modale-jf'
import 'react-modale-jf/dist/index.css'

const App = () => {
  const [open, setOpen] = useState(false)
    
  function displayModale() {
    setOpen(true)
  }

  function closeModale() {
    setOpen(false)
  }

  return (<div>
    <ExampleComponent text="Create React Library Example 😄" />
    <div>
      <button onClick={displayModale} style={{cursor: "pointer", margin: "10px"}}>Submit</button>
      <Modale message="Employee Created!" open={open} onClose={closeModale}/>
    </div>
  </div>)
}

export default App
