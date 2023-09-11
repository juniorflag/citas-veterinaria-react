const Error = ({ children }) => {
  return (
    <div className="bg-red-800 text-white uppercase font-bold p-3 text-center mb-3 rounded-md ">
      {children}
    </div>
  );
};

export default Error;
