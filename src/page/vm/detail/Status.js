import { ReactComponent as IconInfo } from '../../../assets/images/icons/ico-info-circle.svg';
import { ReactComponent as IconCalendar } from '../../../assets/images/icons/ico-calendar.svg';
import { ReactComponent as IconSearch } from '../../../assets/images/icons/ico-search.svg';
import { ReactComponent as IconPathfind } from '../../../assets/images/icons/ico-pathfind.svg';

import { ReactComponent as IconServer } from '../../../assets/images/icons/ico-server.svg';
import { ReactComponent as IconPieChart } from '../../../assets/images/icons/ico-pie-chart.svg';
import { ReactComponent as IconCode } from '../../../assets/images/icons/ico-code.svg';
import { ReactComponent as IconList } from '../../../assets/images/icons/ico-list.svg';
import { ReactComponent as IconDownload } from '../../../assets/images/icons/ico-download.svg';
import { ReactComponent as IconTrash } from '../../../assets/images/icons/ico-trash.svg';

const Status = () => {
  return (<>
    <div style={{background: '#eff4f9', padding: '20px', minHeight: '100vh'}}>
      <div className="vm-detail-wrap">
        {/* Start : Left Detail */}
        <div className="box-radius">

          {/* Start : Detail header */}
          <div className="vm-detail-header">
            <button type="button" className="btn-arrow-back">돌아가기</button>

            <h2 className="h2-bullet-home">project02-44444444444444444</h2>

            <div className="btn-group">
              <button type="button" className="btn btn-dark">정보편집</button>

              <div className="select-wrap">
                <button type="button" className="btn">More ▾</button>

                <ul className="list-select-option">
                  <li><i><IconServer /></i><span>VNC 접속</span></li>
                  <li><i><IconPieChart /></i><span>FIP 할당</span></li>
                  <li><i><IconCode /></i><span>YAML 보기</span></li>
                  <li><i><IconList /></i><span>Console 로그</span></li>
                  <li><i><IconDownload /></i><span>마이그레이션</span></li>
                  <li><i><IconTrash /></i><span>삭제</span></li>
                </ul>
              </div>
            </div>
          </div>
          {/* End : Detail header */}

          {/* Start : Detail body */}
          <div className="vm-detail-body">
            <h2 className="h2-default">상세정보</h2>

            <table className="tbl-noline">
              <caption>상세정보</caption>
              <colgroup>
                <col style={{width: '120px'}} />
                <col style={{width: 'auto'}} />
              </colgroup>
              <tbody>
              <tr>
                <th>이미지</th>
                <td><p>Linux 2023 AMI 2023</p></td>
              </tr>
              <tr>
                <th>클러스터</th>
                <td><p>클러스터</p></td>
              </tr>
              <tr>
                <th>이미지</th>
                <td><p>Ubuntu 20.04</p></td>
              </tr>
              <tr>
                <th>Flavor</th>
                <td><p>Flavro2_Base * 1</p></td>
              </tr>
              <tr>
                <th>네트워크</th>
                <td>
                  <p>INT 64 FLAT/라우터</p>
                  <div className="d-flex"><strong>기본 경로</strong><span>10.10.10.0</span></div>
                  <div className="d-flex"><strong>Gateway IP</strong><span>192.168.62.0/24</span></div>
                </td>
              </tr>
              <tr>
                <th>SR-IOV 네트워크</th>
                <td>
                  <p>KubevirtwobevirtwbevirtwbevirtwbevirtKubevirtwobevirtwbevirtwbevirtwbevirt…</p>
                  <div className="d-flex"><strong>기본 경로</strong><span>10.10.10.0</span></div>
                  <div className="d-flex"><strong>Gateway IP</strong><span>192.168.62.0/24</span></div>
                </td>
              </tr>
              <tr>
                <th>키 페어</th>
                <td><p>ZSEWR-WERW-SE02</p></td>
              </tr>
              <tr>
                <th>Load Balancer</th>
                <td><p>234342</p></td>
              </tr>
              <tr>
                <th>보안그룹</th>
                <td><p>VBA-1Team</p></td>
              </tr>
              <tr>
                <th>설명</th>
                <td><p>1C004F에 의한 생성</p></td>
              </tr>
              </tbody>
            </table>
          </div>
          {/* End : Detail body */}
        </div>
        {/* End : Left Detail */}

        {/* Start : Right Status */}
        <section>
          {/* Start : TAb Button */}
          <ul className="tab-type-basic">
            <li><input type="radio" name="tab" id="tab1" checked="true" /><label htmlFor="tab1">상태</label></li>
            <li><input type="radio" name="tab" id="tab2" /><label htmlFor="tab2">구성정보</label></li>
            <li><input type="radio" name="tab" id="tab3" /><label htmlFor="tab3">모니터링</label></li>
            <li><input type="radio" name="tab" id="tab4" /><label htmlFor="tab4">이벤트</label></li>
          </ul>
          {/* End : TAb Button */}

          {/* Start : Tab content */}
          <div className="tab-content">
            <div className="box-radius p-12 mb-12">
              <div className="box-radius bg-darkgray">
                <ul className="status-list p-12">
                  <li>
                    <i className="icon"><IconInfo /></i>
                    <div>
                      {/*
                        className : normal, warning, error
                      */}
                      <strong className="normal">Running</strong>
                      <span>상태</span>
                    </div>
                  </li>
                  <li>
                    <i className="icon"><IconCalendar /></i>
                    <div>
                      <strong>2023-05-29 09:00:00</strong>
                      <span>생성일</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Start : Flavor */}
            <h2 className="h2-default">Flavor</h2>

            <div className="box-radius p-12 mb-12">
              <div className="box-radius bg-lightgray none-shadow p-12">
                <div className="box-radius box-line none-shadow">
                  <ul className="status-list p-12">
                    <li>
                      <i className="icon lg"><IconSearch /></i>
                      <div>
                        <strong>Flavro2_Base * 1</strong>
                        <span>CPU 1vCore, Memory</span>
                        <span>32GB, Disk 1</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End : Flavor */}

            {/* Start : 보안그룹 */}
            <h2 className="h2-default">Flavor</h2>

            <div className="box-radius p-12 mb-12">
              <div className="box-radius bg-lightgray none-shadow p-12">
                <div className="box-radius box-line none-shadow">
                  <ul className="status-list p-12">
                    <li>
                      <i className="icon lg"><IconPathfind /></i>
                      <div>
                        <strong>DF-3Team</strong>
                        <span>DF 3팀 보안그룹</span>
                        <span>10.10.10.06</span>
                        <span>FTP/ Telnet/http/ https</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End : 보안그룹 */}
          </div>
          {/* End : Tab content */}
        </section>
        {/* End : Right Status */}
      </div>
    </div>
  </>)
}

export default Status
