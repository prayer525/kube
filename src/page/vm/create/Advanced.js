import {ReactComponent as BtnClose} from "../../../assets/images/icons/ico-close-square.svg"
import {ReactComponent as IconFileGray} from "../../../assets/images/icons/ico-file-gray.svg"
import {ReactComponent as IconPathfindGray} from "../../../assets/images/icons/ico-pathfind-gray.svg"
import {ReactComponent as IconHexagonGray} from "../../../assets/images/icons/ico-hexagon-gray.svg"
import {ReactComponent as IconInfo} from "../../../assets/images/icons/ico-info-circle-small.svg"
import SelectBox from "../../../components/SelectBox";
import CheckBoxMulti from "../../../components/CheckBoxMulti";

const Advanced = () => {
  const keyPairData = [
    {
      id: 'keypair1',
      name: 'ZSEWR-WERW-SE02 1'
    },{
      id: 'keypair2',
      name: 'ZSEWR-WERW-SE02 2'
    },{
      id: 'keypair3',
      name: 'ZSEWR-WERW-SE02 3'
    },{
      id: 'keypair4',
      name: 'ZSEWR-WERW-SE02 4'
    },{
      id: 'keypair5',
      name: 'ZSEWR-WERW-SE02 5'
    }
  ]

  const securityData = [
    {
      id: 'team1',
      value: 'VBA-1Team 1',
      groupName: 'VBA 1팀 그룹 1',
      ip: '264.351.216.111',
      policy: 'FTP/Telnet/http/ https'
    },{
      id: 'team2',
      value: 'VBA-1Team 2',
      groupName: 'VBA 1팀 그룹 2',
      ip: '264.351.216.222',
      policy: 'FTP/Telnet/http/ https'
    },{
      id: 'team3',
      value: 'VBA-1Team 3',
      groupName: 'VBA 1팀 그룹 3',
      ip: '264.351.216.333',
      policy: 'FTP/Telnet/http/ https'
    },{
      id: 'team4',
      value: 'VBA-1Team 4',
      groupName: 'VBA 1팀 그룹 4',
      ip: '264.351.216.444',
      policy: 'FTP/Telnet/http/ https'
    },{
      id: 'team5',
      value: 'VBA-1Team 5',
      groupName: 'VBA 1팀 그룹 5',
      ip: '264.351.216.555',
      policy: 'FTP/Telnet/http/ https'
    },{
      id: 'team6',
      value: 'VBA-1Team 6',
      groupName: 'VBA 1팀 그룹 6',
      ip: '264.351.216.666',
      policy: 'FTP/Telnet/http/ https'
    }
  ]

  return (<>
    {/*
      If "modal-wrap" has class "scrollable" then "modal-body" will scroll.
      <section className="modal-wrap scrollable">
    */}
    <section className="modal-wrap">
      {/* Start : Modal */}
      <article className="modal">
        {/* Start : Modal Header */}
        <div className="modal-header">
          <h2 className="modal-title">가상 머신 생성</h2>
          <button type="btn-modal-close "><BtnClose /></button>
        </div>
        {/* End : Modal Header */}

        {/* Start : Modal Body */}
        <div className="modal-body">
          {/* Start : Tab */}
          <ul className="progress-card">
            <li className="done">
              <span className="icon"><IconFileGray /></span>
              <p>
                <strong>기본 설정</strong>
                <span>Current</span>
              </p>
            </li>
            <li className="done">
              <span className="icon"><IconPathfindGray /></span>
              <p>
                <strong>네트워크 설정</strong>
                <span>To do</span>
              </p>
            </li>
            <li className="current">
              <span className="icon"><IconHexagonGray /></span>
              <p>
                <strong>세부 설정</strong>
                <span>To do</span>
              </p>
            </li>
          </ul>
          {/* End : Tab */}

          <div className="modal-content">
            <div className="d-flex flex-1 gap-24 align-start">
              {/* Start : Key pair */}
              <div className="content-box">
                <label htmlFor="" aria-required>키 페어</label>

                {/* Start : Single line select-box */}
                <SelectBox data={keyPairData} type="single" />
                {/* End : Single line select-box */}
              </div>
              {/* End : Key pair */}

              {/* Start : Flavor */}
              <div className="content-box">
                <label htmlFor="">보안그룹</label>

                {/* Start : Multi line select-box */}
                <CheckBoxMulti data={securityData} />
                {/* End : Multi line select-box */}
              </div>
              {/* End : Flavor */}
            </div>

            {/* Start : Description */}
            <div className="content-box">
              <label htmlFor="">설명</label>
              <div className="input-byte">
                <input type="text" placeholder="입력해 주세요." />
                <span>0 / 50</span>
              </div>
              <p className="caution">
                <IconInfo />문자, 숫자, 특수기호 입력이 가능합니다. 최대 길이 50자 입니다.
              </p>
            </div>
            {/* End : Description */}
          </div>
        </div>
        {/* End : Modal Body */}

        {/* Start : Modal Footer */}
        <div className="modal-footer">
          <button type="button" className="btn">취소</button>
          <button type="button" className="btn btn-dark">다음</button>
        </div>
        {/* End : Modal Footer */}
      </article>
      {/* End : Modal */}
    </section>
  </>)
}

export default Advanced
