import React from "react";
import { type NextPage } from "next";
import { BiDownvote, BiUpvote } from "react-icons/bi";
import Link from "next/link";

const Courses: NextPage = () => {
  // Use serverSide (getServerSideProps) to fetch all course id's and codes
  // map course id's using course card component
  // Course card only fetches name, course code, upvotes, downvotes
  // Clicking on course card -> takes you to dynamic course route defined by [course_code]
  // THEN that page fetches specific info like grade history, instructores, syllabi
  const arr = new Array(40).fill(0);
  return (
    <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col bg-gradient-to-b from-[#262231] to-[#15162c]">
      {/* Navbar */}
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
      <div className="overflow-y-scroll">
        <div className="grid grid-cols-1 gap-3 p-5 md:grid-cols-2 lg:grid-cols-3">
          {arr.map((item) => {
            return (
              <Link href="/courses/APS105H1">
                <div className="relative flex flex-1 cursor-pointer items-center rounded border border-[#6f568469] bg-[hsla(263,24%,23%,1)] py-2 pl-2 pr-5 transition-all hover:border-[hsl(280,43%,72%)]">
                  <div className="absolute right-3 top-2 rounded bg-[#4b435d] px-2 py-1 text-xs font-medium text-gray-200">
                    ENG
                  </div>
                  <div className="flex flex-col items-center text-[#6e6d6f] transition-colors">
                    <div className="hover:text-[#b177ea]">
                      <BiUpvote size={25} />
                    </div>
                    <p className="text-xs font-semibold text-white">
                      54
                    </p>
                    <div className="hover:text-[#b177ea]">
                      <BiDownvote size={25} />
                    </div>
                  </div>
                  <div className="ml-3 text-white">
                    <p>
                      <span className="font-semibold">APS105</span>: Computer
                      Fundamentals
                    </p>
                    <p className="text-gray-400">Average: B-</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
