"use client";
import React from "react";
import { GridIcon, RowIcon } from "@assets/icons/icons";

const KindSwitcherSection = ({ kind, setKind }) => {
  return (
    <section className="flex-col sm:flex-row flex-between-center mb-5 gap-3">
      <p className="font-bold text-lg w-full sm:w-auto">Starting with the subject</p>
      <div className="flex-end-center gap-3 w-full sm:w-auto">
        <p className="text-gray-800">View</p>
        <div className="flex-end-center gap-2 bg-gray-800 bg-opacity-20 px-1.5 py-1 rounded-full">
          <span
            onClick={() => setKind && setKind(1)}
            className={`p-2 rounded-full transition ${kind === 1 ? " bg-primary-900" : "cursor-pointer"}`}
          >
            <GridIcon className={`${kind === 1 ? "text-white" : ""}`} />
          </span>
          <span
            onClick={() => setKind && setKind(2)}
            className={`p-2 rounded-full transition ${kind === 2 ? " bg-primary-900" : "cursor-pointer"}`}
          >
            <RowIcon className={`${kind === 2 ? "text-white" : ""}`} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default KindSwitcherSection;
