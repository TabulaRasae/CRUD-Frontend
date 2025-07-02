
import React from 'react'

const StudentsList = () => {
  return (
    <div>
      
    </div>
  )
}

export default StudentsList

import React from "react";
import StudentCard from "./StudentCard";

const StudentsList = ({ students = [], fetchAllStudents }) => {
  return (
    <div>
      {students.map((stu) => (
        <StudentCard
          key={stu.user_id}
          student={stu}
          fetchAllStudents={fetchAllStudents}
        />
      ))}
    </div>
  )
};

export default StudentsList;
