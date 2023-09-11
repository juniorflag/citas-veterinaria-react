import { useState } from "react";

import Header from "./components/Header";
import Formularios from "./components/Formularios";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <>
      <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 md:flex">
          <Formularios pacientes={pacientes} setPacientes={setPacientes} />
          <ListadoPacientes pacientes={pacientes} />
        </div>
      </div>
    </>
  );
}

export default App;
