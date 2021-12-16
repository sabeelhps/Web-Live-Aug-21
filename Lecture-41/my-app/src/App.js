
import Person from "./Components/Person";
import First from "./Components/First";

const App = () => {
  

  return(
    <div>
      <First/>
      <Person name="Kartik" age="24" favColor="orange"/>
      <Person name="Vivek"  age="23" favColor="lightgreen"/>
      <Person name="Sabeel" age="22" favColor="blue"/>
   </div>
  )

}


export default App;