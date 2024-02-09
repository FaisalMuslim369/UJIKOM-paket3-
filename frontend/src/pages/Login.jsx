import { Link } from "react-router-dom";
import ConfigAxios from "../variabels/ConfigAxios";
import { useContext } from "react";
import DataContext from "../variabels/Context";

export default function Login () {
    const {setUser,checkMsg} = useContext(DataContext);

    async function sendData (e) {
        e.preventDefault();
        const response = await ConfigAxios.post("/api/login",new FormData(e.target))
        if(checkMsg(response)){
            setUser(response.data.data)
        }
    }

    return <div className="container mx-auto">
        <div className="flex justify-center">
            <div className="w-1/2 mt-5">
                <form onSubmit={sendData} className="border p-3 rounded shadow">
                    <h2 className="text-center">Login</h2>
                    <div className="mb-3">
                        <input type="email" required={true} name="email" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <div className="mb-3">
                        <input type="password" required={true} name="password" className="w-full px-3 py-2 border rounded" />
                    </div>
                    <button className="text-center btn btn-primary mt-2 shadow w-full">Masuk</button>
                    <h6 className="text-center d-block mt-3 text-sm">Tidak punya akun bisa <Link to={"/register"} className="text-blue-500">Buat akun</Link></h6>
                </form>
            </div>
        </div>
    </div>
}
