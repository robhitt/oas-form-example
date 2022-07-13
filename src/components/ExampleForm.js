import React, { useState } from 'react';

function ExampleForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    isFriendly: false,
    favoriteMeal: 'lunch',
  });

  // destructure
  const handleChange = ({ target }) => {
    const { name, value, checked, type } = target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // console.table(formData);
  };

  return (
    <div>
      {/* <h3>Ex. Form - Local State / React Hooks</h3>
      <div>2022-07-13</div> */}

      <form>
        {/* Associate for w/ the id property */}
        {/* htmlFor as jsx is Javascript and for is a reserved word */}
        {/* Click Text Inside of a label tag will focus on the input */}
        <label htmlFor="firstName"></label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          onChange={handleChange}
          placeholder="First Name"
          value={formData.firstName}
        />

        <label htmlFor="lastName"></label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          onChange={handleChange}
          placeholder="Last Name"
          value={formData.lastName}
        />

        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          placeholder="Email"
          value={formData.email}
        />

        <label htmlFor="bio"></label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Biography"
        />

        <label
          htmlFor="isFriendly"
          style={{
            display: 'inline-block',
            padding: '8px',
            borderRadius: '5px',
          }}
          className={formData.isFriendly ? 'friendly-border' : ''}
        >
          <input
            type="checkbox"
            name="isFriendly"
            id="isFriendly"
            onChange={handleChange}
            checked={formData.isFriendly}
            style={{ border: '2px solid #000' }}
          />
          Are you friendly?
        </label>

        <fieldset style={{ marginTop: '10px' }}>
          <legend>Favorite Meal</legend>
          <input
            type="radio"
            id="breakfast"
            name="favoriteMeal"
            value="breakfast"
            checked={formData.favoriteMeal === 'breakfast'}
            onChange={handleChange}
          />
          <label htmlFor="breakfast">Breakfast</label>
          <br />
          <input
            type="radio"
            id="lunch"
            name="favoriteMeal"
            value="lunch"
            checked={formData.favoriteMeal === 'lunch'}
            onChange={handleChange}
          />
          <label htmlFor="lunch">Lunch</label>
          <br />
          <input
            type="radio"
            id="dinner"
            name="favoriteMeal"
            value="dinner"
            checked={formData.favoriteMeal === 'dinner'}
            onChange={handleChange}
          />
          <label htmlFor="dinner">Dinner</label>
        </fieldset>

        <br />

        <select
          id="favColor"
          value={formData.favColor}
          onChange={handleChange}
          name="favColor"
        >
          <option value="">-- Choose --</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
      </form>
    </div>
  );
}

export default ExampleForm;
