import { createContext,useContext } from "react";

const ContextDeafult = createContext('valor por defecto')
const Context2 = createContext('valor por defecto 2')

const DefaultProvider = ({ children }) => {
  return(
    <ContextDeafult.Provider value={'mi valor'}>
      {children}
    </ContextDeafult.Provider>
  )
}

const Contenido = () =>{
  const ctx = useContext(ContextDeafult)
  return(
    <div>{ctx}</div>
  )
}

const Contenido2 = () =>{
  const ctx = useContext(Context2)
  return(
    <div>{ctx}</div>
  )
}

function App() {
  return (
    <DefaultProvider>
      <Contenido/>
      <Contenido2/>
    </DefaultProvider>
  );
}

export default App;
