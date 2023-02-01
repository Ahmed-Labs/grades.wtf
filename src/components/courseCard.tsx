import React from "react";
import Link from "next/link";
import { BiDownvote, BiUpvote } from "react-icons/bi";

type Props = {
  id: string;
  courseName: string;
  courseCode: string;
};

// id        String  @id @default(auto()) @map("_id") @db.ObjectId
// name      String  @unique
// code      String @unique
// grades    Grade[]
// syllabi   Syllabus[]
// instructors Instrucor[]
// upvotes   Int
// downvotes Int
// <courseCard key={id} />

function courseCard({ id, courseName, courseCode }: Props) {

    // useEffect(() => {
    //   first
    
    //   return () => {
    //     second
    //   }
    // }, [third])
    
  return (
    <div>
      <Link
        as="/courses/[course]"
        href={{ pathname: "/courses/[course]", query: { course: courseCode } }}
      >
        <div className="relative flex flex-1 cursor-pointer items-center rounded border border-[#6f568469] bg-[hsla(263,24%,23%,1)] py-2 pl-2 pr-5 hover:border-[hsl(280,43%,72%)] hover:transition-all">
          <div className="absolute right-3 top-2 rounded bg-[#3f394e] px-2 py-1 text-xs font-medium text-gray-200">
            ENG
          </div>
          <div className="flex flex-col items-center text-[#6e6d6f]">
            <BiUpvote size={25} />
            <p className="text-xs font-semibold text-white">54</p>
            <BiDownvote size={25} />
          </div>
          <div className="ml-3 text-white">
            <p>APS105: Computer Fundamentals</p>
            <p className="text-gray-400">Recent Avg: B-</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default courseCard;
