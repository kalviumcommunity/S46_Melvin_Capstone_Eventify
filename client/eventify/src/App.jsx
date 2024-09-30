import "./App.css";
import Routes from "./helpers/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <div>
        
        <ToastContainer theme="dark" />
        <Routes />
      </div>
    </>
  );
}

export default App;
