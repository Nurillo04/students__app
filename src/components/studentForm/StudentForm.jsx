import React from "react";
import { useState } from "react";
import "./StudentForm.scss";

const StudentForm = ({ addStuden }) => {
  const [data, setData] = useState({
    firstName: " ",
    lastName: " ",
    age: " ",
    phone: " ",
    email: " ",
    group: " ",
    favorite: false,
  });
  const onSubmit = (e) => {
    e.preventDefault();
    addStuden(data);
  };
  return (
    <div className="w-25 bg-info-subtle p-4 rounded  ">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="firstName">
            FirstName
          </label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            id="firstName"
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="lastName">
            LastName
          </label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            id="lastName"
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="age">
            Age
          </label>
          <input
            className="form-control"
            type="text"
            name="age"
            id="age"
            value={data.age}
            onChange={(e) => setData({ ...data, age: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="phone">
            Phone
          </label>
          <input
            className="form-control"
            type="text"
            name="phone"
            id="phone"
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="group">
            Group
          </label>
          <select
            className="form-select"
            name="group"
            id="group"
            value={data.group}
            onChange={(e) => setData({ ...data, group: e.target.value })}
          >
            <option value=""> </option>
            <option value="React N32">React N32</option>
            <option value="React N1">React N1</option>
            <option value="React N15">React N15</option>
            <option value="React N22">React N22</option>
          </select>
        </div>
        <div className="mb-3 form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="favorite"
            name="favorite"
            checked={data.favorite}
            onChange={(e) => setData({ ...data, favorite: e.target.checked })}
          />
          <label className="form-check-label" htmlFor="favorite">
            Favorite
          </label>
        </div>
        <button className="btn btn-primary w-100 ">Add Student</button>
      </form>
    </div>
  );
};

export default StudentForm;
