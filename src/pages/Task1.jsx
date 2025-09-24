import React, { useEffect, useState } from "react";

const Task1 = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (min == 0 || max == 0) {
      setOutput("");
    } else if (min > max) {
      setTimeout(() => {
        setOutput("Minimal qiymat maksimaldan katta!");
      }, 1000);
    } else {
      setTimeout(() => {
        setOutput(`min: ${min}, max: ${max}`);
      }, 1000);
    }
  });

  return (
    <div className="my-container font-inter">
      <h3 className="text-white text-[20px]">
        Sonlar orasidagi max va min Funksiya argument sifatida n va m ta sonni
        qabul qiladi. For siklidan foydalanib eng katta va eng kichik sonni
        topib qaytaradi.
      </h3>
      <div className="grid grid-cols-2 mt-[80px]">
        <div>
          <label htmlFor="min" className="text-white text-[22px]">
            Min:
          </label>
          <input
            type="number"
            id="min"
            onChange={(e) => setMin(Number(e.target.value))}
            className="border border-white focus:border-primary-blue py-[5px] px-[15px] rounded-[10px] outline-none text-white text-[18px] ml-2"
          />
        </div>
        <div>
          <label htmlFor="max" className="text-white text-[22px]">
            Max:
          </label>
          <input
            type="number"
            id="max"
            onChange={(e) => setMax(Number(e.target.value))}
            className="border border-white focus:border-primary-blue py-[5px] px-[15px] rounded-[10px] outline-none text-white text-[18px] ml-2"
          />
        </div>
        <div className="flex flex-col gap-[10px] mt-[40px]">
          <label htmlFor="output" className="text-white text-[22px]">
            Output:
          </label>
          <textarea
            type="text"
            value={output}
            className="border border-white py-[5px] px-[15px] rounded-[10px] outline-none text-white text-[18px] opacity-20 bg-[#0000003a] resize-none h-[150px]"
            disabled
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Task1;
