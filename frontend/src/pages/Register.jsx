import { Link, useNavigate } from "react-router-dom";
import ConfigAxios from "../variabels/ConfigAxios";
import { useContext } from "react";
import DataContext from "../variabels/Context";

export default function Register () {
    const {checkMsg} = useContext(DataContext);
    const nav = useNavigate();

    async function sendData (e) {
        e.preventDefault();
        const response = await ConfigAxios.post("/api/user",new FormData(e.target));
        if(checkMsg(response)){
            nav("/");
        }
    }

    return <div className="flex justify-center">
        <div className="mt-5 w-1/2">
            <form onSubmit={sendData} className="border p-3 rounded shadow-lg">
                <h2 className="text-center" >Register</h2>
                <div className="mb-3">
                    <input type="text" required={true} name="nama" className="w-full px-3 py-2 border rounded-md" />
                </div>
                <div className="mb-3">
                    <input type="email" required={true} name="email" className="w-full px-3 py-2 border rounded-md" />
                </div>
                <div className="mb-3">
                    <input type="password" required={true} name="password" className="w-full px-3 py-2 border rounded-md" />
                </div>
                <button className="text-center btn btn-primary mt-2 shadow-lg w-full" >Buat</button>
                <h6 className="text-center d-block mt-3 text-sm" >Sudah punya akun bisa langsung <Link to={"/"} >masuk</Link></h6>
            </form>
        </div>
    </div>
}
