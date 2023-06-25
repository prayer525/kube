import { ReactComponent as IconDotMenu } from '../assets/images/icons/ico-dot-menu.svg';
import { ReactComponent as IconQuickStart } from '../assets/images/icons/ico-quick-start.svg';
import { ReactComponent as IconQuickRestart } from '../assets/images/icons/ico-quick-restart.svg';
import { ReactComponent as IconQuickPause } from '../assets/images/icons/ico-quick-pause.svg';
import { ReactComponent as IconQuickStop } from '../assets/images/icons/ico-quick-stop.svg';
import { ReactComponent as IconQuickTrash } from '../assets/images/icons/ico-quick-trash.svg';
import {useEffect, useState} from "react";

const TableQuickMenu = () => {
  const [showFlag, setShowFlag] = useState(false)

  const fnToggleFlag = (e) => {
    if (!event.target.closest('button')) {
      setShowFlag(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', fnToggleFlag, false)

    return () => {
      window.removeEventListener('click', fnToggleFlag)
    }
  }, [])
  return (
    <div className="table-quick-menu">
      <button
        type="button"
        className={`${showFlag ? 'active' : ''}`}
        onClick={() => setShowFlag(!showFlag)}
      ><IconDotMenu /></button>
      <ul className="quick-menu-list">
        <li onClick={() => setShowFlag(false)}><i><IconQuickStart /></i><span>시작</span></li>
        <li onClick={() => setShowFlag(false)}><i><IconQuickRestart /></i><span>재시작</span></li>
        <li onClick={() => setShowFlag(false)}><i><IconQuickPause /></i><span>일시중지</span></li>
        <li onClick={() => setShowFlag(false)}><i><IconQuickStop /></i><span>중지</span></li>
        <li onClick={() => setShowFlag(false)}><i><IconQuickTrash /></i><span>삭제</span></li>
      </ul>
    </div>
  )
}

export default TableQuickMenu