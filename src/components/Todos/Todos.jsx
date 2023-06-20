import React from "react";

const DUMMY_TODOS = [
  { id: 1, description: "Buy Coffee", date: "2021-09-01" },
  { id: 2, description: "Buy Coffee", date: "2021-09-01" },
  { id: 3, description: "Buy Coffee", date: "2021-09-01" },
];

const Todos = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-4xl flex flex-col justify-start text-center text-white">
      <div className="mt-28 md:mt-32 text-left flex flex-row justify-between ml-12 mr-12 text-xl">
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-400 rounded">
          Add +
        </button>
        <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded">
          Sort
        </button>
      </div>
      <div className="grid grid-cols-1 gap-10 p-10">
        {DUMMY_TODOS.map((note) => (
          <div className="">
            <div
              className="flex flex-row border border-transparent rounded-lg bg-gray-900 shadow-lg dark:shadow-gray-900 justify-evenly p-10"
              key={note.id}
            >
              <h1 className="py-5 text-lg md:text-2xl font-semibold px-2 text-violet-500 text-left">
                {note.description}
              </h1>

              {/* <p className="py-5 text-center text-lg md:text-2xl font-semibold px-2 text-amber-500">
                {note.date}
              </p> */}

              <div className="flex flex-row justify-around m-5 gap-10">
              <button className="text-xs md:text-lg bg-green-600 font-semibold py-2 px-4 hover:bg-green-500 rounded">
                Edit
              </button>

              <button className="text-xs md:text-lg bg-red-600 font-semibold py-2 px-4 hover:bg-red-500 rounded">
                Delete
              </button>
              </div>

              {/* <hr className="border-indigo-600" />

              <p className="py-5 text-sm md:text-lg font-light px-7 text-White text-left">
                {note.content.slice(0, 100) + " ..."}
              </p> */}

              {/* <div className="flex flex-row justify-around pb-5 m-5">
                <p className="text-sm py-2 px-2 font-semibold text-amber-500">
                  {note.date}
                </p>
                <button className="text-sm bg-green-600 font-semibold py-2 px-4 hover:bg-green-500 rounded">
                  View
                </button> */}
              {/* <button className="text-sm bg-green-600 font-semibold py-2 px-4 hover:bg-green-500 rounded">
                  Edit
                </button> */}
              {/* <button className="text-sm bg-red-600 font-semibold py-2 px-4 hover:bg-red-500 rounded">
                  Delete
                </button> */}
              {/* </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
