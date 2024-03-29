import CoursesImages from "src/common/CoursesImages";
import React from "react";

const CourseDetail = ({ course, kind }) => {
  return (
    <div className={`flex-start-center md:gap-3 ${kind === 1 ? "" : "flex-col !justify-center"}`}>
      <CoursesImages kind={course.kind} />
      <div className="text-center">
        <p className="font-semibold pb-1.5 hidden md:block">{course?.name}</p>
      </div>
    </div>
  );
};

export default CourseDetail;
