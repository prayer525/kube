import {useState} from "react";

import { ReactComponent as IconArrowLeft } from '../assets/images/icons/ico-arrow-long-left.svg';
import { ReactComponent as IconArrowRight } from '../assets/images/icons/ico-arrow-long-right.svg';

const TableControl = () => {
  const [selectFlag, setSelectFlag] = useState(false);

  return (
    <div className="tbl-control">
      <div className="page">
        <div className={`view-count ${selectFlag ? 'active' : ''}`} onClick={() => setSelectFlag(!selectFlag)}>
          Show: <span>10</span>

          <ul className="top-down">
            <li>10</li>
            <li>20</li>
            <li>30</li>
          </ul>
        </div>
        |
        <p>Total: 2</p>
      </div>
      <div className="navigation">
        <button type="button"><IconArrowLeft /></button>
        <span>1/1</span>
        <button type="button"><IconArrowRight /></button>
      </div>
    </div>
  )
}

export default TableControl