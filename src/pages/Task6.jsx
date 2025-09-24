import React, { useEffect, useState } from "react";

const Task6 = () => {
  const [num, setNum] = useState(0);
  const [output, setOutput] = useState("");

  return (
      <div className="my-container font-inter">
        <h3 className="text-white text-[20px]">
          Fibonachchi sonlar Funkciya argument sifatida n qabul qiladi. For
          silkli yordamida dastlabki n ta Fibonachchi sonini chiqaradi.
        </h3>
        <div className="mt-[80px]">
          <div>
            <label htmlFor="num" className="text-white text-[22px]">
              Num:
            </label>
            <input
              type="number"
              id="num"
              onChange={(e) => setNum(Number(e.target.value))}
              className="border border-white focus:border-primary-blue py-[5px] px-[15px] rounded-[10px] outline-none text-white text-[18px] ml-2"
            />
          </div>
          <div className="inline-flex flex-col gap-[10px] mt-[40px]">
            <label htmlFor="output" className="text-white text-[22px]">
              Output:
            </label>
            <textarea
              type="text"
              value={output}
              className="w-[450px] border border-white py-[5px] px-[15px] rounded-[10px] outline-none text-white text-[18px] opacity-20 bg-[#0000003a] resize-none h-[150px]"
              disabled
            ></textarea>
          </div>
        </div>
      </div>
  );
};

export default Task6;
