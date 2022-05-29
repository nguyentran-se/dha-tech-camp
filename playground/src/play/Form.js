import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    alert(`Hi ${name}!`);
  }
  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
