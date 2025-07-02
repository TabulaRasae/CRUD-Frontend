import React from "react";
import api from "../api/axiosInstance";

const StudentCard = ({ student, fetchAllStudents }) => {
  const Delete = async () => {
    try {
      await api.delete(`/students/${student.user_id}`);
      fetchAllStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="student-card">
      <img
        src={student.imageURL}
        alt={`image of ${student.firstName} ${student.lastName}`}
        width={150}
        height={150}
      />

      <div className="student-info">
        <h3>
          {student.firstName} {student.lastName}
        </h3>
        <p>{student.email}</p>
        <p>GPA: {student.gpa.toFixed(2)}</p>
      </div>

      <button className="delete-button" onClick={Delete}>
        🗑️
      </button>
    </div>
  );
};

export default StudentCard;