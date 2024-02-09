import { Link, useNavigate } from "react-router-dom";
import ConfigAxios from "../variabels/ConfigAxios";
import { useContext } from "react";
import DataContext from "../variabels/Context";

export default function RegisCoba() {
  const { checkMsg } = useContext(DataContext);
  const nav = useNavigate();

  async function sendData(e) {
    e.preventDefault();
    const response = await ConfigAxios.post(
      "/api/user",
      new FormData(e.target)
    );
    if (checkMsg(response)) {
      nav("/");
    }
  }

  return (
    <div className="flex bg-loginBackground h-screen bg-cover bg-no-repeat items-center justify-center ">
      <div className="bg-white h-96 w-96 border border-8 border-black flex justify-center items-center rounded-md relative flex-col">
        <form
          onSubmit={sendData}
          className="h-max absolute flex flex-col gap-4 -top-10"
        >
          <div className="flex flex-col border-8 border-black rounded-lg overflow-hidden bg-white">
            <div className="border-b-8 p-4 border-black w-full ">
              <h1 className="bg-black text-white w-full h-10 text-center pt-2 text-md">
                sign up
              </h1>
            </div>
            <div className=" p-4 border-black w-full flex flex-col gap-3">
              <input
                type="text"
                required={true}
                name="nama"
                placeholder="Enter your name"
                className="w-full px-3 py-2 rounded border-4 border-black"
              />

              <input
                type="email"
                required={true}
                name="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded border-4 border-black"
              />

              <input
                type="password"
                required={true}
                name="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 rounded border-4 border-black"
              />
            </div>
          </div>
          <div className="flex justify-between gap-3">
            <Link
              to="/logincoba"
              className="rounded-xl border-2 border-black border bg-red-500 text-white px-4 py-3 w-1/2 text-center"
            >
              Login
            </Link>
            <button className="rounded-xl border-2 border-black bg-sky-500 border text-white px-4 py-3 w-1/2 btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
