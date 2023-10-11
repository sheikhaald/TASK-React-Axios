import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetItem from "./components/PetItem";
import PetList from "./components/PetList";
import axios from "axios";

function App() {
  const callAPI = async () => {
    const res = await axios.get(
      "https://pets-react-query-backen.herokuapp.com/pets/"
    );
    console.log(res);
  };

  return (
    <div className="font-mono">
      <Navbar />
      <Routes>
        <Route path="/home" Component={Home} />
        <Route path="/pets" Component={PetList} />
        <Route path="/pets/:petId" Component={PetDetail} />
      </Routes>

      <button onClick={callAPI}>CALL THE API</button>
    </div>
  );
}

export default App;
