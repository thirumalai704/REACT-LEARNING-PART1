import React, { useState } from "react";

const Details = () => {
  //! initialize the state

  let [data, setData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    course: "",
  });

  let { firstName, lastName ,gender ,course} = data;

  let handleChange = (e) => {
    console.log(e.target);
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    setData({
      firstName: "",
      lastName: "",
      gender: "",
      course: " ",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <label>firstName</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        <br />
        <label>lastName</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
        <br />
        <div>
          <label>Gender</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={ gender ==='male'}
            onChange={handleChange}
          />
          male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={ gender ==='female'}
          />{" "}
          female
          <br />
          <label>Course :</label>
          <select name='course' value={course    } onChange={handleChange}>
            <option value="">select</option>
            <option value="java">java</option>
            <option value="python">python</option>
          </select>
        </div>
        <button>submit</button>
      </form>
    </>
  );
};

export default Details;
