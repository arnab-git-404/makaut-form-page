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
    <div className=" flex flex-col items-center">
      <h1 className="font-bold underline lg:text-4xl md:2xl">
        Welcome To Makaut Diary Contribution Site
      </h1>

      <button
        className="lg:text-4xl md:2xl"
        onClick={() => {
          setSelectedSemester(false);
        }}
      >
        Clear The Screen
      </button>

      <div className=" w-8/12 flex flex-row overflow-y-auto gap-4 py-2">
        <button
          className="bg-blue-600 text-white h-8 w-60"
          onClick={() => setSelectedSemester("1st")}
        >
          1st Semester
        </button>
        <button
          className="bg-blue-600 text-white h-8 w-60"
          onClick={() => setSelectedSemester("2nd")}
        >
          2nd Semester
        </button>
        <button
          className="bg-blue-600 text-white h-8 w-60"
          onClick={() => setSelectedSemester("3rd")}
        >
          3rd Semester
        </button>
        <button
          className="bg-blue-600 text-white h-8 w-60"
          onClick={() => setSelectedSemester("4th")}
        >
          4th Semester
        </button>
        <button
          className="bg-blue-600 text-white h-8 w-60"
          onClick={() => setSelectedSemester("5th")}
        >
          5th Semester
        </button>
        <button
          className="bg-blue-600 text-white h-8 w-60"
          onClick={() => setSelectedSemester("6th")}
        >
          6th Semester
        </button>
        <button
          className="bg-blue-600 text-white h-8 w-60"
          onClick={() => setSelectedSemester("7th")}
        >
          7th Semester
        </button>
        <button
          className="bg-blue-600 text-white h-8 w-60"
          onClick={() => setSelectedSemester("8th")}
        >
          8th Semester
        </button>
      </div>

      <div class=" max-w-screen-md mx-auto" >{renderContent()}</div>
    </div>
  );
}

export default App;
