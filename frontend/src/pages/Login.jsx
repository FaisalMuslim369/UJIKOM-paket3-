import { Link } from "react-router-dom";
import ConfigAxios from "../variabels/ConfigAxios";
import { useContext } from "react";
import DataContext from "../variabels/Context";

export default function Login() {
  const { setUser, checkMsg } = useContext(DataContext);

  async function sendData(e) {
    e.preventDefault();
    const response = await ConfigAxios.post(
      "/api/login",
      new FormData(e.target)
    );
    if (checkMsg(response)) {
      setUser(response.data.data);
    }
  }

  return (
    <div className="flex bg-loginBackground h-screen bg-cover bg-no-repeat items-center justify-center ">
      <div className="bg-white h-80 w-96 border-8 border-black flex justify-center items-center rounded-md relative flex-col">
        <form
          onSubmit={sendData}
          className="h-max absolute flex flex-col gap-4 -top-10"
        >
          <div className="flex flex-col border-8 border-black rounded-lg overflow-hidden bg-white">
            <div className="border-b-8 p-4 border-black w-full ">
              <h1 className="bg-black text-white w-full h-10 text-center pt-2 font-bold text-md">
                sign in
              </h1>
            </div>
            <div className=" p-4 border-black w-full flex flex-col gap-3">
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
            <Link to={"/register"}className="rounded-xl border-2 border-black bg-red-500 text-white px-4 py-3 w-1/2 justify-center item-center text-center">
             Register
            </Link>
            <button className="rounded-xl border-2 border-black bg-sky-500 text-white px-4 py-3 w-1/2 btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
