import React from "react";

const Form = () => {
  return (
    <div>
      <h3 className="w-full text-center text-2xl p-4">
        Quieres contactarme? Mandame un mensaje 😊
      </h3>
      <form
        action="https://getform.io/f/3aae5c4d-361f-47d2-9d61-beb86a192d79"
        method="POST"
        className="w-full flex flex-col items-center"
      >
        <div className="w-full my-2">
          <label className="flex items-center justify-center ">
            Nombre
            <input
              className="border-2 border-gray-200 mx-4 w-1/3"
              type="text"
              name="name"
            />
          </label>
        </div>
        <div className="w-full my-2">
          <label className="flex items-center justify-center ">
            Celular
            <input
              className="border-2 border-gray-200 mx-4 w-1/3"
              type="text"
              name="celular"
            />
          </label>
        </div>
        <div className="w-full my-2">
          <label className="flex items-center justify-center">
            Email
            <input
              className="border-2 border-gray-200 mx-4 w-2/5"
              type="email"
              name="email"
            />
          </label>
        </div>
        <div className="w-full my-2">
          <label className="flex items-center justify-center">
            Mensaje
            <textarea
              name="message"
              className="border-2 border-gray-200 mx-4 w-2/3"
            />
          </label>
        </div>
        <button
          type="submit"
          className="border-2 border-black rounded-md w-1/5"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
