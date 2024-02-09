import { Link } from "react-router-dom";
import ConfigAxios from "../variabels/ConfigAxios";
import { useContext } from "react";
import DataContext from "../variabels/Context";

export default function UtamaCoba() {
  return (
    <div className=" bg-loginBackground2 h-screen bg-cover bg-no-repeat items-center justify-center flex-col font-poppins">
      <div className="bg-black p-4 border-x-8 border-y-8 border-white justify-between flex items-center">
        <div className="flex items-center space-x-2 ">
          <div className="text-white font-bold text-xl">SaruMemories</div>
          <button className="bg-black border-white border-x-4 border-y-4 text-white px-2 py-1 ">
            TAMBAH
          </button>
        </div>
        <div className="flex-grow mx-10">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded text-green-500"
          />
        </div>
        <p className="text-white font-bold text-xl ">faisal muslim</p>
      </div>
    </div>
  );
}
