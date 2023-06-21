import React from "react";
import { FaEye } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsCalendar2DateFill, BsFillPencilFill } from "react-icons/bs";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

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
    <div className="min-h-screen bg-gray-800 text-4xl flex flex-col justify-start text-center text-white">
      <div className="mt-28 md:mt-32 text-left flex flex-row justify-between ml-12 mr-12 text-xl">
        <button className="text-sm md:text-lg px-4 py-2 bg-indigo-600 hover:bg-indigo-400 rounded">
          Add +
        </button>
        <button className="text-sm md:text-lg px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded">
          Sort
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">
        {DUMMY_NOTES.map((note) => (
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
                {note.content.slice(0, 100) + " ..."}
              </p>

              {/* Date */}
              <div className="flex flex-row ml-5 px-2 gap-2 justify-start">
                <BsCalendar2DateFill className="text-sm text-left text-amber-500" />
                <p className="text-sm text-left font-semibold text-amber-500">
                  {note.date}
                </p>
              </div>

              <hr className="border-indigo-600/50 mt-4" />

              <div className="flex flex-row justify-end gap-3 pb-2 m-5">
                <button className="text-sm bg-yellow-600 font-semibold py-2 px-3 hover:bg-yellow-500 rounded">
                  {/* View */}
                  <BsFillPencilFill />
                </button>
                <button className="text-sm bg-green-600 font-semibold py-2 px-3 hover:bg-green-500 rounded">
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
        ))}
      </div>
    </div>
  );
};

export default Notes;
