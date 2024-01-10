import React from "react";
import "./StudentList.scss";

const StudentList = ({ student, deleteStudent }) => {
  return (
    <div className="py-2">
      {student.map((studen) => (
        <div
          className="card mt-2 mb-4 p-3 text-dark bg-white text-dark d-flex  flex-row align-items-start
         justify-content-between"
          key={studen.id}
        >
          <div>
            <h3>
              {" "}
              {studen.firstName} {studen.lastName}
            </h3>
            <p> yoshi: {studen.age}</p>
            <p>Phone: {studen.phone}</p>
            <p> Email: {studen.email}</p>
            <h5>Group: {studen.group}</h5>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-sm mr-2">🤍</button>
            <button className="btn btn-sm btn-warning mr-2">Edit</button>
            <button
              onClick={() => deleteStudent(studen.id)}
              className="btn btn-sm btn-danger"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
