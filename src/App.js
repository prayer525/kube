import './App.scss';
import {Route, Routes} from "react-router-dom";

import Index from "./page/index";
import DetailStatus from "./page/vm/detail/Status";
import DetailComposition from "./page/vm/detail/Composition";
import DetailMonitoring from "./page/vm/detail/Monitoring";
import DetailEvent from "./page/vm/detail/Event";

import CreateCommonImage from './page/vm/create/CommonImage'

function App() {
  return (
    <Routes>
      <Route>
        <Route index element={<Index />} />
        <Route path="/vm/detail/status" element={<DetailStatus />} />
        <Route path="/vm/detail/composition" element={<DetailComposition />} />
        <Route path="/vm/detail/monitoring" element={<DetailMonitoring />} />
        <Route path="/vm/detail/event" element={<DetailEvent />} />

        <Route path="/vm/create/common-image" element={<CreateCommonImage />} />
      </Route>
    </Routes>
  );
}

export default App;
