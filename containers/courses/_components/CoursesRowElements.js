import StarIcon from "public/icons/StarIcon";
import { CoursesIcons, CoursesImages } from "helper/Methods";
import CoursesElementsOptions from "./CoursesElementsOptions";
import Stars from "components/common/Stars";
import Link from "next/link";

const CoursesRowElements = ({ data, kind }) => {
  return (
    <div
      className={`flex-between-center p-2 rounded-xl ${data.status === 3 ? "grayscale bg-gray-2" : "bg-white"} ${
        kind === 1 ? "w-full" : "flex-col gao-8 w-full max-w-[300px] sm:max-w-full mx-auto h-[280px] pb-8 pt-3"
      }`}
    >
      {kind === 2 && (
        <span className="flex-end-center w-full">
          <CoursesElementsOptions status={data.status} />
        </span>
      )}
      <div className={`flex-start-center gap-3 ${kind === 1 ? "" : "flex-col !justify-center"}`}>
        {CoursesImages()[data.kind]}
        <div className="text-center">
          <p className="font-semibold pb-1.5">{data?.name}</p>
          <p className="text-gray-3 text-[.65rem]">5 min . 8 exercises</p>
        </div>
      </div>

      <div className={`${kind === 1 ? "hidden md:flex-start-center gap-8" : "centering flex-col gap-3"}`}>
        <div className="centering gap-4">
          {data.status === 1 && <CoursesElements title="Starts" value={data.rating} kind={kind} star />}
          {kind === 2 && <Link href={`/courses/${data.id}`}>{CoursesIcons[data.status]}</Link>}
        </div>
        <div className={`${kind === 1 ? "hidden md:flex-start-center gap-8" : "grid grid-cols-4 gap-3"}`}>
          {data.status === 1 && (
            <>
              <CoursesElements title="Score" value={data.score} kind={kind} />
              <CoursesElements title="Speed" value={data.speed} kind={kind} />
              <CoursesElements title="Accuracy" value={data.accuracy} kind={kind} />
              <CoursesElements title="Duration" value={data.duration} kind={kind} />
            </>
          )}
        </div>
      </div>

      {kind === 1 && (
        <div className="flex-end-center gap-1">
          <Link href={`/courses/${data.id}`}>{CoursesIcons[data.status]}</Link>
          <CoursesElementsOptions status={data.status} />
        </div>
      )}
    </div>
  );
};
export default CoursesRowElements;

const CoursesElements = ({ title, value, star, kind }) => (
  <div className={`${kind === 1 ? "hidden md:flex-start-start flex-col" : "centering flex-col"} gap-2`}>
    {!star && <p className="text-gray-3 text-xs">{title}</p>}
    {star ? <Stars value={value} /> : <p className="font-bold text-xs">{value}</p>}
  </div>
);
