import './App.css';
import VMDetail from "./page/VMDetail";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/vm-detail" element={<VMDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
