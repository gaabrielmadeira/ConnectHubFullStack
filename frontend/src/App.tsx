import { RoutesMain } from "./routes/routesMain";
import { GlobalStyles } from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";
import { GlobalReset } from "./styles/reset";
import { ToastContainer } from "react-toastify";

function App() {

  return (
   <>
    <GlobalStyles />
    <GlobalReset />
    <RoutesMain/>
    <ToastContainer/>
   </>
  )
}

export default App;
