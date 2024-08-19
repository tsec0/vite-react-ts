import Person from './Person.tsx';

function App() {

  return (
    <>
      {"РАБОТИ"}
      <Person name={"Tseco"} age={22} hasFamily={false}/>
      <Person name={"Ivan"} age={25} hasFamily={true}/>
      <Person name={"Dinko"} age={26} hasFamily={false}/>
    </>
  )
}

export default App;
