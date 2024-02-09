import { useContext } from "react"
import Sidebar from "../components/Sidebar"
import DataContext from "../variabels/Context"
import Navbar from "../components/Navbar";
import { Container } from "../components/Grid";

export default function Utama () {
    const {user,setUser,userFunction} = useContext(DataContext);

    return <Navbar>
        <Container>
            <h1>Hai {user.nama} <button className="btn btn-danger" onClick={() => userFunction.remove(setUser)} >logout</button> </h1>
        </Container>
        <div className="bg-loginBackground h-screen bg-cover bg-no-repeat">
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white h-72 w-96 border border-8 border-black flex justify-center items-center rounded-md"></div>
          <div className="flex justify-center items-center h-screen">
            <div className="bg-white h-72 w-96 border border-8 border-black flex justify-center items-center rounded-md">
  
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Navbar>
    
}