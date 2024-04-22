import "./App.css";
import { useState } from "react";
import FourthSem from "./FourthSem";
import FirstSem from "./FirstSem";
import FifthSem from "./FifthSem";
import SecondSem from "./SecondSem";
import ThirdSem from "./ThirdSem";
import SixthSem from "./SixthSem";
import SeventhSem from "./SeventhSem";
import EighthSem from "./EighthSem";

function App() {
  const [selectedSemester, setSelectedSemester] = useState(null);

  const renderContent = () => {
    switch (selectedSemester) {
      case "1st":
        return <FirstSem />;
      case "2nd":
        return <SecondSem />;
      case "3rd":
        return <ThirdSem />;
      case "4th":
        return <FourthSem />;
      case "5th":
        return <FifthSem />;
      case "6th":
        return <SixthSem />;
      case "7th":
        return <SeventhSem />;
      case "8th":
        return <EighthSem />;
      default:
        return <div>Please select a semester.</div>;
    }
  };

  return (
    <div className=" flex flex-col items-center py-2 gap-4">
      <h1 className="font-bold underline lg:text-4xl md:2xl">
        Welcome To Makaut Diary Contribution Site
      </h1>

      <button
        className="lg:text-4xl md:2xl outline hover:bg-black  hover:text-white rounded-md"
        onClick={() => {
          setSelectedSemester(false);
        }}
        >
        Clear The Screen
      </button>

      <div className=" w-9/12 h-20 flex flex-row overflow-y-auto gap-4 py-2  items-center   ">
        <button
          className="bg-blue-600 text-white h-10 w-60 p-2"
          onClick={() => setSelectedSemester("1st")}
        >
          <span className="pr-1 ">1st</span>Semester
          
        </button>
        <button
          className="bg-blue-600 text-white h-10 w-60 p-2"
          onClick={() => setSelectedSemester("2nd")}
        >
          <span className="pr-1 ">2nd</span>Semester
        </button>
        <button
          className="bg-blue-600 text-white h-10 w-60 p-2"
          onClick={() => setSelectedSemester("3rd")}
        >
          <span className="pr-1 ">3rd</span>Semester
        </button>
        <button
          className="bg-blue-600 text-white h-10 w-60 p-2"
          onClick={() => setSelectedSemester("4th")}
        >
         <span className="pr-1 ">4th</span>Semester
        </button>
        <button
          className="bg-blue-600 text-white h-10 w-60 p-2"
          onClick={() => setSelectedSemester("5th")}
        >
         <span className="pr-1 ">5th</span>Semester
        </button>
        <button
          className="bg-blue-600 text-white h-10 w-60 p-2"
          onClick={() => setSelectedSemester("6th")}
        >
         <span className="pr-1 ">6th</span>Semester
        </button>
        <button
          className="bg-blue-600 text-white h-10 w-60 p-2"
          onClick={() => setSelectedSemester("7th")}
        >
          <span className="pr-1 ">7th</span>Semester
        </button>
        <button
          className="bg-blue-600 text-white h-10 w-60 p-2"
          onClick={() => setSelectedSemester("8th")}
        >
         <span className="pr-1 ">8th</span>Semester
        </button>
      </div>

      <div class=" mx-auto w-auto" >{ renderContent() }</div>
    </div>
  );
}

export default App;
