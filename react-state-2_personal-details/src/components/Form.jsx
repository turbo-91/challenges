import { useState } from "react";
import "./Form.css";

export default function Form() {
  function handleSubmit(event, setName, setEmail) {
    event.preventDefault();
    const formElements = event.target.elements;
    setName(formElements.name.value);
    setEmail(formElements.email.value);
    formElements.name.value = "";
    formElements.email.value = "";
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
