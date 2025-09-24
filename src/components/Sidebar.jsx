import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

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
    <>
      <div className="w-[300px] fixed left-0 top-0 h-screen bg-[#181818] hidden md:flex items-center justify-center">
        <div className="hidden md:flex flex-col gap-[20px]">
          {tasks.map((item) => (
            <Link
              to={item.link}
              onClick={() => setNav(item.link)}
              className={`border border-primary-blue py-[10px] px-[50px] text-white font-inter rounded-[10px] ${
                nav === item.link
                  ? "bg-primary-blue border-primary-blue"
                  : "bg-transparent"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden md:hidden fixed w-full py-[20px] px-[30px]  bg-[#181818]">
        <div className="flex justify-between gap-[10px] overflow-x-scroll md:overflow-x-visible">
          {tasks.map((item) => (
            <Link
              to={item.link}
              onClick={() => setNav(item.link)}
              className={`border border-primary-blue py-[10px] px-[20px] text-white font-inter rounded-[10px] ${
                nav === item.link
                  ? "bg-primary-blue border-primary-blue"
                  : "bg-transparent"
              }`}
            >
              {item.name[5]}
            </Link>
          ))}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Sidebar;
