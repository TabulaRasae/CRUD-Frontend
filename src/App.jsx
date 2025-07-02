import React from "react";
import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import api from "./api/axiosInstance";
// import HomePage from "./components/HomePage";
// import CampusesList from "./components/CampusesList";
// import CampusForm from "./components/CampusForm";
// import SingleCampus from "./components/SingleCampus";
import StudentsList from "./components/StudentsList";
// import StudentForm from "./components/StudentForm";
import StudentCard from "./components/StudentCard";
// import SingleStudent from "./components/SingleStudent";
// import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router";

const App = () => {
  const [students, setStudents] = useState([]);
  const [campuses, setCampuses] = useState([]);

  async function fetchAllStudents() {
    try {
      const StudentResponse = await api.get(`/students`);
      console.log("✅ API StudentResponse:", StudentResponse.data);
      setStudents(StudentResponse.data);
    } catch (error) {
      console.error("Error fetching: ", error);
    }
  }

  // async function fetchAllCampuses() {
  //   try {
  //     const CampusResponse = await api.get(`/campuses`);
  //     console.log("✅ API CampusResponse:", CampusResponse.data);
  //     setCampuses(CampusResponse.data);
  //   } catch (error) {
  //     console.error("Error fetching: ", error);
  //   }
  // }

  useEffect(() => {
    // fetchAllCampuses();
    fetchAllStudents();
  }, []);

  return (
    <div>
      <h1>Campus Listing</h1>
      <NavBar />
      <div className="app">
        {/* Please consider the following routes as a draft and not final */}
        {/* I reviewed the assignment sheet and thought about the necessary components */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}

          {/* <Route
            path="/campuses"
            element={<CampusesList campuses={campuses} />}
          /> */}

          {/* <Route
            path="/campuses/new"
            element={<CampusForm mode="create" onSuccess={fetchAllCampuses} />}
          /> */}

          {/* <Route
            path="/campuses/:id/edit"
            element={<CampusForm mode="edit" onSuccess={fetchAllCampuses} />}
          /> */}

          {/* <Route path="/campuses/:id" element={<SingleCampus />} /> */}

          <Route
            path="/students"
            element={<StudentsList students={students} />}
          />

          {/* <Route
            path="/students/new"
            element={<StudentForm mode="create" onSuccess={fetchAllStudents} />}
          /> */}

          {/* <Route
            path="/students/:id/edit"
            element={<StudentForm mode="edit" onSuccess={fetchAllStudents} />}
          /> */}

          {/* 
          <Route path="/students/:id" element={<SingleStudent />} />

          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </div>
  );
};

// We're using React Router to handle the navigation between pages.
// It's important that the Router is at the top level of our app,
// and that we wrap our entire app in it. With this in place, we can
// declare Routes, Links, and use useful hooks like useNavigate.
const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
