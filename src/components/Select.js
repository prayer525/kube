import {useCallback, useEffect, useState} from "react";

const Select = (props) => {
  const [showFlag, setShowFlag] = useState(false)
  const [selectValue, setSelectValue] = useState('')
  const [childrenList, setChildrenList] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [randomName, setRandomName] = useState('')


  const fnSetValue = ($item) => {
    setSelectValue($item.props.children)

    if(props.onChange) {
      props.onChange($item.props.value)
    }
  }

  const fnShowFlag = () => {
    if(!disabled) {
      setShowFlag(!showFlag)
    }
  }

  const fnToggleFlag = () => {
    if(!event.target.closest(".form-select")) {
      setShowFlag(false)
    }
  }

  const fnCreateList = useCallback(() => {
    if (randomName !== '') return (<ul className="item-list">
      {
        childrenList.map((item, index) => {
          const randomId = self.crypto.randomUUID()

          return (
            <li key={randomId}>
              <input type="radio" value={item.props.value} name={randomName} id={randomId} onChange={() => {fnSetValue(item); fnShowFlag() }} />
              <label htmlFor={randomId}>{item.props.children}</label>
            </li>
          )
        })
      }
    </ul>)
  }, [childrenList])

  useEffect(() => {
    if(props.children) {
      setChildrenList(props.children)
    }

    if(props.disabled) {
      setDisabled(true)
    }

    const fnSetRandomName = () => {
      const value = self.crypto.randomUUID();

      setRandomName(value)
    }

    fnSetRandomName()
  }, [])

  useEffect(() => {
    childrenList.map((item) => {
      if(item.props.value == props.value) setSelectValue(item.props.children)
    })
  }, [childrenList])

  useEffect(() => {
    window.addEventListener('click', fnToggleFlag, false)

    return () => {
      window.removeEventListener('click', fnToggleFlag)
    }
  }, [randomName])

  return (
    <div className="form-select">
      <div className={`selected-item ${showFlag ? 'active' : ''} ${disabled ? 'disabled' : ''}`} onClick={fnShowFlag}>
        <p>{ selectValue }</p>
      </div>

      {fnCreateList()}
    </div>
  )
}

export default Select