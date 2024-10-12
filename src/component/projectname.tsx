import { useState } from "react";
import FilterFindProject from "./filter";
import { useAtom } from "jotai";
import { projectName } from "../atom";

const ProjectPage = () => {
  const [namePj] = useAtom(projectName)
  const [isClick, setIsCllick] = useState(false);
  function click_filter() {
    setIsCllick(!isClick);
  }

  return (
    <div className="flex top-0 justify-around  p-4  border-gray-300 ">
      {/* Main Title */}
      <h1 className=" text-xl font-bold font-noto-sans ">{namePj}</h1>
      <div className="flex flex-col gap-0 min-w-64">
        {/* Filter Button */}
        <button
          className="flex items-center justify-center text-center border border-black rounded-md px-3 py-2 font-noto-sans "
          onClick={() => click_filter()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-5.5 5.5a1 1 0 00-.293.707V19a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6.086a1 1 0 00-.293-.707l-5.5-5.5A1 1 0 013 6V4z"
            />
          </svg>

          <span className="flex items-center font-noto-sans">Filter By: ชื่อโครงการ</span>
        </button>
        {isClick && <FilterFindProject />}
      </div>
    </div>
  );
};

export default ProjectPage;
