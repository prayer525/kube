import './App.scss';
import {Route, Routes} from "react-router-dom";

import Index from "./page/index";
import Status from "./page/vm/detail/Status";
import Composition from "./page/vm/detail/Composition";
import Monitoring from "./page/vm/detail/Monitoring";
import Event from "./page/vm/detail/Event";

function App() {
  return (
    <Routes>
      <Route>
        <Route index element={<Index />} />
        <Route path="/vm/detail/status" element={<Status />} />
        <Route path="/vm/detail/composition" element={<Composition />} />
        <Route path="/vm/detail/monitoring" element={<Monitoring />} />
        <Route path="/vm/detail/event" element={<Event />} />
      </Route>
    </Routes>
  );
}

export default App;
