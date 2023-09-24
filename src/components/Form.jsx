import React from "react";

const Form = () => {
  return (
    <>
      <h3 className="w-full text-center text-2xl p-4">
        Quieres contactarme? Mandame un mensaje 😊
      </h3>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="flex flex-col items-center text-xl w-full"
      >
        <p className="w-full">
          <label className="flex items-center justify-center">
            Nombre:{" "}
            <input
              type="text"
              name="name"
              className="w-2/6 border-2 border-gray-200 mx-2"
            />
          </label>
        </p>
        <p className="w-full m-2">
          <label className="flex items-center justify-center">
            Email:{" "}
            <input
              className="w-2/5 h-full border-2 border-gray-200 mx-5"
              type="email"
              name="email"
            />
          </label>
        </p>
        <p className="w-full mb-2">
          <label className="flex items-center justify-center h-32">
            Mensaje:{" "}
            <textarea
              name="message"
              className="w-1/2 h-full border-2 border-gray-200 mx-2"
            ></textarea>
          </label>
        </p>
        <p className="w-full flex items-center justify-center">
          <button
            type="submit"
            className="border-black w-1/5 border-2 radius rounded-lg hover:opacity-75"
          >
            Enviar
          </button>
        </p>
      </form>
    </>
  );
};

export default Form;
