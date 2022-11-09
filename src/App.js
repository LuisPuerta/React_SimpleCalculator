import "./App.css";
import { useState } from "react";

function App() {
  const [operation, setOperation] = useState("");

  function handleChange(e) {
    const char = e.nativeEvent.data;

    if (parseInt(char)) setOperation(operation.concat(char));
    if (
      char === "*" ||
      char === "/" ||
      char === "+" ||
      char === "-" ||
      char === "." ||
      char === "(" ||
      char === ")"
    )
      setOperation(operation.concat(char));
  }

  function handleClick(e) {
    setOperation(operation.concat(e.target.name));
  }

  function handleKeyDown(e) {
    if (e.code === "Enter" || e.code === "NumpadEnter") resolve();
    else if (e.code === "Backspace") deleteLast();
  }

  function clearCalculator() {
    setOperation("");
  }

  function deleteLast() {
    setOperation(operation.slice(0, -1));
  }

  function resolve() {
    try {
      const result = eval(operation).toString();
      setOperation(result);
    } catch (err) {
      setOperation("Error!");
      setTimeout(() => {
        setOperation("");
      }, 500);
      
      console.error(err);
    }
  }

  return (
    <div className="mt-10">
      <div className="title text-center text-3xl font-medium text-white">Simple calculator</div>
      <div className="calculator grid grid-cols-4 w-[500px] m-auto mt-2 rounded bg-zinc-700 p-1">
        <input
          type="text"
          className="operation text-stone-800 text-2xl font-bold  text-right p-1 rounded w-full col-span-4"
          value={!operation ? "0" : operation}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />

        <button
          name="clear"
          className="bg-blue-600 rounded p-1 m-1 font-semibold text-xl text-white hover:bg-blue-700 active:scale-75 duration-100"
          onClick={clearCalculator}
        >
          Clear
        </button>

        <button
          name="deleteLast"
          className="bg-blue-600 rounded p-1 m-1 font-semibold text-xl text-white hover:bg-blue-700 active:scale-75 duration-100"
          onClick={deleteLast}
        >
          <i className="mdi mdi-backspace"></i>
        </button>

        <button
          name="/"
          className="bg-blue-600 rounded p-1 m-1 font-semibold text-xl text-white hover:bg-blue-700 active:scale-75 duration-100"
          onClick={handleClick}
        >
          /
        </button>

        <button
          name="*"
          className="bg-blue-600 rounded p-1 m-1 font-semibold text-xl text-white hover:bg-blue-700 active:scale-75 duration-100"
          onClick={handleClick}
        >
          X
        </button>

        <button
          name="7"
          className="bg-sky-800 rounded p-1 m-1 font-semibold text-3xl text-white hover:bg-sky-900 active:scale-75 duration-100"
          onClick={handleClick}
        >
          7
        </button>
        <button
          name="8"
          className="bg-sky-800 rounded p-1 m-1 font-semibold text-3xl text-white hover:bg-sky-900 active:scale-75 duration-100"
          onClick={handleClick}
        >
          8
        </button>
        <button
          name="9"
          className="bg-sky-800 rounded p-1 m-1 font-semibold text-3xl text-white hover:bg-sky-900 active:scale-75 duration-100"
          onClick={handleClick}
        >
          9
        </button>
        <button
          name="-"
          className="bg-blue-600 rounded p-1 m-1 font-semibold text-xl text-white hover:bg-blue-700 active:scale-75 duration-100"
          onClick={handleClick}
        >
          -
        </button>
        <button
          name="4"
          className="bg-sky-800 rounded p-1 m-1 font-semibold text-3xl text-white hover:bg-sky-900 active:scale-75 duration-100"
          onClick={handleClick}
        >
          4
        </button>
        <button
          name="5"
          className="bg-sky-800 rounded p-1 m-1 font-semibold text-3xl text-white hover:bg-sky-900 active:scale-75 duration-100"
          onClick={handleClick}
        >
          5
        </button>
        <button
          name="6"
          className="bg-sky-800 rounded p-1 m-1 font-semibold text-3xl text-white hover:bg-sky-900 active:scale-75 duration-100"
          onClick={handleClick}
        >
          6
        </button>

        <button
          name="+"
          className="bg-blue-600 rounded p-1 m-1 font-semibold text-xl text-white hover:bg-blue-700 active:scale-75 duration-100"
          onClick={handleClick}
        >
          +
        </button>

        <button
          name="1"
          className="bg-sky-800 rounded p-1 m-1 font-semibold text-3xl text-white hover:bg-sky-900 active:scale-75 duration-100"
          onClick={handleClick}
        >
          1
        </button>
        <button
          name="2"
          className="bg-sky-800 rounded p-1 m-1 col-span-1 font-semibold text-3xl text-white hover:bg-sky-900 active:scale-75 duration-100"
          onClick={handleClick}
        >
          2
        </button>
        <button
          name="3"
          className="bg-sky-800 rounded p-1 m-1 font-semibold text-3xl text-white hover:bg-sky-900 active:scale-75 duration-100"
          onClick={handleClick}
        >
          3
        </button>

        <button
          type="submit"
          name="intro"
          className="bg-cyan-700 rounded p-1 m-1 row-span-2 cursor-pointer font-semibold text-3xl text-white hover:bg-sky-900 active:scale-75 duration-100"
          onClick={resolve}
        >
          Intro
        </button>

        <button
          name="0"
          className="bg-sky-800 rounded p-1 m-1 col-span-2 font-semibold text-3xl text-white hover:bg-sky-900 active:scale-75 duration-100"
          onClick={handleClick}
        >
          0
        </button>
        <button
          name="."
          className="bg-sky-800 rounded p-1 m-1 font-semibold text-3xl text-white hover:bg-sky-900 active:scale-75 duration-100"
          onClick={handleClick}
        >
          .
        </button>
      </div>
    </div>
  );
}

export default App;
