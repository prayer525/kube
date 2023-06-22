import {createRef, useEffect, useRef, useState} from "react";

import {ReactComponent as IconClose} from "../assets/images/icons/ico-close-small.svg"

const CheckBoxMulti = (props) => {
  const [direction, setDirection] = useState('')
  const [type, setType] = useState('')
  const [showFlag, setShowFlag] = useState(false)
  const [itemList, setItemList] = useState([])
  const [selectedList, setSelectedList] = useState({})

  const checkboxRef = useRef([]);

  const fnToggleFlag = () => {
    if(!event.target.closest('.selected-item') && !event.target.closest('.checkbox-list')) {
      setShowFlag(false)
    }
  }

  const onChange = (e, item) => {
    if(e.target.checked) {
      const obj = {}

      obj[item.id] = item.value

      setSelectedList({...selectedList, ...obj})
    } else {
      const obj = {...selectedList}

      delete obj[item.id]

      setSelectedList({...obj})
    }
  }

  const fnTriggerClick = ($id) => {
    Object.entries(checkboxRef.current).map((value, index) => {
      if(value[0] === $id) {
        value[1].click()
      }
    })
  }

  useEffect(() => {
    if(props.data) {
      setItemList(props.data)
    }

    if(props.direction) {
      setDirection(props.direction)
    }

    if(props.type) {
      setType(props.type)
    }

    window.addEventListener('click', fnToggleFlag, false)

    return () => {
      window.removeEventListener('click', fnToggleFlag)
    }
  }, [props])

  useEffect(() => {

    console.log('selectedList : ' , selectedList)
  }, [selectedList])
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
                <input type="checkbox" id={item.id} ref={(el) => (checkboxRef.current[item.id] = el)} onChange={(e) => onChange(e, item)} />
                <label htmlFor={item.id}>
                  <strong>{ item.value }</strong>
                  <p>
                    <strong>{ item.groupName }</strong>
                    <span>
                      <em>ip</em>
                      <strong>{ item.ip }</strong>
                    </span>
                    <span>
                      <em>정책</em>
                      <strong>{ item.policy }</strong>
                    </span>
                  </p>
                </label>
              </div>
            </li>
          ))
        }
      </ul>

      <div className="badge-item-wrap mt-4">
        <ul className="badge-item-list">
          {
            Object.entries(selectedList).map((item,  index) => (
              <li key={`badge-${item[0]}`}>
                <span>{item[1]}</span>
                <button type="button" onClick={() => fnTriggerClick(item[0])}><IconClose /></button>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default CheckBoxMulti
