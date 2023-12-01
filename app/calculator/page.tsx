"use client";
import React, { useState } from "react";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const oneTimeValues: string[] = ["%", "+", "-", "/", "*", "."];

  const handleKeyClick: (e: React.MouseEvent<HTMLButtonElement>) => void = (
    e
  ) => {
    const inputValue = e.currentTarget.value;
    const InputIsArithmetic: boolean = oneTimeValues.includes(inputValue);
    const LastValueIsArithmetic: boolean = oneTimeValues.includes(
      displayValue[displayValue.length - 1]
    );
    if (displayValue.length === 1) {
      if (displayValue === "0") {
        if (!InputIsArithmetic || inputValue === "-" || inputValue === "+") {
          setDisplayValue(inputValue);
        }
      } else if (!LastValueIsArithmetic) {
        setDisplayValue(displayValue + inputValue);
      } else if (
        LastValueIsArithmetic &&
        (inputValue === "-" || inputValue === "+")
      ) {
        setDisplayValue(inputValue);
      }
    } else {
      if (LastValueIsArithmetic) {
        if (!InputIsArithmetic) {
          setDisplayValue(displayValue + inputValue);
        } else {
          setDisplayValue(displayValue.slice(0, -1) + inputValue);
        }
      } else {
        setDisplayValue(displayValue + inputValue);
      }
    }
  };

  const handleSubmit: () => void = () => {
    setDisplayValue(eval(displayValue));
  };
  const buttonStyle: string =
    " text-white transition duration-300 ease-in-out hover:shadow-sm hover:shadow-gray-500  hover:bg-opacity-75 transform hover:scale-105 focus:outline-none focus:shadow-sm focus:shadow-gray-500 active:bg-opacity-75";
  return (
    <div className="w-full h-screen flex justify-center items-center bg-texture bg-center bg-cover relative">
      <div className=" w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-400 from-30% via-fuchsia-500 via-50% to-pink-500 to-90% absolute top-10  left-40 blur-md opacity-20 md:opacity-40 shadow-2xl shadow-fuchsia-400 bg-blend-darken sm:mix-blend-lighten md:mix-blend-normal"></div>
      <div className="w-96 h-96 rounded-full bg-gradient-to-br from-indigo-600 to-pink-500 absolute bottom-10 right-56 filter blur-md opacity-20 md:opacity-70 shadow-2xl sm:mix-blend-lighten md:mix-blend-normal"></div>
      <div className="md:w-[400px] md:h-[600px] bg-gray-800 md:rounded-lg shadow-lg flex flex-col overflow-hidden divide-y divide-slate-400/25">
        <div className="w-full basis-2/6 bg-gray-900 p-2 text-gray-50  text-2xl font-bold flex justify-end items-end pr-4">
          {displayValue}
        </div>
        <div className="w-full basis-4/6 bg-gray-900 p-2 grid grid-cols-4 text-gray-50 cursor-pointer">
          <div className="grid grid-cols-3 grid-rows-5 col-span-3 gap-1">
            <button
              onClick={() => {
                setDisplayValue("0");
              }}
              className={buttonStyle}
            >
              AC
            </button>
            <button
              onClick={() => {
                displayValue.length >= 1
                  ? setDisplayValue(displayValue.trim().slice(0, -1))
                  : setDisplayValue("0");
              }}
              className={buttonStyle}
            >
              C
            </button>
            <button onClick={handleKeyClick} value="%" className={buttonStyle}>%</button>
            <button onClick={handleKeyClick} value="1" className={buttonStyle}>1</button>
            <button onClick={handleKeyClick} value="2" className={buttonStyle}>2</button>
            <button onClick={handleKeyClick} value="3" className={buttonStyle}>3</button>
            <button onClick={handleKeyClick} value="4" className={buttonStyle}>4</button>
            <button onClick={handleKeyClick} value="5" className={buttonStyle}>5</button>
            <button onClick={handleKeyClick} value="6" className={buttonStyle}>6</button>
            <button onClick={handleKeyClick} value="7" className={buttonStyle}>7</button>
            <button onClick={handleKeyClick} value="8" className={buttonStyle}>8</button>
            <button onClick={handleKeyClick} value="9" className={buttonStyle}>9</button>
            <button onClick={handleKeyClick} value="0" className={buttonStyle}>0</button>
            <button onClick={handleKeyClick} value="00" className={buttonStyle}>00</button>
            <button onClick={handleKeyClick} value="." className={buttonStyle}>.</button>
          </div>
          <div className="grid grid-rows-5 gap-1">
            <button onClick={handleKeyClick} value="+" className={buttonStyle}>+ </button>
            <button onClick={handleKeyClick} value="-" className={buttonStyle}>-</button>
            <button onClick={handleKeyClick} value="*" className={buttonStyle}>*</button>
            <button onClick={handleSubmit} className={buttonStyle}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;