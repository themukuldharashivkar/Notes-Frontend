import React, { useState } from "react";
import { BsFillCalendarDateFill, BsFillPencilFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const DUMMY_TODOS = [
  {
    id: 1,
    title: "Task 1",
    content: "This is the description for this task",
    date: "2021-09-01",
  },
  {
    id: 2,
    title: "Task 2",
    content: "This is the description for this task",
    date: "2021-09-01",
  },
  {
    id: 3,
    title: "Task 3",
    content: "This is the description for this task",
    date: "2021-09-01",
  },
  {
    id: 4,
    title: "Task 4",
    content: "This is the description for this task",
    date: "2021-09-01",
  },
];

const Todos = () => {
  const [completed, setCompleted] = useState(false);
  const completeHandler = () => {
    setCompleted(!completed);
  };
  return (
    <div className="min-h-screen bg-gray-800 text-4xl flex flex-col justify-start text-center text-white">
      <div className="mt-28 md:mt-32 text-left flex flex-row justify-between ml-12 mr-12 text-xl">
        <button className="text-xs md:text-base px-4 py-2 bg-indigo-600 hover:bg-indigo-400 rounded">
          New
        </button>
        <button className="text-xs md:text-base px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded">
          Sort
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {DUMMY_TODOS.map((note) => (
          <div className="">
            <div
              className="flex flex-col border border-transparent rounded-lg bg-gray-900"
              key={note.id}
            >
              <h1 className="py-5 text-left px-7 text-lg md:text-2xl font-semibold text-violet-500">
                {note.title}
              </h1>

              <hr className="border-indigo-600" />

              <p className="py-5 text-sm md:text-lg font-light px-7 text-White text-left">
                {note.content}
              </p>

              {/* Date */}
              <div className="flex flex-row ml-5 px-2 gap-2 justify-start">
                <BsFillCalendarDateFill className="text-sm text-left text-amber-500" />
                <p className="text-sm text-left font-semibold text-amber-500">
                  {note.date}
                </p>
              </div>

              <hr className="border-indigo-600/50 mt-4" />

              <div className="flex flex-row justify-evenly">
                <div className="pb-2 m-5">
                  <button
                    className={`${'text-xs bg-blue-400 font-semibold py-2 px-3 rounded'} ${completed ? 'bg-blue-500' : 'bg-red-400'}`}
                    onClick={completeHandler}
                  >
                    {completed && "complete"}
                    {!completed && "incomplete"}
                  </button>
                </div>

                <div className="flex flex-row justify-end gap-3 pb-2 m-5">
                  <button className="text-xs md:text-sm bg-yellow-600 font-semibold py-2 px-3 hover:bg-yellow-500 rounded">
                    {/* View */}
                    <BsFillPencilFill />
                  </button>
                  <button className="text-xs md:text-sm bg-green-600 font-semibold py-2 px-3 hover:bg-green-500 rounded">
                    {/* View */}
                    <FaEye />
                  </button>
                  {/* <button className="text-sm bg-green-600 font-semibold py-2 px-4 hover:bg-green-500 rounded">
                  Edit
                </button> */}
                  <button className="text-sm bg-red-600 font-semibold py-2 px-3 hover:bg-red-500 rounded">
                    {/* Delete */}
                    <RiDeleteBin5Fill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
