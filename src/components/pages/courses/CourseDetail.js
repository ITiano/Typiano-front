import React from "react";
import { CoursesImages } from "@helper/Methods";

const CourseDetail = ({ course, kind }) => {
  return (
    <div className={`flex-start-center gap-3 ${kind === 1 ? "" : "flex-col !justify-center"}`}>
      {CoursesImages()[course.kind]}
      <div className="text-center">
        <p className="font-semibold pb-1.5">{course?.name}</p>
      </div>
    </div>
  );
};

export default CourseDetail;
