import Person from './Person.tsx';
import NewPerson from './User.tsx';
import { UserProvider, Countries } from './UserContextProvider.tsx';

function App() {

  return (
    <>
      {"РАБОТИ"}
      <Person name={"Tseco"} age={22} hasFamily={false}/>
      <Person name={"Ivan"} age={25} hasFamily={true}/>
      <Person name={"Dinko"} age={26} hasFamily={false}/>
      <UserProvider>
        <NewPerson name={"Pesho"} age={24} hasFamily={false} country={Countries.Bulgaria}/>
        <NewPerson name={"Pak Ivan"} age={28} hasFamily={true} country={Countries.Bulgaria}/>
        <NewPerson name={"Pak Tseco"} age={21} hasFamily={true} country={Countries.Bulgaria}/>
      </UserProvider>
    </>
  )
}

export default App;
