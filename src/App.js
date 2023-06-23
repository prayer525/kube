import './App.scss';
import {Route, Routes} from "react-router-dom";

import Index from "./page/index";
import VMList from "./page/vm/List";
import VMDetailStatus from "./page/vm/detail/Status";
import VMDetailComposition from "./page/vm/detail/Composition";
import VMDetailMonitoring from "./page/vm/detail/Monitoring";
import VMDetailEvent from "./page/vm/detail/Event";

import VMCreateCommonImage from './page/vm/create/CommonImage';
import VMCreateCommonBoot from './page/vm/create/CommonBoot';
import VMCreateNetwork from './page/vm/create/Network';
import VMAdvanced from "./page/vm/create/Advanced";
import VMSummary from "./page/vm/create/Summary";
import VMFip from "./page/vm/create/Fip";

function App() {
  return (
    <Routes>
      <Route>
        <Route index element={<Index />} />
        <Route path="/vm/list" element={<VMList />} />
        <Route path="/vm/detail/status" element={<VMDetailStatus />} />
        <Route path="/vm/detail/composition" element={<VMDetailComposition />} />
        <Route path="/vm/detail/monitoring" element={<VMDetailMonitoring />} />
        <Route path="/vm/detail/event" element={<VMDetailEvent />} />

        <Route path="/vm/create/common-image" element={<VMCreateCommonImage />} />
        <Route path="/vm/create/common-boot" element={<VMCreateCommonBoot />} />
        <Route path="/vm/create/network" element={<VMCreateNetwork />} />
        <Route path="/vm/create/advanced" element={<VMAdvanced />} />
        <Route path="/vm/create/summary" element={<VMSummary />} />
        <Route path="/vm/create/fip" element={<VMFip />} />
      </Route>
    </Routes>
  );
}

export default App;
