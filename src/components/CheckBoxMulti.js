import {useEffect, useState} from "react";

import {ReactComponent as IconUbuntu} from "../assets/images/icons/ico-ubuntu.svg"

const CheckBoxMulti = (props) => {
  const [direction, setDirection] = useState('')
  const [type, setType] = useState('')
  const [showFlag, setShowFlag] = useState(false)
  const [itemList, setItemList] = useState([])
  const [selectedList, setSelectedList] = useState([])


  const fnToggleFlag = () => {
    if(!event.target.closest('.selected-item')) {
      setShowFlag(false)
    }
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
  return (
    <div className="select-list-box">
      <div className={`selected-item single ${showFlag ? 'active' :''} ${direction}`} onClick={() => setShowFlag(!showFlag)}>
        <p>
          {
            selectedList.map((item) => {
              <strong>{ item.name }</strong>
            })
          }
        </p>
      </div>

      <ul className="checkbox-list scroll-gray">
        {
          itemList.map((item) => (
            <li
              key={item.id}
              onClick={() => setSelectedItem(item)}
            >
              <div className="form-check">
                <input type="checkbox" id={item.id} />
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
    </div>
  )
}

export default CheckBoxMulti
