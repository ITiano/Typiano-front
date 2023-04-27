import { CoursesImages } from "helper/Methods";

const CourseReview = ({ data }) => {
  return (
    <>
      <div className="bg-gray-3 bg-opacity-30 h-3 w-10/12 mt-14 rounded-full"></div>
      <div className="centering flex-col gap-2 w-96">
        {CoursesImages(140)[data.kind]}
        <p className=" font-semibold pb-1.5 mt-1 text-2xl">{data.name}</p>
        <p className="text-gray-3 text-xs">5min . 8 exercises</p>
        <div className="w-full centering gap-2 my-5">
          <span className="h-px bg-gray-3 bg-opacity-30 flex-1"></span>
          <span className="text-xs text-gray-3">Pro tip!</span>
          <span className="h-px bg-gray-3 bg-opacity-30 flex-1"></span>
        </div>
        <p className="text-gray-3 text-xs">this is a tip text this is a tip text this is a tip text this is a tip text </p>
        <p className="text-gray-3 text-xs">this is a tip text this is a tip text this is a tip text </p>
      </div>
    </>
  );
};

export default CourseReview;
