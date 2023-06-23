import {createRef, useEffect, useRef, useState} from "react";

import {ReactComponent as IconClose} from "../assets/images/icons/ico-close-small.svg"

const CheckBoxFip = (props) => {
  const [direction, setDirection] = useState('')
  const [showFlag, setShowFlag] = useState(false)
  const [itemList, setItemList] = useState([])
  const [selectedList, setSelectedList] = useState({})

  const fnToggleFlag = () => {
    if(!event.target.closest('.selected-item') && !event.target.closest('.checkbox-list')) {
      setShowFlag(false)
    }
  }

  const onChange = (e, item) => {
    if(e.target.checked) {
      const obj = {}

      obj[item.id] = item.address

      setSelectedList({...selectedList, ...obj})
    } else {
      const obj = {...selectedList}

      delete obj[item.id]

      setSelectedList({...obj})
    }
  }

  useEffect(() => {
    if(props.data) {
      setItemList(props.data)
    }

    if(props.direction) {
      setDirection(props.direction)
    }

    window.addEventListener('click', fnToggleFlag, false)

    return () => {
      window.removeEventListener('click', fnToggleFlag)
    }
  }, [props])
  return (
    <div className="select-list-box">
      <div className={`selected-item single multi ${showFlag ? 'active' :''} ${direction}`} onClick={() => setShowFlag(!showFlag)}>
        <p>
          {
            Object.entries(selectedList).map((item,  index) => (
              <strong key={item[0]}>{item[1]}</strong>
            ))
          }
        </p>
      </div>

      <ul className="checkbox-list scroll-gray">
        {
          itemList.map((item, index) => (
            <li
              key={item.id}
            >
              <div className="form-check w-100">
                <input type="checkbox" id={item.id} onChange={(e) => onChange(e, item)} />
                <label htmlFor={item.id}>
                  <strong>{ item.address }</strong>
                  <p>{item.securityKey}</p>
                </label>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CheckBoxFip
