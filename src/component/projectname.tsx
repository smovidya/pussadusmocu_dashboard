import React from 'react';

const ProjectPage = () => {
    const name_pj : string = "โครงการรับน้องก้าวใหม่"
  return (
    <div className="flex justify-around items-center p-4  border-gray-300 ">
      {/* Main Title */}
      <h1 className="text-xl font-bold font-noto-sans ">
        {name_pj}
      </h1>

      {/* Filter Button */}
      <button className="flex items-center border border-black rounded-md px-3 py-2 font-noto-sans ">
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
        <span className='font-noto-sans'>Filter By: ชื่อโครงการ</span>
      </button>
    </div>
  );
};

export default ProjectPage;
