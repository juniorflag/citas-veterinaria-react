import { useState } from "react";

import Header from "./components/Header";
import Formularios from "./components/Formularios";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = (id) => {
    console.log("eliminando paciente", id);

    const  pacienteEliminado = pacientes.filter(paciente => paciente.id !==  id );

    setPacientes(pacienteEliminado); 


  };

  return (
    <>
      <div className="container mx-auto mt-20">
        <Header />
        <div className="mt-12 md:flex">
          <Formularios
            pacientes={pacientes}
            setPacientes={setPacientes}
            paciente={paciente}
            setPaciente={setPaciente}
          />
          <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente = {eliminarPaciente} />
        </div>
      </div>
    </>
  );
}

export default App;
