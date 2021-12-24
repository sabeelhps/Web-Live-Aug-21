import React from 'react'
import { Routes,Route,Link } from 'react-router-dom';

import Main from './Components/Pages/Main';
import Cat from './Components/Pages/Cat';
import Dog from './Components/Pages/Dog';

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Main Page</Link></li>
          <li><Link to="/dog">Dogs Page</Link></li>
          <li><Link to="/cat">Cats Page</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dog" element={<Dog />} />
        <Route path="/cat" element={ <Cat/>}/>
      </Routes>
    </div>
  )
}

export default App
