import { useState } from "react";
import RowVerticalIcon from "public/icons/GridIcon";
import RowHorizontalIcon from "public/icons/RowIcon";
import CoursesRowElements from "./_components/CoursesRowElements";

const data = [
  { id: 1, name: "Lesson1", status: 1, rating: 4, score: 1000, speed: 30, accuracy: 100, duration: "00:04" },
  { id: 2, name: "Lesson2", status: 1, rating: 4, score: 1000, speed: 30, accuracy: 100, duration: "00:04" },
  { id: 3, name: "Lesson3", status: 1, rating: 4, score: 1000, speed: 30, accuracy: 100, duration: "00:04" },
  { id: 4, name: "Lesson4", status: 2, rating: 4, score: 1000, speed: 30, accuracy: 100, duration: "00:04" },
  { id: 5, name: "Lesson5", status: 3, rating: 4, score: 1000, speed: 30, accuracy: 100, duration: "00:04" },
  { id: 6, name: "Lesson6", status: 3, rating: 4, score: 1000, speed: 30, accuracy: 100, duration: "00:04" },
  { id: 7, name: "Lesson7", status: 3, rating: 4, score: 1000, speed: 30, accuracy: 100, duration: "00:04" },
  { id: 8, name: "Lesson8", status: 3, rating: 4, score: 1000, speed: 30, accuracy: 100, duration: "00:04" },
];

const CoursesContainer = () => {
  const [rowKind, setRowKind] = useState(1);

  return (
    <div className="w-full mx-auto px-3">
      <div className="flex-col sm:flex-row flex-between-center mb-5 gap-3">
        <p className="font-bold text-lg w-full sm:w-auto">Starting with the subject</p>
        <div className="flex-end-center gap-3 w-full sm:w-auto">
          <p className="text-gray-3">View</p>
          <div className="flex-end-center gap-2 bg-gray-3 bg-opacity-20 px-1.5 py-1 rounded-full">
            <span
              onClick={() => setRowKind(1)}
              className={`p-2 rounded-full transition ${rowKind === 1 ? " bg-mainBlue" : "cursor-pointer"}`}
            >
              <RowVerticalIcon className={`${rowKind === 1 ? "text-white" : ""}`} />
            </span>
            <span
              onClick={() => setRowKind(2)}
              className={`p-2 rounded-full transition ${rowKind === 2 ? " bg-mainBlue" : "cursor-pointer"}`}
            >
              <RowHorizontalIcon className={`${rowKind === 2 ? "text-white" : ""}`} />
            </span>
          </div>
        </div>
      </div>
      <div
        className={`${
          rowKind === 1 ? "centering flex-col gap-5" : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        } `}
      >
        {data.map((item) => (
          <CoursesRowElements key={item.id} item={item} kind={rowKind} />
        ))}
      </div>
    </div>
  );
};

export default CoursesContainer;
