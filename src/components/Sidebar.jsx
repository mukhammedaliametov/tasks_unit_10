import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [nav, setNav] = useState(location.pathname);

  const tasks = [
    { name: "Task 1", link: "/" },
    { name: "Task 2", link: "/task-2" },
    { name: "Task 3", link: "/task-3" },
    { name: "Task 4", link: "/task-4" },
    { name: "Task 5", link: "/task-5" },
    { name: "Task 6", link: "/task-6" },
    { name: "Task 7", link: "/task-7" },
  ];
  return (
      <div className="w-[300px] fixed left-0 top-0 h-screen bg-[#181818] flex items-center justify-center">
        <div className="flex flex-col gap-[20px]">
          {tasks.map((item) => (
            <Link
              to={item.link}
              onClick={() => setNav(item.link)}
              className={`border border-primary-blue py-[10px] px-[50px] text-white font-inter rounded-[10px] ${
                nav === item.link ? "bg-primary-blue border-primary-blue" : "bg-transparent"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
  );
};

export default Sidebar;
