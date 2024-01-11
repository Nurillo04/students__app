import React, { useState } from "react";

import "./Students.scss";

import StudentForm from "../studentForm/StudentForm";
import StudentList from "../studentList/StudentList";
import { useEffect } from "react";

const Student = () => {
  const studentLocal = JSON.parse(localStorage.getItem("student")) || [];
  const [showFavorite, setshowFavorite] = useState(false);
  const [student, setStudent] = useState(studentLocal);
  const [search, setSearch] = useState(" ");
  const [filter, setFilter] = useState("All");
  // const [filteredStudent, setFilteredStudent] = useState(student);
  const [searchedStudent, setSearchedStudent] = useState(student);
  const [studentToSend, setStudentToSend] = useState(student);

  // ([
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     age: 23,
  //     phone: "+998901234567",
  //     email: "domen@gmail.com",
  //     group: "React N32",
  //   },
  //   {
  //     firstName: "Tom",
  //     lastName: "Smiths",
  //     age: 24,
  //     phone: "+998971234567",
  //     email: "domen@gmail.com",
  //     group: "React N1",
  //   },
  //   {
  //     firstName: "Jane",
  //     lastName: "Doe",
  //     age: 25,
  //     phone: "+998991234567",
  //     email: "domen@gmail.com",
  //     group: "React N15",
  //   },
  // ]);
  const addStuden = (studen) => {
    const newStudent = [
      { id: Math.floor(Math.random() * 100000), ...studen },
      ...student,
    ];
    setStudent(newStudent);
    localStorage.setItem("student", JSON.stringify(newStudent));
  };

  const deleteStudent = (id) => {
    if (confirm("Are you sure you want to delete this studetn?")) {
      const newStudent = student.filter((st) => st.id !== id);
      setStudent(newStudent);
      localStorage.setItem("student", JSON.stringify(newStudent));
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    searchStudent(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    const newStudent =
      e.target.value === "All"
        ? student
        : student.filter((st) => st.group === e.target.value);
    setStudentToSend(newStudent);
  };

  const searchStudent = (text) => {
    const searchedStudentList = student.filter(
      (st) =>
        st.firstName.trim().toLowerCase().includes(text.toLowerCase()) ||
        st.lastName.trim().toLowerCase().includes(text.toLowerCase()) ||
        st.phone.trim().toLowerCase().includes(text.toLowerCase())
    );
    setSearchedStudent(searchedStudentList);
  };

  useEffect(() => {
    searchStudent(search);
  }, [search, student]);

  return (
    <div className="container py-3 d-flex align-items-start justify-content-between">
      <div className="w-50    ">
        <form className="d-flex mb-3">
          <input
            className="form-control"
            id="search"
            name="search"
            type="text"
            placeholder="Search "
            value={search}
            onChange={handleSearchChange}
          />
          <select
            name="filter"
            id="filter"
            className="form-select "
            value={filter}
            onChange={handleFilterChange}
          >
            <option value="All">All</option>
            <option value="React N32">React N32</option>
            <option value="React N1">React N1</option>
            <option value="React N15">React N15</option>
            <option value="React N22">React N22</option>
          </select>
          <select name="sort" id="sort" className="form-select">
            <option value="Sort">Sort</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
        </form>
        <div>
          <div>
            <button
              onClick={() => setshowFavorite(false)}
              className={`btn ${showFavorite ? "  " : " btn - primary"} w-50`}
            >
              All({student.length})
            </button>
            <button
              onClick={() => setshowFavorite(true)}
              className={`btn ${showFavorite ? "btn - primary" : "  "} w-50`}
            >
              Favorite({student.filter((st) => st.favorite).length})
            </button>
          </div>
          <StudentList
            student={
              showFavorite
                ? studentToSend.filter((st) => st.favorite)
                : studentToSend
            }
            deleteStudent={deleteStudent}
          />
        </div>
      </div>

      <StudentForm addStuden={addStuden} />
    </div>
  );
};

export default Student;
