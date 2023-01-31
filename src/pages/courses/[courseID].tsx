import React from "react";

function CoursePage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#262231] to-[#15162c]">
      <div className="m-2 flex items-center text-white">
        <div className="p-4 text-xl font-bold">
          <h1>Gr</h1>
        </div>
        <p className="mx-2 flex flex-1 items-center gap-3 rounded-lg border border-[hsl(282,10%,26%)] bg-[#302b3e] p-3">
          <svg
            aria-hidden="true"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          Search Course
        </p>
        <button
          type="button"
          className="mx-2 hidden rounded-lg bg-gradient-to-br from-[hsl(280,100%,70%)] to-[hsl(263,70%,58%)] px-5 py-3.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none md:block "
        >
          Add Grades
        </button>

        <div className="relative m-2 inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-purple-600 ">
          <span className="font-medium text-gray-200">AM</span>
        </div>
      </div>
      <div className="text-4xl font-extrabold text-white">
        APS105: Computer Fundamentals
      </div>
      <div>
        <p className="text-white">Course Average: B-</p>
      </div>
    </div>
  );
}

export default CoursePage;
