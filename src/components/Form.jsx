import React from "react";

const Form = () => {
  return (
    <div>
      <h3 className="w-full text-center text-2xl p-4">
        Quieres contactarme? Mandame un mensaje 😊
      </h3>
      <form
        name="contact v1"
        method="post"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact v1" />
        <div>
          <label>
            Nombre <br /> <input type="text" name="first-name" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email <br /> <input id="email" type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Mensaje <br /> <textarea name="mensaje" />
          </label>
        </div>
        <button type="sumbit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
