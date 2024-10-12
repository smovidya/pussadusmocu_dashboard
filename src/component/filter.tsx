import { useAtom } from "jotai";
import React, { useState } from "react";
import { projectName } from "../atom";

const FilterFindProject: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [, setNamePj] = useAtom(projectName)
  
  // ตัวอย่างรายการโครงการ
  const projects = [
    "โครงการก้าวหน้า",
    "โครงการรับน้องก้าว",
    "โครงการรับน้องก้าวไกล",
  ];

  // ฟิลเตอร์รายการตามคำค้น
  const filteredProjects = projects.filter((project) =>
    project.includes(searchTerm)
  );
 
  return (
    <div className= "flex justify-around items-center p-4  border-gray-300">
      <div className="rounded-md px-3 py-2  shadow-lg font-noto-sans ">
        {/* ช่องค้นหา */}
        <input
          type="text"
          placeholder="ค้นหาโครงการ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* รายการโครงการ */}
        <div className="space-y-2">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`p-3 border rounded-lg ${
                selectedProject === project
                  ? "bg-gray-100"
                  : "hover:bg-gray-100"
              } cursor-pointer`}
              onClick={() => {
                setSelectedProject(project);
                setNamePj(project)
              }}
            >
              {project}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterFindProject;