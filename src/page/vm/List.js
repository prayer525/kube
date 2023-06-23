import { ReactComponent as IconPageTitle } from '../../assets/images/icons/ico-page-title.svg';

const List = () => {
  return (<>
    <div style={{background: '#eff4f9', padding: '20px', minHeight: '100vh'}}>
      <h1 className="h1-page-title">
        <IconPageTitle />가상머신
      </h1>

      <div className="search-area">
        <fieldset>
          <legend>목록 검색</legend>
          <div className="form-select">
            <div className="selected-data"></div>
          </div>
        </fieldset>
      </div>
    </div>
  </>)
}

export default List
