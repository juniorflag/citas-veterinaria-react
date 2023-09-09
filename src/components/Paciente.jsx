const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase text-sm">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase text-sm">
        Propietario: {""}
        <span className="font-normal normal-case">Junior</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase text-sm">
        Email: {""}
        <span className="font-normal normal-case">junior@gmail.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase text-sm">
        Fecha de alta: {""}
        <span className="font-normal normal-case">12-31-2023</span>
      </p>
    </div>
  );
};

export default Paciente;
