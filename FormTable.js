import React, { useState } from 'react';

function FormTable() {
  const [formData, setFormData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const formDataObj = Object.fromEntries(data.entries());
    setFormData(formDataObj);
  };

  return (
    <div>
      <h2>Form Data Table</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />

        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" name="phone" id="phone" />

        <button type="submit">Submit</button>
      </form>

      <h3>Submitted Form Data:</h3>
      {Object.keys(formData).length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(formData).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No form data submitted yet</p>
      )}
    </div>
  );
}

export default FormTable;