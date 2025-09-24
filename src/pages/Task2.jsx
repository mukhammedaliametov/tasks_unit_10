import React, { useEffect, useState } from "react";

const Task2 = () => {

  const [num, setNum] = useState(0);
  const [output, setOutput] = useState("");

  useEffect(() => {
    if(num == undefined || num == 0){
        setOutput('')
    }else if (num < 2) {
      setTimeout(() => {
        setOutput("Yo'q");
      }, 1000)
      return;
    } else {
      for (let j = 2; j < num; j++) {
        if (num % j == 0) {
          setTimeout(() => {
            setOutput("Yo'q");
          }, 1000)
          return;
        }
      }
      setTimeout(() => {
        setOutput("Ha");
      }, 1000)
    }
  }, [num]);

  return (
    <div className="my-container font-inter">
      <h3 className="text-white text-[20px]">
        Tub sonni tekshirish Funksiya argument sifatida n sonini qabul qiladi.
        For sikli yordamida n tub son ekanligini tekshiradi (ha yoki yo'q)
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

export default Task2;
