import {useEffect} from "react"
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {


  const handleEliminar = (e) => {

    const respuesta = confirm('desea eliminar el paciente');
     if(respuesta) {
      eliminarPaciente(id);
     }
  }


  const { nombre, propietario, email, fecha, sintomas,id } = paciente;
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase text-sm">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase text-sm">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase text-sm">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase text-sm">
        Fecha de alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase text-sm">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-center text-white font-bold uppercase rounded-md"
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          editar
        </button>

        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-800 text-center text-white font-bold uppercase rounded-md"
          type="button"
          onClick={handleEliminar}
        >
          eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
