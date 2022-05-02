# react-modale-jf

> Author : **_Jérôme Fromantin_**, French junior web developer.

> "react-modale-jf" is a library made with `create-react-library` which gives a full modal view displayed with a message you can choose yourself.

[![NPM](https://img.shields.io/npm/v/react-modale-jf.svg)](https://www.npmjs.com/package/react-modale-jf) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**Version:** 2.0.0

**Last Modified:** 2nd May 2022

## Installation
Run the following command: `npm install react-modale-jf`

## Library used
prop-types version 15.8.1

## Usage
The library contains one single component called `<Modale/>` with its own CSS style.

It can be used as shown below in the example code:
```jsx
import React, { useState } from 'react'

import { Modale } from 'react-modale-jf'
import 'react-modale-jf/dist/index.css'

const App = () => {
  const [open, setOpen] = useState(false)
    
  function displayModale() {
    setOpen(true)
  }

  function closeModale() {
    setOpen(false)
  }

  return (
    <div>
      <button onClick={displayModale} style={{cursor: "pointer", margin: "10px"}}>Submit</button>
      <Modale message="Employee Created!" open={open} onClose={closeModale}/>
    </div>
  )
}

export default App
```
As you can see, `<Modale/>` uses 3 props which are required to make it work at its best.
- The "message" value is of the **_string_** type. It contains of course the message you want to see in the modale.
- The "open" value is of the **_boolean_** type. It contains the state (opened or closed) of the modale.
- The "onClose" value is of the **_function_** type. It calls the function which closes the modale.

## More info
The GitHub repository containing this library can be found at:
https://github.com/Jerome-Fromantin/JeromeFromantin_14_react-modale-jf_lib.git

## Thanks
I wish to thank **_Armel Nyobe Kendeck_**, my mentor at OpenClassrooms, who helped me to improve the functioning of this library...

## License
MIT © [Jerome-Fromantin](https://github.com/Jerome-Fromantin)
