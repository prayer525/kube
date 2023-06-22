import {ReactComponent as BtnClose} from "../../../assets/images/icons/ico-close-square.svg"
import {ReactComponent as IconFileGray} from "../../../assets/images/icons/ico-file-gray.svg"
import {ReactComponent as IconPathfindGray} from "../../../assets/images/icons/ico-pathfind-gray.svg"
import {ReactComponent as IconHexagonGray} from "../../../assets/images/icons/ico-hexagon-gray.svg"
import {ReactComponent as IconInfo} from "../../../assets/images/icons/ico-info-circle-small.svg"
import SelectBox from "../../../components/SelectBox";
import CheckBoxMulti from "../../../components/CheckBoxMulti";
import {useState} from "react";

const Advanced = () => {
  const sampleText = `#cloud-config
password: centos
chpasswd:  {expire: False}
ssh_pwauth: True`

  const [text, setText] = useState(sampleText)
  const [selectRadio, setSelectRadio] = useState(1)

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

  const nodeData = [
    {
      id: 'nodeData1',
      name: '자동 스케줄링 1'
    },{
      id: 'nodeData2',
      name: '스케줄링 2'
    },{
      id: 'nodeData3',
      name: 'ZSEWR-WERW-SE02 3'
    },{
      id: 'nodeData4',
      name: 'ZSEWR-WERW-SE02 4'
    },{
      id: 'nodeData5',
      name: 'ZSEWR-WERW-SE02 5'
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

            <div className="d-flex flex-1 gap-24 align-start">
              {/* Start : Node */}
              <div className="content-box">
                <label htmlFor="">노드</label>

                  {/* Start : Single line select-box */}
                  <SelectBox data={nodeData} type="single" />
                  {/* End : Single line select-box */}
              </div>
              {/* End : Nod */}
              <div></div>
            </div>

            {/* Start : Script */}
            <div className="content-box">
              <label htmlFor="">스크립트</label>

              <div className="script-box">
                <ul className="select-radio">
                  <li>
                    <input type="radio" name="script-type" id="script-type-1" checked={selectRadio===1} onChange={() => setSelectRadio(1)} />
                    <label htmlFor="script-type-1">Password</label>
                  </li>
                  <li>
                    <input type="radio" name="script-type" id="script-type-2" checked={selectRadio===2} onChange={() => setSelectRadio(2)} />
                    <label htmlFor="script-type-2">Run command</label>
                  </li>
                  <li>
                    <input type="radio" name="script-type" id="script-type-3" checked={selectRadio===3} onChange={() => setSelectRadio(3)} />
                    <label htmlFor="script-type-3">사용자 정의</label>
                  </li>
                </ul>

                <textarea name="" id="" value={ text } onChange={(e) => setText(e.target.value)}></textarea>
              </div>
            </div>
            {/* End : Script */}

            {/* Start : User name */}
            <div className="content-box m-0">
              <label htmlFor="">유저네임</label>
              <div className="input-byte">
                <input type="text" placeholder="입력해 주세요." />
                <span>0 / 50</span>
              </div>
              <p className="caution">
                <IconInfo />문자, 숫자, 특수기호 입력이 가능합니다. 최대 길이 50자 입니다.
              </p>
            </div>
            {/* End : User name */}
          </div>
        </div>
        {/* End : Modal Body */}

        {/* Start : Modal Footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-default">취소</button>
          <button type="button" className="btn btn-default">이전</button>
          <button type="button" className="btn btn-control">다음</button>
        </div>
        {/* End : Modal Footer */}
      </article>
      {/* End : Modal */}
    </section>
  </>)
}

export default Advanced
