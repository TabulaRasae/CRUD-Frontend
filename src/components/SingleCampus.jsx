import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import CampusCard from "./CampusCard";
import api from "../api/axiosInstance";
import { Link } from "react-router";
import StudentCard from "./StudentCard";
import "./SingleCampus.css";

const SingleCampus = (fetchAllStudents) => {
  const params = useParams();
  const id = params.id;

  //manage current campus state
  const [currentCampus, setCurrentCampus] = useState({});
  console.log("this is current campus", currentCampus);

  //redirect after deleting campus
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCampusWithStudents = async () => {
      try {
        //manage current campus
        const response = await api.get(`/campuses/${id}`);
        setCurrentCampus(response.data);
      } catch (error) {
        console.error("Error fetching campus: ", error);
      }
    };
    fetchCampusWithStudents();
  }, [id]);

  const handleDelete = async () => {
    try {
      await api.delete(`/campuses/${id}`);
      navigate("/campuses");
      fetchAllCampuses();
    } catch (error) {
      console.error("Error deleting campus:", error);
    }
  };
  if (!currentCampus.students) return <h3>No students on this campus</h3>; /////  Bug!
  return (
    <div className="single-campus-container">
      <section className="single-campus-top">
        <img src={currentCampus.imageURL} alt={currentCampus.name} />
        <section className="single-campus-name-description">
          <h1>{currentCampus.name}</h1>
          <h3>{currentCampus.description}</h3>
        </section>
      </section>

      <section className="single-campus-bottom">
        <h3>{currentCampus.address}</h3>
        <section className="single-campus-buttons">
          <button onClick={handleDelete}>Delete Campus</button>
          <Link to={`/campuses/${id}/edit`}>
            <button>Edit Campus</button>
          </Link>
        </section>
      </section>

      <section className="single-campus-students-container">
        <h3 className="single-campus-student-header">Students on Campus</h3>
        {currentCampus.students &&
          currentCampus.students.map((stu) => (
            <StudentCard
              key={stu.id}
              student={stu}
              fetchAllStudents={fetchAllStudents}
            />
          ))}
      </section>
    </div>
  );
};

export default SingleCampus;
