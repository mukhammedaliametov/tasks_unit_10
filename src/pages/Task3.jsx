import React, { useEffect, useState } from "react";

const Task3 = () => {

  const [num, setNum] = useState(0);
  const [output, setOutput] = useState("");

  useEffect(() => {
    let arr = [];
    for(let i = num - 1; i >= 1; i--){
        arr.push(i);
    }
    let value = arr.join(`\n`)
    setTimeout(() => {
        setOutput(value);
    }, 1200)
  })

  return (
    <div className="my-container font-inter">
      <h3 className="text-white text-[20px] pt-[100px] md:pt-0">
        Sonlarni teskari chiqarish Funksiya argument sifatida n sonini qabul
        qiladi va n dan 1 gacha bo'lgan sonlarni for sikilda chiqaradi.
      </h3>
      <div className="mt-[40px] md:mt-[80px]">
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
        <div className="inline-flex flex-col gap-[10px] mt-[40px] w-full">
          <label htmlFor="output" className="text-white text-[22px]">
            Output:
          </label>
          <textarea
            type="text"
            value={output}
            className="w-full md:w-[450px] border border-white py-[5px] px-[15px] rounded-[10px] outline-none text-white text-[18px] opacity-20 bg-[#0000003a] resize-none h-[150px]"
            disabled
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Task3;
