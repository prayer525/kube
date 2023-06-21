import {useEffect, useState} from "react";

import {ReactComponent as IconUbuntu} from "../assets/images/icons/ico-ubuntu.svg"

const SelectBox = (props) => {
  const [direction, setDirection] = useState('')
  const [type, setType] = useState('')
  const [showFlag, setShowFlag] = useState(false)
  const [itemList, setItemList] = useState([])
  const [selectedItem, setSelectedItem] = useState({})

  const fnToggleFlag = () => {
    if(!event.target.closest('.selected-item')) {
      setShowFlag(false)
    }
  }

  useEffect(() => {
    if(props.data) {
      setItemList(props.data)
      setSelectedItem(props.data[0])
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
      <div className={`selected-item ${showFlag ? 'active' :''} ${direction} ${type}`} onClick={() => setShowFlag(!showFlag)}>
        {
          selectedItem.icon ? <i className="icon"><IconUbuntu /></i> : <></>
        }
        <p>
          <strong>{ selectedItem.name }</strong>
          {
            type === '' ? <span>{ selectedItem.desc }</span> : <></>
          }
        </p>
      </div>

      <ul className="select-list scroll-gray">
        {
          itemList.map((item) => (
            <li
              key={item.id}
              className={selectedItem.id === item.id ? 'selected' : ''}
              onClick={() => setSelectedItem(item)}
            >
              {
                item.icon ? <i className="icon"><IconUbuntu /></i> : <></>
              }
              <p>
                <strong>{ item.name }</strong>
                {
                  type === '' ? <span>{ item.desc }</span> : <></>
                }
              </p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SelectBox
