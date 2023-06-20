import React from "react";

const DUMMY_NOTES = [
  {
    id: 1,
    title: "Note 1",
    content:
      "This is note 1, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    date: "2021-09-01",
  },
  {
    id: 2,
    title: "Note 2",
    content:
      "This is note 2, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2021-09-02",
  },
  {
    id: 3,
    title: "Note 3",
    content:
      "This is note 3, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2021-09-03",
  },
  {
    id: 4,
    title: "Note 4",
    content:
      "This is note 3, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2021-09-03",
  },
  {
    id: 5,
    title: "Note 5",
    content:
      "This is note 3, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2021-09-03",
  },
];

const Notes = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-4xl flex flex-col justify-center text-center text-white">
      <div className="mt-28 md:mt-32 text-left flex flex-row justify-between ml-12 mr-12 text-xl">
      <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-400 rounded">
          Add +
        </button>
        <button className="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded">
          Sort
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {DUMMY_NOTES.map((note) => (
          <div className="cursor-pointer">
            <div
              className="flex flex-col border border-transparent rounded-lg bg-gray-900 shadow-lg dark:shadow-gray-900"
              key={note.id}
            >
              <h1 className="py-5 text-center text-lg md:text-2xl font-semibold px-2 text-violet-500">
                {note.title}
              </h1>

              <hr className="border-indigo-600" />

              <p className="py-5 text-sm md:text-lg font-light px-7 text-White text-left">
                {note.content.slice(0, 100) + " ..."}
              </p>

              <div className="flex flex-row justify-around pb-5 m-5">
                <p className="text-sm py-2 px-2 font-semibold text-amber-500">
                  {note.date}
                </p>
                <button className="text-sm bg-green-600 font-semibold py-2 px-4 hover:bg-green-500 rounded">
                  View
                </button>
                {/* <button className="text-sm bg-green-600 font-semibold py-2 px-4 hover:bg-green-500 rounded">
                  Edit
                </button> */}
                <button className="text-sm bg-red-600 font-semibold py-2 px-4 hover:bg-red-500 rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
