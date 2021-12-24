import React,{Fragment} from 'react';
import { Routes,Route} from 'react-router-dom';
import MainNavigation from './Components/MainNavigation/MainNavigation';


import AllQuotes from './Components/Pages/AllQuotes';
import NewQuote from './Components/Pages/NewQuote';
import ShowQuotes from './Components/Pages/ShowQuotes';


const App = () => {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<AllQuotes />} />
          <Route path="/new" element={<NewQuote />} />
          <Route path="/quotes/:id" element={<ShowQuotes/> }/>
        </Routes>
      </main>
    </Fragment>
  )
}

export default App
