import React, { useState } from 'react';

function ExampleForm() {
  const [formData, setFormData] = useState({ fullName: '', email: '' });

  const handleChange = ({ target }) => {
    setFormData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
    console.log(formData);
  };

  return (
    <div>
      <h3>Example Form</h3>
      <h4>2022-05-04</h4>

      <p>---------</p>

      <form>
        <input
          type="text"
          name="fullName"
          id="fullName"
          onChange={handleChange}
          placeholder="Placeholder Name"
          value={formData.fullName}
        />

        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          placeholder="Placeholder Email"
          value={formData.email}
        />
      </form>
    </div>
  );
}

export default ExampleForm;
