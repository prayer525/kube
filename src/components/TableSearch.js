import SelectBox from "./SelectBox";

import { ReactComponent as IconSearch } from '../assets/images/icons/ico-search-small.svg';
import { ReactComponent as IconClose } from '../assets/images/icons/ico-close-xsmall.svg';
import { ReactComponent as IconRefresh } from '../assets/images/icons/ico-refresh.svg';
import { ReactComponent as IconGear } from '../assets/images/icons/ico-gear.svg';

const TableSearch = () => {
  const searchTypeData = [
    {
      id: 'searchtype1',
      name: '이름',
    },{
      id: 'searchtype2',
      name: '이미지',
    },{
      id: 'searchtype3',
      name: 'Flavor',
    }
  ];

  return (
    <div className="search-area">
      <fieldset>
        <legend>목록 검색</legend>
        <SelectBox data={searchTypeData} type="single" className="form-select" />

        <div className="form-search">
          <span><IconSearch /></span>
          <input type="text" placeholder="Search" />
          <button type="button"><IconClose /></button>
        </div>

        <button type="button"><IconRefresh /></button>
        <button type="button"><IconGear /></button>

        <button type="button" className="btn btn-control">생성</button>
      </fieldset>

      <div className="checkbox-control">
        <button type="button" className="btn btn-cancel">삭제</button>
        <button type="button" className="btn text-white">선택해제</button>
      </div>
    </div>
  )
}

export default TableSearch